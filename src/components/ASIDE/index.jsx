import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

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
  const tech = [
    'JavaScript',
    'ReactJS',
    'NodeJS',
    'Git',
    'GitHub',
    'HTML',
    'CSS',
    'JAVA'
  ]
  const experience = [
    {
      company: 'Lab2Dev',
      date: '2022 - Currently',
      office: 'Developer'
    }
  ]
  const education = [
    {
      school: 'ITB Brasílio Flores de Azevedo',
      date: '2020 - 2022',
      description: 'Technical high school in Systems Development'
    }
  ]

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
      <section className={styles.sectionAside}>
        <div className={styles.basicInfo}>
          <img src={user.avatar} alt="User avatar" className={styles.avatar} />
          <div className={styles.name}>{user.name}</div>
          <div className={styles.bio}>{user.bio}</div>
        </div>

        <div className={styles.socialMedia}>
          <div className={styles.location}>
            <img src={require('../../assets/map-pin.svg').default} alt="" />
            <a
              href="https://www.google.com/search?q=brazil"
              target="_blank"
              rel="noreferrer"
            >
              {user.location}
            </a>
          </div>

          <div className={styles.company}>
            <img src={require('../../assets/briefcase.svg').default} alt="" />
            <a href="https://lab2dev.com/" target="_blank" rel="noreferrer">
              {user.company}
            </a>
          </div>

          <div className={styles.github}>
            <img src={require('../../assets/github.svg').default} alt="" />

            <a
              href="https://github.com/gojibetters"
              target="_blank"
              rel="noreferrer"
            >
              {user.github}
            </a>
          </div>

          <div className={styles.linkedin}>
            <img src={require('../../assets/linkedin.svg').default} alt="" />
            <a
              href="https://www.linkedin.com/in/brunopatez/"
              target="_blank"
              rel="noreferrer"
            >
              {user.linkedin}
            </a>
          </div>

          <div className={styles.email}>
            <img src={require('../../assets/mail.svg').default} alt="" />
            <a href="mailto:brunoapatez@gmail.com">Contact me</a>
          </div>
        </div>

        <div className={styles.technologies}>
          <h1>Technologies</h1>
          <ul className={styles.ulTechnologies}>
            {tech.map(item => {
              return <li>{item}</li>
            })}
          </ul>
        </div>

        <div className={styles.experience}>
          <h1>Experience</h1>
          <div className={styles.textExperience}>
            <ul className={styles.ulExperience}>
              {experience.map(item => {
                return (
                  <li key={item.id}>
                    <h3>{item.company}</h3>
                    <h4>{item.date}</h4>
                    <h5>{item.office}</h5>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className={styles.education}>
          <h1>Education</h1>
          <ul className={styles.ulEducation}>
            {education.map(item => {
              return (
                <li>
                  <h3>{item.school}</h3>
                  <h4>{item.date}</h4>
                  <h5>{item.description}</h5>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Aside
