pipeline {
    
    agent any
    tools {nodejs 'Node'}
    stages {
            stage('Unit Tests') {
            steps {
                script {
                        sh 'npm config ls'
                        sh 'cd client/ && npm install'
                        //sh cd ..
                        sh 'cd server/ && npm install && npm install pm2@latest -g'
                }
            }
            }
    }
            stage('Building') {
                steps {
                    script {
                       
                        always {
                            sh 'npm run build'
                         
                        }
                    }
                }
        }
