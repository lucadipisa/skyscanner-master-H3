import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import AirportSearchForm from "./components/forms/SearchAirportForm";
import FlightSearchForm from "./components/forms/SearchFlightsForm";
import DetailsFlight from "./components/FlightDetails";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
              <Route index element={<FlightSearchForm />} />
              <Route path="/airports" element={<AirportSearchForm />} />
              <Route path="/details" element={<DetailsFlight />} />
          </Route>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
