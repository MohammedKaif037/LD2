import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CICDPipeline() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">CI/CD Pipeline</h1>
          <Badge>Module 7.2.5</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement CI/CD pipelines for Spring Boot applications
        </p>
      </div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Introduction to CI/CD</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Continuous Integration (CI) and Continuous Delivery/Deployment (CD) are practices that enable teams to
                deliver code changes more frequently and reliably. CI/CD automates the building, testing, and deployment
                of applications, reducing manual errors and improving development velocity.
              </p>
              <p>Key benefits of CI/CD for Spring Boot applications include:</p>
              <ul>
                <li>Faster time to market with automated build and deployment processes</li>
                <li>Improved code quality through automated testing</li>
                <li>Early detection of integration issues</li>
                <li>Consistent and repeatable deployments</li>
                <li>Reduced manual intervention and human error</li>
                <li>Better collaboration between development and operations teams</li>
                <li>Simplified rollbacks and recovery</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">CI/CD Concepts</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Continuous Integration (CI)</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Continuous Integration is the practice of frequently integrating code changes into a shared
                      repository, followed by automated building and testing. The goal is to detect integration issues
                      early and ensure that the codebase is always in a deployable state.
                    </p>
                    <p>Key components of CI include:</p>
                    <ul>
                      <li>
                        <strong>Version Control System</strong>: Git, SVN, or other version control systems to manage
                        code changes
                      </li>
                      <li>
                        <strong>Build Automation</strong>: Tools like Maven, Gradle, or Ant to compile code and create
                        artifacts
                      </li>
                      <li>
                        <strong>Automated Testing</strong>: Unit tests, integration tests, and other automated tests to
                        verify code quality
                      </li>
                      <li>
                        <strong>CI Server</strong>: Jenkins, GitHub Actions, GitLab CI, CircleCI, or other CI servers to
                        orchestrate the CI process
                      </li>
                      <li>
                        <strong>Code Quality Tools</strong>: SonarQube, Checkstyle, PMD, or other tools to analyze code
                        quality
                      </li>
                    </ul>
                    <p>A typical CI workflow for a Spring Boot application includes:</p>
                    <ol>
                      <li>Developer commits code to a version control system</li>
                      <li>CI server detects the change and triggers a build</li>
                      <li>Code is compiled and packaged into a JAR or WAR file</li>
                      <li>Automated tests are run to verify the code</li>
                      <li>Code quality analysis is performed</li>
                      <li>Build artifacts are stored for later use</li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Continuous Delivery (CD)</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Continuous Delivery is the practice of automatically preparing code changes for release to
                      production. The goal is to ensure that code can be deployed to production at any time, but the
                      actual deployment is triggered manually.
                    </p>
                    <p>Key components of CD include:</p>
                    <ul>
                      <li>
                        <strong>Artifact Repository</strong>: Nexus, Artifactory, or other repositories to store build
                        artifacts
                      </li>
                      <li>
                        <strong>Environment Configuration</strong>: Tools to manage environment-specific configurations
                      </li>
                      <li>
                        <strong>Deployment Automation</strong>: Scripts or tools to automate the deployment process
                      </li>
                      <li>
                        <strong>Infrastructure as Code</strong>: Terraform, CloudFormation, or other tools to define
                        infrastructure
                      </li>
                    </ul>
                    <p>A typical CD workflow for a Spring Boot application includes:</p>
                    <ol>
                      <li>CI process completes successfully</li>
                      <li>Build artifacts are stored in an artifact repository</li>
                      <li>Deployment to a staging environment is automated</li>
                      <li>Automated acceptance tests are run in the staging environment</li>
                      <li>Manual approval is required for production deployment</li>
                      <li>Deployment to production is automated after approval</li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Continuous Deployment</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Continuous Deployment is an extension of Continuous Delivery where code changes are automatically
                      deployed to production without manual intervention. The goal is to reduce the time between writing
                      code and making it available to users.
                    </p>
                    <p>Key components of Continuous Deployment include:</p>
                    <ul>
                      <li>
                        <strong>Automated Testing</strong>: Comprehensive automated testing to ensure code quality
                      </li>
                      <li>
                        <strong>Feature Flags</strong>: Tools to enable or disable features in production
                      </li>
                      <li>
                        <strong>Monitoring and Alerting</strong>: Tools to monitor application health and performance
                      </li>
                      <li>
                        <strong>Rollback Mechanisms</strong>: Automated rollback procedures in case of issues
                      </li>
                    </ul>
                    <p>A typical Continuous Deployment workflow for a Spring Boot application includes:</p>
                    <ol>
                      <li>CI process completes successfully</li>
                      <li>Build artifacts are stored in an artifact repository</li>
                      <li>Deployment to a staging environment is automated</li>
                      <li>Automated acceptance tests are run in the staging environment</li>
                      <li>Deployment to production is automated if all tests pass</li>
                      <li>Application is monitored for issues after deployment</li>
                      <li>Automatic rollback is triggered if issues are detected</li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Deployment Strategies</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Deployment strategies define how new versions of an application are deployed to production. The
                      goal is to minimize downtime and risk during deployments.
                    </p>
                    <p>Common deployment strategies include:</p>
                    <ul>
                      <li>
                        <strong>Rolling Deployment</strong>: Gradually replacing instances of the old version with the
                        new version
                      </li>
                      <li>
                        <strong>Blue-Green Deployment</strong>: Maintaining two identical environments (Blue and Green)
                        and switching traffic from one to the other
                      </li>
                      <li>
                        <strong>Canary Deployment</strong>: Gradually routing traffic to the new version while
                        monitoring for issues
                      </li>
                      <li>
                        <strong>A/B Testing</strong>: Routing a percentage of traffic to the new version to test new
                        features
                      </li>
                      <li>
                        <strong>Shadow Deployment</strong>: Running the new version in parallel with the old version but
                        not routing traffic to it
                      </li>
                    </ul>
                    <p>
                      For Spring Boot applications, these deployment strategies can be implemented using container
                      orchestration platforms like Kubernetes or cloud provider services like AWS Elastic Beanstalk,
                      Azure App Service, or Google Cloud Run.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Infrastructure as Code (IaC)</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Infrastructure as Code is the practice of managing and provisioning infrastructure through code
                      rather than manual processes. The goal is to make infrastructure provisioning repeatable,
                      versioned, and automated.
                    </p>
                    <p>Key IaC tools include:</p>
                    <ul>
                      <li>
                        <strong>Terraform</strong>: A tool for building, changing, and versioning infrastructure
                      </li>
                      <li>
                        <strong>AWS CloudFormation</strong>: A service for modeling and provisioning AWS resources
                      </li>
                      <li>
                        <strong>Azure Resource Manager</strong>: A service for deploying and managing Azure resources
                      </li>
                      <li>
                        <strong>Google Cloud Deployment Manager</strong>: A service for deploying Google Cloud resources
                      </li>
                      <li>
                        <strong>Ansible</strong>: A tool for configuration management and application deployment
                      </li>
                      <li>
                        <strong>Chef</strong>: A tool for infrastructure automation
                      </li>
                      <li>
                        <strong>Puppet</strong>: A tool for configuration management
                      </li>
                    </ul>
                    <p>
                      For Spring Boot applications, IaC can be used to provision the infrastructure required to run the
                      application, such as virtual machines, containers, databases, and networking resources.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">CI/CD Tools for Spring Boot</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Jenkins</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Jenkins is an open-source automation server that provides hundreds of plugins to support building,
                      deploying, and automating any project. It is one of the most popular CI/CD tools and has a large
                      community.
                    </p>
                    <p>Key features of Jenkins for Spring Boot applications include:</p>
                    <ul>
                      <li>
                        <strong>Pipeline as Code</strong>: Define CI/CD pipelines using Jenkinsfile
                      </li>
                      <li>
                        <strong>Plugin Ecosystem</strong>: Extensive plugin support for various tools and integrations
                      </li>
                      <li>
                        <strong>Distributed Builds</strong>: Distribute build and test workloads across multiple agents
                      </li>
                      <li>
                        <strong>Integration with Version Control</strong>: Seamless integration with Git, SVN, and other
                        version control systems
                      </li>
                      <li>
                        <strong>Extensibility</strong>: Customizable through plugins and scripts
                      </li>
                    </ul>
                    <p>Example of a Jenkinsfile for a Spring Boot application:</p>
                    <pre>
                      {`pipeline {
    agent any
    
    tools {
        maven 'Maven 3.8.5'
        jdk 'JDK 17'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }
        
        stage('Test') {
            steps {
                sh 'mvn test'
            }
            post {
                always {
                    junit '**/target/surefire-reports/*.xml'
                }
            }
        }
        
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQube') {
                    sh 'mvn sonar:sonar'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-spring-app:${BUILD_NUMBER} .'
            }
        }
        
        stage('Push Docker Image') {
            steps {
                withCredentials([string(credentialsId: 'docker-hub-password', variable: 'DOCKER_HUB_PASSWORD')]) {
                    sh 'docker login -u myusername -p ${DOCKER_HUB_PASSWORD}'
                    sh 'docker tag my-spring-app:${BUILD_NUMBER} myusername/my-spring-app:${BUILD_NUMBER}'
                    sh 'docker push myusername/my-spring-app:${BUILD_NUMBER}'
                }
            }
        }
        
        stage('Deploy to Dev') {
            steps {
                sh 'kubectl apply -f k8s/dev/deployment.yaml'
                sh 'kubectl set image deployment/my-spring-app my-spring-app=myusername/my-spring-app:${BUILD_NUMBER} -n dev'
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>GitHub Actions</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      GitHub Actions is a CI/CD platform that allows you to automate your build, test, and deployment
                      pipeline directly from your GitHub repository. It is tightly integrated with GitHub and provides a
                      simple way to automate workflows.
                    </p>
                    <p>Key features of GitHub Actions for Spring Boot applications include:</p>
                    <ul>
                      <li>
                        <strong>Workflow as Code</strong>: Define workflows using YAML files
                      </li>
                      <li>
                        <strong>GitHub Integration</strong>: Seamless integration with GitHub repositories
                      </li>
                      <li>
                        <strong>Matrix Builds</strong>: Run jobs with different configurations in parallel
                      </li>
                      <li>
                        <strong>Marketplace</strong>: Extensive marketplace of actions for various tasks
                      </li>
                      <li>
                        <strong>Secrets Management</strong>: Secure storage of sensitive information
                      </li>
                    </ul>
                    <p>Example of a GitHub Actions workflow for a Spring Boot application:</p>
                    <pre>
                      {`name: Spring Boot CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'
        cache: maven
    
    - name: Build with Maven
      run: mvn -B package --file pom.xml
    
    - name: Run Tests
      run: mvn test
    
    - name: SonarQube Scan
      uses: SonarSource/sonarcloud-github-action@master
      env:\
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
    
    - name: Build and Push Docker Image
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: |
          myusername/my-spring-app:latest
          myusername/my-spring-app:${{ github.sha }}
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}
    
  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up kubectl
      uses: azure/setup-kubectl@v3
      with:
        version: 'latest'
    
    - name: Set Kubernetes Context
      uses: azure/k8s-set-context@v3
      with:
        kubeconfig: ${{ secrets.KUBE_CONFIG }}
    
    - name: Deploy to Kubernetes
      run: |
        kubectl apply -f k8s/dev/deployment.yaml
        kubectl set image deployment/my-spring-app my-spring-app=myusername/my-spring-app:${{ github.sha }} -n dev`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>GitLab CI/CD</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      GitLab CI/CD is a part of GitLab that provides a CI/CD platform for automating the build, test,
                      and deployment of applications. It is tightly integrated with GitLab and provides a comprehensive
                      DevOps platform.
                    </p>
                    <p>Key features of GitLab CI/CD for Spring Boot applications include:</p>
                    <ul>
                      <li>
                        <strong>Pipeline as Code</strong>: Define pipelines using YAML files
                      </li>
                      <li>
                        <strong>GitLab Integration</strong>: Seamless integration with GitLab repositories
                      </li>
                      <li>
                        <strong>Auto DevOps</strong>: Automatic CI/CD configuration based on project type
                      </li>
                      <li>
                        <strong>Container Registry</strong>: Built-in container registry for Docker images
                      </li>
                      <li>
                        <strong>Environments</strong>: Define and track environments for deployments
                      </li>
                    </ul>
                    <p>Example of a GitLab CI/CD pipeline for a Spring Boot application:</p>
                    <pre>
                      {`image: maven:3.8.5-eclipse-temurin-17

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=.m2/repository"

