import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import Tag from '@/components/Tag'

const BlogPost = ({ post }) => {
  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <a>
        <article
          key={post.id}
          className="mb-4 lg:p-4 md:p-4 p-4 rounded-md lg:hover:bg-gray-200 lg:hover:bg-opacity-40 lg:dark:hover:bg-gray-800 lg:dark:hover:bg-opacity-50 md:hover:bg-gray-200 md:hover:bg-opacity-40 md:dark:hover:bg-gray-800 md:dark:hover:bg-opacity-50 transition duration-400 hover:scale-105"
        >
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100 transition duration-500 ease-in-out">
              {post.title}
              {post.tags && (
                post.tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))
              )}
            </h2>
            <time className="flex-shrink-0 text-gray-600 dark:text-gray-400 text-sm">
              {formatDate(
                post?.date?.start_date || post.createdTime,
                BLOG.lang
              )}
            </time>
          </header>
          <main>
            <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
              {post.summary}
            </p>
          </main>
        </article>
      </a>
    </Link>
  )
}

export default BlogPost
