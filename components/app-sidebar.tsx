"use client"

import {
  BookOpen,
  Code,
  FileCode,
  Folder,
  GraduationCap,
  Home,
  Library,
  Terminal,
  BookText,
  Lightbulb,
  Search,
  Database,
  Shield,
  TestTube,
  Server,
  MessageSquare,
  Network,
  Cloud,
  BarChart,
  Zap,
  ChevronDown,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"

import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function AppSidebar() {
  const pathname = usePathname()

  const modules = [
    {
      title: "Fundamentals & Core Concepts",
      icon: <BookOpen className="h-5 w-5" />,
      path: "/modules/fundamentals",
      submodules: [
        {
          title: "Basic Understanding",
          path: "/modules/fundamentals/basic-understanding",
          items: [
            { title: "Spring Boot Overview", path: "/modules/fundamentals/basic-understanding/overview" },
            { title: "Core Principles", path: "/modules/fundamentals/basic-understanding/core-principles" },
            { title: "Dependency Injection", path: "/modules/fundamentals/basic-understanding/dependency-injection" },
            { title: "Spring Boot Starters", path: "/modules/fundamentals/basic-understanding/spring-boot-starters" },
            { title: "Embedded Servers", path: "/modules/fundamentals/basic-understanding/embedded-servers" },
          ],
        },
        {
          title: "Configuration & Setup",
          path: "/modules/fundamentals/configuration",
          items: [
            { title: "Project Structure", path: "/modules/fundamentals/configuration/project-structure" },
            { title: "Application Properties", path: "/modules/fundamentals/configuration/properties" },
            { title: "Annotation Configuration", path: "/modules/fundamentals/configuration/annotations" },
            { title: "Profile Management", path: "/modules/fundamentals/configuration/profiles" },
            { title: "Externalized Configuration", path: "/modules/fundamentals/configuration/externalized" },
          ],
        },
      ],
    },
    {
      title: "Web Development Basics",
      icon: <Code className="h-5 w-5" />,
      path: "/modules/web-development",
      submodules: [
        {
          title: "REST APIs",
          path: "/modules/web-development/rest-apis",
          items: [
            { title: "Controller Implementation", path: "/modules/web-development/rest-apis/controllers" },
            { title: "Request Mapping", path: "/modules/web-development/rest-apis/request-mapping" },
            { title: "Request/Response Handling", path: "/modules/web-development/rest-apis/request-response" },
            { title: "Exception Handling", path: "/modules/web-development/rest-apis/exception-handling" },
            { title: "REST Best Practices", path: "/modules/web-development/rest-apis/best-practices" },
          ],
        },
        {
          title: "Data Access",
          path: "/modules/web-development/data-access",
          items: [
            { title: "Spring Data JPA", path: "/modules/web-development/data-access/spring-data-jpa" },
            { title: "Database Configuration", path: "/modules/web-development/data-access/database-config" },
            { title: "Repository Pattern", path: "/modules/web-development/data-access/repository-pattern" },
            { title: "Transaction Management", path: "/modules/web-development/data-access/transactions" },
            { title: "CRUD Operations", path: "/modules/web-development/data-access/crud" },
          ],
        },
      ],
    },
    {
      title: "Security Fundamentals",
      icon: <Shield className="h-5 w-5" />,
      path: "/modules/security",
      submodules: [
        {
          title: "Basic Security",
          path: "/modules/security/basic",
          items: [
            { title: "Spring Security Integration", path: "/modules/security/basic/integration" },
            { title: "Authentication & Authorization", path: "/modules/security/basic/auth" },
            { title: "Security Configurations", path: "/modules/security/basic/configurations" },
            { title: "Password Encoding", path: "/modules/security/basic/password-encoding" },
            { title: "Role-based Access Control", path: "/modules/security/basic/rbac" },
          ],
        },
        {
          title: "Advanced Security",
          path: "/modules/security/advanced",
          items: [
            { title: "OAuth2 Implementation", path: "/modules/security/advanced/oauth2" },
            { title: "JWT Authentication", path: "/modules/security/advanced/jwt" },
            { title: "CSRF Protection", path: "/modules/security/advanced/csrf" },
            { title: "Session Management", path: "/modules/security/advanced/session" },
            { title: "Security Best Practices", path: "/modules/security/advanced/best-practices" },
          ],
        },
      ],
    },
    {
      title: "Testing",
      icon: <TestTube className="h-5 w-5" />,
      path: "/modules/testing",
      submodules: [
        {
          title: "Testing Fundamentals",
          path: "/modules/testing/fundamentals",
          items: [
            { title: "Unit Testing with JUnit", path: "/modules/testing/fundamentals/junit" },
            { title: "Integration Testing", path: "/modules/testing/fundamentals/integration" },
            { title: "Mocking with Mockito", path: "/modules/testing/fundamentals/mockito" },
            { title: "@SpringBootTest Usage", path: "/modules/testing/fundamentals/springboottest" },
            { title: "Test Configuration", path: "/modules/testing/fundamentals/configuration" },
          ],
        },
      ],
    },
    {
      title: "Database Integration",
      icon: <Database className="h-5 w-5" />,
      path: "/modules/database",
      submodules: [
        {
          title: "Relational Databases",
          path: "/modules/database/relational",
          items: [
            { title: "MySQL/PostgreSQL Integration", path: "/modules/database/relational/mysql-postgres" },
            { title: "Connection Pooling", path: "/modules/database/relational/connection-pooling" },
            { title: "Query Optimization", path: "/modules/database/relational/query-optimization" },
            { title: "Schema Management", path: "/modules/database/relational/schema-management" },
          ],
        },
        {
          title: "NoSQL Databases",
          path: "/modules/database/nosql",
          items: [
            { title: "MongoDB Integration", path: "/modules/database/nosql/mongodb" },
            { title: "Cassandra Implementation", path: "/modules/database/nosql/cassandra" },
            { title: "Redis for Caching", path: "/modules/database/nosql/redis" },
            { title: "Document-based Storage", path: "/modules/database/nosql/document-storage" },
          ],
        },
      ],
    },
    {
      title: "Caching Solutions",
      icon: <Server className="h-5 w-5" />,
      path: "/modules/caching",
      submodules: [
        {
          title: "Caching Implementation",
          path: "/modules/caching/implementation",
          items: [
            { title: "Ehcache Integration", path: "/modules/caching/implementation/ehcache" },
            { title: "Redis Caching", path: "/modules/caching/implementation/redis" },
            { title: "Caffeine Caching", path: "/modules/caching/implementation/caffeine" },
            { title: "Hazelcast Implementation", path: "/modules/caching/implementation/hazelcast" },
            { title: "Cache Configuration", path: "/modules/caching/implementation/configuration" },
          ],
        },
      ],
    },
    {
      title: "Message Queues & Event-Driven",
      icon: <MessageSquare className="h-5 w-5" />,
      path: "/modules/message-queues",
      submodules: [
        {
          title: "Message Brokers",
          path: "/modules/message-queues/brokers",
          items: [
            { title: "Apache Kafka Integration", path: "/modules/message-queues/brokers/kafka" },
            { title: "RabbitMQ Implementation", path: "/modules/message-queues/brokers/rabbitmq" },
            { title: "ActiveMQ Setup", path: "/modules/message-queues/brokers/activemq" },
            { title: "Event Processing Patterns", path: "/modules/message-queues/brokers/event-processing" },
            { title: "Asynchronous Communication", path: "/modules/message-queues/brokers/async-communication" },
          ],
        },
      ],
    },
    {
      title: "Microservices",
      icon: <Network className="h-5 w-5" />,
      path: "/modules/microservices",
      submodules: [
        {
          title: "Basic Concepts",
          path: "/modules/microservices/basics",
          items: [
            { title: "Architecture Principles", path: "/modules/microservices/basics/architecture" },
            { title: "Service Communication", path: "/modules/microservices/basics/communication" },
            { title: "API Gateway", path: "/modules/microservices/basics/api-gateway" },
            { title: "Service Discovery", path: "/modules/microservices/basics/service-discovery" },
            { title: "Load Balancing", path: "/modules/microservices/basics/load-balancing" },
          ],
        },
        {
          title: "Advanced Patterns",
          path: "/modules/microservices/advanced",
          items: [
            { title: "Circuit Breaker Pattern", path: "/modules/microservices/advanced/circuit-breaker" },
            { title: "Bulkhead Pattern", path: "/modules/microservices/advanced/bulkhead" },
            { title: "Event Sourcing", path: "/modules/microservices/advanced/event-sourcing" },
            { title: "SAGA Pattern", path: "/modules/microservices/advanced/saga" },
            { title: "Service Mesh", path: "/modules/microservices/advanced/service-mesh" },
          ],
        },
      ],
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="h-5 w-5" />,
      path: "/modules/cloud-deployment",
      submodules: [
        {
          title: "Cloud Integration",
          path: "/modules/cloud-deployment/cloud",
          items: [
            { title: "Cloud-native Patterns", path: "/modules/cloud-deployment/cloud/cloud-native" },
            { title: "Spring Cloud", path: "/modules/cloud-deployment/cloud/spring-cloud" },
            { title: "Cloud Platform Deployment", path: "/modules/cloud-deployment/cloud/platforms" },
            { title: "Configuration Management", path: "/modules/cloud-deployment/cloud/configuration" },
          ],
        },
        {
          title: "Containerization",
          path: "/modules/cloud-deployment/containers",
          items: [
            { title: "Docker Integration", path: "/modules/cloud-deployment/containers/docker" },
            { title: "Kubernetes Deployment", path: "/modules/cloud-deployment/containers/kubernetes" },
            { title: "Container Orchestration", path: "/modules/cloud-deployment/containers/orchestration" },
            { title: "Docker Compose", path: "/modules/cloud-deployment/containers/docker-compose" },
            { title: "CI/CD Pipeline", path: "/modules/cloud-deployment/containers/cicd" },
          ],
        },
      ],
    },
    {
      title: "Performance & Monitoring",
      icon: <BarChart className="h-5 w-5" />,
      path: "/modules/performance",
      submodules: [
        {
          title: "Performance Optimization",
          path: "/modules/performance/optimization",
          items: [
            { title: "Application Performance", path: "/modules/performance/optimization/application" },
            { title: "Memory Optimization", path: "/modules/performance/optimization/memory" },
            { title: "Database Performance", path: "/modules/performance/optimization/database" },
            { title: "Caching Strategies", path: "/modules/performance/optimization/caching" },
            { title: "Query Optimization", path: "/modules/performance/optimization/query" },
          ],
        },
        {
          title: "Monitoring & Debugging",
          path: "/modules/performance/monitoring",
          items: [
            { title: "Spring Boot Actuator", path: "/modules/performance/monitoring/actuator" },
            { title: "Metrics Collection", path: "/modules/performance/monitoring/metrics" },
            { title: "Logging Best Practices", path: "/modules/performance/monitoring/logging" },
            { title: "Debugging Techniques", path: "/modules/performance/monitoring/debugging" },
            { title: "Performance Profiling", path: "/modules/performance/monitoring/profiling" },
          ],
        },
      ],
    },
    {
      title: "Advanced Concepts",
      icon: <Zap className="h-5 w-5" />,
      path: "/modules/advanced",
      submodules: [
        {
          title: "Modern Features",
          path: "/modules/advanced/modern",
          items: [
            { title: "Virtual Threads (JDK 21+)", path: "/modules/advanced/modern/virtual-threads" },
            { title: "Reactive Programming", path: "/modules/advanced/modern/reactive" },
            { title: "WebFlux Integration", path: "/modules/advanced/modern/webflux" },
            { title: "Non-blocking I/O", path: "/modules/advanced/modern/non-blocking" },
            { title: "Advanced Caching", path: "/modules/advanced/modern/advanced-caching" },
          ],
        },
        {
          title: "Best Practices",
          path: "/modules/advanced/best-practices",
          items: [
            { title: "Design Patterns", path: "/modules/advanced/best-practices/design-patterns" },
            { title: "Code Organization", path: "/modules/advanced/best-practices/code-organization" },
            { title: "Error Handling", path: "/modules/advanced/best-practices/error-handling" },
            { title: "Security Practices", path: "/modules/advanced/best-practices/security" },
            { title: "Performance Techniques", path: "/modules/advanced/best-practices/performance" },
          ],
        },
      ],
    },
  ]

  const resources = [
    { title: "Cheatsheets", path: "/resources/cheatsheets", icon: <FileCode className="h-5 w-5" /> },
    { title: "Code Snippets", path: "/resources/code-snippets", icon: <Code className="h-5 w-5" /> },
    { title: "Terminal Commands", path: "/resources/terminal-commands", icon: <Terminal className="h-5 w-5" /> },
    { title: "Interview Q&A", path: "/resources/interview-qa", icon: <BookText className="h-5 w-5" /> },
    { title: "Glossary", path: "/resources/glossary", icon: <Library className="h-5 w-5" /> },
  ]

  const projects = [
    { title: "Todo App", path: "/projects/todo-app", icon: <Folder className="h-5 w-5" /> },
    { title: "CRUD API", path: "/projects/crud-api", icon: <Folder className="h-5 w-5" /> },
    { title: "Login System", path: "/projects/login-system", icon: <Folder className="h-5 w-5" /> },
    { title: "Microservice Demo", path: "/projects/microservice-demo", icon: <Folder className="h-5 w-5" /> },
    { title: "Cloud Deployment", path: "/projects/cloud-deployment", icon: <Folder className="h-5 w-5" /> },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 px-2">
          <GraduationCap className="w-6 h-6" />
          <span className="font-bold">Spring Boot Hub</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/"}>
                <Link href="/">
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/search"}>
                <Link href="/search">
                  <Search className="h-5 w-5" />
                  <span>Search</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Learning Path</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {modules.map((module) => (
                <Collapsible key={module.path} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        {module.icon}
                        <span>{module.title}</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {module.submodules.map((submodule) => (
                          <Collapsible key={submodule.path} className="group/subcollapsible">
                            <SidebarMenuSubItem>
                              <CollapsibleTrigger asChild>
                                <SidebarMenuSubButton>
                                  {submodule.title}
                                  <ChevronDown className="ml-auto h-3 w-3 transition-transform group-data-[state=open]/subcollapsible:rotate-180" />
                                </SidebarMenuSubButton>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <SidebarMenuSub>
                                  {submodule.items.map((item) => (
                                    <SidebarMenuSubItem key={item.path}>
                                      <SidebarMenuSubButton asChild isActive={pathname === item.path} size="sm">
                                        <Link href={item.path}>{item.title}</Link>
                                      </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                  ))}
                                </SidebarMenuSub>
                              </CollapsibleContent>
                            </SidebarMenuSubItem>
                          </Collapsible>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {resources.map((resource) => (
                <SidebarMenuItem key={resource.path}>
                  <SidebarMenuButton asChild isActive={pathname === resource.path}>
                    <Link href={resource.path}>
                      {resource.icon}
                      <span>{resource.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {projects.map((project) => (
                <SidebarMenuItem key={project.path}>
                  <SidebarMenuButton asChild isActive={pathname === project.path}>
                    <Link href={project.path}>
                      {project.icon}
                      <span>{project.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>My Notes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/notes"}>
                  <Link href="/notes">
                    <Lightbulb className="h-5 w-5" />
                    <span>Learning Journal</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex items-center justify-between p-4">
        <ModeToggle />
        <span className="text-xs text-muted-foreground">v2.0.0</span>
      </SidebarFooter>
    </Sidebar>
  )
}
