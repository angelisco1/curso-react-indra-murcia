import React, { useState } from 'react';

const ContadorHook = (props) => {

  // const stateCuenta = useState(0);
  const [cuenta, setCuenta] = useState(0)

  return (
    <div>
      <button type="button" onClick={() => setCuenta(cuenta - 1)}>-</button>
      <span>Cuenta: {cuenta}</span>
      <button type="button" onClick={() => setCuenta(cuenta + 1)}>+</button>
    </div>
  )
}

export default ContadorHook;