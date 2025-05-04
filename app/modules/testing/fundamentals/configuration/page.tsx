import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function TestConfigurationModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Test Configuration</h1>
          <Badge>Module 6.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to configure Spring Boot applications for effective testing
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
            <h2 className="text-2xl font-bold tracking-tight">Why Configure for Testing?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Proper test configuration is essential for building reliable and maintainable Spring Boot applications.
                It ensures that tests run consistently across different environments and CI/CD pipelines,
                while also allowing developers to isolate specific components during development.
              </p>
              
              <p>Key reasons to configure tests:</p>
              <ul>
                <li><strong>Environment isolation:</strong> Avoid polluting production or dev data</li>
                <li><strong>Consistent setup:</strong> Ensure predictable state before each test</li>
                <li><strong>Mocking dependencies:</strong> Replace external services with controlled implementations</li>
                <li><strong>Profile management:</strong> Use dedicated configurations for test scenarios</li>
              </ul>
              
              <p>
                Spring Boot provides built-in support for test configuration through annotations, auto-detected properties,
                and utility libraries like <code>spring-boot-starter-test</code>.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Test-Specific Properties</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                You can provide separate configuration files for testing:
              </p>
              
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`application.properties
application-dev.properties
application-test.properties ← Used in tests`}
              </pre>
              
              <p>To activate the test profile:</p>
              <ul>
                <li>In code: <code>@ActiveProfiles("test")</code></li>
                <li>In application.properties: <code>spring.profiles.active=test</code></li>
                <li>Via command line: <code>--spring.profiles.active=test</code></li>
              </ul>
              
              <h3>Example Test Properties:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`# application-test.properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Test Profiles & Beans</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>@Profile("test")</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Component
@Profile("test")
public class TestEmailService implements EmailService {
    // Simulated behavior for testing
}`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Only loaded when <code>test</code> profile is active
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>@TestPropertySource</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@RunWith(SpringRunner.class)
@SpringBootTest
@TestPropertySource("/test.properties")
public class MyIntegrationTest {
    // Tests go here
}`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Load custom properties directly in unit tests
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Embedded Databases</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# application-test.properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Use in-memory databases for fast and isolated testing
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mock Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Bean
public UserService userService() {
    return new MockUserService();
}`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Override real services with mocks in test context
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Test Auto-Configuration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The <code>spring-boot-starter-test</code> includes all necessary libraries for writing tests:
              </p>
              
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-test</artifactId>
  <scope>test</scope>
</dependency>`}
              </pre>
              
              <h3>Includes These Libraries:</h3>
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Library</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>JUnit</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Core testing framework</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Spring Test</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Support for Spring context testing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Mockito</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Create mock objects for testing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>AssertJ</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fluent assertion library</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>JSONPath</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Query JSON responses in tests</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Test Configuration</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use dedicated <code>application-test.properties</code> file</li>
                    <li>Activate test profile via <code>@ActiveProfiles("test")</code></li>
                    <li>Keep sensitive values out of version control</li>
                    <li>Document expected test environment setup</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mocking Dependencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use Mockito for service-level mocking</li>
                    <li>Replace external APIs with stubs</li>
                    <li>Use embedded databases instead of real ones</li>
                    <li>Avoid relying on live network services</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use <code>@DataJpaTest</code> for repository layer</li>
                    <li>Seed database with known test data</li>
                    <li>Use transactional tests to roll back changes</li>
                    <li>Clean up after each test (use @DirtiesContext if needed)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>CI/CD Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Ensure test configuration works in pipeline</li>
                    <li>Fail build if tests don't pass</li>
                    <li>Use consistent test runner across environments</li>
                    <li>Include coverage reports in CI output</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Test Setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>build.gradle</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`dependencies {
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
    testImplementation 'org.mockito:mockito-core'
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using @ActiveProfiles</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserServiceTest.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@RunWith(SpringRunner.class)
@SpringBootTest
@ActiveProfiles("test")
public class UserServiceTest {
    @Autowired
    private UserService userService;

    @Test
    public void testFindUserById() {
        User user = userService.findById(1L);
        assertNotNull(user);
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Custom Test Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>TestConfig.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@Configuration
@Profile("test")
public class TestConfig {
    @Bean
    public EmailService emailService() {
        return new MockEmailService();
    }
}`}
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
                  <CardTitle>Exercise 1: Configure a Test Environment</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with web and data JPA dependencies</li>
                    <li>Add <code>spring-boot-starter-test</code> to build file</li>
                    <li>Create an <code>application-test.properties</code> file</li>
                    <li>Write a simple unit test that loads context with test profile</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Override Test Beans</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service that uses an external API</li>
                    <li>Implement a mock version of the API client</li>
                    <li>Override the bean in test context</li>
                    <li>Verify your service behaves correctly with the mock</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Set Up Embedded Database</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Configure H2 as in-memory database for testing</li>
                    <li>Load schema and data using <code>schema.sql</code> and <code>data.sql</code></li>
                    <li>Write integration tests that verify database operations</li>
                    <li>Run tests in CI/CD and ensure they pass</li>
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
                        Spring Boot Test Configuration Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/test/context/ActiveProfiles.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        @ActiveProfiles Annotation Docs
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
              
              <Card>
                <CardHeader>
                  <CardTitle>Articles & Tutorials</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://www.baeldung.com/spring-tests"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Introduction to Spring Testing
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-boot-test/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Mastering Spring Boot Tests
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
                        href="/modules/testing/fundamentals/integration"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Integration Testing Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/testing/fundamentals/junit"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        JUnit Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/testing/fundamentals/mockito"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Mockito Module
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
          <Link href="/modules/fundamentals/configuration/schema-management">← Schema Management</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/testing/fundamentals/integration">Next: Integration →</Link>
        </Button>
      </div>
    </div>
  )
}
