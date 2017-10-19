import React from 'react'

const Card = ({ article }) =>
  <article>
    
    <div>
      <img src={article.imgsrc}/>
    </div>

    <div>
      <span>{article.tag}</span>
      <h1 className='f3'>{article.title}</h1>
      <p>{article.preview}</p>
    </div>

  </article>

export default Card

/**
 * Damn gif is must be feature for all chat applications, people must can use gif, because gif are the best even better than sticker, its like sticker on steroids
 * Condition about this company make me unsure about my continuity in this
 */