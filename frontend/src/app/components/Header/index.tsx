'use client'
import styles from './styles.module.scss'
import Logo from '../../assets/img/logo.svg'
import RightImage from '../../assets/img/right.svg'
import LeftImage from '../../assets/img/selo.svg'
import Orcamento from '../../assets/img/orcamento.svg'
import Image from 'next/image'
import ProductList from '../ProductList'
import ArrowUp from '../../assets/img/arrowUp.svg'
import ArrowDown from '../../assets/img/arrowDown.svg'

import { useDispatch, useSelector } from 'react-redux'
import { ProductState } from '../../redux/types'
import { toggleProduct } from '../../redux/productSlice'

export default function Header() {
  const dispatch = useDispatch()
  const productOpen = useSelector(
    (state: { product: ProductState }) => state.product.productOpen
  )

  const handleProduct = () => {
    dispatch(toggleProduct())
  }
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Image className={styles.logo} src={Logo} alt="Logo" />
        <ul>
          <li>Início</li>
          <li
            className={productOpen ? styles.selected : ''}
            onClick={handleProduct}
          >
            Produtos{' '}
            <Image
              src={productOpen ? ArrowUp : ArrowDown}
              alt={productOpen ? 'aberto' : 'fechado'}
            />
          </li>
          <li>Laudos</li>
          <li>Sobre nós</li>
          <li>Certificações</li>
          <li>Contato</li>
        </ul>
      </div>
      <button className={styles.btn}>
        <Image src={Orcamento} alt="Orçamento" />
        Orçamento
      </button>
      <Image className={styles.rightImage} src={RightImage} alt="Pontos" />
      <Image
        className={styles.leftImage}
        src={LeftImage}
        alt="made with science"
      />

      <ProductList />
    </header>
  )
}
