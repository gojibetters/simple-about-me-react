import styles from './index.module.css'

function Header() {
  return (
    <section className={styles.sectionProjects}>
      <div className={styles.header}>
        <h1>My Projects</h1>
        <a
          href="https://github.com/gojibetters?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          See all
        </a>
      </div>
    </section>
  )
}

export default Header
