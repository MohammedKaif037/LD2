import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RestRequestMappingModule() {
  const id = "{id}";
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Request Mapping</h1>
          <Badge>Module 4.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to map HTTP requests to controller methods using @RequestMapping and related annotations
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
            <h2 className="text-2xl font-bold tracking-tight">What is Request Mapping?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Request mapping in Spring MVC and Spring WebFlux determines how HTTP requests are routed to controller methods.
                It allows developers to define which URL paths should be handled by which method, including support for different HTTP verbs,
                content types, and query parameters.
              </p>
              
              <p>Key request mapping annotations:</p>
              <ul>
                <li><code>@RequestMapping</code>: General-purpose mapping for any HTTP method</li>
                <li><code>@GetMapping</code>: Maps HTTP GET requests to handler methods</li>
                <li><code>@PostMapping</code>: Maps HTTP POST requests to handler methods</li>
                <li><code>@PutMapping</code>: Maps HTTP PUT requests to handler methods</li>
                <li><code>@DeleteMapping</code>: Maps HTTP DELETE requests to handler methods</li>
                <li><code>@PatchMapping</code>: Maps HTTP PATCH requests to handler methods</li>
              </ul>
              
              <p>
                These annotations make it easy to create RESTful APIs with clean, readable code that clearly expresses intent.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">HTTP Methods & Status Codes</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Method</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Common Response</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>GET</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Retrieve resource(s)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">200 OK</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>POST</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Create new resource</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">201 Created</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>PUT</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Update existing resource</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">200 OK / 204 No Content</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>DELETE</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Remove resource</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">204 No Content</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>PATCH</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Partial update of resource</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">200 OK / 204 No Content</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use Request Mapping?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Consistent API Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Maps URLs to Java methods explicitly</li>
                    <li>Supports RESTful naming conventions</li>
                    <li>Enforces predictable routing behavior</li>
                    <li>Makes API structure clear and maintainable</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Flexibility & Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Supports path variables and regex</li>
                    <li>Allows custom headers and content types</li>
                    <li>Can restrict methods by HTTP verb</li>
                    <li>Supports conditional mappings</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Reduces boilerplate routing code</li>
                    <li>Improves readability and maintainability</li>
                    <li>Supports caching through ETag header</li>
                    <li>Works well with interceptors and filters</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Debugging</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Easy to test with MockMvc</li>
                    <li>Clear mapping improves error messages</li>
                    <li>Supports documentation tools like Swagger</li>
                    <li>Helps identify conflicting routes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing Request Mapping in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement request mapping in Spring Boot:
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

    @GetMapping("/${id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(new UserResponse(user));
    }
}`}
              </pre>
              
              <h3>Conditional Mapping:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@PostMapping(path = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
public ResponseEntity<Void> createUser(@RequestBody UserRequest request) {
    User created = userService.create(request.toUser());
    return ResponseEntity.created(URI.create("/api/users/" + created.getId())).build();
}`}
              </pre>
              
              <h3>Regex-Based Path Variables:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@GetMapping("/{id:\\d+}")
public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
    // Only matches numeric IDs
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Advanced Mapping Techniques</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Technique</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Path Variables</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Capture parts of URL as method arguments</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>@GetMapping("/${id}")</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Query Parameters</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Extract key-value pairs from URL query string</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>@GetMapping(params = "role=admin")</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Headers</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Map based on presence or value of HTTP headers</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>@PostMapping(headers = "X-API-Version=2")</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Consumes / Produces</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Control request/response media types</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Custom Conditions</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Define custom logic for request mapping</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>@RequestMapping(method = RequestMethod.GET, path = "/users", params = "version=2")</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for Request Mapping</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>URL Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use plural nouns for resources (e.g., /users)</li>
                    <li>Nest resources when needed (e.g., /users/123/orders)</li>
                    <li>Avoid versioned URLs if possible; use Accept headers instead</li>
                    <li>Use hyphens for multi-word paths (e.g., /user-profiles)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>HTTP Method Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use GET for retrieving data</li>
                    <li>Use POST for creating resources</li>
                    <li>Use PUT/PATCH for updates</li>
                    <li>Use DELETE for removing resources</li>
                    <li>Use HEAD/OPTIONS for metadata operations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Always validate path variables</li>
                    <li>Sanitize input before processing</li>
                    <li>Log suspicious requests for auditing</li>
                    <li>Prevent injection attacks through validation</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use precise mapping to avoid conflicts</li>
                    <li>Minimize work inside mapping conditions</li>
                    <li>Cache frequent route lookups where appropriate</li>
                    <li>Optimize pattern matching performance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic CRUD Mappings</h2>
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

    @GetMapping("/${id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(new UserResponse(user));
    }

    @PostMapping
    public ResponseEntity<Void> createUser(@RequestBody UserRequest request) {
        User created = userService.create(request.toUser());
        return ResponseEntity.created(URI.create("/api/users/" + created.getId())).build();
    }

    @PutMapping("/${id}")
    public ResponseEntity<Void> updateUser(
        @PathVariable Long id,
        @RequestBody UserRequest request) {
        
        userService.update(id, request.toUser());
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/${id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Conditional Mappings</h2>
            <Card>
              <CardHeader>
                <CardTitle>ProductController.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@RestController
@RequestMapping(path = "/api/products", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService service) {
        this.productService = service;
    }

    @GetMapping("/${id}")
    public ResponseEntity<ProductResponse> getProductById(@PathVariable String id) {
        Product product = productService.findById(id);
        return ResponseEntity.ok(new ProductResponse(product));
    }

    @GetMapping(params = "category")
    public ResponseEntity<List<Product>> getProductsByCategory(@RequestParam String category) {
        List<Product> products = productService.findByCategory(category);
        return ResponseEntity.ok(products);
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
                  <CardTitle>Exercise 1: Basic Route Mapping</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create controller with all standard HTTP method mappings</li>
                    <li>Test each endpoint with Postman or curl</li>
                    <li>Verify correct status codes are returned</li>
                    <li>Add validation for required fields</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Query Parameter Routing</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Implement search endpoint with multiple query parameters</li>
                    <li>Map different combinations to separate methods</li>
                    <li>Test with various parameter permutations</li>
                    <li>Ensure correct method is called each time</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Custom Condition Mapping</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create custom <code>RequestCondition</code> implementation</li>
                    <li>Map endpoints based on custom logic</li>
                    <li>Support mapping by custom headers</li>
                    <li>Test with real clients and verify behavior</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Additional Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Official Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestMapping.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Framework RequestMapping Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/GetMapping.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Framework GetMapping Docs
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
                        href="https://www.baeldung.com/spring-requestmapping"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Understanding RequestMapping
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-requestmapping/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Advanced Request Mapping Guide
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
                        href="/modules/web-development/rest-apis/request-response"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Request-Response Module
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
          <Link href="/modules/web-development/rest-apis/exception-handling">← Exception Handling</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/web-development/rest-apis/request-response">Next: Request-Response →</Link>
        </Button>
      </div>
    </div>
  )
}
