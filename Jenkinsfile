pipeline {
    environment {
        registryFrontend = 'leemang/team-chisel-frontend'
        registryBackend = 'leemang/team-chisel-backend'
        registryCredential = 'dockerhub'
        dockerImageFrontend = ''
        dockerImageBackend = ''
    }
    agent any
    tools {nodejs 'Node'}
    stages {
            stage('Unit Tests') {
            steps {
                script {
                        sh 'npm config ls'
                        sh 'cd client/ && npm install --verbose'
                        //sh 'cd ..'
                        sh 'cd server/ && npm install --verbose'
                }
            }
            }
        stage('Setting Enviroment Variables') {
            steps {
                script {
                    env. GOOGLE_CLIENT_ID = "55786759606-5d4a3tajvph8a153kcuksk0b800urrva.apps.googleusercontent.com"
                    env. GOOGLE_CLIENT_SECRETS = "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"
            }
            }
        }
        stage('Building Docker Image') {
                steps {
                    script {
                        /* remove all container */
                        always {
                            sh 'docker stop $(docker ps -a -q)'
                            sh 'docker rm $(docker ps -q)'
                        }
                        dir('client') {
                        dockerImageFrontend = docker.build registryFrontend + ':latest'
                        }
                        dir('server') {
                        dockerImageBackend = docker.build registryBackend + ':latest'
                        }
                    }
                }
        }
            stage('Deploying Docker Image to Dockerhub') {
                steps {
                    script {
                        docker.withRegistry('https://registry.hub.docker.com', registryCredential) {
                        dockerImageFrontend.push()
                        dockerImageBackend.push()
                        }
                    }
                }
            }
        stage('Deploying') {
                steps {
                        sh 'docker-compose up --build -d'                        }
        }
    }
}
