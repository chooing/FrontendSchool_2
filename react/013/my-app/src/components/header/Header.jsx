import styled from './header.module.css'
import Menu from '../menu/Menu'

function Header(){
    const handleClickManu=(e)=>{
        
    }
    return (
        <header className={styled.wrap}>
            <h1>LOGO</h1>
            <nav className={styled.nav_wrap}>
                <ul className={styled.nav}>
                    <li id='doc'>문서</li>
                    <li id='homework'>자습서</li>
                    <li id='blog'>블로그</li>
                    <li id='comunity'>커뮤니티</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header