import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SecurityConfigModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Security Configurations</h1>
          <Badge>Module 7.2</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to configure Spring Security in your applications using Java-based configuration
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
            <h2 className="text-2xl font-bold tracking-tight">Why Configure Spring Security?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Security is highly configurable and can be tailored to meet specific application needs.
                While it provides sensible defaults, custom configuration allows developers to:
              </p>
              
              <ul>
                <li>Define which URLs are secured vs public</li>
                <li>Customize authentication mechanisms</li>
                <li>Implement role-based access control</li>
                <li>Configure CSRF protection and session management</li>
                <li>Integrate with external identity providers</li>
              </ul>
              
              <p>
                In Spring Boot, security configuration is typically done through a class annotated with
                <code>@EnableWebSecurity</code>, allowing fine-grained control over security rules and policies.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Key Configuration Areas</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Area</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>URL Protection</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Control access to different endpoints</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Allow unauthenticated access to /api/public/**</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Login Form</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Customize login process and page</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Redirect users after successful login</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Password Encoding</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Securely store and validate passwords</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use BCryptPasswordEncoder instead of plain text</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>CSRF Protection</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevent cross-site request forgery attacks</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Disable for REST APIs that use tokens</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Session Management</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Control session creation and invalidation</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set maximum sessions per user</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Security Configuration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                A typical Spring Security configuration class looks like this:
              </p>
              
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Configuration
@EnableWebSecurity
public class SecurityConfig {
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
                This configuration allows unrestricted access to <code>/api/public/**</code>, and requires authentication for all other endpoints.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Security Configuration Options</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Access Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`.authorizeHttpRequests(auth -> auth
    .requestMatchers("/api/admin/**").hasRole("ADMIN")
    .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
    .anyRequest().authenticated())`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>CORS & CSRF</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`.csrf(csrf -> csrf.disable())
.cors(cors -> cors.configurationSource(request -> {
    var config = new CorsConfiguration();
    config.setAllowedOrigins(List.of("https://trusted-origin.com"));
    config.setAllowedMethods(List.of("GET", "POST"));
    return config;
}))`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Session Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`.sessionManagement(session -> session
    .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
    .maximumSessions(1)
    .maxSessionsPreventsLogin(true))`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Logout Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`.logout(logout -> logout
    .logoutUrl("/api/auth/logout")
    .clearAuthentication(true)
    .invalidateHttpSession(true)
    .deleteCookies("JSESSIONID"))`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Security Patterns</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Pattern</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Simple Form Login</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Default login form with username/password</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Quick setup for internal apps</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>OAuth2 Integration</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Uses third-party provider for authentication</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Social logins and SSO support</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>JWT Token Auth</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stateless token-based authentication</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Microservices and mobile-friendly APIs</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>LDAP Authentication</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enterprise authentication via directory service</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Intranet apps and legacy systems</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Method-Level Security</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Add <code>@PreAuthorize</code> or <code>@Secured</code> to methods</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fine-grained control over business logic</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Security Configuration</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Secure by Default</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Always start with secure defaults</li>
                    <li>Only expose what’s necessary</li>
                    <li>Keep sensitive data behind authenticated layers</li>
                    <li>Validate all inputs before processing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Layered Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Combine URL-level and method-level security</li>
                    <li>Use roles and permissions together</li>
                    <li>Don’t rely solely on front-end validation</li>
                    <li>Log failed attempts for auditing</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Secret Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never hard-code secrets in source code</li>
                    <li>Use environment variables or secret manager</li>
                    <li>Rotate keys regularly</li>
                    <li>Encrypt sensitive data in databases</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Avoid excessive filtering</li>
                    <li>Cache frequent authorization decisions</li>
                    <li>Minimize overhead for public endpoints</li>
                    <li>Use stateless auth where possible</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Security Setup</h2>
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
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Disabling CSRF for Stateless APIs</h2>
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
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            );
        
        return http.build();
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
                  <CardTitle>Exercise 1: Custom Login Page</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a custom HTML login page</li>
                    <li>Update SecurityConfig to use custom login form</li>
                    <li>Add success and failure handlers</li>
                    <li>Test login with valid and invalid credentials</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Method-Level Security</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Enable method security using <code>@EnableMethodSecurity</code></li>
                    <li>Add <code>@PreAuthorize</code> to service methods</li>
                    <li>Test access with users having different roles</li>
                    <li>Verify unauthorized access is blocked</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Secure Admin Endpoints</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create admin-specific API endpoints</li>
                    <li>Protect them using hasRole("ADMIN")</li>
                    <li>Implement audit logging for admin actions</li>
                    <li>Add rate limiting for admin routes</li>
                    <li>Test with different user roles</li>
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
                        href="https://docs.spring.io/spring-security/reference/html5/#security-configuration"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security Reference Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-security/reference/html5/#method-security"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Method-Level Security Guide
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
                        Spring Security Cookbook by Gopal Dahale
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
                        href="https://www.baeldung.com/spring-security-basic-auth"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Basic Auth in Spring Security
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-security-method-security/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Method Security in Spring
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
                        href="/modules/security/basic/rbac"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Role-Based Access Control Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/security/basic/password-encoding"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Password Encoding Module
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
          <Link href="/modules/security/basic/auth">← Authentication</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/security/basic/integration">Next: Security Integration →</Link>
        </Button>
      </div>
    </div>
  )
}
