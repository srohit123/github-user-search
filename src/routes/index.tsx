import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Header from '../layout/Header'
import Search from '../pages/search'

import {
  SEARCH_PATH,
  SEARCH_USER_PATH,
  SEARCH_ORGANIZATION_PATH
} from './routesPath'

const AppRoutes = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='*' element={<Search />} />
            <Route path={SEARCH_PATH} element={<Search />} />
            <Route path={SEARCH_USER_PATH} element={<Search />} />
            <Route path={SEARCH_ORGANIZATION_PATH} element={< Search />} /> 
            <Route path='/' element={<Navigate to={SEARCH_PATH} />}/> 
          </Route>  
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes

