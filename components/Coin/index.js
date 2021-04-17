import styles from './Coin.module.css'
export default function Coin({CoinData}){
    return(
        <div className={styles.CoinBody}>
            <div className={styles.CoinICON}></div>
            <div className={styles.CoinSYB}>{CoinData.symbol}</div>
            <div className={styles.CoinNAME}>{CoinData.name}</div>
            <div className={styles.CoinPRICE}>{CoinData.current_price} USD</div>
            <div className={styles.Coin24DG}>4.37%</div>
            <div className={styles.Coin7DG}>2.77%</div>
            <div className={styles.CoinMC}>${CoinData.market_cap}</div>
            <div className={styles.CoinSER}>${CoinData.circulating_supply}</div>
        </div>
    )
}