import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

function Card() {
  const [repositorys, setRepositorys] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://api.github.com/users/gojibetters/repos'
      )
      const data = await response.json()

      setRepositorys(data)
    }

    fetchData()
  }, [repositorys])

  return (
    <section className={styles.sectionRepository}>
      {repositorys.map(repository => {
        return (
          <div className={styles.item} key={repository.id}>
            <div className={styles.title}>
              <a href={repository.html_url}>{repository.name}</a>
            </div>

            <div className={styles.description}>
              {repository.description ? repository.description : '.'}
            </div>

            <div className={styles.stats}>
              <div className={styles.statsNumber}>
                <img src={require('../../assets/star.svg').default} alt="" />
                <div className={styles.stars}>
                  {repository.stargazers_count}
                </div>

                <img
                  src={require('../../assets/git-branch.svg').default}
                  alt=""
                />
                <div className={styles.forks}>{repository.forks}</div>
              </div>

              {repository.language ? (
                <div className={styles.languageIcon}>
                  <img
                    src={require('../../assets/yellipse.svg').default}
                    alt=""
                  />
                  <div>{repository.language}</div>
                </div>
              ) : null}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Card
