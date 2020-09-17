import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';

function AllProductsScreen(props) {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const category = props.match.params.id ? props.match.params.id : '';
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts(category));

        return () => {
            //
        };
    }, [category]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listProducts(category, searchKeyword, sortOrder));
    };
    const sortHandler = (e) => {
        setSortOrder(e.target.value);
        dispatch(listProducts(category, searchKeyword, sortOrder));
    };

    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
    }



    return (
        <>
            <aside className="sidebar">
                <h3>Shopping Categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>X</button>
                <ul className="categories">
                    <li>
                        <Link to="/category/Desktops">Desktops</Link>
                    </li>
                    <li>
                        <Link to="/category/Peripherals">Peripherals</Link>
                    </li>
                    <li>
                        <Link to="/category/Monitors">Monitors</Link>
                    </li>
                    <li>
                        <Link to="/category/Networking">Networking</Link>
                    </li>
                </ul>
            </aside>
            <div>
                <ul className="filter">
                    <button className="sidebar-button" onClick={openMenu}>
                        &#9776;
                        </button>
                    <li>
                        <form onSubmit={submitHandler}>
                            <input
                                name="searchKeyword"
                                onChange={(e) => setSearchKeyword(e.target.value)}
                            />
                            <button type="submit">Search</button>
                        </form>
                    </li>
                    <li>
                        Sort By{' '}
                        <select name="sortOrder" onChange={sortHandler}>
                            <option value="">Newest</option>
                            <option value="highest">Lowest</option>
                            <option value="lowest">Highest</option>
                        </select>
                    </li>
                    <li>
                    </li>
                </ul>
            </div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                        <ul className="products">
                            {products.map((product) => (
                                <li key={product._id}>
                                    <div className="product">
                                        <Link to={'/product/' + product._id}>
                                            <img
                                                className="product-image"
                                                src={product.image}
                                                alt="product"
                                            />
                                        </Link>
                                        <div>
                                            <div className="product-name">
                                                <Link to={'/product/' + product._id}>{product.name}</Link>
                                            </div>
                                            <div className="product-brand">{product.brand}</div>
                                            <div className="product-price">${product.price}</div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
        </>
    );
}
export default AllProductsScreen;
