import Image from 'next/image'
import styles from './styles.module.scss'

interface ProductProps {
  title: string
  price: number
  note: number
  img_url: string
}

export default function Product({ img_url, title, note, price }: ProductProps) {
  return (
    <div className={styles.product}>
      <Image src={img_url} alt={title} width={260} height={100} />
      <div className={styles.description}>
        <div className={styles.title}>
          <p>{title}</p>
          <span>{note}.0</span>
        </div>
        <p>R${price},00</p>
      </div>
    </div>
  )
}
