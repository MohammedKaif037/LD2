import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SpringDataJPA() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Data JPA</h1>
          <Badge>Module 3.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to use Spring Data JPA for database access in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Spring Data JPA</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Data JPA is part of the larger Spring Data family that makes it easy to implement JPA-based
                repositories. It simplifies data access by reducing the boilerplate code required to implement data
                access layers for various persistence stores.
              </p>
              <p>
                With Spring Data JPA, you can define repository interfaces with methods for common CRUD operations, and
                Spring will automatically provide the implementation at runtime. This allows you to focus on your
                application's business logic rather than the details of data access.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Key Features of Spring Data JPA</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Repository Interfaces</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Define repository interfaces that extend Spring Data's repository interfaces like JpaRepository,
                    CrudRepository, or PagingAndSortingRepository to get pre-built methods for common operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Query Methods</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Define query methods using method naming conventions, and Spring Data will automatically generate
                    the appropriate JPQL queries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Setting Up Spring Data JPA</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>To use Spring Data JPA in your Spring Boot application, follow these steps:</p>
              <ol>
                <li>
                  Add the Spring Data JPA starter to your project:
                  <pre>
                    {`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>`}
                  </pre>
                </li>
                <li>
                  Add a database driver (e.g., H2, MySQL, PostgreSQL):
                  <pre>
                    {`<dependency>
    <groupId>com.h2database</groupId>
    <artifactId>h2</artifactId>
    <scope>runtime</scope>
</dependency>`}
                  </pre>
                </li>
                <li>
                  Configure the database connection in application.properties:
                  <pre>
                    {`spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=password
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect`}
                  </pre>
                </li>
              </ol>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Basic JPA Repository</h2>
            <Card>
              <CardHeader>
                <CardTitle>Simple Entity and Repository</CardTitle>
                <CardDescription>A basic example of an entity and its repository</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Product.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String description;
    private BigDecimal price;
    
    // Constructors, getters, and setters
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">ProductRepository.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`public interface ProductRepository extends JpaRepository<Product, Long> {
    
    // Find products by name (case-insensitive)
    List<Product> findByNameContainingIgnoreCase(String name);
    
    // Find products with price less than the given value
    List<Product> findByPriceLessThan(BigDecimal price);
    
    // Custom query using @Query annotation
    @Query("SELECT p FROM Product p WHERE p.price BETWEEN :minPrice AND :maxPrice")
    List<Product> findProductsInPriceRange(
        @Param("minPrice") BigDecimal minPrice, 
        @Param("maxPrice") BigDecimal maxPrice
    );
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </TabsContent>
        <TabsContent value="exercises" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Practice Exercises</h2>
            <Card>
              <CardHeader>
                <CardTitle>Exercise: Create a Book Management System</CardTitle>
                <CardDescription>Practice using Spring Data JPA with a book management system</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a Book entity with id, title, author, isbn, and publishedDate fields</li>
                  <li>Create a BookRepository interface that extends JpaRepository</li>
                  <li>Add custom query methods to find books by author and title</li>
                  <li>Create a BookService that uses the repository</li>
                  <li>Create a REST controller to expose CRUD operations for books</li>
                  <li>Test your API using Postman or curl</li>
                </ol>
              </CardContent>
            </Card>
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
                        href="https://docs.spring.io/spring-data/jpa/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Data JPA Reference Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://spring.io/guides/gs/accessing-data-jpa/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Getting Started with JPA
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
                        href="/modules/data-access/database-setup"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Database Setup
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/data-access/orm-basics"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        ORM Basics
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
          <Link href="/modules/data-access">← Back to Data Access</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/data-access/repositories">Next: Repositories →</Link>
        </Button>
      </div>
    </div>
  )
}
