import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ApiGatewayModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">API Gateway</h1>
          <Badge>Module 13.5</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement an API Gateway as a central entry point for microservices
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
            <h2 className="text-2xl font-bold tracking-tight">What is an API Gateway?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                An API Gateway acts as a single entry point for all client requests in a microservice architecture.
                It routes requests to appropriate services, handles cross-cutting concerns like authentication,
                rate limiting, and request transformation, and provides a unified interface for clients.
              </p>
              
              <p>Key responsibilities of an API Gateway:</p>
              <ul>
                <li><strong>Routing:</strong> Directs incoming requests to the correct microservice</li>
                <li><strong>Authentication:</strong> Validates user credentials before forwarding requests</li>
                <li><strong>Rate Limiting:</strong> Prevents abuse by controlling request frequency per client</li>
                <li><strong>Caching:</strong> Stores frequently accessed data to reduce backend load</li>
                <li><strong>Load Balancing:</strong> Distributes traffic across multiple service instances</li>
                <li><strong>Monitoring:</strong> Tracks performance metrics and error rates</li>
              </ul>
              
              <p>
                In Spring Cloud, you can implement an API Gateway using either Netflix Zuul (legacy) or Spring Cloud Gateway (modern).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Use Cases</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Unified Interface</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Clients interact with one endpoint instead of many</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simplifies client code and reduces coupling</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Security Enforcement</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Handles authentication and authorization</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Centralizes security logic and tokens</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Request Aggregation</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Combines multiple service calls into one response</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Reduces network round-trips for mobile clients</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Observability</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Tracks metrics, logs, and traces across services</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Improves monitoring and troubleshooting</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Resilience</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Implements retries, timeouts, and circuit breakers</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Improves fault tolerance and stability</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Cloud Gateway vs Zuul</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                There are two main options for implementing API Gateways in Spring Cloud:
              </p>
              
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Feature</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Zuul</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Spring Cloud Gateway</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Reactive Support</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">No</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Yes (built on WebFlux)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Maintenance Status</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Legacy (no longer actively maintained)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Actively maintained and recommended</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Performance</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Blocking I/O model</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Non-blocking, reactive model</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Routing Capabilities</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Basic routing and filtering</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Advanced route definitions and predicates</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Integration with Eureka</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Yes</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing API Gateway with Spring Cloud Gateway</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To set up an API Gateway in Spring Boot, add the following dependency:
              </p>
              
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<!-- Maven -->
<dependency>
  <groupId>org.springframework.cloud</groupId>
  <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>`}
              </pre>
              
              <p>Then define routes in application.properties:</p>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`# Gateway configuration
spring.cloud.gateway.routes[0].id=user-service
spring.cloud.gateway.routes[0].uri=lb://user-service
spring.cloud.gateway.routes[0].predicates[0]=Path=/api/users/**
spring.cloud.gateway.routes[0].filters[0]=StripPrefix=1`}
              </pre>
              
              <p>
                This example defines a route that matches <code>/api/users/**</code>, strips the prefix,
                and forwards the request to the <code>user-service</code> registered in the discovery server.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Custom Filters and Predicates</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Predicates</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`// Route based on path
predicates[0]=Path=/api/users/**

// Route based on query parameters
predicates[1]=Query=username,password

// Route based on headers
predicates[2]=Header=X-Auth-Token, \\d+`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`// Strip path prefix
filters[0]=StripPrefix=1

// Add request header
filters[1]=AddRequestHeader=X-API-Key, abc123

// Rate limiting
filters[2]=RequestRateLimiter=redis-rate-limiter`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for API Gateway Design</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Routing & Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use consistent URL patterns for routing</li>
                    <li>Secure gateway with OAuth2 or JWT</li>
                    <li>Validate all incoming requests</li>
                    <li>Log and monitor all gateway activity</li>
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
                    <li>Compress large payloads</li>
                    <li>Use connection pooling for backend services</li>
                    <li>Enable HTTP/2 and TLS 1.3</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Return standardized error responses</li>
                    <li>Implement fallbacks for failed services</li>
                    <li>Log detailed error information</li>
                    <li>Set reasonable timeout thresholds</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Scalability Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Ensure gateway scales independently</li>
                    <li>Use Kubernetes or cloud-native autoscaling</li>
                    <li>Avoid stateful components in gateway</li>
                    <li>Use Redis or similar for shared state</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Gateway Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# Gateway configuration
spring.application.name=gateway-service
spring.cloud.gateway.discovery.locator.enabled=true
spring.cloud.gateway.discovery.locator.lower-case-service-id=true`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Route Definitions</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# User Service
spring.cloud.gateway.routes[0].id=user-service
spring.cloud.gateway.routes[0].uri=lb://user-service
spring.cloud.gateway.routes[0].predicates[0]=Path=/api/users/**
spring.cloud.gateway.routes[0].filters[0]=StripPrefix=1

# Order Service
spring.cloud.gateway.routes[1].id=order-service
spring.cloud.gateway.routes[1].uri=lb://order-service
spring.cloud.gateway.routes[1].predicates[0]=Path=/api/orders/**
spring.cloud.gateway.routes[1].filters[0]=StripPrefix=1`}
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
                  <CardTitle>Exercise 1: Basic Gateway Setup</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a new Spring Boot project with Gateway and Eureka dependencies</li>
                    <li>Define two microservices (e.g., user-service and order-service)</li>
                    <li>Configure routes in application.properties</li>
                    <li>Verify routing works through the gateway</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Implement Custom Filter</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a custom filter that adds a request ID</li>
                    <li>Log request time and user agent</li>
                    <li>Apply filter to specific routes only</li>
                    <li>Test behavior with and without filter applied</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Secure Gateway with OAuth2</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Add Spring Security and OAuth2 dependencies</li>
                    <li>Configure security rules in gateway</li>
                    <li>Allow unauthenticated access to login endpoints</li>
                    <li>Forward valid tokens to downstream services</li>
                    <li>Test secure and non-secure paths</li>
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
                        href="https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Gateway Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://github.com/Netflix/zuul/wiki"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Netflix Zuul Wiki
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
                        href="https://www.baeldung.com/spring-cloud-gateway"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Cloud Gateway Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-cloud-gateway/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Mastering Spring Cloud Gateway
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
          <Link href="/modules/microservices/basics/service-discovery">← Service Discovery</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/microservices/basics/architecture">Next: Microservices Architecture →</Link>
        </Button>
      </div>
    </div>
  )
}
