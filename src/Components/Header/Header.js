import cartIcon from '../../assets/shopping-cart.svg';
import './Header.css';

const Header = props => {
    return (
        <header className='main-header'>
            <h1>P K M K // photography</h1>
            <img src={cartIcon} alt='shopping cart'/>
        </header>
    )
}

export default Header;