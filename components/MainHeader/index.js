import styles from './MainHeader.module.css';

export default function MainHeader() {
    return (
        <div>
            <div className={styles.MainHeader}>
                <div className={styles.logo}>
                    <h3>Market Cap</h3>
                </div>
                <div className={styles.search}>
                    <input placeholder='Search' />
                </div>
                <div className={styles.accounts}>
                    <button>
                        M
                </button>
                </div>
            </div>
        </div>
    )
}