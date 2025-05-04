import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SessionManagementModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Session Management</h1>
          <Badge>Module 7.10</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to manage user sessions securely in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">What is Session Management?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Session management refers to the process of creating, maintaining, and securing user sessions across multiple requests.
                In Spring Security, it involves managing cookies, tracking active sessions, and ensuring that users remain authenticated
                while interacting with an application.
              </p>
              
              <p>Key components of session management:</p>
              <ul>
                <li><strong>Session Creation:</strong> When does a session get created?</li>
                <li><strong>Session Fixation:</strong> How to prevent fixation attacks</li>
                <li><strong>Session Timeout:</strong> How long should a session last?</li>
                <li><strong>Concurrent Sessions:</strong> How many sessions per user?</li>
                <li><strong>Session Invalidation:</strong> When should a session end?</li>
              </ul>
              
              <p>
                Spring Security provides built-in support for session management through configuration options and listeners,
                allowing developers to implement secure and scalable session handling.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Session Management Concepts</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Concept</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Session Creation Policy</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Control when sessions are created</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stateless vs traditional web apps</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Timeout Handling</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Define maximum session duration</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Logout after period of inactivity</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Concurrent Sessions</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Limit number of simultaneous logins</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevent credential sharing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Fixation Protection</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevent session hijacking via fixed ID</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Secure login and logout processes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Invalidate on Logout</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">End session when user logs out</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Ensure clean session termination</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Why Secure Session Management Matters</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Prevents unauthorized access after logout</li>
                    <li>Reduces risk of session hijacking</li>
                    <li>Builds confidence in app security</li>
                    <li>Meets regulatory compliance requirements</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Operational Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Tracks active sessions for auditing</li>
                    <li>Supports remote session termination</li>
                    <li>Logs suspicious session activity</li>
                    <li>Monitors session creation patterns</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Compliance & Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Meets GDPR, HIPAA, PCI-DSS standards</li>
                    <li>Supports session timeouts for sensitive data</li>
                    <li>Provides audit trail for login/logout events</li>
                    <li>Tracks IP addresses and device fingerprints</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Modern Web Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Uses SameSite cookies to prevent CSRF</li>
                    <li>Sets Secure and HttpOnly flags</li>
                    <li>Supports token-based auth where appropriate</li>
                    <li>Integrates with distributed session stores</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing Session Management in Spring Security</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To configure session management in Spring Security:
              </p>
              
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>`}
              </pre>
              
              <h3>Basic Configuration:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Configuration
@EnableWebSecurity
public class SessionSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                .maximumSessions(1)
                .maxSessionsPreventsLogin(true)
                .invalidSessionStrategy(strategy -> strategy
                    .onInvalidSessionDetected((request, response, ex) -> {
                        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Session Expired");
                    }))
            );
        
        return http.build();
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Common Session Attacks & Mitigations</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Attack Type</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mitigation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Session Hijacking</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stealing session tokens via XSS or network monitoring</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use HTTPS, regenerate tokens on login, set HttpOnly/SameSite</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Session Fixation</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Forcing a user to use a known session ID</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Regenerate session ID after authentication</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Brute Force</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Guessing valid session IDs</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use strong random session IDs, short expiration times</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Cross-Site Request Forgery</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Forged requests using stolen session cookie</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enable CSRF protection alongside session management</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Session Sidejacking</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Sniffing session cookies over unencrypted connections</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Always use HTTPS for session cookies</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for Session Management</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Cookie Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Set <code>HttpOnly</code> flag to prevent XSS attacks</li>
                    <li>Use <code>Secure</code> flag to enforce HTTPS</li>
                    <li>Set <code>SameSite=Strict</code> or <code>Lax</code> for CSRF protection</li>
                    <li>Avoid storing sensitive data in cookies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Session Lifecycle</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Generate new session ID on successful login</li>
                    <li>Invalidate session on logout</li>
                    <li>Set reasonable timeout (e.g., 30 minutes)</li>
                    <li>Track active sessions per user</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Password-Based Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Re-authenticate before critical operations</li>
                    <li>Log out all sessions on password change</li>
                    <li>Store minimal state in session</li>
                    <li>Use short-lived session cookies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Distributed Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use Redis or Hazelcast for cluster-wide sessions</li>
                    <li>Encrypt session data at rest</li>
                    <li>Support sticky sessions in load balancer</li>
                    <li>Implement session replication across nodes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Basic Session Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>SecurityConfig.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Configuration
@EnableWebSecurity
public class SessionConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .sessionManagement(session -> session
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                .maximumSessions(1)
                .maxSessionsPreventsLogin(true)
                .sessionFixation().migrateSession()
                .invalidSessionStrategy(strategy -> strategy
                    .onInvalidSessionDetected((request, response, ex) -> {
                        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Session Expired");
                    }))
            )
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            );
        
        return http.build();
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Distributed Session Store</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`spring.session.store-type=redis
spring.redis.host=localhost
spring.redis.port=6379`}
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
                  <CardTitle>Exercise 1: Secure Cookie Flags</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Spring Boot app with security starter</li>
                    <li>Configure session management in SecurityConfig</li>
                    <li>Set HttpOnly, Secure, and SameSite flags</li>
                    <li>Verify cookie properties in browser developer tools</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Concurrent Session Control</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Enable concurrent session control</li>
                    <li>Set maximum sessions per user</li>
                    <li>Test behavior when exceeding limit</li>
                    <li>Display active sessions in UI</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Distributed Session Store</CardTitle>
                  <CardDescription>Advanced level</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Install Redis server</li>
                    <li>Configure Spring Session with Redis</li>
                    <li>Run multiple instances of your app</li>
                    <li>Verify session persists across restarts</li>
                    <li>Simulate failover and test session continuity</li>
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
                        href="https://docs.spring.io/spring-security/reference/html5/#session-management"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security Session Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-session/docs/current/reference/html5/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Session Reference
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
                        href="https://www.amazon.com/Securing-Spring-Microservices-Rajesh-Ojha/dp/1789535855"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Securing Spring Microservices by Rajesh Ojha
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Spring-Security-Cookbook-Gopal-Dahale/dp/1787780196"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Security Cookbook by Gopal Dahale
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
                        href="https://www.baeldung.com/spring-security-session"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Security Session Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-security-session-management/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Session Management in Spring
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
                        href="/modules/security/basic/auth"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Authentication Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/security/advanced/csrf"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Cross-Site Request Forgery Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/security/advanced/jwt"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        JSON Web Tokens Module
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
          <Link href="/modules/security/advanced/oauth2">← OAuth2 Integration</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/security/advanced/best-practices">Next: Best Practices →</Link>
        </Button>
      </div>
    </div>
  )
}
