import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Terminal } from "lucide-react"
import Link from "next/link"

export default function SpringBootBasics() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Boot Basics</h1>
          <Badge>Module 3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn the fundamentals of Spring Boot and how to create your first application
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>What is Spring Boot?</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Spring Boot is an extension of the Spring framework that simplifies the process of building
                  production-ready applications. It uses a "convention over configuration" approach to get you up and
                  running quickly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Embedded server support (Tomcat, Jetty, etc.)</li>
                  <li>Auto-configuration based on dependencies</li>
                  <li>Starter dependencies for simplified build configuration</li>
                  <li>Production-ready features (metrics, health checks)</li>
                  <li>No code generation and minimal XML configuration</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Before starting this module, you should have:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Basic knowledge of Java programming</li>
                <li>Understanding of Spring Core concepts (IoC, DI)</li>
                <li>Java Development Kit (JDK) 8 or higher installed</li>
                <li>Maven or Gradle build tool installed</li>
                <li>An IDE (IntelliJ IDEA, Eclipse, VS Code)</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" asChild>
                <Link href="/modules/spring-core">Review Spring Core Concepts</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="content" className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. Introduction to Spring Boot</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>What is Spring Boot?</li>
                  <li>Spring Boot vs. Spring Framework</li>
                  <li>Advantages of using Spring Boot</li>
                  <li>Spring Boot architecture</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. Setting Up Your First Spring Boot Application</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Using Spring Initializr</li>
                  <li>Project structure</li>
                  <li>Maven/Gradle configuration</li>
                  <li>Running your first application</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. Spring Boot Starters</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>What are Spring Boot Starters?</li>
                  <li>Common starters (web, data, test)</li>
                  <li>Creating custom starters</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>4. Auto-Configuration</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>How auto-configuration works</li>
                  <li>Conditional configuration</li>
                  <li>Overriding auto-configuration</li>
                  <li>Debugging auto-configuration</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>5. Configuration Properties</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>application.properties/application.yml</li>
                  <li>Environment-specific configuration</li>
                  <li>Type-safe configuration with @ConfigurationProperties</li>
                  <li>Externalized configuration</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="examples" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Creating a Spring Boot Application</CardTitle>
              <CardDescription>Using Spring Initializr</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-md">
                <p className="text-sm font-mono">
                  Visit{" "}
                  <a href="https://start.spring.io" className="text-primary underline">
                    https://start.spring.io
                  </a>{" "}
                  and select:
                </p>
                <ul className="list-disc pl-5 space-y-1 mt-2 text-sm font-mono">
                  <li>Project: Maven</li>
                  <li>Language: Java</li>
                  <li>Spring Boot: 3.1.0</li>
                  <li>Dependencies: Spring Web, Spring Data JPA, H2 Database</li>
                </ul>
                <p className="text-sm font-mono mt-2">Click "Generate" to download the project.</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Running a Spring Boot Application</CardTitle>
              <CardDescription>Using Maven</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-black text-white p-4 rounded-md flex items-start">
                <Terminal className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
                <code className="text-sm font-mono">
                  # Navigate to your project directory
                  <br />
                  cd my-spring-boot-app
                  <br />
                  <br /># Run the application
                  <br />
                  mvn spring-boot:run
                </code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hello World Controller</CardTitle>
              <CardDescription>Simple REST endpoint</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm font-mono">
                  {`@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Spring Boot!";
    }
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Official Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a
                      href="https://docs.spring.io/spring-boot/docs/current/reference/html/"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spring Boot Reference Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.spring.io/spring-boot/docs/current/api/"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spring Boot API Documentation
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tutorials & Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <a
                      href="https://spring.io/guides/gs/spring-boot/"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Building an Application with Spring Boot
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.baeldung.com/spring-boot"
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Baeldung Spring Boot Tutorials
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Related Cheatsheets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/cheatsheets#annotations">Spring Boot Annotations</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/cheatsheets#properties">Common Application Properties</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/cheatsheets#starters">Spring Boot Starters</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/resources/cheatsheets#actuator">Spring Boot Actuator</Link>
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button size="sm" asChild>
                <Link href="/resources/cheatsheets">View All Cheatsheets</Link>
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/modules/spring-core">← Previous: Spring Core Concepts</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/rest-apis">Next: REST APIs with Spring Boot →</Link>
        </Button>
      </div>
    </div>
  )
}
