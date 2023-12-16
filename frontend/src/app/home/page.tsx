import styles from './styles.module.scss'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Products from '../components/Products'

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Header />
      <Cards />
      <Products />
    </div>
  )
}
