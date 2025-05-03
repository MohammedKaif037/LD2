import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RedisModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Redis</h1>
          <Badge>Module 9.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to integrate Redis with Spring Boot applications for high-performance caching and data storage
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Redis</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Redis (Remote Dictionary Server) is an open-source, in-memory data structure store that can be used as a database,
                cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, sorted sets,
                bitmaps, hyperloglogs, and geospatial indexes.
              </p>
              
              <p>Key features of Redis:</p>
              <ul>
                <li><strong>In-memory storage:</strong> Extremely fast read/write operations</li>
                <li><strong>Data structures:</strong> Support for strings, lists, sets, hashes, and more</li>
                <li><strong>Persistence options:</strong> Optional disk writes for durability</li>
                <li><strong>Pub/Sub messaging:</strong> Built-in publish-subscribe capabilities</li>
                <li><strong>Distributed caching:</strong> Ideal for session management and temporary data</li>
              </ul>
              
              <p>
                Redis is widely used for caching, session management, real-time analytics, leaderboards, and message queuing systems.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Redis Data Structures</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Redis supports multiple data structures that can be used for different purposes:
              </p>
              
              <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Structure</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Strings</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Basic key-value pairs</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Caching simple values, counters</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Hashes</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Maps between string fields and values</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Storing objects efficiently</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Lists</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Ordered collections of strings</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Message queues, timeline storage</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Sets</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unordered collections of unique strings</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unique item storage, social connections</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Sorted Sets</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Sets where each member has an associated score</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Leaderboards, priority queues</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>HyperLogLogs</code></td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Probabilistic data structure for counting unique elements</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Approximate counts at scale</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Integration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot provides excellent integration with Redis through Spring Data Redis.
              </p>
              
              <h3>Getting Started:</h3>
              <ol>
                <li>Add dependency:
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<!-- Maven -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>`}
                  </pre>
                </li>
                
                <li>Configure application.properties:
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`# Redis configuration
spring.data.redis.host=localhost
spring.data.redis.port=6379
spring.data.redis.password=
spring.data.redis.timeout=6000ms`}
                  </pre>
                </li>
                
                <li>Create service class:
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Service
public class RedisService {
    private final StringRedisTemplate redisTemplate;

    public RedisService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void set(String key, String value) {
        redisTemplate.opsForValue().set(key, value);
    }

    public String get(String key) {
        return redisTemplate.opsForValue().get(key);
    }
}`}
                  </pre>
                </li>
              </ol>
              
              <p>
                For advanced use cases, consider using Lettuce or Jedis clients directly and leveraging Redis modules like RedisJSON.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Using Redis for Caching</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Redis is commonly used as a caching layer to improve performance of applications.
              </p>
              
              <h3>Enable Caching:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@SpringBootApplication
