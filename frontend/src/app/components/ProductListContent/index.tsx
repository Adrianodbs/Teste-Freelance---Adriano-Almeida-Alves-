import Image from 'next/image'
import styles from './styles.module.scss'

interface ListProps {
  title: string
  img: string
}

export default function ProductListContent({ title, img }: ListProps) {
  return (
    <div className={styles.item}>
      <Image src={img} alt={title} />
      <p>{title}</p>
    </div>
  )
}
