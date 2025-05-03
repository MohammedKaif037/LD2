import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectStructure() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Project Structure</h1>
          <Badge>Module 5.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn about standard project structure conventions in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">Standard Project Layout</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot follows Maven and Gradle conventions for organizing source files and resources.
                Understanding this structure helps maintain consistency across projects.
              </p>

              <h3>Main Directory Structure:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`src/
├── main/
│   ├── java/
│   │   └── com.example.demo/
│   │       ├── DemoApplication.java
│   │       ├── controller/
│   │       ├── service/
│   │       ├── repository/
│   │       └── model/
│   │
│   └── resources/
│       ├── application.properties
│       ├── static/
│       ├── templates/
│       └── data.sql
│
└── test/
    ├── java/
    │   └── com.example.demo/
    │       ├── DemoApplicationTests.java
    │       └── controller/
    └── resources/
        └── test.properties`}
              </pre>

              <h3>Key Principles:</h3>
              <ul>
                <li><strong>Convention over configuration</strong>: Default locations simplify setup</li>
                <li><strong>Layered architecture</strong>: Separation of concerns (MVC pattern)</li>
                <li><strong>Test organization</strong>: Mirrors main code structure</li>
                <li><strong>Resource management</strong>: Environment-specific configurations</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Source Code Organization</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The source code should follow a logical package structure that reflects business capabilities.
              </p>

              <h3>Recommended Package Structure:</h3>
              <ul>
                <li>
                  <strong>com.example.demo</strong> - Root package
                  <ul>
                    <li><code>DemoApplication.java</code> - Main class</li>
                  </ul>
                </li>
                <li>
                  <strong>controller</strong> - REST/Web controllers
                  <ul>
                    <li>Handles HTTP requests/responses</li>
                  </ul>
                </li>
                <li>
                  <strong>service</strong> - Business logic
                  <ul>
                    <li>Contains @Service components</li>
                  </ul>
                </li>
                <li>
                  <strong>repository</strong> - Data access layer
                  <ul>
                    <li>Interfaces extending Spring Data repositories</li>
                  </ul>
                </li>
                <li>
                  <strong>model</strong> - Domain entities
                  <ul>
                    <li>POJOs representing business objects</li>
                  </ul>
                </li>
                <li>
                  <strong>dto</strong> - Data Transfer Objects
                  <ul>
                    <li>Used for API requests/responses</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Resources Folder</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The resources directory contains non-code assets used by the application.
              </p>

              <h3>Common Resource Files:</h3>
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Directory/File</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>application.properties</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Main configuration file</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>static/</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Static web resources (CSS, JS, images)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>templates/</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">HTML templates (Thymeleaf, Freemarker)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>data.sql</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Schema and data initialization</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>schema.sql</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Database schema creation</td>
                  </tr>
                </tbody>
              </table>

              <h3>Best Practices:</h3>
              <ul>
                <li>Use <code>application-{profile}.properties</code> for environment-specific settings</li>
                <li>Keep sensitive data out of version control using <code>.gitignore</code></li>
                <li>Organize large resource sets into subdirectories</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Test Organization</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Test code should mirror the structure of production code for easier navigation.
              </p>

              <h3>Example Test Structure:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`test/
├── java/
│   └── com.example.demo/
│       ├── DemoApplicationTests.java
│       ├── controller/
│       │   └── UserControllerTest.java
│       ├── service/
│       │   └── UserServiceTest.java
│       └── repository/
│           └── UserRepositoryTest.java
└── resources/
    └── test.properties`}
              </pre>

              <h3>Testing Best Practices:</h3>
              <ul>
                <li>Place unit tests close to the tested classes</li>
                <li>Use <code>@DataJpaTest</code>, <code>@WebMvcTest</code> for focused integration tests</li>
                <li>Store test resources in <code>src/test/resources</code></li>
                <li>Use separate configuration files for testing</li>
              </ul>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Project Structure Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>Maven Project Layout</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`my-spring-boot-app/
├── pom.xml
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com.example.demo/
│   │   │       ├── DemoApplication.java
│   │   │       ├── controller/
│   │   │       │   └── HelloController.java
│   │   │       ├── service/
│   │   │       │   └── HelloService.java
│   │   │       ├── repository/
│   │   │       │   └── HelloRepository.java
│   │   │       └── model/
│   │   │           └── HelloMessage.java
│   │   └── resources/
│   │       ├── application.properties
│   │       └── data.sql
│   └── test/
│       ├── java/
│       │   └── com.example.demo/
│       │       ├── DemoApplicationTests.java
│       │       └── controller/
│       │           └── HelloControllerTest.java
│       └── resources/
│           └── test.properties
└── README.md`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Initializr Setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>Creating a New Project</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium mb-2">Using Spring Initializr:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Visit https://start.spring.io/

Group: com.example
Artifact: demo
Dependencies: Spring Web, Spring Data JPA, Thymeleaf, H2 Database, Spring Boot DevTools`}
                    </pre>
                  </div>

                  <div>
                    <p className="font-medium mb-2">Generated Project Structure:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`demo/
├── mvnw
├── mvnw.cmd
├── pom.xml
├── README.txt
└── src/
    ├── main/
    │   ├── java/
    │   │   └── com.example.demo/
    │   │       ├── DemoApplication.java
    │   │       └── controller/
    │   │       └── service/
    │   │       └── repository/
    │   │       └── model/
    │   └── resources/
    │       ├── application.properties
    │       ├── static/
    │       ├── templates/
    │       └── data.sql
    └── test/
        └── java/
            └── com.example.demo/
                └── DemoApplicationTests.java`}
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
                  <CardTitle>Exercise 1: Create Standard Structure</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a new Spring Boot project using Spring Initializr</li>
                    <li>Add appropriate packages for controller, service, repository, and model layers</li>
                    <li>Implement a simple Hello World endpoint</li>
                    <li>Verify that the structure matches Spring Boot conventions</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Add Resource Files</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create an HTML template using Thymeleaf</li>
                    <li>Add CSS and JavaScript files to the static directory</li>
                    <li>Create a data.sql file to initialize the database</li>
                    <li>Configure application properties for development and testing</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Organize Tests</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create unit tests for all components</li>
                    <li>Set up integration tests using @WebMvcTest and @DataJpaTest</li>
                    <li>Organize test classes to mirror production code structure</li>
                    <li>Add test resources for different environments</li>
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
                        Spring Boot Project Structure Docs
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
                        Spring Boot Getting Started Guide
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
          <Link href="/modules/fundamentals/configuration/application-properties">Next: Application Properties →</Link>
        </Button>
      </div>
    </div>
  )
}
