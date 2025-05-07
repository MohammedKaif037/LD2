import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CloudPlatformDeployment() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Cloud Platform Deployment</h1>
          <Badge>Module 7.2</Badge>
        </div>
        <p className="text-muted-foreground">Deploy Spring Boot applications to major cloud platforms</p>
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Cloud Platform Deployment</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Deploying Spring Boot applications to cloud platforms offers numerous benefits, including scalability,
                high availability, managed services, and reduced operational overhead. This module covers deploying
                Spring Boot applications to major cloud platforms.
              </p>
              <p>
                Each cloud platform provides different services and deployment options, but Spring Boot's cloud-native
                features make it well-suited for deployment to any cloud environment.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Cloud Platform Options</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>AWS (Amazon Web Services)</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>AWS offers multiple options for deploying Spring Boot applications:</p>
                    <ul>
                      <li>
                        <strong>Elastic Beanstalk</strong>: A Platform as a Service (PaaS) that simplifies deployment
                        and scaling of web applications. It automatically handles capacity provisioning, load balancing,
                        and application health monitoring.
                      </li>
                      <li>
                        <strong>ECS (Elastic Container Service)</strong>: A fully managed container orchestration
                        service that allows you to run Docker containers on a cluster of EC2 instances.
                      </li>
                      <li>
                        <strong>EKS (Elastic Kubernetes Service)</strong>: A managed Kubernetes service that makes it
                        easy to deploy, manage, and scale containerized applications using Kubernetes.
                      </li>
                      <li>
                        <strong>Lambda</strong>: A serverless compute service that lets you run code without
                        provisioning or managing servers. Spring Boot can be adapted for Lambda using projects like
                        Spring Cloud Function.
                      </li>
                      <li>
                        <strong>EC2 (Elastic Compute Cloud)</strong>: Virtual servers in the cloud where you can deploy
                        your Spring Boot application manually or using automation tools.
                      </li>
                    </ul>
                    <p>
                      AWS also provides a wide range of managed services that can be integrated with Spring Boot
                      applications:
                    </p>
                    <ul>
                      <li>RDS (Relational Database Service) for databases</li>
                      <li>ElastiCache for caching</li>
                      <li>SQS (Simple Queue Service) for messaging</li>
                      <li>SNS (Simple Notification Service) for notifications</li>
                      <li>S3 (Simple Storage Service) for object storage</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Microsoft Azure</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Microsoft Azure provides several options for deploying Spring Boot applications:</p>
                    <ul>
                      <li>
                        <strong>Azure Spring Apps</strong>: A fully managed service for Spring Boot applications that
                        handles infrastructure, Spring Cloud services, and application lifecycle management.
                      </li>
                      <li>
                        <strong>App Service</strong>: A Platform as a Service (PaaS) for hosting web applications, REST
                        APIs, and mobile back ends.
                      </li>
                      <li>
                        <strong>AKS (Azure Kubernetes Service)</strong>: A managed Kubernetes service that simplifies
                        deploying, managing, and scaling containerized applications.
                      </li>
                      <li>
                        <strong>Azure Functions</strong>: A serverless compute service for event-driven applications.
                      </li>
                      <li>
                        <strong>Azure Container Instances</strong>: A service that allows you to run containers without
                        managing servers or clusters.
                      </li>
                      <li>
                        <strong>Virtual Machines</strong>: IaaS offering where you can deploy your Spring Boot
                        application manually or using automation tools.
                      </li>
                    </ul>
                    <p>Azure also provides managed services that integrate well with Spring Boot:</p>
                    <ul>
                      <li>Azure Database for MySQL/PostgreSQL</li>
                      <li>Azure Cache for Redis</li>
                      <li>Azure Service Bus for messaging</li>
                      <li>Azure Blob Storage for object storage</li>
                      <li>Azure Key Vault for secrets management</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Google Cloud Platform (GCP)</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Google Cloud Platform offers several options for deploying Spring Boot applications:</p>
                    <ul>
                      <li>
                        <strong>App Engine</strong>: A fully managed, serverless platform for developing and hosting web
                        applications at scale.
                      </li>
                      <li>
                        <strong>GKE (Google Kubernetes Engine)</strong>: A managed Kubernetes service for deploying,
                        managing, and scaling containerized applications.
                      </li>
                      <li>
                        <strong>Cloud Run</strong>: A fully managed compute platform for deploying and scaling
                        containerized applications quickly and securely.
                      </li>
                      <li>
                        <strong>Cloud Functions</strong>: A serverless execution environment for building and connecting
                        cloud services.
                      </li>
                      <li>
                        <strong>Compute Engine</strong>: Virtual machines running in Google's data centers where you can
                        deploy your Spring Boot application.
                      </li>
                    </ul>
                    <p>GCP also provides managed services that integrate well with Spring Boot:</p>
                    <ul>
                      <li>Cloud SQL for MySQL/PostgreSQL</li>
                      <li>Cloud Memorystore for Redis</li>
                      <li>Cloud Pub/Sub for messaging</li>
                      <li>Cloud Storage for object storage</li>
                      <li>Secret Manager for secrets management</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Heroku</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Heroku is a cloud platform as a service (PaaS) that enables developers to build, run, and operate
                      applications entirely in the cloud. It's known for its simplicity and developer-friendly
                      experience.
                    </p>
                    <p>Deploying a Spring Boot application to Heroku is straightforward:</p>
                    <ol>
                      <li>Create a Heroku account and install the Heroku CLI</li>
                      <li>Create a Procfile in your project root with the command to start your application</li>
                      <li>Configure your application to use the PORT environment variable provided by Heroku</li>
                      <li>Use Git to deploy your application to Heroku</li>
                    </ol>
                    <p>Heroku also provides add-ons for various services:</p>
                    <ul>
                      <li>Heroku Postgres for PostgreSQL databases</li>
                      <li>Heroku Redis for Redis caching</li>
                      <li>Heroku Data for MongoDB</li>
                      <li>Papertrail for log management</li>
                      <li>New Relic for application monitoring</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Digital Ocean</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Digital Ocean is a cloud infrastructure provider that offers simple, cost-effective solutions for
                      deploying applications.
                    </p>
                    <p>Options for deploying Spring Boot applications on Digital Ocean include:</p>
                    <ul>
                      <li>
                        <strong>App Platform</strong>: A PaaS offering that allows you to deploy applications from
                        source code or Docker images.
                      </li>
                      <li>
                        <strong>Kubernetes (DOKS)</strong>: A managed Kubernetes service for containerized applications.
                      </li>
                      <li>
                        <strong>Droplets</strong>: Virtual machines where you can deploy your Spring Boot application
                        manually or using automation tools.
                      </li>
                    </ul>
                    <p>Digital Ocean also provides managed services:</p>
                    <ul>
                      <li>Managed Databases (PostgreSQL, MySQL, Redis, MongoDB)</li>
                      <li>Spaces for object storage</li>
                      <li>Managed Kubernetes</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Deployment Strategies</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                When deploying Spring Boot applications to cloud platforms, consider the following deployment
                strategies:
              </p>
              <ol>
                <li>
                  <strong>JAR Deployment</strong>: Deploy your Spring Boot application as an executable JAR file. This
                  is the simplest approach and works well for many scenarios.
                </li>
                <li>
                  <strong>Container Deployment</strong>: Package your application as a Docker container and deploy it to
                  a container orchestration platform like Kubernetes or a managed container service.
                </li>
                <li>
                  <strong>Serverless Deployment</strong>: Adapt your Spring Boot application for serverless platforms
                  using projects like Spring Cloud Function.
                </li>
                <li>
                  <strong>Platform-Specific Deployment</strong>: Use platform-specific features and services to optimize
                  your application for a particular cloud provider.
                </li>
              </ol>
              <p>
                Each strategy has its own advantages and trade-offs in terms of complexity, cost, scalability, and
                vendor lock-in.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Cloud-Native Considerations</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                When deploying Spring Boot applications to cloud platforms, consider the following cloud-native
                principles:
              </p>
              <ol>
                <li>
                  <strong>Externalized Configuration</strong>: Use environment variables, config servers, or
                  cloud-specific configuration services to manage application configuration.
                </li>
                <li>
                  <strong>Service Discovery</strong>: Use service discovery mechanisms provided by the cloud platform or
                  implement your own using Spring Cloud.
                </li>
                <li>
                  <strong>Statelessness</strong>: Design your application to be stateless to facilitate scaling and
                  resilience.
                </li>
                <li>
                  <strong>Health Checks</strong>: Implement health checks to enable the platform to monitor your
                  application's health and perform automated recovery.
                </li>
                <li>
                  <strong>Graceful Shutdown</strong>: Ensure your application can shut down gracefully to handle scaling
                  events and updates.
                </li>
                <li>
                  <strong>Logging and Monitoring</strong>: Configure your application to work with the cloud platform's
                  logging and monitoring services.
                </li>
                <li>
                  <strong>Security</strong>: Follow cloud security best practices and use platform-specific security
                  features.
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Cloud Deployment</h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>Use Infrastructure as Code (IaC)</strong>: Define your infrastructure using tools like
                  Terraform, AWS CloudFormation, or Azure Resource Manager templates.
                </li>
                <li>
                  <strong>Implement CI/CD Pipelines</strong>: Automate the build, test, and deployment process using
                  CI/CD tools like Jenkins, GitHub Actions, or cloud-specific CI/CD services.
                </li>
                <li>
                  <strong>Monitor Application Performance</strong>: Use Application Performance Monitoring (APM) tools
                  to track application performance and identify issues.
                </li>
                <li>
                  <strong>Implement Auto-Scaling</strong>: Configure auto-scaling to handle varying loads efficiently.
                </li>
                <li>
                  <strong>Use Managed Services</strong>: Leverage managed services provided by the cloud platform for
                  databases, caching, messaging, etc.
                </li>
                <li>
                  <strong>Implement Proper Logging</strong>: Configure centralized logging to facilitate troubleshooting
                  and monitoring.
                </li>
                <li>
                  <strong>Secure Your Application</strong>: Implement security best practices and use cloud-specific
                  security services.
                </li>
                <li>
                  <strong>Plan for Disaster Recovery</strong>: Implement backup and disaster recovery strategies.
                </li>
                <li>
                  <strong>Optimize Costs</strong>: Monitor and optimize cloud resource usage to control costs.
                </li>
              </ol>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Deploying to AWS Elastic Beanstalk</h2>
            <Card>
              <CardHeader>
                <CardTitle>AWS Elastic Beanstalk Deployment</CardTitle>
                <CardDescription>
                  Step-by-step guide to deploy a Spring Boot application to AWS Elastic Beanstalk
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">1. Prepare your Spring Boot application</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Ensure your application.properties or application.yml is configured correctly
# For example, use environment variables for database connection

