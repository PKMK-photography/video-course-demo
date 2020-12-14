import {connect} from 'react-redux';
import cartIcon from '../../assets/shopping-cart.svg';
import './Header.css';

const Header = props => {
    console.log(props)
    return (
        <header className='main-header'>
            <h1>P K M K // photography</h1>
            <section id='user-cart'>
                <img src={cartIcon} alt='shopping cart'/>
                {props.cart.length
                    ? <p>({props.cart.length})</p>
                    : null}
            </section>
        </header>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Header);