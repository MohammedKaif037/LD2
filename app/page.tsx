import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Code,
  Shield,
  TestTube,
  Database,
  Server,
  MessageSquare,
  Network,
  Cloud,
  BarChart,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Spring Boot Learning Hub 2025</h1>
          <p className="text-xl text-muted-foreground">
            Your comprehensive guide to mastering Spring Boot from fundamentals to advanced concepts
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/modules/fundamentals/basic-understanding/overview">Start Learning</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/search">Search Content</Link>
          </Button>
        </div>
      </section>

      <Tabs defaultValue="modules" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="modules">Learning Path</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="modules" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Fundamentals & Core Concepts",
                description: "Learn the core principles and architecture of Spring Boot",
                icon: <BookOpen className="h-5 w-5" />,
                path: "/modules/fundamentals",
              },
              {
                title: "Web Development Basics",
                description: "Build REST APIs and implement data access with Spring Boot",
                icon: <Code className="h-5 w-5" />,
                path: "/modules/web-development",
              },
              {
                title: "Security Fundamentals",
                description: "Implement authentication, authorization, and security best practices",
                icon: <Shield className="h-5 w-5" />,
                path: "/modules/security",
              },
              {
                title: "Testing",
                description: "Master unit testing, integration testing, and mocking",
                icon: <TestTube className="h-5 w-5" />,
                path: "/modules/testing",
              },
              {
                title: "Database Integration",
                description: "Connect to relational and NoSQL databases",
                icon: <Database className="h-5 w-5" />,
                path: "/modules/database",
              },
              {
                title: "Caching Solutions",
                description: "Implement various caching strategies for performance",
                icon: <Server className="h-5 w-5" />,
                path: "/modules/caching",
              },
              {
                title: "Message Queues & Event-Driven",
                description: "Implement message brokers and event processing",
                icon: <MessageSquare className="h-5 w-5" />,
                path: "/modules/message-queues",
              },
              {
                title: "Microservices",
                description: "Build and deploy microservices architectures",
                icon: <Network className="h-5 w-5" />,
                path: "/modules/microservices",
              },
              {
                title: "Cloud & Deployment",
                description: "Deploy to cloud platforms and containerize applications",
                icon: <Cloud className="h-5 w-5" />,
                path: "/modules/cloud-deployment",
              },
              {
                title: "Performance & Monitoring",
                description: "Optimize and monitor Spring Boot applications",
                icon: <BarChart className="h-5 w-5" />,
                path: "/modules/performance",
              },
              {
                title: "Advanced Concepts",
                description: "Explore reactive programming, virtual threads, and best practices",
                icon: <Zap className="h-5 w-5" />,
                path: "/modules/advanced",
              },
            ].map((module, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{module.title}</CardTitle>
                  {module.icon}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={module.path}>Explore Module</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cheatsheets",
                description: "Quick reference guides for Spring Boot",
                icon: <Code className="h-5 w-5" />,
                path: "/resources/cheatsheets",
              },
              {
                title: "Code Snippets",
                description: "Reusable code examples for common tasks",
                icon: <Code className="h-5 w-5" />,
                path: "/resources/code-snippets",
              },
              {
                title: "Terminal Commands",
                description: "Essential commands for Spring Boot development",
                icon: <Code className="h-5 w-5" />,
                path: "/resources/terminal-commands",
              },
              {
                title: "Interview Q&A",
                description: "Prepare for Spring Boot interviews",
                icon: <BookOpen className="h-5 w-5" />,
                path: "/resources/interview-qa",
              },
              {
                title: "Glossary",
                description: "Definitions of key Spring Boot terms",
                icon: <BookOpen className="h-5 w-5" />,
                path: "/resources/glossary",
              },
            ].map((resource, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{resource.title}</CardTitle>
                  {resource.icon}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{resource.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={resource.path}>View Resource</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Todo App",
                description: "Build a simple Todo application with Spring Boot",
                icon: <Code className="h-5 w-5" />,
                path: "/projects/todo-app",
              },
              {
                title: "CRUD API",
                description: "Create a RESTful CRUD API with Spring Data JPA",
                icon: <Code className="h-5 w-5" />,
                path: "/projects/crud-api",
              },
              {
                title: "Login System",
                description: "Implement authentication with Spring Security",
                icon: <Shield className="h-5 w-5" />,
                path: "/projects/login-system",
              },
              {
                title: "Microservice Demo",
                description: "Build a microservices architecture with Spring Cloud",
                icon: <Network className="h-5 w-5" />,
                path: "/projects/microservice-demo",
              },
              {
                title: "Cloud Deployment",
                description: "Deploy a Spring Boot app to cloud platforms",
                icon: <Cloud className="h-5 w-5" />,
                path: "/projects/cloud-deployment",
              },
            ].map((project, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{project.title}</CardTitle>
                  {project.icon}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={project.path}>Start Project</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Learning Path Progress</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Current Progress</CardTitle>
              <CardDescription>Module 1: Fundamentals & Core Concepts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Basic Understanding</span>
                  <span className="text-muted-foreground">2/5 completed</span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/modules/fundamentals/basic-understanding/dependency-injection">Continue Learning</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recommended Next Steps</CardTitle>
              <CardDescription>Based on your progress</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-sm">Complete Dependency Injection module</span>
                </li>
                <li className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-primary" />
                  <span className="text-sm">Start the Spring Boot Starters module</span>
                </li>
                <li className="flex items-center gap-2">
                  <TestTube className="h-4 w-4 text-primary" />
                  <span className="text-sm">Try the Todo App project</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button size="sm" className="w-full" asChild>
                <Link href="/modules/fundamentals/basic-understanding/dependency-injection">Continue</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Latest Updates</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>New Module Added</CardTitle>
              <CardDescription>Virtual Threads (JDK 21+)</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Learn how to leverage virtual threads in Spring Boot applications for improved scalability.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/modules/advanced/modern/virtual-threads">View Module</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>New Project Added</CardTitle>
              <CardDescription>Microservice Demo</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                A comprehensive demo project showcasing microservices architecture with Spring Cloud.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/projects/microservice-demo">View Project</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Updated Content</CardTitle>
              <CardDescription>Spring Security 6.2</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Security modules have been updated to cover the latest features in Spring Security 6.2.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/modules/security/basic/integration">View Updates</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}
