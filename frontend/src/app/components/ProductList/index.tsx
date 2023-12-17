import Image from 'next/image'
import styles from './styles.module.scss'

import Equipamentos from '../../assets/img/equipamentos.svg'
import Acessorio from '../../assets/img/acessorios.svg'
import Termometro from '../../assets/img/termometro.svg'
import Plastico from '../../assets/img/plastico.svg'
import Vidrarias from '../../assets/img/vidrarias.svg'
import Inox from '../../assets/img/inox.svg'
import Porcelanas from '../../assets/img/porcelanas.svg'

export default function ProductList() {
  return (
    <div className={styles.productList}>
      <h3>Catálogo completo de itens para você</h3>
      <div className={styles.lab}>
        <h4>Laborátório</h4>
        <div className={styles.labItems}>
          <div className={styles.item}>
            <Image src={Equipamentos} alt="Equipamentos" />
            <p>Equipamentos</p>
          </div>
          <div className={styles.item}>
            <Image src={Acessorio} alt="Equipamentos" />
            <p>Acessórios</p>
          </div>
          <div className={styles.item}>
            <Image src={Termometro} alt="Equipamentos" />
            <p>Termômetros</p>
          </div>
        </div>
      </div>

      <div className={styles.lab}>
        <h4>Utensílios</h4>
        <div className={styles.labItems}>
          <div className={styles.item}>
            <Image src={Inox} alt="Equipamentos" />
            <p>Inox e Ferragens</p>
          </div>
          <div className={styles.item}>
            <Image src={Plastico} alt="Equipamentos" />
            <p>Plásticos</p>
          </div>
          <div className={styles.item}>
            <Image src={Vidrarias} alt="Equipamentos" />
            <p>Vidrarias</p>
          </div>
          <div className={styles.item}>
            <Image src={Porcelanas} alt="Equipamentos" />
            <p>Porcelanas</p>
          </div>
        </div>
      </div>
    </div>
  )
}
