import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function TransactionManagementModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Transaction Management</h1>
          <Badge>Module 5.5</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to manage transactions in Spring Boot applications using @Transactional and transaction boundaries
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
            <h2 className="text-2xl font-bold tracking-tight">What is Transaction Management?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Transaction management ensures that a set of operations either completes successfully or fails as a whole,
                maintaining data consistency and integrity. In Spring Boot, this is typically handled by declarative
                transactions via the <code>@Transactional</code> annotation.
              </p>
              
              <p>A transaction has four key properties known as ACID:</p>
              <ul>
                <li><strong>Atomicity:</strong> All operations succeed or fail together</li>
                <li><strong>Consistency:</strong> Database remains in a valid state</li>
                <li><strong>Isolation:</strong> Transactions are isolated from each other</li>
                <li><strong>Durability:</strong> Changes persist even after system failure</li>
              </ul>
              
              <p>
                In Spring Boot, transaction management can be configured declaratively using annotations or programmatically
                using <code>TransactionTemplate</code>, and supports both local and distributed transactions.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Transaction Propagation Behaviors</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Behavior</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>REQUIRED</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Supports current tx or creates new one</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Default behavior; most common use</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>REQUIRES_NEW</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Always creates new transaction</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Independent transaction from parent</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SUPPORTS</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Runs in tx if available</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Optional transaction context</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>MANDATORY</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Must run within existing tx</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Force method to run inside a tx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>NEVER</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Must not run in transaction</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Operations that should not be transactional</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use Transaction Management?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Data Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Ensure multiple DB operations complete as unit</li>
                    <li>Rollback changes if any operation fails</li>
                    <li>Maintain database constraints and referential integrity</li>
                    <li>Prevent dirty reads and inconsistent states</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Automatically rollback on unchecked exceptions</li>
                    <li>Support custom rollback rules</li>
                    <li>Provide transaction status for manual control</li>
                    <li>Log errors before rollback</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Reduce database round-trips with batch updates</li>
                    <li>Control transaction isolation levels</li>
                    <li>Minimize lock contention</li>
                    <li>Enable read-only optimizations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Scalability & Observability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Monitor long-running transactions</li>
                    <li>Track transaction statistics</li>
                    <li>Support distributed transactions</li>
                    <li>Integrate with observability tools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing Transactions in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement transaction management in Spring Boot:
              </p>
              
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>`}
              </pre>
              
              <h3>Basic Service Example:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository repo) {
        this.userRepository = repo;
    }

    @Transactional
    public void transferOwnership(Long fromUserId, Long toUserId) {
        User fromUser = userRepository.findById(fromUserId).orElseThrow();
        User toUser = userRepository.findById(toUserId).orElseThrow();
        
        fromUser.setOwner(false);
        toUser.setOwner(true);
        
        userRepository.save(fromUser);
        userRepository.save(toUser);
    }
}`}
              </pre>
              
              <h3>Customizing Transaction Behavior:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Transactional(
    propagation = Propagation.REQUIRES_NEW,
    isolation = Isolation.READ_COMMITTED,
    timeout = 30,
    readOnly = false,
    rollbackFor = {DataAccessException.class})
public void complexOperation() {
    // Multiple DB operations
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Transaction Isolation Levels</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Level</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>DEFAULT</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Uses underlying DB's default</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Standard transaction behavior</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>READ_UNCOMMITTED</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Allows dirty reads</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fast but unsafe operations</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>READ_COMMITTED</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Read only committed data</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevents dirty reads</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>REPEATABLE_READ</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Same query returns same result</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Avoid inconsistent reads during tx</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SERIALIZABLE</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full isolation, no concurrency</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Highly sensitive financial data</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for Transaction Management</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Implementation Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Apply @Transactional at service layer, not controller</li>
                    <li>Keep transactions short and focused</li>
                    <li>Use readOnly flag where appropriate</li>
                    <li>Define explicit rollbackFor exceptions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Only unchecked exceptions trigger rollback by default</li>
                    <li>Use rollbackFor to include checked exceptions</li>
                    <li>Use noRollbackFor to exclude specific exceptions</li>
                    <li>Log errors before rollback occurs</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use REQUIRES_NEW only when necessary</li>
                    <li>Set reasonable timeouts</li>
                    <li>Avoid long-running transactions</li>
                    <li>Use optimistic locking where possible</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Debugging</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Test rollback behavior with exceptions</li>
                    <li>Verify transaction boundaries</li>
                    <li>Use transaction manager for debugging</li>
                    <li>Monitor slow or blocking transactions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Transaction Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>OrderService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class OrderService {
    private final OrderRepository orderRepo;
    private final InventoryService inventory;

    public OrderService(OrderRepository repo, InventoryService invService) {
        this.orderRepo = repo;
        this.inventory = invService;
    }

    @Transactional
    public void placeOrder(OrderRequest request) {
        Order order = new Order(request);
        order.setStatus("PROCESSING");
        orderRepo.save(order);
        
        inventory.reduceStock(request.getProductId(), request.getQuantity());
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Custom Rollback Rules</h2>
            <Card>
              <CardHeader>
                <CardTitle>PaymentService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class PaymentService {
    private final PaymentRepository paymentRepo;
    private final AuditService auditService;

    public PaymentService(PaymentRepository repo, AuditService audit) {
        this.paymentRepo = repo;
        this.auditService = audit;
    }

    @Transactional(
        rollbackFor = {PaymentFailedException.class, DataAccessException.class},
        noRollbackFor = InvalidRequestException.class)
    public void processPayment(PaymentRequest request) {
        Payment payment = new Payment(request);
        payment.setStatus("PENDING");
        paymentRepo.save(payment);
        
        boolean success = paymentGateway.process(request);
        if (!success) {
            throw new PaymentFailedException("Payment gateway returned error");
        }
        
        payment.setStatus("SUCCESS");
        paymentRepo.save(payment);
        auditService.logPaymentSuccess(request.getTransactionId());
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
                  <CardTitle>Exercise 1: Basic Transaction</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Order entity with validation</li>
                    <li>Implement OrderRepository interface</li>
                    <li>Build service with transactional method</li>
                    <li>Simulate failure and verify rollback</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Custom Rollback</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create custom exceptions</li>
                    <li>Configure rollbackFor and noRollbackFor</li>
                    <li>Test different exception types</li>
                    <li>Verify expected behavior</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Distributed Transaction</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Set up two separate databases</li>
                    <li>Implement transaction across both</li>
                    <li>Test commit and rollback scenarios</li>
                    <li>Add recovery mechanism for partial failures</li>
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
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/annotation/Transactional.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring @Transactional Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/reference/html/#transaction"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Transaction Reference Guide
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
                        href="https://www.amazon.com/Spring-Security-Cookbook-Gopal-Dahale/dp/1787780196"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Security Cookbook by Gopal Dahale
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Microservices-Spring-Microservice-applications-Rajesh-Ojha/dp/1789535855"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Microservices with Spring Boot by Rajesh Ojha
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
                        href="https://www.baeldung.com/transaction-configuration-with-spring-and-hibernate-or-jpa"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Transaction Configuration in Spring
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-transactional/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: @Transactional in Spring
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
                        href="/modules/web-development/data-access/crud"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        CRUD Operations Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/web-development/data-access/repository-pattern"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Repository Pattern Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/web-development/data-access/spring-data-jpa"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Data JPA Module
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
          <Link href="/modules/web-development/data-access/spring-data-jpa">← Spring Data JPA</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/web-development/data-access/crud">Next: CRUD →</Link>
        </Button>
      </div>
    </div>
  )
}
