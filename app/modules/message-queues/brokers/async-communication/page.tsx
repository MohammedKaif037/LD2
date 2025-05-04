import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function AsyncCommunicationModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Asynchronous Communication</h1>
          <Badge>Module MQ-1.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement asynchronous communication patterns using message queues in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">What is Asynchronous Communication?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Asynchronous communication refers to message-based interaction where the sender does not wait for an immediate response.
                This pattern is widely used in distributed systems to improve performance, decouple services, and ensure reliability.
              </p>
              
              <p>Key characteristics of async communication:</p>
              <ul>
                <li><strong>Non-blocking:</strong> Sender continues without waiting for response</li>
                <li><strong>Decoupled:</strong> Producer and consumer don't need direct connection</li>
                <li><strong>Scalable:</strong> Handles high volume through queuing</li>
                <li><strong>Resilient:</strong> Survives temporary service outages</li>
                <li><strong>Event-driven:</strong> Supports reactive and event-based architectures</li>
              </ul>
              
              <p>
                In Spring Boot, asynchronous communication can be implemented using JMS, RabbitMQ, Kafka, or other messaging systems,
                often combined with message brokers like ActiveMQ or Redis Streams.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Synchronous vs Asynchronous</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Aspect</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Synchronous</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Asynchronous</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Response Time</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Blocking call until completion</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Immediate send, delayed processing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Error Handling</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Failures immediately visible</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Retries and dead-letter queues</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Throughput</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limited by slowest component</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High throughput via batching</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Use Case</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Real-time APIs, transactional flows</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Background jobs, notifications</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Complexity</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Straightforward flow</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Requires queue management</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use Async Communication?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Performance & Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Supports high-throughput scenarios</li>
                    <li>Decouples request from processing time</li>
                    <li>Handles traffic bursts via queuing</li>
                    <li>Improves system responsiveness</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Reliability & Resilience</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Survives temporary service failures</li>
                    <li>Supports retries and backpressure</li>
                    <li>Enables guaranteed delivery</li>
                    <li>Reduces cascading failures</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Distributed Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Facilitates microservices communication</li>
                    <li>Supports event sourcing and CQRS</li>
                    <li>Enables eventual consistency models</li>
                    <li>Works well with Saga patterns</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Architecture Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Loose coupling between components</li>
                    <li>Improved fault tolerance</li>
                    <li>Supports horizontal scaling</li>
                    <li>Enables streaming and event-driven design</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing Async Messaging in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement asynchronous communication in Spring Boot:
              </p>
              
              <h3>Add Dependency (for Kafka):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`<dependency>
  <groupId>org.springframework.kafka</groupId>
  <artifactId>spring-kafka</artifactId>
</dependency>`}
              </pre>
              
              <h3>Kafka Producer Example:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@Service
public class OrderProducer {
    private final KafkaTemplate<String, String> kafkaTemplate;

    public OrderProducer(KafkaTemplate<String, String> template) {
        this.kafkaTemplate = template;
    }

    public void sendOrderCreatedEvent(Order order) {
        String json = new Gson().toJson(order);
        kafkaTemplate.send("orders.created", json);
    }
}`}
              </pre>
              
              <h3>Kafka Consumer Example:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@Component
public class InventoryConsumer {
    @KafkaListener(topics = "orders.created")
    public void handleOrderCreated(String message) {
        Order order = parse(message);
        // Update inventory accordingly
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Async Patterns</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Pattern</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Fire-and-Forget</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Message sent without expecting reply</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Logging, analytics</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Request-Reply</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Producer sends request, waits for reply</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Remote procedure calls</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Pub/Sub</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">One-to-many broadcast model</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Notifications, events</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Streaming</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Continuous stream of messages</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Real-time data processing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Saga Pattern</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Distributed transactions across services</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Order fulfillment workflows</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Async Communication</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Design Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use meaningful topic and queue names</li>
                    <li>Keep messages small and focused</li>
                    <li>Version your message schema over time</li>
                    <li>Log correlation IDs for tracing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Implement retry policies with exponential backoff</li>
                    <li>Use dead-letter queues for failed messages</li>
                    <li>Track and monitor error rates</li>
                    <li>Ensure idempotent processing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Encrypt sensitive message content</li>
                    <li>Secure access to message brokers</li>
                    <li>Enable authentication and authorization</li>
                    <li>Audit message production and consumption</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Compress large payloads when needed</li>
                    <li>Monitor lag and throughput metrics</li>
                    <li>Batch messages where appropriate</li>
                    <li>Tune consumer concurrency settings</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Kafka Producer</h2>
            <Card>
              <CardHeader>
                <CardTitle>OrderProducer.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class OrderProducer {
    private final KafkaTemplate<String, String> kafkaTemplate;

    public OrderProducer(KafkaTemplate<String, String> template) {
        this.kafkaTemplate = template;
    }

    public void publishOrderCreatedEvent(Order order) {
        String payload = new ObjectMapper().writeValueAsString(order);
        kafkaTemplate.send("orders.created", payload);
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Simple Message Consumer</h2>
            <Card>
              <CardHeader>
                <CardTitle>InventoryConsumer.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Component
public class InventoryConsumer {
    @KafkaListener(topics = "orders.created")
    public void handleOrderCreated(String message) {
        try {
            Order order = new ObjectMapper().readValue(message, Order.class);
            // Process inventory update
        } catch (JsonProcessingException ex) {
            // Log and requeue
        }
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
                  <CardTitle>Exercise 1: Basic Producer/Consumer</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Spring Boot app with Kafka starter</li>
                    <li>Implement producer that sends messages</li>
                    <li>Build consumer that processes messages</li>
                    <li>Test message flow locally</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Idempotent Processing</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Send duplicate messages intentionally</li>
                    <li>Implement deduplication logic</li>
                    <li>Store processed IDs in Redis</li>
                    <li>Verify same message handled once</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Retry Mechanism</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Simulate transient failure in consumer</li>
                    <li>Implement retry logic with delay</li>
                    <li>Move failed messages to DLQ after N attempts</li>
                    <li>Monitor and alert on retries</li>
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
                        href="https://docs.spring.io/spring-kafka/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Kafka Reference Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://kafka.apache.org/documentation/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Apache Kafka Official Docs
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
                        href="https://www.amazon.com/Kafka-Definitive-Guozhang-Messaging-Applications/dp/1789535855"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Kafka: The Definitive Guide by Neha Narkhede
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Building-Microservices-Sam-Newman/dp/1492059930"
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
                        href="https://www.baeldung.com/spring-messaging"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Messaging Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-message-handling/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Messaging Best Practices
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
                        href="/modules/message-queues/brokers/kafka"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Kafka Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/message-queues/brokers/rabbitmq"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        RabbitMQ Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/message-queues/brokers/activemq"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        ActiveMQ Module
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
          <Link href="/modules/message-queues/brokers/activemq">← ActiveMQ</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/message-queues/event-processing">Next: Event Processing →</Link>
        </Button>
      </div>
    </div>
  )
}