cache:
  paths:
    - .m2/repository

stages:
  - build
  - test
  - analyze
  - package
  - deploy

build:
  stage: build
  script:
    - mvn compile

test:
  stage: test
  script:
    - mvn test
  artifacts:
    reports:
      junit:
        - target/surefire-reports/TEST-*.xml

sonarqube:
  stage: analyze
  script:
    - mvn verify sonar:sonar
  only:
    - main
    - merge_requests

package:
  stage: package
  script:
    - mvn package -DskipTests
  artifacts:
    paths:
      - target/*.jar

docker:
  stage: package
  image: docker:20.10.16
  services:
    - docker:20.10.16-dind
  variables:
    DOCKER_TLS_CERTDIR: "/certs"
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
    - docker tag $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA $CI_REGISTRY_IMAGE:latest
    - docker push $CI_REGISTRY_IMAGE:latest

deploy:dev:
  stage: deploy
  image: bitnami/kubectl:latest
  script:
    - kubectl config use-context dev
    - kubectl apply -f k8s/dev/deployment.yaml
    - kubectl set image deployment/my-spring-app my-spring-app=$CI_REGISTRY_IMAGE:$CI_COMMIT_SHA -n dev
  environment:
    name: dev
  only:
    - main`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>CircleCI</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      CircleCI is a cloud-based CI/CD platform that automates the build, test, and deployment process.
                      It is known for its speed, reliability, and ease of use.
                    </p>
                    <p>Key features of CircleCI for Spring Boot applications include:</p>
                    <ul>
                      <li>
                        <strong>Configuration as Code</strong>: Define pipelines using YAML files
                      </li>
                      <li>
                        <strong>Orbs</strong>: Reusable packages of CircleCI configuration
                      </li>
                      <li>
                        <strong>Parallelism</strong>: Run tests in parallel to speed up builds
                      </li>
                      <li>
                        <strong>Caching</strong>: Cache dependencies to speed up builds
                      </li>
                      <li>
                        <strong>Workflows</strong>: Define complex job orchestration
                      </li>
                    </ul>
                    <p>Example of a CircleCI configuration for a Spring Boot application:</p>
                    <pre>
                      {`version: 2.1

orbs:
  maven: circleci/maven@1.3.0
  docker: circleci/docker@2.1.4
  kubernetes: circleci/kubernetes@1.3

jobs:
  build-and-test:
    docker:
      - image: cimg/openjdk:17.0
    steps:
      - checkout
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "pom.xml" }}
            - v1-dependencies-
      - run:
          name: Build
          command: mvn -B -DskipTests clean package
      - run:
          name: Test
          command: mvn test
      - save_cache:
          paths:
            - ~/.m2
          key: v1-dependencies-{{ checksum "pom.xml" }}
      - store_test_results:
          path: target/surefire-reports
      - store_artifacts:
          path: target/*.jar

  sonarqube:
    docker:
      - image: cimg/openjdk:17.0
    steps:
      - checkout
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "pom.xml" }}
            - v1-dependencies-
      - run:
          name: SonarQube Analysis
          command: mvn verify sonar:sonar

  build-and-push-docker:
    docker:
      - image: cimg/base:2022.06
    steps:
      - checkout
      - setup_remote_docker:
          version: 20.10.14
      - docker/check
      - docker/build:
          image: myusername/my-spring-app
          tag: latest,$CIRCLE_SHA1
      - docker/push:
          image: myusername/my-spring-app
          tag: latest,$CIRCLE_SHA1

  deploy-to-dev:
    docker:
      - image: cimg/base:2022.06
    steps:
      - checkout
      - kubernetes/install-kubectl
      - kubernetes/install-kubeconfig:
          kubeconfig: KUBECONFIG_DATA
      - run:
          name: Deploy to Kubernetes
          command: |
            kubectl apply -f k8s/dev/deployment.yaml
            kubectl set image deployment/my-spring-app my-spring-app=myusername/my-spring-app:$CIRCLE_SHA1 -n dev

workflows:
  version: 2
  build-test-deploy:
    jobs:
      - build-and-test
      - sonarqube:
          requires:
            - build-and-test
          filters:
            branches:
              only: main
      - build-and-push-docker:
          requires:
            - build-and-test
          filters:
            branches:
              only: main
      - deploy-to-dev:
          requires:
            - build-and-push-docker
          filters:
            branches:
              only: main`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>AWS CodePipeline</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      AWS CodePipeline is a fully managed continuous delivery service that helps you automate your
                      release pipelines for fast and reliable application and infrastructure updates. It is part of the
                      AWS Developer Tools suite.
                    </p>
                    <p>Key features of AWS CodePipeline for Spring Boot applications include:</p>
                    <ul>
                      <li>
                        <strong>Integration with AWS Services</strong>: Seamless integration with other AWS services
                      </li>
                      <li>
                        <strong>Pipeline Visualization</strong>: Visual representation of the pipeline stages
                      </li>
                      <li>
                        <strong>Manual Approval Actions</strong>: Add manual approval steps to the pipeline
                      </li>
                      <li>
                        <strong>Integration with Third-Party Tools</strong>: Integrate with tools like GitHub, Jenkins,
                        and more
                      </li>
                      <li>
                        <strong>AWS CodeBuild</strong>: Build and test code with continuous scaling
                      </li>
                    </ul>
                    <p>
                      AWS CodePipeline can be configured through the AWS Management Console, AWS CLI, or AWS
                      CloudFormation. Here's an example of a CloudFormation template for a CodePipeline for a Spring
                      Boot application:
                    </p>
                    <pre>
                      {`AWSTemplateFormatVersion: '2010-09-09'
Resources:
  CodePipelineServiceRole:
    Type: 'AWS::IAM::Role'
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: codepipeline.amazonaws.com
            Action: 'sts:AssumeRole'
      ManagedPolicyArns:
        - 'arn:aws:iam::aws:policy/AWSCodeBuildAdminAccess'
        - 'arn:aws:iam::aws:policy/AmazonS3FullAccess'

  ArtifactBucket:
    Type: 'AWS::S3::Bucket'
    Properties:
      VersioningConfiguration:
        Status: Enabled

  CodeBuildServiceRole:
    Type: 'AWS::IAM::Role'
    Properties:
      AssumeRolePolicyDocument:
        Version: '2012-10-17'
        Statement:
          - Effect: Allow
            Principal:
              Service: codebuild.amazonaws.com
            Action: 'sts:AssumeRole'
      ManagedPolicyArns:
        - 'arn:aws:iam::aws:policy/AmazonECR-FullAccess'
        - 'arn:aws:iam::aws:policy/AmazonS3FullAccess'

  CodeBuildProject:
    Type: 'AWS::CodeBuild::Project'
    Properties:
      Artifacts:
        Type: CODEPIPELINE
      Environment:
        Type: LINUX_CONTAINER
        ComputeType: BUILD_GENERAL1_SMALL
        Image: aws/codebuild/amazonlinux2-x86_64-standard:3.0
        PrivilegedMode: true
      ServiceRole: !GetAtt CodeBuildServiceRole.Arn
      Source:
        Type: CODEPIPELINE
        BuildSpec: |
          version: 0.2
          phases:
            install:
              runtime-versions:
                java: corretto17
            pre_build:
              commands:
                - echo Logging in to Amazon ECR...
                - aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $ECR_REPOSITORY_URI
            build:
              commands:
                - echo Build started on `date`
                - mvn clean package -DskipTests
                - docker build -t $ECR_REPOSITORY_URI:$CODEBUILD_RESOLVED_SOURCE_VERSION .
            post_build:
              commands:
                - echo Build completed on `date`
                - docker push $ECR_REPOSITORY_URI:$CODEBUILD_RESOLVED_SOURCE_VERSION
                - echo Writing image definitions file...
                - aws ecs update-service --cluster $ECS_CLUSTER --service $ECS_SERVICE --force-new-deployment
          artifacts:
            files:
              - target/*.jar
              - appspec.yml
              - scripts/**/*

  Pipeline:
    Type: 'AWS::CodePipeline::Pipeline'
    Properties:
      RoleArn: !GetAtt CodePipelineServiceRole.Arn
      ArtifactStore:
        Type: S3
        Location: !Ref ArtifactBucket
      Stages:
        - Name: Source
          Actions:
            - Name: Source
              ActionTypeId:
                Category: Source
                Owner: AWS
                Provider: CodeStarSourceConnection
                Version: '1'
              Configuration:
                ConnectionArn: !Ref GitHubConnection
                FullRepositoryId: myusername/my-spring-app
                BranchName: main
              OutputArtifacts:
                - Name: SourceCode
        - Name: Build
          Actions:
            - Name: BuildAndPush
              ActionTypeId:
                Category: Build
                Owner: AWS
                Provider: CodeBuild
                Version: '1'
              Configuration:
                ProjectName: !Ref CodeBuildProject
              InputArtifacts:
                - Name: SourceCode
              OutputArtifacts:
                - Name: BuildOutput
        - Name: Deploy
