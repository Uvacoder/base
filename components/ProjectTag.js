const Tag = ({ text }) => {
  return (
      <span className="inline-block px-1 align-middle text-gray-500 text-xs font-normal w-fit border border-gray-500 dark:border-gray-500 dark:text-gray-400 dark:hover:border-white hover:border-black mr-2 uppercase transition duration-200 ease-in-out hover:text-gray-900 dark:hover:text-white cursor-default">
        {text}
      </span>
  )
}

export default Tag
