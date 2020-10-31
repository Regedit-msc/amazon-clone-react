import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    console.log(basket);

    return (
        <nav className="header">
            {/*Logo on theh left -> Image  */}

            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>


            {/* Search Box */}

            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/*  Links */}
            <div className="header__nav">
                {/* Link 1 */}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLine1" >Hello</span  >
                        <span className="header__optionLine2" >{user ? 'Sign Out' : 'Sign In'}</span  >
                    </div>
                </Link>

                {/* Link 2 */}

                <div className="header__nav">
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLine1" >Returns</span  >
                            <span className="header__optionLine2" >& Orders</span  >
                        </div>
                    </Link>
                </div>

                {/* Link 3 */}

                <div className="header__nav">
                    <Link to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLine1" >Your</span  >
                            <span className="header__optionLine2" >Prime</span >
                        </div>
                    </Link>
                    {/* Link 4 (Basket Icon) with number */}
                    <Link to="/checkout" className="header__link">
                        <div className="header__optionBasket">
                            {/* Shopping Basket Icon*/}

                            <ShoppingBasketIcon />
                            {/* Number Of Items In The Basket*/}
                            <span className="header__optionLine2 header__basketCount">{basket?.length}</span>
                        </div>

                    </Link>
                </div>

            </div>
        </nav>
    )
}

export default Header
