import PropTypes from 'prop-types';
import { Table,Thead,Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
<Table className="transaction-history">
  <Thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </Thead>
  <tbody>
    {items.map(el => (
    <Tr key={el.id}>
        <td>{el.type}</td>
        <td>{ el.amount}</td>
        <td>{ el.currency}</td>
    </Tr> 
    ))}   
  </tbody>
</Table>  
    )
}

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(PropTypes.string)
}