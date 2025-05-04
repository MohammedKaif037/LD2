import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RestRequestResponseModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Request & Response</h1>
          <Badge>Module 4.5</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to handle HTTP requests and responses in Spring Boot REST APIs using @RequestBody, @ResponseBody, and ResponseEntity
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
            <h2 className="text-2xl font-bold tracking-tight">Understanding HTTP Requests and Responses</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                In REST API development, understanding how to handle HTTP requests and generate appropriate responses is crucial.
                Spring Boot provides several annotations and classes that make it easy to work with HTTP methods,
                headers, body content, and status codes.
              </p>
              
              <p>Key request/response components:</p>
              <ul>
                <li><code>@RequestBody</code>: Maps HTTP request body to Java objects</li>
                <li><code>@ResponseBody</code>: Maps Java objects to HTTP response body</li>
                <li><code>@PathVariable</code>: Extract values from URI path</li>
                <li><code>@RequestParam</code>: Extract query parameters or form fields</li>
                <li><code>HttpServletRequest</code>: Low-level access to request object</li>
                <li><code>HttpServletResponse</code>: Low-level access to response object</li>
                <li><code>ResponseEntity</code>: Builder-style API for full response control</li>
              </ul>
              
              <p>
                These tools allow developers to build robust RESTful services while maintaining clean code structure.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">HTTP Request Components</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Component</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@PathVariable</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Extract data from URL path</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>/api/users/{id}</code> → <code>@PathVariable Long id</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@RequestParam</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Read query string or form parameters</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>/api/users?role=admin</code> → <code>@RequestParam String role</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@RequestBody</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Map incoming JSON/XML to Java objects</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@PostMapping("/users") public void createUser(@RequestBody User user)</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@RequestHeader</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Read HTTP header values</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@RequestHeader("Accept-Language") String lang</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@CookieValue</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Access browser cookies</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@CookieValue("JSESSIONID") String sessionId</code></td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Handle Requests and Responses?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Predictable API Behavior</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Ensure clients receive expected format</li>
                    <li>Support multiple content types (JSON, XML)</li>
                    <li>Validate inputs before processing</li>
                    <li>Provide clear error messages</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Control serialization/deserialization</li>
                    <li>Use streaming for large responses</li>
                    <li>Implement caching strategies</li>
                    <li>Minimize unnecessary data transfer</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Sanitize input from request parameters</li>
                    <li>Validate payload before processing</li>
                    <li>Avoid exposing sensitive data in response</li>
                    <li>Log suspicious requests for auditing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Debugging</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Easily test with Postman or curl</li>
                    <li>MockMvc simplifies unit testing</li>
                    <li>Use HATEOAS links for discoverability</li>
                    <li>Document with OpenAPI/Swagger</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing Request/Response in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement effective request/response handling in Spring Boot:
              </p>
              
              <h3>Basic Controller Example:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService service) {
        this.userService = service;
    }

    @GetMapping("/{id}")
    public UserResponse getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        return new UserResponse(user);
    }
}`}
              </pre>
              
              <h3>Using ResponseEntity for Control:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@PostMapping
public ResponseEntity<Void> createUser(@RequestBody UserRequest request) {
    User created = userService.create(request.toUser());
    return ResponseEntity.created(URI.create("/api/users/" + created.getId())).build();
}`}
              </pre>
              
              <h3>Reading Headers and Cookies:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@GetMapping("/profile")
public ResponseEntity<UserProfile> getProfile(
    @RequestHeader("Authorization") String authHeader,
    @CookieValue("userPreferences") String preferences) {
    
    // Process header and cookie
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Common Request Types & Handling</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Request Type</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Spring Annotation</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>GET</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">@GetMapping</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Retrieve resource(s)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>POST</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">@PostMapping</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Create new resource</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>PUT</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">@PutMapping</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Replace existing resource</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>PATCH</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">@PatchMapping</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Update part of a resource</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>DELETE</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">@DeleteMapping</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Remove resource</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for Request/Response Handling</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Request Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Always validate request parameters</li>
                    <li>Use JSR-380 validation annotations</li>
                    <li>Return 400 Bad Request on invalid input</li>
                    <li>Log invalid requests for debugging</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Response Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use ResponseEntity for explicit control</li>
                    <li>Standardize success and error formats</li>
                    <li>Include metadata like pagination info</li>
                    <li>Support ETag and conditional responses</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Content Negotiation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Support multiple media types</li>
                    <li>Use Accept header for client preference</li>
                    <li>Set produces/consumes in controller</li>
                    <li>Use Jackson for JSON processing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never return raw exceptions to client</li>
                    <li>Use @ControllerAdvice for global errors</li>
                    <li>Log full error internally</li>
                    <li>Return standardized error structure</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Request Handling</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserController.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService service) {
        this.userService = service;
    }

    @GetMapping("/{id}")
    public UserResponse getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        return new UserResponse(user);
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Structured Response Format</h2>
            <Card>
              <CardHeader>
                <CardTitle>ApiResponse.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponse<T> {
    private boolean success;
    private T data;
    private String message;
    private int statusCode;
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
                  <CardTitle>Exercise 1: Basic Request Mapping</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create controller with GET, POST, PUT, DELETE mappings</li>
                    <li>Test each endpoint with Postman or curl</li>
                    <li>Verify correct status codes are returned</li>
                    <li>Add logging to all methods</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Structured Response</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create generic ApiResponse wrapper class</li>
                    <li>Modify controller to use wrapper for all responses</li>
                    <li>Add timestamp and correlation ID to response</li>
                    <li>Test with valid and invalid inputs</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Content Negotiation</CardTitle>
                <CardHeader>
                  <CardTitle>Advanced level</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Implement support for JSON and XML responses</li>
                    <li>Use Accept header to switch formats</li>
                    <li>Test with different Accept values</li>
                    <li>Handle unsupported formats gracefully</li>
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
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestBody.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring RequestBody Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/ResponseBody.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring ResponseBody Docs
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
                        href="https://www.amazon.com/Microservices-Spring-Microservice-applications-Rajesh-Ojha/dp/1789535855"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Microservices with Spring Boot by Rajesh Ojha
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
                        href="https://www.baeldung.com/spring-request-response-body"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: RequestBody and ResponseBody Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-controller/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Building REST Controllers in Spring
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
                        href="/modules/web-development/rest-apis/best-practices"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        REST API Best Practices Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/web-development/rest-apis/controllers"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Controllers Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/web-development/rest-apis/exception-handling"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Exception Handling Module
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
          <Link href="/modules/web-development/rest-apis/request-mapping">← Request Mapping</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/web-development/rest-apis/best-practices">Next: REST API Best Practices →</Link>
        </Button>
      </div>
    </div>
  )
}
