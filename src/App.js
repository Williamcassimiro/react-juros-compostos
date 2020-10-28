import React from 'react';
import Form from './components/Form';
import Installments from './components/Installments';
import { formatNumber, formatToBrl } from './helpers/formatHelpers';

export default function App() {
  // Aplicação para capital inicial
  const [initialCapital, setInitialCapital] = React.useState(0);
  // Taxa de juros mensal
  const [monthlyInterestRate, setMonthlyInterestRate] = React.useState(0);
  // Período
  const [period, setPeriod] = React.useState(0);
  // Parcelas
  const [plots, setPlots] = React.useState([]);

  React.useEffect(() => {
    // Pegar as parcelas
    const getPlots = () => {
      // Para armazenamento de parcelas
      const newPlots = [];
      // Para validação
      const toValidated = () => {
        return (
          initialCapital > 0 &&
          initialCapital <= 100000 &&
          monthlyInterestRate >= -12 &&
          monthlyInterestRate <= 12 &&
          period > 0 &&
          period <= 36
        );
      };

      if (toValidated()) {
        for (let index = 1; index <= period; index++) {
          let total = (
            initialCapital *
            (monthlyInterestRate / 100 + 1) ** index
          ).toFixed(2);

          let percentage = ((total / initialCapital - 1) * 100).toFixed(2);

          let amount = (total - initialCapital).toFixed(2);

          const objectValue = {
            id: index,
            total: formatNumber(formatToBrl(total)),
            amount: formatToBrl(amount),
            percentage: percentage,
          };
          newPlots.push(objectValue);
        }
        setPlots(newPlots);
      }
    };

    getPlots();
  }, [initialCapital, monthlyInterestRate, period]);

  const handleCapitalChange = (capital) => {
    setInitialCapital(capital);
  };
  const handleRateChange = (rate) => {
    setMonthlyInterestRate(rate);
  };
  const handlePeriodChange = (period) => {
    setPeriod(period);
  };

  return (
    <div className="container" style={styles.containerApp}>
      <h1 style={{ textAlign: 'center' }}> Juros Compostos</h1>

      <Form
        onChangeCapital={handleCapitalChange}
        onChangeRate={handleRateChange}
        onChengePeriod={handlePeriodChange}
      />

      <Installments plots={plots} />
    </div>
  );
}

const styles = {
  containerApp: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
