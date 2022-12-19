import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

export const ProductContext = createContext([])
const Main = () => {
    const products = useLoaderData()
    const data= products.data
    return (
        <ProductContext.Provider value={data}>
            <Nav></Nav>
            <Outlet></Outlet>
        </ProductContext.Provider>
    );
};

export default Main;