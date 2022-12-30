import React, { useEffect, useState } from 'react'
import './index.css'

function Aside() {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    bio: '',
    location: '',
    company: '',
    github: '',
    linkedin: ''
  })

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/gojibetters')
      const data = await response.json()

      setUser({
        avatar: data.avatar_url,
        name: data.name,
        bio: data.bio,
        location: data.location,
        company: data.company,
        github: data.login,
        linkedin: data.name
      })
    }

    fetchData()
  }, [])

  return (
    <div>
      <section className="info">
        <div className="basicInfo">
          <div className="photo">
            <img src={user.avatar} />
          </div>
          <div className="name">{user.name}</div>
          <div className="bio">{user.bio}</div>
        </div>
        <div className="socialMedia">
          <div className="item">
            <img src={require('../../assets/map-pin.svg').default} />
            <div className="location">
              <a href="https://www.google.com/search?q=brazil" target="_blank">
                {user.location}
              </a>
            </div>
          </div>
          <div className="item">
            <img src={require('../../assets/briefcase.svg').default} />
            <div className="company">
              <a href="https://lab2dev.com/" target="_blank">
                {user.company}
              </a>
            </div>
          </div>
          <div className="item">
            <img src={require('../../assets/github.svg').default} />
            <div className="github">
              <a href="https://github.com/gojibetters" target="_blank">
                {user.github}
              </a>
            </div>
          </div>
          <div className="item">
            <img src={require('../../assets/linkedin.svg').default} />
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/brunopatez/" target="_blank">
                {user.linkedin}
              </a>
            </div>
          </div>
          <div className="item">
            <img src={require('../../assets/mail.svg').default} />
            <div className="email">
              <a href="mailto:brunoapatez@gmail.com">Contact me</a>
            </div>
          </div>
        </div>
        <div className="technologies">
          <div className="text">Technologies</div>
          <div className="item">JavaScript</div>
          <div className="item">ReactJS</div>
          <div className="item">NodeJS</div>
          <div className="item">Git</div>
          <div className="item">GitHub</div>
          <div className="item">HTML</div>
          <div className="item">CSS</div>
          <div className="item">JAVA</div>
        </div>
        <div className="experience">
          <div className="text">Experience</div>
          <div className="textExperience">
            <ul>
              <li>LAB2DEV</li>
            </ul>
            2022 - Currently
            <br />
            Developer
          </div>
        </div>
        <div className="education">
          <div className="text">Education</div>
          <div className="textEducation">
            <ul>
              <li>ITB Brasílio Flores de Azevedo</li>
            </ul>
            2020 - 2022
            <br />
            Technical high school in Systems Development
          </div>
        </div>
      </section>
    </div>
  )
}

export default Aside
