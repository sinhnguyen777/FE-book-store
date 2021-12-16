import { LoadingOutlined } from "@ant-design/icons";
import { Avatar, Comment } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import commentApi from "../../../../../api/commentApi";
import userApi from "../../../../../api/userApi";

function DetailComment(props) {
  const { data } = props;
  console.log(data);
  const [DataUser, setDataUser] = useState();
  const [demo, setdemo] = useState('')
  let history = useHistory();
  useEffect(() => {
    const fetchDataUser = async (id) => {
      const res = await userApi.GetUserById(id);
      setDataUser(res.data);
    };

    fetchDataUser(data.idUser);
  }, []);
  console.log(DataUser);
  const handleRemove = (id)=>{
    try{
        const fetchRemoveCmt = async (data) => {
            try {
                const res = await commentApi.DelComment(data);
                if (res.status === 200) {
                    Swal.fire('Xóa!!', 'Xóa Thành Công!', 'success').then((result) => {
                        if (result.isConfirmed) {
                            setdemo(pre=>pre+1);
                            history.push({ pathname: '/' })
                        }
                    })
                }
            } catch (err) {
                console.log(err);
                
            }
        }

        fetchRemoveCmt(id);

    }
    catch(err){
        console.log(err);
    }
}
  return (
    <>
      {DataUser ? (
        <Comment
          className="comment_product_detail_content"
          // author={<a className="author_comment">BELGIUM</a>}
          avatar={
            <Avatar
              className="avatar_comment"
              src={`https://beonlinelibrary.herokuapp.com/${DataUser.avatar}`}
              alt="Han Solo"
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
            />
          }
          content={
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>
                <h3 className="author_comment_title">{DataUser.fullName}</h3>
                <p className="description_comment">{data.content}</p>
                
              </div>
              {/* <div onClick={() => handleRemove(data._id)} className="description_delete">Xóa</div> */}
            </div>
          }
        />
      ) : (
        <LoadingOutlined />
      )}
    </>
  );
}

export default DetailComment;
