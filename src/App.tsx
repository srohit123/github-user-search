import React from 'react'

import AppRoutes from './routes'
import { SnackBarProvider } from './contexts/useSnackbar'

import './styles/common.scss'

const App = () => {
  return (
    <div className='app'>
      <SnackBarProvider>
        <AppRoutes/>
      </SnackBarProvider>
    </div>
  )
}

export default App
