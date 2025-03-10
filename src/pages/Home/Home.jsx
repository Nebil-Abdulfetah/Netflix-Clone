import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/banner/Banner'
import RowList from '../../components/rows/RowList/RowList'
function Home() {
  return (
    <>
        <Header />
        <Banner />
        <RowList />
        <Footer />
    </>
  )
}

export default Home