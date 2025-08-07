pipeline {
    agent any

    tools {
        nodejs "Node24"
        dockerTool "Dockertool" 
    }
    
    triggers {
        // Polls the SCM every 2 minutes
        pollSCM('*/2 * * * *')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install' 
            }
        }
        
        stage('Ejecutar Tests') {
            steps {
                sh 'chmod +x ./node_modules/.bin/jest'
                sh 'npm test -- --ci --runInBand'
            }
        }
 
        stage('Build Docker image') {
            steps {
                sh 'docker build -t school-cafeteria-api .'
            }
        }

        st
    }
}