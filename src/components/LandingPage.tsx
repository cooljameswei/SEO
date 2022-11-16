import React from 'react';
import '../assets/style/Home.scss';
import homeland from "../assets/images/landing-back.jpg";
import product from "../assets/images/product-1.jpg";
function LandingPage() {
    return (
        <>
            <div className='home'>
                <div className="home-product">
                    <div className="img-wrap">
                        <img src={homeland} width="100%" height="100%" alt="landing" />
                    </div>
                    <div className="home-caption">
                        <h1>New Arrival</h1>
                        <p>The LT 01 Premium Court in Off-White is now available</p>
                        <a href=''>shop here</a>
                    </div>
                </div>
                <div className="popular-product">
                    <div className="popular-product-detail">
                        <img src={product} width="50%" height="100%" alt="product-1" />
                        <p>sdffdsfds
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LandingPage;    