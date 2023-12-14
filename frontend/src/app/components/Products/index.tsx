'use client'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { ProductProps } from '@/interfaces/ProductProps'
import api from '@/services/api'
import Product from '../Product'

export default function Products() {
  const [products, setProducts] = useState<ProductProps[]>([])
  useEffect(() => {
    async function fetchGetProduct() {
      try {
        const response = await api.get('/')

        setProducts(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchGetProduct()
  }, [])
  return (
    <div className={styles.products}>
      <h2>Produtos</h2>
      <div className={styles.productsList}>
        {products.map((p, i) => (
          <Product
            key={i}
            img_url={p.image_url}
            title={p.title}
            note={p.note}
            price={p.value}
          />
        ))}
      </div>
    </div>
  )
}
