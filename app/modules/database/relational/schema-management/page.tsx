import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SchemaManagementModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Schema Management</h1>
          <Badge>Module 7.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to manage database schemas effectively in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">Why Schema Management Matters</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Schema management is essential for maintaining consistency between your application code and the database structure.
                As applications evolve, so do data models — proper schema management ensures these changes are applied safely,
                consistently, and in a version-controlled manner.
              </p>
              
              <p>Key challenges without schema management:</p>
              <ul>
                <li><strong>Manual updates:</strong> Risk of human error during deployment</li>
                <li><strong>Environment drift:</strong> Development, test, and production databases get out of sync</li>
                <li><strong>Rollback issues:</strong> Hard to revert to earlier schema versions</li>
                <li><strong>Data loss:</strong> Improper migrations can corrupt or lose data</li>
              </ul>
              
              <p>
                Spring Boot provides built-in support for schema creation and migration through JPA and tools like Flyway and Liquibase.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Schema Creation vs Migration</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Approach</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>JPA DDL Auto</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Automatic schema generation based on entity classes</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Development only</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Flyway</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Versioned SQL scripts with checksum validation</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Production-ready migrations</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Liquibase</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">XML/YAML-based change sets for structured migrations</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Complex schema changes across environments</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Manual Scripts</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">SQL scripts executed manually or via CI/CD</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simple setups or legacy systems</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using JPA for Schema Generation</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot supports automatic schema generation through Hibernate's <code>ddl-auto</code> property.
              </p>
              
              <h3>Configuration Options:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# application.properties
spring.jpa.hibernate.ddl-auto=update`}
              </pre>
              
              <p>
                Valid values for <code>ddl-auto</code>:
              </p>
              <ul>
                <li><code>none</code>: No action will be taken</li>
                <li><code>validate</code>: Validate schema but don't make changes</li>
                <li><code>update</code>: Update schema if needed</li>
                <li><code>create</code>: Drop existing schema and create new one</li>
                <li><code>create-drop</code>: Create schema and drop it when session ends</li>
              </ul>
              
              <p>
                This approach is convenient for development but not recommended for production use due to potential data loss.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Flyway Integration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Flyway is a simple, reliable tool for managing database migrations through SQL scripts.
              </p>
              
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`<dependency>
  <groupId>org.flywaydb</groupId>
  <artifactId>flyway-core</artifactId>
</dependency>`}
              </pre>
              
              <h3>Basic Configuration:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# application.properties
spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration
spring.flyway.baseline-on-migrate=true`}
              </pre>
              
              <h3>Migration File Example:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`-- V1__Create_users_table.sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Liquibase Integration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Liquibase offers XML, YAML, JSON, and SQL-based schema management with advanced rollback capabilities.
              </p>
              
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`<dependency>
  <groupId>org.liquibase</groupId>
  <artifactId>liquibase-core</artifactId>
</dependency>`}
              </pre>
              
              <h3>Configuration:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# application.properties
spring.liquibase.enabled=true
spring.liquibase.change-log=classpath:db/changelog/db.changelog-master.xml`}
              </pre>
              
              <h3>Changelog Example (XML):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`<!-- db.changelog-master.xml -->
<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog 
                                       http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    
    <include file="db/changelog/changes/V1__Create_Users_Table.xml"/>
</databaseChangeLog>`}
              </pre>
              
              <h3>Change Set Example:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`<!-- V1__Create_Users_Table.xml -->
<changeSet id="1" author="team">
    <createTable tableName="users">
        <column name="id" type="BIGINT">
            <constraints primaryKey="true" nullable="false"/>
        </column>
        <column name="name" type="VARCHAR(100)">
            <constraints nullable="false"/>
        </column>
        <column name="email" type="VARCHAR(100)">
            <constraints nullable="false" unique="true"/>
        </column>
    </createTable>
</changeSet>`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Version Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Store all schema changes in version control</li>
                    <li>Use meaningful migration filenames</li>
                    <li>Never modify old migrations; create new ones instead</li>
                    <li>Tag major schema changes for reference</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Test migrations in staging before production</li>
                    <li>Validate schema after each migration</li>
                    <li>Use checksums to detect altered scripts</li>
                    <li>Implement rollback strategies for critical changes</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Avoid large migrations in production</li>
                    <li>Batch changes where possible</li>
                    <li>Minimize table locks during migration</li>
                    <li>Index tables after bulk inserts</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tooling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Pick one tool (Flyway or Liquibase) and stick with it</li>
                    <li>Automate schema updates in CI/CD</li>
                    <li>Monitor migration status via health endpoints</li>
                    <li>Integrate with monitoring tools for alerts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Schema Migration with Flyway</h2>
            <Card>
              <CardHeader>
                <CardTitle>V1__Create_User_Table.sql</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`-- src/main/resources/db/migration/V1__Create_User_Table.sql
CREATE TABLE users (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);`}
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

    private String name;

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

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Liquibase Changelog</h2>
            <Card>
              <CardHeader>
                <CardTitle>db.changelog-master.xml</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"
                     xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                     xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog 
                                         http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-1.9.xsd">
    
    <include file="db/changelog/changes/V1__Create_Users_Table.xml"/>
</databaseChangeLog>`}
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
                  <CardTitle>Exercise 1: Basic Schema Migration</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with web and data JPA dependencies</li>
                    <li>Implement a domain model and repository</li>
                    <li>Create a Flyway migration script</li>
                    <li>Run the application and verify schema creation</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Versioned Migrations</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Initialize Flyway or Liquibase in your project</li>
                    <li>Create multiple migration files for different schema versions</li>
                    <li>Add constraints, indexes, and relationships</li>
                    <li>Verify that migrations run in correct order</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Rollback Strategy</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Implement a complex schema change using Liquibase</li>
                    <li>Add rollback instructions for each change set</li>
                    <li>Simulate a failed migration</li>
                    <li>Execute rollback and verify schema integrity</li>
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
                        Spring Boot Schema Management Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://flywaydb.org/documentation/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Flyway Official Documentation
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.liquibase.org/documentation/index.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Liquibase Documentation
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
                        href="https://www.amazon.com/Clean-Architecture-Robert-C-Martin/dp/0134494164"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Clean Architecture by Robert C. Martin
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Database-Schema-Evolution-Practices-Relational/dp/178778017X"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Database Schema Evolution by Jan L. Looney
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
                        href="https://www.baeldung.com/flyway-spring-boot"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Flyway with Spring Boot
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/liquibase-in-spring-boot"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Liquibase with Spring Boot
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-boot-flyway/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Managing DB Changes with Flyway
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
                        href="/modules/database/relational/query-optimization"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Query Optimization Module
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
          <Link href="/modules/database/relational/query-optimization">← Query Optimization</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/database/relational/connection-pooling">Next: Connection Pooling →</Link>
        </Button>
      </div>
    </div>
  )
}
