import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function IntegrationTestingModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Integration Testing</h1>
          <Badge>Module 6.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to write integration tests that verify multiple components working together in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">What is Integration Testing?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Integration testing verifies that different parts of your application work together correctly.
                Unlike unit tests which isolate individual components, integration tests cover interactions between layers:
              </p>
              
              <ul>
                <li>Controller ↔ Service</li>
                <li>Service ↔ Repository</li>
                <li>Repository ↔ Database</li>
                <li>External API ↔ Application</li>
              </ul>
              
              <p>
                In Spring Boot, integration tests are typically annotated with <code>@SpringBootTest</code>, which loads
                the full application context and allows real interaction between components.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Key Features of Integration Tests</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Fully Configured Context</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Loads entire Spring application context</li>
                    <li>Includes all beans and configurations</li>
                    <li>Supports real database connections</li>
                    <li>Enables end-to-end testing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Web Layer Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Can test REST endpoints directly</li>
                    <li>MockMvc or WebTestClient for request simulation</li>
                    <li>Supports JSON/XML response verification</li>
                    <li>Can test security rules and filters</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Layer Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Verify actual database operations</li>
                    <li>Use transactional boundaries</li>
                    <li>Ensure schema changes don't break queries</li>
                    <li>Validate ORM mappings and relationships</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Slower than unit tests due to full context</li>
                    <li>Ideal for CI/CD pipelines and pre-deployment checks</li>
                    <li>Use embedded databases for faster feedback</li>
                    <li>Keep integration tests focused and fast</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">@SpringBootTest vs @DataJpaTest</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Annotation</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Scope</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@SpringBootTest</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full application context</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">End-to-end testing of complete system</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@DataJpaTest</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Only JPA repositories</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Testing data access layer only</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@WebMvcTest</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Only web layer (controllers)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Testing controllers without full context</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@DataRedisTest</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Only Redis repositories</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Testing Redis-based data access</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Writing Integration Tests</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To create an effective integration test in Spring Boot:
              </p>
              
              <ol>
                <li>Add <code>spring-boot-starter-test</code> dependency</li>
                <li>Use <code>@SpringBootTest</code> annotation</li>
                <li>Inject required dependencies via <code>@Autowired</code></li>
                <li>Use <code>@DataJpaTest</code> or <code>@WebMvcTest</code> for focused testing</li>
                <li>Utilize <code>MockMvc</code> for simulating HTTP requests</li>
              </ol>
              
              <h3>Basic Test Class:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceIntegrationTest {
    @Autowired
    private UserService userService;

    @Test
    public void testUserCreation() {
        User user = new User("John Doe", "john@example.com");
        User saved = userService.save(user);
        assertNotNull(saved.getId());
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using MockMvc for Web Tests</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                For testing web layers, Spring provides <code>MockMvc</code> to simulate HTTP requests without starting a real server.
              </p>
              
              <h3>Example Usage:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RunWith(SpringRunner.class)
@WebAppConfiguration
@SpringBootTest
public class UserControllerIntegrationTest {
    @Autowired
    private WebApplicationContext webContext;
    
    private MockMvc mockMvc;
    
    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.webContext).build();
    }

    @Test
    public void testGetUserById() throws Exception {
        mockMvc.perform(get("/api/users/1"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("John"));
    }
}`}
              </pre>
              
              <p>
                This approach lets you test controller behavior, response codes, JSON output, and security rules.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Test Scope</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use focused annotations like @DataJpaTest when possible</li>
                    <li>Avoid loading unnecessary beans</li>
                    <li>Keep tests isolated to one concern per test class</li>
                    <li>Use @DirtiesContext after modifying global state</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Seed test data before each test</li>
                    <li>Use transactions to roll back changes</li>
                    <li>Clean up after test execution</li>
                    <li>Use Flyway/Liquibase for consistent schema</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Run integration tests in separate CI/CD stage</li>
                    <li>Use embedded databases for faster feedback</li>
                    <li>Reuse test containers across runs</li>
                    <li>Cache test artifacts where appropriate</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security & CI</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Enable security in integration tests when needed</li>
                    <li>Use mock authentication for protected routes</li>
                    <li>Fail build if integration tests fail</li>
                    <li>Include coverage reports in CI pipeline</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Integration Test</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserIntegrationTest.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@RunWith(SpringRunner.class)
@SpringBootTest
public class UserIntegrationTest {
    @Autowired
    private UserRepository userRepository;

    @Test
    public void testSaveAndFindUser() {
        User user = new User("Jane", "jane@example.com");
        userRepository.save(user);

        Optional<User> found = userRepository.findById(user.getId());
        assertTrue(found.isPresent());
        assertEquals("jane@example.com", found.get().getEmail());
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Web Layer Test with MockMvc</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserControllerIntegrationTest.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerIntegrationTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testGetUser() throws Exception {
        mockMvc.perform(get("/api/users/1"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("John Doe"));
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
                  <CardTitle>Exercise 1: Basic Controller Integration Test</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a simple REST API with User entity and repository</li>
                    <li>Implement a controller with CRUD endpoints</li>
                    <li>Write integration tests for each endpoint</li>
                    <li>Use MockMvc to simulate HTTP requests</li>
                    <li>Verify JSON responses and status codes</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Full Stack Integration Test</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create domain model with associations</li>
                    <li>Implement service layer with business logic</li>
                    <li>Expose REST endpoints for the service</li>
                    <li>Write tests that span controller → service → repository → DB</li>
                    <li>Verify correct behavior across all layers</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Transactional Data Testing</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Implement a service with transactional methods</li>
                    <li>Write integration tests that modify multiple tables</li>
                    <li>Verify that changes are committed or rolled back correctly</li>
                    <li>Use embedded database for test environment</li>
                    <li>Automate test execution in CI/CD</li>
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
                        Spring Boot Testing Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/test/web/servlet/MockMvc.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        MockMvc API Docs
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
                        href="https://www.baeldung.com/spring-boot-testing"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Boot Testing Guide
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
                        href="/modules/testing/fundamentals/configuration"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Test Configuration Module
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
          <Link href="/modules/testing/fundamentals/configuration">← Test Configuration</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/testing/fundamentals/junit">Next: JUnit →</Link>
        </Button>
      </div>
    </div>
  )
}
