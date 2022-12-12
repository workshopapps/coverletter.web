// Build a pipeline that builds a react and node app with connection to a database and deploys to a server 
// This pipeline is for a react app that uses a node server and a database

pipeline {

	agent any

	stages {

        stage("Get repo"){

			steps {
				sh "rm -rf ${WORKSPACE}/coverletter.web"
				sh "sudo rm -rf /home/jerryg/coverletter/coverletter.web"
				sh "git clone https://github.com/workshopapps/coverletter.web.git"
				sh "sudo cp -r ${WORKSPACE}/coverletter.web /home/jerryg/coverletter/coverletter.web"
			}

		}

		stage("build frontend"){

			steps {
				
				sh "cd coverletter.web/client && npm i && CI=false npm run build"
			}
        }

		stage("deploy frontend") {
		
			steps {
                sh "sudo cp -rf ${WORKSPACE}/coverletter.web/client/build/* /home/jerryg/coverletter/coverletter.web/client"
                sh "pm2 serve build 2035 --spa"

	
            }
			
	    }
        stage("build backend"){

			steps {
				sh "cd coverletter.web/server && npm i "
				sh "ls -la"
			}
        }

		stage("deploy backend") {
		
			steps {
                sh "sudo cp -rf ${WORKSPACE}/coverletter.web/server /home/jerryg/coverletter/coverletter.web/server"
				sh "sudo cp -r /home/jerryg/coverletter_env/app.env /home/jerryg/coverletter/coverletter.web/server/.env"
				sh "pm2 start app.js"
            }
	    }

	}

	post{
        failure{
            emailext attachLog: true, 
            to: 'jjgathu17@gmail.com',
            subject: '${BUILD_TAG} Build failed',
            body: '${BUILD_TAG} Build Failed \nMore Info can be found here: ${BUILD_URL} or in the log file below'
        }
    }
}
