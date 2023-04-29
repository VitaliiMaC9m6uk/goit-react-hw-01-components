import PropTypes from 'prop-types';
export const TransactionHistory = ({ items }) => {
    return (
      <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
    {items.map(el => (
    <tr key={el.id}>
        <td>{el.type}</td>
        <td>{ el.amount}</td>
        <td>{ el.currency}</td>
    </tr> 
    ))}   
  </tbody>
</table>  
    )
}

TransactionHistory.prototype = {
    items: PropTypes.arrayOf(PropTypes.string)
}