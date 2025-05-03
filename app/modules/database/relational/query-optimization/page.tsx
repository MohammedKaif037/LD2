import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function QueryOptimizationModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Query Optimization</h1>
          <Badge>Module 7.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to optimize database queries in Spring Boot applications for improved performance and scalability
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
            <h2 className="text-2xl font-bold tracking-tight">Why Query Optimization Matters</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Efficient query execution is essential for maintaining high performance in relational database systems.
                Poorly optimized queries can lead to slow response times, excessive resource consumption, and poor user experience.
              </p>
              
              <p>Key impacts of unoptimized queries:</p>
              <ul>
                <li><strong>Increased latency:</strong> Slower page loads and API responses</li>
                <li><strong>Higher CPU/memory usage:</strong> Wasted resources on unnecessary processing</li>
                <li><strong>Lock contention:</strong> Blocking other operations during long-running queries</li>
                <li><strong>Scalability issues:</strong> Poor performance under high load</li>
              </ul>
              
              <p>
                Optimizing queries improves application responsiveness, reduces database load, and enhances overall system efficiency.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Query Performance Issues</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Issue</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>N+1 Queries</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fetching related data in loops instead of using joins</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Dramatically increases round trips to DB</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SELECT *</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Selecting all columns instead of only needed fields</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Increases memory and network overhead</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Missing Indexes</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Queries without proper indexing</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full table scans and slow queries</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Unbounded Joins</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Joining large tables without filters</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High memory usage and timeouts</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Cursors & Loops</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Row-by-row processing in code</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Slow performance at scale</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Query Optimization Techniques</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Here are common techniques to improve query performance in Spring Boot applications:
              </p>
              
              <ol>
                <li>
                  <strong>Select Only Needed Columns:</strong> Avoid <code>SELECT *;</code> specify required fields
                </li>
                
                <li>
                  <strong>Use Pagination:</strong> Limit results using <code>Pageable</code> or SQL <code>LIMIT/OFFSET</code>
                </li>
                
                <li>
                  <strong>Batch Operations:</strong> Use bulk inserts/updates to reduce database round-trips
                </li>
                
                <li>
                  <strong>Projections:</strong> Return only selected fields instead of full entities
                </li>
                
                <li>
                  <strong>Indexing:</strong> Create indexes on frequently queried columns
                </li>
                
                <li>
                  <strong>Use JOINs Wisely:</strong> Prefer inner joins over outer joins where possible
                </li>
              </ol>
              
              <p>
                Each technique helps reduce database load, improve throughput, and increase responsiveness.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using Projections</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Interface-based Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`public interface UserSummary {
    String getName();
    String getEmail();
}`}
                  </pre>
                  
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u.name AS name, u.email AS email FROM User u WHERE u.id = ?1")
    UserSummary findUserSummaryById(Long id);
}`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>DTO-based Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String name;
    private String email;
}`}
                  </pre>
                  
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT new com.example.dto.UserDTO(u.name, u.email) FROM User u WHERE u.id = ?1")
    UserDTO findUserDTOById(Long id);
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Indexing Strategies</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Proper indexing dramatically improves query performance by allowing faster lookups.
              </p>
              
              <h3>When to Use Indexes:</h3>
              <ul>
                <li>On primary and foreign key columns</li>
                <li>On frequently filtered or sorted columns</li>
                <li>For unique constraints</li>
                <li>In search-heavy applications</li>
              </ul>
              
              <h3>When to Avoid:</h3>
              <ul>
                <li>On small lookup tables</li>
                <li>On rarely accessed columns</li>
                <li>On write-heavy tables (can slow down inserts/updates)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Database Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Normalize data to eliminate redundancy</li>
                    <li>Use appropriate data types</li>
                    <li>Avoid excessive joins across many tables</li>
                    <li>Use constraints and referential integrity</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Query Writing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use parameterized queries</li>
                    <li>Avoid subqueries when joins are better</li>
                    <li>Use EXPLAIN to analyze query plans</li>
                    <li>Cache frequently used query results</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spring-Specific Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use projections to minimize data transfer</li>
                    <li>Prefer JPQL or Criteria API for type safety</li>
                    <li>Use pagination with Pageable</li>
                    <li>Implement custom query optimization in repositories</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Monitor slow queries via Actuator</li>
                    <li>Use JPA logging to track executed queries</li>
                    <li>Test performance before and after optimization</li>
                    <li>Use tools like JMeter or Gatling for benchmarking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Query Optimization Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# Enable query logging
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">N+1 Query Problem</h2>
            <Card>
              <CardHeader>
                <CardTitle>Poorly Optimized Loop</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`// Bad: N+1 queries
for (User user : users) {
    List<Order> orders = orderRepository.findByUserId(user.getId());
    // Process orders
}`}
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Better: Batch Fetching</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`// Good: Single query with IN clause
List<Order> orders = orderRepository.findByUserIdIn(userIds);
Map<Long, List<Order>> ordersByUser = orders.stream()
    .collect(Collectors.groupingBy(Order::getUserId));`}
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
                  <CardTitle>Exercise 1: Optimize SELECT Statements</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with web and data JPA dependencies</li>
                    <li>Implement a repository that fetches an entity with multiple associations</li>
                    <li>Log the generated SQL queries</li>
                    <li>Refactor to select only necessary fields</li>
                    <li>Compare performance before and after optimization</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Fix N+1 Query Problem</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a domain model with User and Order relationships</li>
                    <li>Implement a service that fetches orders in a loop</li>
                    <li>Observe log output showing multiple queries</li>
                    <li>Refactor to use batch fetching with IN clauses</li>
                    <li>Measure query time reduction</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Implement Custom Query Optimization</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a complex domain model with multiple associations</li>
                    <li>Implement a native SQL query in repository</li>
                    <li>Use projection to avoid loading entire entities</li>
                    <li>Add indexes on join and filter columns</li>
                    <li>Benchmark query performance with and without optimization</li>
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
                        href="https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.entity-persistence-layer.query-methods"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Data JPA Query Methods Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.jboss.org/hibernate/orm/5.4/userguide/html_single/Hibernate_User_Guide.html#sql"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Hibernate ORM Query Guide
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
                        href="https://www.amazon.com/Java-Persistence-Hibernate-Second-Edition/dp/1617780077"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Java Persistence with Hibernate by Christian Bauer
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
                        href="https://www.baeldung.com/sql-query-performance"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: SQL Query Optimization Patterns
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-data-jpa-performance/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Improving JPA Performance
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
                        href="/modules/database/relational/connection-pooling"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Connection Pooling
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/database/relational/mysql-postgres"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        MySQL & PostgreSQL Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/database/relational/schema-management"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Schema Management
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
          <Link href="/modules/database/relational/mysql-postgres">← MySQL & PostgreSQL</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/database/relational/schema-management">Next: Schema Management →</Link>
        </Button>
      </div>
    </div>
  )
}import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function QueryOptimizationModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Query Optimization</h1>
          <Badge>Module 7.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to optimize database queries in Spring Boot applications for improved performance and scalability
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
            <h2 className="text-2xl font-bold tracking-tight">Why Query Optimization Matters</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Efficient query execution is essential for maintaining high performance in relational database systems.
                Poorly optimized queries can lead to slow response times, excessive resource consumption, and poor user experience.
              </p>
              
              <p>Key impacts of unoptimized queries:</p>
              <ul>
                <li><strong>Increased latency:</strong> Slower page loads and API responses</li>
                <li><strong>Higher CPU/memory usage:</strong> Wasted resources on unnecessary processing</li>
                <li><strong>Lock contention:</strong> Blocking other operations during long-running queries</li>
                <li><strong>Scalability issues:</strong> Poor performance under high load</li>
              </ul>
              
              <p>
                Optimizing queries improves application responsiveness, reduces database load, and enhances overall system efficiency.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Query Performance Issues</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Issue</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>N+1 Queries</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fetching related data in loops instead of using joins</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Dramatically increases round trips to DB</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SELECT *</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Selecting all columns instead of only needed fields</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Increases memory and network overhead</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Missing Indexes</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Queries without proper indexing</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full table scans and slow queries</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Unbounded Joins</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Joining large tables without filters</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High memory usage and timeouts</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Cursors & Loops</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Row-by-row processing in code</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Slow performance at scale</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Query Optimization Techniques</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Here are common techniques to improve query performance in Spring Boot applications:
              </p>
              
              <ol>
                <li>
                  <strong>Select Only Needed Columns:</strong> Avoid <code>SELECT *;</code> specify required fields
                </li>
                
                <li>
                  <strong>Use Pagination:</strong> Limit results using <code>Pageable</code> or SQL <code>LIMIT/OFFSET</code>
                </li>
                
                <li>
                  <strong>Batch Operations:</strong> Use bulk inserts/updates to reduce database round-trips
                </li>
                
                <li>
                  <strong>Projections:</strong> Return only selected fields instead of full entities
                </li>
                
                <li>
                  <strong>Indexing:</strong> Create indexes on frequently queried columns
                </li>
                
                <li>
                  <strong>Use JOINs Wisely:</strong> Prefer inner joins over outer joins where possible
                </li>
              </ol>
              
              <p>
                Each technique helps reduce database load, improve throughput, and increase responsiveness.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using Projections</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Interface-based Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`public interface UserSummary {
    String getName();
    String getEmail();
}`}
                  </pre>
                  
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u.name AS name, u.email AS email FROM User u WHERE u.id = ?1")
    UserSummary findUserSummaryById(Long id);
}`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>DTO-based Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private String name;
    private String email;
}`}
                  </pre>
                  
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT new com.example.dto.UserDTO(u.name, u.email) FROM User u WHERE u.id = ?1")
    UserDTO findUserDTOById(Long id);
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Indexing Strategies</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Proper indexing dramatically improves query performance by allowing faster lookups.
              </p>
              
              <h3>When to Use Indexes:</h3>
              <ul>
                <li>On primary and foreign key columns</li>
                <li>On frequently filtered or sorted columns</li>
                <li>For unique constraints</li>
                <li>In search-heavy applications</li>
              </ul>
              
              <h3>When to Avoid:</h3>
              <ul>
                <li>On small lookup tables</li>
                <li>On rarely accessed columns</li>
                <li>On write-heavy tables (can slow down inserts/updates)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Database Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Normalize data to eliminate redundancy</li>
                    <li>Use appropriate data types</li>
                    <li>Avoid excessive joins across many tables</li>
                    <li>Use constraints and referential integrity</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Query Writing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use parameterized queries</li>
                    <li>Avoid subqueries when joins are better</li>
                    <li>Use EXPLAIN to analyze query plans</li>
                    <li>Cache frequently used query results</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spring-Specific Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use projections to minimize data transfer</li>
                    <li>Prefer JPQL or Criteria API for type safety</li>
                    <li>Use pagination with Pageable</li>
                    <li>Implement custom query optimization in repositories</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Monitor slow queries via Actuator</li>
                    <li>Use JPA logging to track executed queries</li>
                    <li>Test performance before and after optimization</li>
                    <li>Use tools like JMeter or Gatling for benchmarking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Query Optimization Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# Enable query logging
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">N+1 Query Problem</h2>
            <Card>
              <CardHeader>
                <CardTitle>Poorly Optimized Loop</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`// Bad: N+1 queries
for (User user : users) {
    List<Order> orders = orderRepository.findByUserId(user.getId());
    // Process orders
}`}
                </pre>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Better: Batch Fetching</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`// Good: Single query with IN clause
List<Order> orders = orderRepository.findByUserIdIn(userIds);
Map<Long, List<Order>> ordersByUser = orders.stream()
    .collect(Collectors.groupingBy(Order::getUserId));`}
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
                  <CardTitle>Exercise 1: Optimize SELECT Statements</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with web and data JPA dependencies</li>
                    <li>Implement a repository that fetches an entity with multiple associations</li>
                    <li>Log the generated SQL queries</li>
                    <li>Refactor to select only necessary fields</li>
                    <li>Compare performance before and after optimization</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Fix N+1 Query Problem</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a domain model with User and Order relationships</li>
                    <li>Implement a service that fetches orders in a loop</li>
                    <li>Observe log output showing multiple queries</li>
                    <li>Refactor to use batch fetching with IN clauses</li>
                    <li>Measure query time reduction</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Implement Custom Query Optimization</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a complex domain model with multiple associations</li>
                    <li>Implement a native SQL query in repository</li>
                    <li>Use projection to avoid loading entire entities</li>
                    <li>Add indexes on join and filter columns</li>
                    <li>Benchmark query performance with and without optimization</li>
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
                        href="https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.entity-persistence-layer.query-methods"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Data JPA Query Methods Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.jboss.org/hibernate/orm/5.4/userguide/html_single/Hibernate_User_Guide.html#sql"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Hibernate ORM Query Guide
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
                        href="https://www.amazon.com/Java-Persistence-Hibernate-Second-Edition/dp/1617780077"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Java Persistence with Hibernate by Christian Bauer
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
                        href="https://www.baeldung.com/sql-query-performance"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: SQL Query Optimization Patterns
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-data-jpa-performance/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Improving JPA Performance
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
                        href="/modules/database/relational/connection-pooling"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Connection Pooling
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/database/relational/mysql-postgres"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        MySQL & PostgreSQL Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/database/relational/schema-management"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Schema Management
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
          <Link href="/modules/database/relational/mysql-postgres">← MySQL & PostgreSQL</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/database/relational/schema-management">Next: Schema Management →</Link>
        </Button>
      </div>
    </div>
  )
}
