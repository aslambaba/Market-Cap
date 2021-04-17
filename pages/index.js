import Head from 'next/head'
import MainHeader from '../components/MainHeader'
import StockLine from '../components/StockLine'
import Footer from '../components/Footer'
import Coin from '../components/Coin'
import styles from '../styles/Home.module.css'

export default function Home({ result }) {

  console.log(result);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <StockLine />
      <div className={styles.MainBody}>
        {
          result.map((coin) => {
            return (
              <Coin CoinData={coin} />
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async (context) => {

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  const result = await res.json();

  if (!result) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      result
    }
  }
}









