import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ApplicationProperties() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Application Properties</h1>
          <Badge>Module 5.5</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to configure Spring Boot applications using application.properties and application.yml
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Application Properties</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                In Spring Boot, application properties provide a flexible way to externalize configuration so you can
                work with the same application code in different environments.
              </p>
              
              <p>Key features of application properties:</p>
              <ul>
                <li><strong>Environment-specific configurations</strong></li>
                <li><strong>Simple key-value format</strong></li>
                <li><strong>Support for YAML and properties formats</strong></li>
                <li><strong>Built-in support for common frameworks and libraries</strong></li>
              </ul>
              
              <p>
                Properties files are typically placed in <code>src/main/resources</code> and can be accessed throughout
                your application using the <code>@Value</code> annotation or <code>Environment</code> object.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Properties vs YAML Format</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>.properties Format</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Simple key=value pairs
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Pros: Simple, easy to read for small configurations
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Cons: Repetitive keys, hard to manage complex structures
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>.yml Format</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`server:
  port: 8080
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: secret`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Pros: Hierarchical structure, easier to manage large configurations
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Cons: Sensitive to indentation, requires YAML knowledge
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Commonly Used Properties</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot provides hundreds of configurable properties across different domains. Here are some of the
                most commonly used ones:
              </p>
              
              <h3>Server Configuration:</h3>
              <ul>
                <li><code>server.port</code> - Sets the server port</li>
                <li><code>server.servlet.context-path</code> - Sets the base path for the application</li>
                <li><code>server.tomcat.max-http-form-post-size</code> - Sets maximum form size</li>
              </ul>
              
              <h3>Database Configuration:</h3>
              <ul>
                <li><code>spring.datasource.url</code> - JDBC URL of the database</li>
                <li><code>spring.datasource.username</code> - Database username</li>
                <li><code>spring.datasource.password</code> - Database password</li>
                <li><code>spring.jpa.hibernate.ddl-auto</code> - Hibernate schema update strategy</li>
              </ul>
              
              <h3>Logging Configuration:</h3>
              <ul>
                <li><code>logging.level.root</code> - Root logging level</li>
                <li><code>logging.file.name</code> - File name for logs</li>
                <li><code>logging.pattern.console</code> - Pattern for console output</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Accessing Properties in Code</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                There are several ways to access property values within your Spring Boot application:
              </p>
              
              <ol>
                <li>
                  <strong>@Value Annotation:</strong> Injects a specific property value into a field.
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@Component
public class MyComponent {
    @Value("${server.port}")
    private int serverPort;
}`}
                  </pre>
                </li>
                
                <li>
                  <strong>@ConfigurationProperties:</strong> Binds a group of related properties to a Java bean.
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@Component
@ConfigurationProperties("spring.datasource")
public class DataSourceProperties {
    private String url;
    private String username;
    private String password;
    
    // Getters and setters
}`}
                  </pre>
                </li>
                
                <li>
                  <strong>Environment Object:</strong> Programmatic access to all properties.
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@Service
public class ConfigService {
    private final Environment env;

    public ConfigService(Environment env) {
        this.env = env;
    }

    public String getDbUrl() {
        return env.getProperty("spring.datasource.url");
    }
}`}
                  </pre>
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Profile-Specific Properties</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                You can create separate property files for different environments by adding a profile identifier:
              </p>
              
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`application.properties
application-dev.properties
application-prod.properties
application-test.properties`}
              </pre>
              
              <p>To activate a profile:</p>
              <ul>
                <li>In code: <code>spring.profiles.active=dev</code></li>
                <li>As JVM argument: <code>-Dspring.profiles.active=prod</code></li>
                <li>As environment variable: <code>SPRING_PROFILES_ACTIVE=test</code></li>
              </ul>
              
              <p>
                When running the application, Spring will load both the general <code>application.properties</code> and
                the active profile-specific file, with profile-specific values taking precedence.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Property Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Group related properties together</li>
                    <li>Use hierarchical structure in YAML files</li>
                    <li>Keep sensitive data out of version control</li>
                    <li>Avoid duplicating configuration across profiles</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never commit production secrets to repositories</li>
                    <li>Use environment variables or cloud secrets manager for sensitive data</li>
                    <li>Consider encrypting sensitive properties</li>
                    <li>Use Spring Cloud Config for centralized configuration management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Document required properties and their expected values</li>
                    <li>Create test configurations for unit and integration tests</li>
                    <li>Validate property values at startup when necessary</li>
                    <li>Provide default values where appropriate</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Property Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Server configuration
server.port=9090
server.servlet.context-path=/api/v1

# Logging configuration
logging.level.root=INFO
logging.file.name=logs/app.log
logging.pattern.console=%d{yyyy-MM-dd HH:mm:ss} - %msg%n

# Custom property
app.title=My Awesome App
app.description=A sample Spring Boot application`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using @Value Annotation</h2>
            <Card>
              <CardHeader>
                <CardTitle>Injecting Property Values</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">application.properties</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Application title
app.title=My Awesome App`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">AppInfo.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Component
public class AppInfo {
    @Value("/${app.title}")
    private String title;
    
    @Value("/${app.description:Default Description}")
    private String description;
    
    public String getInfo() {
        return title + ": " + description;
    }
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using @ConfigurationProperties</h2>
            <Card>
              <CardHeader>
                <CardTitle>Binding Complex Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">application.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`app:
  info:
    title: My Awesome App
    description: A sample Spring Boot application
    version: 1.0.0`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">AppInfoProperties.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Component
@ConfigurationProperties("app.info")
public class AppInfoProperties {
    private String title;
    private String description;
    private String version;
    
    // Getters and setters
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Usage in Service</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Service
public class InfoService {
    private final AppInfoProperties appInfo;

    public InfoService(AppInfoProperties appInfo) {
        this.appInfo = appInfo;
    }

    public String getAppDetails() {
        return String.format("%s v%s: %s", 
            appInfo.getTitle(), 
            appInfo.getVersion(), 
            appInfo.getDescription());
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
                  <CardTitle>Exercise 1: Configure a Spring Boot Application</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a new Spring Boot project</li>
                    <li>Add web and data JPA dependencies</li>
                    <li>Configure a MySQL database connection using application.properties</li>
                    <li>Change the server port and context path</li>
                    <li>Set custom logging levels and patterns</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Use @Value and @ConfigurationProperties</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service that reads multiple application properties</li>
                    <li>Use @Value to inject individual properties</li>
                    <li>Use @ConfigurationProperties to bind a group of related properties</li>
                    <li>Create an endpoint that displays the configured values</li>
                    <li>Test your implementation by changing property values</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Implement Profile-Specific Configuration</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create three profile-specific property files: dev, test, prod</li>
                    <li>Define different database connections for each profile</li>
                    <li>Implement a service that returns the current configuration</li>
                    <li>Test switching between profiles using different methods</li>
                    <li>Verify that profile-specific properties override general settings</li>
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
                        href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data.sql.datasource.configuration"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Externalized Configuration Docs
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
                        @Value Annotation API Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-boot/docs/current/javadoc-api/org/springframework/boot/context/properties/ConfigurationProperties.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        @ConfigurationProperties API Docs
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
                        href="https://www.baeldung.com/spring-boot-external-config"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Externalized Configuration in Spring Boot
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-boot-configuration/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Spring Boot Configuration Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.javatpoint.com/spring-boot-application-properties"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        JavaTPoint: Application Properties Tutorial
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
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/modules/fundamentals/configuration/project-structure">← Project Structure</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/fundamentals/configuration/annotations">Next: Annotation-based Configuration →</Link>
        </Button>
      </div>
    </div>
  )
}
