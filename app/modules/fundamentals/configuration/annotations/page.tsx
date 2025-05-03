import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ExternalLink } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function AnnotationConfiguration() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Annotation-based Configuration</h1>
          <Badge>Module 5.6</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to configure Spring applications using annotations instead of XML configuration files
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Annotations</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Annotation-based configuration is one of the core features of modern Spring development. It eliminates
                the need for verbose XML configuration files by allowing developers to configure beans and their
                dependencies directly in Java code.
              </p>
              
              <p>Key benefits of annotation-based configuration:</p>
              <ul>
                <li><strong>Conciseness:</strong> Reduces boilerplate configuration</li>
                <li><strong>Readability:</strong> Keeps configuration close to the actual code</li>
                <li><strong>Maintainability:</strong> Easier to update and manage dependencies</li>
                <li><strong>Type safety:</strong> Compile-time checks for configuration errors</li>
              </ul>
              
              <p>
                Spring provides several annotations that are commonly used for configuration, which we will explore in
                detail below.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">@Component and Stereotype Annotations</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The <code>@Component</code> annotation marks a class as a Spring component, making it eligible for
                component scanning and automatic bean registration.
              </p>
              
              <p>There are specialized stereotype annotations for specific layers:</p>
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Annotation</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@Component</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Generic component for any Spring-managed component</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@Service</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Marks classes that contain business logic</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@Repository</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Specializes @Component for persistence layer, adds exception translation</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@Controller</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Marks controller classes in Spring MVC, typically returning view names</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@RestController</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Combines @Controller and @ResponseBody, used for RESTful web services</td>
                  </tr>
                </tbody>
              </table>
              
              <p>Example usage:</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class UserService {
    // Business logic here
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">@Autowired and Dependency Injection</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The <code>@Autowired</code> annotation is used for automatic dependency injection. It can be used on:
              </p>
              
              <ol>
                <li>Constructors</li>
                <li>Setter methods</li>
                <li>Fields</li>
                <li>Methods (typically configuration methods)</li>
              </ol>
              
              <h3>Constructor Injection (Preferred):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class OrderService {
    private final PaymentProcessor paymentProcessor;

    @Autowired
    public OrderService(PaymentProcessor paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
}`}
              </pre>
              
              <h3>Setter Injection:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class NotificationService {
    private EmailService emailService;

    @Autowired
    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }
}`}
              </pre>
              
              <h3>Field Injection (Less Recommended):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class CartService {
    @Autowired
    private InventoryService inventoryService;
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">@Configuration and @Bean</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                For more fine-grained control over bean creation and configuration, Spring provides the
                <code>@Configuration</code> and <code>@Bean</code> annotations.
              </p>
              
              <h3>@Configuration:</h3>
              <p>Used on classes to indicate that they contain bean definition methods.</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Configuration
public class AppConfig {
    // Bean definitions go here
}`}
              </pre>
              
              <h3>@Bean:</h3>
              <p>Used on methods to define individual beans within a @Configuration class.</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Configuration
public class AppConfig {
    @Bean
    public DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(H2)
            .build();
    }

    @Bean
    public JdbcTemplate jdbcTemplate(DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }
}`}
              </pre>
              
              <p>
                When using <code>@Bean</code>, Spring ensures that only one instance of the bean is created per container
                (unless a different scope is specified).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">@Value and Property Injection</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The <code>@Value</code> annotation injects values into fields or methods from properties files or system
                environment variables.
              </p>
              
              <h3>Injecting Simple Values:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class AppInfoService {
    @Value("${app.title}")
    private String appTitle;

    @Value("${app.version}")
    private String version;
}`}
              </pre>
              
              <h3>Injecting Default Values:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class FeatureToggleService {
    @Value("${feature.new-ui:false}")
    private boolean newUIEnabled;
}`}
              </pre>
              
              <h3>Injecting System Environment Variables:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class SystemInfoService {
    @Value("${JAVA_HOME}")
    private String javaHome;
}`}
              </pre>
              
              <h3>Injecting Properties into Methods:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class ConfigService {
    private String adminEmail;

    @Value("${admin.email}")
    public void setAdminEmail(String adminEmail) {
        this.adminEmail = adminEmail;
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Annotation-based Configuration</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Organizing Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use stereotype annotations (@Service, @Repository, etc.) consistently</li>
                    <li>Group related configuration in dedicated @Configuration classes</li>
                    <li>Keep business logic separate from configuration concerns</li>
                    <li>Avoid scattering configuration across multiple classes unnecessarily</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Dependency Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Prefer constructor injection for required dependencies</li>
                    <li>Use setter injection for optional dependencies</li>
                    <li>Avoid field injection in production code where possible</li>
                    <li>Use @Primary or @Qualifier when multiple beans of the same type exist</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Make dependencies injectable for easier testing</li>
                    <li>Use mocks/stubs in unit tests to isolate components</li>
                    <li>Avoid hardcoding values; use @Value for externalized configuration</li>
                    <li>Use @Mock and @InjectMocks from Mockito for testing annotated classes</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance and Maintainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Be mindful of component scan performance</li>
                    <li>Use explicit bean definitions for complex configurations</li>
                    <li>Document your configuration classes and methods</li>
                    <li>Refactor configuration as needed to improve readability</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Component Scanning</h2>
            <Card>
              <CardHeader>
                <CardTitle>Enabling Component Scanning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">AppConfig.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Configuration
@ComponentScan(basePackages = "com.example.app")
public class AppConfig {
    // Configuration details
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">UserService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class UserService {
    public String getWelcomeMessage() {
        return "Welcome to our application!";
    }
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using @Configuration and @Bean</h2>
            <Card>
              <CardHeader>
                <CardTitle>Creating Beans Programmatically</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">AppConfig.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Configuration
public class AppConfig {
    @Bean
    public DataSource dataSource() {
        return DataSourceBuilder.create()
            .url("jdbc:h2:mem:testdb")
            .username("sa")
            .password("")
            .build();
    }

    @Bean
    public PlatformTransactionManager transactionManager(DataSource dataSource) {
        return new DataSourceTransactionManager(dataSource);
    }
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Usage in Service</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class DatabaseService {
    private final DataSource dataSource;

    @Autowired
    public DatabaseService(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    public void connect() {
        try (Connection conn = dataSource.getConnection()) {
            // Use connection
        } catch (SQLException e) {
            // Handle error
        }
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
                  <CardTitle>Exercise 1: Create Annotated Components</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot application with the following packages:
                      <ul className="list-disc pl-5 mt-1">
                        <li>com.example.app.model</li>
                        <li>com.example.app.repository</li>
                        <li>com.example.app.service</li>
                        <li>com.example.app.controller</li>
                      </ul>
                    </li>
                    <li>Implement a simple data model (e.g., Product, User)</li>
                    <li>Create repository interfaces using @Repository</li>
                    <li>Implement service classes using @Service</li>
                    <li>Create REST controllers using @RestController</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Configure Beans Using @Configuration</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a @Configuration class to define beans programmatically</li>
                    <li>Add beans for a custom data source, transaction manager, and template</li>
                    <li>Inject these beans into your service layer</li>
                    <li>Test that your custom configuration works correctly</li>
                    <li>Compare with auto-configured beans from Spring Boot starters</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Inject Properties Using @Value</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create an application.properties file with various settings</li>
                    <li>Inject these properties into your service classes using @Value</li>
                    <li>Add some properties with default values</li>
                    <li>Inject system environment variables</li>
                    <li>Test that all property injections work correctly in different environments</li>
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
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        @Configuration API Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/annotation/Autowired.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        @Autowired API Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/annotation/Value.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        @Value API Docs
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
                        href="https://www.baeldung.com/spring-component-annotation"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: @Component and Stereotype Annotations
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/spring-bean-annotations"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Bean Annotations
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-boot-annotations/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Essential Spring Boot Annotations
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
                        href="https://www.amazon.com/Spring-Action-Craig-Walls/dp/1617294942"
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
                        href="https://www.amazon.com/Learn-Spring-Boot-Java-Applications/dp/1801070084"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Learn Spring Boot by Greg L. Turnquist
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Spring-Boot-Cookbook-developing-production-grade-applications/dp/1803238338"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Boot Cookbook by Alex Antonov
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
                        href="/modules/fundamentals/configuration/project-structure"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Project Structure
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/fundamentals/configuration/application-properties"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Application Properties
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/fundamentals/configuration/externalized"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Externalized Configuration
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
          <Link href="/modules/fundamentals/configuration/application-properties">← Application Properties</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/fundamentals/configuration/profiles">Next: Profile Management →</Link>
        </Button>
      </div>
    </div>
  );
}
