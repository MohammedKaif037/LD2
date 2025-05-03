import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function EmbeddedServers() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Embedded Servers</h1>
          <Badge>Module 1.5</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn about embedded servers in Spring Boot and how they simplify web application deployment
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
            <h2 className="text-2xl font-bold tracking-tight">What Are Embedded Servers?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                In traditional Java web applications, developers deploy WAR files to external application servers like Tomcat or JBoss.
                Spring Boot changes this model by supporting <strong>embedded servers</strong>, allowing applications to run as standalone JARs.
              </p>
              
              <p>Key features of embedded servers:</p>
              <ul>
                <li><strong>No need for external server setup</strong></li>
                <li><strong>Self-contained deployment units</strong></li>
                <li><strong>Faster development and testing cycles</strong></li>
                <li><strong>Consistent runtime environment</strong></li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Supported Embedded Servers</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot supports multiple embedded web containers out of the box:
              </p>
              
              <ol>
                <li>
                  <strong>Tomcat (Default):</strong> Widely used servlet container with robust performance.
                  <ul>
                    <li>Included when using <code>spring-boot-starter-web</code></li>
                    <li>Great for most enterprise use cases</li>
                  </ul>
                </li>
                
                <li>
                  <strong>Jetty:</strong> Lightweight and fast alternative.
                  <ul>
                    <li>Useful for testing and microservices</li>
                    <li>Better support for long-lived connections</li>
                  </ul>
                </li>
                
                <li>
                  <strong>Undertow:</strong> High-performance non-blocking web server.
                  <ul>
                    <li>Ideal for high-throughput applications</li>
                    <li>Built on NIO for better concurrency</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">How Embedded Servers Work</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot automatically configures an embedded server based on dependencies in your project:
              </p>
              
              <ol>
                <li>
                  <strong>Auto-Detection:</strong> The framework checks classpath for supported containers.
                </li>
                
                <li>
                  <strong>Auto-Configuration:</strong> Uses defaults unless overridden in <code>application.properties</code>.
                </li>
                
                <li>
                  <strong>Startup Process:</strong>
                  <ul>
                    <li>Spring Boot initializes the embedded container</li>
                    <li>Registers servlets, filters, listeners</li>
                    <li>Starts the server and deploys the application</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Configuring Embedded Server Properties</h2>
            <Card>
              <CardHeader>
                <CardTitle>Common Configuration Options</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Server configuration
server.port=8080
server.servlet.context-path=/api
server.tomcat.max-http-form-post-size=10MB

# Jetty-specific
server.jetty.max-http-uri-size=4KB

# SSL configuration
server.ssl.enabled=true
server.ssl.key-store=classpath:keystore.p12
server.ssl.key-store-password=secret`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Switching Embedded Servers</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>To change the embedded server, update your build file:</p>
              
              <h3>For Maven:</h3>
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

<!-- Add desired server -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>`}
              </pre>

              <h3>For Gradle:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`implementation('org.springframework.boot:spring-boot-starter-web') {
  exclude group: 'org.springframework.boot', module: 'spring-boot-starter-tomcat'
}

implementation 'org.springframework.boot:spring-boot-starter-jetty'`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Benefits of Embedded Servers</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Simplified Deployment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Applications are self-contained and can be run directly with <code>java -jar app.jar</code>.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Environment Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Eliminates discrepancies between development, testing, and production environments.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Easier CI/CD Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    No need to configure separate servers for continuous integration/deployment pipelines.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Rapid Development Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Faster startup times enable quicker iteration during development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Web Application</h2>
            <Card>
              <CardHeader>
                <CardTitle>Demo Controller</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@RestController
public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello from embedded server!";
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Changing the Port</h2>
            <Card>
              <CardHeader>
                <CardTitle>Using application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Change server port
server.port=9090

# Set context path
server.servlet.context-path=/v1`}
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
                  <CardTitle>Exercise 1: Switch to Jetty</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a new Spring Boot web application</li>
                    <li>Exclude Tomcat from the dependencies</li>
                    <li>Add Jetty as the embedded server</li>
                    <li>Run the application and verify it starts with Jetty</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Configure Undertow</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Set up a Spring Boot project with Undertow</li>
                    <li>Configure custom settings like buffer size and threads</li>
                    <li>Test performance under load using tools like JMeter or Apache Bench</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: SSL Setup</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Generate a self-signed certificate</li>
                    <li>Configure SSL in application.properties</li>
                    <li>Secure endpoints using HTTPS only</li>
                    <li>Redirect HTTP requests to HTTPS</li>
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
                        Spring Boot Embedded Server Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/spring-boot-embedded-server"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Embedded Server Guide
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
          <Link href="/modules/fundamentals/basic-understanding/spring-boot-starters">← Spring Boot Starters</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/fundamentals/configuration/annotations">Next: Annotation-based Configuration →</Link>
        </Button>
      </div>
    </div>
  )
              }
