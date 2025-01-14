import React, { createContext,useContext,useReducer,useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Buttoncomponent from './components/btncomponent/Buttoncomponent';
import Cardcomponent from './components/cardcomponent/Cardcomponent';
import AppRouts from './AppRouts';
import TableComponent from './components/tablecomponent/TableComponent';
import Header from './components/Shared/Header';
import axios from "axios";

import { tableContextProvider } from "./context/tableContext";
// import getTableDataReducer from './contextApi/GetTableData/getTableDataReducer';
// import { initialState } from './contextApi/GetTableData/getTableInitialState';
// export const getTableContext=createContext()
// export const useTableContext=useContext(getTableContext)
function App() {
// const [tabledatastate,dispatch]=useReducer(getTableDataReducer,initialState)
  return (
    // <getTableContext.Provider value={{tabledatastate,dispatch}}>
    <tableContextProvider>
      <div className="">
      <AppRouts />

        <Cardcomponent cardheading="card heading" cardbody="card body" cardtitle="card title"></Cardcomponent>
      </div>
      </tableContextProvider>
    // </getTableContext.Provider>
  );
}

export default App;
