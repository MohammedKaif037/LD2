import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function DatabaseConfigurationModule() {
  const DB_PASSWORD="${DB_PASSWORD}";
  
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Database Configuration</h1>
          <Badge>Module 5.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to configure database connections in Spring Boot applications using application.properties or YAML
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
            <h2 className="text-2xl font-bold tracking-tight">Why Configure Databases?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Configuring databases properly is essential for building reliable, secure, and performant Spring Boot applications.
                Spring Boot provides sensible defaults but allows customization of connection pools, drivers, and ORM settings.
              </p>
              
              <p>Common reasons to customize database configuration:</p>
              <ul>
                <li><strong>Security:</strong> Use different credentials for dev/test/prod</li>
                <li><strong>Performance:</strong> Tune connection pool size and query cache</li>
                <li><strong>Scalability:</strong> Support multiple databases or read replicas</li>
                <li><strong>Observability:</strong> Enable slow query logging and monitoring</li>
                <li><strong>Portability:</strong> Switch between H2, MySQL, PostgreSQL, etc.</li>
              </ul>
              
              <p>
                In Spring Boot, database configuration is typically done via <code>application.properties</code> or 
                <code>application.yml</code>, and can be further customized using Java-based configuration.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Database Configuration Options</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Property</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>spring.datasource.url</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">JDBC connection URL</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>jdbc:mysql://localhost:3306/mydb</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>spring.datasource.username</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Database user</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>root</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>spring.datasource.password</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">User password</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>secure-password-123</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>spring.jpa.hibernate.ddl-auto</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Schema management strategy</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>update</code>, <code>create</code>, <code>none</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>spring.datasource.hikari.*</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Connection pool tuning</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>maximum-pool-size, connection-test-query</code></td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Database Configuration Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Development vs Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Use H2/HS2 for local development</li>
                    <li>Switch to Postgres/MySQL in production</li>
                    <li>Store secrets in vaults or environment variables</li>
                    <li>Never commit sensitive DB credentials</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Connection Pool Tuning</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Set appropriate pool size based on workload</li>
                    <li>Configure idle timeout and validation queries</li>
                    <li>Monitor active and pending connections</li>
                    <li>Use health indicators for DB availability</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>JPA & Hibernate Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Choose appropriate DDL auto mode</li>
                    <li>Enable SQL logging for debugging</li>
                    <li>Configure second-level caching if needed</li>
                    <li>Tune fetch sizes and batch operations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Multi-Tenancy Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Use separate schemas or databases</li>
                    <li>Implement dynamic data source routing</li>
                    <li>Isolate tenant-specific configurations</li>
                    <li>Support per-tenant connection pools</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing Database Configuration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To configure a database in Spring Boot:
              </p>
              
              <h3>Maven Dependency (for MySQL):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
</dependency>`}
              </pre>
              
              <h3>Basic Configuration (application.properties):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`spring.datasource.url=jdbc:mysql://localhost:3306/myapp
spring.datasource.username=root
spring.datasource.password=your-secret-password
spring.jpa.hibernate.ddl-auto=update`}
              </pre>
              
              <h3>Advanced Configuration (YAML):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/appdb
    username: dbuser
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
    hikari:
      maximum-pool-size: 10
      connection-test-query: SELECT 1
      pool-name: AppHikariPool
      validation-timeout: 3000
      leak-detection-threshold: 60000`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Supported Databases in Spring Boot</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Database</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Driver Class</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">JDBC URL Format</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>MySQL</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>com.mysql.cj.jdbc.Driver</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>jdbc:mysql://host:port/dbname</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>PostgreSQL</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>org.postgresql.Driver</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>jdbc:postgresql://host:port/dbname</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>H2</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>org.h2.Driver</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>jdbc:h2:mem:testdb</code>, <code>jdbc:h2:file:~/test</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Oracle</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>oracle.jdbc.OracleDriver</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>jdbc:oracle:thin:@//host:port/service_name</code></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SQL Server</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>com.microsoft.sqlserver.jdbc.SQLServerDriver</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>jdbc:sqlserver://localhost:1433;databaseName=myDb;</code></td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for Secure Database Configuration</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Secret Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never store passwords in code repositories</li>
                    <li>Use environment variables for production</li>
                    <li>Integrate with secret managers (Vault, AWS Secrets Manager)</li>
                    <li>Rotate credentials regularly</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Connection Resilience</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Configure retry policies for transient failures</li>
                    <li>Set reasonable timeouts</li>
                    <li>Use connection validation queries</li>
                    <li>Monitor and alert on connection leaks</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Adjust pool size based on expected load</li>
                    <li>Use prepared statement caching</li>
                    <li>Optimize transaction boundaries</li>
                    <li>Log slow queries and execution plans</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Test connectivity during startup</li>
                    <li>Validate schema matches entity models</li>
                    <li>Run integration tests before deployment</li>
                    <li>Use Flyway or Liquibase for migrations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">MySQL Configuration Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`spring.datasource.url=jdbc:mysql://localhost:3306/myapp?useSSL=false&serverTimezone=UTC
spring.datasource.username=root
spring.datasource.password=dev-password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.hibernate.ddl-auto=update`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">PostgreSQL Configuration with Environment Variables</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.yml</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`spring:
  datasource:
    url: jdbc:postgresql://\${DB_HOST}:5432/\${DB_NAME}
    username: \${DB_USER}
    password: \${DB_PASSWORD}
    hikari:
      maximum-pool-size: 10
      connection-test-query: SELECT 1`}
                </pre>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        <TabsContent value="exercises" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Practice Exercises</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 1: Basic DB Setup</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Spring Boot app with Data JPA and MySQL starter</li>
                    <li>Configure database connection in application.properties</li>
                    <li>Verify connection at startup</li>
                    <li>Test CRUD operations against real database</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Multi-Profile Configuration</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create application-dev.yml and application-prod.yml</li>
                    <li>Set different DB URLs and credentials per profile</li>
                    <li>Use environment variables for prod secrets</li>
                    <li>Test switching between profiles</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Connection Pool Monitoring</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Add Actuator and Micrometer dependencies</li>
                    <li>Expose metrics endpoint</li>
                    <li>Monitor HikariCP metrics</li>
                    <li>Set up alerts for connection leaks</li>
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
                        href="https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data.sql.datasource.configuration"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Database Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://github.com/brettwooldridge/HikariCP"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        HikariCP GitHub
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
                        href="https://www.baeldung.com/spring-boot-hikari"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Boot with HikariCP
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-data-source-configuration/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: DataSource Configuration Guide
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
          <Link href="/modules/web-development/data-access/crud">← CRUD</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/web-development/data-access/repository-pattern">Next: Repository Pattern →</Link>
        </Button>
      </div>
    </div>
  )
}
