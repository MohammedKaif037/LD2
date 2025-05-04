import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ServiceMeshModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Service Mesh</h1>
          <Badge>Module 14.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement and manage microservices using a service mesh architecture
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
            <h2 className="text-2xl font-bold tracking-tight">What is a Service Mesh?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                A Service Mesh is a dedicated infrastructure layer for handling service-to-service communication in microservice architectures.
                It manages cross-cutting concerns like load balancing, service discovery, encryption, observability, and failure recovery,
                allowing developers to focus on business logic rather than networking concerns.
              </p>
              
              <p>Key features of a service mesh:</p>
              <ul>
                <li><strong>Traffic Management:</strong> Controls routing, retries, timeouts, and fault injection</li>
                <li><strong>Security:</strong> Provides mutual TLS, access control, and secure identity management</li>
                <li><strong>Observability:</strong> Offers metrics, logs, and distributed tracing out-of-the-box</li>
                <li><strong>Policy Enforcement:</strong> Manages rate limiting, circuit breaking, and quota management</li>
                <li><strong>Resilience:</strong> Handles retries, timeouts, and failovers automatically</li>
              </ul>
              
              <p>
                In Spring Boot, service mesh functionality is often handled by sidecar proxies like Istio, Linkerd, or Consul Connect,
                rather than being built into the application itself.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">How Service Mesh Works</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Component</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Data Plane</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Sidecar proxies intercept all network traffic</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Handles communication between services</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Control Plane</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Centralized configuration and policy engine</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Manages proxy behavior and telemetry</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Service Discovery</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Proxies query registry for available instances</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enables dynamic routing and scaling</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Circuit Breaker</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Built-in resilience patterns in proxies</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevents cascading failures across services</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Distributed Tracing</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Traces requests across multiple services</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Improves debugging and performance analysis</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Why Use a Service Mesh?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Operational Simplicity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Offloads communication logic from applications</li>
                    <li>Centralizes monitoring and logging</li>
                    <li>Provides consistent security policies</li>
                    <li>Reduces need for custom networking code</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Resilience & Observability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Automatic retries and timeouts</li>
                    <li>Built-in circuit breakers and rate limiters</li>
                    <li>End-to-end request tracing</li>
                    <li>Real-time metrics collection</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>mTLS for encrypted service communication</li>
                    <li>Identity-based access control</li>
                    <li>Audit trail for all service interactions</li>
                    <li>Centralized certificate management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cloud-Native Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Works seamlessly with Kubernetes</li>
                    <li>Supports multi-cluster and hybrid deployments</li>
                    <li>Integrates with cloud provider tools</li>
                    <li>Enables zero-trust network security model</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Common Service Mesh Tools</h2>
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
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Istio</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Open source service mesh with rich feature set</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enterprise-grade microservice communication</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Linkerd</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Lightweight, ultra-fast service mesh</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simple, fast, and minimal overhead</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Consul Connect</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">HashiCorp's integrated service mesh solution</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Multi-cloud and VM-based environments</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Kubernetes Network Policies</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Basic service communication controls</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Minimal mesh capabilities in container platforms</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing Service Mesh in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                While Spring Boot doesn't directly implement service mesh logic, it can be deployed inside a mesh environment.
                This involves running alongside a sidecar proxy that handles all communication.
              </p>
              
              <h3>Sample Kubernetes Deployment with Sidecar:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
    spec:
      containers:
      - name: order-app
        image: order-service:latest
        ports:
        - containerPort: 8080
      - name: istio-proxy
        image: istio/proxyv2:1.19
        ports:
        - containerPort: 15090 # Monitoring port
        - containerPort: 15021 # Admin port`}
              </pre>
              
              <h3>Service Mesh Configuration Example:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`# Istio VirtualService example
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: product-route
spec:
  hosts:
  - product-service
  http:
  - route:
    - destination:
        host: product-service
        subset: v1
    timeout: 10s
    retries:
      attempts: 3
      perTryTimeout: 2s`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for Service Mesh Implementation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Deployment Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Start with a single namespace or cluster</li>
                    <li>Gradually expand mesh coverage</li>
                    <li>Monitor performance before and after mesh</li>
                    <li>Ensure compatibility with existing tooling</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Enable mTLS between services</li>
                    <li>Define granular access policies</li>
                    <li>Automate certificate rotation</li>
                    <li>Track and audit mesh events</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Observability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Integrate with Prometheus/Grafana</li>
                    <li>Enable distributed tracing (Jaeger, Zipkin)</li>
                    <li>Visualize traffic flow with Kiali</li>
                    <li>Log mesh events for auditing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Minimize latency from sidecar proxies</li>
                    <li>Optimize connection pooling through mesh</li>
                    <li>Use lightweight proxies where possible</li>
                    <li>Monitor mesh-induced overhead</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Basic Mesh Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>VirtualService.yaml</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: user-service
spec:
  hosts:
  - user-service
  http:
  - route:
    - destination:
        host: user-service
        port:
          number: 8080
    timeout: 5s
    retries:
      attempts: 3
      perTryTimeout: 2s`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Kubernetes Deployment with Sidecar</h2>
            <Card>
              <CardHeader>
                <CardTitle>order-deployment.yaml</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: order-app
        image: order-service:latest
      - name: istio-proxy
        image: istio/proxyv2:1.19`}
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
                  <CardTitle>Exercise 1: Deploy Spring App in Service Mesh</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a simple Spring Boot REST API</li>
                    <li>Package it into Docker image</li>
                    <li>Deploy it to Kubernetes with Istio sidecar</li>
                    <li>Verify it works within the mesh</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Configure Traffic Policy</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create two versions of a service (v1 and v2)</li>
                    <li>Configure weighted routing between them</li>
                    <li>Set up timeouts and retry policies</li>
                    <li>Test behavior under simulated failure</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Implement Zero-Trust Security</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Deploy multiple services into mesh</li>
                    <li>Enable strict mTLS for communication</li>
                    <li>Define authorization policies for each service</li>
                    <li>Monitor all communication via mesh dashboard</li>
                    <li>Simulate breach attempt and verify blocking</li>
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
                        href="https://istio.io/docs/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Istio Documentation
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://linkerd.io/2.13/guides/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Linkerd Guides
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
                        href="https://www.amazon.com/Service-Mesh-Architecture-Sam-Newman/dp/1098105718"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Service Mesh Architecture by Sam Newman
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Cloud-Native-Networking-Service-Mesh/dp/1787780854"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Cloud Native Networking and Service Mesh by William Morgan
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
                        href="https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/istio/service-mesh-overview"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Microsoft Azure: Service Mesh Overview
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/istio-spring-boot"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Istio with Spring Boot
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
          <Link href="/modules/microservices/advanced/saga">← Saga Pattern</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/microservices/advanced/bulkhead">Next: Bulkhead Pattern →</Link>
        </Button>
      </div>
    </div>
  )
}
