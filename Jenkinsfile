pipeline {
  agent any
  environment {
    CI = 'true'
    ALLURE_RESULTS = 'allure-results'
    ALLURE_REPORT = 'allure-report'
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        script {
          if (isUnix()) {
            sh 'npm ci'
          } else {
            bat 'npm ci'
          }
        }
      }
    }

    stage('Run Tests') {
      steps {
        script {
          // Try an Allure-specific npm script, fallback to npm test, then to direct Playwright run
          if (isUnix()) {
            sh 'npm run test:allure || npm run smokeTest || npx playwright test'
          } else {
            bat 'npm run test:allure || npm run smokeTest || npx playwright test'
          }
        }
      }
    }

    stage('Generate Allure Report') {
      steps {
        script {
          if (isUnix()) {
            sh 'npx allure-commandline generate ${ALLURE_RESULTS} -o ${ALLURE_REPORT} --clean || true'
          } else {
            bat 'npx allure-commandline generate %ALLURE_RESULTS% -o %ALLURE_REPORT% --clean || true'
          }
        }
      }
    }

    stage('Publish Allure Report') {
      steps {
        // Uses the Jenkins Allure plugin if installed; otherwise the artifact will still be archived
        script {
          try {
            allure results: [[path: env.ALLURE_RESULTS]]
          } catch (err) {
            echo "Allure plugin not available: ${err}"
          }
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true
      archiveArtifacts artifacts: 'allure-results/**', allowEmptyArchive: true
    }
    failure {
      echo 'Build failed — check test output and allure-results for details.'
    }
  }
}
