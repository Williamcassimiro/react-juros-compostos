import React from 'react';
import Installment from './Installment';
import css from './installment.module.css';

export default function Installments({ plots }) {
  return (
    <div className={css.installments}>
      {plots.map((installment) => {
        return (
          <div key={installment.id} className={css.installment}>
            <Installment
              id={installment.id}
              total={installment.total}
              amount={installment.amount}
              percentage={installment.percentage}
            />
          </div>
        );
      })}
    </div>
  );
}
