import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ServiceDiscoveryModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Service Discovery</h1>
          <Badge>Module 13.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how service discovery enables microservices to locate and communicate with each other dynamically.
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
            <h2 className="text-2xl font-bold tracking-tight">What is Service Discovery?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Service discovery is a key component in microservice architectures that allows services to find and communicate 
                with each other without hard-coding locations.
              </p>

              <p>There are two main types of service discovery:</p>
              <ul>
                <li><strong>Client-Side Discovery:</strong> The client queries the service registry to get available instances.</li>
                <li><strong>Server-Side Discovery:</strong> The routing happens at the API gateway or load balancer level.</li>
              </ul>

              <p>
                In Spring Cloud, service discovery is typically implemented using Netflix Eureka, HashiCorp Consul, or ZooKeeper, 
                enabling dynamic registration and lookup of services.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Key Concepts in Service Discovery</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Concept</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Service Registry</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Central store of service instances and their metadata.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Maintains an up-to-date list of running instances.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Service Registration</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Services register themselves with the registry on startup.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Ensures services can be discovered by others.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Heartbeats</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Regular signals sent by services to stay registered.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Detects failed instances and removes them.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Deregistration</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Automatic removal when service shuts down.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevents stale entries in the registry.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Fallback Logic</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Handles discovery failures gracefully.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Improves resilience during outages.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use Service Discovery?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Dynamic Scaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Automatically detects new service instances.</li>
                    <li>Handles instance shutdowns and restarts.</li>
                    <li>Supports horizontal scaling with zero config changes.</li>
                    <li>Works well with container orchestration tools like Kubernetes.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Decentralized Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Eliminates hardcoded IP addresses and ports.</li>
                    <li>Enables location transparency across services.</li>
                    <li>Reduces configuration complexity.</li>
                    <li>Makes it easier to deploy to multiple environments.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>High Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Routes traffic only to healthy instances.</li>
                    <li>Re-routes automatically when services fail.</li>
                    <li>Supports health checks and readiness probes.</li>
                    <li>Integrates with circuit breakers and retries.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cloud-Native Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Works seamlessly with AWS, GCP, Azure.</li>
                    <li>Integrates with Kubernetes Services.</li>
                    <li>Supports multi-region deployments.</li>
                    <li>Can use cloud provider's native discovery.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Service Discovery Tools</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Tool</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Eureka</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Netflix service discovery server.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Spring Boot microservices.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Consul</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">HashiCorp distributed service mesh tool.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Multi-cloud and hybrid environments.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ZooKeeper</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Apache distributed coordination service.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Legacy systems and Hadoop ecosystem.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Kubernetes</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Built-in DNS-based service discovery.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Containerized microservices on Kubernetes.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>etcd</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Distributed key-value store.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">CoreOS and etcd-based systems.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing Service Discovery in Spring Cloud</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To enable service discovery in Spring Boot applications:
              </p>

              <ol>
                <li>Add dependency:
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`<!-- Maven -->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>`}
                  </pre>
                </li>

                <li>Enable discovery in <code>application.properties</code>:
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`# application.properties
spring.application.name=user-service
eureka.client.service-url.defaultZone=http://localhost:8761/eureka/
eureka.instance.preferIpAddress=true`}
                  </pre>
                </li>

                <li>Annotate the main class:
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@SpringBootApplication
@EnableEurekaClient
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}`}
                  </pre>
                </li>
              </ol>

              <p>
                This setup allows services to register with Eureka and discover other services dynamically.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Service Discovery</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Registration & Deregistration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Ensure services register on startup.</li>
                    <li>Gracefully deregister on shutdown.</li>
                    <li>Set appropriate heartbeat intervals.</li>
                    <li>Configure eviction policies for stale nodes.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Health Checks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Implement custom health check endpoints.</li>
                    <li>Use actuator health indicators.</li>
                    <li>Fail fast if dependencies are unavailable.</li>
                    <li>Configure retry logic for transient failures.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Optimize cache refresh interval.</li>
                    <li>Minimize unnecessary lookups.</li>
                    <li>Use local caching for frequent access.</li>
                    <li>Monitor registry performance under scale.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Secure communication between services.</li>
                    <li>Authenticate and authorize registry clients.</li>
                    <li>Encrypt sensitive metadata.</li>
                    <li>Limit exposure of the registry to external networks.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Eureka Client Setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserServiceApplication.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@SpringBootApplication
@EnableEurekaClient
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Eureka Server Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>EurekaServerConfig.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Configuration
@EnableEurekaServer
public class EurekaServerConfig {
    // No additional code needed - auto-configured
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Calling Services via Feign Client</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserClient.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@FeignClient(name = "order-service")
public interface OrderClient {
    @GetMapping("/api/orders/{userId}")
    List<Order> getOrdersByUserId(@PathVariable("userId") Long userId);
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
                  <CardTitle>Exercise 1: Basic Service Registration</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create an Eureka server application.</li>
                    <li>Register two microservices with the registry.</li>
                    <li>Verify they appear in the Eureka dashboard.</li>
                    <li>Test service communication through discovery.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Dynamic Instance Management</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service that scales horizontally.</li>
                    <li>Observe how Eureka handles multiple instances.</li>
                    <li>Simulate instance failure and verify re-routing.</li>
                    <li>Implement graceful shutdown and test deregistration.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Fault Tolerant Discovery</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Build a microservice system with three services.</li>
                    <li>Implement fallback logic using a circuit breaker.</li>
                    <li>Simulate network partitions and registry downtime.</li>
                    <li>Verify system continues functioning with cached data.</li>
                    <li>Implement retry and backoff strategies.</li>
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
                        href="https://docs.spring.io/spring-cloud-netflix/docs/current/reference/html/#service-discovery-eureka-clients"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Netflix Eureka Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.consul.io/docs/connect/integrate-services"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        HashiCorp Consul Integration Guide
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
                        href="https://www.baeldung.com/spring-cloud-netflix-eureka"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Eureka Client in Spring Cloud
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-cloud-service-discovery/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Service Discovery in Spring
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
          <Link href="/modules/microservices/basics/load-balancing">← Load Balancing</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/microservices/basics/api-gateway">Next: API Gateway →</Link>
        </Button>
      </div>
    </div>
  )
}
