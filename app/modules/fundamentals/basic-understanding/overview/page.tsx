import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Code, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SpringBootOverview() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Boot Overview</h1>
          <Badge>Module 1.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn what Spring Boot is, its benefits, and how it simplifies Spring application development
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
            <h2 className="text-2xl font-bold tracking-tight">What is Spring Boot?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot is an extension of the Spring Framework that simplifies the process of building
                production-ready applications. It takes an opinionated view of the Spring platform and third-party
                libraries, allowing you to get started with minimum fuss.
              </p>
              <p>
                Spring Boot eliminates the need for complex XML configurations and provides a way to create standalone
                Spring applications that "just run". It follows the "convention over configuration" principle, which
                means it provides reasonable defaults rather than requiring you to make decisions about every little
                thing.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Key Features of Spring Boot</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Opinionated Defaults</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Spring Boot provides sensible defaults for application configuration, reducing the need for
                    boilerplate code and configuration.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Standalone Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Spring Boot creates standalone applications that include an embedded server, eliminating the need to
                    deploy WAR files.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Auto-Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Spring Boot automatically configures your application based on the dependencies you've added to your
                    project.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Spring Boot Starters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Starter dependencies simplify your build configuration by bundling commonly used dependencies
                    together.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Production-Ready Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Spring Boot includes built-in features for metrics, health checks, and externalized configuration.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>No Code Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Spring Boot doesn't generate code and doesn't require XML configuration, making it easier to
                    understand and customize.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot vs. Traditional Spring</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left">Feature</th>
                    <th className="py-2 px-4 text-left">Traditional Spring</th>
                    <th className="py-2 px-4 text-left">Spring Boot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Configuration</td>
                    <td className="py-2 px-4">Requires extensive XML configuration or Java-based configuration</td>
                    <td className="py-2 px-4">Minimal configuration with sensible defaults and auto-configuration</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Deployment</td>
                    <td className="py-2 px-4">Typically deployed as WAR files in external application servers</td>
                    <td className="py-2 px-4">Can be deployed as standalone JAR files with embedded servers</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Dependency Management</td>
                    <td className="py-2 px-4">Manual dependency management and version compatibility checks</td>
                    <td className="py-2 px-4">Simplified with starter dependencies and version management</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Production Readiness</td>
                    <td className="py-2 px-4">
                      Requires additional setup for features like monitoring and health checks
                    </td>
                    <td className="py-2 px-4">Includes production-ready features out of the box (Actuator)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-medium">Development Speed</td>
                    <td className="py-2 px-4">More time spent on configuration and setup</td>
                    <td className="py-2 px-4">Faster development with less boilerplate and configuration</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Architecture</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot follows a layered architecture that builds on top of the Spring Framework. Here are the key
                components:
              </p>
              <ul>
                <li>
                  <strong>Spring Boot Auto-Configuration:</strong> Automatically configures your Spring application
                  based on the dependencies on the classpath.
                </li>
                <li>
                  <strong>Spring Boot Starters:</strong> Dependency descriptors that simplify your build configuration.
                </li>
                <li>
                  <strong>Spring Boot CLI:</strong> Command-line tool for quickly prototyping Spring applications.
                </li>
                <li>
                  <strong>Spring Boot Actuator:</strong> Provides production-ready features to help you monitor and
                  manage your application.
                </li>
                <li>
                  <strong>Embedded Servers:</strong> Tomcat, Jetty, or Undertow servers that are embedded in your
                  application.
                </li>
              </ul>
              <p>
                Spring Boot applications typically follow the standard Spring MVC architecture with controllers,
                services, and repositories, but with much less configuration required.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">When to Use Spring Boot</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Microservices Development</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Spring Boot is ideal for microservices development due to its lightweight nature, embedded servers,
                    and production-ready features. It allows you to create small, focused services that can be deployed
                    independently.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Rapid Application Development</AccordionTrigger>
                <AccordionContent>
                  <p>
                    When you need to quickly develop and deploy applications, Spring Boot's convention over
                    configuration approach and starter dependencies significantly reduce development time.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Cloud-Native Applications</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Spring Boot works well with cloud platforms and containerization technologies like Docker and
                    Kubernetes. Its lightweight nature and externalized configuration make it suitable for cloud
                    deployments.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>RESTful API Development</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Spring Boot simplifies the creation of RESTful APIs with its built-in support for Spring MVC and
                    various data access technologies. The spring-boot-starter-web dependency provides everything you
                    need to create RESTful services.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Enterprise Applications</AccordionTrigger>
                <AccordionContent>
                  <p>
                    For enterprise applications, Spring Boot provides integration with various enterprise technologies
                    and services, including security, messaging, caching, and more, while reducing the configuration
                    complexity.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Spring Boot Application</h2>
            <Card>
              <CardHeader>
                <CardTitle>Hello World Application</CardTitle>
                <CardDescription>A simple Spring Boot application that returns "Hello, World!"</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">pom.xml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.2.0</version>
