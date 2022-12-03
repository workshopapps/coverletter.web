// Build a pipeline that builds a react and node app with connection to a database and deploys to a server 
// This pipeline is for a react app that uses a node server and a database

pipeline {
    agent any
    stages {
        // Build the react app
        stage('Build Frontend') {
            steps {
                echo 'Building...'

                dir('client') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
        // Build the node app
        // stage('Test') {
        //     steps {
        //         echo 'Testing...'
        //         sh 'npm test'
        //     }
        // }

        //
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                dir('client') {
                    //sh "sudo pm2 serve -s build --port 2030 --name coverlyfronent --spa"
                }
            }
        }
    }
}


// pipeline {
    
//     agent any
//     stages {
//             stage('Build Frontend') {
//             steps {
//                 script {
              
//                         sh 'cd client && npm install'
//                         //sh cd ..
//                         sh 'cd server/ && npm install pm2@latest -g'
//                 }
//             }
//             }
//     }
//             stage('Building') {
//                 steps {
//                     script {
                       
//                         always {
//                             sh 'pm2 start --name server app.js'
//                             sh 'npm run build'
                         
//                         }
//                     }
//                 }
//         }
// }