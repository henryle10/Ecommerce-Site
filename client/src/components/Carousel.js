import React from 'react';
import MainImg from '../images/hero1.jpg';
import SecImg from '../images/hero2.jpg';
import ThirdImg from '../images/hero3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Carousel = props => {
    return (
        <div id="carouselContainer">
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="4000">
                        <img className="carouselImg" src={MainImg} alt="" />
                    </div>
                    <div className="carousel-item" data-interval="4000">
                        <img className="carouselImg" src={SecImg} alt="" />
                    </div>
                    <div className="carousel-item" data-interval="4000">
                        <img className="carouselImg" src={ThirdImg} alt="" />
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Carousel;