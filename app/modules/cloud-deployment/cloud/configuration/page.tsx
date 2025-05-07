import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ConfigurationManagement() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Configuration Management</h1>
          <Badge>Module 7.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Master configuration management for Spring Boot applications in cloud environments
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Configuration Management</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Configuration management is a critical aspect of cloud-native applications. It involves managing
                application settings across different environments, ensuring security of sensitive information, and
                enabling dynamic configuration changes without application restarts.
              </p>
              <p>Spring Boot provides robust support for configuration management through various mechanisms:</p>
              <ul>
                <li>Property files (application.properties, application.yml)</li>
                <li>Environment variables</li>
                <li>Command-line arguments</li>
                <li>Configuration servers (Spring Cloud Config)</li>
                <li>Kubernetes ConfigMaps and Secrets</li>
              </ul>
              <p>Effective configuration management helps achieve several goals:</p>
              <ul>
                <li>Environment-specific configuration</li>
                <li>Secure handling of sensitive information</li>
                <li>Centralized configuration management</li>
                <li>Dynamic configuration updates</li>
                <li>Configuration versioning and history</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Configuration Management Approaches</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Spring Boot Property Files</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Spring Boot's default approach to configuration is through property files:</p>
                    <ul>
                      <li>
                        <code>application.properties</code> or <code>application.yml</code> in the classpath
                      </li>
                      <li>
                        Profile-specific files like <code>application-dev.yml</code>, <code>application-prod.yml</code>
                      </li>
                      <li>
                        External files specified with <code>spring.config.location</code>
                      </li>
                    </ul>
                    <p>Example application.yml:</p>
                    <pre>
                      {`spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/mydb
    username: dbuser
    password: dbpass
  jpa:
    hibernate:
      ddl-auto: update
    
server:
  port: 8080
  
myapp:
  feature:
    enabled: true
  cache:
    timeout: 3600`}
                    </pre>
                    <p>Profile-specific configuration (application-prod.yml):</p>
                    <pre>
                      {`spring:
  datasource:
    url: jdbc:postgresql://prod-db-server:5432/mydb
    username: prod_user
    password: prod_pass
  jpa:
    hibernate:
      ddl-auto: validate
    
server:
  port: 80
  
myapp:
  feature:
    enabled: true
  cache:
    timeout: 7200`}
                    </pre>
                    <p>Activating profiles:</p>
                    <pre>
                      {`# Command line
java -jar myapp.jar --spring.profiles.active=prod

# Environment variable
export SPRING_PROFILES_ACTIVE=prod
java -jar myapp.jar

# In application.yml
spring:
  profiles:
    active: prod`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Environment Variables</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Environment variables are a common way to configure applications in cloud environments. Spring
                      Boot automatically maps environment variables to configuration properties.
                    </p>
                    <p>Spring Boot uses the following rules to map environment variables:</p>
                    <ul>
                      <li>Replace dots (.) with underscores (_)</li>
                      <li>Convert to uppercase</li>
                      <li>Nested properties use underscore as a separator</li>
                    </ul>
                    <p>Examples:</p>
                    <pre>
                      {`# Property: spring.datasource.url
# Environment variable: SPRING_DATASOURCE_URL
export SPRING_DATASOURCE_URL=jdbc:postgresql://prod-db-server:5432/mydb

# Property: myapp.feature.enabled
# Environment variable: MYAPP_FEATURE_ENABLED
export MYAPP_FEATURE_ENABLED=true

# Property: server.port
# Environment variable: SERVER_PORT
export SERVER_PORT=80`}
                    </pre>
                    <p>
                      Environment variables are particularly useful in containerized environments like Docker and
                      Kubernetes, where they are the recommended way to pass configuration to applications.
                    </p>
                    <pre>
                      {`# Docker example
docker run -e SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/mydb \\
           -e SPRING_DATASOURCE_USERNAME=dbuser \\
           -e SPRING_DATASOURCE_PASSWORD=dbpass \\
           -p 8080:8080 \\
           myapp:latest`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Spring Cloud Config</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Spring Cloud Config provides server-side and client-side support for externalized configuration in
                      a distributed system. It uses a central server to manage configuration for multiple applications
                      across different environments.
                    </p>
                    <p>Key features:</p>
                    <ul>
                      <li>Centralized configuration management</li>
                      <li>Version control of configuration (Git, SVN)</li>
                      <li>Configuration changes without application restarts</li>
                      <li>Environment-specific configuration</li>
                      <li>Encryption and decryption of sensitive properties</li>
                    </ul>
                    <p>Config Server configuration (application.yml):</p>
                    <pre>
                      {`server:
  port: 8888

spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/myorg/config-repo
          default-label: main
          search-paths: '{application}'
          clone-on-start: true
  security:
    user:
      name: configuser
      password: configpassword`}
                    </pre>
                    <p>Config Client configuration (bootstrap.yml):</p>
                    <pre>
                      {`spring:
  application:
    name: myapp
  cloud:
    config:
      uri: http://config-server:8888
      username: configuser
      password: configpassword
      fail-fast: true
      retry:
        max-attempts: 6
        initial-interval: 1000
        max-interval: 2000
        multiplier: 1.1`}
                    </pre>
                    <p>
                      With Spring Cloud Config, you can refresh configuration at runtime without restarting the
                      application using the <code>@RefreshScope</code> annotation and the <code>/actuator/refresh</code>{" "}
                      endpoint.
                    </p>
                    <pre>
                      {`@RestController
@RefreshScope
public class ConfigController {

    @Value("\${myapp.feature.enabled:false}")
    private boolean featureEnabled;
    
    @GetMapping("/feature")
    public Map<String, Object> getFeatureStatus() {
        Map<String, Object> status = new HashMap<>();
        status.put("enabled", featureEnabled);
        return status;
    }
}`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Kubernetes ConfigMaps and Secrets</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>Kubernetes provides two resources for configuration management:</p>
                    <ul>
                      <li>
                        <strong>ConfigMaps</strong>: For non-sensitive configuration data
                      </li>
                      <li>
                        <strong>Secrets</strong>: For sensitive data like passwords and API keys
                      </li>
                    </ul>
                    <p>Spring Boot applications can consume ConfigMaps and Secrets in several ways:</p>
                    <ul>
                      <li>As environment variables</li>
                      <li>As mounted volumes</li>
                      <li>Using Spring Cloud Kubernetes</li>
                    </ul>
                    <p>Example ConfigMap:</p>
                    <pre>
                      {`apiVersion: v1
kind: ConfigMap
metadata:
  name: myapp-config
data:
  application.yml: |-
    server:
      port: 8080
    myapp:
      feature:
        enabled: true
      cache:
        timeout: 3600`}
                    </pre>
                    <p>Example Secret:</p>
                    <pre>
                      {`apiVersion: v1
kind: Secret
metadata:
  name: myapp-secrets
type: Opaque
data:
  # Base64 encoded values
  spring.datasource.username: ZGJ1c2Vy
  spring.datasource.password: ZGJwYXNz`}
                    </pre>
                    <p>Using ConfigMap and Secret in a Deployment:</p>
                    <pre>
                      {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 8080
        env:
        - name: SPRING_CONFIG_IMPORT
          value: "optional:configmap:myapp-config"
        envFrom:
        - secretRef:
            name: myapp-secrets
        volumeMounts:
        - name: config-volume
          mountPath: /config
      volumes:
      - name: config-volume
        configMap:
          name: myapp-config`}
                    </pre>
                    <p>
                      Spring Cloud Kubernetes provides integration between Spring Boot and Kubernetes for configuration
                      management:
                    </p>
                    <pre>
                      {`<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-kubernetes-config</artifactId>
</dependency>`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Vault for Secrets Management</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      HashiCorp Vault is a secrets management tool that provides secure storage and access to secrets.
                      Spring Cloud Vault integrates Spring Boot applications with Vault.
                    </p>
                    <p>Key features:</p>
                    <ul>
                      <li>Secure storage of secrets</li>
                      <li>Dynamic secrets generation</li>
                      <li>Secret rotation</li>
                      <li>Fine-grained access control</li>
                      <li>Audit logging</li>
                    </ul>
                    <p>Spring Cloud Vault configuration:</p>
                    <pre>
                      {`<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-vault-config</artifactId>
</dependency>`}
                    </pre>
                    <pre>
                      {`spring:
  cloud:
    vault:
      host: vault.example.com
      port: 8200
      scheme: https
      authentication: token
      token: s.your-vault-token
      kv:
        enabled: true
        backend: secret
        default-context: application
        profiles:
          - default`}
                    </pre>
                    <p>
                      With Spring Cloud Vault, secrets stored in Vault are automatically mapped to Spring properties:
                    </p>
                    <pre>
                      {`@RestController
public class SecretController {

    @Value("\${secret.api-key}")
    private String apiKey;
    
    @GetMapping("/secret-status")
    public Map<String, Object> getSecretStatus() {
        Map<String, Object> status = new HashMap<>();
        status.put("apiKeyConfigured", apiKey != null && !apiKey.isEmpty());
        return status;
    }
}`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Configuration Best Practices</h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>Externalize Configuration</strong>: Keep configuration separate from code to enable deployment
                  across different environments without code changes.
                </li>
                <li>
                  <strong>Use Environment Variables for Cloud Deployments</strong>: Environment variables are the
                  preferred method for configuration in containerized environments.
                </li>
                <li>
                  <strong>Secure Sensitive Information</strong>: Use encryption, secrets management tools, or secure
                  vaults for sensitive information like passwords and API keys.
                </li>
                <li>
                  <strong>Use Profiles for Environment-Specific Configuration</strong>: Spring profiles allow you to
                  define environment-specific configuration.
                </li>
                <li>
                  <strong>Centralize Configuration</strong>: Use Spring Cloud Config or similar tools to centralize
                  configuration management for microservices.
                </li>
                <li>
                  <strong>Validate Configuration</strong>: Use <code>@ConfigurationProperties</code> with validation to
                  ensure configuration is valid.
                </li>
                <li>
                  <strong>Provide Sensible Defaults</strong>: Always provide sensible defaults for configuration
                  properties to ensure the application can start with minimal configuration.
                </li>
                <li>
                  <strong>Document Configuration</strong>: Document all configuration properties, their purpose, and
                  possible values.
                </li>
                <li>
                  <strong>Use Type-Safe Configuration</strong>: Use <code>@ConfigurationProperties</code> for type-safe
                  access to configuration properties.
                </li>
                <li>
                  <strong>Implement Configuration Refresh</strong>: For long-running applications, implement mechanisms
                  to refresh configuration without restarts.
                </li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Type-Safe Configuration with @ConfigurationProperties</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Boot's <code>@ConfigurationProperties</code> provides type-safe access to configuration
                properties. It allows you to map configuration properties to Java objects, providing better structure,
                validation, and IDE support.
              </p>
              <p>Example:</p>
              <pre>
                {`@Configuration
@ConfigurationProperties(prefix = "myapp")
@Validated
public class MyAppProperties {

    @NotNull
    private Feature feature;
    
    @NotNull
    private Cache cache;
    
    // Getters and setters
    
    public static class Feature {
        private boolean enabled;
        
        // Getters and setters
    }
    
    public static class Cache {
        @Min(0)
        private int timeout = 3600;
        
        // Getters and setters
    }
}`}
              </pre>
              <p>Using the configuration properties:</p>
              <pre>
                {`@Service
public class MyService {

    private final MyAppProperties properties;
    
    public MyService(MyAppProperties properties) {
        this.properties = properties;
    }
    
    public void doSomething() {
        if (properties.getFeature().isEnabled()) {
            // Feature is enabled
            int cacheTimeout = properties.getCache().getTimeout();
            // Use cache timeout
        }
    }
}`}
              </pre>
              <p>
                Benefits of <code>@ConfigurationProperties</code>:
              </p>
              <ul>
                <li>Type safety and validation</li>
                <li>Structured configuration</li>
                <li>IDE support for auto-completion</li>
                <li>Documentation generation</li>
                <li>Relaxed binding (e.g., my-property, my_property, myProperty all map to the same property)</li>
              </ul>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Spring Cloud Config</h2>
            <Card>
              <CardHeader>
                <CardTitle>Centralized Configuration with Spring Cloud Config</CardTitle>
                <CardDescription>Setting up a configuration server and client</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">1. Config Server (pom.xml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-server</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">2. Config Server (ConfigServerApplication.java)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">3. Config Server (application.yml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`server:
  port: 8888

spring:
  cloud:
    config:
      server:
        git:
          uri: https://github.com/myorg/config-repo
          default-label: main
          search-paths: '{application}'
          clone-on-start: true
  security:
    user:
      name: configuser
      password: configpassword

# Enable encryption/decryption
encrypt:
  key: my-secret-key`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">4. Config Client (pom.xml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">5. Config Client (bootstrap.yml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`spring:
  application:
    name: myapp
  cloud:
    config:
      uri: http://localhost:8888
      username: configuser
      password: configpassword
      fail-fast: true
      retry:
        max-attempts: 6
        initial-interval: 1000
        max-interval: 2000
        multiplier: 1.1`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">6. Config Client (application.yml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`management:
  endpoints:
    web:
      exposure:
        include: refresh,health,info`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">7. Config Client (ConfigController.java)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@RestController
@RefreshScope
public class ConfigController {

    @Value("\${myapp.feature.enabled:false}")
    private boolean featureEnabled;
    
    @Value("\${myapp.message:Default Message}")
    private String message;
    
    @GetMapping("/config")
    public Map<String, Object> getConfig() {
        Map<String, Object> config = new HashMap<>();
        config.put("featureEnabled", featureEnabled);
        config.put("message", message);
        return config;
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">8. Config Repository (myapp.yml in Git repository)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`myapp:
  feature:
    enabled: true
  message: Hello from Config Server!`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">9. Refresh Configuration</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# After changing configuration in Git repository
curl -X POST http://localhost:8080/actuator/refresh`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Type-Safe Configuration</h2>
            <Card>
              <CardHeader>
                <CardTitle>Type-Safe Configuration with @ConfigurationProperties</CardTitle>
                <CardDescription>Implementing type-safe configuration with validation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">1. Add dependencies (pom.xml)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-configuration-processor</artifactId>
    <optional>true</optional>
</dependency>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">2. Configuration properties class (MyAppProperties.java)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Configuration
@ConfigurationProperties(prefix = "myapp")
@Validated
public class MyAppProperties {

    @NotNull
    private Feature feature = new Feature();
    
    @NotNull
    private Cache cache = new Cache();
    
    @NotEmpty
    private String apiKey;
    
    // Getters and setters
    
    public Feature getFeature() {
        return feature;
    }
    
    public void setFeature(Feature feature) {
        this.feature = feature;
    }
    
    public Cache getCache() {
        return cache;
    }
    
    public void setCache(Cache cache) {
        this.cache = cache;
    }
    
    public String getApiKey() {
        return apiKey;
    }
    
    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }
    
    public static class Feature {
        private boolean enabled;
        private String name;
        
        public boolean isEnabled() {
            return enabled;
        }
        
        public void setEnabled(boolean enabled) {
            this.enabled = enabled;
        }
        
        public String getName() {
            return name;
        }
        
        public void setName(String name) {
            this.name = name;
        }
    }
    
    public static class Cache {
        @Min(0)
        private int timeout = 3600;
        
        @Min(0)
        private int maxSize = 1000;
        
        public int getTimeout() {
            return timeout;
        }
        
        public void setTimeout(int timeout) {
            this.timeout = timeout;
        }
        
        public int getMaxSize() {
            return maxSize;
        }
        
        public void setMaxSize(int maxSize) {
            this.maxSize = maxSize;
        }
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">3. Enable configuration properties (Application.java)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@SpringBootApplication
@EnableConfigurationProperties(MyAppProperties.class)
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">4. Configuration in application.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`myapp:
  feature:
    enabled: true
    name: "Cool Feature"
  cache:
    timeout: 7200
    max-size: 2000
  api-key: "your-api-key"`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">5. Using the configuration (MyService.java)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Service
public class MyService {

    private final MyAppProperties properties;
    
    public MyService(MyAppProperties properties) {
        this.properties = properties;
    }
    
    public void doSomething() {
        if (properties.getFeature().isEnabled()) {
            System.out.println("Feature " + properties.getFeature().getName() + " is enabled");
            System.out.println("Cache timeout: " + properties.getCache().getTimeout());
            System.out.println("Cache max size: " + properties.getCache().getMaxSize());
            System.out.println("API Key: " + properties.getApiKey());
        }
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">
                      6. Configuration metadata (META-INF/spring-configuration-metadata.json)
                    </p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`{
  "groups": [
    {
      "name": "myapp",
      "type": "com.example.MyAppProperties",
      "sourceType": "com.example.MyAppProperties"
    },
    {
      "name": "myapp.feature",
      "type": "com.example.MyAppProperties$Feature",
      "sourceType": "com.example.MyAppProperties",
      "sourceMethod": "getFeature()"
    },
    {
      "name": "myapp.cache",
      "type": "com.example.MyAppProperties$Cache",
      "sourceType": "com.example.MyAppProperties",
      "sourceMethod": "getCache()"
    }
  ],
  "properties": [
    {
      "name": "myapp.feature.enabled",
      "type": "java.lang.Boolean",
      "description": "Whether the feature is enabled.",
      "sourceType": "com.example.MyAppProperties$Feature",
      "defaultValue": false
    },
    {
      "name": "myapp.feature.name",
      "type": "java.lang.String",
      "description": "The name of the feature.",
      "sourceType": "com.example.MyAppProperties$Feature"
    },
    {
      "name": "myapp.cache.timeout",
      "type": "java.lang.Integer",
      "description": "Cache timeout in seconds.",
      "sourceType": "com.example.MyAppProperties$Cache",
      "defaultValue": 3600
    },
    {
      "name": "myapp.cache.max-size",
      "type": "java.lang.Integer",
      "description": "Maximum cache size.",
      "sourceType": "com.example.MyAppProperties$Cache",
      "defaultValue": 1000
    },
    {
      "name": "myapp.api-key",
      "type": "java.lang.String",
      "description": "API key for external service.",
      "sourceType": "com.example.MyAppProperties"
    }
  ],
  "hints": []
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
            <Card>
              <CardHeader>
                <CardTitle>Exercise 1: Implement Type-Safe Configuration</CardTitle>
                <CardDescription>Create a Spring Boot application with type-safe configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a Spring Boot application with Web and Validation dependencies</li>
                  <li>
                    Create a configuration properties class for an e-commerce application with the following sections:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Product settings (default page size, max price, etc.)</li>
                      <li>User settings (session timeout, max login attempts, etc.)</li>
                      <li>Payment settings (supported payment methods, transaction timeout, etc.)</li>
                    </ul>
                  </li>
                  <li>Add validation to the configuration properties</li>
                  <li>Create a REST controller that displays the configuration</li>
                  <li>Configure different values for development and production profiles</li>
                  <li>Test the application with different profiles</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 2: Set Up Spring Cloud Config</CardTitle>
                <CardDescription>Implement centralized configuration with Spring Cloud Config</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a Git repository for configuration</li>
                  <li>Add configuration files for different applications and environments</li>
                  <li>Create a Config Server application</li>
                  <li>Configure the Config Server to use the Git repository</li>
                  <li>Create a client application that gets its configuration from the Config Server</li>
                  <li>
                    Implement a controller with <code>@RefreshScope</code> to display configuration
                  </li>
                  <li>Test configuration changes by updating the Git repository and refreshing the client</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 3: Kubernetes ConfigMaps and Secrets</CardTitle>
                <CardDescription>
                  Configure a Spring Boot application using Kubernetes ConfigMaps and Secrets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a Spring Boot application</li>
                  <li>Create a Dockerfile for the application</li>
                  <li>Create a Kubernetes ConfigMap with non-sensitive configuration</li>
                  <li>Create a Kubernetes Secret with sensitive configuration</li>
                  <li>Create a Kubernetes Deployment that mounts the ConfigMap and Secret</li>
                  <li>Configure the Spring Boot application to use the mounted configuration</li>
                  <li>Deploy the application to a Kubernetes cluster (or Minikube)</li>
                  <li>Test the application and verify it's using the configuration from ConfigMap and Secret</li>
                </ol>
              </CardContent>
            </Card>
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
                        href="https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Externalized Configuration
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-boot/docs/current/reference/html/configuration-metadata.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Configuration Metadata
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-cloud-config/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Config
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-cloud-kubernetes/docs/current/reference/html/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud Kubernetes
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tutorials and Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://www.baeldung.com/configuration-properties-in-spring-boot"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Guide to @ConfigurationProperties
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.baeldung.com/spring-cloud-configuration"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Cloud Config
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.baeldung.com/spring-boot-kubernetes-self-healing-apps"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Boot Kubernetes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://spring.io/guides/gs/centralized-configuration/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Guide: Centralized Configuration
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
                        href="/modules/cloud-deployment/cloud-integration/spring-cloud"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Cloud
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/cloud-deployment/cloud-platform-deployment"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Cloud Platform Deployment
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/cloud-deployment/containerization/kubernetes-deployment"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Kubernetes Deployment
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
                        href="https://www.manning.com/books/spring-boot-in-action"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot in Action
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.manning.com/books/spring-microservices-in-action-second-edition"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Microservices in Action
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.packtpub.com/product/cloud-native-spring-in-action/9781617298424"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Cloud Native Spring in Action
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.oreilly.com/library/view/spring-boot-up/9781492076971/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot: Up and Running
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
          <Link href="/modules/cloud-deployment/cloud-platform-deployment">← Back to Cloud Platform Deployment</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/cloud-deployment/containerization/docker-integration">Next: Docker Integration →</Link>
        </Button>
      </div>
    </div>
  )
}
