import React from 'react';
import css from './form.module.css';

export default function Form({
  onChangeCapital,
  onChangeRate,
  onChengePeriod,
}) {
  const handleCapitalChange = ({ target }) => {
    const valueCapital = target.value;

    onChangeCapital(valueCapital);
  };
  const handleRateChange = ({ target }) => {
    const valueRate = target.value;

    onChangeRate(valueRate);
  };
  const handlePeriodChange = ({ target }) => {
    const valuePeriod = target.value;

    onChengePeriod(valuePeriod);
  };
  return (
    <div className={css.flexRow}>
      <form className={css.formValue}>
        <div className={`${css.inputValue} input-field`}>
          <input
            type="number"
            step={100}
            min={0}
            max={100000}
            onChange={handleCapitalChange}
          />
          <label
            className="active"
            htmlFor="inputValue"
            style={{ fontSize: 'large' }}
          >
            Capital Inicial:
          </label>
        </div>
        <div className={`${css.inputValue} input-field`}>
          <input
            type="number"
            step={0.1}
            min={-12}
            max={12}
            onChange={handleRateChange}
          />
          <label
            className="active"
            htmlFor="inputValue"
            style={{ fontSize: 'large' }}
          >
            Taxa de juros mensal:
          </label>
        </div>
        <div className={`${css.inputValue} input-field`}>
          <input
            type="number"
            step={1}
            min={1}
            max={36}
            onChange={handlePeriodChange}
          />
          <label
            className="active"
            htmlFor="inputValue"
            style={{ fontSize: 'large' }}
          >
            Período (meses):
          </label>
        </div>
      </form>
    </div>
  );
}
