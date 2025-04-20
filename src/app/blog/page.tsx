"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { BlogPostForm } from "@/components/blog/BlogPostForm"

interface BlogPost {
  id: string
  title: string
  content: string
  createdAt: string
  author: {
    name: string
  }
}

export default function BlogPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Blog</h1>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>Create New Post</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
              <DialogDescription>
                Write your new blog post here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <BlogPostForm onSuccess={() => setIsCreateDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>
                By {post.author.name} • {new Date(post.createdAt).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 
 