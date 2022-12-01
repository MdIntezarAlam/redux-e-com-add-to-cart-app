
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../redux/actions/product.actions'
import { addToCarts } from '../redux/actions/cart.actions'
import '../styles/product_details.css'


const ProductDetails = () => {
  const { productId } = useParams()
  // console.log('product details_id: ', productId)

  const { selectedProduct, isLoading } = useSelector((state) => state.productReducer)
  const dispatch = useDispatch()
  // console.log("selected_product_details", productId, selectedProduct)



  useEffect(() => {
    dispatch(getProductById(productId))
    dispatch(addToCarts(productId))
  }, [dispatch]);

  //ADD TO CART
  const addToCart = () => {
    if (selectedProduct) {
      dispatch(addToCarts(productId))
    }
  }

  if (isLoading) return <div className='details_container'>Loading...</div>

  return (
    <div className='pro_container'>
              {!selectedProduct ? <p>Product details couldn't find!</p> : <div className='pro_box'>
        <div className='details_Card'>
          <img src={selectedProduct.image} className="details_img" />
          <div className='details_right'>
            <div className='details_right_box'>
              <h1 className='details_title'>Model: {selectedProduct.title}</h1>
              <div className='details_price'>Price: ₹ {selectedProduct.price}</div>
              <div className='details_category'>Category: {selectedProduct.category}</div>
              <div className='details_description'>Description: <br /> {selectedProduct.description}</div>
              <Link to="/order">
                <button className='details_btn' onClick={addToCart}>+ Add to cart</button>
              </Link>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default ProductDetails














