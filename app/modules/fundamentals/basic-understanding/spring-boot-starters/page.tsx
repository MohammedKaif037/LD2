import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SpringBootStarters() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Boot Starters</h1>
          <Badge>Module 1.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn about Spring Boot Starters and how they simplify dependency management
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
            <h2 className="text-2xl font-bold tracking-tight">What are Spring Boot Starters?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot Starters are a set of convenient dependency descriptors that you can include in your
                application. They greatly simplify the Maven/Gradle configuration by providing a curated set of
                dependencies that work well together, eliminating the need to search for compatible libraries and their
                versions.
              </p>
              <p>
                For example, if you want to build a web application, you can include the{" "}
                <code>spring-boot-starter-web</code> dependency, which brings in everything needed for building web
                applications, including Spring MVC, embedded Tomcat, and Jackson for JSON processing.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Key Benefits of Spring Boot Starters</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Simplified Dependency Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Starters eliminate the need to manually manage dependencies and their versions. They provide a
                    curated set of dependencies that work well together.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Rapid Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Starters enable rapid application development by providing all the necessary dependencies for a
                    specific functionality with a single dependency declaration.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Spring Boot Starters</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>spring-boot-starter-web</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    For building web applications, including RESTful applications using Spring MVC. Uses Tomcat as the
                    default embedded container.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>spring-boot-starter-data-jpa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    For using Spring Data JPA with Hibernate. Includes Spring Data JPA, Spring ORM, and Hibernate
                    dependencies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>spring-boot-starter-security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    For using Spring Security, providing authentication and authorization support for your application.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>spring-boot-starter-test</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>For testing Spring Boot applications with libraries including JUnit, Hamcrest, and Mockito.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">How to Use Spring Boot Starters</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Using Spring Boot Starters is straightforward. You simply need to include the appropriate starter
                dependency in your project's build file (pom.xml for Maven or build.gradle for Gradle).
              </p>
              <h3>Maven Example</h3>
              <pre>
                {`<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
</dependencies>`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Using Starters</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Only Include What You Need</AccordionTrigger>
                <AccordionContent>
                  <p>
                    While starters make it easy to include dependencies, it's important to only include the starters you
                    actually need. Including unnecessary starters can bloat your application.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Use the Spring Initializr</AccordionTrigger>
                <AccordionContent>
                  <p>
                    The Spring Initializr (start.spring.io) is a great tool for creating new Spring Boot projects with
                    the starters you need. It provides a web-based interface for selecting starters.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Basic Web Application</h2>
            <Card>
              <CardHeader>
                <CardTitle>Simple REST API with Spring Boot</CardTitle>
                <CardDescription>
                  A basic example showing how to use spring-boot-starter-web to create a REST API
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
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">HelloController.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello, %s!", name);
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
                  <CardTitle>Exercise 1: Basic Web Application</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Create a new Spring Boot application using Spring Initializr with the following starters:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Spring Web</li>
                        <li>Spring Boot DevTools</li>
                      </ul>
                    </li>
                    <li>Create a simple REST controller with endpoints for "hello" and "hello/name"</li>
                    <li>Run the application and test the endpoints</li>
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
                        href="https://docs.spring.io/spring-boot/docs/current/reference/html/using.html#using.build-systems.starters"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Starters Reference
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://start.spring.io/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Initializr
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
                        href="/modules/fundamentals/core-principles"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Core Principles
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
          <Link href="/modules/fundamentals">← Back to Fundamentals</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/fundamentals/core-principles">Next: Core Principles →</Link>
        </Button>
      </div>
    </div>
  )
          }
      
