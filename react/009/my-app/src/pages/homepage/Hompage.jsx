import Header from '../../components/header/Header'
import Main from '../../components/main/Main'
import Footer from '../../components/footer/Footer'
import './homepage.css'

export default function Homepage({id, nickName}){
    console.log(id, nickName);
    return (
        <div>
            <Header nickName ={nickName} id={id}/>
            <Main />
            <Footer />
        </div>
    )
}