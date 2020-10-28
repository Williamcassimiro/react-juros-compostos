import React from 'react';
import css from './installment.module.css';

export default function Installment({ id, total, amount, percentage }) {
  return (
    <div className={css.card}>
      <div className={css.idPlot}>
        <div>{id}</div>
      </div>

      <div className={css.values}>
        <div>
          {amount >= 0 ? (
            <div className={css.positiveValue}> R$ {total}</div>
          ) : (
            <div className={css.negativeValue}> R$ {total}</div>
          )}
        </div>
        <div>
          {amount >= 0 ? (
            <div className={css.positiveValue}> R$ {amount}</div>
          ) : (
            <div className={css.negativeValue}> R$ {amount}</div>
          )}
        </div>
        <div>
          {percentage >= 0 ? (
            <div className={css.positivePercentage}>{percentage}%</div>
          ) : (
            <div className={css.negativePercentage}>{percentage}%</div>
          )}
        </div>
      </div>
    </div>
  );
}
