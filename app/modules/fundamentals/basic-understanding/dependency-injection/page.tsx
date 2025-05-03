import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function DependencyInjection() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dependency Injection & IoC</h1>
          <Badge>Module 1.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn about Dependency Injection and Inversion of Control, core principles of the Spring Framework
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
            <h2 className="text-2xl font-bold tracking-tight">What is Inversion of Control (IoC)?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Inversion of Control (IoC) is a design principle in which the control of object creation, lifecycle, and
                dependencies is transferred to a container or framework. In traditional programming, your code calls a
                library, but with IoC, the framework calls your code.
              </p>
              <p>IoC inverts the flow of control compared to traditional procedural programming:</p>
              <ul>
                <li>
                  <strong>Traditional approach:</strong> Your application code controls the flow and calls into
                  libraries or frameworks when needed.
                </li>
                <li>
                  <strong>IoC approach:</strong> The framework controls the flow and calls into your application code
                  when needed.
                </li>
              </ul>
              <p>
                The main benefit of IoC is that it decouples the execution of a task from its implementation, making it
                easier to switch implementations and increasing the modularity of your program.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">What is Dependency Injection (DI)?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Dependency Injection is a specific form of IoC where the dependencies of a class are "injected" into the
                class rather than the class creating or finding them. This makes the class more testable, modular, and
                maintainable.
              </p>
              <p>
                In Spring, DI is implemented through the Spring IoC container, which manages the instantiation,
                configuration, and assembly of objects (known as beans).
              </p>
              <p>There are three main types of dependency injection:</p>
              <ol>
                <li>
                  <strong>Constructor Injection:</strong> Dependencies are provided through a class constructor.
                </li>
                <li>
                  <strong>Setter Injection:</strong> Dependencies are provided through setter methods.
                </li>
                <li>
                  <strong>Field Injection:</strong> Dependencies are injected directly into fields (using @Autowired
                  annotation).
                </li>
              </ol>
              <p>
                Constructor injection is generally preferred as it ensures that a class is always instantiated with all
                its required dependencies.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring IoC Container</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The Spring IoC container is responsible for managing the lifecycle of Spring beans, from instantiation
                to destruction. There are two types of IoC containers in Spring:
              </p>
              <ol>
                <li>
                  <strong>BeanFactory:</strong> The simplest container, providing basic support for DI.
                </li>
                <li>
                  <strong>ApplicationContext:</strong> A more advanced container built on top of BeanFactory, with
                  additional enterprise-specific functionality.
                </li>
              </ol>
              <p>The ApplicationContext is the preferred Spring container as it provides more features, such as:</p>
              <ul>
                <li>Integration with Spring AOP</li>
                <li>Message resource handling (for internationalization)</li>
                <li>Event publication</li>
                <li>Application-layer specific contexts</li>
              </ul>
              <p>
                In Spring Boot, an ApplicationContext is automatically created and configured based on your classpath
                and configuration.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Beans</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                In Spring, a "bean" is an object that is instantiated, assembled, and managed by the Spring IoC
                container. Beans are the backbone of your application, and their metadata is used by the container to
                create and configure them.
              </p>
              <p>There are several ways to define beans in Spring:</p>
              <ol>
                <li>
                  <strong>XML-based configuration:</strong> Beans are defined in XML files.
                </li>
                <li>
                  <strong>Java-based configuration:</strong> Beans are defined using @Configuration and @Bean
                  annotations.
                </li>
                <li>
                  <strong>Annotation-based configuration:</strong> Beans are defined using annotations like @Component,
                  @Service, @Repository, and @Controller.
                </li>
                <li>
                  <strong>Auto-configuration:</strong> In Spring Boot, beans are often automatically configured based on
                  classpath dependencies.
                </li>
              </ol>
              <p>
                Spring Boot primarily uses annotation-based configuration and auto-configuration, reducing the need for
                explicit bean definitions.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Bean Scopes</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring beans can be defined with different scopes, which determine the lifecycle and visibility of the
                bean. The most common scopes are:
              </p>
              <ul>
                <li>
                  <strong>Singleton (default):</strong> One instance per Spring container
                </li>
                <li>
                  <strong>Prototype:</strong> New instance each time the bean is requested
                </li>
                <li>
                  <strong>Request:</strong> One instance per HTTP request (web-aware)
                </li>
                <li>
                  <strong>Session:</strong> One instance per HTTP session (web-aware)
                </li>
                <li>
                  <strong>Application:</strong> One instance per ServletContext (web-aware)
                </li>
                <li>
                  <strong>Websocket:</strong> One instance per WebSocket (web-aware)
                </li>
              </ul>
              <p>You can specify a bean's scope using the @Scope annotation:</p>
              <pre>
                {`@Component
@Scope("prototype")
public class MyPrototypeBean {
    // ...
}`}
              </pre>
              <p>
                Understanding bean scopes is crucial for managing state in your application and avoiding unexpected
                behavior.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Autowiring</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Autowiring is the process by which Spring automatically resolves dependencies between beans. It
                eliminates the need for explicit wiring in configuration files.
              </p>
              <p>Spring supports several autowiring modes:</p>
              <ul>
                <li>
                  <strong>No:</strong> No autowiring. Dependencies must be explicitly defined.
                </li>
                <li>
                  <strong>ByName:</strong> Autowiring by property name.
                </li>
                <li>
                  <strong>ByType:</strong> Autowiring by property type.
                </li>
                <li>
                  <strong>Constructor:</strong> Autowiring by constructor arguments.
                </li>
              </ul>
              <p>In modern Spring applications, autowiring is typically done using annotations:</p>
              <ul>
                <li>
                  <strong>@Autowired:</strong> Marks a constructor, field, or setter method to be autowired by type.
                </li>
                <li>
                  <strong>@Qualifier:</strong> Used with @Autowired to specify which bean should be autowired when
                  multiple candidates exist.
                </li>
                <li>
                  <strong>@Resource:</strong> Similar to @Autowired but autowires by name.
                </li>
              </ul>
              <p>
                Spring Boot heavily relies on autowiring to reduce configuration and make applications more
                maintainable.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Benefits of DI in Spring Boot</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Loose Coupling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    DI reduces the coupling between classes, making the system more modular and easier to maintain.
                    Classes don't need to know how their dependencies are created or where they come from.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Testability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    DI makes it easier to test components in isolation by allowing dependencies to be mocked or stubbed.
                    This is crucial for unit testing and test-driven development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Flexibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    DI allows for easy switching between different implementations of a dependency without changing the
                    dependent class. This is useful for changing behavior based on environment or requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Maintainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    DI promotes the Single Responsibility Principle by separating the concern of creating dependencies
                    from the class's main functionality, making the code more maintainable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Constructor Injection Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Constructor Injection</CardTitle>
                <CardDescription>The recommended approach for dependency injection in Spring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">UserRepository.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`public interface UserRepository {
    User findById(Long id);
    List<User> findAll();
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">UserRepositoryImpl.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Repository
public class UserRepositoryImpl implements UserRepository {
    // Implementation details...
    
