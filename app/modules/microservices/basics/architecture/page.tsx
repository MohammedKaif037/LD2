import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function MicroservicesArchitectureModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Microservices Architecture</h1>
          <Badge>Module 13.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn about the architectural principles and patterns of microservices-based systems
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
            <h2 className="text-2xl font-bold tracking-tight">What are Microservices?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Microservices is an architectural style that structures an application as a collection of loosely coupled services.
                Each service is:
              </p>
              
              <ul>
                <li><strong>Independent:</strong> Can be developed, deployed, and scaled independently</li>
                <li><strong>Bounded Context:</strong> Represents a specific business domain or functionality</li>
                <li><strong>Communicates via APIs:</strong> Uses lightweight protocols like REST or gRPC</li>
                <li><strong>Decentralized:</strong> Services manage their own data and logic</li>
              </ul>
              
              <p>
                This approach promotes modularity, scalability, and maintainability in large-scale applications.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Key Characteristics of Microservices</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Characteristic</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Decomposition</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Breaking down monolithic apps into smaller services</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Improved scalability and maintainability</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Service Boundaries</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Each service has clear responsibilities</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Reduced coupling between components</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Data Ownership</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Services manage their own data stores</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Better isolation and consistency</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>API-driven Communication</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Services communicate via well-defined APIs</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Loose coupling and flexibility</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Autonomous Deployment</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Each service can be deployed independently</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Faster release cycles and reduced downtime</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Monolith vs Microservices</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Aspect</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Monolithic Architecture</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Microservices Architecture</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Deployment</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Single deployment unit</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Multiple independent deployments</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Data Management</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Shared database schema</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Each service owns its data store</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Scalability</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Vertical scaling only</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Horizontal scaling per service</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Development Speed</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Slower due to shared codebase</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Faster due to independent teams</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Complexity</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Lower initial complexity</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Higher operational complexity</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Patterns in Microservices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>API Gateway</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    A single entry point for all client requests, routing traffic to appropriate services.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Event-Driven Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Services communicate via events published to message brokers like Kafka or RabbitMQ.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Backend for Frontend (BFF)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Specialized API layer tailored for frontend clients, aggregating data from multiple services.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Circuit Breaker Pattern</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Prevents cascading failures by failing fast when a dependent service is unavailable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Microservices Architecture</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Service Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Define clear boundaries and responsibilities</li>
                    <li>Avoid tight coupling between services</li>
                    <li>Use event-driven or RESTful APIs for communication</li>
                    <li>Implement circuit breakers and retries</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use containerization (Docker) for consistent environments</li>
                    <li>Implement service discovery and load balancing</li>
                    <li>Monitor service health and performance</li>
                    <li>Use centralized logging and tracing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Write unit tests for individual services</li>
                    <li>Perform integration testing across services</li>
                    <li>Simulate failure scenarios with chaos engineering</li>
                    <li>Use contract testing for API compatibility</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>CI/CD Pipelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Automate build, test, and deployment processes</li>
                    <li>Use feature flags for gradual rollouts</li>
                    <li>Implement blue-green deployments or canary releases</li>
                    <li>Monitor production metrics post-deployment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example Microservice System</h2>
            <Card>
              <CardHeader>
                <CardTitle>Ordering System</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# Example services in an ordering system
- Order Service: Manages order creation and status updates
- Inventory Service: Tracks product availability
- Payment Service: Handles payment processing
- Notification Service: Sends emails and SMS notifications`}
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
                  <CardTitle>Exercise 1: Design a Microservice System</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a simple e-commerce system with at least three services</li>
                    <li>Define responsibilities for each service</li>
                    <li>Sketch out how they would communicate</li>
                    <li>Document assumptions and dependencies</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Implement Service Boundaries</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Select a real-world use case (e.g., ride-sharing app)</li>
                    <li>Break it into logical microservices</li>
                    <li>Design APIs for inter-service communication</li>
                    <li>Consider data ownership and consistency</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Simulate Failure Scenarios</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a sample microservice application</li>
                    <li>Introduce simulated failures (e.g., network latency, service unavailability)</li>
                    <li>Test resilience using circuit breakers and retries</li>
                    <li>Analyze results and optimize fault tolerance</li>
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
                        href="https://microservices.io/patterns/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Microservices Patterns
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.redhat.com/en/topics/microservices/what-is-microservices-architecture"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Red Hat: What is Microservices Architecture?
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
                        href="https://martinfowler.com/articles/microservices.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Martin Fowler: Microservices
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/spring-boot-microservices"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Boot Microservices
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
                        href="/modules/microservices/basics/api-gateway"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        API Gateway Module
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
          <Link href="/modules/microservices/basics/api-gateway">← API Gateway</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/microservices/basics/communication">Next: Communication →</Link>
        </Button>
      </div>
    </div>
  )
}
