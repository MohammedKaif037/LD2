import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CircuitBreakerModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Circuit Breaker</h1>
          <Badge>Module 14.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement the Circuit Breaker pattern to improve resilience in distributed systems
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
            <h2 className="text-2xl font-bold tracking-tight">What is the Circuit Breaker Pattern?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The Circuit Breaker pattern is a resilience strategy used in distributed systems to prevent cascading failures.
                It works by monitoring calls to external services and automatically switching to a fallback behavior if failures
                exceed a threshold, allowing the system to fail fast instead of waiting for timeouts or retrying indefinitely.
              </p>
              
              <p>The pattern has three states:</p>
              <ul>
                <li><strong>Closed:</strong> Normal operation; requests are allowed through</li>
                <li><strong>Open:</strong> Threshold reached; requests fail immediately with fallback</li>
                <li><strong>Half-Open:</strong> Limited traffic is allowed to test if service is healthy again</li>
              </ul>
              
              <p>
                In Spring Cloud, the Circuit Breaker pattern is supported via Resilience4j, Hystrix (legacy), and WebClient integration.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">States of a Circuit Breaker</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">State</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Behavior</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Closed</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Normal operation state</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Requests are passed through to the service</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Open</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Failure threshold reached</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Requests fail fast with fallback response</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Half-Open</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Testing if service recovered</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Only one request allowed to test health</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Why Use Circuit Breakers?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Fault Tolerance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Prevents cascading failures across services</li>
                    <li>Improves overall system stability</li>
                    <li>Provides graceful degradation options</li>
                    <li>Reduces impact of partial outages</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Eliminates long wait times during outages</li>
                    <li>Reduces unnecessary network calls</li>
                    <li>Allows background recovery without user impact</li>
                    <li>Works well with retries and backoff strategies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Tracks failure metrics and thresholds</li>
                    <li>Automatically detects when service recovers</li>
                    <li>Logs detailed error information</li>
                    <li>Integrates with alerting systems</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cloud-Native Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Supports auto-scaling and dynamic environments</li>
                    <li>Works seamlessly with Kubernetes and cloud platforms</li>
                    <li>Enables resilient microservice communication</li>
                    <li>Can be combined with load balancers and bulkheads</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing Circuit Breaker in Spring Cloud</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Cloud provides support for circuit breaker patterns through Resilience4j and Spring Retry.
              </p>
              
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<dependency>
  <groupId>io.github.resilience4j</groupId>
  <artifactId>resilience4j-circuitbreaker</artifactId>
</dependency>`}
              </pre>
              
              <h3>Basic Configuration:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`# application.properties
resilience4j.circuitregistry.scope.default.size=5
resilience4j.circuitbreaker.instances.payment-service.failure-rate-threshold=50
resilience4j.circuitbreaker.instances.payment-service.sliding-window-type=COUNT_BASED`}
              </pre>
              
              <h3>Using with WebClient:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Service
public class PaymentService {
    private final WebClient webClient;
    private final CircuitBreakerRegistry circuitBreakerRegistry;

    public PaymentService(WebClient.Builder webClientBuilder, CircuitBreakerRegistry registry) {
        this.webClient = webClientBuilder.baseUrl("http://payment-service").build();
        this.circuitBreakerRegistry = registry;
    }

    public Mono<Payment> processPayment(Payment payment) {
        CircuitBreaker circuitBreaker = circuitBreakerRegistry.circuitBreaker("payment-service");
        return CircuitBreaker.decorateMono(circuitBreaker, () -> 
            webClient.post()
                     .uri("/api/payments")
                     .bodyValue(payment)
                     .retrieve()
                     .bodyToMono(Payment.class)
        );
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Circuit Breaker vs Other Patterns</h2>
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
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Circuit Breaker</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fails fast when service is unavailable</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">When handling slow or failing dependencies</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Bulkhead</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limits concurrent access to prevent overload</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">When protecting against resource exhaustion</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Retry</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Retries failed operations automatically</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">For transient failures and temporary outages</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Rate Limiter</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limits total request rate per client</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">When controlling API abuse</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for Circuit Breaker Implementation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Set appropriate failure rate thresholds</li>
                    <li>Configure proper wait duration in open state</li>
                    <li>Use sliding window for accurate failure detection</li>
                    <li>Log state transitions for debugging</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Fallback Logic</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Provide meaningful fallback responses</li>
                    <li>Cache last known good response where possible</li>
                    <li>Avoid infinite loops in fallback logic</li>
                    <li>Return degraded functionality gracefully</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Observability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Track circuit breaker state in metrics</li>
                    <li>Monitor failure rates and fallback usage</li>
                    <li>Set alerts for prolonged open states</li>
                    <li>Visualize performance with Grafana/Prometheus</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Integration with Other Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Combine with bulkhead for layered protection</li>
                    <li>Use retry mechanism before opening circuit</li>
                    <li>Integrate with rate limiting for enhanced control</li>
                    <li>Use in API Gateway for centralized resilience</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Basic Circuit Breaker Setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# Circuit Breaker configuration
resilience4j.circuitbreaker.instances.payment.max-failure-rate=50
resilience4j.circuitbreaker.instances.inventory.wait-duration-in-open-state=5s`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Fallback Implementation</h2>
            <Card>
              <CardHeader>
                <CardTitle>PaymentService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class PaymentService {
    private final WebClient webClient;
    private final CircuitBreakerRegistry circuitBreakerRegistry;

    public PaymentService(WebClient.Builder clientBuilder, CircuitBreakerRegistry registry) {
        this.webClient = clientBuilder.baseUrl("http://payment-service").build();
        this.circuitBreakerRegistry = registry;
    }

    public Mono<Payment> processPayment(Payment payment) {
        CircuitBreaker breaker = circuitBreakerRegistry.circuitBreaker("payment");
        return CircuitBreaker.decorateMono(breaker, () ->
            webClient.post()
                     .uri("/process")
                     .bodyValue(payment)
                     .retrieve()
                     .bodyToMono(Payment.class)
        ).onErrorResume(ex -> getFallbackPayment(payment.getUserId()));
    }

    private Mono<Payment> getFallbackPayment(Long userId) {
        return Mono.just(new Payment(userId, "system", "Processed with fallback"));
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="exercises" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Practice Exercises</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 1: Basic Circuit Breaker</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with WebClient and resilience4j</li>
                    <li>Call an external API that occasionally fails</li>
                    <li>Wrap the call in a circuit breaker</li>
                    <li>Observe behavior during repeated failures</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Fallback Strategy</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service with multiple endpoints</li>
                    <li>Implement different failure scenarios</li>
                    <li>Add fallback logic for each endpoint</li>
                    <li>Test behavior under sustained failure</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Combine with Bulkhead</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create two services with varying loads</li>
                    <li>Apply both circuit breaker and bulkhead patterns</li>
                    <li>Simulate high concurrency and observe interaction</li>
                    <li>Implement custom logging for both layers</li>
                    <li>Optimize thresholds based on observed behavior</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Additional Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Official Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://resilience4j.readme.io/docs/circuitbreaker"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Resilience4j CircuitBreaker Docs
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
                        Baeldung: Resilience4j in Spring
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/resilience4j-circuit-breaker/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Circuit Breaker in Practice
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
                        href="/modules/microservices/advanced/bulkhead"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Bulkhead Module
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
                        href="/modules/microservices/advanced/service-mesh"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Service Mesh Module
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
          <Link href="/modules/microservices/advanced/bulkhead">← Bulkhead</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/microservices/advanced/event-sourcing">Next: Event Sourcing →</Link>
        </Button>
      </div>
    </div>
  )
}
