import React, { useState } from 'react'
import './styles/prodinfo.css'
import { postCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProdInfo = ({ product }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [counter, setCounter] = useState(1)

    const handleLess = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const handlePlus = () => {
        setCounter(counter + 1)
    }

    const handleBuy = () => {
        dispatch(postCartThunk('/cart', {
            quantity: counter,
            productId: product.id,
        }))
        navigate('/cart')

    }
    // console.log(product)
    return (
        <article className='prodinfo'>
            <h3 className='prodinfo__brand'>{product?.brand}</h3>
            <h2 className='prodinfo__title'>{product?.title}</h2>
            <p className='prodinfo__description'>{product?.description}</p>
            <div className='prodinfo__container'>
                <p><span>Price</span><span> ${product?.price}</span></p>
                <div>
                    <p className='prodinfo__price'>Quantity</p>
                    <button onClick={handleLess} className='.prodinfo__btnless'>-1</button>
                    <span> {counter} </span>
                    <button onClick={handlePlus} className='.prodinfo__btnplus'>+1</button>
                </div>
            </div>
            <button onClick={handleBuy} className='prodinfo__btnbuy'>Add to Cart</button>
        </article>
    )
}
export default ProdInfo