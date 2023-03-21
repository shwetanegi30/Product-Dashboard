import React from "react";
import "./customerTrans.css";
import Customer from "../customerTrans/customerData";

const CustomerTrans = () => {
  const Button = ({ type }) => {
    return <button className={`customerTransButton ${type}`}>{type}</button>;
  };

  return (
    <div className="customerTrans">
      <h3 className="customerTransTitle">Latest transactions</h3>
      <table className="customerTransTable">
        <thead>
          <tr className="customerTransTr">
            <th className="customerTransTh">Customer</th>
            <th className="customerTransTh">Date</th>
            <th className="customerTransTh">Amount</th>
            <th className="customerTransTh">Status</th>
          </tr>
        </thead>

        <tbody>
          {Customer.map((customers) => (
            <tr key={customers.id} className="customerTransTr">
              <td className="customerTransUser">
                <img
                  src={customers.img}
                  alt="customers"
                  className="customerTransImage"
                />
                <span className="customerTransName"> {customers.name} </span>
              </td>
              <td className="customerTransDate">{customers.date}</td>
              <td className="customerTransAmount">{customers.amount}</td>
              <td className="customerTransStatus">
                <Button type={customers.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTrans;
