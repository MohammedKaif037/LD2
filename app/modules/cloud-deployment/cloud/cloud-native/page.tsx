import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CloudNativePatterns() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Cloud-Native Patterns</h1>
          <Badge>Module 7.1.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn essential patterns for building cloud-native applications with Spring Boot
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Cloud-Native Patterns</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Cloud-native patterns are design patterns that help you build applications that are optimized for cloud
                environments. These patterns address common challenges in distributed systems, such as scalability,
                resilience, and manageability.
              </p>
              <p>
                Spring Boot provides excellent support for implementing cloud-native patterns through its ecosystem,
                particularly with Spring Cloud and related projects.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Key Cloud-Native Patterns</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Externalized Configuration</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Externalized configuration is a pattern that separates configuration from code, allowing
                      applications to run in different environments without code changes.
                    </p>
                    <p>Spring Boot supports this pattern through:</p>
                    <ul>
                      <li>Property files (application.properties, application.yml)</li>
                      <li>Environment variables</li>
                      <li>Command-line arguments</li>
                      <li>Spring Cloud Config Server for centralized configuration</li>
                    </ul>
                    <pre>
                      {`# application.yml
spring:
  datasource:
    url: \${DATABASE_URL}
    username: \${DATABASE_USERNAME}
    password: \${DATABASE_PASSWORD}`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Service Discovery</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Service discovery allows services to find and communicate with each other without hardcoding
                      hostnames or ports. This is essential in dynamic cloud environments where services can scale up,
                      down, or move.
                    </p>
                    <p>Spring Cloud provides several options for service discovery:</p>
                    <ul>
                      <li>Eureka (Netflix OSS)</li>
                      <li>Consul</li>
                      <li>Zookeeper</li>
                      <li>Kubernetes Service Discovery</li>
                    </ul>
                    <pre>
                      {`# Enable Eureka client
spring:
  application:
    name: user-service
eureka:
  client:
    serviceUrl:
      defaultZone: http://eureka-server:8761/eureka/`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Circuit Breaker</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      The circuit breaker pattern prevents cascading failures by failing fast when a service is
                      unavailable. It allows the system to degrade gracefully and recover when the service becomes
                      available again.
                    </p>
                    <p>
                      Spring Cloud Circuit Breaker provides a unified API for various circuit breaker implementations:
                    </p>
                    <ul>
                      <li>Resilience4J</li>
                      <li>Spring Retry</li>
                      <li>Sentinel</li>
                    </ul>
                    <pre>
                      {`@CircuitBreaker(name = "userService", fallbackMethod = "getUserFallback")
public User getUser(Long id) {
    return userServiceClient.getUser(id);
}

public User getUserFallback(Long id, Exception ex) {
    return new User(id, "Default User", "default@example.com");
}`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>API Gateway</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      An API Gateway serves as a single entry point for all client requests, routing them to appropriate
                      services. It can also handle cross-cutting concerns like authentication, rate limiting, and
                      monitoring.
                    </p>
                    <p>Spring Cloud Gateway provides a powerful API Gateway solution with features like:</p>
                    <ul>
                      <li>Dynamic routing</li>
                      <li>Request transformation</li>
                      <li>Circuit breaking integration</li>
                      <li>Rate limiting</li>
                    </ul>
                    <pre>
                      {`spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/users/**
          filters:
            - StripPrefix=1
            - name: CircuitBreaker
              args:
                name: userServiceCircuitBreaker
                fallbackUri: forward:/fallback/users`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Distributed Tracing</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Distributed tracing tracks requests as they flow through microservices, making it easier to
                      identify performance bottlenecks and troubleshoot issues.
                    </p>
                    <p>Spring Cloud Sleuth and Micrometer Tracing provide distributed tracing capabilities:</p>
                    <ul>
                      <li>Automatic context propagation</li>
                      <li>Integration with tracing systems like Zipkin</li>
                      <li>Correlation IDs for request tracking</li>
                    </ul>
                    <pre>
                      {`# Enable Micrometer Tracing with Zipkin
management:
  tracing:
    sampling:
      probability: 1.0
    enabled: true
  zipkin:
    tracing:
      endpoint: http://zipkin:9411/api/v2/spans`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Health Checks and Metrics</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Health checks and metrics are essential for monitoring the health and performance of cloud-native
                      applications.
                    </p>
                    <p>Spring Boot Actuator provides built-in endpoints for:</p>
                    <ul>
                      <li>Health checks</li>
                      <li>Metrics collection</li>
                      <li>Environment information</li>
                      <li>Application information</li>
                    </ul>
                    <pre>
                      {`# Enable Actuator endpoints
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: always`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Event-Driven Architecture</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Event-driven architecture uses events to communicate between services, enabling loose coupling and
                      scalability.
                    </p>
                    <p>Spring Boot supports event-driven architecture through:</p>
                    <ul>
                      <li>Spring Cloud Stream for messaging abstraction</li>
                      <li>Integration with message brokers like Kafka, RabbitMQ, and Redis</li>
                      <li>Event processing with Spring Integration</li>
                    </ul>
                    <pre>
                      {`# Spring Cloud Stream with Kafka
spring:
  cloud:
    stream:
      function:
        definition: processOrder
      bindings:
        processOrder-in-0:
          destination: orders
          group: order-processing-service
      kafka:
        binder:
          brokers: kafka:9092`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing Cloud-Native Patterns with Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot provides a solid foundation for implementing cloud-native patterns. Here are some best
                practices:
              </p>
              <ol>
                <li>
                  <strong>Use Spring Profiles</strong>: Create different profiles for different environments (dev, test,
                  prod) to manage environment-specific configurations.
                </li>
                <li>
                  <strong>Implement Health Checks</strong>: Use Spring Boot Actuator to expose health endpoints that can
                  be monitored by container orchestration platforms.
                </li>
                <li>
                  <strong>Design for Failure</strong>: Implement circuit breakers, timeouts, and fallbacks to handle
                  failures gracefully.
                </li>
                <li>
                  <strong>Centralize Configuration</strong>: Use Spring Cloud Config Server to centralize and manage
                  configuration across multiple services.
                </li>
                <li>
                  <strong>Enable Observability</strong>: Implement distributed tracing, logging, and metrics collection
                  to gain visibility into your application.
                </li>
                <li>
                  <strong>Containerize Applications</strong>: Package your Spring Boot applications as Docker containers
                  for consistent deployment across environments.
                </li>
                <li>
                  <strong>Implement API Gateway</strong>: Use Spring Cloud Gateway to create a single entry point for
                  clients and handle cross-cutting concerns.
                </li>
              </ol>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Externalized Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>Using Spring Cloud Config Server</CardTitle>
                <CardDescription>Centralized configuration management for microservices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Config Server (pom.xml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-server</artifactId>
</dependency>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Config Server (ConfigServerApplication.java)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Config Server (application.yml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`server:
  port: 8888

spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/your-org/config-repo
          default-label: main
          search-paths: '{application}'`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Client Service (pom.xml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Client Service (bootstrap.yml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`spring:
  application:
    name: user-service
  cloud:
    config:
      uri: http://config-server:8888
      fail-fast: true
      retry:
        max-attempts: 6
        initial-interval: 1000
        max-interval: 2000
        multiplier: 1.1`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Client Service (ConfigController.java)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@RestController
@RefreshScope
public class ConfigController {

    @Value("\${app.feature.enabled:false}")
    private boolean featureEnabled;
    
    @Value("\${app.message:Default Message}")
    private String message;
    
    @GetMapping("/config")
    public Map<String, Object> getConfig() {
        Map<String, Object> config = new HashMap<>();
        config.put("featureEnabled", featureEnabled);
        config.put("message", message);
        return config;
    }
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Circuit Breaker</h2>
            <Card>
              <CardHeader>
                <CardTitle>Using Resilience4J with Spring Boot</CardTitle>
                <CardDescription>Implementing the circuit breaker pattern for fault tolerance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">pom.xml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-circuitbreaker-resilience4j</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
</dependency>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">application.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`resilience4j:
  circuitbreaker:
    instances:
      userService:
        registerHealthIndicator: true
        slidingWindowSize: 10
        minimumNumberOfCalls: 5
        permittedNumberOfCallsInHalfOpenState: 3
        automaticTransitionFromOpenToHalfOpenEnabled: true
        waitDurationInOpenState: 5s
        failureRateThreshold: 50
        eventConsumerBufferSize: 10
  timelimiter:
    instances:
      userService:
        timeoutDuration: 2s`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">UserService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Service
public class UserService {

    private final RestTemplate restTemplate;
    
    public UserService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
    
    @CircuitBreaker(name = "userService", fallbackMethod = "getUserFallback")
    @Bulkhead(name = "userService")
    @Retry(name = "userService")
    @TimeLimiter(name = "userService")
    public CompletableFuture<User> getUser(Long id) {
        return CompletableFuture.supplyAsync(() -> {
            String url = "http://user-service/users/" + id;
            return restTemplate.getForObject(url, User.class);
        });
    }
    
    public CompletableFuture<User> getUserFallback(Long id, Exception ex) {
        return CompletableFuture.supplyAsync(() -> {
            // Return a default or cached user
            return new User(id, "Default User", "default@example.com");
        });
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">UserController.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/{id}")
    public CompletableFuture<User> getUser(@PathVariable Long id) {
        return userService.getUser(id);
    }
}`}
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
                <CardTitle>Exercise 1: Implement Externalized Configuration</CardTitle>
                <CardDescription>Create a Spring Boot application with externalized configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Create a Spring Boot application with the following dependencies:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Spring Boot Web</li>
                      <li>Spring Boot Actuator</li>
                      <li>Spring Cloud Config Client</li>
                    </ul>
                  </li>
                  <li>Create a configuration class that loads properties from different sources</li>
                  <li>Implement a REST controller that displays configuration values</li>
                  <li>Configure the application to use different profiles (dev, test, prod)</li>
                  <li>Test the application with different profiles and configuration sources</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 2: Implement Circuit Breaker Pattern</CardTitle>
                <CardDescription>Create a resilient microservice with circuit breaker pattern</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Create a Spring Boot application with the following dependencies:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Spring Boot Web</li>
                      <li>Spring Boot Actuator</li>
                      <li>Spring Cloud Circuit Breaker Resilience4J</li>
                    </ul>
                  </li>
                  <li>Create a service that calls an external API (you can use a public API or mock one)</li>
                  <li>Implement circuit breaker pattern using Resilience4J</li>
                  <li>Add a fallback method that returns default data when the circuit is open</li>
                  <li>Configure circuit breaker parameters (failure threshold, wait duration, etc.)</li>
                  <li>Test the circuit breaker by simulating failures in the external API</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 3: Implement Service Discovery</CardTitle>
                <CardDescription>Create microservices with service discovery using Eureka</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a Eureka Server application</li>
                  <li>Create two microservices (e.g., user-service and order-service)</li>
                  <li>Configure the microservices to register with Eureka</li>
                  <li>Implement a REST endpoint in the order-service that calls the user-service</li>
                  <li>Use a load-balanced RestTemplate or WebClient to make the call</li>
                  <li>Test the service discovery by starting multiple instances of the user-service</li>
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
                        href="https://spring.io/projects/spring-cloud"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-cloud-config/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Config
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-cloud-netflix/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Netflix
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://resilience4j.readme.io/docs"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Resilience4J Documentation
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Books and Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.manning.com/books/spring-microservices-in-action-second-edition"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Microservices in Action
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.baeldung.com/spring-cloud-tutorial"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Cloud Tutorial
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.baeldung.com/spring-cloud-configuration"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Cloud Config
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.baeldung.com/spring-cloud-netflix-eureka"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Cloud Netflix Eureka
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
                        href="/modules/cloud-deployment/spring-cloud"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud
                      </Link>
                    </li>
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
                        href="/modules/microservices/service-discovery"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Service Discovery
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
          <Link href="/modules/cloud-deployment/cloud-integration">← Back to Cloud Integration</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/cloud-deployment/cloud-integration/spring-cloud">Next: Spring Cloud →</Link>
        </Button>
      </div>
    </div>
  )
}
