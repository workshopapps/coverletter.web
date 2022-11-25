pipeline {
    environment {
        registryFrontend = 'leemang/team-chisel-frontend'
        registryBackend = 'leemang/team-chisel-backend'
        registryCredential = 'dockerhub'
        dockerImageFrontend = ''
        dockerImageBackend = ''
    }
    agent any
    tools { nodejs 'Node' }
    stages {
            stage('Unit Tests') {
            steps {
                script {
                        sh 'cd client/ && npm install --verbose'
                        //sh 'cd ..'
                        sh 'cd server/ && npm install --verbose'
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
                        sh 'docker-compose up -d'                        }
        }
    }
}
