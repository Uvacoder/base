import Container from '@/components/Container'
import HighlightCard from '@/components/HighlightCard'
import React from 'react'

const HighlightLayout = ({ highlights = [] }) => {
  return (
    <Container
      title="Highlights"
      description="Words of wisdom that I want to save"
    >
      <p className="text-lg font-light leading-7 text-gray-500 dark:text-gray-400 mb-8 grid place-items-center">
        So many words, so little time
      </p>
      <div className="relative flex flex-wrap">
        {highlights
          .sort((a, b) => parseInt(a.order) - parseInt(b.order))
          .map((highlight) => (
            <HighlightCard key={highlight.id} {...highlight} />
          ))}
      </div>
    </Container>
  )
}

HighlightLayout.propTypes = {}

export default HighlightLayout