</parent>

<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">HelloWorldApplication.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HelloWorldApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloWorldApplication.class, args);
    }

    @GetMapping("/")
    public String hello() {
        return "Hello, World!";
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Running the Application</p>
                    <pre className="bg-black text-white p-4 rounded-md overflow-x-auto text-sm">
                      {`$ mvn spring-boot:run`}
                    </pre>
                    <p className="text-sm mt-2">
                      Access the application at <code>http://localhost:8080</code>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Auto-Configuration Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Database Auto-Configuration</CardTitle>
                <CardDescription>
                  Spring Boot automatically configures a database connection based on dependencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">pom.xml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">application.properties</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# No database configuration needed!
# Spring Boot automatically configures an H2 in-memory database

# Optional properties for customization
spring.datasource.url=jdbc:h2:mem:testdb
spring.h2.console.enabled=true`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Entity Class</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Customer {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    
    // getters and setters
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Repository Interface</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`import org.springframework.data.repository.CrudRepository;

public interface CustomerRepository extends CrudRepository<Customer, Long> {
    // No implementation needed!
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
                  <CardTitle>Exercise 1: Create a Spring Boot Application</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Go to{" "}
                      <a href="https://start.spring.io" className="text-primary underline">
                        Spring Initializr
                      </a>
                    </li>
                    <li>
                      Create a new Spring Boot project with the following settings:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Project: Maven</li>
                        <li>Language: Java</li>
                        <li>Spring Boot: 3.2.0</li>
                        <li>Dependencies: Spring Web</li>
                      </ul>
                    </li>
                    <li>Download and extract the project</li>
                    <li>Create a simple REST controller that returns "Hello, Spring Boot!"</li>
                    <li>Run the application and access it in your browser</li>
                  </ol>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Explore Auto-Configuration</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Create a Spring Boot application with the following dependencies:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Spring Web</li>
                        <li>Spring Data JPA</li>
                        <li>H2 Database</li>
                      </ul>
                    </li>
                    <li>
                      Add the following property to application.properties:
                      <pre className="bg-muted p-2 rounded-md mt-1 text-sm">{`debug=true`}</pre>
                    </li>
                    <li>Run the application and examine the console output</li>
                    <li>Identify which auto-configurations were applied and which were not</li>
                    <li>Create a simple entity and repository to test the database auto-configuration</li>
                  </ol>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Compare with Traditional Spring</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Create a traditional Spring MVC application (without Spring Boot) that:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Has a simple REST controller</li>
                        <li>Connects to an H2 database</li>
                        <li>Uses Spring Data JPA</li>
                      </ul>
                    </li>
                    <li>Create an equivalent Spring Boot application</li>
                    <li>Compare the amount of configuration required for each</li>
                    <li>
                      Document the differences in:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Lines of configuration code</li>
                        <li>Deployment process</li>
                        <li>Development time</li>
                      </ul>
                    </li>
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
                        href="https://docs.spring.io/spring-boot/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Reference Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-boot/docs/current/api/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot API Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://spring.io/guides/gs/spring-boot/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Getting Started with Spring Boot
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Books & Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.amazon.com/Spring-Boot-Action-Craig-Walls/dp/1617296570/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Boot in Action by Craig Walls
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.baeldung.com/spring-boot"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code className="h-4 w-4" />
                        Baeldung Spring Boot Tutorials
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udemy.com/course/spring-boot-and-spring-framework-tutorial-for-beginners/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Course by in28Minutes
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
                        href="/modules/fundamentals/basic-understanding/core-principles"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Core Principles and Architecture
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/fundamentals/basic-understanding/dependency-injection"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Dependency Injection and IoC
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/fundamentals/basic-understanding/starters"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Boot Starters
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tools & Utilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://start.spring.io"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Initializr
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.jetbrains.com/idea/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        IntelliJ IDEA (with Spring Boot support)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://marketplace.visualstudio.com/items?itemName=vmware.vscode-spring-boot"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Extension for VS Code
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
          <Link href="/modules/fundamentals">← Back to Fundamentals</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/fundamentals/basic-understanding/core-principles">Next: Core Principles →</Link>
        </Button>
      </div>
    </div>
  )
}
