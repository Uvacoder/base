import Link from 'next/link'

const TagItem = ({ tag }) => (
  <Link href={`/tag/${encodeURIComponent(tag)}`}>
    <a>
      <p className="mr-1 px-2 border dark:border-gray-500 border-gray-500 dark:hover:border-white hover:border-black hover:text-black text-sm font-normal uppercase transition duration-500 ease-in-out dark:hover:text-white">
        {tag}
      </p>
    </a>
  </Link>
)

export default TagItem
