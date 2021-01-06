import Head from 'next/head'
import Link from 'next/link'
import '../styles/index.scss'
import React, { Component } from 'react'
import Navbar from '../components/navbar';
import MainHeader from '../components/home/main-header';
import CategoriesList from '../components/home/categories-list';
import AboutUs from '../components/about-us/about-us';

export default class extends Component{
  render(){
  return (
    <div >
      <Head>
        <title>Pycha Micha - Restauracja</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <MainHeader/>
      <div className="container">
      <CategoriesList/>
      </div>
      <div className="container-big">
      <AboutUs/>

      </div>
      
    </div>
  )
}}