spring:
  datasource:
    url: \${SPRING_DATASOURCE_URL}
    username: \${SPRING_DATASOURCE_USERNAME}
    password: \${SPRING_DATASOURCE_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: update

server:
  port: 5000  # Elastic Beanstalk expects the application to listen on port 5000`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">2. Build your application</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`./mvnw clean package -DskipTests`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">3. Install the AWS CLI and EB CLI</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Install AWS CLI
pip install awscli

# Install EB CLI
pip install awsebcli

# Configure AWS credentials
aws configure`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">4. Initialize Elastic Beanstalk in your project</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Navigate to your project directory
cd your-spring-boot-project

# Initialize EB
eb init

# Follow the prompts to select your region, application name, and platform (Java)`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">5. Create an Elastic Beanstalk environment</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`eb create your-environment-name`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">6. Configure environment variables</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# You can set environment variables through the AWS Management Console
# or using the EB CLI

eb setenv SPRING_DATASOURCE_URL=jdbc:mysql://your-rds-instance.amazonaws.com:3306/your-db \
          SPRING_DATASOURCE_USERNAME=your-username \
          SPRING_DATASOURCE_PASSWORD=your-password`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">7. Deploy your application</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">{`eb deploy`}</pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">8. Open your application</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">{`eb open`}</pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">9. Monitor your application</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# View logs
eb logs

# View environment health
eb health

# SSH into the EC2 instance
eb ssh`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Deploying to Azure Spring Apps</h2>
            <Card>
              <CardHeader>
                <CardTitle>Azure Spring Apps Deployment</CardTitle>
                <CardDescription>
                  Step-by-step guide to deploy a Spring Boot application to Azure Spring Apps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">1. Prepare your Spring Boot application</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Ensure your application.properties or application.yml is configured correctly
# For example, use environment variables for database connection

spring:
  datasource:
    url: \${SPRING_DATASOURCE_URL}
    username: \${SPRING_DATASOURCE_USERNAME}
    password: \${SPRING_DATASOURCE_PASSWORD}
  jpa:
    hibernate:
      ddl-auto: update`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">2. Install the Azure CLI</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Install Azure CLI
# Follow instructions at https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

# Login to Azure
az login`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">3. Create an Azure Spring Apps service</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Create a resource group
az group create --name myResourceGroup --location eastus

# Create an Azure Spring Apps service
az spring create --name myspringapps --resource-group myResourceGroup --location eastus`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">4. Create an app in Azure Spring Apps</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`az spring app create --name myapp --service myspringapps --resource-group myResourceGroup --runtime-version Java_11`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">5. Set environment variables</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`az spring app update --name myapp --service myspringapps --resource-group myResourceGroup \\
  --env "SPRING_DATASOURCE_URL=jdbc:mysql://your-mysql-server.mysql.database.azure.com:3306/your-db" \\
  "SPRING_DATASOURCE_USERNAME=your-username" \\
  "SPRING_DATASOURCE_PASSWORD=your-password"`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">6. Deploy your application</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Build your application
./mvnw clean package -DskipTests

# Deploy the JAR file
az spring app deploy --name myapp --service myspringapps --resource-group myResourceGroup \\
  --artifact-path target/your-application.jar`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">7. Get the application URL</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`az spring app show --name myapp --service myspringapps --resource-group myResourceGroup --query properties.url`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Deploying to Google Cloud Run</h2>
            <Card>
              <CardHeader>
                <CardTitle>Google Cloud Run Deployment</CardTitle>
                <CardDescription>
                  Step-by-step guide to deploy a Spring Boot application to Google Cloud Run
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">
                      1. Prepare your Spring Boot application with a Dockerfile
                    </p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Create a Dockerfile in your project root
FROM eclipse-temurin:17-jdk as build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN ./mvnw install -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

FROM eclipse-temurin:17-jre
VOLUME /tmp
ARG DEPENDENCY=/workspace/app/target/dependency
COPY --from=build \${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build \${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build \${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","com.example.YourApplication"]`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">2. Install and configure Google Cloud SDK</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Install Google Cloud SDK
# Follow instructions at https://cloud.google.com/sdk/docs/install

# Initialize the SDK
gcloud init

# Set your project
gcloud config set project your-project-id`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">
                      3. Build and push your Docker image to Google Container Registry
                    </p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Build the Docker image
docker build -t gcr.io/your-project-id/your-app-name .

# Configure Docker to use gcloud as a credential helper
gcloud auth configure-docker

# Push the image to Google Container Registry
docker push gcr.io/your-project-id/your-app-name`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">4. Deploy to Cloud Run</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`gcloud run deploy your-service-name \\
  --image gcr.io/your-project-id/your-app-name \\
  --platform managed \\
  --region us-central1 \\
  --allow-unauthenticated \\
  --set-env-vars="SPRING_DATASOURCE_URL=jdbc:postgresql://your-db-host:5432/your-db,SPRING_DATASOURCE_USERNAME=your-username,SPRING_DATASOURCE_PASSWORD=your-password"`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">5. Access your deployed service</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Get the service URL
gcloud run services describe your-service-name --platform managed --region us-central1 --format 'value(status.url)'`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
        <TabsContent value="exercises" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Practice Exercises</h2>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 1: Deploy to AWS Elastic Beanstalk</CardTitle>
                <CardDescription>Deploy a Spring Boot application to AWS Elastic Beanstalk</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a simple Spring Boot REST API with a few endpoints</li>
                  <li>Configure the application to use environment variables for configuration</li>
                  <li>Set up an AWS account if you don't have one</li>
                  <li>Install the AWS CLI and EB CLI</li>
                  <li>Deploy the application to Elastic Beanstalk</li>
                  <li>Configure environment variables in Elastic Beanstalk</li>
                  <li>Test the deployed application</li>
                  <li>Make a change to the application and redeploy</li>
                  <li>Monitor the application using Elastic Beanstalk dashboard</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 2: Deploy to Azure Spring Apps</CardTitle>
                <CardDescription>Deploy a Spring Boot application to Azure Spring Apps</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a Spring Boot application with Spring Cloud features</li>
                  <li>Set up an Azure account if you don't have one</li>
                  <li>Install the Azure CLI</li>
                  <li>Create an Azure Spring Apps service</li>
                  <li>Deploy the application to Azure Spring Apps</li>
                  <li>Configure environment variables</li>
                  <li>Test the deployed application</li>
                  <li>Scale the application</li>
                  <li>Monitor the application using Azure Monitor</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 3: Deploy to Google Cloud Run</CardTitle>
                <CardDescription>Deploy a containerized Spring Boot application to Google Cloud Run</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a Spring Boot application</li>
                  <li>Create a Dockerfile for the application</li>
                  <li>Set up a Google Cloud account if you don't have one</li>
                  <li>Install the Google Cloud SDK</li>
                  <li>Build and push the Docker image to Google Container Registry</li>
                  <li>Deploy the application to Cloud Run</li>
                  <li>Configure environment variables</li>
                  <li>Test the deployed application</li>
                  <li>Monitor the application using Google Cloud Monitoring</li>
                </ol>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
        <TabsContent value="resources" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Additional Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>AWS Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://aws.amazon.com/elasticbeanstalk/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        AWS Elastic Beanstalk
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://aws.amazon.com/ecs/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        AWS Elastic Container Service (ECS)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://aws.amazon.com/eks/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        AWS Elastic Kubernetes Service (EKS)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/java-se-platform.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        AWS Elastic Beanstalk Java SE Platform
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Azure Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://azure.microsoft.com/en-us/products/spring-apps/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Azure Spring Apps
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://azure.microsoft.com/en-us/products/app-service/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Azure App Service
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://azure.microsoft.com/en-us/products/kubernetes-service/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Azure Kubernetes Service (AKS)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.microsoft.com/en-us/azure/developer/java/spring-framework/deploy-spring-boot-java-app-on-azure"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Deploy Spring Boot Apps to Azure
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Google Cloud Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://cloud.google.com/run"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Google Cloud Run
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cloud.google.com/kubernetes-engine"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Google Kubernetes Engine (GKE)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cloud.google.com/appengine"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Google App Engine
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://cloud.google.com/java/docs/tutorials/run-spring-boot"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Deploy Spring Boot to Cloud Run
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Related Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/modules/cloud-deployment/containerization/docker-integration"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Integration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/cloud-deployment/containerization/kubernetes-deployment"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Kubernetes Deployment
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/cloud-deployment/cloud-integration/cloud-native-patterns"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Cloud-Native Patterns
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/cloud-deployment/configuration-management"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Configuration Management
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/modules/cloud-deployment/cloud-integration/spring-cloud">← Back to Spring Cloud</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/cloud-deployment/configuration-management">Next: Configuration Management →</Link>
        </Button>
      </div>
    </div>
  )
}
