import { useEffect, useState } from 'react'

import {
  mapPin,
  briefCase,
  github,
  linkedin,
  mail,
} from '../../assets'

import styles from './index.module.css'

const asideInfo = {
  tech: [
    'JavaScript',
    'TypeScript',
    'SAPUI5',
    'ReactJS',
    'NodeJS',
    'Git',
    'JAVA'
  ],

  experience: [
    {
      company: 'Lab2Dev',
      date: '2022 - Currently',
      office: 'Web Developer'
    }
  ],

  education: [
    {
      school: 'ITB Brasílio Flores de Azevedo',
      date: '2020 - 2022',
      description: 'Technical high school in Systems Development'
    },
    {
      school: 'Estácio University',
      date: '2023 - 2027',
      description: 'Computer Science'
    }
  ]
}

export function Aside() {
  const [user, setUser] = useState({
    avatar: '',
    name: '',
    bio: '',
    location: '',
    company: '',
    github: '',
    linkedIn: ''
  })

  useEffect(() => {
    async function fetchData() {
      await fetch('https://api.github.com/users/gojibetters')
        .then((response) => response.json())
        .then((data) =>
          setUser({
            avatar: data.avatar_url,
            name: data.name,
            bio: data.bio,
            location: data.location,
            company: data.company,
            github: data.login,
            linkedIn: data.name
          })
        )
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
            <img src={mapPin} alt="" />
            <a
              href="https://www.google.com/search?q=brazil"
              target="_blank"
              rel="noreferrer"
            >
              {user.location}
            </a>
          </div>

          <div className={styles.company}>
            <img src={briefCase} alt="" />
            <a href="https://lab2dev.com/" target="_blank" rel="noreferrer">
              {user.company}
            </a>
          </div>

          <div className={styles.github}>
            <img src={github} alt="" />

            <a
              href="https://github.com/gojibetters"
              target="_blank"
              rel="noreferrer"
            >
              {user.github}
            </a>
          </div>

          <div className={styles.linkedin}>
            <img src={linkedin} alt="" />
            <a
              href="https://www.linkedin.com/in/brunopatez/"
              target="_blank"
              rel="noreferrer"
            >
              {user.linkedIn}
            </a>
          </div>

          <div className={styles.email}>
            <img src={mail} alt="" />
            <a href="mailto:brunoapatez@gmail.com">Contact me</a>
          </div>
        </div>

        <div className={styles.technologies}>
          <h1>Technologies</h1>
          <ul className={styles.ulTechnologies}>
            {asideInfo.tech.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>

        <div className={styles.experience}>
          <h1>Experience</h1>
          <div className={styles.textExperience}>
            <ul className={styles.ulExperience}>
              {asideInfo.experience.map((item, index) => {
                return (
                  <li key={index}>
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
            {asideInfo.education.map((item, index) => {
              return (
                <li key={index}>
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
