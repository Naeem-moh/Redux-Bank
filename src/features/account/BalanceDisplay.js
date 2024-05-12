import { connect, useSelector } from "react-redux";
import store from "../../store";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}


function BalanceDisplay() {
  const balance = useSelector(store => store.account.balance)

  return <div className="balance">{formatCurrency(balance)}</div>;
}

export default BalanceDisplay;
// function BalanceDisplay({ balance }) {

//   return <div className="balance">{formatCurrency(balance)}</div>;
// }



// function mapStateToProps(store) {
//   console.log(store.account);
//   return {
//     balance: store.account.balance
//   };
// }

// export default connect(mapStateToProps(BalanceDisplay));
