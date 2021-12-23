import { UploadOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Image,
  Input,
  Layout,
  Row,
  Typography,
  Upload,
} from "antd";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import userApi from "../../../../../../api/userApi";
const { Content } = Layout;
const { Title, Text } = Typography;

const Infor = () => {
  let history = useHistory();
  const [ValueAvata, setValueAvata] = useState();
  const [ValueSdt, setValueSdt] = useState();
  const [render, setrender] = useState(0);
  const [DataUser, setDataUser] = useState();
  const [DateUpdate, setDateUpdate] = useState();
  const [Datevip, setDatevip] = useState();
  useEffect(() => {
    const getUser = () => {
      const userStr = localStorage.getItem("user-info");
      console.log(userStr);
      if (userStr) return JSON.parse(userStr);
      else return null;
    };

    const user = getUser();
    setDataUser(user);
    const dateCreate = new Date(user.data[0].updatedAt);
    const dateUpdate =
      dateCreate.getDate() +
      "-" +
      (dateCreate.getMonth() + 1) +
      "-" +
      dateCreate.getFullYear();

    setDateUpdate(dateUpdate);
    const DateVip = new Date(user.data[0].vip);
    const NewDateVip =
      DateVip.getDate() +
      "-" +
      (DateVip.getMonth() + 1) +
      "-" +
      DateVip.getFullYear();
    setDatevip(NewDateVip);
  }, [render]);

  const avatarUpload = (file) => {
    // const userId = this.props.userdetail.data.data.id;
    const data = new FormData();
    data.append("avatar", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(
        `https://beonlinelibrary.herokuapp.com/users/upload-avt`,
        data,
        config
      )
      .then((res) => setValueAvata(res.data.path))
      .catch((err) => console.log(err));
  };

  const handleSubmitFrom = async () => {
    const data = {
      id: DataUser.data[0]._id,
      phone: ValueSdt,
      avatar: ValueAvata,
    };
    const res = await userApi.Update(data);
    console.log(res);
    if (res.status === 200) {
      Swal.fire("Sửa thông tin của bạn", `Sửa thành công`, "success");
      const res = await userApi.GetUserById(DataUser.data[0]._id);
      setrender(render + 1);
      localStorage.setItem("user-info", JSON.stringify({ data: [res.data] }));
      history.push("/account");
    }
  };

  console.log(DataUser);

  return (
    <div className="container_client">
      <Layout className="site-layout">
        {DataUser ? (
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Row>
              <Col>
                <Avatar
                  size={130}
                  src={
                    <Image
                      src={`https://beonlinelibrary.herokuapp.com/${DataUser.data[0].avatar}`}
                    />
                  }
                  className="AvatarUser"
                />

                <div style={{ marginTop: "10px" }}>
                  <Upload
                    /*  action="https://beonlinelibrary.herokuapp.com/users/upload-avt" */ action={
                      avatarUpload
                    }
                    name="avatar"
                  >
                    <Button icon={<UploadOutlined />}  className="ButtonUploadAvatar">Sửa ảnh đại diện</Button>
                  </Upload>
                </div>
              </Col>
              <Col className="TitleUser">
                <span className="mock-block">
                  <Title className="code-box-demo" level={2}>
                    {DataUser.data[0].fullName}
                  </Title>
                  <Title type="secondary" className="code-box-demo" level={4}>
                    Ngày cập nhật : {DateUpdate}
                  </Title>
                </span>
              </Col>
            </Row>
            <Row className="Thongtin">
              <div className="Item">
                <p>
                  <Text strong>Số điện thoại</Text>
                </p>
                {DataUser.data[0].phone ? (
                  <Input
                    onChange={(e) => setValueSdt(e.target.value)}
                    placeholder=""
                    value={DataUser.data[0].phone}
                  />
                ) : (
                  <Input
                    onChange={(e) => setValueSdt(e.target.value)}
                    placeholder="Chưa có số điện thoại"
                  />
                )}
              </div>
              <div className="Item">
                <p>
                  <Text strong>Email</Text>
                </p>
                <Input
                  placeholder=""
                  value={
                    DataUser.data[0].email
                      ? DataUser.data[0].email
                      : "Chưa có địa chỉ email "
                  }
                />
              </div>
              <div className="Item">
                <p>
                  <Text strong>Gói dịch vụ</Text>
                </p>
                <p>{Datevip}</p>
              </div>
            </Row>
            <Row style={{ marginLeft: "20px" }}>
              <button onClick={handleSubmitFrom} className="btn ButtonMain">
                Lưu
              </button>
            </Row>
          </Content>
        ) : null}
      </Layout>
    </div>
  );
};

export default Infor;