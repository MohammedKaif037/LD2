import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RepositoryPatternModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Repository Pattern</h1>
          <Badge>Module 5.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement the repository pattern in Spring Boot applications using interfaces and abstraction
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
            <h2 className="text-2xl font-bold tracking-tight">What is the Repository Pattern?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                The repository pattern is a design pattern that provides an abstraction layer between domain logic and data mapping.
                In Spring Boot, it helps decouple business logic from persistence logic by defining a uniform API for accessing data,
                regardless of its source.
              </p>
              
              <p>The key benefits of using the repository pattern include:</p>
              <ul>
                <li><strong>Decoupling:</strong> Business logic doesn't depend on specific data access implementations</li>
                <li><strong>Testability:</strong> Easy to mock repositories in unit tests</li>
                <li><strong>Maintainability:</strong> Changes to data access don't ripple through the app</li>
                <li><strong>Reusability:</strong> Same repository can be used across multiple services</li>
                <li><strong>Flexibility:</strong> Switching databases becomes easier</li>
              </ul>
              
              <p>
                In Spring Boot, the repository pattern is implemented via interfaces annotated with <code>@Repository</code>,
                often extending Spring Data JPA's <code>JpaRepository</code> or custom interfaces.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Repository vs DAO</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Aspect</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">DAO Pattern</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Repository Pattern</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Purpose</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Encapsulates low-level DB operations</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Provides higher-level collection-like access to domain objects</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Abstraction</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Database-centric view</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Domain-centric view</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Usage</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Traditional JDBC or MyBatis</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Spring Data JPA, MongoDB, etc.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Complexity</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Tied to specific persistence technology</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Abstracts persistence technology behind interface</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Testing</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Harder to test due to DB coupling</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Easier to test with mocks</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use the Repository Pattern?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Separation of Concerns</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Keeps business logic separate from data access</li>
                    <li>Allows parallel development of service and persistence layers</li>
                    <li>Makes code more maintainable and readable</li>
                    <li>Supports clean architecture principles</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Easy to mock or stub in unit tests</li>
                    <li>Enables TDD (Test-Driven Development)</li>
                    <li>Reduces reliance on real databases in tests</li>
                    <li>Supports integration testing with real data</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Extensibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Can switch underlying persistence mechanism</li>
                    <li>Supports multiple data sources</li>
                    <li>Facilitates caching strategies</li>
                    <li>Improves reusability across modules</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance & Scalability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Encapsulates query optimization</li>
                    <li>Supports batch operations</li>
                    <li>Enables connection pooling</li>
                    <li>Improves observability and tracing</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing Repositories in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement the repository pattern in Spring Boot:
              </p>
              
              <h3>Create Domain Entity:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String email;
}`}
              </pre>
              
              <h3>Define Repository Interface:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    
    @Query("SELECT u FROM User u WHERE u.username LIKE %:keyword%")
    List<User> searchByUsername(@Param("keyword") String keyword);
}`}
              </pre>
              
              <h3>Use in Service Layer:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository repo) {
        this.userRepository = repo;
    }

    public User registerNewUser(User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            throw new DuplicateResourceException("Email already registered");
        }
        return userRepository.save(user);
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Types of Repository Implementations</h2>
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
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SimpleJpaRepository</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Basic CRUD operations out of the box</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Standard entity-based persistence</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Custom Repository</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Add custom queries and logic</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Complex querying and data manipulation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Mock Repository</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">In-memory fake implementation</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unit testing without real database</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Distributed Repository</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Delegates to remote services</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Microservices or REST-based persistence</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Composite Repository</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Combines multiple data sources</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Hybrid storage solutions</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for Repository Implementation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Design Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Keep repositories focused on one entity type</li>
                    <li>Use interfaces for abstraction</li>
                    <li>Implement business logic elsewhere</li>
                    <li>Return DTOs instead of entities when needed</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never expose raw exceptions</li>
                    <li>Wrap complex queries in try-catch</li>
                    <li>Log errors internally but hide from clients</li>
                    <li>Throw meaningful exception types</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Validate input before passing to repository</li>
                    <li>Avoid SQL injection through ORM usage</li>
                    <li>Don’t expose internal IDs or sensitive fields</li>
                    <li>Use secure query patterns</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use projections for partial data retrieval</li>
                    <li>Batch operations where possible</li>
                    <li>Cache frequently accessed data</li>
                    <li>Use asynchronous methods for long-running queries</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Repository Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserRepository.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    
    @Query("SELECT u FROM User u WHERE u.username LIKE %:keyword%")
    Page<User> searchByUsername(@Param("keyword") String keyword, Pageable pageable);
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Custom Query Repository</h2>
            <Card>
              <CardHeader>
                <CardTitle>ProductRepository.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE p.price BETWEEN ?1 AND ?2")
    List<Product> findProductsByPriceRange(BigDecimal min, BigDecimal max);
    
    @Modifying
    @Query("UPDATE Product p SET p.stock = p.stock - 1 WHERE p.id = :productId")
    int decreaseStock(@Param("productId") Long productId);
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
                  <CardTitle>Exercise 1: Basic Repository Setup</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create User entity with validation</li>
                    <li>Implement UserRepository interface</li>
                    <li>Add custom finder methods</li>
                    <li>Test with Spring Boot application</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Custom Query Methods</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Define custom JPQL queries</li>
                    <li>Implement pagination support</li>
                    <li>Add sorting to query methods</li>
                    <li>Test performance with large datasets</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Composite Repository</CardTitle>
                <CardHeader>
                  <CardTitle>Advanced level</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create interface for composite repository</li>
                    <li>Implement local and remote versions</li>
                    <li>Switch based on environment or configuration</li>
                    <li>Test behavior under different scenarios</li>
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
                        href="https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.core-concepts"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Data Repository Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/stereotype/Repository.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring @Repository Annotation Docs
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
                        href="https://www.baeldung.com/spring-repository-pattern"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Repository Pattern in Spring
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
                        href="/modules/web-development/data-access/crud"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        CRUD Operations Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/web-development/data-access/database-config"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Database Configuration Module
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
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/modules/web-development/data-access/database-config">← Database Config</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/web-development/data-access/spring-data-jpa">Next: Spring Data JPA →</Link>
        </Button>
      </div>
    </div>
  )
}
