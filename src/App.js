import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import RoutesTable from './components/RoutesTable';  // Импорт как экспорт по умолчанию
import MapContainer from './components/MapContainer';  // Импорт как экспорт по умолчанию
import 'leaflet/dist/leaflet.css';
function App() {
  return (
    <Provider store={store}>
    <div style={{ display: 'flex', justifyContent: 'space-between', height: '100vh' }}>
        <RoutesTable />
        <MapContainer />
    </div>
    </Provider>
  );
}

export default App;
