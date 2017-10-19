import React from 'react'
import Headline from './Headline'
import SubHeadline from './SubHeadline'
import Card from './Card'
// import 'tachyons/css/tachyons.min.css'

export default class App extends React.Component {
  render() {
    return (
      <div id='content' className='mw8 center'>
        {/* <Headline title='What are you reading today'/> */}
        <SubHeadline/>
      </div>
    );
  }
}

/**
 * Im gonna make that goddamn wikipedia bootleg, just because its looks good. so fuck the headline just go with the goddamn card.
 */
