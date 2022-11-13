import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/order.css'

const Order = () => {
    const { products, total, isLoading } = useSelector((state) => state.cartReducer)
    // console.log("selected_produtct_in_cart", products, total, isLoading)

    // console.log("products", products)
    return (

        <div className='order_cart'>
            {isLoading ? <p>Cart is Empty!</p> :
                products.map((item) => (
                    <div className='order_box'>
                        <div className='order_left'>
                            <div>
                                <h5>Title:{item.title}</h5>
                                <div className='order_images'>
                                    <img src={item.image} alt='' order_ className='order_img' />
                                </div>
                                <span className='order_description'><h5>Description:</h5>{item.description}</span>
                            </div>
                        </div>

                        <div className='order_right'>
                            <h3>Payment Details</h3>
                            <div className='order_price'>
                                <span>MRP Total</span>
                                <span> ₹ {item.price}</span>
                            </div>
                            <div className='order_price'>
                                <span>Product Discount</span>
                                <span>₹ 5.3</span>
                            </div>
                            <div className='order_price'>
                                <span>Total Amount</span>   
                                <span>{item.price} - 5.3 </span>
                            </div>
                            <div className='order_btn'>
                                <Link to="/place">
                                    <button className='place_order'>Place Order</button>
                                </Link>
                                <button className='remove_order'>Remove from cart</button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Order