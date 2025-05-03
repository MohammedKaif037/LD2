import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CorePrinciples() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Core Principles</h1>
          <Badge>Module 1.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Explore the fundamental principles that power Spring Framework applications
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Spring Core Principles</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The Spring Framework is built on several core principles that enable the creation of robust, 
                maintainable, and testable applications. These principles form the foundation of Spring's approach 
                to enterprise application development.
              </p>
              <p>
                Understanding these core principles is essential for effectively using Spring and building 
                applications that leverage its full capabilities.
              </p>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Inversion of Control (IoC)</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Inversion of Control (IoC) is a design principle where the control flow of a program is inverted compared 
                to traditional procedural programming. Instead of the programmer controlling the flow of execution, 
                this control is handed over to a framework or container.
              </p>
              
              <h3>Key Concepts of IoC</h3>
              <ul>
                <li><strong>Framework Control:</strong> The framework manages the overall flow of the application</li>
                <li><strong>Pluggable Components:</strong> Developers provide components that are plugged into the framework</li>
                <li><strong>Decoupling:</strong> Components are decoupled from the framework implementation</li>
              </ul>
              
              <h3>Benefits of IoC</h3>
              <ul>
                <li>Loose coupling between components</li>
                <li>Improved testability of components</li>
                <li>Greater flexibility in component implementation</li>
                <li>Easier maintenance and extension of functionality</li>
              </ul>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Dependency Injection (DI)</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Dependency Injection (DI) is a specific implementation of the IoC principle where an object's dependencies 
                are provided by an external entity rather than being created internally. This allows for greater flexibility 
                and easier testing of components.
              </p>
              
              <h3>Types of Dependency Injection</h3>
              
              <h4>1. Constructor Injection</h4>
              <p>
                Dependencies are provided through a class constructor. This is the preferred method as it ensures 
                required dependencies are available when an object is created.
              </p>
              
              <h4>2. Setter Injection</h4>
              <p>
                Dependencies are provided through setter methods. Useful for optional dependencies or when 
                immutability isn't required.
              </p>
              
              <h4>3. Field Injection</h4>
              <p>
                Dependencies are injected directly into fields using annotations like @Autowired. While convenient, 
                this approach can make testing more difficult.
              </p>
              
              <h3>Best Practices for DI</h3>
              <ul>
                <li>Use constructor injection for mandatory dependencies</li>
                <li>Use setter injection for optional dependencies</li>
                <li>Avoid field injection when possible for better testability</li>
                <li>Keep constructors focused and limited in the number of parameters</li>
                <li>Make classes final when appropriate to prevent unintended subclassing</li>
              </ul>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Single Responsibility Principle (SRP)</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The Single Responsibility Principle states that a class should have only one reason to change. This 
                principle helps ensure that each component has a clear, well-defined purpose.
              </p>
              
              <h3>Applying SRP in Spring</h3>
              <ul>
                <li>Controllers handle HTTP requests/responses</li>
                <li>Services contain business logic</li>
                <li>Repositories manage data persistence</li>
                <li>Components encapsulate specific functionalities</li>
              </ul>
              
              <h3>Benefits of SRP</h3>
              <ul>
                <li>Improved code readability and maintainability</li>
                <li>Easier testing and debugging</li>
                <li>Reduced risk of side effects during modifications</li>
                <li>Better organization of codebase</li>
              </ul>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Open/Closed Principle (OCP)</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The Open/Closed Principle states that software entities should be open for extension but closed for modification. 
                This means that new functionality should be added by extending existing code rather than modifying it.
              </p>
              
              <h3>Implementing OCP in Spring</h3>
              <ul>
                <li>Using interfaces to define contracts that can be extended</li>
                <li>Leveraging Spring's extensibility points through interceptors and listeners</li>
                <li>Creating pluggable modules that can be added without changing core logic</li>
                <li>Utilizing strategy patterns to allow different implementations</li>
              </ul>
              
              <h3>Benefits of OCP</h3>
              <ul>
                <li>Reduced risk of breaking existing functionality</li>
                <li>Improved code reuse</li>
                <li>Easier system upgrades and enhancements</li>
                <li>Better support for polymorphism and abstraction</li>
              </ul>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Liskov Substitution Principle (LSP)</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects 
                of its subclasses without affecting the correctness of the application. This principle ensures proper 
                inheritance and abstraction.
              </p>
              
              <h3>Applying LSP in Spring</h3>
              <ul>
                <li>Designing proper inheritance hierarchies for domain models</li>
                <li>Ensuring consistent behavior across implementations of interfaces</li>
                <li>Maintaining contract compliance when extending abstract classes</li>
                <li>Proper exception handling across inherited methods</li>
              </ul>
              
              <h3>Violations to Avoid</h3>
              <ul>
                <li>Throwing exceptions in child classes not declared in parent</li>
                <li>Changing method signatures in ways that break expected behavior</li>
                <li>Modifying preconditions to be stricter than in parent classes</li>
                <li>Changing the meaning of methods in derived classes</li>
              </ul>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Interface Segregation Principle (ISP)</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The Interface Segregation Principle states that no client should be forced to depend on methods it does 
                not use. This principle encourages the creation of fine-grained interfaces tailored to specific clients.
              </p>
              
              <h3>Implementing ISP in Spring</h3>
              <ul>
                <li>Creating specific interfaces for different service consumers</li>
                <li>Avoiding "fat" interfaces with many unrelated methods</li>
                <li>Allowing multiple interface implementations per class</li>
                <li>Grouping related operations into cohesive interface sets</li>
              </ul>
              
              <h3>Benefits of ISP</h3>
              <ul>
                <li>Reduced dependency on unused methods</li>
                <li>Better separation of concerns</li>
                <li>Improved code maintainability</li>
                <li>More flexible system design</li>
              </ul>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Dependency Inversion Principle (DIP)</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The Dependency Inversion Principle states that high-level modules should not depend on low-level modules; 
                both should depend on abstractions. Additionally, abstractions should not depend on details; details 
                should depend on abstractions.
              </p>
              
              <h3>Implementing DIP in Spring</h3>
              <ul>
                <li>Programming to interfaces rather than concrete implementations</li>
                <li>Using Spring's DI mechanism to inject dependencies</li>
                <li>Defining service contracts through interfaces</li>
                <li>Allowing configuration-driven implementation selection</li>
              </ul>
              
              <h3>Benefits of DIP</h3>
              <ul>
                <li>Reduced coupling between application layers</li>
                <li>Increased modularity</li>
                <li>Easier substitution of implementations</li>
                <li>Better support for testing and mocking</li>
              </ul>
            </div>
          </section>
        </TabsContent>
        
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">IoC Example: Application Context</h2>
            <Card>
              <CardHeader>
                <CardTitle>Application Context Configuration</CardTitle>
                <CardDescription>Demonstrating Inversion of Control through Spring's ApplicationContext</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">AppConfig.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Configuration
