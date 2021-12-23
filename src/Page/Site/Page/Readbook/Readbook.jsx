import React, { useEffect, useState } from "react";
import { BannerProduct } from "../../Components/Common/Banner/banner";
import { BackTop, Button, Select } from "antd";
import ChapterApi from "../../../../api/chapterApi";
import { useRouteMatch } from "react-router";
import { LoadingOutlined, UpOutlined } from "@ant-design/icons";
import prouctApi from "../../../../api/productApi";
import GoToTop from "../../Components/Common/GoToTop";
import { useHistory } from "react-router-dom";
import userApi from "../../../../api/userApi";
import Swal from "sweetalert2";

const { Option } = Select;

const style = {
  height: 40,
  width: 40,
  lineHeight: "40px",
  borderRadius: 4,
  backgroundColor: "#d14031",
  color: "#fff",
  textAlign: "center",
  fontSize: 14,
};

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}
const Readbook = () => {
  const match = useRouteMatch();
  const [chapter, setChapter] = useState();
  const [valueChapter, setvalueChapter] = useState();
  const [ContentChapter, setContentChapter] = useState();
  const [productValue, setproductValue] = useState();
  const [StatusBook, setStatusBook] = useState(false);
  const [ValueIdx, setValueIdx] = useState(1);
  const [LengthPD, setLengthPD] = useState(0);

  const history = useHistory();
  useEffect(() => {
    const idProduct = match.params.id;
    const fetchCataByID = async () => {
      const res = await ChapterApi.GetChapterByIdProduct(idProduct);
      if (res.data[0] != undefined) {
        setStatusBook(true);
      }
      setChapter(res.data);
      setLengthPD(res.data.length);
      if (!valueChapter) {
        setContentChapter(res.data[0]);
      } else {
        const data = res.data.filter((item) => item._id === valueChapter);
        setContentChapter(data[0]);
      }
    };

    fetchCataByID(idProduct);

    const fetchProduct = async () => {
      const res = await prouctApi.GetProductsById(idProduct);
      setproductValue(res.data);
    };
    fetchProduct();
  }, [valueChapter]);

  const handleChange = (value) => {
    setvalueChapter(value);
  };

  const handleChangePre = () => {
    const index = chapter.filter((item) => item._id == valueChapter);
    const idx = chapter.indexOf(index[0]);
    setValueIdx(ValueIdx - 1);
    setvalueChapter(chapter[idx - 1]._id);
    window.scrollTo(0, 0);
  };

  const handleChangeNext = () => {
    const fetchAccessToken = async () => {
      try {
        const adminToken = await localStorage.getItem("token");
        const data = {
          token: adminToken,
          idProduct: match.params.id,
        };
        const res = await userApi.AccessToken(data);
        const dateVip = new Date(res.data.data.vip);
        const today = new Date();
        if (dateVip > today || res.data.data.sell) {
          if (!valueChapter) {
            setvalueChapter(chapter[ValueIdx]._id);
            setValueIdx(ValueIdx + 1);
            window.scrollTo(0, 0);
          } else {
            const index = chapter.filter((item) => item._id == valueChapter);
            const idx = chapter.indexOf(index[0]);
            setValueIdx(ValueIdx + 1);
            setvalueChapter(chapter[idx + 1]._id);
            window.scrollTo(0, 0);
          }
        } else {
          Swal.fire({
            text: "Vui Lòng đăng ký gói vip mới để đọc sách",
          });
        }
      } catch (err) {
        console.log(err);
        Swal.fire({
          title: "Có vẻ bạn chưa đăng nhập",
          text: "Vui Lòng đăng nhập để đọc tiếp cuốn sách này",
          icon: "error",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Form đăng nhập",
          cancelButtonText: "ở lại trang này",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/login");
          }
        });
      }
    };

    fetchAccessToken();
  };

  console.log(ValueIdx);
  return (
    <>
      <BannerProduct>
        <h2>Đọc sách</h2>
      </BannerProduct>
      {StatusBook ? (
        <div className="layout">
          <div className="chapter-title">
            <div className="chapter-title_name">
              {productValue ? productValue.nameProduct : <LoadingOutlined />}
            </div>
            <div className="chapter-title_chapter">
              {chapter ? (
                <Select
                  showSearch
                  style={{ width: 200 }}
                  placeholder="Chọn chương"
                  optionFilterProp="children"
                  defaultValue={chapter[0]._id}
                  value={valueChapter}
                  onChange={handleChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {chapter ? (
                    chapter.map((item, index) => (
                      <>
                        <Option key={item._id} value={item._id}>
                          {item.stt}
                        </Option>
                      </>
                    ))
                  ) : (
                    <LoadingOutlined />
                  )}
                </Select>
              ) : null}
            </div>
          </div>
          <div className="chapter-content">
            {ContentChapter ? (
              <>
                <h2>{ContentChapter.nameChapter}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: ContentChapter.content }}
                />
              </>
            ) : null}
            {ValueIdx == 1 ? (
              <Button disabled>Chương trước</Button>
            ) : (
              <Button onClick={handleChangePre}>Chương trước</Button>
            )}
            {ValueIdx === LengthPD ? (
              <Button disabled>Chương Sau</Button>
            ) : (
              <Button onClick={handleChangeNext}>Chương Sau</Button>
            )}
          </div>
        </div>
      ) : (
        `Đang Cập Nhật`
      )}
      <BackTop>
        <div style={style}>
          <UpOutlined />
        </div>
      </BackTop>
      <GoToTop />
    </>
  );
};

export default Readbook;
