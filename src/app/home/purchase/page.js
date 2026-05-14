'use client';
import styles from './purchaseStyle.module.css'


export default function Purchase() {

    return (
        <div className={styles.main}>

            {/* Dashboard */}
            <div className={styles.dashboard}>
                <div>Purchase Amount</div>
                <div>N/A</div>
                <div>N/A</div>
            </div>

            {/* Middle */}
            <div className={styles.middle}>
                <div>Filter</div>
                <div>Search</div>
            </div>

            {/* Table */}
            <div className={styles.table}>
                <table>
                    <thead>
                        <td>kkk</td>
                    </thead>
                </table>
            </div>

        </div>
    )
}