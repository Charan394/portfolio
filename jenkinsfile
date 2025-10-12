pipeline {
    agent { label "slave" }

    stages {
        stage('Build') {
            steps {
              
                sh 'echo "Build triggered on branch: $GIT_BRANCH"'
                sh 'ls -la'
              
            }
        }
    }
}
