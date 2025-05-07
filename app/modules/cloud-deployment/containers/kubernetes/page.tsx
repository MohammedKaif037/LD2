import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function KubernetesDeployment() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Kubernetes Deployment</h1>
          <Badge>Module 7.2.2</Badge>
        </div>
        <p className="text-muted-foreground">Learn how to deploy Spring Boot applications to Kubernetes</p>
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Kubernetes</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Kubernetes (K8s) is an open-source platform for automating deployment, scaling, and management of
                containerized applications. It groups containers that make up an application into logical units for easy
                management and discovery.
              </p>
              <p>Key benefits of deploying Spring Boot applications to Kubernetes include:</p>
              <ul>
                <li>Automated deployment and rollbacks</li>
                <li>Service discovery and load balancing</li>
                <li>Horizontal scaling</li>
                <li>Self-healing capabilities</li>
                <li>Secret and configuration management</li>
                <li>Storage orchestration</li>
                <li>Batch execution</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Kubernetes Core Concepts</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Pods</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      A Pod is the smallest deployable unit in Kubernetes. It represents a single instance of a running
                      process in your cluster. Pods contain one or more containers, such as Docker containers.
                    </p>
                    <p>
                      For Spring Boot applications, a Pod typically contains a single container running your
                      application, but it might also include sidecar containers for tasks like logging or monitoring.
                    </p>
                    <pre>
                      {`apiVersion: v1
kind: Pod
metadata:
  name: spring-boot-app
  labels:
    app: spring-boot-app
spec:
  containers:
  - name: spring-boot-app
    image: my-spring-boot-app:1.0.0
    ports:
    - containerPort: 8080
    resources:
      limits:
        memory: "512Mi"
        cpu: "500m"
      requests:
        memory: "256Mi"
        cpu: "200m"`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Deployments</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      A Deployment provides declarative updates for Pods. You describe a desired state in a Deployment,
                      and the Deployment Controller changes the actual state to the desired state at a controlled rate.
                    </p>
                    <p>
                      Deployments are ideal for stateless applications like most Spring Boot services. They manage
                      ReplicaSets, which ensure that a specified number of Pod replicas are running at any given time.
                    </p>
                    <pre>
                      {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: spring-boot-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: spring-boot-app
  template:
    metadata:
      labels:
        app: spring-boot-app
    spec:
      containers:
      - name: spring-boot-app
        image: my-spring-boot-app:1.0.0
        ports:
        - containerPort: 8080
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
          requests:
            memory: "256Mi"
            cpu: "200m"
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 15`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Services</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      A Service is an abstraction that defines a logical set of Pods and a policy by which to access
                      them. Services enable loose coupling between dependent Pods.
                    </p>
                    <p>
                      For Spring Boot applications, Services provide stable network identities and load balancing across
                      multiple instances of your application.
                    </p>
                    <pre>
                      {`apiVersion: v1
kind: Service
metadata:
  name: spring-boot-app
spec:
  selector:
    app: spring-boot-app
  ports:
  - port: 80
    targetPort: 8080
  type: ClusterIP`}
                    </pre>
                    <p>Service types include:</p>
                    <ul>
                      <li>
                        <strong>ClusterIP</strong>: Exposes the Service on an internal IP in the cluster (default)
                      </li>
                      <li>
                        <strong>NodePort</strong>: Exposes the Service on each Node's IP at a static port
                      </li>
                      <li>
                        <strong>LoadBalancer</strong>: Exposes the Service externally using a cloud provider's load
                        balancer
                      </li>
                      <li>
                        <strong>ExternalName</strong>: Maps the Service to a DNS name
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>ConfigMaps and Secrets</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      ConfigMaps and Secrets are used to separate configuration from application code, following the
                      Twelve-Factor App methodology.
                    </p>
                    <p>
                      <strong>ConfigMaps</strong> store non-confidential configuration data as key-value pairs, which
                      can be consumed by Pods as environment variables, command-line arguments, or configuration files.
                    </p>
                    <pre>
                      {`apiVersion: v1
kind: ConfigMap
metadata:
  name: spring-boot-config
data:
  application.properties: |
    spring.datasource.url=jdbc:postgresql://postgres:5432/mydb
    spring.jpa.hibernate.ddl-auto=update
    logging.level.org.springframework=INFO
  application-prod.properties: |
    spring.datasource.url=jdbc:postgresql://prod-postgres:5432/mydb
    logging.level.org.springframework=WARN`}
                    </pre>
                    <p>
                      <strong>Secrets</strong> are similar to ConfigMaps but are specifically designed for confidential
                      data such as passwords, OAuth tokens, and SSH keys.
                    </p>
                    <pre>
                      {`apiVersion: v1
kind: Secret
metadata:
  name: spring-boot-secrets
type: Opaque
data:
  # Values must be base64 encoded
  db-username: bXl1c2Vy
  db-password: bXlwYXNzd29yZA==`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Ingress</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Ingress exposes HTTP and HTTPS routes from outside the cluster to services within the cluster.
                      Traffic routing is controlled by rules defined on the Ingress resource.
                    </p>
                    <p>
                      For Spring Boot applications, Ingress can provide path-based routing, SSL termination, and
                      name-based virtual hosting.
                    </p>
                    <pre>
                      {`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: spring-boot-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: spring-boot-app
            port:
              number: 80
  tls:
  - hosts:
    - myapp.example.com
    secretName: myapp-tls-secret`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Persistent Volumes</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) provide a way to store data that
                      persists beyond the lifecycle of a Pod.
                    </p>
                    <p>
                      For Spring Boot applications that need to store data (e.g., file uploads), PVs and PVCs provide a
                      storage abstraction that is independent of the underlying storage provider.
                    </p>
                    <pre>
                      {`apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: spring-boot-pvc
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 1Gi
  storageClassName: standard`}
                    </pre>
                    <p>To use the PVC in a Deployment:</p>
                    <pre>
                      {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: spring-boot-app
spec:
  # ... other deployment specs
  template:
    spec:
      containers:
      - name: spring-boot-app
        # ... other container specs
        volumeMounts:
        - name: data-volume
          mountPath: /app/data
      volumes:
      - name: data-volume
        persistentVolumeClaim:
          claimName: spring-boot-pvc`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Kubernetes Integration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Spring Boot provides several features to enhance integration with Kubernetes:</p>
              <h3>Spring Boot Actuator</h3>
              <p>
                Spring Boot Actuator provides production-ready features like health checks, metrics, and environment
                information. These are essential for Kubernetes to monitor and manage your application.
              </p>
              <pre>
                {`# Add Actuator dependency
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

# Configure Actuator in application.properties
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.probes.enabled=true
management.endpoint.health.show-details=always
management.health.livenessState.enabled=true
management.health.readinessState.enabled=true`}
              </pre>
              <p>With these configurations, Kubernetes can use the following endpoints for health checks:</p>
              <ul>
                <li>
                  <code>/actuator/health/liveness</code> for liveness probes
                </li>
                <li>
                  <code>/actuator/health/readiness</code> for readiness probes
                </li>
              </ul>

              <h3>Spring Cloud Kubernetes</h3>
              <p>
                Spring Cloud Kubernetes provides integration between Spring Boot applications and Kubernetes. It
                includes features like:
              </p>
              <ul>
                <li>Discovery client implementation that resolves service names to Kubernetes Services</li>
                <li>ConfigMap and Secret property source implementations</li>
                <li>Kubernetes-aware load balancing with Ribbon</li>
                <li>Leader election implementation for Spring Integration</li>
              </ul>
              <pre>
                {`# Add Spring Cloud Kubernetes dependencies
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-kubernetes-client</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-kubernetes-client-config</artifactId>
</dependency>

# Enable ConfigMap and Secret loading in bootstrap.properties
spring.cloud.kubernetes.config.enabled=true
spring.cloud.kubernetes.secrets.enabled=true
spring.cloud.kubernetes.reload.enabled=true`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Deploying Spring Boot to Kubernetes</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Here's a step-by-step guide to deploying a Spring Boot application to Kubernetes:</p>
              <ol>
                <li>
                  <strong>Containerize your Spring Boot application</strong> using Docker as described in the Docker
                  Integration module.
                </li>
                <li>
                  <strong>Push your Docker image to a container registry</strong> (e.g., Docker Hub, Google Container
                  Registry, Amazon ECR, or a private registry).
                </li>
                <li>
                  <strong>Create Kubernetes manifests</strong> for your application, including Deployment, Service,
                  ConfigMap, and Secret resources.
                </li>
                <li>
                  <strong>Apply the manifests to your Kubernetes cluster</strong> using kubectl or a CI/CD pipeline.
                </li>
                <li>
                  <strong>Verify the deployment</strong> by checking the status of your Pods, Services, and other
                  resources.
                </li>
              </ol>
              <p>Here's a basic example of a Kubernetes manifest for a Spring Boot application:</p>
              <pre>
                {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: spring-boot-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: spring-boot-app
  template:
    metadata:
      labels:
        app: spring-boot-app
    spec:
      containers:
      - name: spring-boot-app
        image: my-registry/spring-boot-app:1.0.0
        ports:
        - containerPort: 8080
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "prod"
        - name: SPRING_DATASOURCE_USERNAME
          valueFrom:
            secretKeyRef:
              name: db-secrets
              key: username
        - name: SPRING_DATASOURCE_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secrets
              key: password
        volumeMounts:
        - name: config-volume
          mountPath: /app/config
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
          requests:
            memory: "256Mi"
            cpu: "200m"
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 15
      volumes:
      - name: config-volume
        configMap:
          name: spring-boot-config
---
apiVersion: v1
kind: Service
metadata:
  name: spring-boot-app
spec:
  selector:
    app: spring-boot-app
  ports:
  - port: 80
    targetPort: 8080
  type: ClusterIP`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Spring Boot on Kubernetes</h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>Implement proper health checks</strong> using Spring Boot Actuator's liveness and readiness
                  probes.
                </li>
                <li>
                  <strong>Externalize configuration</strong> using ConfigMaps and Secrets.
                </li>
                <li>
                  <strong>Set appropriate resource limits and requests</strong> to ensure efficient resource
                  utilization.
                </li>
                <li>
                  <strong>Use StatefulSets for stateful applications</strong> that require stable network identities or
                  persistent storage.
                </li>
                <li>
                  <strong>Implement graceful shutdown</strong> to handle termination signals properly.
                </li>
                <li>
                  <strong>Use Horizontal Pod Autoscaler (HPA)</strong> to automatically scale your application based on
                  CPU or custom metrics.
                </li>
                <li>
                  <strong>Implement proper logging</strong> to stdout/stderr for container log collection.
                </li>
                <li>
                  <strong>Use Kubernetes namespaces</strong> to organize and isolate your applications.
                </li>
                <li>
                  <strong>Implement network policies</strong> to control traffic flow between Pods.
                </li>
                <li>
                  <strong>Use Helm charts</strong> for more complex deployments with multiple related resources.
                </li>
              </ol>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Complete Spring Boot Kubernetes Deployment</h2>
            <Card>
              <CardHeader>
                <CardTitle>Kubernetes Manifests for Spring Boot Application</CardTitle>
                <CardDescription>A complete set of Kubernetes manifests for a Spring Boot application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">namespace.yaml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`apiVersion: v1
kind: Namespace
metadata:
  name: spring-boot-app
  labels:
    name: spring-boot-app`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">configmap.yaml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`apiVersion: v1
kind: ConfigMap
metadata:
  name: spring-boot-config
  namespace: spring-boot-app
data:
  application.yml: |
    spring:
      datasource:
        url: jdbc:postgresql://postgres:5432/mydb
        driver-class-name: org.postgresql.Driver
      jpa:
        hibernate:
          ddl-auto: update
        properties:
          hibernate:
            dialect: org.hibernate.dialect.PostgreSQLDialect
    
    management:
      endpoints:
        web:
          exposure:
            include: health,info,metrics,prometheus
      endpoint:
        health:
          probes:
            enabled: true
          show-details: always
      health:
        livenessState:
          enabled: true
        readinessState:
          enabled: true
    
    logging:
      level:
        org.springframework: INFO
        com.example: DEBUG`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">secret.yaml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`apiVersion: v1
kind: Secret
metadata:
  name: db-secrets
  namespace: spring-boot-app
type: Opaque
data:
  # Values are base64 encoded
  username: bXl1c2Vy
  password: bXlwYXNzd29yZA==`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">deployment.yaml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: spring-boot-app
  namespace: spring-boot-app
  labels:
    app: spring-boot-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: spring-boot-app
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: spring-boot-app
    spec:
      containers:
      - name: spring-boot-app
        image: my-registry/spring-boot-app:1.0.0
        imagePullPolicy: Always
        ports:
        - name: http
          containerPort: 8080
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "prod"
        - name: SPRING_CONFIG_LOCATION
          value: "file:/app/config/application.yml"
        - name: SPRING_DATASOURCE_USERNAME
          valueFrom:
            secretKeyRef:
              name: db-secrets
              key: username
        - name: SPRING_DATASOURCE_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secrets
              key: password
        - name: TZ
          value: "UTC"
        volumeMounts:
        - name: config-volume
          mountPath: /app/config
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
          requests:
            memory: "256Mi"
            cpu: "200m"
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
          timeoutSeconds: 3
          failureThreshold: 3
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 15
          timeoutSeconds: 3
          failureThreshold: 3
        startupProbe:
          httpGet:
            path: /actuator/health
            port: 8080
          initialDelaySeconds: 15
          periodSeconds: 5
          timeoutSeconds: 3
          failureThreshold: 30
      volumes:
      - name: config-volume
        configMap:
          name: spring-boot-config
      securityContext:
        runAsUser: 1000
        runAsGroup: 1000
        fsGroup: 1000`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">service.yaml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`apiVersion: v1
kind: Service
metadata:
  name: spring-boot-app
  namespace: spring-boot-app
  labels:
    app: spring-boot-app
spec:
  selector:
    app: spring-boot-app
  ports:
  - name: http
    port: 80
    targetPort: 8080
  type: ClusterIP`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">ingress.yaml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: spring-boot-ingress
  namespace: spring-boot-app
  annotations:
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: spring-boot-app
            port:
              number: 80
  tls:
  - hosts:
    - myapp.example.com
    secretName: myapp-tls-secret`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">hpa.yaml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: spring-boot-app-hpa
  namespace: spring-boot-app
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: spring-boot-app
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              Example: Spring Boot Application with Kubernetes Integration
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Spring Boot Application with Kubernetes Integration</CardTitle>
                <CardDescription>A Spring Boot application configured for Kubernetes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">pom.xml (relevant parts)</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`<dependencies>
    <!-- Spring Boot Starter Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Spring Boot Actuator -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    
    <!-- Spring Cloud Kubernetes -->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-kubernetes-client</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-kubernetes-client-config</artifactId>
    </dependency>
    
    <!-- Micrometer Prometheus Registry -->
    <dependency>
        <groupId>io.micrometer</groupId>
        <artifactId>micrometer-registry-prometheus</artifactId>
    </dependency>
</dependencies>`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">application.yml</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`spring:
  application:
    name: spring-boot-app
  cloud:
    kubernetes:
      config:
        enabled: true
        sources:
          - namespace: spring-boot-app
            name: spring-boot-config
      reload:
        enabled: true
        mode: polling
        period: 30000
      secrets:
        enabled: true
        paths:
          - /etc/secrets

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      probes:
        enabled: true
      show-details: always
  health:
    livenessState:
      enabled: true
    readinessState:
      enabled: true`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">KubernetesConfig.java</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`@Configuration
@EnableConfigurationProperties
public class KubernetesConfig {

    @Bean
    public DiscoveryClient discoveryClient(KubernetesClient client) {
        return new KubernetesDiscoveryClient(client);
    }
    
    @Bean
    public KubernetesHealthIndicator kubernetesHealthIndicator(KubernetesClient client) {
        return new KubernetesHealthIndicator(client);
    }
}`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Dockerfile</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /app
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src
RUN ./mvnw package -DskipTests

FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-XX:+UseContainerSupport", "-XX:MaxRAMPercentage=75.0", "-jar", "/app/app.jar"]`}
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
                <CardTitle>Exercise 1: Deploy a Spring Boot Application to Kubernetes</CardTitle>
                <CardDescription>Create and deploy a basic Spring Boot application to Kubernetes</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a simple Spring Boot REST API application with Actuator enabled</li>
                  <li>Containerize the application using Docker</li>
                  <li>Push the Docker image to a container registry</li>
                  <li>
                    Create Kubernetes manifests for:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Deployment with 2 replicas</li>
                      <li>Service of type ClusterIP</li>
                      <li>ConfigMap for application configuration</li>
                    </ul>
                  </li>
                  <li>Configure liveness and readiness probes using Actuator endpoints</li>
                  <li>Deploy the application to a Kubernetes cluster (local or cloud-based)</li>
                  <li>Verify the deployment and test the API endpoints</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 2: Implement Spring Cloud Kubernetes</CardTitle>
                <CardDescription>Enhance a Spring Boot application with Kubernetes integration</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Extend the application from Exercise 1 with Spring Cloud Kubernetes dependencies</li>
                  <li>Configure the application to load configuration from Kubernetes ConfigMaps</li>
                  <li>Add a feature flag in the ConfigMap and implement a REST endpoint that uses this flag</li>
                  <li>Configure the application to reload configuration when the ConfigMap changes</li>
                  <li>Deploy the updated application to Kubernetes</li>
                  <li>
                    Test the configuration loading by updating the ConfigMap and observing the application behavior
                  </li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 3: Implement a Complete Microservices Architecture</CardTitle>
                <CardDescription>Create and deploy a microservices application to Kubernetes</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    Create a microservices application with at least two services:
                    <ul className="list-disc pl-5 mt-1">
                      <li>User Service: Manages user data</li>
                      <li>Order Service: Manages orders and calls the User Service</li>
                    </ul>
                  </li>
                  <li>Implement service discovery using Spring Cloud Kubernetes</li>
                  <li>Implement a shared database (e.g., PostgreSQL) deployed to Kubernetes</li>
                  <li>Configure Secrets for database credentials</li>
                  <li>Implement an API Gateway using Spring Cloud Gateway</li>
                  <li>Configure Ingress for external access</li>
                  <li>Implement Horizontal Pod Autoscaler for the services</li>
                  <li>Deploy the complete application to Kubernetes</li>
                  <li>Test the application by making requests through the API Gateway</li>
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
                        href="https://kubernetes.io/docs/home/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Kubernetes Documentation
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
                        Spring Cloud Kubernetes Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.spring.io/spring-boot/docs/current/reference/html/actuator.html"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Actuator Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Kubernetes Deployments
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
                        href="https://spring.io/guides/gs/spring-boot-kubernetes/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Spring Boot Kubernetes Guide
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.baeldung.com/spring-cloud-kubernetes"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Baeldung: Spring Cloud Kubernetes
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kubernetes.io/docs/tutorials/kubernetes-basics/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Kubernetes Basics Tutorial
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://learnk8s.io/spring-boot-kubernetes-guide"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Learnk8s: Deploying Spring Boot to Kubernetes
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
                        href="/modules/cloud-deployment/containerization/docker-integration"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Integration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/cloud-deployment/containerization/container-orchestration"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Container Orchestration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/cloud-deployment/containerization/ci-cd-pipeline"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        CI/CD Pipeline
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tools and Utilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="https://helm.sh/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Helm - The Kubernetes Package Manager
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kustomize.io/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Kustomize - Kubernetes Configuration Management
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://skaffold.dev/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Skaffold - Local Kubernetes Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://k9scli.io/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        K9s - Kubernetes CLI To Manage Your Clusters
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
          <Link href="/modules/cloud-deployment/containerization/docker-integration">← Back to Docker Integration</Link>
        </Button>
        <Button asChild>
          <Link href="/modules/cloud-deployment/containerization/container-orchestration">
            Next: Container Orchestration →
          </Link>
        </Button>
      </div>
    </div>
  )
}
