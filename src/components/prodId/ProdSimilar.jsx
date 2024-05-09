import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProdCard from '../homePage/ProdCard';
import './styles/prodSimilar.css'

const ProdSimilar = ({ product }) => {

    const [similarProducts, getSimilarProducts] = useFetch();

    useEffect(() => {
        if (product) {
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${product.categoryId}`;
            getSimilarProducts(url)
        }
    }, [product])

    const similarFilter = (prod) => {
        return prod.id !== product.id
    }

console.log(similarProducts)
    return (
        <article className='prodsimilar'>
            <h2 className='prodsimilar__title'>Discover similar items</h2>
            <div className='homepage__container'>
                {
                    similarProducts?.filter(similarFilter).map(prod => (
                            <ProdCard
                            key={prod.id}
                            prod={prod}
                        />
                    ))
                }
            </div>
        </article>
    )
}

export default ProdSimilar