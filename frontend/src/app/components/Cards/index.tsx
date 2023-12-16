import Card from '../Card'
import styles from './styles.module.scss'
import Produto1 from '../../assets/img/produto1.svg'
import Garrafas from '../../assets/img/garrafas.svg'

export default function Cards() {
  return (
    <div className={styles.cards}>
      <Card
        title="Produtos"
        img={Produto1}
        description="Vidrarias e Equipamentos"
      />
      <Card
        title="Químicos"
        img={Garrafas}
        description="Materiais Químicos"
        isMiddleCard
      />
      <Card title="Laboratórios" description="Ferramentas e utensílios" />
    </div>
  )
}
