import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SpringBootStarters() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Boot Starters & Embedded Servers</h1>
          <Badge>Module 1.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn about Spring Boot starters and embedded servers that simplify application development
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Spring Boot Starters</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot Starters are pre-configured dependency bundles that simplify Maven and Gradle configurations 
                for Spring applications. They embody the convention-over-configuration philosophy of Spring Boot by 
                providing opinionated setups for various functionalities.
              </p>
              
              <p>
                Each starter includes everything needed to get a specific functionality up and running quickly, including 
                auto-configuration settings, dependencies, and default configurations. This eliminates the need to search 
                for compatible library versions and configuration snippets.
              </p>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Types of Spring Boot Starters</h2>
            
            <Card>
              <CardHeader>
                <CardTitle>Core Starters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><code>spring-boot-starter</code>: Core starter with auto-configuration support, logging, and YAML support</li>
                  <li><code>spring-boot-starter-test</code>: Starter for testing Spring applications with JUnit, Hamcrest, and Mockito</li>
                  <li><code>spring-boot-starter-web</code>: Starter for building web applications with Spring MVC and embedded Tomcat</li>
                  <li><code>spring-boot-starter-data-jpa</code>: Starter for using Spring Data JPA with Hibernate</li>
                  <li><code>spring-boot-starter-security</code>: Starter for securing your application with Spring Security</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Database Starters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><code>spring-boot-starter-data-mongodb</code>: Starter for working with MongoDB</li>
                  <li><code>spring-boot-starter-data-redis</code>: Starter for working with Redis</li>
                  <li><code>spring-boot-starter-jdbc</code>: Starter for classic JDBC with connection pooling</li>
                  <li><code>spring-boot-starter-oracle</code>: Starter for Oracle database connectivity</li>
                  <li><code>spring-boot-starter-mysql</code>: Starter for MySQL database connectivity</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Other Common Starters</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li><code>spring-boot-starter-thymELF</code>: Starter for building MVC web applications with Thymeleaf templates</li>
                  <li><code>spring-boot-starter-mail</code>: Starter for sending emails with JavaMail and Spring Email</li>
                  <li><code>spring-boot-starter-validation</code>: Starter for Bean Validation with Hibernate Validator</li>
                  <li><code>spring-boot-starter-actuator</code>: Starter for monitoring and managing your application</li>
                  <li><code>spring-boot-starter-aop</code>: Starter for aspect-oriented programming with Spring AOP</li>
                </ul>
              </CardContent>
            </Card>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">How Starters Work</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot Starters work through two main mechanisms:
              </p>
              
              <h3>1. Dependency Management</h3>
              <p>
                Starters include all necessary runtime dependencies with carefully selected version numbers that are known 
                to work well together. This eliminates the need to manually specify version numbers in most cases.
              </p>
              
              <h3>2. Auto-Configuration</h3>
              <p>
                Starters provide auto-configuration classes that automatically set up Spring beans based on what's available 
                on the classpath. These configurations can be customized through properties files or annotations.
              </p>
              
              <h3>Starter Structure</h3>
              <p>
                A typical starter consists of:
              </p>
              <ul>
                <li>A <code>spring-boot-starter</code> module containing only dependencies</li>
                <li>An <code>autoconfigure</code> module containing the auto-configuration code</li>
                <li>Documentation explaining how to use the starter</li>
              </ul>
              
              <h3>Custom Starters</h3>
              <p>
                You can create your own starters for common patterns in your organization. Custom starters should follow 
                the naming convention <code>your-project-starter</code>.
              </p>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Embedded Servers in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot supports several embedded servers out of the box, allowing you to run your applications without 
                needing to deploy to a separate server. This simplifies development, testing, and deployment.
              </p>
              
              <h3>Supported Embedded Servers</h3>
              <ul>
                <li><strong>Tomcat:</strong> The default embedded server, widely used and well-supported</li>
                <li><strong>Jetty:</strong> Lightweight and efficient server suitable for high-concurrency scenarios</li>
                <li><strong>Undertow:</strong> High-performance web server that supports HTTP/2 and WebSockets</li>
                <li><strong>Netty:</strong> Asynchronous event-driven network application framework (used primarily for reactive applications)</li>
              </ul>
              
              <h3>Benefits of Embedded Servers</h3>
              <ul>
                <li>Simplified development workflow</li>
                <li>Consistent environment across development, testing, and production</li>
                <li>Easier to containerize applications (e.g., Docker)</li>
                <li>Eliminates server configuration complexity</li>
                <li>Enables microservices architecture patterns</li>
              </ul>
              
              <h3>Configuring Embedded Server Settings</h3>
              <p>
                You can configure embedded server settings in <code>application.properties</code> or <code>application.yml</code>:
              </p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`server.port=8081
server.servlet.context-path=/api
server.tomcat.max-http-form-post-size=10MB`}
              </pre>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Creating a Project with Starters</h2>
            <div className="prose dark:prose-invert max-w-none">
              <h3>Using Spring Initializr</h3>
              <p>
                To create a new project with Spring Boot Starters, you can use <a href="https://start.spring.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Spring Initializr</a>:
              </p>
              <ol>
                <li>Go to https://start.spring.io</li>
                <li>Select your project metadata (project type, language, Spring Boot version)</li>
                <li>Add dependencies (starters) like Web, Data JPA, Security, etc.</li>
                <li>Click "Generate" to download the project zip</li>
                <li>Extract and import into your IDE</li>
              </ol>
              
              <h3>Manual Configuration</h3>
              <p>If you prefer manual setup:</p>
              <ol>
                <li>Create a new Maven or Gradle project</li>
                <li>Add Spring Boot parent POM (for Maven) or plugin (for Gradle)</li>
                <li>Add required starters to your build file</li>
                <li>Create your main application class</li>
                <li>Implement your business logic</li>
              </ol>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Managing Dependencies with Starters</h2>
            <div className="prose dark:prose-invert max-w-none">
              <h3>Maven Example</h3>
              <p>Here's how you'd include starters in a Maven <code>pom.xml</code>:</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<dependencies>
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
  
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
  </dependency>
  
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
  </dependency>
  
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
  </dependency>
