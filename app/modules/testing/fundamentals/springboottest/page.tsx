import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SpringBootTestModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Boot Test</h1>
          <Badge>Module 6.5</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to use Spring Boot's test support for comprehensive testing of your application
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
            <h2 className="text-2xl font-bold tracking-tight">What is Spring Boot Test?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The <code>spring-boot-starter-test</code> provides a set of convenient utilities for testing Spring Boot applications.
                It includes JUnit, Mockito, Spring Test, AssertJ, and JSONPath, allowing you to write unit and integration tests easily.
              </p>
              
              <p>Key features of Spring Boot Test:</p>
              <ul>
                <li><strong>@SpringBootTest:</strong> Loads full application context</li>
                <li><strong>@WebMvcTest:</strong> Tests only web layer (controllers)</li>
                <li><strong>@DataJpaTest:</strong> Tests repository layer with in-memory database</li>
                <li><strong>@MockBean:</strong> Adds mocks to the Spring context</li>
                <li><strong>@DataRedisTest:</strong> For Redis-based data access tests</li>
              </ul>
              
              <p>
                These annotations help you control which parts of your application are loaded during testing, improving performance
                and reducing dependencies.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Testing Annotations in Spring Boot</h2>
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
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">End-to-end integration testing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@WebMvcTest</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Only controller layer</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Controller logic and request handling</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@DataJpaTest</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Only JPA repositories</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Database interactions and schema management</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@DataRedisTest</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Only Redis repositories</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Testing Redis-backed services</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@RestClientTest</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">REST clients only</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Testing external API calls</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using @SpringBootTest</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                <code>@SpringBootTest</code> loads the complete application context, making it ideal for integration testing.
              </p>
              
              <h3>Example Usage:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceIntegrationTest {
    @Autowired
    private UserService userService;

    @Test
    public void testUserCreation() {
        User user = new User("Alice", "alice@example.com");
        User saved = userService.save(user);
        
        assertNotNull(saved.getId());
        assertEquals("Alice", saved.getName());
    }
}`}
              </pre>
              
              <p>
                This approach is best used when you need to test multiple layers together, such as controllers, services, and repositories.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">@WebMvcTest for Controllers</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Use <code>@WebMvcTest</code> to test only the web layer without loading the entire application context.
              </p>
              
              <h3>Example Controller Test:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    public void testGetUserById() throws Exception {
        User user = new User(1L, "John Doe", "john@example.com");
        when(userService.findById(1L)).thenReturn(user);
        
        mockMvc.perform(get("/api/users/1"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("John Doe"));
    }
}`}
              </pre>
              
              <p>
                This helps keep controller tests fast and focused by mocking other layers.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">@DataJpaTest for Repositories</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Use <code>@DataJpaTest</code> to focus on persistence layer testing. It disables full auto-configuration
                and applies only those relevant to JPA.
              </p>
              
              <h3>Example Repository Test:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RunWith(SpringRunner.class)
@DataJpaTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    @Test
    public void testSaveAndFindUser() {
        User user = new User("Bob", "bob@example.com");
        userRepository.save(user);
        
        Optional<User> found = userRepository.findById(user.getId());
        assertTrue(found.isPresent());
        assertEquals("bob@example.com", found.get().getEmail());
    }
}`}
              </pre>
              
              <p>
                This annotation is perfect for testing ORM mappings, query methods, and schema changes.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Spring Boot Testing</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Test Scope & Speed</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use the most specific test annotation possible</li>
                    <li>Avoid loading unnecessary beans</li>
                    <li>Keep tests small and focused</li>
                    <li>Use embedded databases where appropriate</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Seed database with known test data</li>
                    <li>Use transactional boundaries to roll back changes</li>
                    <li>Clean up after each test</li>
                    <li>Use Flyway or Liquibase for versioned schema</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mocking Dependencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use @MockBean to replace beans in the context</li>
                    <li>Combine with Mockito for method stubbing</li>
                    <li>Verify method calls and interaction patterns</li>
                    <li>Simulate failure scenarios with doThrow()</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>CI/CD Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Run tests automatically in pipeline</li>
                    <li>Fail build if any test fails</li>
                    <li>Generate coverage reports</li>
                    <li>Tag and group tests by type (unit, integration, regression)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Spring Boot Test</h2>
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
    private UserService userService;

    @Test
    public void testUserCreation() {
        User user = new User("Jane", "jane@example.com");
        User saved = userService.save(user);
        
        assertNotNull(saved.getId());
        assertEquals("jane@example.com", saved.getEmail());
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Controller Layer Test</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserRestControllerTest.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private UserService userService;

    @Test
    public void testGetUserById() throws Exception {
        User user = new User(1L, "John", "john@example.com");
        when(userService.findById(1L)).thenReturn(user);
        
        mockMvc.perform(get("/api/users/1"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("John"));
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
                  <CardTitle>Exercise 1: Basic Integration Test</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with web and data JPA dependencies</li>
                    <li>Add <code>spring-boot-starter-test</code> to your build file</li>
                    <li>Implement a domain model and repository</li>
                    <li>Write an integration test that uses <code>@SpringBootTest</code></li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Web Layer Test</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a REST controller with CRUD endpoints</li>
                    <li>Use <code>@WebMvcTest</code> to test controller behavior</li>
                    <li>Mock service dependencies using <code>@MockBean</code></li>
                    <li>Verify response codes and JSON output</li>
                    <li>Test error handling and validation</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Persistence Layer Test</CardTitle>
                  <CardDescription>Advanced level</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a JPA entity with relationships</li>
                    <li>Implement repository with custom queries</li>
                    <li>Write tests using <code>@DataJpaTest</code></li>
                    <li>Test query methods and ORM mappings</li>
                    <li>Validate database constraints and indexes</li>
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
                        href="/modules/testing/fundamentals/integration"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Integration Testing Module
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
          <Link href="/modules/testing/fundamentals/mockito">← Mockito</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/testing/fundamentals/configuration">Next: Test Configuration →</Link>
        </Button>
      </div>
    </div>
  )
}
