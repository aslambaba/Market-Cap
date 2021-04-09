import Head from 'next/head'
import MainHeader from '../components/MainHeader'
import StockLine from '../components/StockLine'
import Coin from '../components/Coin'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <StockLine />
      <div className={styles.MainBody}>
        <Coin />
        <Coin />
        <Coin />
        <Coin />
        <Coin />
        <Coin />
      </div>
    </div>
  )
}
