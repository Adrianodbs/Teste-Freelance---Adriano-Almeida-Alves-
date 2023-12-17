import Card from '../Card'
import styles from './styles.module.scss'
import Produto1 from '../../assets/img/produto1.svg'
import Garrafas from '../../assets/img/garrafas.svg'
import Ferramentas from '../../assets/img/ferUt.svg'
import RightResp from '../../assets/img/rightResp.svg'
import RightResp2 from '../../assets/img/rightResp2.svg'

export default function Cards() {
  return (
    <div className={styles.cards}>
      <Card
        title="Produtos"
        img={Produto1}
        description="Vidrarias e Equipamentos"
        rightResp={RightResp}
      />
      <Card
        title="Químicos"
        img={Garrafas}
        description="Materiais Químicos"
        isMiddleCard
        rightResp={RightResp}
      />
      <Card
        title="Laboratórios"
        img2={Ferramentas}
        description="Ferramentas e utensílios"
        rightResp={RightResp2}
      />
    </div>
  )
}
