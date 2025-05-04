import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Oauth2SecurityModule() {
  return (
    <div>
      <h1 className="text-3xl font-bold">OAuth2 Integration</h1>
      <p className="text-lg mt-2">Module 7.9</p>
      <p>
        Learn how to integrate OAuth2 authentication in Spring Boot applications using providers like Google, GitHub, and Azure AD.
      </p>
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {/* Section: What is OAuth2? */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">What is OAuth2?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                OAuth2 is an open standard for authorization that allows third-party services to access user data without exposing credentials.
                In Spring Security, it's commonly used for social login (Google, GitHub, Facebook) and enterprise SSO (Azure AD, Okta).
              </p>
              <p>The main components of OAuth2:</p>
              <ul>
                <li><strong>Resource Owner:</strong> The user who authorizes access</li>
                <li><strong>Client:</strong> Your application requesting access</li>
                <li><strong>Resource Server:</strong> The API being accessed</li>
                <li><strong>Authorization Server:</strong> Issues tokens after successful authentication</li>
              </ul>
              <p>
                Spring Security provides built-in support for OAuth2 through the 
                <code>spring-security-oauth2-client</code> and <code>spring-security-oauth2-resource-server</code> modules.
              </p>
            </div>
          </section>

          {/* Section: OAuth2 Flows */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">OAuth2 Flows</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Flow</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Description</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Use Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Authorization Code</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Full flow with token exchange</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Web apps and SPAs</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Implicit</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Token returned immediately</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Legacy mobile and web apps</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Password</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">User credentials exchanged for token</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Trusted internal apps only</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Client Credentials</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Service-to-service communication</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Backend services and APIs</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Device Flow</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">For devices with limited input</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">IoT, smart TVs, and CLI tools</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Section: Why Use OAuth2? */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Why Use OAuth2?</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Eliminate multiple login screens</li>
                    <li>Support single sign-on across systems</li>
                    <li>Enable passwordless authentication</li>
                    <li>Provide seamless login experience</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Never store user passwords locally</li>
                    <li>Reduce risk of credential leaks</li>
                    <li>Support token expiration and revocation</li>
                    <li>Enable secure delegation model</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Integrate with Active Directory via Azure AD</li>
                    <li>Use existing identity provider</li>
                    <li>Support federated identity management</li>
                    <li>Enable audit trail for login activity</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Microservices Communication</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Secure service-to-service communication</li>
                    <li>Propagate identity across services</li>
                    <li>Validate tokens in distributed environment</li>
                    <li>Support JWT-based microservice auth</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section: Implementing OAuth2 in Spring Boot */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementing OAuth2 in Spring Boot</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>To implement OAuth2 integration in Spring Boot:</p>
              <h3>Add Dependency (Maven):</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
                {`<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-oauth2-client</artifactId>
</dependency>`}
              </pre>
              <h3>Configure in application.properties:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
                {`spring.security.oauth2.client.registration.google.client-id=your-google-client-id
spring.security.oauth2.client.registration.google.client-secret=your-google-client-secret
spring.security.oauth2.client.registration.github.client-id=your-github-client-id
spring.security.oauth2.client.registration.github.client-secret=your-github-secret`}
              </pre>
              <h3>Basic Security Configuration:</h3>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-2">
                {`@Configuration
@EnableWebSecurity
public class Oauth2Config {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .oauth2Login(withDefaults());
        return http.build();
    }
}`}
              </pre>
            </div>
          </section>

          {/* Section: OAuth2 Providers & Configuration */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">OAuth2 Providers & Configuration</h2>
            <table className="border-collapse border border-gray-300 dark:border-gray-700 w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Provider</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Configuration Example</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Google</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
                      {`spring.security.oauth2.client.registration.google.client-id=your-client-id
spring.security.oauth2.client.registration.google.client-secret=your-secret
spring.security.oauth2.client.registration.google.scope=email,profile`}
                    </pre>
                    <p>Requires project setup in Cloud Console</p>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Add necessary redirect URIs in your Google console</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>GitHub</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
                      {`spring.security.oauth2.client.registration.github.client-id=your-client-id
spring.security.oauth2.client.registration.github.client-secret=your-secret
spring.security.oauth2.client.registration.github.authorization-grant-type=authorization_code
spring.security.oauth2.client.registration.github.redirect-uri={baseUrl}/login/oauth2/code/{registrationId}`}
                    </pre>
                    <p>Set redirect URI in GitHub app settings</p>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Make sure to configure the app correctly in GitHub settings</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2"><code>Azure AD</code></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                    <pre className="bg-muted p-2 rounded text-sm overflow-x-auto">
                      {`spring.security.oauth2.client.registration.azure.client-id=your-client-id
spring.security.oauth2.client.registration.azure.client-secret=your-secret
spring.security.oauth2.client.registration.azure.provider=azure
spring.security.oauth2.client.registration.azure.scope=email,profile,openid`}
                    </pre>
                    <p>Uses OpenID Connect under the hood</p>
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">Ensure you have set up Azure AD appropriately</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Section: Best Practices for OAuth2 Implementation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for OAuth2 Implementation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Implementation Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Always use HTTPS for OAuth2 endpoints</li>
                    <li>Store secrets securely (Vault, env vars)</li>
                    <li>Use short-lived tokens with refresh tokens</li>
                    <li>Validate token signatures and issuer</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Error Handling</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Handle expired tokens gracefully</li>
                    <li>Log failed attempts for auditing</li>
                    <li>Implement token refresh logic</li>
                    <li>Support account linking and reauthentication</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Token Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Set appropriate token expiration times</li>
                    <li>Revoke tokens when needed</li>
                    <li>Monitor token usage patterns</li>
                    <li>Rotate signing keys periodically</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>Never store raw tokens in logs</li>
                    <li>Use CSRF protection alongside OAuth2</li>
                    <li>Validate state parameter in login flow</li>
                    <li>Verify audience and issuer claims</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          {/* Example Sections */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">OAuth2 Login Setup</h2>
            <Card>
              <CardHeader>
                <CardTitle>application.properties</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  {`spring.security.oauth2.client.registration.google.client-id=your-google-client-id
spring.security.oauth2.client.registration.google.client-secret=your-google-client-secret
spring.security.oauth2.client.registration.google.scope=email,profile`}
                </pre>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Calling Protected APIs</h2>
            <Card>
              <CardHeader>
                <CardTitle>ProductService.java</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                  {`@Service
public class ProductService {
    private final WebClient webClient;

    public ProductService(WebClient.Builder builder, OAuth2AuthorizedClientManager clientManager) {
        this.webClient = builder.baseUrl("https://product-api")
                                .filter(exchangeFilterFunction(clientManager))
                                .build();
    }

    public Mono<Product> getProductById(Long id) {
        return webClient.get()
                        .uri("/api/products/{id}", id)
                        .retrieve()
                        .bodyToMono(Product.class);
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
                  <CardTitle>Exercise 1: Basic OAuth2 Login</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create Spring Boot app with Web and Security dependencies</li>
                    <li>Register app in Google Cloud Console</li>
                    <li>Configure properties with client ID and secret</li>
                    <li>Test login with real Google account</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Multiple Providers</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create system with Google, GitHub, and Azure logins</li>
                    <li>Display different UI based on provider</li>
                    <li>Map external roles to internal permissions</li>
                    <li>Test login with different providers</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: Token Propagation</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Create two Spring Boot services</li>
                    <li>Secure both with OAuth2 resource server</li>
                    <li>Call one service from another using WebClient</li>
                    <li>Ensure token is propagated correctly</li>
                    <li>Test behavior when token expires or is revoked</li>
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
                        href="https://docs.spring.io/spring-security/reference/html5/#oauth2login"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security OAuth2 Docs
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://openid.net/specs/openid-connect-core-1_0.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        OpenID Connect Specification
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
                        href="https://www.baeldung.com/spring-security-openid-connect"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: OpenID Connect with Spring Security
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://reflectoring.io/spring-oauth/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Reflectoring: Spring OAuth2 Integration Guide
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
                        href="/modules/security/advanced/jwt"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        JSON Web Tokens Module
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

      <div className="flex justify-between mt-4">
        <Button variant="outline" asChild>
          <Link href="/modules/security/advanced/jwt">← JWT</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/security/advanced/session">Next: Session Management →</Link>
        </Button>
      </div>
    </div>
  )
}
