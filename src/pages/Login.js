import React, { useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Button, message, Row, Col } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SERVER_URL } from '../config'
import lmsImg from "../assets/lms1.png";
import Cookies from "js-cookie";
import { loginUser } from "../actions/actions";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        axios.post(`${SERVER_URL}/users/login`, { email, password }).then(async res => {
            await Cookies.set("token", res.data.data.token)
            await dispatch(loginUser(res.data.data.user))
            await message.success("welcome");
            await navigate('/dashboard')
        }).catch((res, err) => {
            message.error(res.response.data.message)
        })

    }

    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: "grey" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "100vh" }}>
                    <div style={{ width: "800px", height: "50vh", backgroundColor: "white" }}>
                        <Row style={{ height: "10%" }}><h1 style={{ width: "100%", textAlign: "center" }}>Welcome</h1></Row>
                        <Row style={{ height: "90%" }}>
                            <Col span={12} style={{ textAlign: "center", alignContent: "center" }}>
                                <img
                                    src={lmsImg}
                                    style={{ padding: "10px", width: "170px", height: "170px" }}
                                    alt=""
                                />
                            </Col>
                            <Col span={11} style={{ alignContent: "center", height: "100%" }}>
                                <Form
                                    name="normal_login"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={login}
                                >
                                    <Form.Item
                                        name="email"
                                        rules={[{ required: true, message: 'Please input your email!' }]}
                                    >
                                        <Input size="large" onChange={e => setEmail(e.target.value)} prefix={<UserOutlined />} placeholder="Email" />
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your Password!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            onChange={e => setPassword(e.target.value)}
                                            prefix={<LockOutlined />}
                                            type="password"
                                            placeholder="Password"
                                            size="large"
                                        />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" size="large" htmlType="submit" style={{ width: "100%" }}>
                                            Sign in
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
        </div>
    );
}

export default Login