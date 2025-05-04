import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function EventSourcingModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Event Sourcing</h1>
          <Badge>Module 14.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement Event Sourcing in microservice architectures for reliable state management
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
            <h2 className="text-2xl font-bold tracking-tight">What is Event Sourcing?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Event Sourcing is an architectural pattern where changes to application state are stored as a sequence of events.
                Instead of just storing the current state, each state change is captured as a domain event, enabling powerful auditing,
                temporal queries, and replay capabilities.
              </p>
              
              <p>Key components of Event Sourcing:</p>
              <ul>
                <li><strong>Event Store:</strong> A database that stores all state changes as events</li>
                <li><strong>Aggregate:</strong> The entity whose state changes are recorded as events</li>
                <li><strong>Event Handlers:</strong> Logic that processes events and updates read models</li>
                <li><strong>Event Stream:</strong> Ordered sequence of events for an aggregate</li>
              </ul>
              
              <p>
                In Spring Cloud, Event Sourcing can be implemented using Axon Framework or custom event store implementations,
                especially when combined with CQRS (Command Query Responsibility Segregation).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">How Event Sourcing Works</h2>
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
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>1. Command</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Client sends command to update state</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Initiate a state change</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>2. Validate</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Domain logic validates command</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Ensure business rules are met before applying change</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>3. Apply</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Apply command to generate event(s)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Transform input into immutable event records</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>4. Store</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Persist event in event store</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Maintain full history of state changes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>5. Project</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Update read model from events</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Provide queryable views of data</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use Event Sourcing?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Audit Trail</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Stores complete history of state changes</li>
                    <li>Supports temporal queries (what was the state at time X?)</li>
                    <li>Enables debugging by replaying events</li>
                    <li>Facilitates compliance and regulatory requirements</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Events are immutable and append-only</li>
                    <li>Reduces risk of accidental state corruption</li>
                    <li>Supports eventual consistency across services</li>
                    <li>Makes it easier to rebuild state after failure</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Temporal Queries</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Reconstruct past states of entities</li>
                    <li>Supports what-if analysis and debugging</li>
                    <li>Track evolution of data over time</li>
                    <li>Useful for financial systems and audit logs</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>System Resilience</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Replay events to recover from failure</li>
                    <li>Build secondary indexes and projections</li>
                    <li>Supports asynchronous processing</li>
                    <li>Integrates well with message queues and streaming</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Event Sourcing vs Traditional Persistence</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Aspect</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Traditional DB</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Event Sourcing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>State Storage</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Only current state is stored</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full history of state changes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Updates</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mutate existing data</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Append new events only</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Query Support</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Direct querying of current state</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Requires separate read model for querying</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Performance</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fast writes for simple updates</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High throughput for append-only writes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Error Recovery</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Restore from backup</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Rebuild state from event log</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing Event Sourcing in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement Event Sourcing in Spring Boot applications:
              </p>
              
              <h3>Add Dependency (Axon Framework):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<dependency>
  <groupId>org.axonframework</groupId>
  <artifactId>axon-spring-boot-starter</artifactId>
</dependency>`}
              </pre>
              
              <h3>Define Domain Events:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderCreatedEvent {
    private String orderId;
    private String userId;
    private List<OrderItem> items;
}`}
              </pre>
              
              <h3>Use Event Store:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Service
public class OrderService {
    private final EventStore eventStore;

    public OrderService(EventStore eventStore) {
        this.eventStore = eventStore;
    }

    public void createOrder(String orderId, String userId, List<OrderItem> items) {
        eventStore.publish(new OrderCreatedEvent(orderId, userId, items));
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Event Sourcing</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Event Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Design events as immutable facts</li>
                    <li>Version events if needed</li>
                    <li>Use descriptive event names</li>
                    <li>Include sufficient metadata (timestamp, user, etc.)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Storage & Retrieval</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use dedicated event store like AxonDB or MongoDB</li>
                    <li>Separate write and read models (CQRS)</li>
                    <li>Implement snapshotting for large aggregates</li>
                    <li>Index events for faster reconstruction</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Projection Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Build read models from event stream</li>
                    <li>Handle projection errors gracefully</li>
                    <li>Support reprocessing of events</li>
                    <li>Monitor projection lag and health</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cloud-Native Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Integrate with Kafka or RabbitMQ for event streaming</li>
                    <li>Use schema registry for versioned events</li>
                    <li>Enable distributed tracing for event flow</li>
                    <li>Implement dead-letter queue for failed events</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Event Definition</h2>
            <Card>
              <CardHeader>
                <CardTitle>OrderCreatedEvent.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderCreatedEvent {
    private String orderId;
    private String userId;
    private List<OrderItem> items;
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Event Handling Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>OrderEventHandler.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Component
public class OrderEventHandler {
    @Autowired
    private OrderRepository orderRepository;

    @EventListener
    public void handle(OrderCreatedEvent event) {
        Order order = new Order(event.getOrderId(), event.getUserId());
        order.setItems(event.getItems());
        order.setStatus("CREATED");
        orderRepository.save(order);
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Replaying Events</h2>
            <Card>
              <CardHeader>
                <CardTitle>EventReplayer.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class EventReplayer {
    @Autowired
    private EventStore eventStore;

    public void replayEventsForOrder(String orderId) {
        Stream<Event> events = eventStore.readEvents(orderId).asStream();
        events.forEach(this::rehydrateOrder);
    }

    private void rehydrateOrder(Event event) {
        // Reconstruct order state based on event type
        if (event instanceof OrderCreatedEvent created) {
            // Add to order state
        } else if (event instanceof OrderShippedEvent shipped) {
            // Update shipping status
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
                  <CardTitle>Exercise 1: Basic Event Capture</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with Axon Framework dependency</li>
                    <li>Define at least two domain events</li>
                    <li>Implement event handler that persists to database</li>
                    <li>Test event capture and replay functionality</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Versioned Events</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create initial version of domain event</li>
                    <li>Implement backward-compatible event evolution</li>
                    <li>Use schema registry to track event versions</li>
                    <li>Test old and new consumers with updated events</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Build Temporal Query System</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create system that supports historical state queries</li>
                    <li>Implement event sourcing for a core domain</li>
                    <li>Build temporal query API to reconstruct past states</li>
                    <li>Test system with real-world scenario (e.g., account balance at date)</li>
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
                        href="https://docs.axoniq.io/documentum/event-sourcing/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Axon Framework Event Sourcing Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-cloud-stream/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Stream Reference
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
                        href="https://www.amazon.com/Event-Sourcing-Applied-Using-Patterns/dp/1617296258"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Event Sourcing Applied by Hernan Wilkinson
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
                        href="https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/serverless/event-sourcing-cqrs"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Microsoft Azure: Event Sourcing and CQRS
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/axon-event-sourcing"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Axon and Event Sourcing in Spring
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
                        href="/modules/microservices/advanced/saga"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Saga Pattern Module
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
          <Link href="/modules/microservices/advanced/circuit-breaker">← Circuit Breaker</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/microservices/advanced/saga">Next: Saga Pattern →</Link>
        </Button>
      </div>
    </div>
  )
}
