import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/images/logo.svg";
import "./Header.scss";
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import HeaderSearchModel from "../headerSearchModel/HeaderSearchModel";
import axios from "../../api";

const Header = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!value.trim()) return;
        axios
            .get(`products/search?q=${value.trim()}`)
            .then((res) => setData(res.data.products))
            .catch((err) => console.log(err));
    }, [value]);
    return (
        <header id="header">
            <div className="container header">
                <ul className={`header__list ${show ? "header__show" : ""}`}>
                    <li className="header__list__item">
                        <a href="#">Home</a>
                    </li>
                    <li className="header__list__item">
                        <a href="#">Shop All</a>
                    </li>
                    <li className="header__list__item">
                        <a href="#">Blog</a>
                    </li>
                    <li className="header__list__item">
                        <a href="#">About Us</a>
                    </li>
                </ul>
                <div className="header__logo">
                    <a href="#">
                        <img src={headerLogo} alt="Logo" />
                    </a>
                </div>
                <form className="header__search">
                    <div className="header__search-input">
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                            placeholder="Search Product"
                        />
                        <IoSearch />
                    </div>
                    {value.trim() ? <HeaderSearchModel data={data} /> : <></>}

                    <FaBars
                        onClick={() => setShow(true)}
                        className="header__bar"
                    />
                </form>
                {show ? (
                    <div
                        onClick={() => setShow(false)}
                        className="overlay"
                    ></div>
                ) : (
                    <></>
                )}
            </div>
        </header>
    );
};

export default Header;
