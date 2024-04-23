
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Produto from './pages/Produto';
import Error from './pages/Error';

import Header from './components/Header';

const routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/sobre" element={<Sobre/>} />
          <Route exact path="/contato" element={<Contato/>} />
          <Route exact path="/produto/:id" element={<Produto/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>

    </BrowserRouter>
  )
}

export default routes;