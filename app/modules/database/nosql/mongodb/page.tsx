import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function MongoDBModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">MongoDB</h1>
          <Badge>Module 9.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to integrate MongoDB with Spring Boot applications for flexible NoSQL data storage
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to MongoDB</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                MongoDB is a popular document-oriented NoSQL database that stores data in JSON-like documents with dynamic schemas.
                It provides high performance, high availability, and easy scalability, making it ideal for modern web applications.
              </p>
              
              <p>Key features of MongoDB:</p>
              <ul>
                <li><strong>Document model:</strong> Stores data in flexible, JSON-like BSON documents</li>
                <li><strong>Dynamic schema:</strong> No predefined schema required</li>
                <li><strong>Horizontal scaling:</strong> Built-in support for sharding and replication</li>
                <li><strong>Rich queries:</strong> Supports ad-hoc queries and indexing</li>
                <li><strong>Aggregation framework:</strong> Powerful tools for data analysis</li>
              </ul>
              
              <p>
                MongoDB is widely used for content management systems, real-time analytics, catalog systems, and other use cases
                where flexibility and scalability are more important than strict relational modeling.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">MongoDB Data Model</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                MongoDB uses a document-based data model optimized for storing unstructured or semi-structured data.
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
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Database</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">A physical container for collections</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Collection</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">A group of MongoDB documents (similar to a table)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Document</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">A set of key-value pairs stored as BSON</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>_id</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unique identifier for each document</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>BSON</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Binary representation of JSON-like documents</td>
                  </tr>
                </tbody>
              </table>
              
              <p>
                Unlike relational databases, MongoDB allows embedded documents and arrays, enabling developers to represent complex hierarchical relationships
                within a single document.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Integration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot provides excellent integration with MongoDB through Spring Data MongoDB.
              </p>
              
              <h3>Getting Started:</h3>
              <ol>
                <li>Add dependency:
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
{`<!-- Maven -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-mongodb</artifactId>
</dependency>`}
                  </pre>
                </li>
                
                <li>Configure application.properties:
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`# MongoDB configuration
spring.data.mongodb.host=localhost
spring.data.mongodb.port=27017
spring.data.mongodb.database=mydb`}
                  </pre>
                </li>
                
                <li>Create entity class:
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Document(collection = "users")
public class User {
    @Id
    private String id;
    
    private String name;
    
    private String email;
    
    // Getters and setters
}`}
                  </pre>
                </li>
              </ol>
              
              <p>
                For production environments, consider using connection strings for better flexibility:
              </p>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`spring.data.mongodb.uri=mongodb://admin:password@localhost:27017/mydb?authSource=admin`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Querying MongoDB</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Data MongoDB provides multiple ways to query data:
              </p>
              
              <h3>Using Repository Interface:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByName(String name);
}`}
              </pre>
              
              <h3>Custom Queries with @Query:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Repository
public interface UserRepository extends MongoRepository<User, String> {
    @Query("{ 'email' : ?0 }")
    List<User> findByEmail(String email);
}`}
              </pre>
              
              <h3>Using Template for Complex Queries:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class UserService {
    private final MongoTemplate mongoTemplate;

    public UserService(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public List<User> findUsersWithEmailDomain(String domain) {
        Query query = new Query();
        query.eq("email", Pattern.compile(domain));
        return mongoTemplate.find(query, User.class);
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Indexing Strategies</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Single Field Indexes</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Field(store = true)
private String email;`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Single field indexes improve performance for queries on specific fields.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Compound Indexes</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@CompoundIndex(name = "name_email_index", def = "{'name': 1, 'email': 1}")`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Compound indexes cover multiple fields and optimize queries that access those fields together.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>TTL Indexes</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Field(store = true, expireAfterSeconds = 3600)
private Date lastAccessed;`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    TTL indexes automatically remove documents after a certain time period.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Text Indexes</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@TextIndexed(weight = 3)
private String description;`}
                  </pre>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    Text indexes support efficient text search operations on string content.
                  </p>
                </CardContent>
              </Card>
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
                    <li>Design documents around access patterns</li>
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
                    <li>Consider capped collections for fixed-size datasets</li>
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
                    <li>Use multi-document transactions for critical operations</li>
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
                    <li>Use Aggregation API for complex transformations</li>
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
spring.data.mongodb.database=demo`}
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
{`import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    
    private String name;
    
    private String email;
    
    private Date createdAt;

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
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByName(String name);
    
    @Query("{ 'email' : ?0 }")
    List<User> findByEmail(String email);
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
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
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
                    <li>Set up a local MongoDB instance</li>
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
                        href="https://www.mongodb.com/docs/manual/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        MongoDB Official Documentation
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
                        href="/modules/database/nosql/document-storage"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Document Storage Overview
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
          <Link href="/modules/database/nosql/redis">Next: Redis →</Link>
        </Button>
      </div>
    </div>
  )
}
