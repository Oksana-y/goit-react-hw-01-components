import PropTypes from 'prop-types';
import css from './transaction-history.module.scss';

function TransactionHistory({ items }) {
  return (
    <table className={css.history}>
      <thead className={css.thead}>
        <tr>
          <th className={css.info}>Type</th>
          <th className={css.info}>Amount</th>
          <th className={css.info}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.data}>{item.type}</td>
            <td className={css.data}>{item.amount}</td>
            <td className={css.data}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
