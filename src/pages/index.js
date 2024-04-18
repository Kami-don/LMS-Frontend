import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	UserOutlined,
	WindowsOutlined,
	ReadOutlined,
	FileDoneOutlined,
	LogoutOutlined,
	DownOutlined,
	LockOutlined,
} from "@ant-design/icons";
import {
	Layout,
	Menu,
	Button,
	Row,
	Col,
	Avatar,
	Badge,
	Dropdown,
} from "antd";

import { Outlet } from "react-router-dom";
import styled from "styled-components";
import lmsImg from "../assets/lms1.png";
import navBackImg from "../assets/nav_back.jpg";
import userAvatar from "../assets/avatar/user.jpg";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
const { Header, Sider } = Layout;

const Pages = () => {
	const navigate = useNavigate();
	const [collapsed, setCollapsed] = useState(false);
	const [menu, setMenu] = useState([])
	const user = useSelector(state => state.user)
	const StyledMenu = styled(Menu)`
		.ant-menu-item {
			color: white;
			border-radius: 4px !important;
			text-size: 18px;
			alignitems: center;
			height: 45px;
		}

		.ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content {
			margin-left: 17px;
		}

		.ant-menu-submenu-title {
			color: white !important;
			height: 45px !important; /* Set height for submenu titles */
			padding-left: 17px !important; /* Remove padding from submenu titles */
			display: flex;
			border-radius: 4px !important;
			align-items: center;
		}

		.ant-menu-item-selected,
		.ant-menu-item:active {
			background-color: #00acc1 !important;
			color: white;
		}

		.ant-menu-item:hover {
			background-color: rgba(255, 255, 255, 0.2) !important;
			color: white !important;
		}

		.ant-menu-item:focus {
			background-color: rgba(255, 255, 255, 0.2) !important;
			color: white !important;
		}

		.ant-menu-submenu:hover,
		.ant-menu-submenu:focus {
			background-color: rgba(255, 255, 255, 0.2) !important;
			color: white !important;
			border-radius: 4px;
			margin: 4px;
		}

		.ant-menu-submenu-active,
		.ant-menu-submenu-selected {
			background-color: #00acc1 !important;
			color: white;
			border-radius: 4px;
			margin: 4px;
		}

		.ant-menu-submenu-popup .ant-menu-item {
			height: 45px !important; /* Set height for submenu items */
			padding-left: 0 !important; /* Remove left padding from submenu items */
			padding-right: 0 !important; /* Remove right padding from submenu items */
			display: flex;
			align-items: center;
		}
	`;

	useEffect(() => {
		if (!Cookies.get("token"))
			navigate("/login")
		console.log(user.role)
	}, [])

	const [activeKey, setActiveKey] = useState("4"); // Default active key

	// Function to handle menu item click, set active key and navigate
	const handleMenuClick = (item) => {
		setActiveKey(item.key);
		navigate(item.path);
	};

	// const getMenus = (role) => {
	// 	switch (role) {
	// 		case "admin":
	// 			return menuAdminItems
	// 			break;
	// 		case "student":
	// 			return menuStudentItems
	// 			break;
	// 		case "parent":
	// 			return menuParentItems
	// 			break;
	// 		case "proctor":
	// 			return menuProctorItems
	// 			break;

	// 		default:
	// 			break;
	// 	}
	// }
	const menuStudentItems = [
		{
			key: "1",
			label: "User",
			icon: <Avatar src={userAvatar} />,
			children: [
				{
					key: "2",
					label: "My profile",
					icon: <UserOutlined style={{ fontSize: "18px" }} />,
					path: "/myprofile",
				},
				{
					key: "3",
					label: "Log Out",
					icon: <LogoutOutlined style={{ fontSize: "18px" }} />,
					path: "/signin",
				},
			],
		},
		{
			key: "4",
			label: <span style={{ marginLeft: "7px" }}>Dashboard</span>,
			icon: <WindowsOutlined style={{ fontSize: "20px" }} />,
			path: "/dashboard",
		},
		{
			key: "5",
			label: <span style={{ marginLeft: "7px" }}>My Courses</span>,
			icon: <ReadOutlined style={{ fontSize: "20px" }} />,
			path: "/mycourses/all",
		},
		{
			key: "6",
			label: <span style={{ marginLeft: "7px" }}>My Attendance</span>,
			icon: <UserOutlined style={{ fontSize: "20px" }} />,
			path: "/myattendance",
		},
		{
			key: "7",
			label: <span style={{ marginLeft: "7px" }}>My Gradebook</span>,
			icon: <FileDoneOutlined style={{ fontSize: "20px" }} />,
			path: "/mygradebook",
		},
	];
	const menuAdminItems = [];
	const items = [
		{
			label: (
				<>
					<UserOutlined />
					<a href="https://www.antgroup.com">My Profile</a>
				</>
			),
			key: "0",
		},
		{
			label: (
				<>
					<LockOutlined /> <a href="https://www.aliyun.com">Change Password</a>
				</>
			),
			key: "1",
		},
		{
			type: "divider",
		},
		{
			label: (
				<>
					<LogoutOutlined /> <a href="https://www.aliyun.com">Log Out</a>
				</>
			),
			key: "3",
		},
	];
	return (
		<Layout>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				style={{
					backgroundImage: `url(${navBackImg})`,
					minHeight: "100vh",
					backgroundSize: "cover", // Cover the entire Sider area
					backgroundPosition: "center", // Center the background image,
					position: "sticky",
				}}
				width={"13%"}>
				<div />
				<Row justify="center">
					<img
						src={lmsImg}
						style={{ padding: "10px", width: "70px", height: "70px" }}
						alt=""
					/>
					<h1 style={{ color: "white" }}>LMS</h1>
				</Row>
				<StyledMenu
					mode="inline"
					style={{
						backgroundColor: "transparent",
						color: "white",
						padding: "10px",
						fontSize: "15px",
					}}
					selectedKeys={[activeKey]}
					items={menuItems.map((item) => ({
						key: item.key,
						icon: item.icon,
						label: item.label,
						children: item.children,
						style: {
							backgroundColor: activeKey === item.key ? "#123123" : undefined,
							color: activeKey === item.key ? "white" : undefined,
						},
						onClick: () => handleMenuClick(item),
					}))}
				/>
			</Sider>
			<Layout>
				<Header
					theme="dark"
					style={{
						padding: 0,
						paddingLeft: "20px",
						paddingTop: "5px",
						background: "#f5f5f5",
					}}>
					<Button
						shape="circle"
						icon={
							collapsed ? (
								<MenuUnfoldOutlined fontSize="12px" />
							) : (
								<MenuFoldOutlined fontSize="12px" />
							)
						}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							width: 32,
							height: 32,
						}}
					/>
					<div
						style={{
							float: "right",
							width: "17%",
						}}>
						<Row justify="end">
							<Col
								span={12}
								style={{
									color: "white",
									alignItems: "end",
									display: "flex",
									flexDirection: "column",
								}}>
								<Col
									span={24}
									style={{
										color: "white",
										alignItems: "center",
										display: "flex",
										flexDirection: "row",
										marginTop: "6px",
									}}>
									<Dropdown
										menu={{
											items,
										}}
										trigger={["click"]}>
										<a onClick={(e) => e.preventDefault()}>
											<Badge count={1}>
												<div
													style={{
														alignItems: "center",
														display: "flex",
														flexDirection: "row",
														height: "100%",
													}}>
													<svg
														_ngcontent-mpi-c22=""
														aria-hidden="true"
														width="20"
														height="20"
														className="svg-inline--fa fa-bell fa-w-14"
														data-prefix="far"
														data-icon="bell"
														role="img"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 448 512"
														data-fa-i2svg="">
														<path
															fill="#999"
															d="M425.403 330.939c-16.989-16.785-34.546-34.143-34.546-116.083 0-83.026-60.958-152.074-140.467-164.762A31.843 31.843 0 0 0 256 32c0-17.673-14.327-32-32-32s-32 14.327-32 32a31.848 31.848 0 0 0 5.609 18.095C118.101 62.783 57.143 131.831 57.143 214.857c0 81.933-17.551 99.292-34.543 116.078C-25.496 378.441 9.726 448 66.919 448H160c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64h93.08c57.19 0 92.415-69.583 44.323-117.061zM224 472c-13.234 0-24-10.766-24-24h48c0 13.234-10.766 24-24 24zm157.092-72H66.9c-16.762 0-25.135-20.39-13.334-32.191 28.585-28.585 51.577-55.724 51.577-152.952C105.143 149.319 158.462 96 224 96s118.857 53.319 118.857 118.857c0 97.65 23.221 124.574 51.568 152.952C406.278 379.661 397.783 400 381.092 400z"></path>
													</svg>
												</div>
											</Badge>
										</a>
									</Dropdown>
								</Col>
							</Col>
							<Col
								span={12}
								style={{ textAlign: "center", marginBottom: "10px" }}>
								<Dropdown
									menu={{
										items,
									}}
									trigger={["click"]}>
									<a onClick={(e) => e.preventDefault()}>
										<div
											style={{
												alignItems: "center",
												display: "flex",
												flexDirection: "row",
												marginLeft: "30px",
												height: "100%",
											}}>
											<Avatar size={32} icon={<UserOutlined />} />
											<span style={{ marginLeft: "5px", marginRight: "5px" }}>
												User
											</span>
											<DownOutlined />
										</div>
									</a>
								</Dropdown>
							</Col>
						</Row>
					</div>
				</Header>
				<Outlet />
			</Layout>
		</Layout>
	);
};
export default Pages;
