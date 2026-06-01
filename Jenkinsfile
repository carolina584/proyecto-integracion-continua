pipeline {

    agent any

    stages {

        stage('Build Docker') {
            steps {
                sh 'docker build -t noteflow-api ./api'
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker run -d -p 3001:3000 noteflow-api || true'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline ejecutado correctamente'
        }
        failure {
            echo '❌ Error en el pipeline'
        }
    }
}