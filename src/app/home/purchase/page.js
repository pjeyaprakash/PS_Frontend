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
        {id:8, amount: 3000, date:"2026.12.11", type: "Dress"},
        {id:9, amount: 3000, date:"2026.12.11", type: "Dress"},
        {id:10, amount: 3000, date:"2026.12.11", type: "Dress"},
        // {id:11, amount: 3000, date:"2026.12.11", type: "Dress"},
        // {id:12, amount: 3000, date:"2026.12.11", type: "Dress"},
        // {id:13, amount: 3000, date:"2026.12.11", type: "Dress"},
        // {id:14, amount: 3000, date:"2026.12.11", type: "Dress"},
        // {id:15, amount: 3000, date:"2026.12.11", type: "Dress"},
        // {id:16, amount: 3000, date:"2026.12.11", type: "Dress"},
        // {id:17, amount: 3000, date:"2026.12.11", type: "Dress"},
        // {id:18, amount: 3000, date:"2026.12.11", type: "Dress"},
        // {id:19, amount: 3000, date:"2026.12.11", type: "Dress"},
        // {id:20, amount: 3000, date:"2026.12.11", type: "Dress"},
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



            {/* Table */}
            <div className={styles.list}>

                {/* Middle */}
                <div className={styles.middle}>
                    <div>Filter</div>
                    <div>Search</div>
                    <button>+ Add Purchase</button>
                </div>

                <div>

                <table>
                    <thead>
                        <tr>
                            <th>sn</th>
                            <th>Amout</th>
                            <th>Date</th>
                            <th>Type</th> 
                        </tr>
                    </thead>       
                    <tbody>
                        {a.length ?
                            (a.map((row, i) => 
                                <tr key = {i}>
                                    <td>{row.id}</td>
                                    <td>{row.amount}</td>
                                    <td>{row.date}</td>
                                    <td>{row.type}</td>
                                </tr>
                                )
                            )
                            :
                            <div>No Purchase</div>
                        }
                    </tbody>
                </table>
                </div>
            </div>

        </div>
    )
}