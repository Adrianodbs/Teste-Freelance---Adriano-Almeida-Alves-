import Image from 'next/image'
import styles from './styles.module.scss'

import Equipamentos from '../../assets/img/equipamentos.svg'
import Acessorio from '../../assets/img/acessorios.svg'
import Termometro from '../../assets/img/termometro.svg'
import Plastico from '../../assets/img/plastico.svg'
import Vidrarias from '../../assets/img/vidrarias.svg'
import Inox from '../../assets/img/inox.svg'
import Porcelanas from '../../assets/img/porcelanas.svg'
import ProductListContent from '../ProductListContent'

interface ProductListProps {
  className?: string
}

export default function ProductList() {
  return (
    <div className={styles.productList}>
      <h3>Catálogo completo de itens para você</h3>
      <div className={styles.lab}>
        <h4>Laborátório</h4>
        <div className={styles.labItems}>
          <ProductListContent img={Equipamentos} title="Equipamentos" />
          <ProductListContent img={Acessorio} title="Acessórios" />
          <ProductListContent img={Termometro} title="Termômetros" />
        </div>
      </div>

      <div className={styles.lab}>
        <h4>Utensílios</h4>
        <div className={styles.labItems}>
          <ProductListContent img={Inox} title="Inox e Ferragens" />
          <ProductListContent img={Plastico} title="Plásticos" />
          <ProductListContent img={Vidrarias} title="Vidrarias" />
          <ProductListContent img={Porcelanas} title="Porcelanas" />
        </div>
      </div>
    </div>
  )
}
