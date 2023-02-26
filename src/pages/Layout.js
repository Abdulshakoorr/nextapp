import Header from '@/components/Header'

import React from 'react'
import Main from './Main'
import Provider from './Provider'


const Layout = () => {
  return (
    <>
    <Provider>
        <Header />
        <Main />
    </Provider>
    </>
  )
}

export default Layout