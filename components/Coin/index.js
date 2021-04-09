import styles from './Coin.module.css'
export default function Coin(){
    return(
        <div className={styles.CoinBody}>
            <div className={styles.CoinICON}></div>
            <div className={styles.CoinSYB}>BTC</div>
            <div className={styles.CoinNAME}>Bitcoin</div>
            <div className={styles.CoinPRICE}>55,000 USD</div>
            <div className={styles.Coin24DG}>4.37%</div>
            <div className={styles.Coin7DG}>2.77%</div>
            <div className={styles.CoinMC}>$127,169,230,004,12</div>
            <div className={styles.CoinSER}>$198,668,989,668</div>
        </div>
    )
}