import styles from './index.module.css'
import { Aside } from '../../components/Aside'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <div className={styles.container}>
      <Aside />
      <section className={styles.repository}>
        <Header />
        <Card />
      </section>
    </div>
  )
}
