import Container from '@/components/Container'
import TweetCard from '@/components/TweetCard'
import React from 'react'

const TweetLayout = ({ tweets = [] }) => {
  return (
    <Container
      title="Tweets"
      description="This is a collection of tweets I've enjoyed"
    >
      <p className="text-lg font-light leading-7 text-gray-500 dark:text-gray-400 mb-8 grid place-items-center">
        A collection of tweets I found useful
      </p>
      <div className="relative flex flex-wrap">
        {tweets
          .sort((a, b) => parseInt(a.order) - parseInt(b.order))
          .map((tweet) => (
            <TweetCard key={tweet.id} {...tweet} />
          ))}
      </div>
    </Container>
  )
}

TweetLayout.propTypes = {}

export default TweetLayout
