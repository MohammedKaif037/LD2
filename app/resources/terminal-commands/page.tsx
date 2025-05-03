"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Terminal, Copy, Check } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function TerminalCommands() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Terminal Commands</h1>
        <p className="text-muted-foreground">Essential commands for Spring Boot development and deployment</p>
      </div>

      <Tabs defaultValue="maven" className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="maven">Maven</TabsTrigger>
          <TabsTrigger value="gradle">Gradle</TabsTrigger>
          <TabsTrigger value="spring-boot">Spring Boot CLI</TabsTrigger>
          <TabsTrigger value="docker">Docker</TabsTrigger>
        </TabsList>

        <TabsContent value="maven" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Maven Commands</CardTitle>
              <CardDescription>Essential Maven commands for Spring Boot projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CommandCard
                title="Run Spring Boot Application"
                description="Start your Spring Boot application"
                command="mvn spring-boot:run"
              />

              <CommandCard
                title="Clean and Package"
                description="Clean the target directory and package the application"
                command="mvn clean package"
              />

              <CommandCard
                title="Skip Tests"
                description="Package the application without running tests"
                command="mvn package -DskipTests"
              />

              <CommandCard
                title="Run with Profile"
                description="Run the application with a specific profile"
                command="mvn spring-boot:run -Dspring-boot.run.profiles=dev"
              />

              <CommandCard
                title="Create Executable JAR"
                description="Package the application as an executable JAR"
                command="mvn clean package spring-boot:repackage"
              />

              <CommandCard title="Run Tests" description="Run the application tests" command="mvn test" />

              <CommandCard
                title="Generate Project"
                description="Generate a new Maven project"
                command="mvn archetype:generate -DgroupId=com.example -DartifactId=my-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false"
              />

              <CommandCard
                title="Dependency Tree"
                description="Display the dependency tree"
                command="mvn dependency:tree"
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="gradle" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gradle Commands</CardTitle>
              <CardDescription>Essential Gradle commands for Spring Boot projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CommandCard
                title="Run Spring Boot Application"
                description="Start your Spring Boot application"
                command="./gradlew bootRun"
              />

              <CommandCard
                title="Clean and Build"
                description="Clean the build directory and build the application"
                command="./gradlew clean build"
              />

              <CommandCard
                title="Skip Tests"
                description="Build the application without running tests"
                command="./gradlew build -x test"
              />

              <CommandCard
                title="Run with Profile"
                description="Run the application with a specific profile"
                command="./gradlew bootRun --args='--spring.profiles.active=dev'"
              />

              <CommandCard
                title="Create Executable JAR"
                description="Build the application as an executable JAR"
                command="./gradlew bootJar"
              />

              <CommandCard title="Run Tests" description="Run the application tests" command="./gradlew test" />

              <CommandCard
                title="Dependency Insight"
                description="Show insight into a specific dependency"
                command="./gradlew dependencyInsight --dependency spring-boot"
              />

              <CommandCard title="List Tasks" description="List all available Gradle tasks" command="./gradlew tasks" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="spring-boot" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Spring Boot CLI Commands</CardTitle>
              <CardDescription>Commands for the Spring Boot Command Line Interface</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CommandCard
                title="Install Spring Boot CLI"
                description="Install Spring Boot CLI using SDKMAN"
                command="sdk install springboot"
              />

              <CommandCard
                title="Create New Project"
                description="Initialize a new Spring Boot project"
                command="spring init --dependencies=web,data-jpa,mysql my-project"
              />

              <CommandCard
                title="List Dependencies"
                description="List available dependencies"
                command="spring init --list"
              />

              <CommandCard
                title="Run Groovy Script"
                description="Run a Spring Boot Groovy script"
                command="spring run app.groovy"
              />

              <CommandCard
                title="Create Project with Java Version"
                description="Create a project with specific Java version"
                command="spring init --java-version=17 --dependencies=web my-project"
              />

              <CommandCard
                title="Create Project with Gradle"
                description="Create a Gradle project"
                command="spring init --build=gradle --dependencies=web my-gradle-project"
              />

              <CommandCard
                title="Create Project with Kotlin"
                description="Create a Kotlin project"
                command="spring init --language=kotlin --dependencies=web my-kotlin-project"
              />

              <CommandCard title="Help Command" description="Display help information" command="spring help" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docker" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Docker Commands</CardTitle>
              <CardDescription>Docker commands for Spring Boot applications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <CommandCard
                title="Build Docker Image"
                description="Build a Docker image for your Spring Boot application"
                command="docker build -t myapp:latest ."
              />

              <CommandCard
                title="Run Docker Container"
                description="Run your Spring Boot application in a Docker container"
                command="docker run -p 8080:8080 myapp:latest"
              />

              <CommandCard
                title="Run with Environment Variables"
                description="Run with specific environment variables"
                command="docker run -p 8080:8080 -e SPRING_PROFILES_ACTIVE=prod myapp:latest"
              />

              <CommandCard
                title="Docker Compose Up"
                description="Start services defined in docker-compose.yml"
                command="docker-compose up"
              />

              <CommandCard
                title="Docker Compose Down"
                description="Stop services defined in docker-compose.yml"
                command="docker-compose down"
              />

              <CommandCard
                title="View Logs"
                description="View logs from a running container"
                command="docker logs -f container_id"
              />

              <CommandCard title="List Containers" description="List all running containers" command="docker ps" />

              <CommandCard
                title="Stop Container"
                description="Stop a running container"
                command="docker stop container_id"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/resources">← Back to Resources</Link>
        </Button>
        <Button asChild>
          <Link href="/resources/code-snippets">View Code Snippets →</Link>
        </Button>
      </div>
    </div>
  )
}

function CommandCard({ title, description, command }: { title: string; description: string; command: string }) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold leading-none tracking-tight">{title}</h3>
          <CopyButton text={command} />
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="p-4 pt-0">
        <div className="bg-black text-white p-3 rounded-md flex items-start">
          <Terminal className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
          <code className="text-sm font-mono">{command}</code>
        </div>
      </div>
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleCopy}>
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      <span className="sr-only">Copy</span>
    </Button>
  )
}
