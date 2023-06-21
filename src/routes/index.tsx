import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from '../layout/Header/Header';
import Search from '../pages/search'

import { SEARCH_PATH } from './routesPath';

const AppRoutes = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='*' element={<Search />} />
            <Route path={SEARCH_PATH} element={<Search />} />
            <Route path='/' element={<Navigate to={SEARCH_PATH} />}/> 
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes;
