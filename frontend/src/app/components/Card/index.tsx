import Image from 'next/image'
import styles from './styles.module.scss'

interface CardProps {
  title: string
  description: string
  img?: string
  img2?: string
  isMiddleCard?: boolean
}

export default function Card({
  title,
  description,
  img,
  img2,
  isMiddleCard
}: CardProps) {
  const cardStyle = `${styles.card} ${isMiddleCard ? styles.middleCard : ''}`
  return (
    <div className={cardStyle}>
      <p>{title}</p>
      <div className={styles.description}>
        <div className={styles.images}>
          {img && <Image className={styles.img1} src={img} alt={title} />}
          {img2 && <Image className={styles.img2} src={img2} alt={title} />}
        </div>

        <h2>{description}</h2>
      </div>
    </div>
  )
}
