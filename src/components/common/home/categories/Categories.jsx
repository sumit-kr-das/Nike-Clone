import React from 'react';
import { Link } from 'react-router-dom';
// Stylesheet
import './categories.scss';

const Categories = () => {
    return (
        <section className='categories'>
            <div className='categories_container'>
                <ul>
                    <li>
                        <Link to="/">Icons</Link>
                    </li>
                    <li>
                        <Link to="/">Air Force 1</Link>
                    </li>
                    <li>
                        <Link to="/">Air Force 1</Link>
                    </li>
                    <li>
                        <Link to="/">Air Max 90</Link>
                    </li>
                    <li>
                        <Link to="/">Air Max 95</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Shoes</Link>
                    </li>
                    <li>
                        <Link to="/">All Shoes</Link>
                    </li>
                    <li>
                        <Link to="/">Custom Shoes</Link>
                    </li>
                    <li>
                        <Link to="/">Jordan Shoes</Link>
                    </li>
                    <li>
                        <Link to="/">Running Shoes</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Clothing</Link>
                    </li>
                    <li>
                        <Link to="/">All Clothing</Link>
                    </li>
                    <li>
                        <Link to="/">Modest Wear</Link>
                    </li>
                    <li>
                        <Link to="/">Hoodies & Pullovers</Link>
                    </li>
                    <li>
                        <Link to="/">Shirts & Tops</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/">Kids'</Link>
                    </li>
                    <li>
                        <Link to="/">Infant & Toddler Shoes</Link>
                    </li>
                    <li>
                        <Link to="/">Kids' Shoes</Link>
                    </li>
                    <li>
                        <Link to="/">Kids' Jordan Shoes</Link>
                    </li>
                    <li>
                        <Link to="/">Kids' Basketball Shoes</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Categories
