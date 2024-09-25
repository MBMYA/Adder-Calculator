const Row = ({ id, value, sign, disabled, onValueChange, onSignChange, onToggleDisable, onRemove }) => {
    return (
        <div className="row mb-2 align-items-center justify-content-center">
        <div className="col-1">
          <button className="btn btn-outline-secondary" onClick={() => onSignChange(id)}>
            {sign === '+' ? '+' : '-'}
          </button>
        </div>
        <div className="col-2">
          <input 
            type="number" 
            className="form-control" 
            value={value} 
            onChange={(e) => onValueChange(id, e.target.value)} 
            disabled={disabled} 
          />
        </div>
        <div className="col-2">
          <button 
            className={`btn btn-${disabled ? 'success' : 'warning'}`} 
            onClick={() => onToggleDisable(id)}>
            {disabled ? 'Enable' : 'Disable'}
          </button>
        </div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={() => onRemove(id)}>Remove</button>
        </div>
      </div>
    );
  };

  export default Row;