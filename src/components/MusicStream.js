import React from 'react'

const MusicStream = props => {
  return (
    <section className="App-header">
      <div className="container main music-stream">
        <iframe width="100%" height="600" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/934329787&color=%23201418&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
      </div>
    </section>
  )
}

export default MusicStream