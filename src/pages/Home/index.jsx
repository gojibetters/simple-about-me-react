import React from 'react'
import './index.css'
import Aside from '../../components/ASIDE'
import Card from '../../components/CARD'

function Home() {
  return (
    <div className="container">
      <Aside />

      <section className="projects">
        <div className="textProjects">
          <h1>My Projects</h1>
          <h2>
            <a
              href="https://github.com/gojibetters?tab=repositories"
              target="_blank"
            >
              See all
            </a>
          </h2>
        </div>
        <Card />
      </section>
    </div>
  )
}

export default Home
