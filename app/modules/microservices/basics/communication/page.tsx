import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function MicroservicesCommunicationModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Microservice Communication</h1>
          <Badge>Module 13.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how microservices communicate with each other in distributed systems
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
            <h2 className="text-2xl font-bold tracking-tight">Communication Patterns in Microservices</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                In microservice architectures, services need to communicate with each other to fulfill business requirements.
                There are two main patterns for inter-service communication:
              </p>
              
              <ul>
                <li><strong>Synchronous Communication:</strong> Request-response style where client waits for response</li>
                <li><strong>Asynchronous Communication:</strong> Fire-and-forget or event-driven approaches</li>
              </ul>
              
              <p>
                Each has trade-offs in terms of latency, reliability, and complexity. Choosing the right pattern depends on
                your use case and system requirements.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Synchronous Communication</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>REST API</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Uses HTTP methods (GET, POST, PUT, DELETE)</li>
                    <li>Simple to implement and debug</li>
                    <li>Well-suited for request-response scenarios</li>
                    <li>Can be slow if many calls are made sequentially</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>gRPC</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Binary protocol using Protocol Buffers</li>
                    <li>Supports streaming and bidirectional communication</li>
                    <li>Better performance than REST for internal communication</li>
                    <li>Requires contract-first development approach</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>GraphQL</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Flexible query language for APIs</li>
                    <li>Allows clients to request exactly what they need</li>
                    <li>Reduces over-fetching and under-fetching of data</li>
                    <li>Good for mobile and frontend-heavy applications</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Service Mesh</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Uses sidecars/proxies for all service communication</li>
                    <li>Handles retries, timeouts, circuit breaking automatically</li>
                    <li>Provides observability across services</li>
                    <li>Works well with Kubernetes and cloud-native platforms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Asynchronous Communication</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Pattern</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Message Queues</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">RabbitMQ, Kafka, ActiveMQ</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Decoupled processing and background tasks</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Event Streaming</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Kafka, AWS Kinesis</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Real-time analytics and log aggregation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Pub/Sub</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Redis Pub/Sub, Google Cloud Pub/Sub</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Broadcast notifications to multiple subscribers</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Event Sourcing</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stores state changes as sequence of events</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Audit trail and temporal querying</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>CQRS Pattern</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Separates read and write operations</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High-read vs high-write scenarios</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Choosing Between Sync & Async</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The choice between synchronous and asynchronous communication depends on several factors:
              </p>
              
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Factor</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Synchronous</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Asynchronous</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Latency Tolerance</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Low tolerance</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High tolerance</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Error Handling</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Immediate failure detection</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Delayed error detection</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Throughput Requirements</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Lower throughput</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Higher throughput</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Order Sensitivity</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Ordered execution</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Order not guaranteed unless enforced</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Complexity</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simpler to understand</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">More complex infrastructure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using Spring WebFlux for Reactive Communication</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring WebFlux enables non-blocking, reactive communication between microservices.
              </p>
              
              <h3>Example WebClient Usage:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Service
public class UserService {
    private final WebClient webClient;

    public UserService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("http://user-service").build();
    }

    public Mono<User> getUserById(Long id) {
        return webClient.get()
                        .uri("/api/users/{id}", id)
                        .retrieve()
                        .bodyToMono(User.class);
    }
}`}
              </pre>
              
              <p>
                This approach is ideal for building reactive microservices that scale efficiently with backpressure support.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Inter-Service Communication</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>API Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Design clean, versioned APIs</li>
                    <li>Document endpoints using OpenAPI/Swagger</li>
                    <li>Implement rate limiting and circuit breakers</li>
                    <li>Use DTOs to decouple internal and external models</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Implement retry logic with exponential backoff</li>
                    <li>Use fallback mechanisms for failed requests</li>
                    <li>Log errors consistently across services</li>
                    <li>Return meaningful error codes and messages</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Cache responses where appropriate</li>
                    <li>Batch requests to reduce network overhead</li>
                    <li>Use compression for large payloads</li>
                    <li>Monitor round-trip time and latency</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Secure communication using TLS</li>
                    <li>Use OAuth2 or JWT for authentication</li>
                    <li>Validate all incoming requests</li>
                    <li>Implement audit logging for sensitive operations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic REST Communication</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserController.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using Feign Client</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserClient.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@FeignClient(name = "user-service", path = "/api/users")
public interface UserClient {
    @GetMapping("/{id}")
    User getUserById(@PathVariable("id") Long id);
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Reactive Communication Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>ProductService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class ProductService {
    private final WebClient webClient;

    public ProductService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("http://product-service").build();
    }

    public Flux<Product> getAllProducts() {
        return webClient.get()
                        .uri("/api/products")
                        .retrieve()
                        .bodyToFlux(Product.class);
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="exercises" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Practice Exercises</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 1: Implement REST Communication</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create two Spring Boot microservices (e.g., user-service and order-service)</li>
                    <li>Expose REST endpoint in user-service to retrieve user data</li>
                    <li>Call user-service from order-service using RestTemplate</li>
                    <li>Verify that communication works end-to-end</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Use Feign Clients</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Set up two microservices with Eureka registration</li>
                    <li>Create Feign client interface for one service</li>
                    <li>Enable Feign clients via <code>@EnableFeignClients</code></li>
                    <li>Test client-server interaction through controller</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Build Reactive Service Communication</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create two reactive microservices using Spring WebFlux</li>
                    <li>Implement WebClient-based communication</li>
                    <li>Add retry logic with exponential backoff</li>
                    <li>Handle errors gracefully using onErrorResume</li>
                    <li>Implement circuit breaker pattern using resilience4j</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
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
                        href="https://docs.spring.io/spring-cloud-openfeign/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Feign Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-webflux/docs/current/reference/html/#webclient"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring WebFlux WebClient Docs
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Books</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://www.amazon.com/Microservices-Architecture-Patterns-Practices-Microsoft/dp/197423588X"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Microservices Architecture: Patterns and Practices by Microsoft
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Building-Microservices-Sam-Newman/dp/1491950358"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Building Microservices by Sam Newman
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Articles & Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://microservices.io/patterns/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Microservices.io: Communication Patterns
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/spring-cloud-rest-client-feign"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Feign and REST Clients in Spring Cloud
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
                        href="/modules/microservices/basics/architecture"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Microservices Architecture Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/microservices/basics/load-balancing"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Load Balancing Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/microservices/basics/service-discovery"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Service Discovery Module
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
          <Link href="/modules/microservices/basics/architecture">← Architecture</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/microservices/basics/load-balancing">Next: Load Balancing →</Link>
        </Button>
      </div>
    </div>
  )
}