@ComponentScan("com.example.app")
public class AppConfig {
    // Configuration metadata
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">UserService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Service
public class UserService {
    private final UserRepository userRepository;
    
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    // Business methods...
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Main Application</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`public class Application {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        UserService userService = context.getBean(UserService.class);
        
        // Use the service...
    }
}`}
                    </pre>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
                    <p className="text-sm">
                      This example demonstrates IoC by letting Spring manage the creation and wiring of beans. 
                      The application doesn't directly create the UserService instance or its dependencies; 
                      instead, it receives them from the container.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">DI Example: Strategy Pattern</h2>
            <Card>
              <CardHeader>
                <CardTitle>Payment Processing System Using Dependency Injection</CardTitle>
                <CardDescription>Demonstrating DI with the Strategy Pattern</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">PaymentProcessor.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`public interface PaymentProcessor {
    boolean processPayment(double amount);
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">CreditCardProcessor.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Component
public class CreditCardProcessor implements PaymentProcessor {
    @Override
    public boolean processPayment(double amount) {
        // Process credit card payment
        return true;
    }
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">PayPalProcessor.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Component
public class PayPalProcessor implements PaymentProcessor {
    @Override
    public boolean processPayment(double amount) {
        // Process PayPal payment
        return true;
    }
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">PaymentService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Service
public class PaymentService {
    private final PaymentProcessor paymentProcessor;
    
    @Autowired
    public PaymentService(PaymentProcessor paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    
    public boolean processOrderPayment(double amount) {
        return paymentProcessor.processPayment(amount);
    }
}`}
                    </pre>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
                    <p className="text-sm">
                      This example demonstrates how DI supports the Strategy pattern. The PaymentService works with any 
                      implementation of PaymentProcessor, allowing easy extension without modification. When multiple 
                      implementations exist, Spring will use the @Primary annotation to determine which one to inject, 
                      or we can use @Qualifier to specify explicitly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">SOLID Principles Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Order Processing System Following SOLID Principles</CardTitle>
                <CardDescription>Comprehensive example demonstrating all SOLID principles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">OrderProcessor.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@FunctionalInterface
public interface OrderProcessor {
    void process(Order order);
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">EmailNotificationService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Component
public class EmailNotificationService implements OrderProcessor {
    @Override
    public void process(Order order) {
        // Send email notification
    }
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">SMSNotificationService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x auto text-sm">
                      {`@Component
public class SMSNotificationService implements OrderProcessor {
    @Override
    public void process(Order order) {
        // Send SMS notification
    }
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">OrderService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Service
public class OrderService {
    private final List<OrderProcessor> orderProcessors;
    
