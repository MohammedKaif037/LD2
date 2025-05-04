import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function PasswordEncodingModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Password Encoding</h1>
          <Badge>Module 7.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to securely encode and store user passwords in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">Why Password Encoding is Important</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Storing passwords in plain text is a major security risk. Password encoding ensures that even if your database is compromised,
                attackers can't easily retrieve user credentials.
              </p>
              
              <p>Key reasons to use password encoding:</p>
              <ul>
                <li><strong>Password Protection:</strong> Prevents exposure of raw credentials</li>
                <li><strong>Compliance:</strong> Meets data protection standards like GDPR and HIPAA</li>
                <li><strong>Audit Requirements:</strong> Passes security audits and penetration tests</li>
                <li><strong>User Trust:</strong> Builds confidence in your application's security</li>
              </ul>
              
              <p>
                In Spring Security, password encoding is handled by the <code>PasswordEncoder</code> interface,
                which provides a contract for encoding, matching, and upgrading passwords.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Common Password Encoders</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Encoder</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Strength</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>NoOpPasswordEncoder</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">None</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Development/testing only</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>BCryptPasswordEncoder</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Default choice for secure hashing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>PBKDF2PasswordEncoder</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">NIST-recommended key derivation</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SCryptPasswordEncoder</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Very High</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Memory-hard hashing for better security</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Argon2PasswordEncoder</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Very High</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Modern algorithm with tunable parameters</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">How Password Encoding Works</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Password Storage Flow</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-2 text-sm">
                    <li>User submits registration form with password</li>
                    <li>PasswordEncoder hashes the password</li>
                    <li>Hashed password is stored in database</li>
                    <li>User logs in again with plaintext password</li>
                    <li>PasswordEncoder matches hashed version</li>
                    <li>Login succeeds if match is valid</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Encoding Best Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Never store plain-text passwords</li>
                    <li>Use adaptive algorithms (e.g., BCrypt)</li>
                    <li>Re-encode passwords when they're updated</li>
                    <li>Automatically upgrade old hashes during login</li>
                    <li>Set appropriate strength for each encoder</li>
                    <li>Use salted hashes where supported</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing Password Encoder in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement password encoding in Spring Boot:
              </p>
              
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-security</artifactId>
</dependency>`}
              </pre>
              
              <h3>Create Encoder Bean:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}`}
              </pre>
              
              <h3>Use in Registration Service:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository repository, PasswordEncoder encoder) {
        this.userRepository = repository;
        this.passwordEncoder = encoder;
    }

    public void registerUser(User user) {
        String encoded = passwordEncoder.encode(user.getPassword());
        user.setPassword(encoded);
        userRepository.save(user);
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Password Hashing Comparison</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Algorithm</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Salt Support</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Adaptive</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Collision Resistance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>MD5</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Optional</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">No</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Low</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SHA-256</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Optional</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">No</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Medium</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>BCrypt</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Built-in</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Yes</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>PBKDF2</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Optional</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Yes</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">High</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>SCrypt</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Built-in</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Yes</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Very High</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for Secure Password Handling</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Password Policies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Enforce minimum length (at least 8 characters)</li>
                    <li>Require special characters and mixed case</li>
                    <li>Implement lockout after failed attempts</li>
                    <li>Track password history to prevent reuse</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Password Lifecycle</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Always hash before storing</li>
                    <li>Verify hash strength during login</li>
                    <li>Re-encode with stronger settings over time</li>
                    <li>Log suspicious password activity</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Secure Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use HTTPS for all login and registration</li>
                    <li>Store hashes in VARCHAR(60+) fields</li>
                    <li>Don’t expose encoding details in error messages</li>
                    <li>Monitor for credential stuffing attacks</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Password Recovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use token-based reset links</li>
                    <li>Set expiration for recovery tokens</li>
                    <li>Log and monitor password resets</li>
                    <li>Send confirmation emails for successful changes</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Basic Password Encoding</h2>
            <Card>
              <CardHeader>
                <CardTitle>PasswordEncoderConfig.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Configuration
public class PasswordEncoderConfig {
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Using Encoder in Service</h2>
            <Card>
              <CardHeader>
                <CardTitle>UserRegistrationService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Service
public class UserRegistrationService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserRegistrationService(UserRepository repo, PasswordEncoder encoder) {
        this.userRepository = repo;
        this.passwordEncoder = encoder;
    }

    public void registerNewUser(String username, String rawPassword) {
        String encoded = passwordEncoder.encode(rawPassword);
        User user = new User(username, encoded);
        userRepository.save(user);
    }
}`}
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
                  <CardTitle>Exercise 1: Basic Password Encoding</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create a Spring Boot project with Security starter</li>
                    <li>Implement BCryptPasswordEncoder bean</li>
                    <li>Build a simple user registration service</li>
                    <li>Test with multiple users and verify storage</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Upgrade Old Passwords</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create system with SHA-256 encoded passwords</li>
                    <li>Migrate to BCrypt using <code>DelegatingPasswordEncoder</code></li>
                    <li>Re-encode passwords during login process</li>
                    <li>Track migration progress in database</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Multi-Encoder Setup</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create custom <code>PasswordEncoder</code> implementations</li>
                    <li>Use <code>DelegatingPasswordEncoder</code> to support multiple encoders</li>
                    <li>Define rules for choosing encoder based on input</li>
                    <li>Test backward compatibility and upgrade paths</li>
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
                        href="https://docs.spring.io/spring-security/site/docs/current/apidocs/org/springframework/security/crypto/password/PasswordEncoder.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security PasswordEncoder API Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://www.baeldung.com/spring-security-password-storage"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Storing Passwords in Spring
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
                        href="https://reflectoring.io/spring-security-password-storage/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Password Storage in Spring
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://auth0.com/blog/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Auth0 Blog: Password Security Best Practices
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
                        href="/modules/security/basic/configurations"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        Security Configuration Module
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
          <Link href="/modules/security/basic/integration">← Integration</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/security/basic/rbac">Next: Role-Based Access Control →</Link>
        </Button>
      </div>
    </div>
  )
}
