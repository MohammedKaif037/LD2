import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SagaPatternModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Saga Pattern</h1>
          <Badge>Module 14.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to manage distributed transactions using the Saga Pattern in microservice architectures.
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
            <h2 className="text-2xl font-bold tracking-tight">What is the Saga Pattern?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The Saga Pattern is a design pattern used to manage data consistency across multiple services in a distributed system.
                It coordinates local transactions in each service through events or compensating actions, ensuring that either all operations succeed
                or appropriate rollback actions are taken if any step fails.
              </p>

              <p>The key characteristics of the Saga Pattern:</p>
              <ul>
                <li><strong>Local Transactions:</strong> Each service handles its own transaction.</li>
                <li><strong>Compensating Actions:</strong> Reverses previous steps when a failure occurs.</li>
                <li><strong>Event Choreography:</strong> Services react to events without central coordination.</li>
                <li><strong>Orchestration:</strong> A central coordinator manages the workflow and failures.</li>
              </ul>

              <p>
                In Spring Boot, the Saga Pattern can be implemented using event sourcing, message queues like Kafka or RabbitMQ,
                and orchestration engines such as Cadence or Temporal.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Saga Workflow</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Step</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Action</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>1. Start</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Begin distributed operation</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Initiate multi-service transaction</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>2. Step 1</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Execute first service operation</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Apply initial state change</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>3. Step 2</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Proceed to next service</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Continue transaction chain</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>4. Failure</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Trigger compensation logic</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Undo previous operations</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>5. Complete</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Finalize transaction</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Ensure final state consistency</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Choreography vs Orchestration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                There are two main approaches to implementing the Saga Pattern:
              </p>

              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Approach</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Choreography</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Each service listens to events and reacts accordingly.</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Decentralized systems where services evolve independently.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Orchestration</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">A central orchestrator sends commands to each service.</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Complex workflows requiring strict ordering and control.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use the Saga Pattern?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Distributed Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Ensures consistency across multiple services.</li>
                    <li>Handles partial failures gracefully.</li>
                    <li>Supports eventual consistency model.</li>
                    <li>Maintains business rules across microservices.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Allows independent scaling of services.</li>
                    <li>Reduces contention between services.</li>
                    <li>Supports high-throughput distributed systems.</li>
                    <li>Enables asynchronous processing.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Provides explicit rollback strategy.</li>
                    <li>Tracks compensating actions in logs.</li>
                    <li>Supports manual recovery for failed transactions.</li>
                    <li>Integrates well with monitoring tools.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resilience</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Prevents stuck transactions.</li>
                    <li>Works well with circuit breakers and retries.</li>
                    <li>Supports idempotent operations.</li>
                    <li>Enables audit trail for compliance.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing Saga in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement the Saga Pattern in Spring Boot applications:
              </p>

              <h3>Add Dependency (Example with Axon Framework):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`<dependency>
  <groupId>org.axonframework</groupId>
  <artifactId>axon-spring-boot-starter</artifactId>
</dependency>`}
              </pre>

              <h3>Basic Saga Class:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@Aggregate
public class OrderSaga {
    @Autowired
    private transient SagaRepository<Order> orderRepository;

    public void handle(OrderCreatedEvent event) {
        // Initiate payment and inventory checks
        ApplicationEvents.publish(new PaymentRequestedEvent(event.getOrderId()));
        ApplicationEvents.publish(new InventoryReservedEvent(event.getOrderId()));
    }

