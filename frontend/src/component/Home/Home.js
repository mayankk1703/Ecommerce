import React, {useEffect, Fragment} from 'react';
import {CgMouse} from "react-icons/all";
import "./Home.css";
import Product from "./Product.js";
import MetaData from "../layout/MetaData";
import {getProduct} from '../../actions/productAction';
import {useSelector, useDispatch} from "react-redux";
import Loader from '../layout/Loader/Loader';


const Home = () => {
    const dispatch = useDispatch();
    const {loading, error, products, productsCount} = useSelector((state) => state.products);
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch])

    return (
        <Fragment> {
            loading ? (<Loader/>) : (<Fragment>
                <MetaData title="homepage is working"/>
                <div className='banner'>
                    <p>
                        Welcome to Ecommerce</p>
                    <h1>Find amazing products below</h1>

                    <a href="#container">
                        <button>
                            Scroll
                            <CgMouse/>
                        </button>
                    </a>
                </div>

                <h2 className="homeHeading">Featured Products</h2>
                <div className='container' id='container'>
                    {
                    products && products.map(product => (
                        <Product product={product}/>
                    ))
                } </div>
            </Fragment>)
        } </Fragment>
    );

}

export default Home;
