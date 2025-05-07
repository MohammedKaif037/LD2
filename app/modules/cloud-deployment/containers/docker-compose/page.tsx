import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function DockerCompose() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Docker Compose</h1>
          <Badge>Module 7.2.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to use Docker Compose for multi-container Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Docker Compose</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you
                use a YAML file to configure your application's services, networks, and volumes. Then, with a single
                command, you create and start all the services from your configuration.
              </p>
              <p>Key benefits of Docker Compose for Spring Boot applications include:</p>
              <ul>
                <li>Simplified development and testing environments</li>
                <li>Declarative configuration of all application components</li>
                <li>Single command to start and stop the entire application stack</li>
                <li>Environment variable management</li>
                <li>Networking between containers</li>
                <li>Volume management for persistent data</li>
                <li>Service dependency management</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Docker Compose Basics</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                A Docker Compose file is a YAML file that defines services, networks, and volumes for a Docker
                application. The default path for a Compose file is <code>./docker-compose.yml</code>.
              </p>
              <p>Here's a basic structure of a Docker Compose file:</p>
              <pre>
                {`version: '3.8'
services:
  service-name:
    image: image-name
    # or
    build: ./path/to/dockerfile
    ports:
      - "host-port:container-port"
    volumes:
      - "host-path:container-path"
    environment:
      - KEY=VALUE
    networks:
      - network-name
    depends_on:
      - another-service

networks:
  network-name:
    driver: bridge

volumes:
  volume-name:
    driver: local`}
              </pre>
              <p>Key components of a Docker Compose file:</p>
              <ul>
                <li>
                  <strong>version</strong>: The version of the Compose file format (e.g., '3.8')
                </li>
                <li>
                  <strong>services</strong>: Containers that make up your application
                </li>
                <li>
                  <strong>networks</strong>: Networks that your services can connect to
                </li>
                <li>
                  <strong>volumes</strong>: Persistent data storage for your services
                </li>
              </ul>
              <p>Common Docker Compose commands:</p>
              <pre>
                {`# Start services
docker-compose up

# Start services in detached mode
docker-compose up -d

# Stop services
docker-compose down

# Stop services and remove volumes
docker-compose down -v

# View logs
docker-compose logs

# View logs for a specific service
docker-compose logs service-name

# Build or rebuild services
docker-compose build

# Scale a service
docker-compose up -d --scale service-name=3`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Docker Compose for Spring Boot Applications</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Basic Spring Boot Application with Database</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      A common use case for Docker Compose is running a Spring Boot application with a database. Here's
                      an example of a Docker Compose file for a Spring Boot application with PostgreSQL:
                    </p>
                    <pre>
                      {`version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mydatabase
      - SPRING_DATASOURCE_USERNAME=myuser
      - SPRING_DATASOURCE_PASSWORD=mypassword
      - SPRING_JPA_HIBERNATE_DDL_AUTO=update
    depends_on:
      - db
    networks:
      - spring-network

  db:
    image: postgres:13
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=mydatabase
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - spring-network

networks:
  spring-network:
    driver: bridge

volumes:
  postgres-data:
    driver: local`}
                    </pre>
                    <p>
                      In this example, we have two services: <code>app</code> (the Spring Boot application) and{" "}
                      <code>db</code> (the PostgreSQL database). The <code>app</code> service depends on the{" "}
                      <code>db</code> service, and they communicate over the <code>spring-network</code> network.
                    </p>
                    <p>
                      The database connection URL uses <code>db</code> as the hostname, which is the service name in the
                      Docker Compose file. Docker Compose sets up DNS resolution between containers, so containers can
                      communicate with each other using their service names.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Microservices Architecture</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Docker Compose is also useful for developing and testing microservices architectures. Here's an
                      example of a Docker Compose file for a microservices architecture with Spring Boot:
                    </p>
                    <pre>
                      {`version: '3.8'
services:
  config-server:
    build: ./config-server
    ports:
      - "8888:8888"
    networks:
      - spring-network

  eureka-server:
    build: ./eureka-server
    ports:
      - "8761:8761"
    depends_on:
      - config-server
    environment:
      - SPRING_CLOUD_CONFIG_URI=http://config-server:8888
    networks:
      - spring-network

  api-gateway:
    build: ./api-gateway
    ports:
      - "8080:8080"
    depends_on:
      - config-server
      - eureka-server
    environment:
      - SPRING_CLOUD_CONFIG_URI=http://config-server:8888
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
    networks:
      - spring-network

  user-service:
    build: ./user-service
    depends_on:
      - config-server
      - eureka-server
      - postgres
    environment:
      - SPRING_CLOUD_CONFIG_URI=http://config-server:8888
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/userdb
      - SPRING_DATASOURCE_USERNAME=myuser
      - SPRING_DATASOURCE_PASSWORD=mypassword
    networks:
      - spring-network

  order-service:
    build: ./order-service
    depends_on:
      - config-server
      - eureka-server
      - postgres
      - kafka
    environment:
      - SPRING_CLOUD_CONFIG_URI=http://config-server:8888
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/orderdb
      - SPRING_DATASOURCE_USERNAME=myuser
      - SPRING_DATASOURCE_PASSWORD=mypassword
      - SPRING_KAFKA_BOOTSTRAP_SERVERS=kafka:9092
    networks:
      - spring-network

  postgres:
    image: postgres:13
    environment:
      - POSTGRES_PASSWORD=mypassword
      - POSTGRES_USER=myuser
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./init-scripts:/docker-entrypoint-initdb.d
    networks:
      - spring-network

  kafka:
    image: confluentinc/cp-kafka:7.0.0
    depends_on:
      - zookeeper
    environment:
      - KAFKA_BROKER_ID=1
      - KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181
      - KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092
      - KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1
    networks:
      - spring-network

  zookeeper:
    image: confluentinc/cp-zookeeper:7.0.0
    environment:
      - ZOOKEEPER_CLIENT_PORT=2181
    networks:
      - spring-network

networks:
  spring-network:
    driver: bridge

volumes:
  postgres-data:
    driver: local`}
                    </pre>
                    <p>In this example, we have a microservices architecture with the following components:</p>
                    <ul>
                      <li>
                        <strong>Config Server</strong>: Centralized configuration server for all microservices
                      </li>
                      <li>
                        <strong>Eureka Server</strong>: Service discovery server
                      </li>
                      <li>
                        <strong>API Gateway</strong>: Entry point for all client requests
                      </li>
                      <li>
                        <strong>User Service</strong>: Microservice for user management
                      </li>
                      <li>
                        <strong>Order Service</strong>: Microservice for order management
                      </li>
                      <li>
                        <strong>PostgreSQL</strong>: Database for both microservices
                      </li>
                      <li>
                        <strong>Kafka</strong>: Message broker for event-driven communication between microservices
                      </li>
                      <li>
                        <strong>Zookeeper</strong>: Required for Kafka
                      </li>
                    </ul>
                    <p>
                      Each microservice is built from its own directory, and they communicate with each other over the{" "}
                      <code>spring-network</code> network.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Development Environment</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Docker Compose is particularly useful for setting up development environments. Here's an example
                      of a Docker Compose file for a Spring Boot development environment:
                    </p>
                    <pre>
                      {`version: '3.8'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "8080:8080"
      - "5005:5005"  # For remote debugging
    volumes:
      - ./:/app  # Mount the project directory for hot reloading
      - maven-repo:/root/.m2  # Cache Maven dependencies
    environment:
      - SPRING_PROFILES_ACTIVE=dev
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mydatabase
      - SPRING_DATASOURCE_USERNAME=myuser
      - SPRING_DATASOURCE_PASSWORD=mypassword
      - JAVA_TOOL_OPTIONS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005
    depends_on:
      - db
    networks:
      - spring-network

  db:
    image: postgres:13
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=mydatabase
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - spring-network

  pgadmin:
    image: dpage/pgadmin4
    ports:
      - "5050:80"
    environment:
      - PGADMIN_DEFAULT_EMAIL=admin@example.com
      - PGADMIN_DEFAULT_PASSWORD=admin
    depends_on:
      - db
    networks:
      - spring-network

networks:
  spring-network:
    driver: bridge

volumes:
  postgres-data:
    driver: local
  maven-repo:
    driver: local`}
                    </pre>
                    <p>In this example, we have a development environment with the following features:</p>
                    <ul>
                      <li>
                        <strong>Hot Reloading</strong>: The project directory is mounted into the container, allowing
                        for hot reloading of code changes
                      </li>
                      <li>
                        <strong>Remote Debugging</strong>: Port 5005 is exposed for remote debugging
                      </li>
                      <li>
                        <strong>Maven Repository Caching</strong>: Maven dependencies are cached in a volume to speed up
                        builds
                      </li>
                      <li>
                        <strong>Database Management</strong>: pgAdmin is included for database management
                      </li>
                    </ul>
                    <p>
                      The <code>Dockerfile.dev</code> might look like this:
                    </p>
                    <pre>
                      {`FROM maven:3.8.5-eclipse-temurin-17

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src

CMD ["mvn", "spring-boot:run"]`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Spring Boot Docker Compose Support</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Spring Boot 3.1+ provides built-in support for Docker Compose, making it easier to develop and
                      test applications that depend on external services like databases, message brokers, or other
                      microservices.
                    </p>
                    <p>To use this feature, add the Docker Compose dependency to your project:</p>
                    <pre>
                      {`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-docker-compose</artifactId>
    <optional>true</optional>
</dependency>`}
                    </pre>
                    <p>
                      Create a <code>docker-compose.yml</code> file in your project root:
                    </p>
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
                      When you start your Spring Boot application, it will automatically start the Docker Compose
                      services and configure the application to connect to them. You can customize this behavior in your{" "}
                      <code>application.yml</code>:
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
                    <p>
                      The <code>lifecycle-management</code> property can have the following values:
                    </p>
                    <ul>
                      <li>
                        <strong>start_and_stop</strong>: Start the services when the application starts and stop them
                        when it stops
                      </li>
                      <li>
                        <strong>start_only</strong>: Start the services when the application starts but don't stop them
                        when it stops
                      </li>
                      <li>
                        <strong>none</strong>: Don't start or stop the services
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Docker Compose Profiles</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Docker Compose profiles allow you to selectively enable services for different environments or use
                      cases. This is particularly useful for complex applications with many services.
                    </p>
                    <pre>
                      {`version: '3.8'
services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=\${SPRING_PROFILES_ACTIVE:-dev}
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mydatabase
      - SPRING_DATASOURCE_USERNAME=myuser
      - SPRING_DATASOURCE_PASSWORD=mypassword
    depends_on:
      - db
    networks:
      - spring-network

  db:
    image: postgres:13
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=mydatabase
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - spring-network

  pgadmin:
    image: dpage/pgadmin4
    profiles:
      - dev
    ports:
      - "5050:80"
    environment:
      - PGADMIN_DEFAULT_EMAIL=admin@example.com
      - PGADMIN_DEFAULT_PASSWORD=admin
    depends_on:
      - db
    networks:
      - spring-network

  prometheus:
    image: prom/prometheus
    profiles:
      - monitoring
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    networks:
      - spring-network

  grafana:
    image: grafana/grafana
    profiles:
      - monitoring
    ports:
      - "3000:3000"
    depends_on:
      - prometheus
    networks:
      - spring-network

networks:
  spring-network:
    driver: bridge

volumes:
  postgres-data:
    driver: local`}
                    </pre>
                    <p>
                      In this example, we have defined two profiles: <code>dev</code> and <code>monitoring</code>. The{" "}
                      <code>pgadmin</code> service is only enabled with the <code>dev</code> profile, while the{" "}
                      <code>prometheus</code> and <code>grafana</code> services are only enabled with the{" "}
                      <code>monitoring</code> profile.
                    </p>
                    <p>To start services with specific profiles:</p>
                    <pre>
                      {`# Start with the dev profile
docker-compose --profile dev up

# Start with the monitoring profile
docker-compose --profile monitoring up

# Start with both profiles
docker-compose --profile dev --profile monitoring up`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Docker Compose in Production</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                While Docker Compose is primarily designed for development and testing environments, it can also be used
                in production for simple applications. However, for more complex applications, container orchestration
                platforms like Kubernetes are recommended.
              </p>
              <p>If you do use Docker Compose in production, consider the following best practices:</p>
              <ol>
                <li>
                  <strong>Use specific image tags</strong>: Avoid using <code>latest</code> tags, as they can lead to
                  unexpected changes.
                </li>
                <li>
                  <strong>Set resource limits</strong>: Use the <code>deploy</code> section to set resource limits for
                  your services.
                </li>
                <li>
                  <strong>Use secrets management</strong>: Use Docker secrets or environment variables from a secure
                  source.
                </li>
                <li>
                  <strong>Implement health checks</strong>: Use the <code>healthcheck</code> section to define health
                  checks for your services.
                </li>
                <li>
                  <strong>Set up monitoring and logging</strong>: Configure proper monitoring and logging for your
                  services.
                </li>
                <li>
                  <strong>Use Docker Compose override files</strong>: Use override files to customize your configuration
                  for different environments.
                </li>
                <li>
                  <strong>Consider using Docker Swarm</strong>: Docker Swarm can use Docker Compose files for
                  orchestration.
                </li>
              </ol>
              <p>Example of a production-ready Docker Compose file:</p>
              <pre>
                {`version: '3.8'
services:
  app:
    image: my-registry/spring-boot-app:1.0.0
    deploy:
      replicas: 3
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
      restart_policy:
        condition: on-failure
        max_attempts: 3
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=prod
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mydatabase
      - SPRING_DATASOURCE_USERNAME_FILE=/run/secrets/db_username
      - SPRING_DATASOURCE_PASSWORD_FILE=/run/secrets/db_password
    secrets:
      - db_username
      - db_password
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s
    networks:
      - spring-network

  db:
    image: postgres:13
    deploy:
      replicas: 1
      resources:
        limits:
          cpus: '1.0'
          memory: 1G
      restart_policy:
        condition: on-failure
    environment:
      - POSTGRES_DB=mydatabase
      - POSTGRES_USER_FILE=/run/secrets/db_username
      - POSTGRES_PASSWORD_FILE=/run/secrets/db_password
    volumes:
      - postgres-data:/var/lib/postgresql/data
    secrets:
      - db_username
      - db_password
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "myuser", "-d", "mydatabase"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s
    networks:
      - spring-network

networks:
  spring-network:
    driver: overlay

volumes:
  postgres-data:
    driver: local

secrets:
  db_username:
    external: true
  db_password:
    external: true`}
              </pre>
              <p>This example includes several production-ready features:</p>
              <ul>
                <li>
                  <strong>Replicas</strong>: Multiple instances of the application for high availability
                </li>
                <li>
                  <strong>Resource Limits</strong>: CPU and memory limits for each service
                </li>
                <li>
                  <strong>Restart Policy</strong>: Automatic restart on failure
                </li>
                <li>
                  <strong>Secrets</strong>: External secrets for sensitive information
                </li>
                <li>
                  <strong>Health Checks</strong>: Regular health checks to ensure services are running properly
                </li>
                <li>
                  <strong>Overlay Network</strong>: A more robust network driver for production
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Docker Compose</h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>Use version control</strong>: Store your Docker Compose files in version control along with
                  your application code.
                </li>
                <li>
                  <strong>Use environment variables</strong>: Externalize configuration using environment variables or
                  <code>.env</code> files.
                </li>
                <li>
                  <strong>Use override files</strong>: Use <code>docker-compose.override.yml</code> for
                  environment-specific configurations.
                </li>
                <li>
                  <strong>Set dependencies correctly</strong>: Use <code>depends_on</code> to ensure services start in
                  the correct order.
                </li>
                <li>
                  <strong>Use named volumes</strong>: Use named volumes for persistent data to avoid data loss.
                </li>
                <li>
                  <strong>Use networks</strong>: Define custom networks for better isolation and security.
                </li>
                <li>
                  <strong>Use health checks</strong>: Implement health checks to ensure services are ready before
                  dependent services start.
                </li>
                <li>
                  <strong>Use specific image tags</strong>: Avoid using <code>latest</code> tags for reproducible
                  builds.
                </li>
                <li>
                  <strong>Optimize build context</strong>: Use <code>.dockerignore</code> to exclude unnecessary files
                  from the build context.
                </li>
                <li>
                  <strong>Use profiles</strong>: Use profiles to selectively enable services for different environments.
                </li>
              </ol>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Spring Boot with PostgreSQL and Redis</h2>
            <Card>
              <CardHeader>
                <CardTitle>Docker Compose for Spring Boot with PostgreSQL and Redis</CardTitle>
                <CardDescription>
                  A complete Docker Compose setup for a Spring Boot application with PostgreSQL and Redis
                </CardDescription>
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
      - SPRING_PROFILES_ACTIVE=docker
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/mydb
      - SPRING_DATASOURCE_USERNAME=myuser
      - SPRING_DATASOURCE_PASSWORD=mypassword
      - SPRING_REDIS_HOST=redis
      - SPRING_REDIS_PORT=6379
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - spring-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

  postgres:
    image: postgres:15-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./init-scripts:/docker-entrypoint-initdb.d
    networks:
      - spring-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U myuser -d mydb"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis-data:/data
    networks:
      - spring-network
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5

networks:
  spring-network:
    driver: bridge

volumes:
  postgres-data:
    driver: local
  redis-data:
    driver: local`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Dockerfile</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /app
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src
RUN ./mvnw package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">init-scripts/01-init.sql</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(id),
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(id),
    product_id INT NOT NULL REFERENCES products(id),
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Insert sample data
INSERT INTO users (username, email, password) VALUES
('john_doe', 'john@example.com', '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG'),
('jane_smith', 'jane@example.com', '$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG');

INSERT INTO products (name, description, price, stock) VALUES
('Laptop', 'High-performance laptop', 1299.99, 10),
('Smartphone', 'Latest smartphone model', 699.99, 20),
('Headphones', 'Noise-cancelling headphones', 199.99, 30);`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">application-docker.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`spring:
  datasource:
    url: jdbc:postgresql://postgres:5432/mydb
    username: myuser
    password: mypassword
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: validate
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
  redis:
    host: redis
    port: 6379
  cache:
    type: redis
    redis:
      time-to-live: 60000
      cache-null-values: false

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
  endpoint:
    health:
      show-details: always
      probes:
        enabled: true
  health:
    livenessState:
      enabled: true
    readinessState:
      enabled: true

logging:
  level:
    org.springframework: INFO
    com.example: DEBUG`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Microservices Architecture</h2>
            <Card>
              <CardHeader>
                <CardTitle>Docker Compose for Microservices</CardTitle>
                <CardDescription>
                  A Docker Compose setup for a microservices architecture with Spring Boot
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">docker-compose.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`version: '3.8'
services:
  # Infrastructure Services
  config-server:
    build: ./config-server
    ports:
      - "8888:8888"
    networks:
      - microservice-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8888/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

  eureka-server:
    build: ./eureka-server
    ports:
      - "8761:8761"
    depends_on:
      config-server:
        condition: service_healthy
    environment:
      - SPRING_CLOUD_CONFIG_URI=http://config-server:8888
    networks:
      - microservice-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8761/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

  api-gateway:
    build: ./api-gateway
    ports:
      - "8080:8080"
    depends_on:
      config-server:
        condition: service_healthy
      eureka-server:
        condition: service_healthy
    environment:
      - SPRING_CLOUD_CONFIG_URI=http://config-server:8888
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
    networks:
      - microservice-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

  # Database Services
  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_USER=postgres
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./init-scripts:/docker-entrypoint-initdb.d
    networks:
      - microservice-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  mongodb:
    image: mongo:6-jammy
    environment:
      - MONGO_INITDB_ROOT_USERNAME=mongodb
      - MONGO_INITDB_ROOT_PASSWORD=mongodb
    volumes:
      - mongodb-data:/data/db
    networks:
      - microservice-network
    healthcheck:
      test: ["CMD", "mongosh", "--eval", "db.adminCommand('ping')"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Message Broker
  kafka:
    image: confluentinc/cp-kafka:7.3.0
    depends_on:
      - zookeeper
    environment:
      - KAFKA_BROKER_ID=1
      - KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181
      - KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://kafka:9092
      - KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1
    networks:
      - microservice-network
    healthcheck:
      test: ["CMD-SHELL", "kafka-topics --bootstrap-server localhost:9092 --list"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

  zookeeper:
    image: confluentinc/cp-zookeeper:7.3.0
    environment:
      - ZOOKEEPER_CLIENT_PORT=2181
    networks:
      - microservice-network
    healthcheck:
      test: ["CMD-SHELL", "echo ruok | nc localhost 2181 | grep imok"]
      interval: 10s
      timeout: 5s
      retries: 5

  # Microservices
  user-service:
    build: ./user-service
    depends_on:
      config-server:
        condition: service_healthy
      eureka-server:
        condition: service_healthy
      postgres:
        condition: service_healthy
    environment:
      - SPRING_CLOUD_CONFIG_URI=http://config-server:8888
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/userdb
      - SPRING_DATASOURCE_USERNAME=postgres
      - SPRING_DATASOURCE_PASSWORD=postgres
    networks:
      - microservice-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8081/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

  product-service:
    build: ./product-service
    depends_on:
      config-server:
        condition: service_healthy
      eureka-server:
        condition: service_healthy
      mongodb:
        condition: service_healthy
    environment:
      - SPRING_CLOUD_CONFIG_URI=http://config-server:8888
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
      - SPRING_DATA_MONGODB_URI=mongodb://mongodb:mongodb@mongodb:27017/productdb
    networks:
      - microservice-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8082/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

  order-service:
    build: ./order-service
    depends_on:
      config-server:
        condition: service_healthy
      eureka-server:
        condition: service_healthy
      postgres:
        condition: service_healthy
      kafka:
        condition: service_healthy
      user-service:
        condition: service_healthy
      product-service:
        condition: service_healthy
    environment:
      - SPRING_CLOUD_CONFIG_URI=http://config-server:8888
      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/orderdb
      - SPRING_DATASOURCE_USERNAME=postgres
      - SPRING_DATASOURCE_PASSWORD=postgres
      - SPRING_KAFKA_BOOTSTRAP_SERVERS=kafka:9092
    networks:
      - microservice-network
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8083/actuator/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

  # Monitoring
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    networks:
      - microservice-network
    profiles:
      - monitoring

  grafana:
    image: grafana/grafana
    ports:
      - "3000:3000"
    depends_on:
      - prometheus
    networks:
      - microservice-network
    profiles:
      - monitoring

networks:
  microservice-network:
    driver: bridge

volumes:
  postgres-data:
    driver: local
  mongodb-data:
    driver: local`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Project Structure</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`microservices-project/
├── docker-compose.yml
├── prometheus.yml
├── init-scripts/
│   ├── 01-create-databases.sql
│   └── 02-init-data.sql
├── config-server/
│   ├── Dockerfile
│   ├── pom.xml
│   └── src/
├── eureka-server/
│   ├── Dockerfile
│   ├── pom.xml
│   └── src/
├── api-gateway/
│   ├── Dockerfile
│   ├── pom.xml
│   └── src/
├── user-service/
│   ├── Dockerfile
│   ├── pom.xml
│   └── src/
├── product-service/
│   ├── Dockerfile
│   ├── pom.xml
│   └── src/
└── order-service/
    ├── Dockerfile
    ├── pom.xml
    └── src/`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">prometheus.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'config-server'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['config-server:8888']

  - job_name: 'eureka-server'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['eureka-server:8761']

  - job_name: 'api-gateway'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['api-gateway:8080']

  - job_name: 'user-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['user-service:8081']

  - job_name: 'product-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['product-service:8082']

  - job_name: 'order-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['order-service:8083']`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">init-scripts/01-create-databases.sql</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`CREATE DATABASE userdb;
CREATE DATABASE orderdb;

\c userdb;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

\c orderdb;

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) NOT NULL,
    shipping_address TEXT NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL,
    product_id VARCHAR(24) NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Development Environment with Hot Reload</h2>
            <Card>
              <CardHeader>
                <CardTitle>Docker Compose for Development</CardTitle>
                <CardDescription>A Docker Compose setup for Spring Boot development with hot reload</CardDescription>
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
      dockerfile: Dockerfile.dev
    ports:
      - "8080:8080"
      - "5005:5005"  # For remote debugging
    volumes:
      - ./:/app  # Mount the project directory for hot reloading
      - maven-repo:/root/.m2  # Cache Maven dependencies
    environment:
      - SPRING_PROFILES_ACTIVE=dev
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/devdb
      - SPRING_DATASOURCE_USERNAME=devuser
      - SPRING_DATASOURCE_PASSWORD=devpass
      - JAVA_TOOL_OPTIONS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005
    depends_on:
      - db
    networks:
      - dev-network

  db:
    image: postgres:15-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=devdb
      - POSTGRES_USER=devuser
      - POSTGRES_PASSWORD=devpass
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./init-scripts:/docker-entrypoint-initdb.d
    networks:
      - dev-network

  pgadmin:
    image: dpage/pgadmin4
    ports:
      - "5050:80"
    environment:
      - PGADMIN_DEFAULT_EMAIL=admin@example.com
      - PGADMIN_DEFAULT_PASSWORD=admin
    depends_on:
      - db
    networks:
      - dev-network

  mailhog:
    image: mailhog/mailhog
    ports:
      - "1025:1025"  # SMTP server
      - "8025:8025"  # Web UI
    networks:
      - dev-network

networks:
  dev-network:
    driver: bridge

volumes:
  postgres-data:
    driver: local
  maven-repo:
    driver: local`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Dockerfile.dev</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`FROM maven:3.8.7-eclipse-temurin-17

WORKDIR /app

# Install development tools
RUN apt-get update && apt-get install -y curl

# Copy Maven wrapper and POM
COPY .mvn .mvn
COPY mvnw pom.xml ./

# Download dependencies (will be cached in volume)
RUN ./mvnw dependency:go-offline -B

# Set Spring Boot devtools properties
ENV SPRING_DEVTOOLS_RESTART_ENABLED=true
ENV SPRING_DEVTOOLS_LIVERELOAD_ENABLED=true

# Expose ports
EXPOSE 8080 5005

# Start the application with Spring Boot DevTools
CMD ["./mvnw", "spring-boot:run", "-Dspring-boot.run.jvmArguments='-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005'"]`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">application-dev.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`spring:
  datasource:
    url: jdbc:postgresql://db:5432/devdb
    username: devuser
    password: devpass
    driver-class-name: org.postgresql.Driver
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
  devtools:
    restart:
      enabled: true
      additional-paths: src/main/java
    livereload:
      enabled: true
  mail:
    host: mailhog
    port: 1025
    properties:
      mail:
        smtp:
          auth: false
          starttls:
            enable: false

logging:
  level:
    org.springframework: INFO
    org.hibernate.SQL: DEBUG
    org.hibernate.type.descriptor.sql.BasicBinder: TRACE
    com.example: DEBUG

management:
  endpoints:
    web:
      exposure:
        include: "*"
  endpoint:
    health:
      show-details: always`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">.dockerignore</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`target/
.git/
.gitignore
README.md
.idea/
*.iml
.vscode/
node_modules/
.DS_Store`}
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
                <CardTitle>Exercise 1: Basic Docker Compose Setup</CardTitle>
                <CardDescription>
                  Create a Docker Compose file for a Spring Boot application with PostgreSQL
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a simple Spring Boot REST API application</li>
                  <li>Create a Dockerfile for the Spring Boot application</li>
                  <li>
                    Create a docker-compose.yml file with:
                    <ul className="list-disc pl-5 mt-1">
                      <li>A service for the Spring Boot application</li>
                      <li>A service for PostgreSQL</li>
                      <li>A network to connect the services</li>
                      <li>A volume for PostgreSQL data</li>
                    </ul>
                  </li>
                  <li>Configure environment variables for database connection</li>
                  <li>Add health checks for both services</li>
                  <li>Test the setup by running docker-compose up</li>
                  <li>Verify that the application can connect to the database</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 2: Development Environment</CardTitle>
                <CardDescription>Create a Docker Compose setup for Spring Boot development</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a Dockerfile.dev for development</li>
                  <li>
                    Create a docker-compose.yml file with:
                    <ul className="list-disc pl-5 mt-1">
                      <li>A service for the Spring Boot application with hot reload</li>
                      <li>A service for PostgreSQL</li>
                      <li>A service for pgAdmin</li>
                      <li>A service for a mail server (e.g., MailHog)</li>
                    </ul>
                  </li>
                  <li>Configure volume mounts for hot reloading</li>
                  <li>Configure remote debugging</li>
                  <li>Configure environment variables for development</li>
                  <li>Test the setup by making changes to the code and observing hot reload</li>
                  <li>Test remote debugging by setting breakpoints and debugging from your IDE</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 3: Microservices Architecture</CardTitle>
                <CardDescription>Create a Docker Compose setup for a microservices architecture</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Create a microservices architecture with:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Config Server</li>
                      <li>Eureka Server</li>
                      <li>API Gateway</li>
                      <li>At least two microservices</li>
                    </ul>
                  </li>
                  <li>Create Dockerfiles for each service</li>
                  <li>
                    Create a docker-compose.yml file with:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Services for each microservice</li>
                      <li>Services for infrastructure components (e.g., databases, message brokers)</li>
                      <li>Networks to connect the services</li>
                      <li>Volumes for persistent data</li>
                    </ul>
                  </li>
                  <li>Configure service dependencies using depends_on with condition</li>
                  <li>Configure health checks for all services</li>
                  <li>Add monitoring services (e.g., Prometheus, Grafana) using profiles</li>
                  <li>Test the setup by running docker-compose up</li>
                  <li>Verify that the microservices can communicate with each other</li>
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
                        href="https://docs.docker.com/compose/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Compose Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.docker-compose"
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
                        href="https://docs.docker.com/compose/compose-file/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Compose File Reference
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.docker.com/compose/environment-variables/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Compose Environment Variables
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
                        href="https://spring.io/guides/gs/spring-boot-docker/"
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
                        href="https://www.baeldung.com/spring-boot-docker-compose"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Boot Docker Compose
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.baeldung.com/docker-compose-spring-boot-mysql"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Docker Compose with Spring Boot and MySQL
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.docker.com/blog/kickstart-your-spring-boot-application-development/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Blog: Kickstart Your Spring Boot Application Development
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
                        href="/modules/cloud-deployment/containerization/container-orchestration"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Container Orchestration
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
                        href="https://github.com/docker/compose-cli"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Compose CLI
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/docker/awesome-compose"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Awesome Compose - Sample Compose Applications
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/portainer/portainer"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Portainer - Docker Management UI
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/docker/docker-bench-security"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Bench Security
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
          <Link href="/modules/cloud-deployment/containerization/container-orchestration">
            ← Back to Container Orchestration
          </Link>
        </Button>
        <Button asChild>
          <Link href="/modules/cloud-deployment/containerization/ci-cd-pipeline">Next: CI/CD Pipeline →</Link>
        </Button>
      </div>
    </div>
  )
}