    @Autowired
    public OrderService(List<OrderProcessor> orderProcessors) {
        this.orderProcessors = orderProcessors;
    }
    
    public void handleOrder(Order order) {
        // Process order
        // ...
        
        // Notify all processors
        for (OrderProcessor processor : orderProcessors) {
            processor.process(order);
        }
    }
}`}
                    </pre>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
                    <p className="text-sm">
                      This example demonstrates multiple SOLID principles:
                      
                      <ul className="list-disc pl-5 mt-2">
                        <li><strong>Single Responsibility:</strong> Each service handles only one responsibility</li>
                        <li><strong>Open/Closed:</strong> New notification types can be added without modifying existing code</li>
                        <li><strong>Liskov Substitution:</strong> All processors can be used interchangeably</li>
                        <li><strong>Interface Segregation:</strong> Processors only need to implement the process method</li>
                        <li><strong>Dependency Inversion:</strong> OrderService depends on the OrderProcessor interface, not specific implementations</li>
                      </ul>
                    </p>
                  </div>
                </div>
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
                  <CardTitle>Exercise 1: Implement IoC Pattern</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a simple logging system with the following components:
                      <ul className="list-disc pl-5 mt-1">
                        <li>An ILogger interface with a log method</li>
                        <li>ConsoleLogger implementation</li>
                        <li>FileLogger implementation</li>
                        <li>LoggingService that uses ILogger</li>
                      </ul>
                    </li>
                    <li>Configure Spring to manage these components using annotations</li>
                    <li>Test that you can switch between console and file logging by changing configuration only</li>
                    <li>Observe how the control of object creation and wiring is managed by Spring</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Apply Dependency Injection</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a notification system with the following:
                      <ul className="list-disc pl-5 mt-1">
                        <li>A NotificationService class</li>
                        <li>EmailService dependency</li>
                        <li>SmsService dependency</li>
                      </ul>
                    </li>
                    <li>Implement all three types of DI (constructor, setter, field)</li>
                    <li>Compare the approaches by creating unit tests for each version</li>
                    <li>Document which approach you found most testable and maintainable</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: SOLID Principles Practice</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create an e-commerce system that follows all SOLID principles</li>
                    <li>Include:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Order processing with single responsibility per class</li>
                        <li>Payment options that follow open/closed principle</li>
                        <li>Various shipping strategies that demonstrate Liskov substitution</li>
                        <li>Fine-grained interfaces for customer communication</li>
                        <li>Abstraction-based reporting system</li>
                      </ul>
                    </li>
                    <li>Implement unit tests to verify each principle is properly applied</li>
                    <li>Write documentation explaining how each SOLID principle is demonstrated</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 4: Refactor Legacy Code</CardTitle>
                  <CardDescription>Challenge level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Find or create a sample of legacy code that violates core principles</li>
                    <li>Identify which principles are violated</li>
                    <li>Refactor the code to follow:
                      <ul className="list-disc pl-5 mt-1">
                        <li>IoC and DI principles</li>
                        <li>All five SOLID principles</li>
                        <li>Proper separation of concerns</li>
                      </ul>
                    </li>
                    <li>Write tests to verify functionality before and after refactoring</li>
                    <li>Document the benefits achieved through the refactoring</li>
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
                        href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Framework Core Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-scopes"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Bean Scopes in Spring
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data.sql.datasource.configuration"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Data Source Configuration
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
                        href="https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: IoC and DI in Spring
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://reflectoring.io/tutorial-spring-ioc/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Spring IoC Container Tutorial
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.vogella.com/tutorials/Spring/article.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Vogella: Comprehensive Spring Framework Tutorial
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
                        href="https://www.amazon.com/Spring-Action-Craig-Walls/dp/1617294942/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring in Action by Craig Walls
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.amazon.com/Dependency-Injection-Principles-Patterns-Practices/dp/161729473X/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Dependency Injection by Mark Seemann
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.amazon.com/Patterns-Principles-Practices-Arquitetura-Sistemas/dp/8575223874/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Arquitetura de Sistemas by Etcio Ribeiro
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
                        href="/modules/fundamentals/basic-understanding/overview"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Boot Overview
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/fundamentals/basic-understanding/di-ioc"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Dependency Injection & IoC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/fundamentals/configuration/annotations"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Annotation-based Configuration
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
          <Link href="/modules/fundamentals/basic-understanding/overview">←  Previous: Overview</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/fundamentals/basic-understanding/di-ioc">Next: DI & IoC →</Link>
        </Button>
      </div>
    </div>
  )
}