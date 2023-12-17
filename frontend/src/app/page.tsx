'use client'
import HomePage from './home/page'
import { Provider } from 'react-redux'
import store from '../app/redux/store'

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  )
}