</dependencies>`}
              </pre>
              
              <h3>Gradle Example</h3>
              <p>And here's the equivalent in a Gradle <code>build.gradle</code>:</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-web'
  implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
  implementation 'org.springframework.boot:spring-boot-starter-thymeleaf'
  testImplementation 'org.springframework.boot:spring-boot-starter-test'
}`}
              </pre>
              
              <h3>Dependency Management</h3>
              <p>
                Spring Boot manages dependency versions through its parent POM (for Maven) or the Gradle plugin. This means 
                you typically don't need to specify version numbers for dependencies included in starters.
              </p>
            </div>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Using Starters</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Use Only What You Need</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Don't add unnecessary starters to your project as they bring in additional dependencies that may 
                    impact performance and increase security surface area.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Understand What You're Adding</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    When adding a starter, understand what dependencies it brings in and what auto-configuration it enables.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Keep Starters Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Regularly update your Spring Boot version to benefit from security patches, bug fixes, and new features.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Customize When Necessary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    While starters provide good defaults, customize configurations when needed to match your specific requirements.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Use Proper Scope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Set appropriate scopes for dependencies (compile, runtime, test) to optimize builds and deployments.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Document Your Choices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Document why specific starters were chosen to help future maintainers understand your architectural decisions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
        
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Project Setup with Starters</h2>
            <Card>
              <CardHeader>
                <CardTitle>Creating a Simple Web Application</CardTitle>
                <CardDescription>Example showing how to create a basic web app using Spring Boot Starters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Maven pom.xml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<project xmlns="http://maven.apache.org/POM/4.0.0" ...>
  <modelVersion>4.0.0</modelVersion>
  
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.1.5</version>
    <relativePath/> <!-- lookup parent from repository -->
  </parent>
  
  <groupId>com.example</groupId>
  <artifactId>demo-app</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  
  <properties>
    <java.version>17</java.version>
  </properties>
  
  <dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>
    
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
  </dependencies>
  
  <build>
    <plugins>
      <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
      </plugin>
    </plugins>
  </build>
</project>`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Main Application Class</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@SpringBootApplication
public class DemoApplication {
  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Simple Controller</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@RestController
public class HelloController {
  @GetMapping("/")
  public String hello() {
    return "Hello from Spring Boot!";
  }
}`}
                    </pre>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
                    <p className="text-sm">
                      This example shows how to create a simple web application using the spring-boot-starter-web and 
                      spring-boot-starter-thymeleaf starters. The application will start an embedded Tomcat server on port 8080.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Changing Embedded Server</h2>
            <Card>
              <CardHeader>
                <CardTitle>Switching from Tomcat to Jetty</CardTitle>
                <CardDescription>Example showing how to change the embedded server</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Maven Exclusion Example</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-web</artifactId>
  <exclusions>
    <exclusion>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-tomcat</artifactId>
    </exclusion>
  </exclusions>
</dependency>

<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Gradle Exclusion Example</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`configurations {
  implementation.exclude group: 'org.springframework.boot', module: 'spring-boot-starter-tomcat'
}

dependencies {
  implementation 'org.springframework.boot:spring-boot-starter-web'
  implementation 'org.springframework.boot:spring-boot-starter-jetty'
}`}
                    </pre>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
                    <p className="text-sm">
                      This example shows how to exclude the default Tomcat server and use Jetty instead. Similar approach can be used 
                      to switch to Undertow by using spring-boot-starter-undertow.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Customizing Server Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>Server Configuration Examples</CardTitle>
                <CardDescription>Various ways to customize embedded server settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">application.properties</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Server port
server.port=8081

# Context path
server.servlet.context-path=/myapp

# Session timeout (in seconds)
server.servlet.session.timeout=1800

