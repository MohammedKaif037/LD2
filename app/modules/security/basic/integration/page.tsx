import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, ExternalLink, Shield } from "lucide-react"
import Link from "next/link"

export default function SpringSecurityIntegration() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Security Integration</h1>
          <Badge>Module 3.1</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to integrate Spring Security into your Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Spring Security</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Security is a powerful and highly customizable authentication and access-control framework. It is
                the de-facto standard for securing Spring-based applications.
              </p>
              <p>
                Spring Security focuses on providing both authentication and authorization to Java applications. Like
                all Spring projects, the real power of Spring Security is found in how easily it can be extended to meet
                custom requirements.
              </p>
              <p>Key features of Spring Security include:</p>
              <ul>
                <li>Comprehensive and extensible support for both Authentication and Authorization</li>
                <li>
                  Protection against attacks like session fixation, clickjacking, cross-site request forgery, etc.
                </li>
                <li>Servlet API integration</li>
                <li>Optional integration with Spring Web MVC</li>
                <li>Support for various authentication mechanisms (LDAP, form-based, OAuth2, etc.)</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Adding Spring Security to Your Project</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Adding Spring Security to your Spring Boot application is straightforward. You simply need to add the
                Spring Security starter dependency to your project.
              </p>
              <p>For Maven:</p>
              <pre>
                {`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>`}
              </pre>
              <p>For Gradle:</p>
              <pre>{`implementation 'org.springframework.boot:spring-boot-starter-security'`}</pre>
              <p>Once you add this dependency, Spring Boot's auto-configuration will:</p>
              <ul>
                <li>Enable basic authentication for your application</li>
                <li>Set up a default user with a generated password (printed in the console log)</li>
                <li>Secure all HTTP endpoints with "basic" authentication</li>
                <li>Add a login form</li>
                <li>Enable CSRF protection</li>
                <li>Add logout support</li>
                <li>Add security headers</li>
              </ul>
              <p>
                This default configuration is a good starting point, but you'll likely want to customize it for your
                specific application needs.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Security Architecture</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Spring Security has a layered architecture with several key components:</p>
              <ol>
                <li>
                  <strong>SecurityContextHolder:</strong> The heart of Spring Security's authentication model. It
                  contains the SecurityContext, which in turn holds the Authentication object representing the current
                  user.
                </li>
                <li>
                  <strong>Authentication:</strong> Represents the principal (current user) and includes details like
                  username, password, and authorities (permissions).
                </li>
                <li>
                  <strong>AuthenticationManager:</strong> The API that defines how Spring Security's filters perform
                  authentication.
                </li>
                <li>
                  <strong>AuthenticationProvider:</strong> Used by the AuthenticationManager to perform a specific type
                  of authentication.
                </li>
                <li>
                  <strong>UserDetailsService:</strong> Used by many AuthenticationProviders to load user-specific data.
                </li>
                <li>
                  <strong>PasswordEncoder:</strong> Service interface for encoding passwords.
                </li>
                <li>
                  <strong>SecurityFilterChain:</strong> A chain of filters that process the HTTP request.
                </li>
              </ol>
              <p>
                Understanding these components is crucial for customizing Spring Security to meet your application's
                security requirements.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Configuration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                To customize Spring Security, you typically create a configuration class that extends
                WebSecurityConfigurerAdapter (in Spring Security 5.x) or implements SecurityFilterChain (in Spring
                Security 6.x).
              </p>
              <p>Here's a basic example using Spring Security 6.x:</p>
              <pre>
                {`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/", "/home").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .permitAll()
            )
            .logout(logout -> logout
                .permitAll()
            );
        
        return http.build();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
            .username("user")
            .password("password")
            .roles("USER")
            .build();
        
        return new InMemoryUserDetailsManager(user);
    }
}`}
              </pre>
              <p>This configuration:</p>
              <ul>
                <li>Allows unauthenticated access to the home page</li>
                <li>Requires authentication for any other request</li>
                <li>Sets up a custom login page</li>
                <li>Configures logout functionality</li>
                <li>Creates an in-memory user for testing</li>
              </ul>
              <p>
                Note: Using <code>User.withDefaultPasswordEncoder()</code> is not recommended for production as it uses
                weak password encoding. For production, use a proper PasswordEncoder like BCryptPasswordEncoder.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Authentication Methods</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Form-Based Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    The most common authentication method for web applications. Users enter their credentials in a form,
                    which is then submitted to the server for validation.
                  </p>
                  <pre className="bg-muted p-2 rounded-md mt-2 text-sm">
                    {`.formLogin(form -> form
    .loginPage("/login")
    .defaultSuccessUrl("/dashboard")
    .failureUrl("/login?error=true")
    .permitAll()
)`}
                  </pre>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>HTTP Basic Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    A simple authentication scheme built into the HTTP protocol. The client sends HTTP requests with the
                    Authorization header that contains the word "Basic" followed by a base64-encoded string of
                    "username:password".
                  </p>
                  <pre className="bg-muted p-2 rounded-md mt-2 text-sm">{`.httpBasic(Customizer.withDefaults())`}</pre>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>OAuth 2.0 / OpenID Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Industry-standard protocols for authorization and authentication. Spring Security provides
                    comprehensive support for OAuth 2.0 and OpenID Connect.
                  </p>
                  <pre className="bg-muted p-2 rounded-md mt-2 text-sm">
                    {`.oauth2Login(oauth2 -> oauth2
    .loginPage("/login")
    .defaultSuccessUrl("/dashboard")
)`}
                  </pre>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Remember-Me Authentication</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Allows users to remain authenticated between browser sessions. Typically implemented using cookies.
                  </p>
                  <pre className="bg-muted p-2 rounded-md mt-2 text-sm">
                    {`.rememberMe(remember -> remember
    .key("uniqueAndSecret")
    .tokenValiditySeconds(86400)
)`}
                  </pre>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">User Storage Options</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>In-Memory Authentication</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Stores user credentials in memory. Useful for testing and simple applications, but not recommended
                    for production.
                  </p>
                  <pre className="bg-muted p-4 rounded-md text-sm">
                    {`@Bean
public UserDetailsService userDetailsService() {
    UserDetails user = User.withDefaultPasswordEncoder()
        .username("user")
        .password("password")
        .roles("USER")
        .build();
    
    UserDetails admin = User.withDefaultPasswordEncoder()
        .username("admin")
        .password("admin")
        .roles("ADMIN")
        .build();
    
    return new InMemoryUserDetailsManager(user, admin);
}`}
                  </pre>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>JDBC Authentication</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Stores user credentials in a database. Spring Security provides a JdbcUserDetailsManager that works
                    with a standard schema.
                  </p>
                  <pre className="bg-muted p-4 rounded-md text-sm">
                    {`@Bean
public UserDetailsService userDetailsService(DataSource dataSource) {
    JdbcUserDetailsManager users = new JdbcUserDetailsManager(dataSource);
    
    // Create tables if they don't exist
    users.setCreateUserSql("CREATE TABLE IF NOT EXISTS users (username VARCHAR(50) PRIMARY KEY, password VARCHAR(500), enabled BOOLEAN)");
    users.setCreateAuthoritySql("CREATE TABLE IF NOT EXISTS authorities (username VARCHAR(50), authority VARCHAR(50), CONSTRAINT fk_authorities_users FOREIGN KEY(username) REFERENCES users(username))");
    
    // Create a test user if it doesn't exist
    if (!users.userExists("user")) {
        UserDetails user = User.builder()
            .username("user")
            .password(passwordEncoder().encode("password"))
            .roles("USER")
            .build();
        users.createUser(user);
    }
    
    return users;
}`}
                  </pre>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>JPA Authentication</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Uses JPA entities to store user credentials. Requires implementing UserDetailsService to load users
                    from the database.
                  </p>
                  <pre className="bg-muted p-4 rounded-md text-sm">
                    {`@Entity
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String password;
    
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
    
    // UserDetails implementation methods
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.stream()
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
            .collect(Collectors.toList());
    }
    
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    
    @Override
    public boolean isEnabled() {
        return true;
    }
    
    // Getters and setters
}`}
                  </pre>
                  <pre className="bg-muted p-4 rounded-md mt-2 text-sm">
                    {`@Service
public class CustomUserDetailsService implements UserDetailsService {
    
    private final UserRepository userRepository;
    
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }
}`}
                  </pre>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>LDAP Authentication</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Authenticates users against an LDAP directory. Useful for enterprise applications that need to
                    integrate with existing directory services.
                  </p>
                  <pre className="bg-muted p-4 rounded-md text-sm">
                    {`@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        // Other configuration
        .ldapAuthentication(ldap -> ldap
            .userDnPatterns("uid={0},ou=people")
            .groupSearchBase("ou=groups")
            .contextSource(contextSource -> contextSource
                .url("ldap://localhost:8389/dc=example,dc=com")
                .managerDn("cn=admin,dc=example,dc=com")
                .managerPassword("admin")
            )
            .passwordCompare(password -> password
                .passwordEncoder(passwordEncoder())
                .passwordAttribute("userPassword")
            )
        );
    
    return http.build();
}`}
                  </pre>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>OAuth 2.0 / OpenID Connect</AccordionTrigger>
                <AccordionContent>
                  <p className="mb-2">
                    Delegates authentication to an external identity provider like Google, Facebook, or Okta.
                  </p>
                  <pre className="bg-muted p-4 rounded-md text-sm">
                    {`@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
        // Other configuration
        .oauth2Login(oauth2 -> oauth2
            .loginPage("/login")
            .defaultSuccessUrl("/dashboard")
            .userInfoEndpoint(userInfo -> userInfo
                .userService(oauth2UserService())
            )
        );
    
    return http.build();
}`}
                  </pre>
                  <pre className="bg-muted p-4 rounded-md mt-2 text-sm">
                    {`# application.yml
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: your-client-id
            client-secret: your-client-secret
            scope: openid,profile,email`}
                  </pre>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Password Encoding</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Storing passwords in plain text is a major security risk. Spring Security provides several
                PasswordEncoder implementations to securely hash passwords.
              </p>
              <p>The recommended PasswordEncoder for most applications is BCryptPasswordEncoder:</p>
              <pre>
                {`@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}`}
              </pre>
              <p>
                When authenticating users, Spring Security will automatically use the configured PasswordEncoder to
                verify the submitted password against the stored hash.
              </p>
              <p>Other available encoders include:</p>
              <ul>
                <li>Pbkdf2PasswordEncoder</li>
                <li>SCryptPasswordEncoder</li>
                <li>Argon2PasswordEncoder</li>
                <li>DelegatingPasswordEncoder (can handle multiple encoding types)</li>
              </ul>
              <p>
                For legacy applications that need to migrate to secure password storage, Spring Security provides the
                DelegatingPasswordEncoder, which can handle multiple encoding types and upgrade passwords on successful
                authentication.
              </p>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Basic Security Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>Spring Security 6.x Configuration</CardTitle>
                <CardDescription>A basic security configuration for a web application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">SecurityConfig.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/", "/home", "/css/**", "/js/**", "/images/**").permitAll()
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            )
            .formLogin(form -> form
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard")
                .failureUrl("/login?error=true")
                .permitAll()
            )
            .logout(logout -> logout
                .logoutUrl("/logout")
                .logoutSuccessUrl("/login?logout=true")
                .invalidateHttpSession(true)
                .deleteCookies("JSESSIONID")
                .permitAll()
            )
            .rememberMe(remember -> remember
                .key("uniqueAndSecret")
                .tokenValiditySeconds(86400)
            )
            .csrf(Customizer.withDefaults());
        
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.builder()
            .username("user")
            .password(passwordEncoder().encode("password"))
            .roles("USER")
            .build();
        
        UserDetails admin = User.builder()
            .username("admin")
            .password(passwordEncoder().encode("admin"))
            .roles("ADMIN", "USER")
            .build();
        
        return new InMemoryUserDetailsManager(user, admin);
    }
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Custom Authentication Provider</h2>
            <Card>
              <CardHeader>
                <CardTitle>Custom Authentication Provider</CardTitle>
                <CardDescription>Implementing a custom authentication mechanism</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">CustomAuthenticationProvider.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    public CustomAuthenticationProvider(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
        this.userDetailsService = userDetailsService;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();
        
        UserDetails user = userDetailsService.loadUserByUsername(username);
        
        if (passwordEncoder.matches(password, user.getPassword())) {
            return new UsernamePasswordAuthenticationToken(
                username,
                password,
                user.getAuthorities()
            );
        } else {
            throw new BadCredentialsException("Invalid username or password");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">SecurityConfig.java (with custom provider)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final CustomAuthenticationProvider authenticationProvider;

    public SecurityConfig(CustomAuthenticationProvider authenticationProvider) {
        this.authenticationProvider = authenticationProvider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/", "/home").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(Customizer.withDefaults())
            .authenticationProvider(authenticationProvider);
        
        return http.build();
    }
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">JPA-based User Details Service</h2>
            <Card>
              <CardHeader>
                <CardTitle>JPA-based User Details Service</CardTitle>
                <CardDescription>Storing users in a database with JPA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">User.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String username;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private boolean enabled = true;
    
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();
    
    // Getters and setters
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Role.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String name;
    
    // Getters and setters
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">UserRepository.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">CustomUserDetailsService.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Service
public class CustomUserDetailsService implements UserDetailsService {
    
    private final UserRepository userRepository;
    
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
        
        Set<GrantedAuthority> authorities = user.getRoles().stream()
            .map(role -> new SimpleGrantedAuthority("ROLE_" + role.getName()))
            .collect(Collectors.toSet());
        
        return new org.springframework.security.core.userdetails.User(
            user.getUsername(),
            user.getPassword(),
            user.isEnabled(),
            true, // accountNonExpired
            true, // credentialsNonExpired
            true, // accountNonLocked
            authorities
        );
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">SecurityConfig.java (with JPA)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final UserDetailsService userDetailsService;
    
    public SecurityConfig(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/", "/home").permitAll()
                .anyRequest().authenticated()
            )
            .formLogin(Customizer.withDefaults());
        
        return http.build();
    }
    
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setUserDetailsService(userDetailsService);
        provider.setPasswordEncoder(passwordEncoder());
        return provider;
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">OAuth 2.0 Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>OAuth 2.0 Login</CardTitle>
                <CardDescription>Configuring OAuth 2.0 login with Google</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">application.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: your-client-id
            client-secret: your-client-secret
            scope:
              - email
              - profile`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">SecurityConfig.java (with OAuth 2.0)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(authorize -> authorize
                .requestMatchers("/", "/home", "/login/**").permitAll()
                .anyRequest().authenticated()
            )
            .oauth2Login(oauth2 -> oauth2
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard")
                .userInfoEndpoint(userInfo -> userInfo
                    .userService(oauth2UserService())
                )
            );
        
        return http.build();
    }
    
    @Bean
    public OAuth2UserService<OAuth2UserRequest, OAuth2User> oauth2UserService() {
        DefaultOAuth2UserService delegate = new DefaultOAuth2UserService();
        
        return request -> {
            OAuth2User oauth2User = delegate.loadUser(request);
            
            // Extract user details from OAuth2User
            String email = oauth2User.getAttribute("email");
            String name = oauth2User.getAttribute("name");
            
            // You can create or update a user in your database here
            
            return oauth2User;
        };
    }
}`}
                    </pre>
                  </div>
                </div>
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
                  <CardTitle>Exercise 1: Basic Security Setup</CardTitle>
                  <CardDescription>Beginner level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Create a new Spring Boot application with the following dependencies:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Spring Web</li>
                        <li>Spring Security</li>
                        <li>Thymeleaf (for templates)</li>
                      </ul>
                    </li>
                    <li>
                      Create a simple controller with the following endpoints:
                      <ul className="list-disc pl-5 mt-1">
                        <li>/home (accessible to all)</li>
                        <li>/user (accessible to authenticated users)</li>
                        <li>/admin (accessible to users with ADMIN role)</li>
                      </ul>
                    </li>
                    <li>
                      Configure Spring Security to:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Allow unauthenticated access to /home</li>
                        <li>Require authentication for /user</li>
                        <li>Require ADMIN role for /admin</li>
                        <li>Use form-based login with a custom login page</li>
                      </ul>
                    </li>
                    <li>
                      Create two in-memory users:
                      <ul className="list-disc pl-5 mt-1">
                        <li>A regular user with USER role</li>
                        <li>An admin user with ADMIN role</li>
                      </ul>
                    </li>
                    <li>Test your application by accessing all endpoints with different users</li>
                  </ol>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 2: Database Authentication</CardTitle>
                  <CardDescription>Intermediate level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Create a Spring Boot application with the following dependencies:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Spring Web</li>
                        <li>Spring Security</li>
                        <li>Spring Data JPA</li>
                        <li>H2 Database (for development)</li>
                      </ul>
                    </li>
                    <li>
                      Create the following entities:
                      <ul className="list-disc pl-5 mt-1">
                        <li>User (with id, username, password, enabled fields)</li>
                        <li>Role (with id, name fields)</li>
                        <li>Establish a many-to-many relationship between User and Role</li>
                      </ul>
                    </li>
                    <li>Implement a custom UserDetailsService that loads users from the database</li>
                    <li>Configure Spring Security to use your custom UserDetailsService</li>
                    <li>
                      Create a REST controller for user management with endpoints to:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Register a new user</li>
                        <li>Get user details</li>
                        <li>Update user details</li>
                      </ul>
                    </li>
                    <li>Implement proper password encoding using BCryptPasswordEncoder</li>
                    <li>Add data initialization to create some default users and roles</li>
                    <li>Test your application using tools like Postman or curl</li>
                  </ol>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Exercise 3: OAuth 2.0 Integration</CardTitle>
                  <CardDescription>Advanced level</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Create a Spring Boot application with the following dependencies:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Spring Web</li>
                        <li>Spring Security</li>
                        <li>OAuth2 Client</li>
                        <li>Spring Data JPA</li>
                        <li>H2 Database</li>
                      </ul>
                    </li>
                    <li>Register your application with a OAuth provider (Google, GitHub, etc.)</li>
                    <li>Configure your application to use OAuth 2.0 login</li>
                    <li>
                      Create a custom OAuth2UserService that:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Extracts user details from the OAuth2User</li>
                        <li>Creates or updates a user in your database</li>
                        <li>Assigns appropriate roles based on user information</li>
                      </ul>
                    </li>
                    <li>
                      Implement a hybrid authentication system that supports both:
                      <ul className="list-disc pl-5 mt-1">
                        <li>OAuth 2.0 login</li>
                        <li>Form-based login with username/password</li>
                      </ul>
                    </li>
                    <li>
                      Create a user profile page that displays information from both your database and the OAuth
                      provider
                    </li>
                    <li>Implement proper logout functionality that handles both authentication methods</li>
                    <li>Test your application with different authentication methods</li>
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
                        href="https://docs.spring.io/spring-security/reference/index.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security Reference
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-security/reference/servlet/authentication/index.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security Authentication
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-security/reference/servlet/authorization/index.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security Authorization
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-security/reference/servlet/oauth2/index.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Security OAuth 2.0
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tutorials & Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.baeldung.com/security-spring"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Security Guides
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://spring.io/guides/gs/securing-web/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring.io: Securing a Web Application
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://spring.io/guides/tutorials/spring-boot-oauth2/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring.io: Spring Boot and OAuth2
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.toptal.com/spring/spring-security-tutorial"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Toptal: Spring Security Tutorial
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
                        <Shield className="h-4 w-4" />
                        Authentication & Authorization
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/security/basic/configurations"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <Shield className="h-4 w-4" />
                        Security Configurations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/security/basic/password-encoding"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <Shield className="h-4 w-4" />
                        Password Encoding
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/security/advanced/oauth2"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <Shield className="h-4 w-4" />
                        OAuth2 Implementation
                      </Link>
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
                        href="https://www.amazon.com/Spring-Security-Action-Laurentiu-Spilca/dp/1617297739/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Security in Action by Laurentiu Spilca
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.amazon.com/Hands-Spring-Security-5-Reactive-Applications/dp/1789802938/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Hands-On Spring Security 5 for Reactive Applications by Tomcy John
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.manning.com/books/spring-security-in-action-second-edition"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookOpen className="h-4 w-4" />
                        Spring Security in Action, Second Edition by Laurentiu Spilca
                      </a>
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
          <Link href="/modules/security">← Back to Security Fundamentals</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/security/basic/auth">Next: Authentication & Authorization →</Link>
        </Button>
      </div>
    </div>
  )
}
