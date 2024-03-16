import { useCard } from './useCard'
import styles from './index.module.css'
import { star, gitBranch, yellipse } from '../../assets'

export function Card() {

  const { repositorys } = useCard()

  return (
    <section className={styles.sectionRepository}>
      {repositorys.map(repository => (
        <div className={styles.item} key={repository.id}>
          <div className={styles.title}>
            <a href={repository.html_url}>{repository.name}</a>
          </div>

          <div className={styles.description} title={repository.description}>
            {repository.description || 'No description.'}
          </div>

          <div className={styles.stats}>
            <div className={styles.statsNumber}>
              <figure>
                <img src={star} alt="" />
              </figure>
              <div className={styles.stars}>
                {repository.stargazers_count}
              </div>

              <figure>
                <img
                  src={gitBranch}
                  alt=""
                />
              </figure>
              <div className={styles.forks}>{repository.forks}</div>
            </div>

            {repository.language ? (
              <div className={styles.languageIcon}>
                <figure>
                  <img
                    src={yellipse}
                    alt=""
                  />
                </figure>

                <div>{repository.language}</div>
              </div>
            ) : null}
          </div>
        </div>
      )
      )}
    </section>
  )
}
