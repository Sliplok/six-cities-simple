import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFound from '../../pages/not-found-page/not-found-page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

type AppProps = {
  placesCount: number;
}

function App({placesCount} : AppProps) : JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage placesCount={placesCount}/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/offer' element={<OfferPage/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
