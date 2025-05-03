import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProfileManagement() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Profile Management</h1>
          <Badge>Module 5.7</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to manage environment-specific configurations using Spring Boot profiles
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
            <h2 className="text-2xl font-bold tracking-tight">What Are Spring Profiles?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Profiles provide a way to segregate parts of your application configuration and make it available
                only in certain environments. This allows you to have different settings for development, testing,
                staging, and production without changing your code.
              </p>
              
              <p>Key features of Spring Profiles:</p>
              <ul>
                <li><strong>Environment-specific configuration</strong></li>
                <li><strong>Multiple profile activation options</strong></li>
                <li><strong>Profile-specific property files</strong></li>
                <li><strong>Conditional bean creation based on active profiles</strong></li>
              </ul>
              
              <p>
                Profiles help maintain consistency across environments while allowing necessary differences in
                configuration such as database connections, logging levels, and external service endpoints.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Activating Profiles</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                There are multiple ways to activate profiles in Spring Boot:
              </p>
              
              <ol>
                <li>
                  <strong>In application.properties:</strong>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`spring.profiles.active=dev`}
                  </pre>
                </li>
                
                <li>
                  <strong>As JVM argument:</strong>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`java -jar myapp.jar --spring.profiles.active=prod`}
                  </pre>
                </li>
                
                <li>
                  <strong>As environment variable:</strong>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`SPRING_PROFILES_ACTIVE=test java -jar myapp.jar`}
                  </pre>
                </li>
                
                <li>
                  <strong>In code (for embedded applications):</strong>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Application.class);
        app.setMainApplicationClass(Application.class);
        app.setDefaultProperties(Collections.singletonMap("spring.profiles.active", "local"));
        app.run(args);
    }
}`}
                  </pre>
                </li>
              </ol>
              
              <p>
                The active profile determines which profile-specific configuration files are loaded and which beans are
                included in the application context.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Profile-Specific Configuration Files</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                You can create separate property or YAML files for each profile by adding the profile name to the filename:
              </p>
              
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`application.properties
application-dev.properties
application-test.properties
application-prod.properties
application-local.yml`}
              </pre>
              
              <p>
                When running the application, Spring will load both the general <code>application.properties</code> and
                the active profile-specific file, with profile-specific values taking precedence.
              </p>
              
              <h3>Example: Dev vs Prod Database Configuration</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>application-dev.properties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`spring.datasource.url=jdbc:h2:mem:devdb
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update`}
                    </pre>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>application-prod.properties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`spring.datasource.url=jdbc:mysql://localhost:3306/proddb
spring.datasource.username=admin
spring.datasource.password=securepassword
spring.jpa.hibernate.ddl-auto=validate`}
                    </pre>
                  </CardContent>
                </Card>
              </div>
              
              <p>
                This approach keeps sensitive production credentials out of version control and makes it easy to switch
                between environments.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">@Profile Annotation</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The <code>@Profile</code> annotation allows you to conditionally include or exclude beans based on the
                active profile.
              </p>
              
              <h3>Using @Profile on Beans:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Component
@Profile("dev")
public class DevDatabaseSeeder {
    // Development-only data seeding logic
}`}
              </pre>
              
              <h3>Using @Profile on Configuration Classes:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Configuration
