import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SecurityAuthModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Authentication</h1>
          <Badge>Module 7.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn the fundamentals of authentication in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">What is Authentication?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Authentication is the process of verifying the identity of a user or system attempting to access an application.
                In Spring Security, it involves checking credentials against a known source (e.g., database, LDAP, OAuth) to determine
                if the requesting entity is who they claim to be.
              </p>
              
              <p>Key components of authentication in Spring Security:</p>
              <ul>
                <li><strong>UserDetailsService:</strong> Loads user data by username</li>
                <li><strong>PasswordEncoder:</strong> Encodes and matches passwords securely</li>
                <li><strong>AuthenticationProvider:</strong> Handles actual credential verification</li>
                <li><strong>SecurityFilterChain:</strong> Defines which URLs require protection</li>
                <li><strong>Login Page:</strong> Captures credentials from users</li>
              </ul>
              
              <p>
                Spring Boot provides multiple ways to implement authentication, from simple in-memory stores to complex OAuth2 integrations.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Types of Authentication</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Type</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>In-Memory</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Users are defined directly in configuration</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simple apps and demos</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>JDBC-Based</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Users stored in relational databases</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Production-ready apps with SQL stores</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>LDAP/AD</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Uses directory services for identity management</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enterprise environments with Active Directory</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>OAuth2 / OpenID</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Delegates authentication to external providers</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Third-party login and SSO support</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>JWT</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stateless token-based authentication</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Microservices and mobile-friendly APIs</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">How Spring Security Authenticates Users</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Authentication Flow</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm">
                    <li>1. User submits credentials via login form or header</li>
                    <li>2. Authentication object created with principal and credentials</li>
                    <li>3. ProviderManager delegates to appropriate AuthenticationProvider</li>
                    <li>4. UserDetailsService loads user details</li>
                    <li>5. PasswordEncoder verifies credentials</li>
                    <li>6. If successful, Authentication is stored in SecurityContext</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Core Interfaces</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li><code>UserDetails</code>: Holds user info like roles and enabled status</li>
                    <li><code>UserDetailsService</code>: Loads UserDetails by username</li>
                    <li><code>PasswordEncoder</code>: Encodes and validates passwords</li>
                    <li><code>AuthenticationProvider</code>: Verifies credentials</li>
                    <li><code>SecurityContextHolder</code>: Stores current user context</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Security Configuration Example</h2>
            <div className="prose dark:prose-invert max-w-none">
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Configuration
@EnableWebSecurity
public class AuthConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(withDefaults())
            .httpBasic(withDefaults());
        
        return http.build();
    }
}`}
              </pre>
              
              <p>
                This example allows unrestricted access to <code>/api/public/**</code>, and requires authentication for all other endpoints.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Authentication</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Secure Credential Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Always use HTTPS for login pages</li>
                    <li>Store passwords with strong hashing (BCrypt)</li>
                    <li>Use CSRF protection in web forms</li>
                    <li>Set session timeout and invalidation policies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Password Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Enforce minimum length and complexity</li>
                    <li>Implement lockout after failed attempts</li>
                    <li>Support password expiration and history</li>
                    <li>Log authentication events for auditing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Multi-Factor Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Consider 2FA for sensitive operations</li>
                    <li>Use TOTP, SMS, or email-based verification</li>
                    <li>Provide recovery options for lost devices</li>
                    <li>Integrate with identity providers like Okta or Auth0</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Session Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use secure cookies with HttpOnly and SameSite flags</li>
                    <li>Enable session fixation protection</li>
                    <li>Track active sessions per user</li>
                    <li>Allow remote session termination</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Form Login Setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`# Enable form login
spring.security.user.name=admin
spring.security.user.password=secure-password
spring.security.user.roles=USER`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">In-Memory Authentication</h2>
            <Card>
              <CardHeader>
                <CardTitle>SecurityConfig.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public UserDetailsService userDetailsService() {
        return new InMemoryUserDetailsManager(
            User.withUsername("user")
                .password(passwordEncoder().encode("password"))
                .roles("USER")
                .build(),
            User.withUsername("admin")
                .password(passwordEncoder().encode("admin123"))
                .roles("ADMIN")
                .build()
        );
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .formLogin(withDefaults());
        
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
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
                  <CardTitle>Exercise 1: Basic Login Page</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with Web and Security dependencies</li>
                    <li>Add Spring Security starter to build file</li>
                    <li>Implement form login with custom HTML page</li>
                    <li>Test login with default in-memory user</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Custom User Details</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create User model with extra fields (email, phone, etc.)</li>
                    <li>Implement custom UserDetailsService</li>
                    <li>Load user from database or mock store</li>
                    <li>Pass additional details to authentication</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Authentication Events</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create event listener for successful logins</li>
                    <li>Log IP address and timestamp</li>
                    <li>Send notification on suspicious activity</li>
                    <li>Implement account lockout after N failed attempts</li>
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
                        href="https://docs.spring.io/spring-security/reference/html5/#authentication"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security Authentication Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/spring-security-login-authentication"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Authentication Guide
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
                        href="https://www.amazon.com/Spring-Security-Cookbook-Gopal-Dahale/dp/1787780196"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Security Cookbook
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.amazon.com/Spring-Security-5-Cookbook-Protection/dp/1801070094"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Security 5.x Cookbook
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
                        href="https://reflectoring.io/spring-security-login/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Spring Security Login Guide
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.callicoder.com/spring-boot-spring-security-jpa-hibernate-mysql-database-example/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Callicoder: JPA + Spring Security
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
                        href="/modules/security/basic/password-encoding"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Password Encoding Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/security/basic/rbac"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Role-Based Access Control Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/security/basic/configurations"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Security Configurations Module
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
          <Link href="/modules/fundamentals/configuration/annotations">← Annotations</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/security/basic/password-encoding">Next: Password Encoding →</Link>
        </Button>
      </div>
    </div>
  )
}
