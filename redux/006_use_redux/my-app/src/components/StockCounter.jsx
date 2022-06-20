import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {sale, soldout} from '../modules/stockCounter'

function StockCounter(){
    const {stock, message}=useSelector( state =>({
        stock:state.goodsReducer.stock,
        message:state.stockReducer.message,
    }));
    console.log(stock, message);
    const dispatch = useDispatch();
    const onSale = ()=>dispatch(sale());
    const onSoldout = ()=>dispatch(soldout());

    useEffect(()=>{
        (stock<=0)?onSoldout():onSale();
    },[stock])

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default StockCounter