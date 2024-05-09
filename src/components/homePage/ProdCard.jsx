import React from 'react'
import './styles/prodCard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { postCartThunk } from '../../store/slices/cart.slice'

const ProdCard = ({prod}) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/product/${prod.id}`)
    }
    const handleBuy = () => {
        dispatch(postCartThunk('/cart',{
            quantity: 1,
            productId: prod.id,
        }))
    }

    // console.log(prod)

  return (
    <article className='prodcard'>
        <figure className='prodcard__img'>
            <img className='prodcard__img1' src={prod.images[0].url} alt="product image"/>
            <img className='prodcard__img2' src={prod.images[1].url} alt="product image"/>
        </figure>
        <hr/>
        <ul className='prodcard__list'>
            <li className='prodcard__item'><span>{prod.brand}</span><span>{prod.title}</span></li>
            <li className='prodcard__item'><span>Price</span><span>$ {prod.price}</span></li>
        </ul>
        <div className='prodcard__butons'>
            <button onClick={handleView}>View details</button>
            <button onClick={handleBuy}>Add to Cart</button>
        </div>
    </article>
    
  )
}

export default ProdCard


