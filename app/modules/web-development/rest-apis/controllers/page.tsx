import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RestControllersModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">REST API Controllers</h1>
          <Badge>Module 4.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to create RESTful controllers in Spring Boot using @RestController and related annotations
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
            <h2 className="text-2xl font-bold tracking-tight">What is a Controller in Spring MVC?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                In Spring MVC and Spring WebFlux, a controller is a class that handles incoming HTTP requests and returns responses.
                It forms the foundation of REST APIs by defining endpoints, request methods, and response formats.
              </p>
              
              <p>Key controller annotations:</p>
              <ul>
                <li><code>@Controller</code>: Traditional controller returning views</li>
                <li><code>@RestController</code>: Combines @Controller + @ResponseBody</li>
                <li><code>@RequestMapping</code>: Maps HTTP requests to handler methods</li>
                <li><code>@GetMapping</code>, <code>@PostMapping</code>, etc.: HTTP method-specific mappings</li>
                <li><code>@PathVariable</code>, <code>@RequestParam</code>, <code>@RequestBody</code>: Request data extraction</li>
              </ul>
              
              <p>
                The <code>@RestController</code> annotation is particularly useful for building RESTful web services,
                eliminating the need for <code>@ResponseBody</code> on every method.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Types of Controllers</h2>
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
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@Controller</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Returns view names</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Traditional server-rendered apps</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@RestController</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Returns JSON/XML directly</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Modern REST APIs and SPAs</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@ControllerAdvice</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Global controller for exceptions</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Centralized error handling</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@RequestMapping</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Maps HTTP methods manually</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Custom mapping logic</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>@CrossOrigin</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enables CORS for specific controllers</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Cross-origin API access</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use REST Controllers?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Modular Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Separate concerns by resource type</li>
                    <li>Keep business logic out of controllers</li>
                    <li>Organize endpoints logically</li>
                    <li>Support clean URL routing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Consistent Response Format</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Standardize JSON structure</li>
                    <li>Wrap responses in ApiResponse object</li>
                    <li>Ensure consistent status codes</li>
                    <li>Support versioning through headers</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Decouple from business logic</li>
                    <li>Inject dependencies via constructor</li>
                    <li>Mock services in unit tests</li>
                    <li>Write integration tests with MockMvc</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance & Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Minimize work in controllers</li>
                    <li>Use async processing where appropriate</li>
                    <li>Implement caching at service layer</li>
                    <li>Avoid blocking calls in reactive apps</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing Controllers in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement REST controllers in Spring Boot:
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
    public ResponseEntity<UserResponse> getUser(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(new UserResponse(user));
    }
}`}
              </pre>
              
              <h3>Using Request Mapping:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RestController
@RequestMapping(path = "/api/products", produces = MediaType.APPLICATION_JSON_VALUE)
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService service) {
        this.productService = service;
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable String id) {
        return productService.findById(id);
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Common Controller Patterns</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Pattern</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>CRUD Endpoints</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Create, Read, Update, Delete operations</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>GET /api/users</code>, 
                    <code>POST /api/users</code>,
                    <code>PUT /api/users/{id}</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Nested Resources</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Handle hierarchical relationships</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>GET /api/users/{userId}/orders</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Versioned APIs</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Support multiple API versions simultaneously</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>GET /api/v1/users</code>,
                    <code>GET /api/v2/users</code>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Filtering & Sorting</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Support query parameters for filtering</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>GET /api/users?role=admin&amp;sort=name</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for REST Controllers</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Design Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Keep controllers thin and focused</li>
                    <li>Use constructor injection for dependencies</li>
                    <li>Validate input before passing to service</li>
                    <li>Return standardized response format</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Throw exceptions rather than handle locally</li>
                    <li>Use @ControllerAdvice for global handling</li>
                    <li>Log errors for debugging</li>
                    <li>Return meaningful error messages to clients</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use MockMvc for unit testing</li>
                    <li>Test all edge cases and invalid inputs</li>
                    <li>Verify correct status codes are returned</li>
                    <li>Use @WebMvcTest for controller-only tests</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use ResponseEntity for explicit control</li>
                    <li>Implement pagination for large datasets</li>
                    <li>Use caching where appropriate</li>
                    <li>Optimize serialization/deserialization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic CRUD Controller</h2>
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
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        User user = userService.findById(id);
        return ResponseEntity.ok(new UserResponse(user));
    }

    @PostMapping
    public ResponseEntity<Void> createUser(@RequestBody UserRequest request) {
        User created = userService.create(request.toUser());
        return ResponseEntity.created(URI.create("/api/users/" + created.getId())).build();
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Nested Resource Controller</h2>
            <Card>
              <CardHeader>
                <CardTitle>OrderController.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    public OrderController(OrderService service) {
        this.orderService = service;
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<OrderResponse>> getOrdersByUser(@PathVariable Long userId) {
        List<Order> orders = orderService.findByUser(userId);
        return ResponseEntity.ok(OrderResponse.from(orders));
    }

    @PostMapping("/{orderId}/items")
    public ResponseEntity<Void> addItemToOrder(
        @PathVariable Long orderId,
        @RequestBody ItemRequest itemRequest) {
        
        orderService.addItem(orderId, itemRequest.toItem());
        return ResponseEntity.accepted().build();
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
                  <CardTitle>Exercise 1: Basic User Controller</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create User model with id, name, email</li>
                    <li>Implement basic CRUD controller</li>
                    <li>Add validation for required fields</li>
                    <li>Test with Postman or curl</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Versioned API Controller</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create v1 and v2 of a Product controller</li>
                    <li>Implement versioning using URL path</li>
                    <li>Support both versions simultaneously</li>
                    <li>Deprecate v1 after grace period</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Filterable Product Controller</CardTitle>
                  <CardDescription>Advanced level</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Product model with name, category, price</li>
                    <li>Implement filters via query parameters</li>
                    <li>Support sorting by price and name</li>
                    <li>Paginate results</li>
                    <li>Write integration tests for all scenarios</li>
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
                        Spring RESTController Javadoc
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestMapping.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        RequestMapping Docs
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
                        href="https://www.amazon.com/Microservices-Spring-Boot-Microservices-applications/dp/1789535855"
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
                        href="https://www.baeldung.com/spring-controller-vs-restcontroller"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Controller vs RestController
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
                        Reflectoring: Building REST Controllers
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
          <Link href="/modules/web-development/rest-apis/best-practices">← Best Practices</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/web-development/rest-apis/exception-handling">Next: Exception Handling →</Link>
        </Button>
      </div>
    </div>
  )
}
