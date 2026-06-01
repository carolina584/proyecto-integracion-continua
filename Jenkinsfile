/**
 * ======================================================
 * 🚀 PIPELINE DE INTEGRACIÓN CONTINUA - NOTEFLOW
 * ======================================================
 * Este pipeline automatiza:
 * - Clonado del repositorio
 * - Construcción de contenedores Docker
 * - Despliegue del sistema
 * ======================================================
 */

pipeline {

    // Ejecuta en cualquier agente disponible
    agent any

    stages {

        /**
         * 📥 ETAPA 1: CLONAR REPOSITORIO
         */
        stage('Clonar repositorio') {
            steps {
               git branch: 'main', url: 'https://github.com/carolina584/proyecto-integracion-continua.git'
            }
        }

        /**
         * 🐳 ETAPA 2: CONSTRUIR CONTENEDORES
         */
        stage('Build Docker') {
            steps {
                sh 'docker compose build'
            }
        }

        /**
         * 🚀 ETAPA 3: DESPLEGAR SERVICIOS
         */
        stage('Deploy') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }

    /**
     * 📊 RESULTADO FINAL DEL PIPELINE
     */
    post {
        success {
            echo '✅ Pipeline ejecutado correctamente'
        }
        failure {
            echo '❌ Error en el pipeline'
        }
    }
}