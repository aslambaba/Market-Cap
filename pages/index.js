import Head from 'next/head'
import Link from 'next/link'
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
        <title>MArket Cap</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader />
      <StockLine />
      <div className={styles.MainBody}>
        {
          result.map((coin) => {
            return (
              <Link href={`/Coin/${coin.id}`}>
                <a>
                  <Coin CoinData={coin} />
                </a>
              </Link>
            )
          })
        }
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async (context) => {

  const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.NEXT_PUBLIC_APIKEY}&interval=1d,7d&convert=USD&per-page=100&page=1`);
  const result = await res.json();
  // console.log(result);
  
  //You Can Use This Variable if you not want to use API
  // const result = [
  //   {
  //     symbol: "BTC",
  //     name: "Bitcoin",
  //     current_price: 100,
  //     market_cap: 12222,
  //     circulating_supply: 1292783,
  //   },
  //   {
  //     symbol: "BTC",
  //     name: "Bitcoin",
  //     current_price: 100,
  //     market_cap: 12222,
  //     circulating_supply: 1292783,
  //   }
  // ]


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









