import Image from 'next/image'
import styles from './styles.module.scss'

interface CardProps {
  title: string
  description: string
  img?: string
  img2?: string
  isMiddleCard?: boolean
  rightResp?: string
}

export default function Card({
  title,
  description,
  img,
  img2,
  isMiddleCard,
  rightResp
}: CardProps) {
  const cardStyle = `${styles.card} ${isMiddleCard ? styles.middleCard : ''}`
  return (
    <div className={cardStyle}>
      <p>{title}</p>
      <div className={styles.description}>
        {img && <Image className={styles.img1} src={img} alt={title} />}
        {img2 && <Image className={styles.img2} src={img2} alt={title} />}
        <h2>{description}</h2>
      </div>
      {rightResp && (
        <Image src={rightResp} alt="bolas" className={styles.rightResp} />
      )}
    </div>
  )
}
