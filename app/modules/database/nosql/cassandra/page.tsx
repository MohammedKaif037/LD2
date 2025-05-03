import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CassandraModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Cassandra</h1>
          <Badge>Module 9.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to integrate Apache Cassandra with Spring Boot applications for scalable NoSQL data storage
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Cassandra</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Apache Cassandra is a highly scalable, distributed NoSQL database designed to handle large amounts of data
                across many commodity servers while providing high availability and no single point of failure.
              </p>
              
              <p>Key features of Cassandra:</p>
              <ul>
                <li><strong>Highly scalable:</strong> Linear scalability and performance</li>
                <li><strong>Distributed architecture:</strong> All nodes are equal (no master-slave)</li>
                <li><strong>High availability:</strong> Data replication across multiple nodes</li>
                <li><strong>Tunable consistency:</strong> Balance between consistency and availability</li>
                <li><strong>Column-oriented model:</strong> Optimized for writes and time-series data</li>
              </ul>
              
              <p>
                Cassandra is ideal for use cases like time-series data analysis, event sourcing, and high-throughput systems.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Cassandra Data Model</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Cassandra's data model is optimized for fast writes and efficient queries. It uses a column-family store,
                which resembles a denormalized relational database.
              </p>
              
              <h3>Core Concepts:</h3>
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Concept</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Keyspace</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">The outermost container for data, similar to a schema in SQL</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Table</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">A collection of rows with a defined schema</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Primary Key</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Determines how data is partitioned and ordered</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Clustering Columns</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Defines the order of data within a partition</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Materialized Views</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Predefined queries stored as tables for faster access</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Integration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot provides seamless integration with Cassandra through Spring Data Cassandra.
              </p>
              
              <h3>Getting Started:</h3>
              <ol>
                <li>Add dependency:
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`<!-- Maven -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-cassandra</artifactId>
</dependency>`}
                  </pre>
                </li>
                
                <li>Configure application.properties:
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`spring.data.cassandra.contact-points=localhost
spring.data.cassandra.port=9042
spring.data.cassandra.keyspace-name=mykeyspace`}
                  </pre>
                </li>
                
                <li>Create entity class:
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`@Table("users")
public class User {
    @PartitionKey
    private UUID id;
    
    private String name;
    
    private String email;
    
    // Getters and setters
}`}
                  </pre>
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Querying Cassandra</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Data Cassandra offers several ways to query data:
              </p>
              
              <h3>Using Repository Interface:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`public interface UserRepository extends CassandraRepository<User, UUID> {
    List<User> findByName(String name);
}`}
              </pre>
              
              <h3>Custom Queries:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Query("SELECT * FROM users WHERE name = ?0")
List<User> findUsersWithName(String name);`}
              </pre>
              
              <h3>Using CQL Directly:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Autowired
private CassandraOperations cassandraOps;

List<User> result = cassandraOps.query(
    "SELECT * FROM mykeyspace.users WHERE name = 'John'",
    User.class);`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Data Modeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Design around queries, not entities</li>
                    <li>Denormalize data for better read performance</li>
                    <li>Avoid wide rows unless necessary</li>
                    <li>Use materialized views for alternate access patterns</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use batch statements wisely</li>
                    <li>Leverage async operations for high throughput</li>
                    <li>Monitor node health and repair regularly</li>
                    <li>Optimize compaction strategy based on workload</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Consistency & Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Choose appropriate consistency levels</li>
                    <li>Replicate data across multiple nodes</li>
                    <li>Use hinted handoff and read repair</li>
                    <li>Consider multi-datacenter setups for global apps</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spring-Specific Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use reactive repositories for non-blocking I/O</li>
                    <li>Take advantage of automatic mapping</li>
                    <li>Keep domain models simple for better mapping</li>
                    <li>Use custom converters for complex types</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Cassandra Setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# Cassandra configuration
spring.data.cassandra.contact-points=localhost
spring.data.cassandra.port=9042
spring.data.cassandra.keyspace-name=demo
spring.data.cassandra.schema-action=CREATE_IF_NOT_EXISTS`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Entity Class Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>User.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`import org.springframework.data.cassandra.core.mapping.*;
import java.util.UUID;

@Table("users")
public class User {
    @PartitionKey
    private UUID id;
    
    private String name;
    
    private String email;
    
    public User(UUID id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Getters and setters
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Repository Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserRepository.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`import org.springframework.data.cassandra.repository.CassandraRepository;
import java.util.List;
import java.util.UUID;

public interface UserRepository extends CassandraRepository<User, UUID> {
    List<User> findByName(String name);
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
                  <CardTitle>Exercise 1: Basic CRUD Operations</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Set up a local Cassandra instance</li>
                    <li>Create a keyspace and table for user data</li>
                    <li>Implement basic CRUD operations using Spring Data Cassandra</li>
                    <li>Test each operation with sample data</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Query Customization</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a new entity with a compound primary key</li>
                    <li>Implement custom queries using annotations</li>
                    <li>Try using raw CQL queries in repository methods</li>
                    <li>Test different consistency levels</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Reactive Implementation</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Convert existing sync repository to reactive</li>
                    <li>Use WebClient or R2DBC to expose REST API</li>
                    <li>Implement streaming and backpressure handling</li>
                    <li>Benchmark reactive vs blocking implementations</li>
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
                        href="https://cassandra.apache.org/doc/latest/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Apache Cassandra Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-data/cassandra/docs/current/reference/html/#cassandra.repositories"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Data Cassandra Docs
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
                        href="https://www.amazon.com/Cassandra-High-Availability-Marko-Sasic/dp/178778017X"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Cassandra High Availability by Marko Sasic
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Learning-Cassandra-Data-Stores-Managing/dp/1800562869"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Learning Apache Cassandra by Anand Jain
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
                        href="/modules/database/nosql/document-storage"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Document Storage
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/database/nosql/mongodb"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        MongoDB Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/database/nosql/redis"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Redis Module
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
          <Link href="/modules/database/nosql/document-storage">← Document Storage</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/database/nosql/document-storage">Next: Document Storage →</Link>
        </Button>
      </div>
    </div>
  )
}
