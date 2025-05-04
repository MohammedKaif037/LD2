import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function LoadBalancingModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Load Balancing</h1>
          <Badge>Module 13.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement load balancing in Spring Boot microservice architectures.
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
            <h2 className="text-2xl font-bold tracking-tight">What is Load Balancing?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Load balancing distributes incoming network traffic across multiple instances of a service to ensure no single instance becomes overwhelmed. 
                In microservice architectures, it plays a critical role in improving application availability, scalability, and performance.
              </p>
              
              <p>Key benefits of load balancing:</p>
              <ul>
                <li><strong>Improved Availability:</strong> Routes traffic away from failed or slow nodes.</li>
                <li><strong>Better Scalability:</strong> Easily scale services horizontally.</li>
                <li><strong>Increased Performance:</strong> Distributes load evenly to reduce response time.</li>
                <li><strong>Fault Tolerance:</strong> Automatically detects unhealthy instances.</li>
              </ul>
              
              <p>
                In Spring Cloud, load balancing is often implemented using Netflix Ribbon or Spring Cloud LoadBalancer, 
                which work seamlessly with service discovery tools like Eureka or Consul.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Types of Load Balancing</h2>
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
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Client-Side</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Client selects which server to use.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Microservices with service discovery.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Server-Side</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">External proxy/router handles distribution.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Traditional web apps or cloud-native systems.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>DNS-Based</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Uses DNS to route requests to different IPs.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Global load balancing and multi-region deployments.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Round Robin</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Distributes requests evenly across servers.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simple, stateless services.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Weighted</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Assigns weight to each node based on capacity.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unequal hardware specs or resource availability.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Least Connections</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Routes to instance with fewest active connections.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Long-running sessions or heavy operations.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Cloud Load Balancing Options</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Ribbon (Legacy)</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Bean
public IRule ribbonRule() {
    return new AvailabilityFilteringRule();
}`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Uses client-side load balancing with customizable rules.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spring Cloud LoadBalancer</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`implementation 'org.springframework.cloud:spring-cloud-starter-loadbalancer'`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Modern replacement for Ribbon, built with reactive support.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Gateway + LB Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`spring.cloud.gateway.routes[0].uri=lb://order-service`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Use with API Gateway to enable load balancing for REST clients.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Kubernetes Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`apiVersion: v1
kind: Service
metadata:
  name: order-service
spec:
  selector:
    app: order
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Built-in Kubernetes service for internal cluster routing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing Load Balancing in Spring Cloud</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To enable load balancing in Spring Boot applications:
              </p>
              
              <ol>
                <li>Add dependency:
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`<!-- Maven -->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>`}
                  </pre>
                </li>
                
                <li>Enable load balancing in configuration:
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`# application.properties
spring.cloud.loadbalancer.ribbon.enabled=false
spring.cloud.loadbalancer.configurations=default`}
                  </pre>
                </li>
                
                <li>Use load balanced URLs:
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`// Feign Client
@FeignClient(name = "product-service", configuration = ProductConfiguration.class)

// WebClient
WebClient.builder().baseUrl("http://user-service").build()`}
                  </pre>
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Load Balancing Strategies</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Different strategies can be used depending on your needs:
              </p>
              
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Strategy</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">When to Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>RoundRobinLoadBalancer</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Requests are distributed evenly across all instances.</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Default strategy; good for most scenarios.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>RandomLoadBalancer</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Selects random instance for each request.</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Good for high-throughput services.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Predicate-based</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Filters instances based on metadata or zone.</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Multi-region or metadata-aware routing.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ConsistentHashLoadBalancer</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Maps requests to specific instances based on hash key.</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Session persistence or sticky sessions.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Load Balancing</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Service Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Design services to be stateless where possible.</li>
                    <li>Ensure health checks are implemented correctly.</li>
                    <li>Use circuit breakers alongside load balancers.</li>
                    <li>Monitor instance health and performance.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Choose appropriate balancing strategy.</li>
                    <li>Set proper timeouts and retry policies.</li>
                    <li>Use weighted routing for heterogeneous instances.</li>
                    <li>Enable logging for troubleshooting.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Observability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Track request latency per instance.</li>
                    <li>Monitor error rates and retries.</li>
                    <li>Implement tracing for cross-service visibility.</li>
                    <li>Use metrics dashboards for real-time monitoring.</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cloud-Native Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Integrate with Kubernetes Services or Ingress.</li>
                    <li>Leverage cloud provider load balancers.</li>
                    <li>Use service meshes for advanced routing.</li>
                    <li>Automate scaling with cloud auto-scaling groups.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Load Balancer Setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Enable load balancing
spring.cloud.loadbalancer.ribbon.enabled=false
spring.cloud.loadbalancer.client-config.default=lazy
spring.cloud.loadbalancer.ribbon.readTimeout=5000
spring.cloud.loadbalancer.ribbon.connectTimeout=3000`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Feign Client with Load Balancing</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserClient.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@FeignClient(name = "user-service")
public interface UserClient {
    @GetMapping("/api/users/{id}")
    User getUser(@PathVariable("id") Long id);
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Custom Load Balancer Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>LoadBalancerConfig.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Configuration
public class LoadBalancerConfig {
    @Bean
    public ReactorLoadBalancer<ServiceInstance> randomLoadBalancer(Environment environment, 
                                                               LoadBalancerClientFactory factory) {
        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME_SERVICE_INSTANCE);
        return new RandomLoadBalancer(factory.getLazyProvider(name), name);
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
                  <CardTitle>Exercise 1: Basic Load Balancing</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create two instances of a simple Spring Boot service.</li>
                    <li>Register them with Eureka or Consul.</li>
                    <li>Call the service through a load-balanced Feign client.</li>
                    <li>Verify that requests are distributed between instances.</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Custom Strategy Implementation</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a custom load balancer strategy.</li>
                    <li>Implement logic to select based on region metadata.</li>
                    <li>Configure it as the default strategy.</li>
                    <li>Test behavior by simulating regional failover.</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Reactive Load Balancing</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create reactive microservices using WebFlux.</li>
                    <li>Use WebClient for inter-service communication.</li>
                    <li>Implement custom retry logic with backoff.</li>
                    <li>Combine with circuit breaker for resilience.</li>
                    <li>Monitor performance under high concurrency.</li>
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
                        href="https://docs.spring.io/spring-cloud-commons/docs/current/reference/html/#load-balancer"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud LoadBalancer Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://cloud.spring.io/spring-cloud-netflix/multi/multi_spring-cloud-netflix-ribbon.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Netflix Ribbon Docs
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
                        href="https://www.baeldung.com/spring-cloud-loadbalancer"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Cloud LoadBalancer Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-cloud-loadbalancer/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Load Balancing in Spring
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
                        href="/modules/microservices/basics/service-discovery"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Service Discovery Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/microservices/basics/communication"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Communication Module
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
          <Link href="/modules/microservices/basics/communication">← Communication</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/microservices/basics/service-discovery">Next: Service Discovery →</Link>
        </Button>
      </div>
    </div>
  )
}
