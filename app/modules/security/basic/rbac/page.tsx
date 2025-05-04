import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function RbacModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Role-Based Access Control</h1>
          <Badge>Module 7.5</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement role-based access control (RBAC) in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">What is RBAC?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Role-Based Access Control (RBAC) is a method of regulating access to system resources based on user roles.
                In Spring Security, it allows developers to define permissions and restrict access to endpoints,
                methods, or UI elements based on assigned roles.
              </p>
              
              <p>Key concepts in RBAC:</p>
              <ul>
                <li><strong>Role:</strong> A named group representing a set of permissions</li>
                <li><strong>Permission:</strong> The ability to perform an action (read, write, delete)</li>
                <li><strong>User:</strong> An authenticated entity that may be assigned one or more roles</li>
                <li><strong>Resource:</strong> Anything that needs to be protected (URLs, methods, data)</li>
              </ul>
              
              <p>
                In Spring Security, RBAC is implemented using annotations like <code>@Secured</code>, 
                <code>@PreAuthorize</code>, and configuration via <code>SecurityFilterChain</code>.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">RBAC vs ACL</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Aspect</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">RBAC</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">ACL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Access Model</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Based on roles and groups</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Based on individual users</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Scalability</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Scales well with many users</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Harder to manage at scale</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Granularity</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Coarse-grained (role level)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Fine-grained (user level)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Management</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Easier to maintain and update</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">More complex with many users</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Use Case</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Enterprise apps with clear roles</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Highly sensitive or custom systems</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing RBAC in Spring Security</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>URL-Level Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Configuration
@EnableWebSecurity
public class RbacConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(withDefaults());
        
        return http.build();
    }
}`}
                  </pre>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Method-Level Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class AdminService {
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteUserAccount(Long userId) {
        // Only admins can call this method
    }

    @PostAuthorize("hasRole('ADMIN') or #userId == authentication.principal.id")
    public User getUserDetails(Long userId) {
        return userRepository.findById(userId);
    }
}`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Common Roles in Web Applications</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Role</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example Use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ROLE_ANONYMOUS</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Unauthenticated users</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Public landing pages</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ROLE_USER</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Basic authenticated users</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">User dashboard access</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ROLE_ADMIN</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Administrative privileges</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Managing users and settings</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ROLE_AUDIT</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Audit trail access</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Compliance and logging</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>ROLE_API</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">API client access</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Third-party integrations</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Security Configuration Example</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To enable method-level security:
              </p>
              
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>`}
              </pre>
              
              <h3>Enable Method Security:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class RbacSecurityConfig {
    // Filter chain and other config...
}`}
              </pre>
              
              <h3>Secure Service Methods:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Service
public class OrderService {
    @PreAuthorize("hasRole('ADMIN')")
    public void cancelOrder(Long orderId) {
        // Only admin can cancel orders
    }

    @PreAuthorize("hasRole('USER') or hasRole('PREMIUM_USER')")
    public Order getOrderDetails(Long orderId) {
        // Both roles can view order
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for RBAC Implementation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Role Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Define roles based on job functions</li>
                    <li>Avoid overly broad roles</li>
                    <li>Use hierarchical roles where appropriate</li>
                    <li>Review and audit roles regularly</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Access Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Apply least privilege principle</li>
                    <li>Use pre-authorization and post-authorization</li>
                    <li>Log access attempts and denials</li>
                    <li>Support dynamic role assignment</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>UI Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Hide unauthorized UI elements</li>
                    <li>Don't rely solely on UI for security</li>
                    <li>Use Thymeleaf or React conditional rendering</li>
                    <li>Provide meaningful error messages</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Testing & Validation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Test all combinations of roles and URLs</li>
                    <li>Verify fallback behavior for missing roles</li>
                    <li>Test unauthorized access returns 403/401</li>
                    <li>Validate role changes take effect immediately</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic URL Protection</h2>
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
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(withDefaults());
        
        return http.build();
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Assigning Roles to Users</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserDetailsService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    public CustomUserDetailsService(UserRepository repo) {
        this.userRepository = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        return User.builder()
                   .username(user.getUsername())
                   .password(user.getPassword())
                   .roles(user.getRoles().toArray(new String[0]))
                   .build();
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
                  <CardTitle>Exercise 1: Basic Role Assignment</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with Security starter</li>
                    <li>Implement simple user store with roles</li>
                    <li>Protect /api/admin with ROLE_ADMIN</li>
                    <li>Test access with different roles</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Hierarchical Roles</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Define role hierarchy (e.g., USER < ADMIN)</li>
                    <li>Assign inherited permissions</li>
                    <li>Test access with lower-level roles</li>
                    <li>Verify authorization works as expected</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Dynamic Role Management</CardTitle>
                  <CardDescription>Advanced level</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create API to assign roles to users</li>
                    <li>Implement role validation logic</li>
                    <li>Build UI to manage user roles</li>
                    <li>Ensure only admins can change roles</li>
                    <li>Test real-time permission updates</li>
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
                        href="https://docs.spring.io/spring-security/reference/html5/#method-security"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security Method-Level Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-security/reference/html5/#url-access-control"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security URL Access Docs
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
                        href="https://www.baeldung.com/role-and-privilege-in-spring-security"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Roles and Privileges
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-method-security/"
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
                        href="/modules/security/basic/password-encoding"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Password Encoding Module
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/modules/security/basic/integration"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Security Integration Module
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
          <Link href="/modules/security/basic/password-encoding">← Password Encoding</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/security/basic/configurations">Next: Security Configurations →</Link>
        </Button>
      </div>
    </div>
  )
}
