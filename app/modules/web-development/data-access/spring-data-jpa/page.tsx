"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SpringDataJpaModule() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header Section */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Spring Data JPA</h1>
          <Badge>Module 5.4</Badge>
        </div>
        <p className="text-muted-foreground">
          Learn how to use Spring Data JPA to simplify database interactions and reduce boilerplate code
        </p>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-4 md:w-auto">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        {/* Content Tab */}
        <TabsContent value="content" className="space-y-6">
          {/* What is Spring Data JPA Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">What is Spring Data JPA?</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Spring Data JPA is part of the larger Spring Data family that simplifies the 
                implementation of repositories using Java Persistence API (JPA). It provides 
                powerful features like query derivation, pagination, sorting, and auditing 
                without writing boilerplate code.
              </p>
              <ul>
                <li><strong>JpaRepository:</strong> Interface providing CRUD functionality</li>
                <li><strong>PagingAndSortingRepository:</strong> Pagination and sorting support</li>
                <li><strong>${'@Query'}:</strong> Define custom JPQL/SQL queries</li>
              </ul>
            </div>
          </section>

          {/* Implementation Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Implementation Guide</h2>
            <div className="prose dark:prose-invert max-w-none">
              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`${'@Entity'}
${'@Data'}
public class Product {
    ${'@Id'}
    ${'@GeneratedValue(strategy = GenerationType.IDENTITY)'}
    private Long id;
    private String name;
}`}
              </pre>

              <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mt-4">
{`public interface ProductRepository extends JpaRepository<Product, Long> {
    ${'@Query("SELECT p FROM Product p WHERE p.price BETWEEN :min AND :max")'}
    Page<Product> searchByPriceRange(
        ${'@Param("min")'} BigDecimal min,
        ${'@Param("max")'} BigDecimal max,
        Pageable pageable);
}`}
              </pre>
            </div>
          </section>

          {/* Best Practices Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Best Practices</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Validate input before querying</li>
                    <li>Use parameterized queries exclusively</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>Use pagination for large datasets</li>
                    <li>Leverage DTO projections</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        {/* Examples Tab */}
        <TabsContent value="examples" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Query Examples</h2>
            <Card>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm">
{`public interface UserRepository extends JpaRepository<User, Long> {
    ${'@Query("SELECT u FROM User u WHERE u.active = true")'}
    List<User> findActiveUsers();
}`}
                </pre>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Learning Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="https://spring.io/projects/spring-data-jpa" 
                     className="flex items-center gap-2 text-primary hover:underline">
                    <ExternalLink className="h-4 w-4" />
                    Official Spring Data JPA Docs
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>
      </Tabs>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/previous-module">← Previous</Link>
        </Button>
        <Button asChild>
          <Link href="/next-module">Next →</Link>
        </Button>
      </div>
    </div>
  )
}
