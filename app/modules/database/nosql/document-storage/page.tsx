import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function DocumentStorageModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Document Storage</h1>
          <Badge>Module 9.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn about document storage databases and how to integrate them with Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">What is Document Storage?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Document storage refers to NoSQL databases that store data in flexible, self-describing structures such as JSON documents.
                Unlike relational databases, they don't require a fixed schema, making them ideal for unstructured or semi-structured data.
              </p>
              
              <p>Key characteristics of document stores:</p>
              <ul>
                <li><strong>Schema-less:</strong> Documents can vary within the same collection</li>
                <li><strong>Flexible querying:</strong> Support for rich queries on document fields</li>
                <li><strong>Horizontal scaling:</strong> Designed for easy horizontal scalability</li>
                <li><strong>High performance:</strong> Optimized for write-heavy operations</li>
                <li><strong>Aggregation capabilities:</strong> Powerful tools for data analysis</li>
              </ul>
              
              <p>
                Document stores are widely used in modern web applications, content management systems, real-time analytics, and 
                event sourcing architectures.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Document Database Concepts</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Document databases use a different terminology than relational databases:
              </p>
              
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Relational DB</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Document Store</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Database</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Database</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Table</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Collection</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Row</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Document</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Index</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Index</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Join</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Embedded references or application-level joins</td>
                  </tr>
                </tbody>
              </table>
              
              <h3>Core Features:</h3>
              <ul>
                <li><strong>Flexible schema:</strong> Each document can have a different structure</li>
                <li><strong>Nested data:</strong> Supports arrays and embedded documents</li>
                <li><strong>Secondary indexes:</strong> For fast queries on any field</li>
                <li><strong>Aggregation pipelines:</strong> For complex data transformations</li>
                <li><strong>Sharding:</strong> Built-in support for horizontal scaling</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Use Cases</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Content Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Storing blog posts, articles, and media metadata</li>
                    <li>Handling variable content types (text, images, videos)</li>
                    <li>Versioning documents efficiently</li>
                    <li>Full-text search capabilities</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>E-commerce Catalogs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Storing product information with varying attributes</li>
                    <li>Managing inventory and pricing data</li>
                    <li>Supporting dynamic filtering and faceted search</li>
                    <li>Handling user reviews and ratings</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Real-Time Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Storing clickstream and event data</li>
                    <li>Tracking user behavior across platforms</li>
                    <li>Aggregating metrics in real time</li>
                    <li>Generating dashboards and reports</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>IoT and Time-Series Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Storing sensor readings and device logs</li>
                    <li>Handling high-volume, time-stamped data</li>
                    <li>Performing trend analysis over time</li>
                    <li>Monitoring device health and status</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Integration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot supports multiple document-oriented databases through Spring Data projects. The most common ones include:
              </p>
              
              <h3>MongoDB Integration:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`<!-- Maven -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>`}
              </pre>
              
              <h3>Couchbase Integration:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`<!-- Maven -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-couchbase</artifactId>
</dependency>`}
              </pre>
              
              <h3>Amazon DocumentDB Integration:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`<!-- Maven -->
<dependency>
  <groupId>org.mongodb</groupId>
  <artifactId>mongodb-driver-sync</artifactId>
</dependency>`}
              </pre>
              
              <p>
                These integrations provide repository interfaces, template classes, and auto-configuration to simplify working
                with document databases in Spring applications.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Working with Documents</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Working with document databases involves creating domain models, repositories, and services that interact with the database.
              </p>
              
              <h3>Example Domain Model:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Document(collection = "users")
public class User {
    @Id
    private String id;
    
    private String name;
    
    private String email;
    
    private Map<String, Object> preferences;
    
    // Getters and setters
}`}
              </pre>
              
              <h3>Repository Interface:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByName(String name);
    
    @Query("{ 'preferences.notifications' : ?0 }")
    List<User> findByNotificationPreference(boolean enabled);
}`}
              </pre>
              
              <h3>Service Implementation:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }
}`}
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
                    <li>Design your documents around access patterns</li>
                    <li>Embed related data when accessed together</li>
                    <li>Reference data when relationships are complex</li>
                    <li>Avoid deeply nested structures unless necessary</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Create indexes on frequently queried fields</li>
                    <li>Use projection to retrieve only needed fields</li>
                    <li>Batch insertions to reduce network overhead</li>
                    <li>Consider TTL indexes for temporary data</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Consistency & Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use optimistic concurrency control where possible</li>
                    <li>Leverage versioned documents for conflict resolution</li>
                    <li>Use multi-document transactions when supported</li>
                    <li>Implement retry logic for write conflicts</li>
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
                    <li>Customize mapping with annotations if needed</li>
                    <li>Use Query annotations for complex queries</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`# MongoDB configuration
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=documentdb`}
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
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Map;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    
    private String name;
    
    private String email;
    
    private Map<String, Object> preferences;

    // Constructors, getters, and setters
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
{`import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByName(String name);
    
    @Query("{ 'preferences.notifications' : ?0 }")
    List<User> findByNotificationPreference(boolean enabled);
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Service Layer Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> findUserById(String id) {
        return userRepository.findById(id);
    }

    public void deleteUserById(String id) {
        userRepository.deleteById(id);
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
                  <CardTitle>Exercise 1: Basic CRUD Operations</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Set up a local document database instance</li>
                    <li>Create a collection for storing customer data</li>
                    <li>Implement basic CRUD operations using Spring Data</li>
                    <li>Test each operation with sample data</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Complex Queries</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a document model with nested objects</li>
                    <li>Implement custom queries using @Query</li>
                    <li>Add indexing to improve query performance</li>
                    <li>Test query performance before and after indexing</li>
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
                    <li>Use WebClient or WebFlux to expose REST API</li>
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
                        href="https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Data MongoDB Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://developer.couchbase.com/documentation-server/current/sdk/java/document-operations.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Couchbase Java SDK Docs
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
                        href="https://www.amazon.com/MongoDB-Action-Kyle-Banker/dp/161729105X"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        MongoDB in Action by Kyle Banker
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Learning-MongoDB-3-0-Vinodh-Rajasekaran/dp/1785780415"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Learning MongoDB by Vinodh Rajasekaran
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
                        href="https://www.baeldung.com/spring-data-mongodb"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Data MongoDB Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-boot-data-mongodb/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: MongoDB with Spring Boot
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
                        href="/modules/database/nosql/cassandra"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Cassandra Module
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
          <Link href="/modules/database/nosql/cassandra">← Cassandra</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/database/nosql/mongodb">Next: MongoDB →</Link>
        </Button>
      </div>
    </div>
  )
}
