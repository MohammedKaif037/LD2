@echo off
REM Create Windows batch script for folder structure creation

REM Create fundamentals module structure (completing what's already started)
mkdir fundamentals\basic-understanding\embedded-servers
type nul > fundamentals\basic-understanding\embedded-servers\page.tsx

REM Create configuration submodule structure
mkdir fundamentals\configuration\project-structure
mkdir fundamentals\configuration\properties
mkdir fundamentals\configuration\annotations
mkdir fundamentals\configuration\profiles
mkdir fundamentals\configuration\externalized
type nul > fundamentals\configuration\page.tsx
type nul > fundamentals\configuration\project-structure\page.tsx
type nul > fundamentals\configuration\properties\page.tsx
type nul > fundamentals\configuration\annotations\page.tsx
type nul > fundamentals\configuration\profiles\page.tsx
type nul > fundamentals\configuration\externalized\page.tsx

REM Create web-development module structure
mkdir web-development\rest-apis\controllers
mkdir web-development\rest-apis\request-mapping
mkdir web-development\rest-apis\request-response
mkdir web-development\rest-apis\exception-handling
mkdir web-development\rest-apis\best-practices
mkdir web-development\data-access\spring-data-jpa
mkdir web-development\data-access\database-config
mkdir web-development\data-access\repository-pattern
mkdir web-development\data-access\transactions
mkdir web-development\data-access\crud
type nul > web-development\page.tsx
type nul > web-development\rest-apis\page.tsx
type nul > web-development\rest-apis\controllers\page.tsx
type nul > web-development\rest-apis\request-mapping\page.tsx
type nul > web-development\rest-apis\request-response\page.tsx
type nul > web-development\rest-apis\exception-handling\page.tsx
type nul > web-development\rest-apis\best-practices\page.tsx
type nul > web-development\data-access\page.tsx
type nul > web-development\data-access\spring-data-jpa\page.tsx
type nul > web-development\data-access\database-config\page.tsx
type nul > web-development\data-access\repository-pattern\page.tsx
type nul > web-development\data-access\transactions\page.tsx
type nul > web-development\data-access\crud\page.tsx

REM Create security module structure
mkdir security\basic\integration
mkdir security\basic\auth
mkdir security\basic\configurations
mkdir security\basic\password-encoding
mkdir security\basic\rbac
mkdir security\advanced\oauth2
mkdir security\advanced\jwt
mkdir security\advanced\csrf
mkdir security\advanced\session
mkdir security\advanced\best-practices
type nul > security\page.tsx
type nul > security\basic\page.tsx
type nul > security\basic\integration\page.tsx
type nul > security\basic\auth\page.tsx
type nul > security\basic\configurations\page.tsx
type nul > security\basic\password-encoding\page.tsx
type nul > security\basic\rbac\page.tsx
type nul > security\advanced\page.tsx
type nul > security\advanced\oauth2\page.tsx
type nul > security\advanced\jwt\page.tsx
type nul > security\advanced\csrf\page.tsx
type nul > security\advanced\session\page.tsx
type nul > security\advanced\best-practices\page.tsx

REM Create testing module structure
mkdir testing\fundamentals\junit
mkdir testing\fundamentals\integration
mkdir testing\fundamentals\mockito
mkdir testing\fundamentals\springboottest
mkdir testing\fundamentals\configuration
type nul > testing\page.tsx
type nul > testing\fundamentals\page.tsx
type nul > testing\fundamentals\junit\page.tsx
type nul > testing\fundamentals\integration\page.tsx
type nul > testing\fundamentals\mockito\page.tsx
type nul > testing\fundamentals\springboottest\page.tsx
type nul > testing\fundamentals\configuration\page.tsx

REM Create database module structure
mkdir database\relational\mysql-postgres
mkdir database\relational\connection-pooling
mkdir database\relational\query-optimization
mkdir database\relational\schema-management
mkdir database\nosql\mongodb
mkdir database\nosql\cassandra
mkdir database\nosql\redis
mkdir database\nosql\document-storage
type nul > database\page.tsx
type nul > database\relational\page.tsx
type nul > database\relational\mysql-postgres\page.tsx
type nul > database\relational\connection-pooling\page.tsx
type nul > database\relational\query-optimization\page.tsx
type nul > database\relational\schema-management\page.tsx
type nul > database\nosql\page.tsx
type nul > database\nosql\mongodb\page.tsx
type nul > database\nosql\cassandra\page.tsx
type nul > database\nosql\redis\page.tsx
type nul > database\nosql\document-storage\page.tsx

REM Create caching module structure
mkdir caching\implementation\ehcache
mkdir caching\implementation\redis
mkdir caching\implementation\caffeine
mkdir caching\implementation\hazelcast
mkdir caching\implementation\configuration
type nul > caching\page.tsx
type nul > caching\implementation\page.tsx
type nul > caching\implementation\ehcache\page.tsx
type nul > caching\implementation\redis\page.tsx
type nul > caching\implementation\caffeine\page.tsx
type nul > caching\implementation\hazelcast\page.tsx
type nul > caching\implementation\configuration\page.tsx

REM Create message-queues module structure
mkdir message-queues\brokers\kafka
mkdir message-queues\brokers\rabbitmq
mkdir message-queues\brokers\activemq
mkdir message-queues\brokers\event-processing
mkdir message-queues\brokers\async-communication
type nul > message-queues\page.tsx
type nul > message-queues\brokers\page.tsx
type nul > message-queues\brokers\kafka\page.tsx
type nul > message-queues\brokers\rabbitmq\page.tsx
type nul > message-queues\brokers\activemq\page.tsx
type nul > message-queues\brokers\event-processing\page.tsx
type nul > message-queues\brokers\async-communication\page.tsx

REM Create microservices module structure
mkdir microservices\basics\architecture
mkdir microservices\basics\communication
mkdir microservices\basics\api-gateway
mkdir microservices\basics\service-discovery
mkdir microservices\basics\load-balancing
mkdir microservices\advanced\circuit-breaker
mkdir microservices\advanced\bulkhead
mkdir microservices\advanced\event-sourcing
mkdir microservices\advanced\saga
mkdir microservices\advanced\service-mesh
type nul > microservices\page.tsx
type nul > microservices\basics\page.tsx
type nul > microservices\basics\architecture\page.tsx
type nul > microservices\basics\communication\page.tsx
type nul > microservices\basics\api-gateway\page.tsx
type nul > microservices\basics\service-discovery\page.tsx
type nul > microservices\basics\load-balancing\page.tsx
type nul > microservices\advanced\page.tsx
type nul > microservices\advanced\circuit-breaker\page.tsx
type nul > microservices\advanced\bulkhead\page.tsx
type nul > microservices\advanced\event-sourcing\page.tsx
type nul > microservices\advanced\saga\page.tsx
type nul > microservices\advanced\service-mesh\page.tsx

REM Create cloud-deployment module structure
mkdir cloud-deployment\cloud\cloud-native
mkdir cloud-deployment\cloud\spring-cloud
mkdir cloud-deployment\cloud\platforms
mkdir cloud-deployment\cloud\configuration
mkdir cloud-deployment\containers\docker
mkdir cloud-deployment\containers\kubernetes
mkdir cloud-deployment\containers\orchestration
mkdir cloud-deployment\containers\docker-compose
mkdir cloud-deployment\containers\cicd
type nul > cloud-deployment\page.tsx
type nul > cloud-deployment\cloud\page.tsx
type nul > cloud-deployment\cloud\cloud-native\page.tsx
type nul > cloud-deployment\cloud\spring-cloud\page.tsx
type nul > cloud-deployment\cloud\platforms\page.tsx
type nul > cloud-deployment\cloud\configuration\page.tsx
type nul > cloud-deployment\containers\page.tsx
type nul > cloud-deployment\containers\docker\page.tsx
type nul > cloud-deployment\containers\kubernetes\page.tsx
type nul > cloud-deployment\containers\orchestration\page.tsx
type nul > cloud-deployment\containers\docker-compose\page.tsx
type nul > cloud-deployment\containers\cicd\page.tsx

REM Create performance module structure
mkdir performance\optimization\application
mkdir performance\optimization\memory
mkdir performance\optimization\database
mkdir performance\optimization\caching
mkdir performance\optimization\query
mkdir performance\monitoring\actuator
mkdir performance\monitoring\metrics
mkdir performance\monitoring\logging
mkdir performance\monitoring\debugging
mkdir performance\monitoring\profiling
type nul > performance\page.tsx
type nul > performance\optimization\page.tsx
type nul > performance\optimization\application\page.tsx
type nul > performance\optimization\memory\page.tsx
type nul > performance\optimization\database\page.tsx
type nul > performance\optimization\caching\page.tsx
type nul > performance\optimization\query\page.tsx
type nul > performance\monitoring\page.tsx
type nul > performance\monitoring\actuator\page.tsx
type nul > performance\monitoring\metrics\page.tsx
type nul > performance\monitoring\logging\page.tsx
type nul > performance\monitoring\debugging\page.tsx
type nul > performance\monitoring\profiling\page.tsx

REM Create advanced module structure
mkdir advanced\modern\virtual-threads
mkdir advanced\modern\reactive
mkdir advanced\modern\webflux
mkdir advanced\modern\non-blocking
mkdir advanced\modern\advanced-caching
mkdir advanced\best-practices\design-patterns
mkdir advanced\best-practices\code-organization
mkdir advanced\best-practices\error-handling
mkdir advanced\best-practices\security
mkdir advanced\best-practices\performance
type nul > advanced\page.tsx
type nul > advanced\modern\page.tsx
type nul > advanced\modern\virtual-threads\page.tsx
type nul > advanced\modern\reactive\page.tsx
type nul > advanced\modern\webflux\page.tsx
type nul > advanced\modern\non-blocking\page.tsx
type nul > advanced\modern\advanced-caching\page.tsx
type nul > advanced\best-practices\page.tsx
type nul > advanced\best-practices\design-patterns\page.tsx
type nul > advanced\best-practices\code-organization\page.tsx
type nul > advanced\best-practices\error-handling\page.tsx
type nul > advanced\best-practices\security\page.tsx
type nul > advanced\best-practices\performance\page.tsx

echo Folder structure and files created successfully!