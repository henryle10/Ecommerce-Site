import React from 'react';
import { Link } from 'react-router-dom';



const ProductRow = props => {
    return (
        <div>
            <h2>Republic of Gamers</h2>
            <div className="row">
                <div className="col-xl displayCol">
                    <Link to="/category/Desktops"><img src="//img-us1.asus.com/A/deploy/AWC000700/1571187195_201910AP1600000002.jpg" alt="Gaming Desktops" /></Link>
                </div>
                <div className="col-xl displayCol">
                    <Link to="/category/Monitors"><img src="//img-us1.asus.com/A/deploy/AWC000700/1571187201_201910AP1600000002.jpg" alt="Gaming Monitors" /></Link>
                </div>
                <div className="col-xl displayCol">
                    <Link to="/category/Networking"><img src="//img-us1.asus.com/A/deploy/AWC000700/1584659149_201910AP1600000002.jpg" alt="Networking" /></Link>
                </div>
                <div className="col-xl displayCol">
                    <Link to="/category/Peripherals"><img src="https://img-us1.asus.com/A/deploy/AWC000700/1572308803_201910AP1600000002.jpg" alt="Peripherals" /></Link>
                </div>
            </div>
        </div>
    )
}

export default ProductRow;