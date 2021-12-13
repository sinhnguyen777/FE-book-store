import React, { useEffect, useState } from "react";
import { Rate, Comment, Avatar, List } from "antd";
import FormReview from "./FormReview";
import { EnterOutlined } from "@ant-design/icons";
import DetailComment from "./DetailComment";
import commentApi from "../../../../../api/commentApi";
import { useForm } from "react-hook-form";

export default function Comments(props) {
  const [DataComments, setDataComments] = useState([]);
  const [render, setrender] = useState(0);
  const form = useForm();

  const User = localStorage.getItem("user-info");
  const dataUser = JSON.parse(User);

  useEffect(() => {
    const fetchComments = async (id) => {
      const res = await commentApi.GetComment(id);
      setDataComments(res.data);
    };

    fetchComments(props.idProduct);
  }, [render]);

  const handleSubmitForm = (values) => {
    values.idUser = dataUser.data[0]._id;
    values.idProduct = props.idProduct;
    console.log(values);
    const fetchAddComments = async (values) => {
      console.log(values);
      await commentApi.AddComment(values);
      setrender((pre) => (pre = pre + 1));
      form.reset({
        content: ""
      })
    };

    fetchAddComments(values);
  };
  const data = [
    {
      author: "Michael Lord - New York Times",
      rate: 4,
      content: (
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea."
        </p>
      ),
      imageBottomComment:
        "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/review-1.png",
    },
    {
      author: "Joanne Smith - Huffington Post",
      rate: 3,
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      ),
      imageBottomComment:
        "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/review-2.png",
    },
    {
      author: "Minnie Loyd - The Guardian",
      rate: 5,
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      ),
      imageBottomComment:
        "https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/review-3.png",
    },
  ];
  return (
    <>
      <div className="comment_product_detail">
        <h2>Bình luận</h2>
        <div className="description_tab">
          <div className="content_tab_infomation">
            <div className="content_tab_infomation_avatar">
              <Avatar
                className="avatar_comment"
                src="https://znews-photo.zadn.vn/w660/Uploaded/unvjuas/2021_10_14/rose_blackpink_vogue_korea_x_ysl_may_2021_3.jpg"
                alt="Han Solo"
                size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 60,
                  xxl: 100,
                }}
              />
            </div>
            <div className="content_tab_infomation_content">
              <form
                style={{ width: "100%" }}
                action=""
                onSubmit={form.handleSubmit(handleSubmitForm)}
              >
                <div className="form-comment">
                  <input
                    className="comment-field"
                    name="content"
                    type="text"
                    placeholder="Viết bình luận..."
                    ref={form.register}
                  />
                  <button
                    type="submit"
                    className="comment-submit comment-field"
                  >
                    <span>
                      <EnterOutlined />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {DataComments.length > 0
          ? DataComments.map((item) => <DetailComment data={item} />)
          : ""}
      </div>
      <div className="comment-list">
        <h2>Đánh giá</h2>

        <List
          className="comment-list"
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <li className="item_comment">
              <Rate
                style={{ color: "#d14031" }}
                disabled
                defaultValue={item.rate}
              />
              <Comment
                className="content_item_comment"
                content={item.content}
              ></Comment>
              <div className="bottom_item_comment">
                <img src={item.imageBottomComment} alt="" />
                <span className="right_bottom_item_comment">{item.author}</span>
              </div>
            </li>
          )}
        />
        <div className="description_tab">
          <div tab="Đánh giá" key="3">
            <div className="content_tab_reviews">
              {/* <p>There are no reviews yet.</p> */}
              <span className="rely_title">
                <span>Hãy để lại đánh giá của bạn</span>
                <Rate allowClear={false} defaultValue={0} />
              </span>
              <FormReview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
