import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import CommonCharts from "./components/CommonCharts";
import ChartTemplates from "./components/chart-templates/ChartTemplates";
import MainNavigation from "./components/navigation/MainNavigation";

function App() {
  return (
    <>
   
      <BrowserRouter>
         <MainNavigation />
        <Routes>
          <Route path="/" element={<CommonCharts />} />
          <Route path="/chart-templates" element={<ChartTemplates />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
