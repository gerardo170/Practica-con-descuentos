import React from 'react';
import MaterialTable from 'material-table';
import './App.css'


function App() {
  const columnas =[
    {
      title:'Usuario',
      field:'usuario'
    },
    {
      title:'ID',
      field:'id'
    },
    {
      title:'Moneda',
      field:'moneda'
    },
    {
      title:'Total',
      field:'Total',
      type:"numeric"
    }
  ];

  const data= [
    {usuario: 'Jose', id: 'e-0131', moneda: 'dolar', total: '121'},
    {usuario: 'Jose', id: 'e-0131', moneda: 'dolar', total: '121'},
    {usuario: 'Jose', id: 'e-0131', moneda: 'dolar', total: '121'},
    {usuario: 'Jose', id: 'e-0131', moneda: 'dolar', total: '121'},
  ];


  return (
    <div>
    <MaterialTable 
    columnas={columnas}
    data={data}
    />
    </div>
  )
  
}

export default App;