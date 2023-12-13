import Card from '../Card'
import styles from './styles.module.scss'
import Produto1 from '../../assets/img/produto1.svg'
import Garrafa from '../../assets/img/garrafa.svg'

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
        img={Garrafa}
        img2={Garrafa}
        description="Materiais Químicos"
        isMiddleCard
      />
      <Card title="Laboratórios" description="Ferramentas e utensílios" />
    </div>
  )
}
