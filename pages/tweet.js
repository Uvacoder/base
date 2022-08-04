import BLOG from '@/blog.config'
import TweetLayout from '@/layouts/tweet'
import { getAllData } from '@/lib/notion'

export default function tweet ({ tweets }) {
  return <TweetLayout tweets={tweets} />
}

export async function getStaticProps () {
  const tweets = await getAllData(BLOG.notionTweetPageId)
  return {
    props: {
      tweets
    },
    revalidate: 1
  }
}
