import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function BulkheadPatternModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Bulkhead Pattern</h1>
          <Badge>Module 14.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to isolate service failures using the Bulkhead Pattern in microservice architectures
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
            <h2 className="text-2xl font-bold tracking-tight">What is the Bulkhead Pattern?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The Bulkhead Pattern is a resilience strategy used in distributed systems to isolate failures by limiting
                resource usage or the impact of a failure to a subset of the system. It prevents cascading failures by ensuring
                that one failing component doesn't consume all available resources.
              </p>
              
              <p>The pattern gets its name from the concept of ship bulkheads:</p>
              <ul>
                <li>If one section is compromised, it doesn't sink the entire ship</li>
                <li>Similarly, if one service fails, it shouldn't bring down the whole application</li>
              </ul>
              
              <p>
                In Spring Cloud Circuit Breaker, bulkheading can be implemented using thread pools or semaphores
                to limit concurrent access to a service.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Types of Bulkheading</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Thread Isolation</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Each call runs in separate thread pool</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevent blocking calls from affecting other services</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Semaphore Isolation</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limits number of concurrent requests</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Control resource consumption for critical services</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Resource Pooling</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limits access to shared resources like DB connections</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevent resource exhaustion in high-load scenarios</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Request Throttling</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limits total requests per time window</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Protect backend services from overload</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use Bulkheading?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Failure Isolation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Limit impact of failures to specific components</li>
                    <li>Ensure downstream issues don't affect unrelated services</li>
                    <li>Improve overall system stability under partial failure</li>
                    <li>Prevent resource starvation across services</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Control maximum concurrent operations</li>
                    <li>Prevent excessive memory usage</li>
                    <li>Balance load between internal components</li>
                    <li>Improve responsiveness during peak traffic</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Allows horizontal scaling of isolated components</li>
                    <li>Enables independent deployment of modules</li>
                    <li>Supports different scaling strategies per service</li>
                    <li>Reduces need for global rate limiting</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Resilience</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Works well with circuit breakers</li>
                    <li>Improves recovery after partial outages</li>
                    <li>Reduces blast radius of failures</li>
                    <li>Provides graceful degradation options</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing Bulkhead in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Cloud provides support for bulkhead patterns through Resilience4j and Spring Retry.
              </p>
              
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<dependency>
  <groupId>io.github.resilience4j</groupId>
  <artifactId>resilience4j-bulkhead</artifactId>
</dependency>`}
              </pre>
              
              <h3>Basic Configuration:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`# application.properties
resilience4j.bulkhead.instances.serviceA.max-concurrent-calls=10
resilience4j.bulkhead.instances.serviceB.max-concurrent-calls=5`}
              </pre>
              
              <h3>Using with WebClient:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Service
public class ProductService {
    private final WebClient webClient;
    private final BulkheadRegistry bulkheadRegistry;

    public ProductService(WebClient.Builder webClientBuilder, BulkheadRegistry bulkheadRegistry) {
        this.webClient = webClientBuilder.baseUrl("http://product-service").build();
        this.bulkheadRegistry = bulkheadRegistry;
    }

    public Mono<Product> getProductById(Long id) {
        Bulkhead bulkhead = bulkheadRegistry.bulkhead("serviceA");
        return Bulkhead.decorateMono(bulkhead, () -> 
            webClient.get().uri("/api/products/{id}", id).retrieve().bodyToMono(Product.class)
        );
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Bulkhead vs Other Patterns</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Pattern</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">When to Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Bulkhead</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limits concurrent access to prevent overload</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">When protecting against resource exhaustion</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Circuit Breaker</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fails fast when service is unavailable</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">When handling slow or failing dependencies</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Rate Limiter</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limits total request rate</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">When controlling API abuse</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Retry</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Retries failed operations automatically</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">For transient failures and temporary outages</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Bulkhead Implementation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Set reasonable limits based on service capacity</li>
                    <li>Monitor queue depth and rejection rates</li>
                    <li>Use dynamic configuration for cloud environments</li>
                    <li>Log rejections for troubleshooting</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Simulate high load to test bulkhead behavior</li>
                    <li>Verify that rejections occur gracefully</li>
                    <li>Track metrics in production</li>
                    <li>Set alerts for high rejection rates</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Integration with Circuit Breaker</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Combine bulkhead with circuit breaker</li>
                    <li>Use fallback logic for rejected calls</li>
                    <li>Implement backpressure handling</li>
                    <li>Provide degraded functionality when needed</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cloud-Native Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use Kubernetes resource limits alongside bulkhead</li>
                    <li>Leverage service mesh policies where possible</li>
                    <li>Automate scaling of bulkhead thresholds</li>
                    <li>Use distributed tracing to identify bottlenecks</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Bulkhead Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# Bulkhead configuration
resilience4j.bulkhead.instances.product-service.max-concurrent-calls=10
resilience4j.bulkhead.instances.inventory-service.max-concurrent-calls=5`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Service Integration with Bulkhead</h2>
            <Card>
              <CardHeader>
                <CardTitle>ProductService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class ProductService {
    private final WebClient productClient;
    private final BulkheadRegistry bulkheadRegistry;

    public ProductService(WebClient.Builder clientBuilder, BulkheadRegistry registry) {
        this.productClient = clientBuilder.baseUrl("http://product-service").build();
        this.bulkheadRegistry = registry;
    }

    public Mono<Product> fetchProductDetails(Long id) {
        Bulkhead bulkhead = bulkheadRegistry.bulkhead("product-service");
        return Bulkhead.decorateMono(bulkhead, () ->
            productClient.get()
                         .uri("/api/products/{id}", id)
                         .retrieve()
                         .bodyToMono(Product.class)
        );
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
                  <CardTitle>Exercise 1: Implement Thread Isolation</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a simple Spring Boot service with two external dependencies</li>
                    <li>Apply thread isolation to both services</li>
                    <li>Simulate concurrent access to both services</li>
                    <li>Observe how failures in one don't impact the other</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Configure Semaphore-Based Bulkhead</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service with limited resource access (e.g., database connection pool)</li>
                    <li>Configure semaphore-based bulkhead with max concurrent access</li>
                    <li>Test behavior when exceeding threshold</li>
                    <li>Implement fallback response for rejected calls</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Combine Bulkhead with Circuit Breaker</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a microservice system with three dependent services</li>
                    <li>Apply bulkhead limits to each service</li>
                    <li>Add circuit breaker with fallback logic</li>
                    <li>Simulate high load and observe combined behavior</li>
                    <li>Test failover and degradation strategies</li>
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
                        href="https://resilience4j.readme.io/docs/bulkhead"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Resilience4j Bulkhead Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-cloud-circuitbreaker/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud CircuitBreaker Reference
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
                        Microservices Architecture by Microsoft Patterns
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
                        href="https://www.baeldung.com/resilience4j"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Resilience4j Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/resilience4j-bulkhead/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Using Bulkhead in Spring
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
                        href="/modules/microservices/advanced/circuit-breaker"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Circuit Breaker Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/microservices/advanced/event-sourcing"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Event Sourcing Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/microservices/advanced/saga"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Saga Pattern Module
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
          <Link href="/modules/microservices/advanced/circuit-breaker">← Circuit Breaker</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/microservices/advanced/circuit-breaker">Next: Circuit Breaker →</Link>
        </Button>
      </div>
    </div>
  )
}
