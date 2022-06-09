import './header.css'
import Menu from '../menu/Menu.jsx'

export default function Header({nickName,id}){
    return (
        <div className='test'>
            header - {nickName}({id})님 방가방가
            <Menu/>
        </div>
    )
}