# Tomcat-specific settings
server.tomcat.max-http-form-post-size=10MB

# Jetty-specific settings
server.jetty.max-http-form-post-size=10MB

# SSL configuration
server.ssl.enabled=true
server.ssl.key-store=classpath:keystore.p12
server.ssl.key-store-password=secret
server.ssl.key-store-type=PKCS12
server.ssl.key-alias=tomcat`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Java-based Configuration</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Component
public class ServerConfig implements WebServerFactoryCustomizer<ConfigurableWebServerFactory> {
  
  @Value("${custom.server.port}")
  private int customPort;
  
  @Override
  public void customize(ConfigurableWebServerFactory factory) {
    factory.setPort(customPort);
    factory.setAddress(InetAddress.getLoopbackAddress());
  }
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Tomcat Specific Configuration</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Component
public class TomcatConfig implements WebServerFactoryCustomizer<ConfigurableWebServerFactory> {
  
  @Override
  public void customize(ConfigurableWebServerFactory factory) {
    if (factory instanceof TomcatServletWebServerFactory) {
      TomcatServletWebServerFactory tomcatFactory = (TomcatServletWebServerFactory) factory;
      
      // Add a connector customizer
      tomcatFactory.addConnectorCustomizers(connector -> {
        connector.setAttribute("maxHttpFormPostSize", 10 * 1024 * 1024); // 10MB
      });
      
      // Add context customizers
      tomcatFactory.addContextCustomizers(context -> {
        context.setMaxHttpFormPostSize(10 * 1024 * 1024); // 10MB
      });
    }
  }
}`}
                    </pre>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md">
                    <p className="text-sm">
                      This example demonstrates multiple ways to customize the embedded server configuration, including 
                      property-based configuration and programmatic customization.
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
                  <CardTitle>Exercise 1: Create a Basic Web Application</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Use Spring Initializr to create a new project with:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Spring Web starter</li>
                        <li>Thymeleaf starter</li>
                        <li>Spring Boot DevTools</li>
                      </ul>
                    </li>
                    <li>Create a simple controller that returns a greeting message</li>
                    <li>Add a Thymeleaf template to display the greeting</li>
                    <li>Run the application and verify it works at http://localhost:8080</li>
                    <li>Change the server port to 8081 using application.properties</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Switch Embedded Server</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Take the application from Exercise 1 and modify it to use Jetty instead of Tomcat:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Exclude the Tomcat starter</li>
                        <li>Add the Jetty starter</li>
                      </ul>
                    </li>
                    <li>Verify the application still works after switching servers</li>
                    <li>Try the same exercise with Undertow</li>
                    <li>Compare the startup time between different servers</li>
                    <li>Research the differences between these servers and document your findings</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Customize Server Configuration</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot application with Web starter</li>
                    <li>Configure the following via application.properties:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Set server port to 9090</li>
                        <li>Set context path to /api</li>
                        <li>Enable SSL with a self-signed certificate</li>
                        <li>Set session timeout to 30 minutes</li>
                      </ul>
                    </li>
                    <li>Create a component to programmatically customize the server:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Set a custom error page for 404 errors</li>
                        <li>Configure maximum form post size</li>
                        <li>Register a custom filter</li>
                      </ul>
                    </li>
                    <li>Test all your configurations to ensure they work correctly</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 4: Build a Custom Starter</CardTitle>
                  <CardDescription>Challenge level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a custom starter for a fictional "Analytics Service"</li>
                    <li>The starter should:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Provide auto-configuration</li>
                        <li>Include sample analytics client</li>
                        <li>Have customizable properties</li>
                        <li>Provide starter documentation</li>
                      </ul>
                    </li>
                    <li>Create a test application that uses your custom starter</li>
                    <li>Document how other developers would use your starter</li>
                    <li>Package and publish your starter to a local Maven repository</li>
                    <li>Consider edge cases and how your starter handles them</li>
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
                        href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#dependency.management"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Dependency Management
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#web.embedded-container.configuration"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Configuring Web Server
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
                        Database Configuration
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
                        href="https://www.baeldung.com/spring-boot-starters"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Guide to Spring Boot Starters
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.vogella.com/tutorials/SpringBoot/article.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Vogella: Comprehensive Spring Boot Tutorial
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://reflectoring.io/tutorial-spring-boot/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Spring Boot Tutorial
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
                        href="https://www.amazon.com/Spring-Boot-Cookbook-Solutions-Configuration/dp/178778007X/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Boot Cookbook by Alex Antonov
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.amazon.com/Pro-Spring-Boot-2-Iulian/dp/1484241194/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Pro Spring Boot 2 by Iulian Rotaru
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
                        Core Principles
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/fundamentals/basic-understanding/dependency-injection"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Dependency Injection
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
          <Link href="/modules/fundamentals/basic-understanding/dependency-injection">← Previous: Dependency Injection</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/fundamentals/configuration/annotations">Next: Annotation-based Configuration →</Link>
        </Button>
      </div>
    </div>
  )
}