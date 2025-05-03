import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ExternalizedConfiguration() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Externalized Configuration</h1>
          <Badge>Module 5.8</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to externalize configuration in Spring Boot applications for better flexibility and security
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
            <h2 className="text-2xl font-bold tracking-tight">What is Externalized Configuration?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Externalized configuration allows you to separate your application's configuration from its codebase,
                enabling different settings for development, testing, staging, and production environments without changing
                the deployed code.
              </p>
              
              <p>Key benefits of externalized configuration:</p>
              <ul>
                <li><strong>Environment-specific settings:</strong> Different configurations for different environments</li>
                <li><strong>Better security:</strong> Sensitive data can be managed separately</li>
                <li><strong>Easier maintenance:</strong> Changes can be made without rebuilding the application</li>
                <li><strong>Improved portability:</strong> Applications can run in multiple environments with minimal changes</li>
              </ul>
              
              <p>
                Spring Boot provides powerful support for externalized configuration through property files, YAML files,
                environment variables, and command-line arguments.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Configuration Sources & Precedence</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot supports multiple sources of configuration that are loaded in a specific order. The later sources
                override earlier ones if there are overlapping properties.
              </p>
              
              <h3>Order of Configuration Sources (highest to lowest priority):</h3>
              <ol>
                <li><strong>Command line arguments:</strong> <code>--property=value</code></li>
                <li><strong>System.getProperties():</strong> Java system properties</li>
                <li><strong>OS environment variables:</strong> Operating system environment variables</li>
                <li><strong>{@literal @}TestPropertySource annotations:</strong> Used in integration tests</li>
                <li><strong>application-{profile}.properties:</strong> Profile-specific properties files</li>
                <li><strong>application.properties:</strong> Default properties file</li>
                <li><strong>Default properties:</strong> Set programmatically via SpringApplication.setDefaultProperties()</li>
              </ol>
              
              <p>This precedence hierarchy gives you fine-grained control over configuration values.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Types of Externalized Configuration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot supports several ways to externalize configuration:
              </p>
              
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Property Files</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>application.properties</code>, <code>application-{profile}.properties</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">General-purpose configuration</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">YAML Files</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>application.yml</code>, <code>application-{profile}.yml</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Complex hierarchical configuration</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Environment Variables</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Environment variables like <code>SPRING_DATASOURCE_URL=jdbc:mysql://localhost/mydb</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cloud environments and containerized deployments</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Command-line Arguments</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Arguments passed at startup like <code>--server.port=9090</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Quick overrides during development or testing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">JVM System Properties</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set with <code>-Dproperty=value</code> when starting the JVM</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Low-level configuration not exposed through other means</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">External Configuration Files</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Files located outside the application JAR</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Shared configuration across multiple applications</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using Environment Variables</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Environment variables provide a flexible way to configure applications, especially in containerized environments.
              </p>
              
              <h3>Naming Conventions:</h3>
              <ul>
                <li>Replace dots with underscores: <code>spring.datasource.url</code> → <code>SPRING_DATASOURCE_URL</code></li>
                <li>Uppercase all letters</li>
                <li>Prefix with <code>SPRING_</code> for clarity</li>
              </ul>
              
              <h3>Example Usage:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Setting environment variables
export SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/mydb
export SPRING_DATASOURCE_USERNAME=root
export SPRING_DATASOURCE_PASSWORD=secret

# Running the application
java -jar myapp.jar`}
              </pre>
              
              <p>
                This approach is particularly useful in Docker containers and cloud platforms where secrets should never be
                committed to version control.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Command Line Arguments</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                You can pass configuration directly when running your Spring Boot application from the command line:
              </p>
              
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Example command line arguments
java -jar myapp.jar --server.port=9090 --spring.profiles.active=dev --app.title="My Dev App"`}
              </pre>
              
              <p>
                These arguments take precedence over most other configuration sources, making them ideal for temporary overrides.
              </p>
              
              <h3>Best Practices:</h3>
              <ul>
                <li>Avoid sensitive information in command line arguments (visible in process list)</li>
                <li>Use for quick overrides during development or testing</li>
                <li>Combine with scripts for consistent deployment behavior</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">External Property Files</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                You can keep your configuration outside the application JAR by specifying an external location:
              </p>
              
              <h3>Using Command Line:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Specify config file location
