import React, { useState, useEffect } from "react";
import wishlistApi from "../../../../../../api/wishlistApi";
import ItemWishList from "./ItemWishList";

const WishList = () => {
  const getUser = () => {
    const userStr = localStorage.getItem("user-info");
    if (userStr) return JSON.parse(userStr);
    else return null;
  };

  const [Render, setRender] = useState(0);

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
  }, [Render]);

  const handleRender = () => {
    setRender(Render + 1);
  };
  return (
    <div className="acount-list-item">
      {wishList
        ? wishList.map((item) => (
            <ItemWishList
              idUser={idUser}
              data={item}
              handleRender={handleRender}
            />
          ))
        : ""}
    </div>
  );
};

export default WishList;
