import MainHeader from '../../components/MainHeader'
import StockLine from '../../components/StockLine'
import Footer from '../../components/Footer'
import styles from './styles.module.css';

export default function Name({ SingleCryptoResult }) {
    console.log(SingleCryptoResult);
    return (
        <div>
            <MainHeader />
            <StockLine />

            <div className={styles.SingleCoinContainer}>
                <div className={styles.CoinName}>
                    <img src={SingleCryptoResult.image.thumb}></img>
                    <h2>{SingleCryptoResult.name}</h2>
                </div>
                <div className={styles.CoinPrice}>
                    <h2>{SingleCryptoResult.tickers[99].converted_last.usd} USD</h2>
                </div>
                <div className={styles.CoinInfo}>
                    <h3>Coin Information</h3>
                    <div className={styles.CoinChart}>

                    </div>
                </div>
                <div className={styles.CoinNews}>
                    <div className={styles.News}>
                        <h5>Bitcoin Hit 54K Within 3 Days</h5>
                        <p>According to bloomberg Bitcon fall more then 10</p>
                    </div>
                    <div className={styles.News}>
                        <h5>Bitcoin Hit 54K Within 3 Days</h5>
                        <p>According to bloomberg Bitcon fall more then 10</p>
                    </div>
                    <div className={styles.News}>
                        <h5>Bitcoin Hit 54K Within 3 Days</h5>
                        <p>According to bloomberg Bitcon fall more then 10</p>
                    </div>
                    <div className={styles.News}>
                        <h5>Bitcoin Hit 54K Within 3 Days</h5>
                        <p>According to bloomberg Bitcon fall more then 10</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {

    const { name } = context.query;
    const SingleCrypto = await fetch(`https://api.coingecko.com/api/v3/coins/${name}`);
    const SingleCryptoResult = await SingleCrypto.json()

    return {
        props: {
            SingleCryptoResult
        }
    }
}