import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function CsrfProtectionModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Cross-Site Request Forgery (CSRF)</h1>
          <Badge>Module 7.7</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to protect your Spring Boot applications from CSRF attacks
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
            <h2 className="text-2xl font-bold tracking-tight">What is CSRF?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application where they are currently authenticated.
                With Spring Security, CSRF protection is enabled by default for web applications.
              </p>

              <p>How CSRF attacks typically work:</p>
              <ol>
                <li>User logs into a secure site (e.g., banking app)</li>
                <li>Without logging out, they visit a malicious website</li>
                <li>The malicious site sends a request to the secure site using the user's credentials</li>
                <li>The secure site processes the request because the user is still logged in</li>
              </ol>

              <p>
                In Spring Security, CSRF protection works by generating and validating tokens for each state-changing request,
                ensuring the request originated from your own application.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">CSRF Protection Mechanisms</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mechanism</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Synchronizer Token Pattern</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Server generates a unique token per session</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Standard web apps with forms</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Cookie-to-Header Token</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Token stored in cookie and header</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stateless APIs and SPAs</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Double Submit Cookie</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Token sent in both cookie and header</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Simple CSRF protection for APIs</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SameSite Cookies</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Browser enforces cookie policy</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Modern browser-based protection</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Origin Header Validation</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Check request origin against allowed list</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">APIs and backend services</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Protect Against CSRF?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Security Risks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Unauthorized fund transfers</li>
                    <li>Profile updates without consent</li>
                    <li>Password changes by attackers</li>
                    <li>Data deletion or manipulation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance & Trust</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Meet PCI-DSS requirements</li>
                    <li>Pass penetration testing</li>
                    <li>Build user trust in your platform</li>
                    <li>Avoid legal liability from breaches</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Application Stability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Prevent unexpected state changes</li>
                    <li>Reduce fraud and abuse</li>
                    <li>Minimize unauthorized access</li>
                    <li>Improve audit trail integrity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Modern Web Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Support SameSite cookies</li>
                    <li>Integrate with modern frameworks</li>
                    <li>Follow OWASP Top 10 guidelines</li>
                    <li>Enable secure API communication</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing CSRF Protection in Spring</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Security enables CSRF protection by default for web applications. It uses the Synchronizer Token Pattern
                to generate and validate tokens for form submissions and AJAX requests.
              </p>

              <h3>Add Dependency (Spring Boot):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
                {`<!-- Maven -->
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>`}
              </pre>

              <h3>Basic Configuration:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
                {`@Configuration
@EnableWebSecurity
public class CsrfConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
            );

        return http.build();
    }
}`}
              </pre>

              <h3>Using CSRF Token in HTML:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
                {`<form th:action="@{/api/secure-action}" method="post">
    <input type="hidden" th:name="${_csrf.parameterName}" th:value="${_csrf.token}"/>
    <!-- Form fields -->
</form>`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">CSRF vs Stateless APIs</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Approach</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">When to Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Standard CSRF</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Uses server-side session tracking</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Traditional web apps with sessions</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>JWT Tokens</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stateless authentication via bearer tokens</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">REST APIs and mobile apps</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Cookie + Header Token</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Store token in cookie and send in header</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">SPAs and modern frontends</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Disable CSRF</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Turn off CSRF validation</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Stateless APIs using JWT/OAuth2</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for CSRF Protection</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Implementation Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Always use HTTPS for CSRF protection</li>
                    <li>Set SameSite=Strict on session cookies</li>
                    <li>Validate CSRF tokens on all POST/PUT/DELETE endpoints</li>
                    <li>Use short-lived tokens where possible</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Testing & Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Simulate CSRF attacks during QA</li>
                    <li>Log rejected tokens for auditing</li>
                    <li>Monitor token expiration patterns</li>
                    <li>Test behavior after token expiration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>UI Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Automatically include CSRF token in forms</li>
                    <li>Handle token errors gracefully</li>
                    <li>Refresh tokens periodically</li>
                    <li>Support CSRF in AJAX requests</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API & Mobile Apps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use JWT instead of session-based CSRF</li>
                    <li>Implement token refresh mechanisms</li>
                    <li>Propagate tokens securely</li>
                    <li>Use short-lived tokens with refresh tokens</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic CSRF Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>SecurityConfig.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  {`@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .csrf(csrf -> csrf
                .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
            );

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
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  {`@Configuration
@EnableWebSecurity
public class StatelessSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
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
                  <CardTitle>Exercise 1: Basic CSRF Protection</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Spring Boot app with Thymeleaf and Security</li>
                    <li>Implement a simple login form</li>
                    <li>Verify CSRF token is included in POST requests</li>
                    <li>Try submitting the form without a token and verify rejection</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Secure API Endpoints</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create REST API with secured POST endpoint</li>
                    <li>Attempt to call the API from an external domain</li>
                    <li>Add CSRF protection to the API</li>
                    <li>Include the token in headers for a successful call</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Custom CSRF Handling</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a custom CSRF token resolver</li>
                    <li>Implement token storage in Redis</li>
                    <li>Inject the token into response headers</li>
                    <li>Validate tokens across multiple instances</li>
                    <li>Support token rotation and invalidation</li>
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
                        href="https://docs.spring.io/spring-security/reference/html5/#csrf"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security CSRF Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://owasp.org/www-community/attacks/csrf"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        OWASP: Cross-Site Request Forgery
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
                        href="https://www.baeldung.com/spring-security-csrf"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Understanding CSRF in Spring
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-csrf/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Spring CSRF Protection Guide
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
          <Link href="/modules/security/advanced/best-practices">← Best Practices</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/security/advanced/jwt">Next: JWT →</Link>
        </Button>
      </div>
    </div>
  )
}
