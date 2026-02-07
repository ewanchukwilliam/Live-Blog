import type { NavigationMenuItem } from '@nuxt/ui'

interface BlogPost {
  path: string
  title?: string
  description?: string
  date?: string
  image?: string
}

export const useBlogs = async () => {
  const { data: blogs } = await useAsyncData('blogs', async () => {
    const posts = await queryCollection('content')
      .where('path', 'LIKE', '/blog/%')
      .all()

    // Sort by date (newest first)
    return [...posts].sort((a: any, b: any) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0
      const dateB = b.date ? new Date(b.date).getTime() : 0
      return dateB - dateA
    })
  }, { server: true, lazy: false })

  return blogs as Ref<BlogPost[] | null>
}

export const useBlogNavItems = async () => {
  const blogs = await useBlogs()

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return computed<NavigationMenuItem[]>(() =>
    blogs.value?.map((blog: BlogPost): NavigationMenuItem => ({
      label: blog.title || blog.path.split('/').pop() || 'Untitled',
      icon: 'i-lucide-file-text',
      description: formatDate(blog.date),
      to: blog.path
    })) || []
  )
}
