import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CrudOperationsModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">CRUD Operations</h1>
          <Badge>Module 5.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement Create, Read, Update, and Delete operations in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">What is CRUD?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                CRUD stands for Create, Read, Update, and Delete – the four basic operations of persistent storage.
                In Spring Boot, these operations are commonly implemented using repositories backed by JPA or other persistence frameworks.
              </p>
              
              <p>The four CRUD operations:</p>
              <ul>
                <li><strong>Create:</strong> Add new records to the database</li>
                <li><strong>Read:</strong> Retrieve existing records from the database</li>
                <li><strong>Update:</strong> Modify existing records in the database</li>
                <li><strong>Delete:</strong> Remove records from the database</li>
              </ul>
              
              <p>
                These operations map directly to HTTP methods:
                <code>POST</code> (Create),
                <code>GET</code> (Read),
                <code>PUT/PATCH</code> (Update),
                <code>DELETE</code> (Delete).
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">CRUD Design Patterns</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Operation</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Create</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Insert new records into database</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">User registration, form submission</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Read</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Retrieve data from database</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Displaying data in UI or API response</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Update</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Modify existing records</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Profile updates, content editing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Delete</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Remove records from database</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Soft/hard delete of user data</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Implement CRUD?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Provides complete lifecycle control over domain entities</li>
                    <li>Enables standardization across services</li>
                    <li>Supports RESTful endpoint design</li>
                    <li>Simplifies integration with frontends</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance & Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Optimizes query patterns for efficiency</li>
                    <li>Supports pagination and filtering</li>
                    <li>Can be enhanced with caching layers</li>
                    <li>Works well with reactive databases</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Allows for fine-grained authorization</li>
                    <li>Supports audit logging for changes</li>
                    <li>Facilitates soft-delete patterns</li>
                    <li>Helps prevent unauthorized access</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Maintainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Easy to test with mocks and stubs</li>
                    <li>Encapsulates database logic</li>
                    <li>Improves separation of concerns</li>
                    <li>Supports transaction management</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing CRUD in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement CRUD operations in Spring Boot:
              </p>
              
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>`}
              </pre>
              
              <h3>Entity Class:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private BigDecimal price;
}`}
              </pre>
              
              <h3>Repository Interface:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContaining(String keyword);
}`}
              </pre>
              
              <h3>Service Layer:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repo) {
        this.repository = repo;
    }

    public Product createProduct(Product product) {
        return repository.save(product);
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Common CRUD Anti-Patterns</h2>
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
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Direct DB Access in Controller</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Tight coupling between layers</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Move all DB logic to service layer</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Missing Validation</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Invalid or malicious data stored</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Validate input before saving</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Hardcoded Queries</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Difficult to maintain and extend</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Spring Data JPA method naming</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>No Pagination</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Performance issues with large datasets</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Pageable and PagedResponse</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Missing Transaction Boundaries</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data inconsistency and race conditions</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use @Transactional annotations</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for CRUD Implementation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Design Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Keep controllers thin and services rich</li>
                    <li>Use DTOs for request/response objects</li>
                    <li>Always validate input before persisting</li>
                    <li>Support optimistic locking with versioning</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Return appropriate status codes</li>
                    <li>Throw exceptions rather than handle locally</li>
                    <li>Log errors for debugging</li>
                    <li>Provide meaningful error messages to clients</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Persistence Strategy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use Spring Data JPA for common queries</li>
                    <li>Write custom queries when needed</li>
                    <li>Use native queries for complex joins</li>
                    <li>Implement auditing fields like created_at</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Write unit tests for each operation</li>
                    <li>Implement integration tests with real DB</li>
                    <li>Monitor slow or failing operations</li>
                    <li>Log performance metrics for CRUD</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic CRUD Service</h2>
            <Card>
              <CardHeader>
                <CardTitle>ProductService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repo) {
        this.repository = repo;
    }

    public Product createProduct(Product product) {
        if (product.getPrice().compareTo(BigDecimal.ZERO) <= 0) {
            throw new InvalidRequestException("Price must be positive");
        }
        return repository.save(product);
    }

    public Product getProductById(Long id) {
        return repository.findById(id)
                        .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    public void deleteProduct(Long id) {
        Product product = getProductById(id);
        repository.delete(product);
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">CRUD Repository Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>ProductRepository.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE p.price BETWEEN ?1 AND ?2")
    List<Product> findByPriceRange(BigDecimal min, BigDecimal max);
    
    @Modifying
    @Query("UPDATE Product p SET p.price = :price WHERE p.id = :id")
    int updateProductPrice(@Param("id") Long id, @Param("price") BigDecimal price);
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
                  <CardTitle>Exercise 1: Basic CRUD Service</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Product entity with validation</li>
                    <li>Implement repository with Spring Data JPA</li>
                    <li>Build service layer with CRUD operations</li>
                    <li>Expose REST controller for all operations</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Advanced Query Methods</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create custom queries using @Query</li>
                    <li>Implement search functionality</li>
                    <li>Use JPQL for complex filtering</li>
                    <li>Test with multiple criteria</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Optimistic Locking</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Add version field to entity</li>
                    <li>Implement @Version annotation</li>
                    <li>Test concurrent updates</li>
                    <li>Handle ObjectOptimisticLockingFailureException</li>
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
                        href="https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.entity-persistence"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Data JPA Reference Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/annotation/Transactional.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        @Transactional Annotation Docs
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
                        href="https://www.baeldung.com/spring-data-rest-controllers"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Data REST Controllers
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-data-jpa/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Spring Data JPA Guide
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
                        href="/modules/web-development/data-access/repository-pattern"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Repository Pattern Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/web-development/data-access/spring-data-jpa"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Data JPA Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/web-development/data-access/transactions"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Transactions Module
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
          <Link href="/modules/web-development/rest-apis/request-response">← Request-Response</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/web-development/data-access/database-config">Next: Database Configuration →</Link>
        </Button>
      </div>
    </div>
  )
}
