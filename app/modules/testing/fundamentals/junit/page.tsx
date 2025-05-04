import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function JUnitModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">JUnit</h1>
          <Badge>Module 6.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to write unit tests in Spring Boot using JUnit 5
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
            <h2 className="text-2xl font-bold tracking-tight">What is JUnit?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                JUnit is the most popular testing framework for Java applications. It provides annotations, assertions,
                and test runners that make it easy to write and execute unit tests.
              </p>
              
              <p>Key features of JUnit:</p>
              <ul>
                <li><strong>Annotations:</strong> @Test, @BeforeEach, @AfterEach, @Disabled, etc.</li>
                <li><strong>Assertions:</strong> Methods to verify expected outcomes</li>
                <li><strong>Test Runners:</strong> Support for parameterized tests and custom runners</li>
                <li><strong>Extensions Model:</strong> Powerful extension model in JUnit 5</li>
              </ul>
              
              <p>
                In Spring Boot, JUnit is part of the <code>spring-boot-starter-test</code> dependency and works seamlessly
                with other tools like Mockito and AssertJ.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">JUnit 5 vs JUnit 4</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Feature</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">JUnit 4</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">JUnit 5</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@Test Annotation</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">From org.junit</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">From org.junit.jupiter.api</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Before / After</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">@Before, @After</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">@BeforeEach, @AfterEach</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Assumptions</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limited support</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Improved assumptions API</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Parameterized Tests</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Requires separate runner</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Native support via @ParameterizedTest</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Extension Model</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Uses inheritance-based runners</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Modular extension model</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic JUnit Annotations</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                JUnit provides several annotations that help structure your tests effectively:
              </p>
              
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Annotation</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@Test</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Marks a method as a test case</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@BeforeEach</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Runs before each test method</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@AfterEach</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Runs after each test method</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@BeforeAll</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Runs once before all test methods</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@AfterAll</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Runs once after all test methods</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@Disabled</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Skips execution of a test</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Writing Unit Tests in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To create effective unit tests in Spring Boot, follow these steps:
              </p>
              
              <ol>
                <li>Add JUnit dependency (included in <code>spring-boot-starter-test</code>)</li>
                <li>Create a test class under <code>src/test/java/...</code></li>
                <li>Annotate class with <code>@RunWith(SpringRunner.class)</code> (for Spring context)</li>
                <li>Use <code>@SpringBootTest</code> or layer-specific tests like <code>@WebMvcTest</code>, <code>@DataJpaTest</code></li>
                <li>Write test methods annotated with <code>@Test</code></li>
              </ol>
              
              <h3>Example Test Class:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {
    @Autowired
    private UserService userService;

    @Test
    public void testFindUserById() {
        User user = userService.findById(1L);
        assertNotNull(user);
        assertEquals("John Doe", user.getName());
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using Assertions</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Standard JUnit Assertions</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Test
public void testUserCreation() {
    User user = new User("Alice", "alice@example.com");
    
    assertNotNull(user);
    assertEquals("Alice", user.getName());
    assertTrue(user.getEmail().contains("@"));
    assertFalse(user.isBlocked());
    assertInstanceOf(User.class, user);
    assertSame(user, user); // Reference equality
}`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>AssertJ Fluent Assertions</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Test
public void testUserEmailValidation() {
    User user = new User("Bob", "bob@example.com");
    
    assertThat(user)
        .isNotNull()
        .hasFieldOrPropertyWithValue("email", "bob@example.com")
        .extracting("name").isEqualTo("Bob");
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for JUnit Testing</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Test Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use descriptive test method names (e.g., <code>shouldReturnUserWhenIdIsProvided</code>)</li>
                    <li>Keep tests small and focused on one behavior</li>
                    <li>Use AAA pattern: Arrange, Act, Assert</li>
                    <li>Group related tests in classes by component</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance & Maintainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Avoid excessive setup/teardown logic</li>
                    <li>Don’t share state between tests</li>
                    <li>Fail fast — don't continue after first assertion fails</li>
                    <li>Refactor common setup into helper methods</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spring-Specific Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use @SpringBootTest for full context tests</li>
                    <li>Use @WebMvcTest for controller layer only</li>
                    <li>Use @DataJpaTest for repository layer only</li>
                    <li>Combine with @MockBean and @SpyBean for mocking dependencies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Continuous Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Run tests automatically in CI/CD pipeline</li>
                    <li>Fail build if any test fails</li>
                    <li>Include coverage reports in build output</li>
                    <li>Use tagging to run subsets of tests (smoke, regression)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Unit Test Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserUnitTest.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UserUnitTest {
    private UserService userService;

    @BeforeEach
    void setUp() {
        userService = new UserService();
    }

    @Test
    void testValidEmail() {
        assertTrue(userService.isValidEmail("john@example.com"));
    }

    @Test
    void testInvalidEmail() {
        assertFalse(userService.isValidEmail("invalid-email"));
    }

    @Test
    void testNullEmailThrowsException() {
        assertThrows(IllegalArgumentException.class, () -> {
            userService.isValidEmail(null);
        });
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Integration Test Example</h2>
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
    public void testGetUserEndpoint() throws Exception {
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
                  <CardTitle>Exercise 1: Write Simple Unit Tests</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service with basic business logic</li>
                    <li>Implement 3–5 test cases using JUnit 5</li>
                    <li>Use @BeforeEach to set up common test data</li>
                    <li>Verify correct behavior with assert statements</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Add Parameterized Tests</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a utility class with a single public method</li>
                    <li>Use @ParameterizedTest to test multiple inputs</li>
                    <li>Provide arguments using @ValueSource or @CsvSource</li>
                    <li>Verify expected outputs for each input</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Implement Custom Conditions</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service with conditional behavior</li>
                    <li>Implement tests with assumptions using @EnabledIf</li>
                    <li>Use environment variables to control test execution</li>
                    <li>Verify that tests run only when conditions are met</li>
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
                        href="https://junit.org/junit5/docs/current/user-guide/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        JUnit 5 User Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/test/context/junit4/SpringRunner.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        SpringRunner Javadoc
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
                        href="https://www.amazon.com/JUnit-Tests-John-Ferguson-Smart/dp/193518250X"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        JUnit in Action by John Ferguson Smart
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Effective-Testing-Java-Developers-Effective/dp/1617295470"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Effective Unit Testing by Lasse Koskela
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
                        href="https://www.baeldung.com/junit"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Introduction to JUnit 5
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/junit-5/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Mastering JUnit 5
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
          <Link href="/modules/testing/fundamentals/integration">← Integration</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/testing/fundamentals/mockito">Next: Mockito →</Link>
        </Button>
      </div>
    </div>
  )
}
