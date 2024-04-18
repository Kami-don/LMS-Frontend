import React, { useState } from "react";
import { Form, Input, Button, message, Card } from 'antd';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from '../config'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const navigate = useNavigate();

    const register = async () => {
        try {
            await axios.post(`${SERVER_URL}/users/register`, { name, email, password, passwordConfirm });
            message.success("Registered successfully");
        } catch (error) {
            message.error("Failed to register");
        }
    }

    const goToLogin = () => {
        navigate("/login");
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "100vh" }}>
                <Card title="Register" style={{ width: 400 }}>
                    <Form {...layout} name="registerForm" onFinish={register}>
                        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                            <Input onChange={e => setName(e.target.value)} />
                        </Form.Item>

                        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                            <Input onChange={e => setEmail(e.target.value)} />
                        </Form.Item>

                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password onChange={e => setPassword(e.target.value)} />
                        </Form.Item>

                        <Form.Item label="Confirm Password" name="passwordConfirm" rules={[{ required: true, message: 'Please confirm your password!' }]}>
                            <Input.Password onChange={e => setPasswordConfirm(e.target.value)} />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">Register</Button>
                            <Button type="link" onClick={goToLogin}>Go to Login</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        </div>
    );
}

export default Register;