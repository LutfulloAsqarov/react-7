import React from "react";

const HeaderSearchModel = ({ data }) => {
    let searchItems = data?.map((el) => (
        <div key={el.id}>
            <img src={el.images[0]} width={50} alt="" />
            <span>{el.title}</span>
        </div>
    ));
    return (
        <div className="header__search-result">
            {/* {!data.length ? <h3>Malumot topilmadi</h3> : <></>} */}
            {searchItems}
        </div>
    );
};

export default HeaderSearchModel;
