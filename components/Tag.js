import Link from 'next/link'
import BLOG from '@/blog.config'

const Tag = ({ text }) => {
  return (
    <Link href={`${BLOG.path}/tag/${encodeURIComponent(text)}`} passHref>
      <span className="inline-block px-1 align-middle text-gray-500 text-xs font-normal w-fit border border-gray-500 dark:border-gray-500 dark:text-gray-400 dark:hover:border-white hover:border-black ml-2 uppercase transition duration-200 ease-in-out hover:text-gray-900 dark:hover:text-white">
        {text}
      </span>
    </Link>
  )
}

export default Tag
