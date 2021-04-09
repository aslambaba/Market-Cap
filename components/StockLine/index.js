import styles from './StockLine.module.css';

export default function StockLine() {
    return (
        <div>
            <div className={styles.stockLine}>
                <p>BTC <i className={styles.green}>+21,334.34</i></p>
                <p>ETH <i className={styles.green}>+21,334.34</i></p>
                <p>XRP <i className={styles.red}>-21,334.34</i></p>
                <p>TUP <i className={styles.green}>+21,334.34</i></p>
                <p>USDT <i className={styles.red}>-21,334.34</i></p>
                <p>BTCH <i className={styles.red}>-21,334.34</i></p>
                <p>USD <i className={styles.green}>+21,334.34</i></p>
            </div>
        </div>
    )
}