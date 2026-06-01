pipeline {

    agent any

    stages {

        /**
         * 🐳 ETAPA 1: CONSTRUIR CONTENEDORES
         */
        stage('Build Docker') {
            steps {
                sh 'docker compose build'
            }
        }

        /**
         * 🚀 ETAPA 2: DESPLEGAR SERVICIOS
         */
        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
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