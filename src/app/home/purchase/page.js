'use client';
import styles from './purchaseStyle.module.css'


export default function Purchase() {

    const a = [
        {id:1, amount: 3000, date:"2026.12.11", type: "Dress"},
        {id:2, amount: 3000, date:"2026.12.11", type: "Dress"},
        {id:3, amount: 3000, date:"2026.12.11", type: "Dress"},
        {id:4, amount: 3000, date:"2026.12.11", type: "Dress"},
        {id:5, amount: 3000, date:"2026.12.11", type: "Dress"},
        {id:6, amount: 3000, date:"2026.12.11", type: "Dress"},
        {id:7, amount: 3000, date:"2026.12.11", type: "Dress"},
    ]

    return (
        <div className={styles.main}>

            {/* Dashboard */}
            <div className={styles.dashboard}>
                <button>+ Create</button>
                <div>Purchase Amount</div>
                <div>Total</div>
                <div>Amount</div>
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
                        <tr>
                            <th>sn</th>
                            <th>Amout</th>
                            <th>Date</th>
                            <th>Type</th> 
                        </tr>
                    </thead>
                </table>
                <tbody>
                    {a.length ?
                        (a.map((row, i) => 
                            <tr key = {i}>
                                <td>row.id</td>
                                <td>row.amount</td>
                                <td>row.date</td>
                                <td>row.type</td>
                            </tr>
                            )
                        )
                        :
                        <div>No Purchase</div>
                    }

                </tbody>
            </div>

        </div>
    )
}