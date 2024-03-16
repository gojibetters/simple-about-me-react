import { useCard } from './useCard'
import styles from './index.module.css'
import { star, gitBranch, yellipse } from '../../assets'

export function Card() {

  const { repositorys } = useCard()

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
                <img src={star} alt="" />
                <div className={styles.stars}>
                  {repository.stargazers_count}
                </div>

                <img
                  src={gitBranch}
                  alt=""
                />
                <div className={styles.forks}>{repository.forks}</div>
              </div>

              {repository.language ? (
                <div className={styles.languageIcon}>
                  <img
                    src={yellipse}
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
