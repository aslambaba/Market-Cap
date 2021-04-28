import styles from './Coin.module.css'
export default function Coin({ CoinData }) {
    return (
        <div className={styles.CoinBody}>
            <div className={styles.CoinICON}><img src={CoinData.logo_url}></img></div>
            <div className={styles.CoinSYB}>{CoinData.symbol.toUpperCase()}</div>
            <div className={styles.CoinNAME}>{CoinData.name}</div>
            <div className={styles.CoinPRICE}>{parseFloat(CoinData.price).toFixed(2)} USD</div>

            {parseFloat(CoinData['1d'].price_change).toFixed(2) < 0
                ?
                <div className={styles.Coin1DR}>{parseFloat(CoinData['1d'].price_change).toFixed(2)}%</div>
                :
                <div className={styles.Coin1DG}>{parseFloat(CoinData['1d'].price_change).toFixed(2)}%</div>
            }

            {parseFloat(CoinData['7d'].price_change).toFixed(2) < 0
                ?
                <div className={styles.Coin1DR}>{parseFloat(CoinData['7d'].price_change).toFixed(2)}%</div>
                :
                <div className={styles.Coin1DG}>{parseFloat(CoinData['7d'].price_change).toFixed(2)}%</div>
            }

            <div className={styles.CoinMC}>${CoinData.market_cap}</div>
            <div className={styles.CoinSER}>${CoinData.circulating_supply}</div>
        </div>
    )
}