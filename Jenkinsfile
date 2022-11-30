pipeline {
    
    agent any
    tools {nodejs 'Node'}
    stages {
            stage('Unit Tests') {
            steps {
                script {
              
                        sh 'cd client/ && npm install'
                        //sh cd ..
                        sh 'cd server/ && npm install pm2@latest -g'
                }
            }
            }
    }
            stage('Building') {
                steps {
                    script {
                       
                        always {
                            sh 'pm2 start --name server app.js'
                            sh 'npm run build'
                         
                        }
                    }
                }
        }
