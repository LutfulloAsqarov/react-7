import React, { useEffect, useState } from "react";
import "./Product.scss";
import axios from "../../api";

const Product = () => {
    const [products, setProducts] = useState(null);
    const [productsApi, setProductsApi] = useState(null);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState("all");
    const perPageCount = 4;

    useEffect(() => {
        setLoading(true);
        let api = "";
        if (categoryName === "all") {
            api = `products`;
        } else {
            api = `products/category/${categoryName}`;
        }
        axios
            .get(api, {
                params: {
                    limit: offset * perPageCount,
                },
            })
            .then((res) => setProductsApi(res.data.products))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [offset, categoryName]);

    useEffect(() => {
        axios
            .get(`products/categories`)
            .then((res) => setCategories(res.data))
            .catch((err) => console.log(err));
    }, []);

    let category = categories?.map((el) => (
        <li
            key={el}
            onClick={() => setCategoryName(el)}
            className="categories__item"
        >
            {el}
        </li>
    ));

    let productsItem = productsApi?.map((el) => (
        <div key={el.id} className="products__card">
            <div className="products__card__img">
                <img
                    // onClick={() => setProducts(el)}
                    src={el.images[0]}
                    alt="img"
                />
            </div>
            <div className="products__card__info">
                <h3 className="products__card__title">{el.title}</h3>
                <p className="products__card__desc">{el.description}</p>
                <div className="products__card__pr">
                    <p className="products__card__rating">{el.rating}</p>
                    <p className="products__card__price">${el.price}</p>
                </div>
            </div>
        </div>
    ));
    return (
        <>
            <section id="products">
                <div className="container products">
                    <ul className="categories">
                        <li
                            onClick={() => setCategoryName("all")}
                            className="categories__item"
                        >
                            all
                        </li>
                        {category}
                    </ul>
                    <div className="products__cards">{productsItem}</div>
                    <button
                        onClick={() => setOffset((p) => p + 1)}
                        className="see__more-btn"
                    >
                        See more
                    </button>
                    {loading ? (
                        <div className="loading">
                            <div className="loading__img"></div>
                            <div className="loading__title"></div>
                            <div className="loading__desc"></div>
                            <div className="loading__prise"></div>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </section>
            {products ? (
                <ProductDetails data={products} close={setProducts} />
            ) : (
                <></>
            )}
        </>
    );
};

export default Product;
