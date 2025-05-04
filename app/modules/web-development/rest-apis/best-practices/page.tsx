import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RestApiBestPracticesModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">REST API Best Practices</h1>
          <Badge>Module 4.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to design and implement REST APIs following industry-standard best practices
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
            <h2 className="text-2xl font-bold tracking-tight">Why REST API Best Practices Matter</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Building robust REST APIs requires more than just returning JSON from endpoints.
                Following best practices ensures consistency, security, scalability, and ease of use across clients,
                services, and documentation tools.
              </p>
              
              <p>Key reasons to follow REST API best practices:</p>
              <ul>
                <li><strong>Consistency:</strong> Uniform resource naming and behavior</li>
                <li><strong>Security:</strong> Safe handling of authentication and sensitive data</li>
                <li><strong>Scalability:</strong> Designed for growth and performance</li>
                <li><strong>Error Handling:</strong> Clear and standardized responses</li>
                <li><strong>Documentation:</strong> Self-descriptive interfaces</li>
                <li><strong>Versioning:</strong> Smooth evolution without breaking changes</li>
              </ul>
              
              <p>
                In Spring Boot, these principles can be implemented through annotations like <code>@RestController</code>,
                <code>@RequestMapping</code>, and custom response wrappers.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common REST API Anti-Patterns</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Anti-Pattern</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Issue</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>GET /getUsers</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Verbs in URLs</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use nouns only: <code>GET /users</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>POST /updateUser</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Incorrect HTTP methods</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use PUT/PATCH for updates</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>200 OK</code> for all responses</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Incorrect status codes</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Return appropriate status codes (201, 400, 404, 500)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>application/xml</code> by default</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Legacy content types</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prefer JSON; set <code>Accept</code> header support</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>No pagination</code> for large datasets</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Performance issues</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Support pagination via query parameters</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Core REST API Design Principles</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Resource Naming</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Use plural nouns: <code>/users</code>, not <code>/user</code></li>
                    <li>Nest resources: <code>/users/123/orders</code></li>
                    <li>Avoid versioned URLs: Use <code>Accept</code> headers instead</li>
                    <li>Use hyphens for multi-word resources: <code>/user-profiles</code></li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>HTTP Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><code>GET</code>: Retrieve resources</li>
                    <li><code>POST</code>: Create new resources</li>
                    <li><code>PUT</code>: Replace existing resource</li>
                    <li><code>PATCH</code>: Update part of a resource</li>
                    <li><code>DELETE</code>: Remove a resource</li>
                    <li><code>OPTIONS</code>: Describe communication options</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Status Codes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><code>200 OK</code>: General success</li>
                    <li><code>201 Created</code>: Resource created</li>
                    <li><code>204 No Content</code>: Operation successful but no response body</li>
                    <li><code>400 Bad Request</code>: Client error</li>
                    <li><code>401 Unauthorized</code>: Authentication required</li>
                    <li><code>404 Not Found</code>: Resource does not exist</li>
                    <li><code>500 Internal Server Error</code>: Unexpected server failure</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Request & Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Use <code>Content-Type</code> header to indicate format</li>
                    <li>Support filtering with query parameters</li>
                    <li>Include <code>HATEOAS</code> links where appropriate</li>
                    <li>Return minimal but meaningful payloads</li>
                    <li>Provide <code>Location</code> header on creation</li>
                    <li>Use <code>If-Match</code> and <code>If-None-Match</code> for conditional requests</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Implementation Example</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement REST best practices in Spring Boot:
              </p>
              
              <h3>Use Standard Response Wrapper:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
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
              
              <h3>Controller Example:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@RestController
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService service) {
        this.userService = service;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<User>> getUser(@PathVariable Long id) {
        User user = userService.findById(id);
        ApiResponse<User> response = new ApiResponse<>(true, user, "Success", 200);
        return ResponseEntity.ok(response);
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">REST API Versioning Strategies</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Strategy</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>URL Versioning</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Version in URL path</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>GET /api/v1/users/{id}</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Query Parameter</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Version in query string</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>GET /api/users/{id}?version=1</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Custom Headers</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Version in request headers</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>X-API-Version: 1</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Content Negotiation</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Version via Accept header</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Accept: application/vnd.myapp.v1+json</code></td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Top 10 REST API Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Design & Structure</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm">
                    <li>Use nouns, not verbs in URLs</li>
                    <li>Use proper HTTP methods</li>
                    <li>Implement standard status codes</li>
                    <li>Support filtering and sorting</li>
                    <li>Use HATEOAS for discoverability</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance & Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm">
                    <li>Enable caching with ETag and Last-Modified</li>
                    <li>Implement rate limiting and throttling</li>
                    <li>Use HTTPS everywhere</li>
                    <li>Log and monitor API usage</li>
                    <li>Validate input thoroughly</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm">
                    <li>Always return descriptive error messages</li>
                    <li>Use structured error response format</li>
                    <li>Log errors for debugging and auditing</li>
                    <li>Support error codes and correlation IDs</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm">
                    <li>Document with OpenAPI/Swagger</li>
                    <li>Write comprehensive integration tests</li>
                    <li>Use contract testing (Spring Cloud Contract)</li>
                    <li>Monitor API usage and performance</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Standardized Response Format</h2>
            <Card>
              <CardHeader>
                <CardTitle>ApiResponse.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
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

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Error Response Handling</h2>
            <Card>
              <CardHeader>
                <CardTitle>GlobalExceptionHandler.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound() {
        ErrorResponse error = new ErrorResponse("Resource not found", 404);
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
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
                  <CardTitle>Exercise 1: RESTful Endpoint Design</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create User controller with CRUD operations</li>
                    <li>Use proper HTTP methods for each operation</li>
                    <li>Ensure correct status codes are returned</li>
                    <li>Test with Postman or curl</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Pagination Support</CardTitle>
                <CardHeader>
                  <CardTitle>Intermediate level</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Add pageable support to repository</li>
                    <li>Expose <code>?page=</code> and <code>?size=</code> parameters</li>
                    <li>Return metadata in response</li>
                    <li>Test with large dataset</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Versioned API Endpoints</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create v1 and v2 versions of an endpoint</li>
                    <li>Implement versioning using headers</li>
                    <li>Support both versions simultaneously</li>
                    <li>Deprecate v1 after grace period</li>
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
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RestController.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot REST Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://spring.io/projects/spring-webflux"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring WebFlux Reference
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
                        href="https://www.amazon.com/REST-API-Design-Handbook-ebook/dp/B004QRADEE"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        REST API Design Handbook by Mark Masse
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/RESTful-Web-Services-Restlet-Java/dp/1787780196"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        RESTful Web Services by Leonard Richardson
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
                        href="https://restfulapi.net/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        RESTful API Design Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/rest-api-best-practices"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: REST API Best Practices
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
                        href="/modules/web-development/rest-apis/controllers"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Controllers Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/web-development/rest-apis/request-response"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Request-Response Module
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
          <Link href="/modules/fundamentals/configuration/annotations">← Annotations</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/web-development/rest-apis/controllers">Next: Controllers →</Link>
        </Button>
      </div>
    </div>
  )
}
