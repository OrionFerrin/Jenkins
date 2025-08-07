pipeline {
    agent any
 
 tools {
        nodejs "Node24"
        dockerTool "Dockertool" 
    }

 stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
    stages {
        stage('Setup') {
            steps {
                script {
                    echo 'Setting up Node.js environment...'
                    // Install Node.js if using nvm
                    nodejs(nodeVersion: env.NODE_VERSION) {
                        sh 'node --version'
                    }
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo 'Building the Coffee Shop App...'
                    sh 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'npm run test'
                    // Archive test results
                    junit '**/test-results.xml'
                }
            }
        }

        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                script {
                    echo 'Deploying the Coffee Shop App...'
                    // Add deployment steps here
                }
            }
        }
    }

    post {
        success {
            echo 'All stages completed successfully!'
        }
        failure {
            echo 'Pipeline failed! Check the logs for details.'
        }
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
    }
}