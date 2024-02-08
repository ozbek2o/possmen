
import Header from '../components/header/Header';
import Categories from '../components/categories/Categories';
import Products from '../components/products/Products';
import CartTotals from '../components/cart/CartTotals';
import { useEffect, useState } from 'react';
const HomePages = () => {
  const [categories,setcategories] =useState([]);

useEffect(()=>{
  const getCategories=()=>{
    try {
      const res = await fetch("http://localhost:5000/api/categories/get-all");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
    getCategories();
},[])

  return (
    <>
     <Header/>
    <div className='home px-6 flex md:flex-row flex-col justify-between gap-10 md:pb-0 pb-24 '>
    <div className='categories  overflow-auto max-h-[calc(100vh_-_112px)] md:pb-64  '>
    <Categories/>
    </div>
    <div className="products flex-[8] max-h-[calc(100vh_-_112px)] overflow-y-auto pb-10 ">
      <Products/>
    </div>
    <div className="cart-wrapper min-w-[300px] md:-mr-[24px] md:-mt-[24px] border">
      <CartTotals/>
    </div>
    </div>
    </>
  )
}

export default HomePages