import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function DockerIntegration() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Docker Integration</h1>
          <Badge>Module 7.2.1</Badge>
        </div>
        <p className="text-muted-foreground">Learn how to containerize Spring Boot applications with Docker</p>
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Docker</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Docker is a platform for developing, shipping, and running applications in containers. Containers are
                lightweight, portable, and self-sufficient environments that include everything needed to run an
                application: code, runtime, system tools, libraries, and settings.
              </p>
              <p>Containerizing Spring Boot applications with Docker offers several benefits:</p>
              <ul>
                <li>Consistency across development, testing, and production environments</li>
                <li>Isolation from other applications and system dependencies</li>
                <li>Efficient resource utilization compared to virtual machines</li>
                <li>Simplified deployment and scaling</li>
                <li>Better integration with container orchestration platforms like Kubernetes</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Dockerizing Spring Boot Applications</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To containerize a Spring Boot application, you need to create a Dockerfile that defines how the
                container should be built. Here's a basic Dockerfile for a Spring Boot application:
              </p>
              <pre>
                {`FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]`}
              </pre>
              <p>This Dockerfile does the following:</p>
              <ol>
                <li>Uses the Eclipse Temurin JDK 17 Alpine image as the base image</li>
                <li>Sets the working directory to /app</li>
                <li>Copies the JAR file from the target directory to the container</li>
                <li>Defines the command to run the application</li>
              </ol>
              <p>To build and run the Docker container, use the following commands:</p>
              <pre>
                {`# Build the Docker image
docker build -t myapp .

# Run the Docker container
docker run -p 8080:8080 myapp`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Optimizing Docker Images for Spring Boot</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Multi-stage Builds</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Multi-stage builds allow you to use multiple FROM statements in your Dockerfile. Each FROM
                      statement begins a new stage of the build. You can selectively copy artifacts from one stage to
                      another, leaving behind everything you don't need in the final image.
                    </p>
                    <pre>
                      {`# Build stage
FROM maven:3.8.5-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# Run stage
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]`}
                    </pre>
                    <p>
                      This approach separates the build environment from the runtime environment, resulting in a smaller
                      final image.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Layer Optimization</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Docker images are composed of layers. Each instruction in a Dockerfile creates a new layer. To
                      optimize your Docker image, you should minimize the number of layers and ensure that frequently
                      changing layers come after infrequently changing layers.
                    </p>
                    <p>
                      For Spring Boot applications, you can use the Spring Boot Maven/Gradle plugin to create a layered
                      JAR:
                    </p>
                    <pre>
                      {`# pom.xml
<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <layers>
                    <enabled>true</enabled>
                </layers>
            </configuration>
        </plugin>
    </plugins>
</build>`}
                    </pre>
                    <p>Then, you can extract and copy the layers in your Dockerfile:</p>
                    <pre>
                      {`FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /app
COPY target/*.jar app.jar
RUN java -Djarmode=layertools -jar app.jar extract

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/dependencies/ ./
COPY --from=builder /app/spring-boot-loader/ ./
COPY --from=builder /app/snapshot-dependencies/ ./
COPY --from=builder /app/application/ ./
ENTRYPOINT ["java", "org.springframework.boot.loader.JarLauncher"]`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>JVM Optimization</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      You can optimize the JVM settings to reduce memory usage and improve startup time in containerized
                      environments:
                    </p>
                    <pre>
                      {`FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY target/*.jar app.jar
ENTRYPOINT ["java", \
            "-XX:+UseContainerSupport", \
            "-XX:MaxRAMPercentage=75.0", \
            "-Djava.security.egd=file:/dev/./urandom", \
            "-jar", "/app/app.jar"]`}
                    </pre>
                    <p>These options do the following:</p>
                    <ul>
                      <li>
                        <code>-XX:+UseContainerSupport</code>: Enables container-aware memory limits (default in JDK
                        11+)
                      </li>
                      <li>
                        <code>-XX:MaxRAMPercentage=75.0</code>: Sets the maximum heap size to 75% of available memory
                      </li>
                      <li>
                        <code>-Djava.security.egd=file:/dev/./urandom</code>: Improves startup time by using a
                        non-blocking entropy source
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Using Distroless Images</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Distroless images contain only your application and its runtime dependencies. They don't contain
                      package managers, shells, or other programs you would expect to find in a standard Linux
                      distribution. This reduces the attack surface and image size.
                    </p>
                    <pre>
                      {`FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /app
COPY target/*.jar app.jar
RUN java -Djarmode=layertools -jar app.jar extract

FROM gcr.io/distroless/java17-debian11
WORKDIR /app
COPY --from=builder /app/dependencies/ ./
COPY --from=builder /app/spring-boot-loader/ ./
COPY --from=builder /app/snapshot-dependencies/ ./
COPY --from=builder /app/application/ ./
ENTRYPOINT ["java", "org.springframework.boot.loader.JarLauncher"]`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Docker Compose Support</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot 3.1+ provides built-in support for Docker Compose, making it easier to develop and test
                applications that depend on external services like databases, message brokers, or other microservices.
              </p>
              <p>To use this feature, add the Docker Compose dependency to your project:</p>
              <pre>
                {`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-docker-compose</artifactId>
    <optional>true</optional>
</dependency>`}
              </pre>
              <p>Create a docker-compose.yml file in your project root:</p>
              <pre>
                {`version: '3.8'
services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: myuser
      POSTGRES_PASSWORD: mypassword
      POSTGRES_DB: mydb
    ports:
      - "5432:5432"
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"`}
              </pre>
              <p>
                When you start your Spring Boot application, it will automatically start the Docker Compose services and
                configure the application to connect to them. You can customize this behavior in your application.yml:
              </p>
              <pre>
                {`spring:
  docker:
    compose:
      file: ./docker-compose.yml
      enabled: true
      lifecycle-management: start_and_stop
      skip-ssl-validation: true`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Best Practices for Dockerizing Spring Boot Applications
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>Use multi-stage builds</strong> to separate build and runtime environments, resulting in
                  smaller images.
                </li>
                <li>
                  <strong>Leverage layered JARs</strong> to optimize Docker image layers and improve build times.
                </li>
                <li>
                  <strong>Use specific base image tags</strong> instead of 'latest' to ensure reproducible builds.
                </li>
                <li>
                  <strong>Optimize JVM settings</strong> for containerized environments to improve resource utilization.
                </li>
                <li>
                  <strong>Externalize configuration</strong> using environment variables or config maps in Kubernetes.
                </li>
                <li>
                  <strong>Include health checks</strong> to enable container orchestration platforms to monitor
                  application health.
                </li>
                <li>
                  <strong>Run as a non-root user</strong> to improve security.
                </li>
                <li>
                  <strong>Scan images for vulnerabilities</strong> using tools like Trivy, Clair, or Snyk.
                </li>
                <li>
                  <strong>Use Docker Compose</strong> for local development and testing with dependent services.
                </li>
                <li>
                  <strong>Implement proper logging</strong> to stdout/stderr for container log collection.
                </li>
              </ol>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Basic Dockerfile</h2>
            <Card>
              <CardHeader>
                <CardTitle>Simple Spring Boot Dockerfile</CardTitle>
                <CardDescription>A basic Dockerfile for a Spring Boot application</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  {`FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Multi-stage Build with Layered JAR</h2>
            <Card>
              <CardHeader>
                <CardTitle>Optimized Dockerfile with Multi-stage Build</CardTitle>
                <CardDescription>An optimized Dockerfile using multi-stage build and layered JAR</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">pom.xml (relevant part)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<build>
    <plugins>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <layers>
                    <enabled>true</enabled>
                </layers>
            </configuration>
        </plugin>
    </plugins>
</build>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Dockerfile</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Build stage
FROM maven:3.8.5-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
# Download dependencies separately (for better layer caching)
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

# Extract layers stage
FROM eclipse-temurin:17-jdk-alpine AS extract
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
RUN java -Djarmode=layertools -jar app.jar extract

# Run stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
# Create a non-root user to run the application
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
# Copy layers in order of least frequently changed to most frequently changed
COPY --from=extract --chown=spring:spring /app/dependencies/ ./
COPY --from=extract --chown=spring:spring /app/spring-boot-loader/ ./
COPY --from=extract --chown=spring:spring /app/snapshot-dependencies/ ./
COPY --from=extract --chown=spring:spring /app/application/ ./
# Set JVM options for containers
ENTRYPOINT ["java", \
            "-XX:+UseContainerSupport", \
            "-XX:MaxRAMPercentage=75.0", \
            "-Djava.security.egd=file:/dev/./urandom", \
            "org.springframework.boot.loader.JarLauncher"]
# Expose the application port
EXPOSE 8080
# Add health check
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -q --spider http://localhost:8080/actuator/health || exit 1`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Docker Compose for Development</h2>
            <Card>
              <CardHeader>
                <CardTitle>Docker Compose Configuration</CardTitle>
                <CardDescription>A Docker Compose setup for local development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">docker-compose.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`version: '3.8'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=dev
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/mydb
      - SPRING_DATASOURCE_USERNAME=myuser
      - SPRING_DATASOURCE_PASSWORD=mypassword
      - SPRING_REDIS_HOST=redis
    depends_on:
      - postgres
      - redis
    volumes:
      - ./config:/app/config
    networks:
      - spring-network

  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: myuser
      POSTGRES_PASSWORD: mypassword
      POSTGRES_DB: mydb
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./init-scripts:/docker-entrypoint-initdb.d
    networks:
      - spring-network

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data
    networks:
      - spring-network

networks:
  spring-network:
    driver: bridge

volumes:
  postgres-data:
  redis-data:`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">application.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`spring:
  application:
    name: my-spring-app
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: myuser
    password: mypassword
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: update
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
  redis:
    host: localhost
    port: 6379
  docker:
    compose:
      file: ./docker-compose.yml
      enabled: true
      lifecycle-management: start_and_stop

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
  endpoint:
    health:
      show-details: always`}
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
                <CardTitle>Exercise 1: Basic Dockerization</CardTitle>
                <CardDescription>Containerize a simple Spring Boot application</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a simple Spring Boot REST API application</li>
                  <li>Write a basic Dockerfile to containerize the application</li>
                  <li>Build the Docker image and run the container</li>
                  <li>Test the API endpoints from outside the container</li>
                  <li>Modify the Dockerfile to use a non-root user for security</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 2: Multi-stage Build with Layered JAR</CardTitle>
                <CardDescription>Optimize a Docker image for a Spring Boot application</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Configure your Spring Boot application to use layered JARs</li>
                  <li>
                    Create a multi-stage Dockerfile that:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Builds the application in the first stage</li>
                      <li>Extracts the layers in the second stage</li>
                      <li>Copies only the necessary layers to the final stage</li>
                    </ul>
                  </li>
                  <li>Optimize the JVM settings for containerized environments</li>
                  <li>Add a health check to the Dockerfile</li>
                  <li>Compare the size and startup time with the basic Dockerfile from Exercise 1</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 3: Docker Compose for Development</CardTitle>
                <CardDescription>Set up a development environment with Docker Compose</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Create a Spring Boot application that uses:
                    <ul className="list-disc pl-5 mt-1">
                      <li>PostgreSQL for data storage</li>
                      <li>Redis for caching</li>
                    </ul>
                  </li>
                  <li>
                    Create a docker-compose.yml file that includes:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Your Spring Boot application</li>
                      <li>PostgreSQL database</li>
                      <li>Redis cache</li>
                    </ul>
                  </li>
                  <li>Configure environment variables for database and Redis connections</li>
                  <li>Set up volume mounts for persistent data</li>
                  <li>Configure Spring Boot to use Docker Compose support</li>
                  <li>Test the complete setup by running docker-compose up</li>
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
                  <CardTitle>Official Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://docs.docker.com/get-started/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Getting Started Guide
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#container-images"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Container Images
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#features.docker-compose"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Docker Compose Support
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.docker.com/compose/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Compose Documentation
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tutorials and Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://spring.io/guides/topicals/spring-boot-docker/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot with Docker
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.baeldung.com/spring-boot-docker-images"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Creating Docker Images with Spring Boot
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.baeldung.com/dockerizing-spring-boot-application"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Dockerizing a Spring Boot Application
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.docker.com/blog/9-tips-for-containerizing-your-spring-boot-code/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Blog: 9 Tips for Containerizing Spring Boot Applications
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
                        href="/modules/cloud-deployment/containerization/docker-compose"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Compose
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
                        href="/modules/cloud-deployment/containerization/ci-cd-pipeline"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        CI/CD Pipeline
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tools and Utilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://github.com/GoogleContainerTools/jib"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Google Jib - Containerize Java Applications
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/docker/docker-maven-plugin"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Maven Plugin
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/aquasecurity/trivy"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Trivy - Container Vulnerability Scanner
                      </a>
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
          <Link href="/modules/cloud-deployment/containerization">← Back to Containerization</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/cloud-deployment/containerization/kubernetes-deployment">
            Next: Kubernetes Deployment →
          </Link>
        </Button>
      </div>
    </div>
  )
}
