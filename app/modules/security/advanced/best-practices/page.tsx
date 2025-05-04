import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SecurityBestPracticesModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Security Best Practices</h1>
          <Badge>Module 7.6</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn advanced security best practices for building production-grade Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">Why Advanced Security Matters</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                As applications move beyond basic authentication and authorization, they face more sophisticated threats.
                Implementing advanced security practices helps protect against attacks like CSRF, XSS, SQL injection,
                privilege escalation, and more.
              </p>
              
              <p>Key areas of advanced security include:</p>
              <ul>
                <li><strong>Input Validation:</strong> Sanitize all user input before processing</li>
                <li><strong>Secure Headers:</strong> Set headers to prevent browser vulnerabilities</li>
                <li><strong>CORS Configuration:</strong> Restrict cross-origin access carefully</li>
                <li><strong>Session Management:</strong> Secure cookies and manage timeouts</li>
                <li><strong>Rate Limiting:</strong> Prevent abuse through rate limiting and throttling</li>
                <li><strong>Threat Modeling:</strong> Identify and mitigate potential attack vectors</li>
              </ul>
              
              <p>
                In Spring Security, many of these can be implemented via configuration or custom filters.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Security Threats & Mitigations</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Threat</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Risk</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Mitigation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>CSRF</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Forced action via forged requests</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enable CSRF protection in Spring Security</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>XSS</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Malicious scripts in user content</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use HTML sanitization and Content-Security-Policy headers</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SQL Injection</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Database manipulation via crafted input</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use parameterized queries or ORM frameworks</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Hijacking</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Session stealing or impersonation</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use secure cookies and HTTPS</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Insecure Direct Object References</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unauthorized access to protected data</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Implement proper authorization checks</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Secure HTTP Headers</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Header</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Spring Configuration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Content-Security-Policy</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevents unauthorized script execution</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm">
{`.headers(headers -> headers
    .contentSecurityPolicy("default-src 'self'")}`}
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Strict-Transport-Security</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enforces HTTPS connections</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm">
{`.headers(headers -> headers
    .httpStrictTransportSecurity()
    .maxAgeInSeconds(31536000)
    .includeSubdomains(true)}`}
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>X-Frame-Options</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevents clickjacking attacks</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm">
{`.headers(headers -> headers
    .frameOptions().sameOrigin())`}
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>X-Content-Type-Options</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Prevents MIME-sniffing attacks</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm">
{`.headers(headers -> headers
    .contentTypeOptions().stNoSniff())`}
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>X-XSS-Protection</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enables browser XSS filtering</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm">
{`.headers(headers -> headers
    .xssProtection().block(true))`}
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Security Advanced Configuration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                You can implement multiple security practices in a single configuration class:
              </p>
              
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Configuration
@EnableWebSecurity
public class AdvancedSecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .csrf(csrf -> csrf.disable())
            .headers(headers -> headers
                .httpStrictTransportSecurity()
                .maxAgeInSeconds(31536000)
                .includeSubdomains(true)
                .and()
                .frameOptions().sameOrigin()
                .and()
                .xssProtection().block(true))
            .sessionManagement(session -> session
                .maximumSessions(1)
                .maxSessionsPreventsLogin(true)
                .sessionFixation().migrateSession());
        
        return http.build();
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Top 10 Advanced Security Tips</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Implementation Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm">
                    <li>1. Always use HTTPS in production</li>
                    <li>2. Disable unnecessary headers</li>
                    <li>3. Use strong password policies</li>
                    <li>4. Enable CSRF protection for web apps</li>
                    <li>5. Validate and sanitize all inputs</li>
                    <li>6. Set reasonable session timeouts</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Monitoring & Observability</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm">
                    <li>7. Log failed login attempts</li>
                    <li>8. Monitor security headers compliance</li>
                    <li>9. Track token expiration and reuse</li>
                    <li>10. Audit security configurations regularly</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Hardening</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm">
                    <li>11. Run OWASP ZAP scans</li>
                    <li>12. Test for XSS and SQLi vulnerabilities</li>
                    <li>13. Use security lint tools</li>
                    <li>14. Simulate breach scenarios</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Compliance & Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm">
                    <li>15. Meet GDPR and CCPA requirements</li>
                    <li>16. Encrypt sensitive data at rest and in transit</li>
                    <li>17. Support audit logging and retention</li>
                    <li>18. Implement multi-factor authentication</li>
                  </ol>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices Checklist</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Practice</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Recommended</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enable CSRF Protection</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">✅ Yes</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Disable only for stateless APIs</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Set Strict-Transport-Security</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">✅ Yes</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Include subdomains and set long duration</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use BCryptPasswordEncoder</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">✅ Yes</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Avoid SHA-256 and MD5</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enable Frame Options</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">✅ Yes</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use SAMEORIGIN or DENY</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Log Failed Authentication</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">✅ Yes</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Track IP address and timestamp</td>
                </tr>
              </tbody>
            </table>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Secure Session Management</h2>
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
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">CORS Policy Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>SecurityConfig.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`.cors(cors -> cors.configurationSource(request -> {
    var config = new CorsConfiguration();
    config.setAllowedOrigins(List.of("https://trusted-domain.com", "https://api.trusted-api.com"));
    config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE"));
    config.setAllowedHeaders(List.of("Authorization", "Content-Type", "Accept"));
    config.setExposedHeaders(List.of("X-Custom-Header"));
    config.setMaxAge(3600);
    config.setAllowCredentials(true);
    return config;
}))`}
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
                  <CardTitle>Exercise 1: Secure Headers</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot app with Web and Security dependencies</li>
                    <li>Add HSTS, X-Frame-Options, and CSP headers</li>
                    <li>Verify headers are present in responses</li>
                    <li>Test behavior in browsers and interceptors</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Input Sanitization</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Build API that accepts user-submitted HTML</li>
                    <li>Implement sanitization using JSoup or OWASP Encoder</li>
                    <li>Attempt to inject malicious scripts</li>
                    <li>Verify output is sanitized and safe</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Rate-Limited Login</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Implement login endpoint with custom logic</li>
                    <li>Add Redis or Guava rate limiter</li>
                    <li>Track failed attempts per username/IP</li>
                    <li>Lock account after N failed attempts</li>
                    <li>Send email notification on lockout</li>
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
                        href="https://docs.spring.io/spring-security/reference/html5/#security-headers"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security HTTP Headers Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://owasp.org/www-project-cheat-sheets/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        OWASP Cheat Sheets
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
                        href="https://www.amazon.com/Securing-Spring-Security-Rajesh-Ojha/dp/1789535855"
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
                        href="https://www.baeldung.com/spring-security-custom-filter"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Custom Security Filters in Spring
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-security-best-practices/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Spring Security Best Practices
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
                        href="/modules/security/advanced/csrf"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Cross-Site Request Forgery Module
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
          <Link href="/modules/security/basic/rbac">← RBAC</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/security/advanced/csrf">Next: CSRF →</Link>
        </Button>
      </div>
    </div>
  )
}
