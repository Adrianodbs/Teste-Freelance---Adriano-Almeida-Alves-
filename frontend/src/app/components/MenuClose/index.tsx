import Image from 'next/image'
import styles from './styles.module.scss'
import BottomImg from '../../assets/img/bottom.svg'

export default function MenuClose() {
  return (
    <div className={styles.closeMenu}>
      <h2>
        Qualidade e expertise em produtos <span>químicos e acessórios</span>
      </h2>
      <p>
        Estamos preparados para te entender e atender da melhor forma para
        suprir todas as suas demandas em químicos e similares.
      </p>
      <Image src={BottomImg} alt="Bolas" className={styles.img} />
    </div>
  )
}
