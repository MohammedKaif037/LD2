import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function MockitoModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Mockito</h1>
          <Badge>Module 6.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to use Mockito for creating mock objects in Spring Boot unit tests
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
            <h2 className="text-2xl font-bold tracking-tight">What is Mockito?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Mockito is a popular mocking framework for Java that makes it easy to create and configure mock objects.
                It allows developers to simulate the behavior of real objects without relying on external systems,
                making unit testing more efficient and reliable.
              </p>
              
              <p>Key features of Mockito:</p>
              <ul>
                <li><strong>Mock creation:</strong> Create test doubles with minimal boilerplate</li>
                <li><strong>Stubbing:</strong> Define return values for methods during tests</li>
                <li><strong>Verification:</strong> Confirm method calls and interaction patterns</li>
                <li><strong>Argument matchers:</strong> Flexible matching for method arguments</li>
                <li><strong>Spying:</strong> Partial mocks for real objects</li>
              </ul>
              
              <p>
                In Spring Boot, Mockito integrates seamlessly with JUnit and Spring Test to allow clean, focused unit tests.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use Mocks in Testing?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Test Isolation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Mocks isolate code under test from external dependencies</li>
                    <li>Avoid hitting real databases or APIs during unit testing</li>
                    <li>Ensure consistent test results by controlling inputs</li>
                    <li>Make tests faster by avoiding slow I/O operations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Behavior Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Verify that specific methods are called</li>
                    <li>Check argument values passed to collaborators</li>
                    <li>Confirm number of interactions (once, at least once, never)</li>
                    <li>Test void methods by verifying side effects</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Focused Unit Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Create mocks instead of real services for unit tests</li>
                    <li>Use when testing logic that depends on external components</li>
                    <li>Reduce setup time and improve test execution speed</li>
                    <li>Simulate edge cases and error conditions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Integration with Spring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Works with @Mock and @InjectMocks annotations</li>
                    <li>Can be combined with @SpringBootTest for integration scenarios</li>
                    <li>Supports BDD-style syntax via <code>given()</code> and <code>willReturn()</code></li>
                    <li>Integrates well with AssertJ for fluent assertions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Core Mockito Concepts</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Concept</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@Mock</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Creates a mock object</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mocking dependencies in unit tests</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@InjectMocks</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Injects mocks into tested class</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Creating SUT (System Under Test) with mocks</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>when(...).thenReturn(...)</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Defines stubbed behavior</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Controlling return values</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>verify(...).method()</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Checks if a method was called</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Validating interactions between components</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@Spy</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Real object with partial mocking</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Testing behavior while controlling some methods</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using Mockito in Spring Tests</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To use Mockito in your Spring Boot tests:
              </p>
              
              <ol>
                <li>Add dependency (included in <code>spring-boot-starter-test</code>)</li>
                <li>Annotate test class with <code>@ExtendWith(MockitoExtension.class)</code></li>
                <li>Use <code>@Mock</code> for dependencies</li>
                <li>Use <code>@InjectMocks</code> for the class being tested</li>
              </ol>
              
              <h3>Basic Setup:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
    @Mock
    private UserRepository userRepository;
    
    @InjectMocks
    private UserService userService;
    
    @Test
    public void testFindUserById() {
        User user = new User(1L, "John Doe");
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        
        Optional<User> result = userService.findById(1L);
        assertTrue(result.isPresent());
        assertEquals("John Doe", result.get().getName());
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Advanced Mockito Features</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Argument Matchers</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`// Basic matching
when(repository.findByEmail(anyString())).thenReturn(mockUser);

// Argument capture
ArgumentCaptor<String> emailCaptor = ArgumentCaptor.forClass(String.class);
verify(service).sendEmail(emailCaptor.capture());
assertEquals("test@example.com", emailCaptor.getValue());`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Verification Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`// Basic verification
verify(repository).save(user);

// Verify call count
verify(repository, times(2)).save(user);
verify(repository, never()).deleteById(1L);`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exception Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`// Throw exception
when(repository.findById(999L)).thenThrow(new UserNotFoundException());

// Simulate checked exceptions
doThrow(new IOException()).when(fileService).readFile(anyString());`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spies & Partial Mocking</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Spy
private EmailService emailService;

// Only override this method
doReturn(false).when(emailService).isServerAvailable();

// Other methods will execute real code
assertTrue(emailService.sendEmail("test@example.com"));`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Mockito Usage</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Writing Effective Tests</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use mocks for external dependencies only</li>
                    <li>Prefer real objects when possible</li>
                    <li>Don't over-mock; keep tests realistic</li>
                    <li>Verify behavior, not just state</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mocking Patterns</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use @Mock and @InjectMocks together</li>
                    <li>Use BDDMockito for given/when/then style</li>
                    <li>Use verify() to confirm interactions</li>
                    <li>Use doThrow() for void method exceptions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Code Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Keep test data simple and readable</li>
                    <li>Don't reuse mocks across multiple tests</li>
                    <li>Use descriptive test names</li>
                    <li>Refactor common setup into helper methods</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use mocks instead of real services</li>
                    <li>Avoid complex setup in BeforeEach</li>
                    <li>Run tests in parallel where appropriate</li>
                    <li>Use lightweight test runners like MockitoExtension</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Mock Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserRepositoryTest.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@ExtendWith(MockitoExtension.class)
public class UserRepositoryTest {
    @Mock
    private UserRepository userRepository;
    
    @Test
    public void testFindUserById() {
        User user = new User(1L, "John Doe");
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        
        Optional<User> result = userRepository.findById(1L);
        assertTrue(result.isPresent());
        assertEquals("John Doe", result.get().getName());
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Injecting Mocks into Service</h2>
            <Card>
              <CardHeader>
                <CardTitle>EmailServiceTest.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@ExtendWith(MockitoExtension.class)
public class EmailServiceTest {
    @Mock
    private EmailClient emailClient;
    
    @InjectMocks
    private EmailService emailService;
    
    @Test
    public void testSendEmail() {
        // Given
        String recipient = "john@example.com";
        String content = "Welcome to our service!";
        
        // When
        boolean result = emailService.sendWelcomeEmail(recipient, content);
        
        // Then
        assertTrue(result);
        verify(emailClient).sendEmail(recipient, content);
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
                  <CardTitle>Exercise 1: Basic Mock Setup</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service with one external dependency</li>
                    <li>Write unit test with @Mock and @InjectMocks</li>
                    <li>Stub method return values using when().thenReturn()</li>
                    <li>Verify method calls on mocked dependency</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Exception Simulation</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service that handles failure scenarios</li>
                    <li>Use thenThrow() to simulate network failures</li>
                    <li>Test retry logic or fallback mechanisms</li>
                    <li>Verify proper exception handling</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Complex Interactions</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a service with multiple dependencies</li>
                    <li>Use mocks for all external services</li>
                    <li>Verify exact interaction order and count</li>
                    <li>Use ArgumentCaptor to validate passed parameters</li>
                    <li>Implement partial mocks using @Spy</li>
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
                        href="https://site.mockito.org/mockito-1/cheat-sheet-extensive.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Mockito Cheat Sheet
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Mockito API Docs
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
                        href="https://www.amazon.com/Mockito-Cookbook-Szczepanik/dp/178778017X"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Mockito Cookbook by Marcin Grzejszczak
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Learn-Mockito-Spring-Boot-testing/dp/178778017X"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Learn Mockito by Prabhat Kashyap
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
                        href="https://www.baeldung.com/mockito-series"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Mockito Series
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/mockito-junit-5/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Using Mockito with JUnit 5
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
                        href="/modules/testing/fundamentals/springboottest"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Boot Test Module
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
          <Link href="/modules/testing/fundamentals/junit">← JUnit</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/testing/fundamentals/springboottest">Next: Spring Boot Test →</Link>
        </Button>
      </div>
    </div>
  )
}
