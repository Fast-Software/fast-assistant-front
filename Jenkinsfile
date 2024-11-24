pipeline {
    agent any
    tools {
        nodejs "node 23.3.0"
    }

    stages {
        stage('Cehckout') {
            steps {
                echo 'Cehckouting..'
                checkout([$class: 'GitSCM', branches: [name: '*/main'], userRemoteConfigs: [[url: 'https://github.com/Fast-Software/fast-assistant-front.git']]])
            }

            stage('Build') {
                steps {
                    echo 'Building..'
                    sh 'npm install'
                    sh 'npm run build'
                }
            }

            stage('Run Unit Tests') {
                steps {
                    echo 'Testing..'
                    sh 'npm run test'
                }
            }
        }
    }
}