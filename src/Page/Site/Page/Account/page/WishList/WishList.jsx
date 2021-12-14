import React, { useState, useEffect } from "react";
import wishlistApi from "../../../../../../api/wishlistApi";
import ItemWishList from "./ItemWishList";

const WishList = () => {
  const getUser = () => {
    const userStr = localStorage.getItem("user-info");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };

  const user = getUser();
  const [wishList, setwishList] = useState([]);
  const idUser = user.data[0]._id;
  useEffect(() => {
    const fetchWishList = async () => {
      const data = {
        idUser: idUser,
      };
      const res = await wishlistApi.GetWishlist(data);
      setwishList(res.data);
      
    };
    fetchWishList();
  }, []);
  return (
    <div className="acount-list-item">
        {wishList
          ? wishList.map((item) => <ItemWishList idUser={idUser} data={item} />)
          : ""}
    </div>
  );
};

export default WishList;