    @OnEvent("PaymentFailedEvent")
    public void handle(PaymentFailedEvent event) {
        // Compensate by releasing inventory
        ApplicationEvents.publish(new InventoryReleasedEvent(event.getOrderId()));
    }
}`}
              </pre>

              <h3>Event Listener:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@Service
public class OrderEventListener {
    @Autowired
    private OrderSaga orderSaga;

    @EventListener
    public void handleOrderCreated(OrderCreatedEvent event) {
        orderSaga.handle(event);
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Saga Implementation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Design Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Keep individual steps idempotent.</li>
                    <li>Make compensating actions reliable and retryable.</li>
                    <li>Track saga state for visibility.</li>
                    <li>Implement timeouts for long-running sagas.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Implementation Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use messaging systems like Kafka or RabbitMQ.</li>
                    <li>Avoid long-running sagas where possible.</li>
                    <li>Log every saga step for troubleshooting.</li>
                    <li>Implement cancellation tokens for orphaned sagas.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Error Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Ensure fallback logic works for every step.</li>
                    <li>Use dead-letter queue for failed messages.</li>
                    <li>Implement manual resolution process.</li>
                    <li>Monitor uncompleted sagas.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cloud-Native Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use Kubernetes Jobs for long-running processes.</li>
                    <li>Integrate with distributed tracing (Jaeger, Zipkin).</li>
                    <li>Store saga state in Redis or etcd.</li>
                    <li>Automate cleanup with cloud functions or cron jobs.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Saga vs Two-Phase Commit</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Aspect</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Two-Phase Commit</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Saga Pattern</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Consistency Model</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Strong consistency</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Eventual consistency</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Locking</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Requires locks during commit</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">No global locking required</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Performance</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Slower due to coordination overhead</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Faster but requires more error handling</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Failure Handling</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Rollback entire transaction</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Compensate with undo operations</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Use Case</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Monolithic databases</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Distributed microservices</td>
                </tr>
              </tbody>
            </table>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Saga Implementation</h2>
            <Card>
              <CardHeader>
                <CardTitle>OrderSaga.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Component
public class OrderSaga {
    @Autowired
    private EventPublisher eventPublisher;

    public void startOrderProcessing(OrderCreatedEvent event) {
        try {
            eventPublisher.publish(new PaymentRequestedEvent(event.getOrderId(), event.getUserId()));
            eventPublisher.publish(new InventoryReservedEvent(event.getOrderId(), event.getItems()));
        } catch (Exception e) {
            eventPublisher.publish(new OrderFailedEvent(event.getOrderId(), e.getMessage()));
        }
    }

    @OnEvent("PaymentFailedEvent")
    public void handlePaymentFailure(PaymentFailedEvent event) {
        eventPublisher.publish(new InventoryReleasedEvent(event.getOrderId()));
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Saga with Event Listeners</h2>
            <Card>
              <CardHeader>
                <CardTitle>PaymentListener.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Component
public class PaymentListener {
    @Autowired
    private OrderSaga orderSaga;

    @EventListener
    public void handlePaymentSuccess(PaymentSuccessEvent event) {
        orderSaga.onPaymentSuccess(event.getOrderId());
    }

    @EventListener
    public void handlePaymentFailure(PaymentFailedEvent event) {
        orderSaga.onPaymentFailure(event.getOrderId(), event.getError());
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
                  <CardTitle>Exercise 1: Basic Order Processing Saga</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create an order service that publishes creation events.</li>
                    <li>Implement payment and inventory services.</li>
                    <li>Build a Saga that handles success/failure scenarios.</li>
                    <li>Test end-to-end flow with successful execution.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Compensation Logic</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a scenario where payment succeeds but inventory fails.</li>
                    <li>Implement compensation logic to reverse payment.</li>
                    <li>Test behavior under partial failure.</li>
                    <li>Verify final state is consistent.</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Distributed Transaction Logging</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a saga that spans 4+ services.</li>
                    <li>Implement detailed logging for each step.</li>
                    <li>Add timeouts and retry mechanisms.</li>
                    <li>Visualize saga progress in a UI dashboard.</li>
                    <li>Simulate network partition and test recovery.</li>
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
                        href="https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/serverless/event-sourcing-cqrs"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Microsoft Azure: CQRS and Event Sourcing
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.axoniq.io/documentum/event-sourcing/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Axon Framework Event Sourcing Docs
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
                        href="https://www.amazon.com/Patterns-Distributed-Systems-Martin-Fowler/dp/0321200669"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Patterns of Distributed Systems by Martin Fowler
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity/dp/0321125215"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Domain-Driven Design by Eric Evans
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
                        href="https://microservices.io/patterns/data/saga.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Microservices.io: Saga Pattern Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/axon-saga"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Using Sagas in Spring with Axon
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
          <Link href="/modules/microservices/advanced/event-sourcing">← Event Sourcing</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/microservices/advanced/service-mesh">Next: Service Mesh →</Link>
        </Button>
      </div>
    </div>
  )
}
