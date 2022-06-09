import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './login.css'

export default function Login(){
    return (
        <div>
            <Header />
            <p>id나 pw가 잘못되었습니다. 로그인 다시 ㄱㄱ</p>
            <form action="">
                <input type="text" />
                <input type="pw" />

            </form>

            <Footer />
        </div>
    )
}