import { useContext } from 'react'
import { useEffect,useState } from 'react'
// import { data } from '../../asset/data/data'
import { data } from '../../context/context'
import ProductCard from '../../components/ProductCard/ProductCard'
import './homePage.css'


function Loading(){
  return(
      <h2>로딩중입니다!!!!!!!!</h2>
  )
}

export default function HomePage() {
  const [loadData, setLoadData] = useState([])
  const [loadDing, setLoadDing] = useState(false)
  const loadData2 = useContext(data);

  useEffect(()=>{
    loadData2.then((datas)=>
      setLoadData(...datas)
    ).then(()=>{
      setLoadDing(true)

      console.log(loadData);
    }
      
    )
    

  },[loadData2])
  

  
  return (
    <main className="product">
      <ul className="product-list">

        {
          (loadDing)?<Loading/>:(
            <h1>완료</h1>
          )
        }
      {/*data.map(item => 
              <ProductCard
              key={item.id} 
              productName={item.productName}
              price={item.price}
              thumbnailImg={item.thumbnailImg}
              />
            )*/}
      </ul>
      <a className='link-btn cart-link' href='#'></a>
    </main>

  )
}
