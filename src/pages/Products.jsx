import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/actions/product.actions'
import '../styles/product.css'
import { addToCarts } from '../redux/actions/cart.actions'



const Products = () => {
    const dispatch = useDispatch()
    const { products, isLoading } = useSelector((state) => state.productReducer)
    // console.log("productReducer", products)


    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch]);

    return (
        <div className='product_container'>
            <div className='product_Card'>
                {isLoading ? <p>Loading...</p> :
                    products.map((data) => {
                        const { id, category, title, image, price } = data
                        return (
                            <div className='all_card' key={id}>
                                <div className='img'><img src={image} alt="product" className='product_img' /></div>
                                <div className='contnent'>
                                    <div className='headers'>Title: {title}</div>
                                    <div className='headers'>Price: ₹ {price}</div>
                                    <div className='category'>Categor : {category}</div>
                                    <Link to={`/products/${id}`}>
                                        <button className='cart_btn'>View Details</button>
                                    </Link>
                                    <button className='cart_btn2' onClick={() => dispatch(addToCarts(id))}>Add To Cart</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Products