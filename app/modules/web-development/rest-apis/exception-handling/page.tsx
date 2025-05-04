import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RestExceptionHandlingModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">REST API Exception Handling</h1>
          <Badge>Module 4.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to handle exceptions effectively in Spring Boot REST APIs using @ControllerAdvice and @ExceptionHandler
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
            <h2 className="text-2xl font-bold tracking-tight">Why Exception Handling Matters in REST APIs</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Proper exception handling is crucial in REST APIs to provide meaningful error messages,
                maintain client compatibility, and ensure predictable behavior when things go wrong.
              </p>
              
              <p>Without proper handling, clients may receive:</p>
              <ul>
                <li>Unreadable stack traces</li>
                <li>Inconsistent status codes</li>
                <li>Missing error details</li>
                <li>Potentially sensitive information</li>
              </ul>
              
              <p>
                In Spring Boot, you can implement centralized exception handling using <code>@RestControllerAdvice</code>,
                which combines <code>@ControllerAdvice</code> and <code>@ResponseBody</code>.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common REST API Exceptions</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Exception Type</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">HTTP Status</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ResourceNotFoundException</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>404 Not Found</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">When requested resource doesn't exist</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>MethodArgumentNotValidException</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>400 Bad Request</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">When validation fails</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ConstraintViolationException</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>400 Bad Request</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">JSR-380 bean validation errors</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>HttpMessageNotReadableException</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>400 Bad Request</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Malformed JSON/XML input</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>AccessDeniedException</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>403 Forbidden</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">User lacks permissions</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Types of Exception Handling Approaches</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Local Exception Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Handle exceptions within controller methods</li>
                    <li>Use <code>@ExceptionHandler</code> annotations</li>
                    <li>Suitable for controller-specific errors</li>
                    <li>Cannot share across controllers</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Global Exception Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Use <code>@RestControllerAdvice</code> class</li>
                    <li>Centralize all exception handling</li>
                    <li>Share logic across all controllers</li>
                    <li>Supports custom and built-in exceptions</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>ResponseEntityExceptionHandler</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Spring's base class for handling exceptions</li>
                    <li>Override methods like <code>handleMethodArgumentNotValid()</code></li>
                    <li>Provides access to HTTP status and headers</li>
                    <li>Works well with global advice</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>ProblemDetails / RFC 7807</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Standardized error response format</li>
                    <li>Supports type, title, status, detail</li>
                    <li>Improves client-side error parsing</li>
                    <li>Spring Boot supports this natively</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing Global Exception Handling</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement global exception handling in Spring Boot:
              </p>
              
              <h3>Create Error Response DTO:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse {
    private int statusCode;
    private String message;
    private String timestamp;
}`}
              </pre>
              
              <h3>Global Exception Handler:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleResourceNotFound() {
        ErrorResponse error = new ErrorResponse(404, "Resource not found", LocalDateTime.now().toString());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}`}
              </pre>
              
              <h3>Register in Controller (Optional):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RestController
@RequestMapping("/api/users")
public class UserController {
    // Your controller code
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Built-In Exception Handlers</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Exception</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mapped To</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>NoHandlerFoundException</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">404 Not Found</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Endpoint does not exist</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>HttpMediaTypeNotSupportedException</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">415 Unsupported Media Type</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Client sends unsupported content type</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>HttpRequestMethodNotSupportedException</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">405 Method Not Allowed</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Invalid HTTP method for endpoint</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>HttpMessageNotReadableException</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">400 Bad Request</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Malformed JSON or invalid request body</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>MethodArgumentNotValidException</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">400 Bad Request</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Validation failure on request data</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for Exception Handling</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Implementation Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Always use <code>@RestControllerAdvice</code> for global handling</li>
                    <li>Extend <code>ResponseEntityExceptionHandler</code> for built-in support</li>
                    <li>Log exceptions for debugging before returning</li>
                    <li>Return consistent error structure across all endpoints</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Response Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Include error message and code</li>
                    <li>Add timestamp for debugging</li>
                    <li>Provide unique error IDs for tracing</li>
                    <li>Support field-level validation errors</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never expose stack traces to clients</li>
                    <li>Avoid revealing internal system details</li>
                    <li>Sanitize error messages for production</li>
                    <li>Log full error internally but hide from clients</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Write tests for each exception case</li>
                    <li>Verify correct status codes are returned</li>
                    <li>Monitor error rates and types</li>
                    <li>Implement alerts for critical failures</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Custom Validation Error Example</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                For validation errors, consider returning detailed field-level errors:
              </p>
              
              <h3>Error Detail Class:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Data
@NoArgsConstructor
@AllArgsConstructor
public class FieldError {
    private String field;
    private String message;
    private String rejectedValue;
}`}
              </pre>
              
              <h3>Validation Advice:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@RestControllerAdvice
public class ValidationHandler {
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public List<FieldError> handleValidationErrors(MethodArgumentNotValidException ex) {
        return ex.getBindingResult()
                 .getAllErrors()
                 .stream()
                 .map(error -> new FieldError(
                     ((FieldError) error).getField(),
                     error.getDefaultMessage(),
                     ((FieldError) error).getRejectedValue()))
                 .collect(Collectors.toList());
    }
}`}
              </pre>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Global Exception Handler</h2>
            <Card>
              <CardHeader>
                <CardTitle>GlobalExceptionHandler.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleResourceNotFound() {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Resource not found");
    }
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGenericError() {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal server error");
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Structured Error Response</h2>
            <Card>
              <CardHeader>
                <CardTitle>ErrorResponse.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse {
    private int statusCode;
    private String message;
    private String errorId;
    private String timestamp;`}
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
                  <CardTitle>Exercise 1: Basic Global Handler</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Spring Boot app with Web and Lombok dependencies</li>
                    <li>Define custom exceptions (e.g., UserNotFoundException)</li>
                    <li>Implement @RestControllerAdvice class</li>
                    <li>Test error responses using Postman or curl</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Validation Errors</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create model with validation constraints</li>
                    <li>Add @Valid to controller method parameters</li>
                    <li>Implement handler for MethodArgumentNotValidException</li>
                    <li>Return field-level error messages</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Custom Error Structure</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Design standardized error response object</li>
                    <li>Include status code, message, timestamp, and metadata</li>
                    <li>Map Spring exceptions to your format</li>
                    <li>Support multiple error types with same structure</li>
                    <li>Log errors and generate correlation IDs</li>
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
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RestControllerAdvice.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring RESTControllerAdvice Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/ExceptionHandler.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring ExceptionHandler Docs
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
                        href="https://www.amazon.com/Spring-Security-Cookbook-Gopal-Dahale/dp/1787780196"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Security Cookbook by Gopal Dahale
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Microservices-Spring-Boot-Rajesh-Ojha/dp/1789535855"
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
                        href="https://www.baeldung.com/exception-handling-for-rest-with-spring"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Exception Handling in Spring REST APIs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-boot-exception-handling/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Spring Boot Exception Handling Guide
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
          <Link href="/modules/web-development/rest-apis/controllers">← Controllers</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/web-development/rest-apis/request-mapping">Next: Request Mapping →</Link>
        </Button>
      </div>
    </div>
  )
}
