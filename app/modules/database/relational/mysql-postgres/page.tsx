import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function MySQLPostgreSQLModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">MySQL & PostgreSQL</h1>
          <Badge>Module 7.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to integrate MySQL and PostgreSQL databases with Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to MySQL and PostgreSQL</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                MySQL and PostgreSQL are two of the most widely used relational databases in modern web development.
                Both offer robust support for transactional systems, but they differ in licensing, features, and extensibility.
              </p>

              <h3>Key Features:</h3>
              <ul>
                <li><strong>MySQL:</strong> Fast, reliable, and ideal for read-heavy workloads</li>
                <li><strong>PostgreSQL:</strong> Extensible, ACID-compliant, and supports advanced data types</li>
              </ul>

              <p>
                In Spring Boot, both databases can be integrated seamlessly using Spring Data JPA and connection pooling libraries like HikariCP.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">MySQL vs PostgreSQL Comparison</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Feature</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">MySQL</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">PostgreSQL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Licensing</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">GPLv2 (Community Edition)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">MIT-style (Open Source)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ACID Compliance</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Yes (InnoDB engine)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>JSON Support</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limited JSON type</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full JSONB support</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Extensibility</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Less extensible</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Highly extensible with custom functions/types</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Use Case</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Web apps, e-commerce, logging</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Data warehousing, GIS, financial apps</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Integration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To integrate either database with Spring Boot, add the appropriate driver dependency and configure properties.
              </p>

              <h3>MySQL Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
</dependency>`}
              </pre>

              <h3>PostgreSQL Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`<dependency>
  <groupId>org.postgresql</groupId>
  <artifactId>postgresql</artifactId>
</dependency>`}
              </pre>

              <h3>application.properties (MySQL):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret
spring.jpa.hibernate.ddl-auto=update`}
              </pre>

              <h3>application.properties (PostgreSQL):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`spring.datasource.url=jdbc:postgresql://localhost:5432/mydb
spring.datasource.username=admin
spring.datasource.password=secure
spring.jpa.hibernate.ddl-auto=update`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Query Optimization Tips</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>MySQL Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use InnoDB for transactional support</li>
                    <li>Enable query cache for repetitive queries</li>
                    <li>Optimize joins with proper indexing</li>
                    <li>Avoid SELECT *; select only needed columns</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>PostgreSQL Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use EXPLAIN ANALYZE to understand query plans</li>
                    <li>Create indexes selectively to avoid overhead</li>
                    <li>Partition large tables for faster access</li>
                    <li>Utilize JSONB fields for semi-structured data</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Schema Management Strategies</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Managing schema changes is critical for production applications. Consider these strategies:
              </p>

              <ul>
                <li><strong>Flyway:</strong> Versioned migrations using SQL scripts</li>
                <li><strong>Liquibase:</strong> XML/YAML-based change management</li>
                <li><strong>JPA DDL Auto:</strong> Development-only schema updates</li>
                <li><strong>Manual Scripts:</strong> For precise control in production</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Connection Pooling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Set reasonable pool size based on workload</li>
                    <li>Monitor idle and active connections</li>
                    <li>Configure timeout and validation settings</li>
                    <li>Use HikariCP as default in Spring Boot</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Modeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Normalize data for consistency</li>
                    <li>Detect and eliminate redundancy</li>
                    <li>Use constraints and triggers wisely</li>
                    <li>Keep schema simple for readability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Tuning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use explain plan for slow queries</li>
                    <li>Index frequently searched columns</li>
                    <li>Batch inserts/updates where possible</li>
                    <li>Use caching layers (Redis) when appropriate</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never store credentials in version control</li>
                    <li>Use parameterized queries to prevent SQL injection</li>
                    <li>Encrypt sensitive data at rest</li>
                    <li>Regularly patch and update database servers</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Configuration Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>MySQL Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/demo?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Domain Model Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>User.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    // Getters and setters
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Repository Interface</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserRepository.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
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
                  <CardTitle>Exercise 1: Basic Setup</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Set up a local MySQL or PostgreSQL instance</li>
                    <li>Add JDBC driver and Spring Data JPA dependencies</li>
                    <li>Implement a basic domain model and repository</li>
                    <li>Test CRUD operations using a controller</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Query Optimization</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a table with 1 million+ records</li>
                    <li>Run unoptimized queries and measure performance</li>
                    <li>Add indexes and re-run queries</li>
                    <li>Use EXPLAIN to analyze query execution</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Schema Migration</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Initialize Flyway or Liquibase in your project</li>
                    <li>Create migration scripts for adding new fields</li>
                    <li>Version your schema and manage rollbacks</li>
                    <li>Automate schema updates in CI/CD pipeline</li>
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
                        href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data.sql.datasource.configuration"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Relational DB Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://dev.mysql.com/doc/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        MySQL Official Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.postgresql.org/docs/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        PostgreSQL Official Docs
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
                        href="https://www.amazon.com/Pro-JPA-Mastering-Press-Experts/dp/1484239574"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Pro JPA 2 by Mike Keith
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Using-Docker-Applications-Fernando-Mota/dp/178778017X"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Using Docker in Development by Fernando Mota
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
                        Baeldung: Spring Data JPA Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-boot-data-jpa/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Mastering JPA in Spring Boot
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
                        href="/modules/database/relational/query-optimization"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Query Optimization
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
          <Link href="/modules/database/relational/connection-pooling">← Connection Pooling</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/database/relational/query-optimization">Next: Query Optimization →</Link>
        </Button>
      </div>
    </div>
  )
}
