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
import Hamburguer from '../../assets/img/menu.svg'

import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu, toggleProduct } from '../../redux/productSlice'
import { RootState } from '@/app/redux/rootReducer'
import MenuOpenContainer from '../MenuOpen'

export default function Header() {
  const dispatch = useDispatch()
  const { productOpen, menuOpen } = useSelector(
    (state: RootState) => state.product
  )

  const handleProduct = () => {
    dispatch(toggleProduct())
  }

  const handleMenuClick = () => {
    dispatch(toggleMenu())
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
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
        <div className={styles.headerRigth}>
          <button className={styles.btn}>
            <Image src={Orcamento} alt="Orçamento" />
            <p>Orçamento</p>
          </button>

          <Image
            className={styles.menu}
            src={Hamburguer}
            alt="menu"
            onClick={handleMenuClick}
          />
        </div>
      </div>

      {!productOpen && (
        <>
          <Image className={styles.rightImage} src={RightImage} alt="Pontos" />
          <Image
            className={styles.leftImage}
            src={LeftImage}
            alt="made with science"
          />
        </>
      )}

      {productOpen && (
        <div className={styles.productList}>
          <ProductList />
        </div>
      )}

      {menuOpen && <MenuOpenContainer />}
    </header>
  )
}
