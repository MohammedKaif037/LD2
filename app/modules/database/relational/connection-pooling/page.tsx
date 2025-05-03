import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ConnectionPoolingModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Connection Pooling</h1>
          <Badge>Module 8.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to manage database connections efficiently using connection pooling in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">What is Connection Pooling?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Connection pooling is a technique used to manage and reuse database connections efficiently. Instead of creating
                a new connection every time a request is made to the database, a pool of pre-established connections is maintained.
                This significantly improves performance and scalability by reducing the overhead of establishing and closing
                connections repeatedly.
              </p>
              
              <p>Key benefits of connection pooling:</p>
              <ul>
                <li><strong>Improved performance:</strong> Reusing connections avoids repeated authentication and network setup</li>
                <li><strong>Better resource utilization:</strong> Limits the number of open connections</li>
                <li><strong>Faster response times:</strong> Eliminates the need to create a new connection per request</li>
                <li><strong>Control over load:</strong> Prevents database overload by limiting concurrent connections</li>
              </ul>
              
              <p>
                In Spring Boot, connection pooling is handled automatically via auto-configured data sources based on classpath dependencies.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Supported Connection Pools</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot supports multiple connection pooling libraries out of the box. The most commonly used ones are:
              </p>
              
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Pool</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>HikariCP</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High-performance connection pool; the default in Spring Boot</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">General-purpose use and production environments</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Tomcat JDBC Pool</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Lightweight pool included with Tomcat</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">When running embedded Tomcat server</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Apache DBCP2</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Flexible and widely used connection pool</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Legacy systems or when HikariCP isn't available</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>C3P0</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Older but robust connection pool implementation</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Hibernate-based legacy projects</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">How Connection Pooling Works</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                A connection pool maintains a set of active database connections that can be reused across requests.
                When an application needs to interact with the database:
              </p>
              
              <ol>
                <li>The pool checks if there's an idle connection available</li>
                <li>If yes, it returns the connection to the application</li>
                <li>If no, it either waits or throws an exception depending on configuration</li>
                <li>Once the operation completes, the connection is returned to the pool</li>
              </ol>
              
              <h3>Common Configuration Parameters:</h3>
              <ul>
                <li><code>spring.datasource.hikari.maximum-pool-size</code> - Maximum number of connections</li>
                <li><code>spring.datasource.hikari.idle-timeout</code> - How long a connection can be idle before being closed</li>
                <li><code>spring.datasource.hikari.connection-test-query</code> - Query to validate connections</li>
                <li><code>spring.datasource.hikari.pool-name</code> - Name shown in logs and JMX monitoring</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Configuring Connection Pooling</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To configure connection pooling in Spring Boot, add a dependency and update application.properties.
              </p>
              
              <h3>For HikariCP (Default):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=secret
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.idle-timeout=30000
spring.datasource.hikari.max-lifetime=1800000`}
              </pre>
              
              <h3>For Tomcat JDBC Pool:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`spring.datasource.tomcat.max-active=10
spring.datasource.tomcat.max-idle=5
spring.datasource.tomcat.min-idle=1
spring.datasource.tomcat.max-wait-millis=3000`}
              </pre>
              
              <h3>For Apache DBCP2:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`spring.datasource.dbcp2.max-total=10
spring.datasource.dbcp2.max-idle=5
spring.datasource.dbcp2.min-idle=1
spring.datasource.dbcp2.max-wait-millis=3000`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Monitoring & Tuning</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring Connection Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Check metrics via Actuator endpoints</li>
                    <li>Monitor connection wait times and timeouts</li>
                    <li>Track usage patterns during peak traffic</li>
                    <li>Use tools like Prometheus + Grafana for visualization</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tuning Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Set appropriate pool size based on workload</li>
                    <li>Avoid setting maximum pool size too high</li>
                    <li>Configure timeouts for acquisition and idle connections</li>
                    <li>Use health indicators to detect issues early</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Health Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Enable health endpoint in application.properties</li>
                    <li>Check status of datasource regularly</li>
                    <li>Use health indicators in CI/CD pipelines</li>
                    <li>Integrate with alerting systems for failures</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Connection Leak Prevention</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Ensure all database resources are closed properly</li>
                    <li>Log warnings when connections are not released</li>
                    <li>Use test queries to identify stale connections</li>
                    <li>Implement leak detection mechanisms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Connection Pool Setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# Database configuration
spring.datasource.url=jdbc:mysql://localhost:3306/demo
spring.datasource.username=admin
spring.datasource.password=secret

# HikariCP configuration
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.idle-timeout=30000
spring.datasource.hikari.max-lifetime=1800000
spring.datasource.hikari.connection-test-query=SELECT 1`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Custom Pool Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>HikariDataSourceConfig.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Configuration
public class DataSourceConfig {
    @Bean
    public DataSource dataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:mysql://localhost:3306/demo");
        ds.setUsername("admin");
        ds.setPassword("secret");
        ds.setMaximumPoolSize(10);
        ds.setIdleTimeout(30000);
        ds.setMaxLifetime(1800000);
        ds.setConnectionTestQuery("SELECT 1");
        return ds;
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
                  <CardTitle>Exercise 1: Configure Connection Pool</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with web and data JPA dependencies</li>
                    <li>Add MySQL driver to the project</li>
                    <li>Configure connection pooling using application.properties</li>
                    <li>Verify that the pool works by testing concurrent access</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Monitor Pool Usage</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Enable Actuator endpoints for health monitoring</li>
                    <li>Access /actuator/health endpoint to check datasource status</li>
                    <li>Use Micrometer or Prometheus to collect metrics</li>
                    <li>Visualize metrics using Grafana or similar tool</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Implement Custom Pool</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create custom DataSource bean programmatically</li>
                    <li>Implement connection validation logic</li>
                    <li>Add logging for connection acquisition and release</li>
                    <li>Test behavior under high concurrency</li>
                    <li>Implement retry logic for failed connections</li>
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
                        Spring Boot Connection Pool Docs
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
                        HikariCP GitHub Repository
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
                        href="https://www.amazon.com/Learn-Spring-Boot-Java-Applications/dp/1801070084"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Learn Spring Boot by Greg L. Turnquist
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
                        Baeldung: Configuring HikariCP in Spring Boot
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-boot-datasource/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Spring Boot Datasource Guide
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
                    <li>
                      <Link 
                        href="/modules/database/relational/schema-management"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Schema Management Module
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
          <Link href="/modules/database/nosql/redis">← Redis</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/database/relational/mysql-postgres">Next: MySQL & PostgreSQL →</Link>
        </Button>
      </div>
    </div>
  )
}
