pipeline{
    agent any
    tools{
        nodejs "node"
    }
    
    stages{
        stage('Start'){
            steps{
                echo 'build has started'
            }
        }
        stage('clone repository from github'){
            steps{
                git url: '', branch: 'master'
            }
        }
         
    }

}
