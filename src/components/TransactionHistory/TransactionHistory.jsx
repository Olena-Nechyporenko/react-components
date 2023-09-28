import css from "./TransactionHistory.module.css"
import clsx from "clsx"
export const TransactionHistory = ({items}) => {
return (
   <table className={css.transactionhistory}>
  <thead className={css.head}>
    <tr className={css.headrow}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

 {items.map(({id, type, amount, currency},index) => 
   <tbody key={id} className={css.body}>
    <tr className={clsx(
        css.row,
        index % 2 === 0 ? css.even : css.odd)}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>)}
  </table>
)}