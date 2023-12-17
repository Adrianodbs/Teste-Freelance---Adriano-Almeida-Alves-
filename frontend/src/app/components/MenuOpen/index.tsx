import ProductList from '../ProductList'
import styles from './styles.module.scss'

export default function MenuOpenContainer() {
  return (
    <div className={styles.menuOpen}>
      <ul>
        <h3>Navegue por nosso site</h3>
        <li>Início</li>
        <li>Produtos</li>
        <li>Laudos</li>
        <li>Sobre nós</li>
        <li>Certificações</li>
        <li>Contato</li>
      </ul>
      <ProductList />
    </div>
  )
}