    @Override
    public User findById(Long id) {
        // Implementation
    }
    
    @Override
    public List<User> findAll() {
        // Implementation
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">UserService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Service
public class UserService {
    private final UserRepository userRepository;
    
    // Constructor injection
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id);
    }
    
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">UserController.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;
    
    // Constructor injection
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.getUserById(id);
    }
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Setter Injection Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Setter Injection</CardTitle>
                <CardDescription>An alternative approach for optional dependencies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">EmailService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Service
public class EmailService {
    private UserRepository userRepository;
    
    // Setter injection
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    public void sendEmailToAllUsers(String subject, String content) {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            // Send email to user
        }
    }
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Field Injection Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Field Injection</CardTitle>
                <CardDescription>A concise but less recommended approach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">NotificationService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Service
public class NotificationService {
    // Field injection
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private EmailService emailService;
    
    public void notifyUser(Long userId, String message) {
        User user = userRepository.findById(userId);
        // Send notification to user
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Note on Field Injection</p>
                    <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-md">
                      <p className="text-sm">
                        While field injection is concise, it's generally not recommended for several reasons:
                      </p>
                      <ul className="list-disc pl-5 mt-2 text-sm">
                        <li>It makes unit testing more difficult as you can't easily provide mock dependencies.</li>
                        <li>It hides dependencies, making it harder to see what a class needs to function.</li>
                        <li>It prevents making fields final, which is a good practice for immutability.</li>
                        <li>It requires the use of reflection, which can have performance implications.</li>
                      </ul>
                      <p className="text-sm mt-2">
                        Constructor injection is generally preferred as it makes dependencies explicit and allows for
                        proper initialization.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Java Configuration Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Java-based Configuration</CardTitle>
                <CardDescription>Defining beans using @Configuration and @Bean</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">AppConfig.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Configuration
public class AppConfig {
    
    @Bean
    public UserRepository userRepository() {
        return new UserRepositoryImpl();
    }
    
    @Bean
    public UserService userService(UserRepository userRepository) {
        return new UserService(userRepository);
    }
    
    @Bean
    public EmailService emailService() {
        EmailService emailService = new EmailService();
        emailService.setUserRepository(userRepository());
        return emailService;
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Application.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`}
                    </pre>
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
                  <CardTitle>Exercise 1: Implement Constructor Injection</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Create a Spring Boot application with the following components:
                      <ul className="list-disc pl-5 mt-1">
                        <li>A Product class with id, name, and price fields</li>
                        <li>A ProductRepository interface with findById and findAll methods</li>
                        <li>A ProductRepositoryImpl class that implements ProductRepository</li>
                        <li>A ProductService class that uses ProductRepository</li>
                        <li>A ProductController that exposes REST endpoints</li>
                      </ul>
                    </li>
                    <li>Implement constructor injection for all dependencies</li>
                    <li>Test your application by creating a few products and retrieving them</li>
                  </ol>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Compare Injection Types</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Create a Spring Boot application with the following services:
                      <ul className="list-disc pl-5 mt-1">
                        <li>UserService (using constructor injection)</li>
                        <li>EmailService (using setter injection)</li>
                        <li>NotificationService (using field injection)</li>
                      </ul>
                    </li>
                    <li>Implement unit tests for each service</li>
                    <li>Compare the ease of testing each service</li>
                    <li>Document the pros and cons of each injection type based on your experience</li>
                  </ol>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Resolve Dependency Conflicts</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Create a Spring Boot application with the following components:
                      <ul className="list-disc pl-5 mt-1">
                        <li>An interface PaymentProcessor</li>
                        <li>Two implementations: CreditCardProcessor and PayPalProcessor</li>
                        <li>A PaymentService that depends on PaymentProcessor</li>
                      </ul>
                    </li>
                    <li>Both implementations should be annotated with @Component</li>
                    <li>
                      Resolve the dependency conflict using:
                      <ul className="list-disc pl-5 mt-1">
                        <li>@Primary annotation on one implementation</li>
                        <li>@Qualifier annotation in PaymentService</li>
                        <li>@Profile annotation to activate different implementations based on profiles</li>
                      </ul>
                    </li>
                    <li>Test each approach to ensure it works correctly</li>
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
                        Spring Framework IoC Container
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-dependencies"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Dependencies and Configuration in Detail
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.spring-beans-and-dependency-injection"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Beans and Dependency Injection
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
                        href="https://www.baeldung.com/spring-dependency-injection"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Guide to Spring Dependency Injection
                      </a>
                    </li>
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
                        href="https://martinfowler.com/articles/injection.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Martin Fowler: Inversion of Control Containers and the Dependency Injection pattern
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
                        href="/modules/fundamentals/basic-understanding/core-principles"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Core Principles and Architecture
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
                        href="https://www.amazon.com/Dependency-Injection-Principles-Practices-Patterns/dp/161729473X/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Dependency Injection: Principles, Practices, and Patterns by Mark Seemann
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Clean Code by Robert C. Martin (Chapter on Dependency Injection)
                      </a>
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
          <Link href="/modules/fundamentals/basic-understanding/core-principles">← Core Principles</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/fundamentals/basic-understanding/spring-boot-starters">Next: Spring Boot Starters →</Link>
        </Button>
      </div>
    </div>
  )
}
