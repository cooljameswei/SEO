import React from "react";
import '../assets/style/Header.scss'
function HomeHeader() {
    return (
        <>
            <div className="header-inner">
                <div>
                    <h1 className="header-logo">E T Q .</h1>
                    <div className="header-nav">
                        <div>Shop</div>
                        <div>Archive</div>
                        <div>Shoe Care</div>
                    </div>
                </div>
                <div className="header-nav-profile">
                    <div>Search</div>
                    <div>Help</div>
                    <div>My Account</div>
                    <div className="header-bag">O</div>
                </div>
            </div>
        </>
    );
}

export default HomeHeader;