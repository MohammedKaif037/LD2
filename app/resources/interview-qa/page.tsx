import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function InterviewQA() {
  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Spring Boot Interview Q&A</h1>
        <p className="text-muted-foreground">
          Comprehensive interview questions and answers for Spring Boot and Java developers
        </p>
      </div>

      <Tabs defaultValue="java" className="w-full">
        <TabsList className="grid w-full grid-cols-5 md:w-auto">
          <TabsTrigger value="java">Java</TabsTrigger>
          <TabsTrigger value="spring">Spring</TabsTrigger>
          <TabsTrigger value="spring-boot">Spring Boot</TabsTrigger>
          <TabsTrigger value="jpa">JPA/Hibernate</TabsTrigger>
          <TabsTrigger value="rest">REST APIs</TabsTrigger>
        </TabsList>

        <TabsContent value="java" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Java 8 Features</CardTitle>
              <CardDescription>Core Java concepts for Spring Boot developers</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>What are the main features of Java 8?</span>
                      <Badge>Beginner</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Java 8 introduced several significant features:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>Lambda Expressions:</strong> Allow treating functionality as a method argument.
                      </li>
                      <li>
                        <strong>Stream API:</strong> Enables functional-style operations on streams of elements.
                      </li>
                      <li>
                        <strong>Optional class:</strong> A container object used to contain not-null objects.
                      </li>
                      <li>
                        <strong>Default methods:</strong> Allow adding new methods to interfaces without breaking
                        existing implementation.
                      </li>
                      <li>
                        <strong>New Date and Time API:</strong> Improved date and time handling with the java.time
                        package.
                      </li>
                      <li>
                        <strong>Nashorn JavaScript Engine:</strong> A Java-based engine to execute JavaScript code.
                      </li>
                      <li>
                        <strong>forEach() method:</strong> Iterate over collections more easily.
                      </li>
                      <li>
                        <strong>Method references:</strong> Referencing methods or constructors without executing them.
                      </li>
                      <li>
                        <strong>Functional interfaces:</strong> Interfaces with a single abstract method, which can be
                        used with lambda expressions.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>Explain the concept of method references in Java 8</span>
                      <Badge>Intermediate</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Method references in Java 8 provide a way to refer to methods or constructors without invoking
                      them. They are a shorthand notation of a lambda expression that executes just one method. There
                      are four kinds of method references:
                    </p>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>Reference to a static method:</strong>
                        <pre className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.forEach(System.out::println);`}
                        </pre>
                      </li>
                      <li>
                        <strong>Reference to an instance method of a particular object:</strong>
                        <pre className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`String str = "Hello";
Predicate<String> methodRef = str::startsWith;
boolean result = methodRef.test("He"); // returns true`}
                        </pre>
                      </li>
                      <li>
                        <strong>Reference to an instance method of an arbitrary object of a particular type:</strong>
                        <pre className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`List<String> strings = Arrays.asList("a", "b", "A", "B");
strings.sort(String::compareToIgnoreCase);`}
                        </pre>
                      </li>
                      <li>
                        <strong>Reference to a constructor:</strong>
                        <pre className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`Supplier<List<String>> listSupplier = ArrayList::new;
List<String> list = listSupplier.get(); // Creates a new ArrayList`}
                        </pre>
                      </li>
                    </ol>

                    <p className="mt-2">
                      Method references make the code more readable and concise. They're particularly useful when
                      working with streams and functional interfaces.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>What are the SOLID principles? How do they apply to Java programming?</span>
                      <Badge>Advanced</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      SOLID is an acronym for five design principles intended to make software designs more
                      understandable, flexible, and maintainable:
                    </p>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>Single Responsibility Principle (SRP):</strong> A class should have only one reason to
                        change. In Java, this means each class should focus on a single functionality.
                      </li>
                      <li>
                        <strong>Open/Closed Principle (OCP):</strong> Software entities should be open for extension but
                        closed for modification. In Java, we can use interfaces and abstract classes to allow classes to
                        be easily extended without modifying them.
                      </li>
                      <li>
                        <strong>Liskov Substitution Principle (LSP):</strong> Objects of a superclass should be
                        replaceable with objects of its subclasses without affecting the correctness of the program.
                        This is crucial for proper use of inheritance in Java.
                      </li>
                      <li>
                        <strong>Interface Segregation Principle (ISP):</strong> Many client-specific interfaces are
                        better than one general-purpose interface. In Java, this encourages the creation of focused
                        interfaces rather than monolithic ones.
                      </li>
                      <li>
                        <strong>Dependency Inversion Principle (DIP):</strong> High-level modules should not depend on
                        low-level modules. Both should depend on abstractions. In Java, this principle is often
                        implemented using dependency injection and programming to interfaces.
                      </li>
                    </ol>

                    <p className="mt-2">
                      These principles guide developers in creating more maintainable, extensible, and testable code in
                      Java and other object-oriented languages.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="spring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Spring Core Concepts</CardTitle>
              <CardDescription>Fundamental Spring framework concepts</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>Explain the concept of Dependency Injection in Spring</span>
                      <Badge>Beginner</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Dependency Injection (DI) is a core concept in Spring that implements Inversion of Control (IoC).
                      It's a design pattern where the creation and management of object dependencies are handled by the
                      Spring container rather than by the objects themselves. There are three types of dependency
                      injection:
                    </p>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>Constructor Injection:</strong> Dependencies are provided through a class constructor.
                      </li>
                      <li>
                        <strong>Setter Injection:</strong> Dependencies are provided through setter methods.
                      </li>
                      <li>
                        <strong>Field Injection:</strong> Dependencies are injected directly into fields (using
                        @Autowired annotation).
                      </li>
                    </ol>

                    <p className="mt-2">
                      DI promotes loose coupling between classes, making the system more modular, testable, and
                      maintainable. It allows for easier unit testing by enabling the injection of mock objects.
                    </p>

                    <div className="bg-muted p-3 rounded-md mt-3">
                      <p className="font-semibold">Example of Constructor Injection:</p>
                      <pre className="text-sm mt-1">
                        {`@Service
public class UserService {
    private final UserRepository userRepository;
    
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>What is the difference between @Component, @Service, and @Repository annotations?</span>
                      <Badge>Intermediate</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      While these annotations are functionally similar as they all declare a class as a Spring-managed
                      component, they serve different semantic purposes:
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>@Component:</strong> This is a generic stereotype for any Spring-managed component. It's
                        the parent annotation for @Service and @Repository.
                      </li>
                      <li>
                        <strong>@Service:</strong> This annotation is used on a class that contains business logic. It's
                        used in the service layer of an application.
                      </li>
                      <li>
                        <strong>@Repository:</strong> This annotation is used on classes that directly access the
                        database. It's used in the persistence layer and automatically translates JDBC exceptions into
                        Spring's DataAccessException hierarchy.
                      </li>
                    </ul>

                    <p className="mt-2">
                      The main difference lies in their intended use and the automatic configuration they might trigger.
                      For example, @Repository provides additional benefits for exception translation specific to the
                      persistence layer.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>Explain the concept of AOP (Aspect-Oriented Programming) in Spring</span>
                      <Badge>Advanced</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Aspect-Oriented Programming (AOP) is a programming paradigm that aims to increase modularity by
                      allowing the separation of cross-cutting concerns. In Spring, AOP is used to implement features
                      like logging, security, and transaction management without modifying the core business logic of an
                      application.
                    </p>

                    <p className="mb-2">Key concepts in Spring AOP:</p>

                    <ul className="list-disc pl-5 space-y-2">
                      <li>
                        <strong>Aspect:</strong> A modularization of a concern that cuts across multiple classes.
                      </li>
                      <li>
                        <strong>Join point:</strong> A point during the execution of a program, such as the execution of
                        a method.
                      </li>
                      <li>
                        <strong>Advice:</strong> Action taken by an aspect at a particular join point.
                      </li>
                      <li>
                        <strong>Pointcut:</strong> A predicate that matches join points.
                      </li>
                      <li>
                        <strong>Weaving:</strong> Linking aspects with other application types or objects to create an
                        advised object.
                      </li>
                    </ul>

                    <p className="mt-2">
                      Spring AOP uses proxy-based AOP implementation, which means it creates proxy objects to implement
                      the aspects. This is different from AspectJ, which modifies the actual bytecode of the classes.
                    </p>

                    <div className="bg-muted p-3 rounded-md mt-3">
                      <p className="font-semibold">Example of AOP in Spring:</p>
                      <pre className="text-sm mt-1">
                        {`@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("Before method: " + joinPoint.getSignature().getName());
    }
}`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="spring-boot" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Spring Boot Features</CardTitle>
              <CardDescription>Spring Boot specific questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>How does Spring Boot's auto-configuration work?</span>
                      <Badge>Intermediate</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Spring Boot's auto-configuration feature automatically configures your Spring application based on
                      the dependencies present on the classpath. Here's how it works:
                    </p>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        Spring Boot looks at the dependencies you've added to your project (usually through starter
                        dependencies).
                      </li>
                      <li>
                        Based on these dependencies, it makes reasonable assumptions about how you want to configure
                        your application.
                      </li>
                      <li>It then automatically configures beans that you're likely to need.</li>
                    </ol>

                    <p className="mt-2">
                      This process is enabled by the @EnableAutoConfiguration annotation, which is typically part of
                      @SpringBootApplication. Auto-configuration is non-invasive; you can always override the defaults
                      if they don't suit your needs. It uses conditional annotations like @ConditionalOnClass and
                      @ConditionalOnMissingBean to determine whether to apply a particular configuration.
                    </p>

                    <div className="bg-muted p-3 rounded-md mt-3">
                      <p className="font-semibold">Example of @SpringBootApplication:</p>
                      <pre className="text-sm mt-1">
                        {`@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>What is the purpose of the @SpringBootApplication annotation?</span>
                      <Badge>Beginner</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The @SpringBootApplication annotation is a convenience annotation that combines three other
                      annotations:
                    </p>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>@Configuration:</strong> Indicates that the class declares one or more @Bean methods and
                        may be processed by the Spring container to generate bean definitions.
                      </li>
                      <li>
                        <strong>@EnableAutoConfiguration:</strong> Tells Spring Boot to start adding beans based on
                        classpath settings, other beans, and various property settings.
                      </li>
                      <li>
                        <strong>@ComponentScan:</strong> Tells Spring to look for other components, configurations, and
                        services in the package containing the application class and its sub-packages.
                      </li>
                    </ol>

                    <p className="mt-2">
                      By using @SpringBootApplication, you're adding all three of these annotations in one go. It's
                      typically used on the main class of a Spring Boot application.
                    </p>

                    <div className="bg-muted p-3 rounded-md mt-3">
                      <p className="font-semibold">Example:</p>
                      <pre className="text-sm mt-1">
                        {`@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}`}
                      </pre>
                    </div>

                    <p className="mt-2">
                      This annotation simplifies the setup process and reduces the amount of boilerplate configuration
                      needed to set up a Spring application. It's a key part of Spring Boot's "convention over
                      configuration" philosophy.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>Explain the concept of profiles in Spring Boot</span>
                      <Badge>Intermediate</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Profiles in Spring Boot provide a way to segregate parts of your application configuration and
                      make it available only in certain environments. This is particularly useful when you need
                      different configurations for different environments (e.g., development, testing, production).
                    </p>

                    <p className="mb-2">Key aspects of profiles:</p>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>Defining Profiles:</strong> You can define profiles using the @Profile annotation on
                        @Configuration classes or individual @Bean methods. You can also use profile-specific properties
                        files (e.g., application-dev.properties).
                      </li>
                      <li>
                        <strong>Activating Profiles:</strong> Profiles can be activated using the spring.profiles.active
                        property in application.properties/application.yml, using the -Dspring.profiles.active command
                        line argument, or programmatically using SpringApplication.setAdditionalProfiles().
                      </li>
                      <li>
                        <strong>Default Profile:</strong> If no profile is explicitly activated, Spring Boot uses the
                        default profile.
                      </li>
                      <li>
                        <strong>Profile-specific Properties:</strong> You can create profile-specific property files
                        like application-{profile}.properties. These properties override the ones in the main
                        application.properties file when the profile is active.
                      </li>
                    </ol>

                    <div className="bg-muted p-3 rounded-md mt-3">
                      <p className="font-semibold">Example of using @Profile on a configuration class:</p>
                      <pre className="text-sm mt-1">
                        {`@Configuration
@Profile("development")
public class DevelopmentConfig {
    @Bean
    public DataSource dataSource() {
        // return an in-memory database
    }
}

@Configuration
@Profile("production")
public class ProductionConfig {
    @Bean
    public DataSource dataSource() {
        // return a production database
    }
}`}
                      </pre>
                    </div>

                    <p className="mt-2">
                      Profiles are a powerful feature in Spring Boot that allow you to customize your application's
                      behavior for different environments, making it easier to manage configurations across various
                      deployment scenarios.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jpa" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>JPA and Hibernate</CardTitle>
              <CardDescription>Database access with JPA and Hibernate</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>What is the difference between JPA and Hibernate?</span>
                      <Badge>Beginner</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      JPA (Java Persistence API) is a specification that describes the management of relational data in
                      Java applications. It's just a set of interfaces and requires an implementation to work with.
                    </p>

                    <p className="mb-2">
                      Hibernate, on the other hand, is an implementation of the JPA specification. It's an ORM
                      (Object-Relational Mapping) tool that provides a framework for mapping Java objects to database
                      tables.
                    </p>

                    <p className="mb-2">Key differences:</p>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>JPA is a specification, while Hibernate is a JPA implementation.</li>
                      <li>
                        JPA uses JPQL (Java Persistence Query Language) for queries, while Hibernate has its own
                        Hibernate Query Language (HQL), although it also supports JPQL.
                      </li>
                      <li>
                        JPA is part of the Java EE specification, while Hibernate can be used in both Java SE and Java
                        EE environments.
                      </li>
                      <li>
                        Hibernate provides additional features beyond the JPA specification, such as its own cache and
                        query mechanisms.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>Explain the concept of lazy loading in Hibernate</span>
                      <Badge>Intermediate</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Lazy loading is a design pattern used in Hibernate (and other ORM frameworks) to defer the
                      initialization and loading of object relationships until they are actually needed.
                    </p>

                    <p className="mb-2">Key aspects of lazy loading:</p>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>Purpose:</strong> Lazy loading helps to improve performance by reducing the amount of
                        data loaded from the database initially. It's particularly useful when dealing with large object
                        graphs or relationships that are not always needed.
                      </li>
                      <li>
                        <strong>How it works:</strong> When an entity is loaded, its lazy-loaded properties or
                        relationships are not immediately fetched from the database. Instead, Hibernate creates a proxy
                        object for these properties. The actual data is only loaded when the property is accessed for
                        the first time.
                      </li>
                      <li>
                        <strong>Types of Lazy Loading:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>
                            Lazy Loading of Associations: One-to-Many, Many-to-One, or Many-to-Many relationships can be
                            lazily loaded.
                          </li>
                          <li>
                            Lazy Loading of Collections: Collections within entities can be configured for lazy loading.
                          </li>
                          <li>
                            Lazy Loading of Attributes: Individual attributes of an entity can be lazily loaded
                            (introduced in JPA 2.1).
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Configuration:</strong> In JPA, lazy loading is the default for most relationship types
                        (e.g., @OneToMany, @ManyToMany). It can be explicitly set using the fetch attribute.
                      </li>
                    </ol>

                    <div className="bg-muted p-3 rounded-md mt-3">
                      <p className="font-semibold">Example:</p>
                      <pre className="text-sm mt-1">
                        {`@Entity
public class User {
    @Id
    private Long id;
    
    private String name;
    
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Order> orders;
    
    // getters and setters
}`}
                      </pre>
                    </div>

                    <p className="mt-2">
                      Lazy loading requires an open Hibernate session to work properly. If you try to access a lazily
                      loaded property after the session is closed, you'll get a LazyInitializationException. This is
                      known as the "N+1 problem" and can be addressed using fetch joins or the @BatchSize annotation.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>How does Spring Boot handle database transactions?</span>
                      <Badge>Intermediate</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Spring Boot handles database transactions primarily through the @Transactional annotation and
                      programmatic transaction management.
                    </p>

                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong>Declarative Transaction Management:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>The @Transactional annotation can be applied at the class or method level.</li>
                          <li>When applied, it ensures that the method executes within a transaction.</li>
                          <li>If an exception is thrown, the transaction is rolled back; otherwise, it's committed.</li>
                        </ul>
                        <div className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`@Transactional
public void transferMoney(Account from, Account to, BigDecimal amount) {
    from.debit(amount);
    to.credit(amount);
}`}
                        </div>
                      </li>
                      <li>
                        <strong>Programmatic Transaction Management:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>
                            For more fine-grained control, you can use TransactionTemplate or PlatformTransactionManager
                            directly.
                          </li>
                        </ul>
                        <div className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`@Autowired
private TransactionTemplate transactionTemplate;

public void complexOperation() {
    transactionTemplate.execute(new TransactionCallback<Object>() {
        public Object doInTransaction(TransactionStatus status) {
            // ... perform transactional operations
            return null;
        }
    });
}`}
                        </div>
                      </li>
                      <li>
                        <strong>Configuration:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>
                            Spring Boot auto-configures a DataSourceTransactionManager if you're using a JDBC
                            DataSource.
                          </li>
                          <li>For JPA, it configures a JpaTransactionManager.</li>
                          <li>You can override these defaults by defining your own PlatformTransactionManager bean.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Transaction Propagation:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>
                            You can control how transactions are propagated using the propagation attribute of
                            @Transactional.
                          </li>
                          <li>
                            For example, REQUIRED (default) creates a new transaction if none exists, or uses the
                            existing one if present.
                          </li>
                        </ul>
                      </li>
                    </ol>

                    <p className="mt-2">
                      By leveraging these features, Spring Boot provides a robust and flexible way to manage database
                      transactions in your application.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rest" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>REST APIs</CardTitle>
              <CardDescription>Building RESTful services with Spring Boot</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="q1">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>What is the difference between @RequestParam and @PathVariable?</span>
                      <Badge>Beginner</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Both @RequestParam and @PathVariable are used to extract values from the request URL in Spring
                      MVC, but they are used in different scenarios:
                    </p>

                    <ol className="list-decimal pl-5 space-y-4">
                      <li>
                        <strong>@RequestParam:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Used to extract query parameters from the URL.</li>
                          <li>Typically used for optional parameters.</li>
                          <li>Example URL: /users?id=123</li>
                        </ul>
                        <div className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`@GetMapping("/users")
public User getUser(@RequestParam("id") Long id) {
    // ...
}`}
                        </div>
                      </li>
                      <li>
                        <strong>@PathVariable:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Used to extract values from the URI path.</li>
                          <li>Typically used for mandatory parameters that are part of the URI.</li>
                          <li>Example URL: /users/123</li>
                        </ul>
                        <div className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`@GetMapping("/users/{id}")
public User getUser(@PathVariable("id") Long id) {
    // ...
}`}
                        </div>
                      </li>
                    </ol>

                    <p className="mt-2">Key differences:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        @RequestParam is for query parameters (?key=value), while @PathVariable is for URI template
                        variables.
                      </li>
                      <li>
                        @RequestParam can easily be made optional with defaultValue, while @PathVariable is usually
                        mandatory.
                      </li>
                      <li>
                        @RequestParam is more flexible and can handle multiple parameters, arrays, and maps, while
                        @PathVariable is typically used for single values in the URI path.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q2">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>What is the difference between @RestController and @Controller?</span>
                      <Badge>Beginner</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Both @RestController and @Controller are annotations used in Spring MVC to define controller
                      classes, but they have some key differences:
                    </p>

                    <ol className="list-decimal pl-5 space-y-4">
                      <li>
                        <strong>@Controller:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>It's a specialization of the @Component annotation.</li>
                          <li>Used to mark a class as a Spring MVC controller.</li>
                          <li>Typically used with view-based applications where you return the name of the view.</li>
                          <li>
                            Methods typically return a String that represents the view name or a ModelAndView object.
                          </li>
                          <li>
                            To make a @Controller method return JSON/XML, you need to add @ResponseBody to the method.
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>@RestController:</strong>
                        <ul className="list-disc pl-5 mt-1">
                          <li>It's a convenience annotation that combines @Controller and @ResponseBody.</li>
                          <li>Introduced in Spring 4.0 to simplify the creation of RESTful web services.</li>
                          <li>Every method in a @RestController class assumes @ResponseBody by default.</li>
                          <li>
                            Methods typically return domain objects or collections, which are automatically serialized
                            to JSON or XML.
                          </li>
                        </ul>
                      </li>
                    </ol>

                    <div className="bg-muted p-3 rounded-md mt-3">
                      <p className="font-semibold">Example using @Controller:</p>
                      <pre className="text-sm mt-1">
                        {`@Controller
public class UserController {
    @GetMapping("/users")
    public String getUsers(Model model) {
        model.addAttribute("users", userService.getAllUsers());
        return "userList"; // returns view name
    }
    
    @GetMapping("/api/users")
    @ResponseBody
    public List<User> getUsersAsJson() {
        return userService.getAllUsers(); // returns JSON
    }
}`}
                      </pre>

                      <p className="font-semibold mt-3">Example using @RestController:</p>
                      <pre className="text-sm mt-1">
                        {`@RestController
@RequestMapping("/api")
public class UserRestController {
    @GetMapping("/users")
    public List<User> getUsers() {
        return userService.getAllUsers(); // returns JSON by default
    }
}`}
                      </pre>
                    </div>

                    <p className="mt-2">
                      In summary, @RestController is more convenient for creating RESTful web services, while
                      @Controller is more flexible and can be used for both traditional web applications and RESTful
                      services.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="q3">
                  <AccordionTrigger>
                    <div className="flex items-center gap-2">
                      <span>How does Spring Boot handle exception handling in REST APIs?</span>
                      <Badge>Intermediate</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Spring Boot provides several ways to handle exceptions in REST APIs:</p>

                    <ol className="list-decimal pl-5 space-y-3">
                      <li>
                        <strong>@ExceptionHandler:</strong> This annotation can be used on methods to handle specific
                        exceptions. It's typically used within @Controller or @RestController classes.
                        <div className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`@RestController
public class MyController {
    @ExceptionHandler(MyCustomException.class)
    public ResponseEntity<String> handleMyCustomException(MyCustomException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }
}`}
                        </div>
                      </li>
                      <li>
                        <strong>@ControllerAdvice:</strong> This annotation allows you to handle exceptions globally
                        across the whole application.
                        <div className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(MyCustomException.class)
    public ResponseEntity<String> handleMyCustomException(MyCustomException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
    }
}`}
                        </div>
                      </li>
                      <li>
                        <strong>ResponseStatusException:</strong> This class can be used to throw HTTP status code
                        related exceptions programmatically.
                        <div className="bg-muted p-2 rounded-md mt-1 text-sm">
                          {`@GetMapping("/resource/{id}")
public Resource getResource(@PathVariable Long id) {
    Resource resource = resourceService.findById(id);
    if (resource == null) {
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Resource not found");
    }
    return resource;
}`}
                        </div>
                      </li>
                      <li>
                        <strong>Custom Error Pages:</strong> Spring Boot allows you to create custom error pages for
                        different HTTP status codes.
                      </li>
                      <li>
                        <strong>ErrorController:</strong> You can implement the ErrorController interface to customize
                        the default error handling provided by Spring Boot.
                      </li>
                    </ol>

                    <p className="mt-2">
                      These mechanisms allow for centralized, custom exception handling, making it easier to manage
                      errors consistently across your API.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/resources">← Back to Resources</Link>
        </Button>
        <Button asChild>
          <Link href="/resources/cheatsheets">View Cheatsheets →</Link>
        </Button>
      </div>
    </div>
  )
}
