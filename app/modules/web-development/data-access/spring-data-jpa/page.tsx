 "use client";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SpringDataJpaModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Data JPA</h1>
          <Badge>Module 5.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to use Spring Data JPA to simplify database interactions and reduce boilerplate code
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
            <h2 className="text-2xl font-bold tracking-tight">What is Spring Data JPA?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Data JPA is part of the larger Spring Data family that simplifies the implementation of repositories by using 
                Java Persistence API (JPA) under the hood. It provides powerful features like query derivation, pagination, sorting,
                and auditing without writing boilerplate code.
              </p>
              
              <p>Key components of Spring Data JPA:</p>
              <ul>
                <li><strong>JpaRepository:</strong> Interface providing CRUD functionality for an entity</li>
                <li><strong>PagingAndSortingRepository:</strong> Adds support for pagination and sorting</li>
                <li><strong>CrudRepository:</strong> Basic CRUD operations</li>
                <li><strong>@Query:</strong> Define custom JPQL or native SQL queries</li>
                <li><strong>Specifications:</strong> Build dynamic query conditions</li>
                <li><strong>Querydsl:</strong> Type-safe way to build queries</li>
              </ul>
              
              <p>
                In Spring Boot, Spring Data JPA automatically generates implementations based on method names in interfaces,
                reducing the need for explicit query definitions.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use Spring Data JPA?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Productivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Auto-generates repository implementations</li>
                    <li>Supports query derivation from method names</li>
                    <li>Reduces boilerplate data access code</li>
                    <li>Provides built-in methods for common operations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Consistency</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Standardizes repository interfaces</li>
                    <li>Encourages clean architecture patterns</li>
                    <li>Works well with REST APIs and services</li>
                    <li>Supports multiple persistence strategies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Flexibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Allows custom JPQL and native SQL queries</li>
                    <li>Supports projections for partial data retrieval</li>
                    <li>Enables specification-based dynamic queries</li>
                    <li>Integrates with QueryDSL for type-safe queries</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance & Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Supports batch operations</li>
                    <li>Optimizes query execution</li>
                    <li>Implements caching strategies</li>
                    <li>Supports asynchronous and reactive programming</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Repository Methods</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Method</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>save()</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Persists or updates an entity</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>User saved = repository.save(user);</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>findById()</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Retrieves entity by ID</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Optional<User> user = repository.findById(1L);</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>findAll()</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Returns all entities</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>List<User> users = repository.findAll();</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>deleteById()</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Removes entity by ID</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>repository.deleteById(1L);</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>count()</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Counts total number of records</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>long total = repository.count();</code></td>
                </tr>
              </tbody>
            </table>
          </section>
<section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Implementing Spring Data JPA in Spring Boot</h2>
        <div className="prose dark:prose-invert max-w-none">
          {/* Corrected Spring annotations with proper escaping */}
          <h3>Create Entity Class:</h3>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`${'@Entity'}
${'@Data'}
${'@NoArgsConstructor'}
${'@AllArgsConstructor'}
public class Product {
    ${'@Id'}
    ${'@GeneratedValue(strategy = GenerationType.IDENTITY)'}
    private Long id;
    
    private String name;
    private BigDecimal price;
}`}
          </pre>

          <h3>Define Repository Interface:</h3>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContaining(String keyword);
    
    ${'@Query("SELECT p FROM Product p WHERE p.price BETWEEN :min AND :max")'}
    Page<Product> searchByPriceRange(
        ${'@Param("min")'} BigDecimal min,
        ${'@Param("max")'} BigDecimal max,
        Pageable pageable);
}`}
          </pre>
        </div>
      </section>


          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Query Derivation Examples</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Method Name</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Generated Query</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>findByEmail(String email)</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>SELECT * FROM User WHERE email = ?1</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Find user by exact email</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>findByNameStartingWith(String prefix)</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>SELECT * FROM User WHERE name LIKE 'prefix%'</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Search users by name prefix</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>findByCreatedAtAfter(LocalDateTime date)</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>SELECT * FROM User WHERE created_at > date</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Filter users by creation date</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>findByRoleIn(List<String> roles)</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>SELECT * FROM User WHERE role IN roles</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Find users by list of roles</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>findFirstByOrderByCreatedAtDesc()</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <code>SELECT * FROM User ORDER BY created_at DESC LIMIT 1</code>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Get most recently created user</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Spring Data JPA</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Design Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Keep repositories focused on single entity</li>
                    <li>Use interfaces instead of concrete classes</li>
                    <li>Prefer derived queries over manual ones</li>
                    <li>Use DTO projections to limit data transfer</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Always check Optional results before accessing</li>
                    <li>Handle NoResultException and NonUniqueResultException</li>
                    <li>Log query failures for debugging</li>
                    <li>Wrap complex logic in service layer</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never expose repositories directly to controllers</li>
                    <li>Avoid returning raw entities from APIs</li>
                    <li>Validate input before querying</li>
                    <li>Use parameterized queries to prevent injection</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use pagination for large datasets</li>
                    <li>Select only necessary fields using projections</li>
                    <li>Batch operations when needed</li>
                    <li>Use @EntityGraph for fetching related data</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
  <h2 className="text-2xl font-bold tracking-tight">Basic Repository Interface</h2>
  <Card>
    <CardHeader>
      <CardTitle>ProductRepository.java</CardTitle>
    </CardHeader>
    <CardContent>
      <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContaining(String keyword);
    
    ${'@Query("SELECT p FROM Product p WHERE p.price BETWEEN :min AND :max")'}
    Page<Product> findByPriceRange(
        ${'@Param("min")'} BigDecimal min,
        ${'@Param("max")'} BigDecimal max,
        Pageable pageable);
}`}
      </pre>
    </CardContent>
  </Card>
</section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Custom Query Example</h2>
        <Card>
          <CardHeader>
            <CardTitle>OrderRepository.java</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`public interface OrderRepository extends JpaRepository<Order, Long> {
    ${'@Query(value = "SELECT o FROM Order o JOIN FETCH o.items WHERE o.user.id = :userId")'}
    List<Order> findOrdersWithItemsByUserId(${'@Param("userId")'} Long userId);
    
    ${'@Modifying'}
    ${'@Query("UPDATE Order o SET o.status = :status WHERE o.id = :id")'}
    int updateOrderStatus(${'@Param("id")'} Long id, ${'@Param("status")'} String status);
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
                  <CardTitle>Exercise 1: Derived Queries</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create User entity with basic fields</li>
                    <li>Implement repository with derived methods</li>
                    <li>Test finders like findByEmail, findByAgeGreaterThan, etc.</li>
                    <li>Verify generated SQL in logs</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Custom JPQL Queries</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Implement complex query using @Query</li>
                    <li>Add pagination support</li>
                    <li>Test performance with large dataset</li>
                    <li>Use Projections to limit returned fields</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Advanced Query Composition</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Build dynamic query using Specifications</li>
                    <li>Implement multi-criteria search</li>
                    <li>Support optional filter parameters</li>
                    <li>Test with different combinations of filters</li>
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
                        href="https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.repositories"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Data JPA Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/repository/CrudRepository.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring CrudRepository Reference
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
                        href="https://www.baeldung.com/spring-data-jpa"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Introduction to Spring Data JPA
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
                        href="/modules/web-development/data-access/repository-pattern"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Repository Pattern Module
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
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/modules/web-development/data-access/repository-pattern">← Repository Pattern</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/web-development/data-access/transactions">Next: Transactions →</Link>
        </Button>
      </div>
    </div>
  )
}
