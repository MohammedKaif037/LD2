import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SpringCloud() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Cloud</h1>
          <Badge>Module 7.1.2</Badge>
        </div>
        <p className="text-muted-foreground">Master Spring Cloud for building distributed systems and microservices</p>
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Spring Cloud</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Cloud provides tools for developers to quickly build common patterns in distributed systems. It
                builds on Spring Boot to make connecting to services and implementing patterns like configuration
                management, service discovery, circuit breakers, intelligent routing, and more as simple as possible.
              </p>
              <p>
                Spring Cloud is an umbrella project consisting of independent projects that address specific challenges
                in distributed systems:
              </p>
              <ul>
                <li>Spring Cloud Config - Centralized external configuration management</li>
                <li>Spring Cloud Netflix - Integration with Netflix OSS components</li>
                <li>Spring Cloud OpenFeign - Declarative REST client</li>
                <li>Spring Cloud Stream - Message-driven microservices framework</li>
                <li>Spring Cloud Gateway - API Gateway built on Spring WebFlux</li>
                <li>Spring Cloud Circuit Breaker - Unified circuit breaker abstraction</li>
                <li>Spring Cloud Sleuth - Distributed tracing solution</li>
                <li>And many more...</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Key Spring Cloud Components</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Spring Cloud Config</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Spring Cloud Config provides server-side and client-side support for externalized configuration in
                      a distributed system. With the Config Server, you have a central place to manage external
                      properties for applications across all environments.
                    </p>
                    <p>Key features:</p>
                    <ul>
                      <li>HTTP resource-based API for external configuration</li>
                      <li>Encryption and decryption support</li>
                      <li>Embeddable easily in a Spring Boot application</li>
                      <li>Git, Vault, JDBC, Redis, and AWS S3 backend support</li>
                    </ul>
                    <pre>
                      {`# Config Server application.yml
server:
  port: 8888
spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/myorg/config-repo
          default-label: main
          search-paths: '{application}'`}
                    </pre>
                    <pre>
                      {`# Config Client bootstrap.yml
spring:
  application:
    name: my-service
  cloud:
    config:
      uri: http://config-server:8888
      fail-fast: true`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Spring Cloud Netflix</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Spring Cloud Netflix provides Netflix OSS integrations for Spring Boot apps through
                      autoconfiguration and binding to the Spring Environment.
                    </p>
                    <p>Key components:</p>
                    <ul>
                      <li>
                        <strong>Eureka</strong> - Service discovery server and client
                      </li>
                      <li>
                        <strong>Hystrix</strong> - Circuit breaker with fallback support (now deprecated in favor of
                        Resilience4J)
                      </li>
                      <li>
                        <strong>Ribbon</strong> - Client-side load balancer (now deprecated in favor of Spring Cloud
                        LoadBalancer)
                      </li>
                      <li>
                        <strong>Zuul</strong> - API Gateway (now deprecated in favor of Spring Cloud Gateway)
                      </li>
                    </ul>
                    <p>Eureka Server example:</p>
                    <pre>
                      {`@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}`}
                    </pre>
                    <p>Eureka Client example:</p>
                    <pre>
                      {`@SpringBootApplication
@EnableDiscoveryClient
public class ServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceApplication.class, args);
    }
}`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Spring Cloud Gateway</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Spring Cloud Gateway provides a library for building API gateways on top of Spring WebFlux. It
                      aims to provide a simple, yet effective way to route to APIs and provide cross-cutting concerns
                      such as security, monitoring/metrics, and resiliency.
                    </p>
                    <p>Key features:</p>
                    <ul>
                      <li>Route matching based on any request attribute</li>
                      <li>Predicates and filters for request processing</li>
                      <li>Path rewriting</li>
                      <li>Integration with Spring Cloud DiscoveryClient</li>
                      <li>Easy to write custom Predicates and Filters</li>
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
            - AddRequestHeader=X-Request-Source, api-gateway
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/orders/**
          filters:
            - StripPrefix=1
            - name: CircuitBreaker
              args:
                name: orderServiceCircuitBreaker
                fallbackUri: forward:/fallback/orders`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Spring Cloud OpenFeign</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Spring Cloud OpenFeign provides declarative REST clients with Feign. It makes writing web service
                      clients easier through annotated interfaces.
                    </p>
                    <p>Key features:</p>
                    <ul>
                      <li>Declarative REST client definition</li>
                      <li>Integration with Ribbon for client-side load balancing</li>
                      <li>Integration with Hystrix for circuit breaking</li>
                      <li>Support for Spring MVC annotations</li>
                    </ul>
                    <pre>
                      {`@SpringBootApplication
@EnableFeignClients
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

@FeignClient(name = "user-service")
public interface UserClient {
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
    
    @PostMapping("/users")
    User createUser(@RequestBody User user);
}`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Spring Cloud Stream</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Spring Cloud Stream is a framework for building message-driven microservices. It provides a
                      flexible programming model built on Spring Boot and Spring Integration, hiding the complexity of
                      message brokers.
                    </p>
                    <p>Key features:</p>
                    <ul>
                      <li>Support for multiple messaging platforms (Kafka, RabbitMQ, etc.)</li>
                      <li>Persistent publish-subscribe semantics</li>
                      <li>Consumer groups for scaling</li>
                      <li>Partitioning for stateful processing</li>
                      <li>Error handling strategies</li>
                    </ul>
                    <pre>
                      {`@SpringBootApplication
@EnableBinding(Processor.class)
public class StreamApplication {
    public static void main(String[] args) {
        SpringApplication.run(StreamApplication.class, args);
    }
    
    @StreamListener(Processor.INPUT)
    @SendTo(Processor.OUTPUT)
    public String processMessage(String message) {
        return message.toUpperCase();
    }
}`}
                    </pre>
                    <p>Modern functional style (Spring Cloud Stream 3.x):</p>
                    <pre>
                      {`@SpringBootApplication
public class StreamApplication {
    public static void main(String[] args) {
        SpringApplication.run(StreamApplication.class, args);
    }
    
    @Bean
    public Function<String, String> processMessage() {
        return message -> message.toUpperCase();
    }
}`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Spring Cloud Circuit Breaker</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Spring Cloud Circuit Breaker provides a unified abstraction across different circuit breaker
                      implementations. It provides a consistent API to use in your applications, allowing you to switch
                      implementations with minimal configuration changes.
                    </p>
                    <p>Supported implementations:</p>
                    <ul>
                      <li>Resilience4J (recommended)</li>
                      <li>Spring Retry</li>
                      <li>Sentinel</li>
                      <li>Hystrix (legacy)</li>
                    </ul>
                    <pre>
                      {`@Service
public class UserService {
    private final RestTemplate restTemplate;
    private final CircuitBreakerFactory circuitBreakerFactory;
    
    public UserService(RestTemplate restTemplate, CircuitBreakerFactory circuitBreakerFactory) {
        this.restTemplate = restTemplate;
        this.circuitBreakerFactory = circuitBreakerFactory;
    }
    
    public User getUser(Long id) {
        CircuitBreaker circuitBreaker = circuitBreakerFactory.create("userService");
        return circuitBreaker.run(
            () -> restTemplate.getForObject("/users/" + id, User.class),
            throwable -> getDefaultUser(id)
        );
    }
    
    private User getDefaultUser(Long id) {
        return new User(id, "Default User", "default@example.com");
    }
}`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Spring Cloud Sleuth & Micrometer Tracing</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Spring Cloud Sleuth (now evolved into Micrometer Tracing) provides distributed tracing for Spring
                      Cloud applications. It integrates with tracing systems like Zipkin to provide insights into the
                      flow of requests across microservices.
                    </p>
                    <p>Key features:</p>
                    <ul>
                      <li>Automatic context propagation</li>
                      <li>Trace and span IDs in logs</li>
                      <li>Integration with common frameworks (RestTemplate, WebClient, Feign)</li>
                      <li>Zipkin integration</li>
                    </ul>
                    <pre>
                      {`# application.yml
spring:
  application:
    name: user-service
management:
  tracing:
    sampling:
      probability: 1.0
  zipkin:
    tracing:
      endpoint: http://zipkin:9411/api/v2/spans`}
                    </pre>
                    <p>The trace and span IDs will automatically appear in your logs:</p>
                    <pre>
                      {`2023-05-24 12:34:56.789 INFO [user-service,5577cec980ff9a9f,5577cec980ff9a9f] 1 --- [nio-8080-exec-1] c.e.u.UserController : Getting user with id 123`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Cloud Architecture Patterns</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Cloud enables several architectural patterns that are essential for building robust
                microservices:
              </p>
              <ol>
                <li>
                  <strong>Configuration Management</strong>: Centralized, versioned configuration with Spring Cloud
                  Config
                </li>
                <li>
                  <strong>Service Discovery</strong>: Dynamic service registration and discovery with Eureka or Consul
                </li>
                <li>
                  <strong>API Gateway</strong>: Centralized entry point for clients with Spring Cloud Gateway
                </li>
                <li>
                  <strong>Circuit Breaker</strong>: Fault tolerance with Resilience4J
                </li>
                <li>
                  <strong>Client-Side Load Balancing</strong>: Distribute load across service instances with Spring
                  Cloud LoadBalancer
                </li>
                <li>
                  <strong>Distributed Tracing</strong>: Track requests across services with Micrometer Tracing
                </li>
                <li>
                  <strong>Event-Driven Architecture</strong>: Message-based communication with Spring Cloud Stream
                </li>
              </ol>
              <p>A typical Spring Cloud architecture might look like this:</p>
              <ol>
                <li>
                  <strong>Config Server</strong>: Provides centralized configuration for all services
                </li>
                <li>
                  <strong>Eureka Server</strong>: Service registry where all services register themselves
                </li>
                <li>
                  <strong>API Gateway</strong>: Routes requests to appropriate services
                </li>
                <li>
                  <strong>Microservices</strong>: Business services that register with Eureka and get configuration from
                  Config Server
                </li>
                <li>
                  <strong>Zipkin Server</strong>: Collects and visualizes trace data
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Cloud Best Practices</h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>Use Spring Cloud BOM</strong>: Always use the Spring Cloud Bill of Materials (BOM) to ensure
                  compatible versions of Spring Cloud components.
                </li>
                <li>
                  <strong>Implement Circuit Breakers</strong>: Always use circuit breakers for service-to-service
                  communication to prevent cascading failures.
                </li>
                <li>
                  <strong>Centralize Configuration</strong>: Use Spring Cloud Config Server to manage configuration
                  across environments.
                </li>
                <li>
                  <strong>Enable Distributed Tracing</strong>: Implement tracing to debug and monitor requests across
                  services.
                </li>
                <li>
                  <strong>Implement Health Checks</strong>: Provide detailed health information for services to aid in
                  monitoring and troubleshooting.
                </li>
                <li>
                  <strong>Use Declarative REST Clients</strong>: Leverage Feign for cleaner, more maintainable
                  service-to-service communication.
                </li>
                <li>
                  <strong>Implement Retry Mechanisms</strong>: Use Spring Retry or Resilience4J retry capabilities for
                  transient failures.
                </li>
                <li>
                  <strong>Secure Configuration</strong>: Use encryption for sensitive configuration properties.
                </li>
                <li>
                  <strong>Implement Rate Limiting</strong>: Protect services from excessive load with rate limiting at
                  the API Gateway.
                </li>
                <li>
                  <strong>Design for Failure</strong>: Always assume that services can fail and design accordingly with
                  fallbacks and graceful degradation.
                </li>
              </ol>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Complete Spring Cloud Architecture</h2>
            <Card>
              <CardHeader>
                <CardTitle>Microservices with Spring Cloud</CardTitle>
                <CardDescription>A complete example of a microservices architecture using Spring Cloud</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Project Structure</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`cloud-demo/
├── config-server/
├── eureka-server/
├── api-gateway/
├── user-service/
├── order-service/
├── product-service/
└── zipkin-server/`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Config Server (application.yml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`server:
  port: 8888
spring:
  application:
    name: config-server
  cloud:
    config:
      server:
        git:
          uri: https://github.com/myorg/config-repo
          default-label: main
          search-paths: '{application}'
          clone-on-start: true
  security:
    user:
      name: configuser
      password: configpassword`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Eureka Server (application.yml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`server:
  port: 8761
spring:
  application:
    name: eureka-server
  config:
    import: optional:configserver:http://configuser:configpassword@config-server:8888
eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
  server:
    wait-time-in-ms-when-sync-empty: 0`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">API Gateway (application.yml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`server:
  port: 8080
spring:
  application:
    name: api-gateway
  config:
    import: optional:configserver:http://configuser:configpassword@config-server:8888
  cloud:
    gateway:
      discovery:
        locator:
          enabled: true
          lower-case-service-id: true
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/users/**
          filters:
            - name: CircuitBreaker
              args:
                name: userServiceCircuitBreaker
                fallbackUri: forward:/fallback/users
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/orders/**
          filters:
            - name: CircuitBreaker
              args:
                name: orderServiceCircuitBreaker
                fallbackUri: forward:/fallback/orders
        - id: product-service
          uri: lb://product-service
          predicates:
            - Path=/products/**
          filters:
            - name: CircuitBreaker
              args:
                name: productServiceCircuitBreaker
                fallbackUri: forward:/fallback/products
management:
  endpoints:
    web:
      exposure:
        include: gateway,health,info
  endpoint:
    gateway:
      enabled: true
    health:
      show-details: always`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">User Service (application.yml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`server:
  port: 0
spring:
  application:
    name: user-service
  config:
    import: optional:configserver:http://configuser:configpassword@config-server:8888
  datasource:
    url: jdbc:postgresql://localhost:5432/userdb
    username: postgres
    password: postgres
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
eureka:
  client:
    service-url:
      defaultZone: http://eureka-server:8761/eureka/
  instance:
    instance-id: \${spring.application.name}:\${random.uuid}
management:
  tracing:
    sampling:
      probability: 1.0
  zipkin:
    tracing:
      endpoint: http://zipkin:9411/api/v2/spans`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">User Service (UserController.java)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUser(id));
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(user));
    }
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User user) {
        return ResponseEntity.ok(userService.updateUser(id, user));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Order Service (OrderClient.java)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@FeignClient(name = "user-service", fallback = UserClientFallback.class)
public interface UserClient {
    
    @GetMapping("/users/{id}")
    User getUser(@PathVariable("id") Long id);
}

@Component
class UserClientFallback implements UserClient {
    
    @Override
    public User getUser(Long id) {
        return new User(id, "Default User", "default@example.com");
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Order Service (OrderService.java)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserClient userClient;
    private final ProductClient productClient;
    
    public OrderService(OrderRepository orderRepository, UserClient userClient, ProductClient productClient) {
        this.orderRepository = orderRepository;
        this.userClient = userClient;
        this.productClient = productClient;
    }
    
    public Order createOrder(Order order) {
        // Validate user exists
        User user = userClient.getUser(order.getUserId());
        
        // Validate products exist and are in stock
        for (OrderItem item : order.getItems()) {
            Product product = productClient.getProduct(item.getProductId());
            if (product.getStock() < item.getQuantity()) {
                throw new InsufficientStockException("Not enough stock for product: " + product.getName());
            }
        }
        
        // Create order
        order.setStatus(OrderStatus.CREATED);
        order.setCreatedAt(LocalDateTime.now());
        Order savedOrder = orderRepository.save(order);
        
        // Update product stock (in a real app, this would be a transactional operation)
        for (OrderItem item : order.getItems()) {
            productClient.updateStock(item.getProductId(), item.getQuantity());
        }
        
        return savedOrder;
    }
    
    // Other methods...
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Spring Cloud Stream</h2>
            <Card>
              <CardHeader>
                <CardTitle>Event-Driven Microservices with Spring Cloud Stream</CardTitle>
                <CardDescription>Building event-driven microservices with Kafka</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">pom.xml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-stream</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-stream-binder-kafka</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">application.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`spring:
  cloud:
    stream:
      function:
        definition: processOrder;shipOrder
      bindings:
        processOrder-in-0:
          destination: orders
          group: order-processing-service
        processOrder-out-0:
          destination: processed-orders
        shipOrder-in-0:
          destination: processed-orders
          group: shipping-service
      kafka:
        binder:
          brokers: localhost:9092
          auto-create-topics: true`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">OrderProcessor.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Configuration
public class OrderProcessor {

    private static final Logger log = LoggerFactory.getLogger(OrderProcessor.class);

    @Bean
    public Function<Order, ProcessedOrder> processOrder() {
        return order -> {
            log.info("Processing order: {}", order.getId());
            
            // Process the order
            ProcessedOrder processedOrder = new ProcessedOrder();
            processedOrder.setOrderId(order.getId());
            processedOrder.setUserId(order.getUserId());
            processedOrder.setItems(order.getItems());
            processedOrder.setTotalAmount(calculateTotal(order));
            processedOrder.setProcessedAt(LocalDateTime.now());
            processedOrder.setStatus(OrderStatus.PROCESSED);
            
            log.info("Order processed: {}", processedOrder.getOrderId());
            return processedOrder;
        };
    }
    
    @Bean
    public Consumer<ProcessedOrder> shipOrder() {
        return processedOrder -> {
            log.info("Shipping order: {}", processedOrder.getOrderId());
            
            // Simulate shipping process
            try {
                Thread.sleep(1000); // Simulate processing time
                log.info("Order shipped: {}", processedOrder.getOrderId());
            } catch (InterruptedException e) {
                log.error("Shipping process interrupted", e);
            }
        };
    }
    
    private BigDecimal calculateTotal(Order order) {
        return order.getItems().stream()
            .map(item -> item.getPrice().multiply(new BigDecimal(item.getQuantity())))
            .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">OrderController.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@RestController
@RequestMapping("/orders")
public class OrderController {

    private final StreamBridge streamBridge;
    
    public OrderController(StreamBridge streamBridge) {
        this.streamBridge = streamBridge;
    }
    
    @PostMapping
    public ResponseEntity<String> createOrder(@RequestBody Order order) {
        // Validate order
        if (order.getItems() == null || order.getItems().isEmpty()) {
            return ResponseEntity.badRequest().body("Order must contain at least one item");
        }
        
        // Set order ID and timestamp
        order.setId(UUID.randomUUID().toString());
        order.setCreatedAt(LocalDateTime.now());
        
        // Send order to Kafka topic
        streamBridge.send("orders", order);
        
        return ResponseEntity.accepted().body("Order submitted: " + order.getId());
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
                <CardTitle>Exercise 1: Build a Microservices Architecture</CardTitle>
                <CardDescription>Create a simple microservices architecture with Spring Cloud</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Create the following Spring Boot applications:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Config Server</li>
                      <li>Eureka Server</li>
                      <li>API Gateway</li>
                      <li>Product Service</li>
                      <li>Order Service</li>
                    </ul>
                  </li>
                  <li>Configure the Config Server to use a Git repository for configuration</li>
                  <li>Register all services with Eureka</li>
                  <li>Configure the API Gateway to route requests to the appropriate services</li>
                  <li>Implement a REST API in the Product Service to manage products</li>
                  <li>Implement a REST API in the Order Service that calls the Product Service using Feign</li>
                  <li>Implement circuit breakers for service-to-service communication</li>
                  <li>Add distributed tracing with Micrometer Tracing and Zipkin</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 2: Event-Driven Microservices</CardTitle>
                <CardDescription>Build event-driven microservices with Spring Cloud Stream</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Create the following Spring Boot applications:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Order Service</li>
                      <li>Inventory Service</li>
                      <li>Notification Service</li>
                    </ul>
                  </li>
                  <li>Configure Spring Cloud Stream with Kafka in each service</li>
                  <li>Implement a REST API in the Order Service to create orders</li>
                  <li>When an order is created, publish an OrderCreated event to Kafka</li>
                  <li>Configure the Inventory Service to consume OrderCreated events and update inventory</li>
                  <li>When inventory is updated, publish an InventoryUpdated event</li>
                  <li>Configure the Notification Service to consume both OrderCreated and InventoryUpdated events</li>
                  <li>Send notifications (console logs) when events are received</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 3: Centralized Configuration</CardTitle>
                <CardDescription>Implement centralized configuration with Spring Cloud Config</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a Git repository for configuration</li>
                  <li>Add configuration files for different environments (dev, test, prod)</li>
                  <li>Create a Config Server application</li>
                  <li>Create a client application that gets its configuration from the Config Server</li>
                  <li>Implement a /refresh endpoint to refresh configuration at runtime</li>
                  <li>Add encryption/decryption for sensitive properties</li>
                  <li>Test configuration changes by updating the Git repository</li>
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
                        href="https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Gateway
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-cloud-openfeign/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud OpenFeign
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
                        href="https://www.youtube.com/watch?v=ZyK5QrKCbwM"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Full Course (YouTube)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://spring.io/guides/gs/spring-cloud-loadbalancer/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Guide: Client-Side Load-Balancing
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
                        href="/modules/cloud-deployment/cloud-integration/cloud-native-patterns"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Cloud-Native Patterns
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/cloud-deployment/cloud-platform-deployment"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Cloud Platform Deployment
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
          <Link href="/modules/cloud-deployment/cloud-integration/cloud-native-patterns">
            ← Back to Cloud-Native Patterns
          </Link>
        </Button>
        <Button asChild>
          <Link href="/modules/cloud-deployment/cloud-platform-deployment">Next: Cloud Platform Deployment →</Link>
        </Button>
      </div>
    </div>
  )
}
