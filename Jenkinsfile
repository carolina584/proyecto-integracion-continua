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
                sh '''
                docker stop noteflow-container || true
                docker rm noteflow-container || true
                docker run -d -p 3001:3000 --name noteflow-container noteflow-api
                '''
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