import styles from './styles.module.scss'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Products from '../components/Products'

import { useSelector } from 'react-redux'
import { ProductState } from '../redux/types'

export default function HomePage() {
  const productOpen = useSelector(
    (state: { product: ProductState }) => state.product.productOpen
  )
  return (
    <div className={styles.home}>
      <Header />
      {!productOpen && <Cards />}
      <Products />
    </div>
  )
}