java -jar myapp.jar --spring.config.location=file:/opt/myapp/config/`}
              </pre>
              
              <h3>Using Environment Variable:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Set config location via env var
SPRING_CONFIG_LOCATION=file:/opt/myapp/config/
java -jar myapp.jar`}
              </pre>
              
              <h3>Supported Locations:</h3>
              <ul>
                <li><code>file:./config/</code> - Config directory in current directory</li>
                <li><code>file:./</code> - Current directory</li>
                <li><code>classpath:/config/</code> - config package in classpath</li>
                <li><code>classpath:/</code> - Root of the classpath</li>
              </ul>
              
              <p>
                This feature enables centralized configuration management and makes it easier to share configuration between
                multiple applications.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Secure Configuration Management</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Managing Secrets</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never commit sensitive data to version control</li>
                    <li>Use environment variables or secret managers for credentials</li>
                    <li>Consider encrypting sensitive properties with Spring Cloud Config</li>
                    <li>Use vault services like HashiCorp Vault or AWS Secrets Manager</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Configuration Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Keep common configuration in <code>application.properties</code></li>
                    <li>Use profile-specific files for environment-specific settings</li>
                    <li>Document required configuration parameters</li>
                    <li>Provide default values where appropriate</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Validation & Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Validate critical properties at startup</li>
                    <li>Expose configuration metadata via Actuator endpoints</li>
                    <li>Monitor configuration changes in production</li>
                    <li>Use configuration audits for compliance-sensitive applications</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Cloud-Native Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use Kubernetes ConfigMaps and Secrets for containerized apps</li>
                    <li>Leverage cloud provider configuration services (e.g., AWS Parameter Store)</li>
                    <li>Use Spring Cloud Config for centralized configuration management</li>
                    <li>Implement dynamic configuration refresh with Spring Cloud Bus</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Externalization Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>External Configuration File</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">/opt/myapp/config/application.properties</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Application title
app.title=My Production App

# Database configuration
spring.datasource.url=jdbc:mysql://prod-db:3306/mydb
spring.datasource.username=admin
spring.datasource.password=production-secret-password

# Logging configuration
logging.level.root=INFO
logging.file.name=logs/app.log`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Starting the application</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Using command line argument
java -jar myapp.jar --spring.config.location=file:/opt/myapp/config/`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Alternative: Using environment variable</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Using environment variable
SPRING_CONFIG_LOCATION=file:/opt/myapp/config/
java -jar myapp.jar`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Environment Variable Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>Using OS Environment Variables</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Setting environment variables</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Bash example
export SPRING_DATASOURCE_URL=jdbc:mysql://localhost:3306/mydb
export SPRING_DATASOURCE_USERNAME=dbuser
export SPRING_DATASOURCE_PASSWORD=securepassword
export APP_TITLE="My Secure App"

# Run application
java -jar myapp.jar`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Accessing in application.properties</p>
                    <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# application.properties
# Uses environment variables when available
spring.datasource.url=\${SPRING_DATASOURCE_URL}
spring.datasource.username=\${SPRING_DATASOURCE_USERNAME}
spring.datasource.password=\${SPRING_DATASOURCE_PASSWORD}

app.title=\${APP_TITLE:Default Title}`}
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
                  <CardTitle>Exercise 1: Create External Configuration</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot application with web and data JPA dependencies</li>
                    <li>Move database configuration to an external file</li>
                    <li>Run the application with <code>--spring.config.location</code> pointing to this file</li>
                    <li>Verify the application uses the external configuration correctly</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Use Environment Variables</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot application with custom application properties</li>
                    <li>Override some properties using environment variables</li>
                    <li>Inject these properties into a service using @Value</li>
                    <li>Expose an endpoint that displays current configuration values</li>
                    <li>Verify environment variables override property file values</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Implement Secure Configuration</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot application that requires sensitive configuration</li>
                    <li>Store sensitive values in environment variables</li>
                    <li>Use Spring Cloud Config to manage shared configuration</li>
                    <li>Implement encryption for sensitive properties</li>
                    <li>Deploy to a test environment and verify secure operation</li>
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
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/core/env/ConfigurableEnvironment.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        ConfigurableEnvironment API Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-cloud-config/docs/current/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Config Documentation
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
                        href="https://reflectoring.io/spring-boot-externalized-configuration/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Mastering Externalized Configuration
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.javatpoint.com/spring-boot-externalized-configuration"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        JavaTPoint: Spring Boot Externalized Configuration
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
              
              <Card>
                <CardHeader>
                  <CardTitle>Related Modules</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        href="/modules/fundamentals/configuration/project-structure"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Project Structure
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/fundamentals/configuration/application-properties"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Application Properties
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/fundamentals/configuration/profiles"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Profile Management
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
          <Link href="/modules/fundamentals/configuration/profiles">← Profile Management</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/fundamentals/basic-understanding/spring-boot-starters">Next: Spring Boot Starters →</Link>
        </Button>
      </div>
    </div>
  )
}
