import Link from 'next/link'
import styles from './MainHeader.module.css';

export default function MainHeader() {
    return (
        <div>
            <div className={styles.MainHeader}>
                <div className={styles.logo}>
                    <Link href='/'>
                        <a>
                            <h3>Market Cap</h3>
                        </a>
                    </Link>
                </div>
                <div className={styles.search}>
                    <input placeholder='Search' />
                </div>
            </div>
        </div>
    )
}