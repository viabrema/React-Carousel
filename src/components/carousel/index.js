import React, { useState } from 'react';
import './style.css';
import Arrow from '../../assets/arrow.png';

function Carousel({ children, qtyChildren }) {

    const [current, setCurrent] = useState(0);

    function clickRight() {
        if (current + 1 < qtyChildren) {
            setCurrent(current + 1);
        } else {
            setCurrent(0);
        }
    }

    function clickLeft() {
        if (current === 0) {
            setCurrent(qtyChildren - 1);
        } else {
            setCurrent(current - 1);
        }
    }

    function listBullets() {
        const list = [];
        for (let i = 0; i < qtyChildren; i++) { list.push(<li key={i} className={i === current ? 'selected' : ''} ></li>) }
        return list;
    }

    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(${-100 * current}%)` }}>
                {children}
            </div>
            <button className="button leftButton" onClick={clickLeft}>
                <img src={Arrow} alt="click left" />
            </button>
            <button className="button rightButton" onClick={clickRight}>
                <img src={Arrow} alt="click right" />
            </button>
            <ul className="bullets">
                {listBullets()}
            </ul>
        </div>
    )
}

export default Carousel;