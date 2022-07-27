import BLOG from '@/blog.config'
import HighlightLayout from '@/layouts/highlight'
import { getAllData } from '@/lib/notion'

export default function highlight ({ highlights }) {
  return <HighlightLayout highlights={highlights} />
}

export async function getStaticProps () {
  const highlights = await getAllData(BLOG.notionHighlightPageId)
  return {
    props: {
      highlights
    },
    revalidate: 1
  }
}
