import Image from 'next/image'
import styles from './styles.module.scss'

import Equipamentos from '../../assets/img/equipamentos.svg'

export default function ProductList() {
  return (
    <div className={styles.productList}>
      <h3>Catálogo completo de itens para você</h3>
      <div className={styles.lab}>
        <h4>Laborátório </h4>
        <div className={styles.labItems}>
          <div className={styles.item}>
            <Image src={Equipamentos} alt="Equipamentos" />
            <p>Equipamentos</p>
          </div>
          <div className={styles.item}>
            <Image src={Equipamentos} alt="Equipamentos" />
            <p>Equipamentos</p>
          </div>
          <div className={styles.item}>
            <Image src={Equipamentos} alt="Equipamentos" />
            <p>Equipamentos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
