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
    <aside className={styles.sectionAside}>
      <div className={styles.basicInfo}>
        <figure>
          <img src={user.avatar} alt="User avatar" className={styles.avatar} />
        </figure>

        <span className={styles.name}>{user.name}</span>
        <span className={styles.bio}>{user.bio}</span>
      </div>

      <div className={styles.socialMedia}>
        <div className={styles.location}>
          <figure>
            <img src={mapPin} alt="" />
          </figure>

          <a
            href="https://www.google.com/search?q=brazil"
            target="_blank"
            rel="noreferrer"
          >
            {user.location}
          </a>
        </div>

        <div className={styles.company}>
          <figure>
            <img src={briefCase} alt="" />
          </figure>

          <a href="https://lab2dev.com/" target="_blank" rel="noreferrer">
            {user.company}
          </a>
        </div>

        <div className={styles.github}>
          <figure>
            <img src={github} alt="" />
          </figure>

          <a
            href="https://github.com/gojibetters"
            target="_blank"
            rel="noreferrer"
          >
            {user.github}
          </a>
        </div>

        <div className={styles.linkedin}>
          <figure>
            <img src={linkedin} alt="" />
          </figure>

          <a
            href="https://www.linkedin.com/in/brunopatez/"
            target="_blank"
            rel="noreferrer"
          >
            {user.linkedIn}
          </a>
        </div>

        <div className={styles.email}>
          <figure>
            <img src={mail} alt="" />
          </figure>

          <a href="mailto:brunoapatez@gmail.com">Contact me</a>
        </div>
      </div>

      <div className={styles.technologies}>
        <h1>Technologies</h1>

        <ul className={styles.ulTechnologies}>
          {asideInfo.tech.map((item, index) => (
            <li key={index}>
              <b>{item}</b>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.experience}>
        <h1>Experience</h1>

        <ul className={styles.ulExperience}>
          {asideInfo.experience.map((item, index) => (
            <li key={index}>
              <h3>{item.company}</h3>
              <h4>{item.date}</h4>
              <span>{item.office}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.education}>
        <h1>Education</h1>

        <ul className={styles.ulEducation}>
          {asideInfo.education.map((item, index) => (
            <li key={index}>
              <h3>{item.school}</h3>
              <h4>{item.date}</h4>
              <span>{item.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
