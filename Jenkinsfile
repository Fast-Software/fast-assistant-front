pipeline {
    agent any
    tools {
        nodejs "Node 23.3.0"
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out...'
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: 'https://github.com/Fast-Software/fast-assistant-front.git']]])
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo 'Running Unit Tests...'
                sh 'npm run test'
            }
        }
    }
}
