import React from 'react'
import SEO from '../components/seo'

const Thoughts = () => (
  <>
    <SEO
      title="Thoughts"
      keywords={['Tomas Eglinskas', 'Software Engineer', 'Lithuania', 'Blog']}
    />
    <div>
      <div className="py-5 sm:py-10 mb-10 sm:mb-20">
        <p className="text-lg font-medium mb-20 text-center">Thoughts</p>

        <div className="text-sm">
          <h1 className="text-center italic mb-10">Time</h1>
          <div className="space-y-5 text-justify">
            <p>We all have heard the phrase about time being a finite resource. The importance of it from numerous noteworthy authors, big article publishers and our family and friends. And it's usually quite easy to hear an idea which we approve of, but it's quite hard to practically execute it.</p>
            <p>Our brains are wired towards tasks that have an instant or in a short timeframe reward, as opposed to a bigger one in the long term. At least, that's how I view myself. The long ones require more patience, concentration, reflections and small rewards along the way. As a result sentences like "time is a finite resource" are usually incomprehensible because we live by the moment, or at the maximum in a week's timeframe.</p>
            <p>But recently, after daily spending numerous hours on a specific goal, I started to understand the meaning of this phrase. I believe everyone will use different meanings and learn different lessons, and that is the correct way to live - by putting things towards our prisms and experiences. At least from my point of view, I understand that we can not compare time in the essence of what we could have done. It's easy to make this assumption because in thinking about the future, we think of the most optimistic outcome. I could have achieved X or learned Y, but now I know Z and I'm not sure if this was the correct path. The mere fact that we reached Z should make us feel great about ourselves. It is another question if we would have achieved X or Y in the first place. Time is finite, and we should think about how to spend it, but one shouldn't jump between shiny distractions and think that the most promising result will occur always.</p>
            <p>Don't overcomplicate things, and always prioritize happiness.</p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Thoughts
