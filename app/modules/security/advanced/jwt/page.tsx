import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function JwtSecurityModule() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">JSON Web Tokens</h1>
          <Badge>Module 7.8</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to implement JWT-based authentication in Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">What is JWT?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
                In Spring Security, JWT is commonly used for stateless authentication and secure token-based access control.
              </p>
              
              <p>A JWT consists of three parts:</p>
              <ul>
                <li><strong>Header:</strong> Metadata about the token (algorithm and token type)</li>
                <li><strong>Payload:</strong> The actual data being transmitted (claims)</li>
                <li><strong>Signature:</strong> Ensures the token hasn't been altered</li>
              </ul>
              
              <p>
                JWTs are widely used in microservices and mobile applications because they are self-contained,
                stateless, and can be easily verified by any system that has the signing key.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">JWT Structure</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Part</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Header</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
{`{
  "alg": "HS256",
  "typ": "JWT"
}`}
                    </pre>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Specifies algorithm and token type</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Payload</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
{`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}`}
                    </pre>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Contains user identity and metadata</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Signature</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
HMACSHA256(base64UrlEncode(header)+'.'+base64UrlEncode(payload), secret_key)
                    </pre>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Ensures integrity and authenticity</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Why Use JWT for Authentication?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Stateless Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>No need to store session server-side</li>
                    <li>Tokens can be validated anywhere</li>
                    <li>Easily scale across services</li>
                    <li>Works well with REST APIs</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Decentralized Identity</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Supports OAuth2 and OpenID Connect</li>
                    <li>Can be issued by centralized auth service</li>
                    <li>Used across multiple systems</li>
                    <li>Supports claims-based authorization</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Improved Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Smaller than traditional cookies</li>
                    <li>Reduced database lookups</li>
                    <li>Built-in expiration and revocation</li>
                    <li>Supports encryption and nested tokens</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Mobile-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>No reliance on browser cookies</li>
                    <li>Works well with native apps</li>
                    <li>Easy to store in localStorage</li>
                    <li>Supports refresh token mechanism</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Implementing JWT in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To implement JWT authentication in Spring Boot:
              </p>
              
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt-api</artifactId>
  <version>0.11.5</version>
</dependency>
<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt-impl</artifactId>
  <version>0.11.5</version>
</dependency>
<dependency>
  <groupId>io.jsonwebtoken</groupId>
  <artifactId>jjwt-jackson</artifactId>
  <version>0.11.5</version>
</dependency>`}
              </pre>
              
              <h3>Create JWT Utility Class:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Component
public class JwtUtils {
    private final String jwtSecret = "your-secret-key-here";
    
    public String generateToken(String username) {
        return Jwts.builder()
                   .setSubject(username)
                   .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                   .signWith(SignatureAlgorithm.HS512, jwtSecret)
                   .compact();
    }
    
    public String extractUsername(String token) {
        return Jwts.parser()
                   .setSigningKey(jwtSecret)
                   .parseClaimsJws(token)
                   .getBody()
                   .getSubject();
    }
}`}
              </pre>
              
              <h3>Use in Filter Chain:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm mt-2">
{`@Component
public class JwtFilter extends OncePerRequestFilter {
    private final JwtUtils jwtUtils;

    public JwtFilter(JwtUtils utils) {
        this.jwtUtils = utils;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, 
                                   HttpServletResponse response,
                                   FilterChain filterChain)
        throws ServletException, IOException {
        // Extract token and validate
        filterChain.doFilter(request, response);
    }
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">JWT Claims and Payload</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Claim Type</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Registered Claims</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Standard fields defined in RFC 7519</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
{`iss (issuer), exp (expiration), sub (subject), aud (audience)`}
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Public Claims</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Custom claims registered in IANA</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
{`http://example.com/roles, http://example.com/preference`}
                    </pre>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Private Claims</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Custom claims for internal use</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
{`"userId": 123, "isAdmin": true`}
                    </pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Best Practices for JWT Implementation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Token Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Always use HTTPS to transmit tokens</li>
                    <li>Set reasonable expiration times (e.g., 15 minutes)</li>
                    <li>Use refresh tokens for long-term sessions</li>
                    <li>Never store sensitive data in payload</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Use strong signing algorithms (preferably HS512 or RS512)</li>
                    <li>Store secret keys securely (Vault, environment variables)</li>
                    <li>Validate token signature before processing</li>
                    <li>Log and monitor invalid token attempts</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Revocation & Rotation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Implement token blacklists</li>
                    <li>Rotate signing keys periodically</li>
                    <li>Use short-lived access tokens</li>
                    <li>Reissue tokens using refresh endpoints</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Performance Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Keep payloads small and concise</li>
                    <li>Cache validation results where appropriate</li>
                    <li>Use asynchronous verification if possible</li>
                    <li>Optimize serialization/deserialization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Basic JWT Generation</h2>
            <Card>
              <CardHeader>
                <CardTitle>JwtUtils.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`@Component
public class JwtUtils {
    private final String jwtSecret = "your-secret-key-here";
    
    public String generateToken(String username) {
        return Jwts.builder()
                   .setSubject(username)
                   .setExpiration(new Date(System.currentTimeMillis() + 86400000))
                   .signWith(SignatureAlgorithm.HS512, jwtSecret)
                   .compact();
    }
}`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2liner font-bold tracking-tight">Token Validation Example</h2>
            <Card>
              <CardHeader>
                <CardTitle>JwtUtils.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-xauto text-sm">
{`public String extractUsername(String token) {
    return Jwts.parser()
               .setSigningKey(jwtSecret)
               .parseClaimsJws(token)
               .getBody()
               .getSubject();
}

public boolean validateToken(String token) {
    try {
        Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
        return true;
    } catch (JwtException ex) {
        // Log error and return false
        return false;
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
                  <CardTitle>Exercise 1: Basic Token Issuance</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Spring Boot app with JWT dependencies</li>
                    <li>Build utility to generate signed JWT tokens</li>
                    <li>Test token generation with sample claims</li>
                    <li>Verify token contents using jwt.io</li>
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
                    <li>Create custom filter to intercept requests</li>
                    <li>Extract and validate JWT from Authorization header</li>
                    <li>Inject authentication into security context</li>
                    <li>Secure specific API routes with JWT</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Token Revocation System</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Redis-based token blacklist</li>
                    <li>Check against revoked tokens on each request</li>
                    <li>Implement refresh token endpoint</li>
                    <li>Ensure tokens cannot be reused after logout</li>
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
                        href="https://jwt.io/introduction/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        JWT Introduction
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://docs.spring.io/spring-security/reference/html5/#token-services"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security Token Services Docs
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
                        href="https://www.baeldung.com/java-jwt"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: JWT in Java Applications
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
                        Auth0 Blog: JWT Best Practices
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
                        href="/modules/security/advanced/oauth2"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        OAuth2 Integration Module
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
          <Link href="/modules/security/advanced/csrf">← CSRF Protection</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/security/advanced/oauth2">Next: OAuth2 →</Link>
        </Button>
      </div>
    </div>
  )
}
