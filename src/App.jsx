import React, { useState } from "react";
import AppRoutes from "./components/routes/Routes";
import DataContext from "./context/DataContext";
const App = () => {
  const [basketData,setBasketData]=useState([])
  return (
    <div>
      <DataContext.Provider value={{basketData,setBasketData}}>
        <AppRoutes />
      </DataContext.Provider>
    </div>
  );
};

export default App;