@EnableCaching
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`}
              </pre>
              
              <h3>Using @Cacheable:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class UserService {
    @Cacheable("users")
    public User getUserById(Long id) {
        // This would normally query a database
        return fetchUserFromDatabase(id);
    }
    
    // Simulated DB call
    private User fetchUserFromDatabase(Long id) {
        return new User(id, "User " + id);
    }
}`}
              </pre>
              
              <h3>Using RedisTemplate for Complex Operations:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class RedisService {
    private final RedisTemplate<String, Object> redisTemplate;

    public RedisService(RedisTemplate<String, Object> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void setObject(String key, Object value) {
        redisTemplate.opsForValue().set(key, value);
    }

    public Object getObject(String key) {
        return redisTemplate.opsForValue().get(key);
    }

    public void addToSet(String key, Object value) {
        redisTemplate.opsForSet().add(key, value);
    }

    public Set<Object> getSetMembers(String key) {
        return redisTemplate.opsForSet().members(key);
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Advanced Redis Features</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Publish/Subscribe</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class MessagePublisher {
    private final RedisTemplate<String, String> redisTemplate;

    public MessagePublisher(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void publish(String channel, String message) {
        redisTemplate.convertAndSend(channel, message);
    }
}`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Time-to-Live (TTL)</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class CacheService {
    private final RedisTemplate<String, String> redisTemplate;

    public CacheService(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void setWithTtl(String key, String value, long seconds) {
        redisTemplate.opsForValue().set(key, value, seconds, TimeUnit.SECONDS);
    }
}`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Atomic Counters</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class CounterService {
    private final RedisTemplate<String, String> redisTemplate;

    public CounterService(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public Long incrementCounter(String key) {
        return redisTemplate.opsForValue().increment(key);
    }

    public Long decrementCounter(String key) {
        return redisTemplate.opsForValue().decrement(key);
    }
}`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Session Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Component
public class SessionManager {
    private final RedisTemplate<String, String> redisTemplate;

    public SessionManager(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void createSession(String sessionId, String userData) {
        redisTemplate.opsForValue().set("session:" + sessionId, userData, 30, TimeUnit.MINUTES);
    }

    public String getSession(String sessionId) {
        return redisTemplate.opsForValue().get("session:" + sessionId);
    }
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Caching Strategies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use appropriate TTLs based on data freshness requirements</li>
                    <li>Implement cache eviction policies for stale data</li>
                    <li>Use keys with meaningful prefixes for organization</li>
                    <li>Avoid storing large objects; prefer references to external storage</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use pipelining for bulk operations</li>
                    <li>Choose the most efficient data structure for your use case</li>
                    <li>Monitor memory usage and evict unused data</li>
                    <li>Use Redis clusters for horizontal scaling</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Data Modeling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Model related data together when possible</li>
                    <li>Use Hashes for structured data instead of JSON strings</li>
                    <li>Leverage Redis Streams for event sourcing patterns</li>
                    <li>Use Sorted Sets for ranked or time-based data</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Spring-Specific Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use @Cacheable annotations for declarative caching</li>
                    <li>Customize Redis serialization if needed</li>
                    <li>Implement Redis repositories for complex object models</li>
                    <li>Use Redis connection pooling in production environments</li>
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
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# Redis configuration
spring.data.redis.host=localhost
spring.data.redis.port=6379
spring.data.redis.timeout=6000ms
spring.data.redis.lettuce.pool.max-active=8
spring.data.redis.lettuce.pool.max-idle=4
spring.data.redis.lettuce.pool.min-idle=1
spring.data.redis.lettuce.pool.max-wait=2000ms`}
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
{`public class User implements Serializable {
    private Long id;
    private String name;
    private String email;
    
    public User(Long id, String name, String email) {
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
                <CardTitle>UserRedisRepository.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class UserRedisRepository {
    private final RedisTemplate<String, User> redisTemplate;

    public UserRedisRepository(RedisTemplate<String, User> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public void save(User user) {
        redisTemplate.opsForValue().set("user:" + user.getId(), user, 10, TimeUnit.MINUTES);
    }

    public User findById(Long id) {
        return redisTemplate.opsForValue().get("user:" + id);
    }

    public void deleteById(Long id) {
        redisTemplate.delete("user:" + id);
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Caching Service Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>ProductCacheService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
@RequiredArgsConstructor
public class ProductCacheService {
    private final RedisTemplate<String, Product> redisTemplate;

    @Cacheable("products")
    public Product getProduct(Long productId) {
        // In reality, this would query a database
        return fetchProductFromDatabase(productId);
    }

    public void updateProduct(Product product) {
        redisTemplate.opsForValue().set("product:" + product.getId(), product, 5, TimeUnit.MINUTES);
    }

    public void clearProductCache(Long productId) {
        redisTemplate.delete("product:" + productId);
    }

    private Product fetchProductFromDatabase(Long productId) {
        // Simulate database lookup
        return new Product(productId, "Product " + productId, BigDecimal.valueOf(10.0));
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
                  <CardTitle>Exercise 1: Basic Caching</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Set up a local Redis instance</li>
                    <li>Create a simple service that caches results using Redis</li>
                    <li>Implement basic CRUD operations for cached entities</li>
                    <li>Test caching by measuring response times before and after first access</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Advanced Data Structures</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Implement a leaderboard using Redis Sorted Sets</li>
                    <li>Create a message queue using Redis Lists</li>
                    <li>Build a rate limiter using Redis atomic operations</li>
                    <li>Store and retrieve complex objects using Redis Hashes</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Real-Time Analytics</CardTitle>
                <CardHeader>
                  <CardTitle>Advanced level</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Track user activity in real-time using Redis</li>
                    <li>Implement approximate unique visitor count using HyperLogLog</li>
                    <li>Build a real-time dashboard showing current activity</li>
                    <li>Implement Pub/Sub to push updates to front-end clients</li>
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
                        href="https://docs.spring.io/spring-data/redis/docs/current/reference/html/#redis"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Data Redis Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://redis.io/documentation/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Redis Official Documentation
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
                        href="https://www.amazon.com/Redis-Action-Josiah-Ledford/dp/161729508X"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Redis in Action by Josiah Ledford
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Learning-Redis-Practical-Messaging-Caching/dp/178778017X"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Learning Redis by Abhishek Vedpathak
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
                        href="https://www.baeldung.com/spring-data-redis-tutorial"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Data Redis Tutorial
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-boot-cache-redis/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Redis Caching in Spring Boot
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
                        href="/modules/database/nosql/mongodb"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        MongoDB Module
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
          <Link href="/modules/database/nosql/mongodb">← MongoDB</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/database/nosql/cassandra">Next: Cassandra →</Link>
        </Button>
      </div>
    </div>
  )
}
