import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavbarTot from './components/NavbarTot';
import CartContent from './components/CartContent/CartContent';
import DataProvider from "./components/Context/DataContext"
function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <NavbarTot />
      <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/Cart' element={<CartContent />} />
          <Route path='/detail/:uniqueProduct' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
