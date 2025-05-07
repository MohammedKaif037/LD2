import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ContainerOrchestration() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Container Orchestration</h1>
          <Badge>Module 7.2.3</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn advanced container orchestration concepts for Spring Boot applications
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
            <h2 className="text-2xl font-bold tracking-tight">Introduction to Container Orchestration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Container orchestration is the automated management, deployment, scaling, and networking of containers.
                As applications grow in complexity and scale, manually managing containers becomes impractical.
                Container orchestration tools automate many of these tasks, making it easier to manage containerized
                applications at scale.
              </p>
              <p>Key benefits of container orchestration for Spring Boot applications include:</p>
              <ul>
                <li>Automated deployment and scaling</li>
                <li>Load balancing and service discovery</li>
                <li>Resource allocation and optimization</li>
                <li>Self-healing capabilities</li>
                <li>Rolling updates and rollbacks</li>
                <li>Configuration and secret management</li>
                <li>Network management and security</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Container Orchestration Platforms</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Kubernetes</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Kubernetes (K8s) is the most widely adopted container orchestration platform. It was originally
                      developed by Google and is now maintained by the Cloud Native Computing Foundation (CNCF).
                    </p>
                    <p>Key Kubernetes features include:</p>
                    <ul>
                      <li>
                        <strong>Cluster Architecture</strong>: Consists of a control plane (master nodes) and worker
                        nodes
                      </li>
                      <li>
                        <strong>Declarative Configuration</strong>: Define the desired state of your application using
                        YAML or JSON
                      </li>
                      <li>
                        <strong>Self-healing</strong>: Automatically replaces and reschedules containers when nodes fail
                      </li>
                      <li>
                        <strong>Horizontal Scaling</strong>: Automatically scales applications based on CPU usage or
                        other metrics
                      </li>
                      <li>
                        <strong>Service Discovery and Load Balancing</strong>: Automatically distributes traffic and
                        tracks container locations
                      </li>
                      <li>
                        <strong>Storage Orchestration</strong>: Automatically mounts storage systems of your choice
                      </li>
                      <li>
                        <strong>Secret and Configuration Management</strong>: Manages sensitive information and
                        application configuration
                      </li>
                    </ul>
                    <p>
                      Kubernetes is covered in detail in the{" "}
                      <Link
                        href="/modules/cloud-deployment/containerization/kubernetes-deployment"
                        className="text-primary hover:underline"
                      >
                        Kubernetes Deployment
                      </Link>{" "}
                      module.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Docker Swarm</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Docker Swarm is Docker's native clustering and orchestration solution. It's simpler to set up and
                      use than Kubernetes but offers fewer features.
                    </p>
                    <p>Key Docker Swarm features include:</p>
                    <ul>
                      <li>
                        <strong>Integrated with Docker Engine</strong>: No additional installation required
                      </li>
                      <li>
                        <strong>Simple Setup</strong>: Easy to create and join a swarm with a single command
                      </li>
                      <li>
                        <strong>Declarative Service Model</strong>: Define services in a Compose file and deploy them to
                        the swarm
                      </li>
                      <li>
                        <strong>Scaling</strong>: Easily scale services up or down
                      </li>
                      <li>
                        <strong>Load Balancing</strong>: Built-in load balancing for services
                      </li>
                      <li>
                        <strong>Rolling Updates</strong>: Update services with zero downtime
                      </li>
                      <li>
                        <strong>Service Discovery</strong>: Automatic DNS-based service discovery
                      </li>
                    </ul>
                    <p>Example of creating and deploying to a Docker Swarm:</p>
                    <pre>
                      {`# Initialize a swarm
docker swarm init --advertise-addr <MANAGER-IP>

# Create a service
docker service create --name spring-app --replicas 3 -p 8080:8080 my-spring-app:latest

# Scale a service
docker service scale spring-app=5

# Update a service
docker service update --image my-spring-app:1.1 spring-app`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Amazon ECS</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Amazon Elastic Container Service (ECS) is a fully managed container orchestration service provided
                      by AWS. It integrates well with other AWS services and is a good choice for applications already
                      running on AWS.
                    </p>
                    <p>Key ECS features include:</p>
                    <ul>
                      <li>
                        <strong>Fully Managed</strong>: AWS handles the infrastructure management
                      </li>
                      <li>
                        <strong>Integration with AWS Services</strong>: Works seamlessly with other AWS services like
                        ECR, ALB, CloudWatch, etc.
                      </li>
                      <li>
                        <strong>Task Definitions</strong>: Define your application as a task definition
                      </li>
                      <li>
                        <strong>Service Scheduler</strong>: Maintains the desired number of tasks and handles failures
                      </li>
                      <li>
                        <strong>Fargate</strong>: Serverless compute engine for containers
                      </li>
                      <li>
                        <strong>Auto Scaling</strong>: Automatically adjust the desired task count
                      </li>
                      <li>
                        <strong>Load Balancing</strong>: Integrate with Application Load Balancer for routing traffic
                      </li>
                    </ul>
                    <p>Example of a task definition for a Spring Boot application:</p>
                    <pre>
                      {`{
  "family": "spring-boot-app",
  "executionRoleArn": "arn:aws:iam::123456789012:role/ecsTaskExecutionRole",
  "networkMode": "awsvpc",
  "containerDefinitions": [
    {
      "name": "spring-boot-app",
      "image": "123456789012.dkr.ecr.us-east-1.amazonaws.com/spring-boot-app:latest",
      "essential": true,
      "portMappings": [
        {
          "containerPort": 8080,
          "hostPort": 8080,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "SPRING_PROFILES_ACTIVE",
          "value": "prod"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/spring-boot-app",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ],
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512"
}`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Google Kubernetes Engine (GKE)</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Google Kubernetes Engine (GKE) is a managed Kubernetes service provided by Google Cloud. It
                      provides a fully managed Kubernetes environment with advanced features.
                    </p>
                    <p>Key GKE features include:</p>
                    <ul>
                      <li>
                        <strong>Fully Managed Kubernetes</strong>: Google manages the Kubernetes control plane
                      </li>
                      <li>
                        <strong>Auto-scaling</strong>: Automatically scales your cluster based on demand
                      </li>
                      <li>
                        <strong>Auto-upgrade</strong>: Automatically upgrades your cluster to the latest Kubernetes
                        version
                      </li>
                      <li>
                        <strong>Auto-repair</strong>: Automatically repairs unhealthy nodes
                      </li>
                      <li>
                        <strong>Integration with Google Cloud Services</strong>: Works seamlessly with other Google
                        Cloud services
                      </li>
                      <li>
                        <strong>Multi-zone and Regional Clusters</strong>: Distribute your cluster across multiple zones
                        or regions for high availability
                      </li>
                      <li>
                        <strong>Stackdriver Integration</strong>: Built-in monitoring, logging, and diagnostics
                      </li>
                    </ul>
                    <p>Example of creating a GKE cluster and deploying a Spring Boot application:</p>
                    <pre>
                      {`# Create a GKE cluster
gcloud container clusters create spring-cluster --num-nodes=3 --zone=us-central1-a

# Get credentials for the cluster
gcloud container clusters get-credentials spring-cluster --zone=us-central1-a

# Deploy a Spring Boot application
kubectl apply -f spring-boot-deployment.yaml`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Azure Kubernetes Service (AKS)</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Azure Kubernetes Service (AKS) is a managed Kubernetes service provided by Microsoft Azure. It
                      simplifies the deployment, management, and operations of Kubernetes.
                    </p>
                    <p>Key AKS features include:</p>
                    <ul>
                      <li>
                        <strong>Managed Kubernetes</strong>: Microsoft manages the Kubernetes control plane
                      </li>
                      <li>
                        <strong>Integration with Azure Services</strong>: Works seamlessly with other Azure services
                      </li>
                      <li>
                        <strong>Azure Active Directory Integration</strong>: Provides identity and access management
                      </li>
                      <li>
                        <strong>Azure Monitor Integration</strong>: Built-in monitoring and diagnostics
                      </li>
                      <li>
                        <strong>Virtual Network Integration</strong>: Deploy your cluster in a virtual network
                      </li>
                      <li>
                        <strong>Azure DevOps Integration</strong>: Streamlined CI/CD pipeline integration
                      </li>
                      <li>
                        <strong>Scaling</strong>: Easily scale your cluster manually or automatically
                      </li>
                    </ul>
                    <p>Example of creating an AKS cluster and deploying a Spring Boot application:</p>
                    <pre>
                      {`# Create a resource group
az group create --name spring-group --location eastus

# Create an AKS cluster
az aks create --resource-group spring-group --name spring-cluster --node-count 3 --enable-addons monitoring --generate-ssh-keys

# Get credentials for the cluster
az aks get-credentials --resource-group spring-group --name spring-cluster

# Deploy a Spring Boot application
kubectl apply -f spring-boot-deployment.yaml`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Advanced Orchestration Concepts</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Service Mesh</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      A service mesh is a dedicated infrastructure layer for handling service-to-service communication.
                      It provides features like traffic management, security, and observability for microservices.
                    </p>
                    <p>Popular service mesh implementations include:</p>
                    <ul>
                      <li>
                        <strong>Istio</strong>: A powerful and feature-rich service mesh that provides traffic
                        management, security, and observability
                      </li>
                      <li>
                        <strong>Linkerd</strong>: A lightweight service mesh focused on simplicity and performance
                      </li>
                      <li>
                        <strong>Consul Connect</strong>: A service mesh provided by HashiCorp Consul
                      </li>
                      <li>
                        <strong>AWS App Mesh</strong>: A service mesh provided by AWS
                      </li>
                    </ul>
                    <p>Key features of a service mesh include:</p>
                    <ul>
                      <li>
                        <strong>Traffic Management</strong>: Routing, load balancing, circuit breaking, and retries
                      </li>
                      <li>
                        <strong>Security</strong>: mTLS, authentication, and authorization
                      </li>
                      <li>
                        <strong>Observability</strong>: Metrics, logs, and distributed tracing
                      </li>
                      <li>
                        <strong>Policy Enforcement</strong>: Rate limiting, quotas, and access control
                      </li>
                    </ul>
                    <p>Example of deploying Istio and a Spring Boot application:</p>
                    <pre>
                      {`# Install Istio
istioctl install --set profile=demo

# Label the namespace for Istio injection
kubectl label namespace default istio-injection=enabled

# Deploy a Spring Boot application
kubectl apply -f spring-boot-deployment.yaml

# Create a Gateway and VirtualService for external access
kubectl apply -f - <<EOF
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: spring-gateway
spec:
  selector:
    istio: ingressgateway
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - "*"
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: spring-virtualservice
spec:
  hosts:
  - "*"
  gateways:
  - spring-gateway
  http:
  - match:
    - uri:
        prefix: /
    route:
    - destination:
        host: spring-boot-app
        port:
          number: 8080
EOF`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Stateful Applications</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Stateful applications maintain data that must be preserved across container restarts. Managing
                      stateful applications in a containerized environment requires special consideration.
                    </p>
                    <p>
                      In Kubernetes, StatefulSets are used to manage stateful applications. They provide guarantees
                      about the ordering and uniqueness of Pods.
                    </p>
                    <p>Key features of StatefulSets include:</p>
                    <ul>
                      <li>
                        <strong>Stable Network Identity</strong>: Each Pod gets a predictable hostname and DNS entry
                      </li>
                      <li>
                        <strong>Ordered Deployment and Scaling</strong>: Pods are created and terminated in order
                      </li>
                      <li>
                        <strong>Stable Storage</strong>: Each Pod can have its own persistent volume
                      </li>
                    </ul>
                    <p>Example of a StatefulSet for a Spring Boot application with a database:</p>
                    <pre>
                      {`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: spring-db
spec:
  serviceName: "spring-db"
  replicas: 3
  selector:
    matchLabels:
      app: spring-db
  template:
    metadata:
      labels:
        app: spring-db
    spec:
      containers:
      - name: postgres
        image: postgres:13
        ports:
        - containerPort: 5432
          name: postgres
        env:
        - name: POSTGRES_USER
          valueFrom:
            secretKeyRef:
              name: db-secrets
              key: username
        - name: POSTGRES_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secrets
              key: password
        - name: POSTGRES_DB
          value: mydb
        volumeMounts:
        - name: data
          mountPath: /var/lib/postgresql/data
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "standard"
      resources:
        requests:
          storage: 10Gi`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Auto-scaling</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Auto-scaling is the process of automatically adjusting the number of containers or nodes based on
                      demand. It ensures that your application has enough resources to handle traffic spikes while
                      minimizing costs during periods of low demand.
                    </p>
                    <p>Types of auto-scaling in Kubernetes:</p>
                    <ul>
                      <li>
                        <strong>Horizontal Pod Autoscaler (HPA)</strong>: Automatically scales the number of Pods based
                        on CPU utilization or custom metrics
                      </li>
                      <li>
                        <strong>Vertical Pod Autoscaler (VPA)</strong>: Automatically adjusts the CPU and memory
                        requests and limits for Pods
                      </li>
                      <li>
                        <strong>Cluster Autoscaler</strong>: Automatically adjusts the number of nodes in the cluster
                        based on resource requirements
                      </li>
                    </ul>
                    <p>Example of an HPA for a Spring Boot application:</p>
                    <pre>
                      {`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: spring-boot-app-hpa
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
                    <p>
                      For Spring Boot applications, you can also use custom metrics from Micrometer and Prometheus for
                      auto-scaling:
                    </p>
                    <pre>
                      {`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: spring-boot-app-hpa-custom
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: spring-boot-app
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Pods
    pods:
      metric:
        name: http_requests_per_second
      target:
        type: AverageValue
        averageValue: 100`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Blue-Green and Canary Deployments</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      Blue-Green and Canary deployments are advanced deployment strategies that minimize risk and
                      downtime when updating applications.
                    </p>
                    <p>
                      <strong>Blue-Green Deployment</strong>: Two identical environments (Blue and Green) are
                      maintained. The Blue environment is the current production environment, while the Green
                      environment is the new version. Once the Green environment is tested and ready, traffic is
                      switched from Blue to Green.
                    </p>
                    <p>
                      <strong>Canary Deployment</strong>: The new version is gradually rolled out to a small subset of
                      users before being rolled out to the entire user base. This allows for testing the new version
                      with real users while minimizing risk.
                    </p>
                    <p>
                      Tools like Istio, Argo Rollouts, and Flagger can be used to implement these deployment strategies
                      in Kubernetes.
                    </p>
                    <p>Example of a Blue-Green deployment with Kubernetes:</p>
                    <pre>
                      {`# Blue deployment (current version)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: spring-boot-blue
spec:
  replicas: 3
  selector:
    matchLabels:
      app: spring-boot
      version: blue
  template:
    metadata:
      labels:
        app: spring-boot
        version: blue
    spec:
      containers:
      - name: spring-boot
        image: my-spring-app:1.0.0
        ports:
        - containerPort: 8080

# Green deployment (new version)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: spring-boot-green
spec:
  replicas: 3
  selector:
    matchLabels:
      app: spring-boot
      version: green
  template:
    metadata:
      labels:
        app: spring-boot
        version: green
    spec:
      containers:
      - name: spring-boot
        image: my-spring-app:1.1.0
        ports:
        - containerPort: 8080

# Service (initially pointing to Blue)
apiVersion: v1
kind: Service
metadata:
  name: spring-boot
spec:
  selector:
    app: spring-boot
    version: blue
  ports:
  - port: 80
    targetPort: 8080`}
                    </pre>
                    <p>To switch traffic from Blue to Green:</p>
                    <pre>
                      {`# Update the service to point to Green
kubectl patch service spring-boot -p '{"spec":{"selector":{"version":"green"}}}'`}
                    </pre>
                    <p>Example of a Canary deployment with Istio:</p>
                    <pre>
                      {`apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: spring-boot-vs
spec:
  hosts:
  - spring-boot
  http:
  - route:
    - destination:
        host: spring-boot
        subset: v1
      weight: 90
    - destination:
        host: spring-boot
        subset: v2
      weight: 10
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: spring-boot-dr
spec:
  host: spring-boot
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>GitOps</AccordionTrigger>
                <AccordionContent>
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      GitOps is a set of practices that use Git as the single source of truth for declarative
                      infrastructure and applications. It ensures that the state of your infrastructure and applications
                      matches the state described in your Git repository.
                    </p>
                    <p>Key principles of GitOps:</p>
                    <ul>
                      <li>
                        <strong>Declarative</strong>: The desired state of the system is declared in a version
                        controlled repository
                      </li>
                      <li>
                        <strong>Versioned and Immutable</strong>: The state is stored in an immutable repository with
                        version history
                      </li>
                      <li>
                        <strong>Pulled Automatically</strong>: Software agents automatically pull the desired state from
                        the repository
                      </li>
                      <li>
                        <strong>Continuously Reconciled</strong>: Software agents continuously ensure that the actual
                        state matches the desired state
                      </li>
                    </ul>
                    <p>Popular GitOps tools include:</p>
                    <ul>
                      <li>
                        <strong>Flux</strong>: A GitOps operator for Kubernetes that ensures that the state of your
                        cluster matches the state in your Git repository
                      </li>
                      <li>
                        <strong>Argo CD</strong>: A declarative, GitOps continuous delivery tool for Kubernetes
                      </li>
                      <li>
                        <strong>Jenkins X</strong>: A CI/CD solution for Kubernetes that uses GitOps principles
                      </li>
                    </ul>
                    <p>Example of setting up Flux for a Spring Boot application:</p>
                    <pre>
                      {`# Install Flux
flux bootstrap github \\
  --owner=my-github-username \\
  --repository=my-gitops-repo \\
  --path=clusters/my-cluster \\
  --personal

# Create a source for your application repository
flux create source git spring-boot-app \\
  --url=https://github.com/my-github-username/spring-boot-app \\
  --branch=main \\
  --interval=1m

# Create a Kustomization for your application
flux create kustomization spring-boot-app \\
  --source=spring-boot-app \\
  --path="./k8s" \\
  --prune=true \\
  --interval=5m`}
                    </pre>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Spring Boot Considerations for Orchestration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                When deploying Spring Boot applications in an orchestrated environment, there are several considerations
                to keep in mind:
              </p>
              <ol>
                <li>
                  <strong>Externalized Configuration</strong>: Use Spring Cloud Kubernetes or other mechanisms to load
                  configuration from the orchestration platform.
                </li>
                <li>
                  <strong>Health Checks</strong>: Implement proper health checks using Spring Boot Actuator to enable
                  the orchestration platform to monitor the health of your application.
                </li>
                <li>
                  <strong>Graceful Shutdown</strong>: Configure your application to handle termination signals properly
                  to ensure graceful shutdown.
                </li>
                <li>
                  <strong>Resource Requirements</strong>: Properly configure resource requests and limits based on your
                  application's needs.
                </li>
                <li>
                  <strong>Logging</strong>: Configure your application to log to stdout/stderr for container log
                  collection.
                </li>
                <li>
                  <strong>Metrics</strong>: Expose metrics using Micrometer and Prometheus for monitoring and
                  auto-scaling.
                </li>
                <li>
                  <strong>Distributed Tracing</strong>: Implement distributed tracing using Spring Cloud Sleuth and
                  Zipkin for observability.
                </li>
                <li>
                  <strong>Circuit Breaking</strong>: Implement circuit breaking using Resilience4J or Spring Cloud
                  Circuit Breaker to handle failures gracefully.
                </li>
                <li>
                  <strong>Service Discovery</strong>: Use Spring Cloud Kubernetes or other service discovery mechanisms
                  to discover and communicate with other services.
                </li>
              </ol>
              <p>Example of configuring Spring Boot for container orchestration:</p>
              <pre>
                {`# application.yml
spring:
  application:
    name: spring-boot-app
  cloud:
    kubernetes:
      config:
        enabled: true
      reload:
        enabled: true
      secrets:
        enabled: true

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

server:
  shutdown: graceful

logging:
  pattern:
    console: "%d{yyyy-MM-dd HH:mm:ss} - %logger{36} - %msg%n"`}
              </pre>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices for Container Orchestration</h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>Use Declarative Configuration</strong>: Define your infrastructure and applications
                  declaratively using YAML or JSON files.
                </li>
                <li>
                  <strong>Implement CI/CD Pipelines</strong>: Automate the build, test, and deployment process using
                  CI/CD pipelines.
                </li>
                <li>
                  <strong>Follow GitOps Principles</strong>: Use Git as the single source of truth for your
                  infrastructure and applications.
                </li>
                <li>
                  <strong>Implement Proper Monitoring and Logging</strong>: Set up comprehensive monitoring and logging
                  for your applications and infrastructure.
                </li>
                <li>
                  <strong>Use Namespaces and RBAC</strong>: Organize your resources using namespaces and implement
                  proper role-based access control.
                </li>
                <li>
                  <strong>Implement Network Policies</strong>: Secure your applications by implementing network policies
                  to control traffic flow.
                </li>
                <li>
                  <strong>Use Secrets Management</strong>: Properly manage sensitive information using secrets
                  management tools.
                </li>
                <li>
                  <strong>Implement Resource Quotas and Limits</strong>: Set resource quotas and limits to ensure fair
                  resource allocation and prevent resource starvation.
                </li>
                <li>
                  <strong>Use Helm Charts or Kustomize</strong>: Package and deploy your applications using Helm charts
                  or Kustomize for better manageability.
                </li>
                <li>
                  <strong>Implement Backup and Disaster Recovery</strong>: Set up backup and disaster recovery
                  procedures for your applications and data.
                </li>
              </ol>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: Service Mesh with Istio</h2>
            <Card>
              <CardHeader>
                <CardTitle>Implementing a Service Mesh with Istio</CardTitle>
                <CardDescription>Deploy a Spring Boot application with Istio service mesh</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Install Istio</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Download Istio
curl -L https://istio.io/downloadIstio | sh -

# Move to the Istio directory
cd istio-*

# Add istioctl to your path
export PATH=$PWD/bin:$PATH

# Install Istio with the demo profile
istioctl install --set profile=demo -y

# Enable automatic sidecar injection for the default namespace
kubectl label namespace default istio-injection=enabled`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Deploy Spring Boot Microservices</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# user-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: user-service
  template:
    metadata:
      labels:
        app: user-service
    spec:
      containers:
      - name: user-service
        image: my-registry/user-service:1.0.0
        ports:
        - containerPort: 8080
---
apiVersion: v1
kind: Service
metadata:
  name: user-service
spec:
  selector:
    app: user-service
  ports:
  - port: 80
    targetPort: 8080

# order-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: order-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: order-service
  template:
    metadata:
      labels:
        app: order-service
    spec:
      containers:
      - name: order-service
        image: my-registry/order-service:1.0.0
        ports:
        - containerPort: 8080
        env:
        - name: USER_SERVICE_URL
          value: "http://user-service"
---
apiVersion: v1
kind: Service
metadata:
  name: order-service
spec:
  selector:
    app: order-service
  ports:
  - port: 80
    targetPort: 8080`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Configure Istio Gateway and Virtual Service</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# gateway.yaml
apiVersion: networking.istio.io/v1alpha3
kind: Gateway
metadata:
  name: microservices-gateway
spec:
  selector:
    istio: ingressgateway
  servers:
  - port:
      number: 80
      name: http
      protocol: HTTP
    hosts:
    - "*"
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: microservices-vs
spec:
  hosts:
  - "*"
  gateways:
  - microservices-gateway
  http:
  - match:
    - uri:
        prefix: /users
    route:
    - destination:
        host: user-service
        port:
          number: 80
  - match:
    - uri:
        prefix: /orders
    route:
    - destination:
        host: order-service
        port:
          number: 80`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Implement Circuit Breaking</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# circuit-breaker.yaml
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: user-service-cb
spec:
  host: user-service
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        http1MaxPendingRequests: 10
        maxRequestsPerConnection: 10
    outlierDetection:
      consecutive5xxErrors: 5
      interval: 30s
      baseEjectionTime: 30s
      maxEjectionPercent: 100`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Implement Canary Deployment</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# canary-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: user-service-v2
spec:
  replicas: 1
  selector:
    matchLabels:
      app: user-service
      version: v2
  template:
    metadata:
      labels:
        app: user-service
        version: v2
    spec:
      containers:
      - name: user-service
        image: my-registry/user-service:2.0.0
        ports:
        - containerPort: 8080
---
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
  name: user-service-vs
spec:
  hosts:
  - user-service
  http:
  - route:
    - destination:
        host: user-service
        subset: v1
      weight: 90
    - destination:
        host: user-service
        subset: v2
      weight: 10
---
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: user-service-dr
spec:
  host: user-service
  subsets:
  - name: v1
    labels:
      version: v1
  - name: v2
    labels:
      version: v2`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Example: GitOps with Flux</h2>
            <Card>
              <CardHeader>
                <CardTitle>Implementing GitOps with Flux</CardTitle>
                <CardDescription>Set up a GitOps workflow for Spring Boot applications using Flux</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Install Flux</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Install Flux CLI
curl -s https://fluxcd.io/install.sh | sudo bash

# Check Flux prerequisites
flux check --pre

# Bootstrap Flux with GitHub
flux bootstrap github \\
  --owner=my-github-username \\
  --repository=my-gitops-repo \\
  --path=clusters/my-cluster \\
  --personal`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Create a Source for Your Application Repository</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Create a source for your application repository
flux create source git spring-boot-app \\
  --url=https://github.com/my-github-username/spring-boot-app \\
  --branch=main \\
  --interval=1m \\
  --export > ./clusters/my-cluster/spring-boot-app-source.yaml

# Commit and push the source
git add ./clusters/my-cluster/spring-boot-app-source.yaml
git commit -m "Add spring-boot-app source"
git push`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Create a Kustomization for Your Application</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# Create a kustomization for your application
flux create kustomization spring-boot-app \\
  --source=spring-boot-app \\
  --path="./k8s" \\
  --prune=true \\
  --interval=5m \\
  --export > ./clusters/my-cluster/spring-boot-app-kustomization.yaml

# Commit and push the kustomization
git add ./clusters/my-cluster/spring-boot-app-kustomization.yaml
git commit -m "Add spring-boot-app kustomization"
git push`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Application Repository Structure</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# spring-boot-app repository structure
spring-boot-app/
├── src/
│   └── ...
├── k8s/
│   ├── kustomization.yaml
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── configmap.yaml
│   └── secret.yaml
└── ...`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Kustomization File</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# k8s/kustomization.yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
resources:
  - deployment.yaml
  - service.yaml
  - configmap.yaml
  - secret.yaml
namespace: default
commonLabels:
  app: spring-boot-app`}
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Deployment File</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
                      {`# k8s/deployment.yaml
apiVersion: apps/v1
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
        image: my-registry/spring-boot-app:1.0.0 # This will be updated by CI/CD
        ports:
        - containerPort: 8080
        env:
        - name: SPRING_PROFILES_ACTIVE
          value: "prod"
        - name: SPRING_CONFIG_LOCATION
          value: "file:/app/config/application.yml"
        volumeMounts:
        - name: config-volume
          mountPath: /app/config
      volumes:
      - name: config-volume
        configMap:
          name: spring-boot-app-config`}
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
                <CardTitle>Exercise 1: Implement a Service Mesh</CardTitle>
                <CardDescription>Deploy Spring Boot microservices with Istio service mesh</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Install Istio on a Kubernetes cluster</li>
                  <li>
                    Create two Spring Boot microservices:
                    <ul className="list-disc pl-5 mt-1">
                      <li>User Service: Manages user data</li>
                      <li>Order Service: Manages orders and calls the User Service</li>
                    </ul>
                  </li>
                  <li>Deploy the microservices to the Kubernetes cluster with Istio sidecar injection</li>
                  <li>Configure an Istio Gateway and VirtualService for external access</li>
                  <li>Implement circuit breaking using Istio DestinationRules</li>
                  <li>Implement a canary deployment for one of the services</li>
                  <li>
                    Test the service mesh features:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Traffic routing</li>
                      <li>Circuit breaking</li>
                      <li>Canary deployment</li>
                    </ul>
                  </li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 2: Implement GitOps with Flux</CardTitle>
                <CardDescription>Set up a GitOps workflow for Spring Boot applications</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Create a Git repository for your GitOps configuration</li>
                  <li>Install Flux on a Kubernetes cluster</li>
                  <li>Bootstrap Flux with your Git repository</li>
                  <li>Create a source for your Spring Boot application repository</li>
                  <li>Create a kustomization for your Spring Boot application</li>
                  <li>Organize your Spring Boot application repository with Kubernetes manifests</li>
                  <li>Test the GitOps workflow by making changes to your application repository</li>
                  <li>Observe Flux automatically applying the changes to your cluster</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exercise 3: Implement Auto-scaling</CardTitle>
                <CardDescription>Configure auto-scaling for Spring Boot applications</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Deploy a Spring Boot application to Kubernetes</li>
                  <li>Configure the application to expose metrics using Micrometer and Prometheus</li>
                  <li>Install Prometheus and Prometheus Adapter in your cluster</li>
                  <li>Configure a Horizontal Pod Autoscaler (HPA) based on CPU utilization</li>
                  <li>Configure a Horizontal Pod Autoscaler based on custom metrics from your application</li>
                  <li>Generate load on your application to trigger auto-scaling</li>
                  <li>Observe the auto-scaling behavior</li>
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
                        href="https://istio.io/latest/docs/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Istio Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://fluxcd.io/docs/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Flux Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.docker.com/engine/swarm/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Swarm Documentation
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
                        href="https://istio.io/latest/docs/setup/getting-started/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Getting Started with Istio
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://fluxcd.io/docs/get-started/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Getting Started with Flux
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Horizontal Pod Autoscaling Walkthrough
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.weave.works/technologies/gitops/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Guide to GitOps
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
                        href="/modules/cloud-deployment/containerization/kubernetes-deployment"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Kubernetes Deployment
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/modules/cloud-deployment/containerization/docker-compose"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Docker Compose
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
                        href="https://argoproj.github.io/argo-cd/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Argo CD - GitOps Continuous Delivery
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkerd.io/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Linkerd - Lightweight Service Mesh
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
                        href="https://helm.sh/"
                        className="flex items-center gap-2 text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Helm - Kubernetes Package Manager
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
          <Link href="/modules/cloud-deployment/containerization/kubernetes-deployment">
            ← Back to Kubernetes Deployment
          </Link>
        </Button>
        <Button asChild>
          <Link href="/modules/cloud-deployment/containerization/docker-compose">Next: Docker Compose →</Link>
        </Button>
      </div>
    </div>
  )
}
