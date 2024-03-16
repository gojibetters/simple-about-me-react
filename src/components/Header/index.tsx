import styles from './index.module.css'

export function Header() {
  return (
    <section className={styles.sectionProjects}>
      <h1>My Projects</h1>
      <a
        href="https://github.com/gojibetters?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        See all
      </a>
    </section>
  )
}