@Profile("test")
public class TestConfig {
    @Bean
    public DataSource dataSource() {
        return new EmbeddedDatabaseBuilder()
            .setType(H2)
            .build();
    }
}`}
              </pre>
              
              <h3>Using @Profile on Methods:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Bean
@Profile("cloud")
public CloudService cloudService() {
    return new CloudServiceImpl();
}`}
              </pre>
              
              <p>
                You can also use logical operators with profiles:
              </p>
              <ul>
                <li><code>@Profile("dev & test")</code> - Both dev and test must be active</li>
                <li><code>@Profile("dev | test")</code> - Either dev or test must be active</li>
                <li><code>@Profile("!prod")</code> - prod must NOT be active</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Profile Groups</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Profile groups allow you to define logical groupings of profiles that represent a broader environment.
              </p>
              
              <p>To define profile groups in application.properties:</p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`spring.profiles.group.development=dev,embedded-db
spring.profiles.group.production=prod,external-db`}
              </pre>
              
              <p>
                Then you can activate the group instead of individual profiles:
              </p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`--spring.profiles.active=development`}
              </pre>
              
              <p>This would activate both <code>dev</code> and <code>embedded-db</code> profiles.</p>
              
              <p>
                Profile groups help organize complex environment setups and make it easier to manage combinations of profiles
                for different deployment scenarios.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Profile Management</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Organization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use consistent naming conventions (e.g., dev, test, prod)</li>
                    <li>Keep common configuration in the default application.properties</li>
                    <li>Separate infrastructure-related settings from business logic settings</li>
                    <li>Group related profiles when needed</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never store production secrets in version-controlled property files</li>
                    <li>Use environment variables or secret managers for sensitive data</li>
                    <li>Avoid including production profile files in build artifacts</li>
                    <li>Validate that no development/test profiles are accidentally used in production</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Document all available profiles and their purposes</li>
                    <li>Create integration tests for each profile configuration</li>
                    <li>Verify that required properties are provided for each profile</li>
                    <li>Provide default values where appropriate</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Deployment Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use CI/CD pipelines to automate profile selection</li>
                    <li>Ensure correct profiles are activated in each environment</li>
                    <li>Monitor logs to confirm active profiles at startup</li>
                    <li>Consider using Spring Cloud Config for centralized configuration management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Profile Setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Common configuration
server.port=8080
logging.level.root=INFO

# Default database connection
spring.jpa.hibernate.ddl-auto=update`}
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>application-dev.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Development-specific settings
spring.datasource.url=jdbc:h2:mem:devdb
spring.datasource.username=sa
spring.datasource.password=
logging.level.org.springframework.web=WARN`}
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>application-prod.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Production-specific settings
spring.datasource.url=jdbc:mysql://localhost:3306/myapp
spring.datasource.username=dbuser
spring.datasource.password=production-secret-password
logging.level.org.springframework.web=ERROR`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Profile-Specific Beans</h2>
            <Card>
              <CardHeader>
                <CardTitle>Dev Logging Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">DevLoggingConfig.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Configuration
@Profile("dev")
public class DevLoggingConfig {
    @Bean
    public Logger devLogger() {
        return new ConsoleLogger();
    }
}`}
                    </pre>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">ProdLoggingConfig.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Configuration
@Profile("prod")
public class ProdLoggingConfig {
    @Bean
    public Logger prodLogger() {
        return new FileLogger("/var/log/app.log");
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
                  <CardTitle>Exercise 1: Create Profile-Specific Properties</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a new Spring Boot project</li>
                    <li>Add web and data JPA dependencies</li>
                    <li>Create three property files: dev, test, prod</li>
                    <li>Configure different database connections in each profile</li>
                    <li>Switch between profiles using different activation methods</li>
                    <li>Verify that the correct configuration is loaded</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Use @Profile for Conditional Beans</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service interface with multiple implementations</li>
                    <li>Annotate each implementation with @Profile for a specific environment</li>
                    <li>Inject the service into a controller</li>
                    <li>Test switching between implementations via active profile</li>
                    <li>Add a default implementation for when no profile is active</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Implement Profile Groups</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create multiple small profile definitions (e.g., h2, mysql, cloud, local)</li>
                    <li>Define profile groups like development, production</li>
                    <li>Activate different groups and verify configuration</li>
                    <li>Implement beans that are conditionally included based on the group</li>
                    <li>Document the profile structure and activation methods</li>
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
                        Spring Boot Profile Management Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Profile.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        @Profile Annotation API Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#features.spring-application.profiles"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Profiles Reference Guide
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
                        href="https://www.baeldung.com/spring-profiles"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Working with Spring Profiles
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-profiles/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Mastering Spring Profiles
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.javatpoint.com/spring-boot-profiles"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        JavaTPoint: Spring Boot Profiles Tutorial
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
                        href="/modules/fundamentals/configuration/annotations"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Annotation-based Configuration
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
          <Link href="/modules/fundamentals/configuration/annotations">← Annotation-based Configuration</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/fundamentals/configuration/externalized">Next: Externalized Configuration →</Link>
        </Button>
      </div>
    </div>
  )
}
