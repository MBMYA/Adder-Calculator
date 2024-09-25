import React, { useState } from 'react';
import Row from '../components/Row';
import "../css/styles.css"

const Calculator = () => {
  const [rows, setRows] = useState([
    { id: 1, value: 0, sign: '+', disabled: false }
  ]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, value: 0, sign: '+', disabled: false }]);
  };

  const removeRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const toggleDisableRow = (id) => {
    setRows(rows.map(row => row.id === id ? { ...row, disabled: !row.disabled } : row));
  };

  const updateRowValue = (id, newValue) => {
    setRows(rows.map(row => row.id === id ? { ...row, value: Number(newValue) } : row));
  };

  const changeRowSign = (id) => {
    setRows(rows.map(row => row.id === id ? { ...row, sign: row.sign === '+' ? '-' : '+' } : row));
  };

  const calculateTotal = () => {
    return rows.reduce((acc, row) => {
      if (!row.disabled) {
        return row.sign === '+' ? acc + row.value : acc - row.value;
      }
      return acc;
    }, 0);
  };

  return (
    <body>
    <div className="container mt-5">
      <div class="text-center mb-5">
                    <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Calculator</span></h1>
        </div>
      <div className="card shadow">
        <div className="card-body">
          <h1 className="text-gradient fw-bolder text-center mb-4">Adder</h1>
          
          {rows.map((row) => (
            <Row 
              key={row.id} 
              id={row.id} 
              value={row.value} 
              sign={row.sign} 
              disabled={row.disabled}
              onValueChange={updateRowValue}
              onSignChange={changeRowSign}
              onToggleDisable={toggleDisableRow}
              onRemove={removeRow}
            />
          ))}

          <div className="d-grid justify-content-center mt-3">
            <button className="btn btn-primary" onClick={addRow}>Add Row</button>
          </div>

          <h3 className="text-gradient fw-bolder text-center mt-4">Total: {calculateTotal()}</h3>
        </div>
      </div>
    </div>
    </body>
  );
};

export default Calculator;