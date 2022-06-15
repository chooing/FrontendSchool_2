import { useRef } from 'react'
import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import './productCard.css'

export default function ProductCard({productName, price, thumbnailImg}){

    const likeBtn = useRef(false);
    const handleOnClick=(e)=>{
        console.log(e);
        const list = e.currentTarget.classList
        console.log(list);
        e.currentTarget.classList.toggle('on')
    }   

    return (
        <li className="product-item">
            <div className="product-img">
                <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            </div>
                <ProductName productName={productName}/>
            <button ref={likeBtn} onClick={handleOnClick} className="like-btn"></button>
            <div className="product-price">
                <ProductPrice price={price}/>
            </div>
        </li>
    )
}
