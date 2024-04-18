import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
	UserOutlined,
	SettingOutlined,
	EditOutlined,
	EllipsisOutlined,
} from "@ant-design/icons";
import { Card, List, Col, Row, Avatar, Progress } from "antd";
import Cookies from "js-cookie";
import { SERVER_URL } from '../../config'

const Dashboard = () => {
	const [total, setTotal] = useState(0);
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	const goContents = async (course_id) => {
		navigate(`/mycourses/${course_id}`, { state: { course: courses.filter(course => { return course.canvasCourseId == course_id }) } });
	};

	useEffect(() => {
		if (Cookies.get('token'))
			axios.get(`${SERVER_URL}/canvas/getcourses`).then(data => {
				setTotal(data.data.length);
				setCourses(data.data)
				setLoading(false)
			})
		else
			navigate("/login")

	}, [])


	return (
		<>
			<div style={{ padding: "20px" }}>
				<Row style={{ marginTop: "10px" }}>
					<Col span={6} style={{ paddingRight: "5px" }}>
						<Card
							title={
								<>
									<Avatar
										shape="square"
										size={86}
										icon={
											<img
												width="50"
												height="50"
												src="https://img.icons8.com/ios/50/knowledge-sharing.png"
												alt="knowledge-sharing"
												style={{
													filter: "invert(100%)",
												}}
											/>
										}
										style={{
											position: "absolute",
											marginTop: "-15px",
											padding: "15px",
											backgroundColor: "#ffa726",
											boxShadow:
												"0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4)",
										}}
									/>
									<Row style={{ height: "90px", alignItems: "center" }}>
										<b
											style={{
												width: "100%",
												textAlign: "right",
												fontSize: "24px",
												marginLeft: "100px",
											}}>
											My Courses
										</b>
									</Row>
								</>
							}
							bordered={false}>
							<Row>
								<Col span={12}>
									Total: <b>{total}</b>
								</Col>
								<Col span={12}>
									Active: <b>{total}</b>
								</Col>
							</Row>
						</Card>
					</Col>

					<Col span={6} style={{ paddingLeft: "5px" }}>
						<Card
							title={
								<>
									<Avatar
										shape="square"
										size={86}
										icon={
											<img
												width="50"
												height="50"
												src="https://img.icons8.com/ios/50/000000/test-results.png"
												alt="test-results"
												style={{
													filter: "invert(100%)",
												}}
											/>
										}
										style={{
											position: "absolute",
											marginTop: "-15px",
											padding: "15px",
											backgroundColor: "#ef5350",
											boxShadow:
												"0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4)",
										}}
									/>
									<Row style={{ height: "90px", alignItems: "center" }}>
										<b
											style={{
												width: "100%",
												textAlign: "right",
												fontSize: "24px",
												marginLeft: "100px",
											}}>
											Assessments
										</b>
									</Row>
								</>
							}
							bordered={false}>
							<Row>
								<Col span={12}>
									Ungraded: <b>0</b>
								</Col>
								<Col span={12}>
									Graded: <b>0</b>
								</Col>
							</Row>
						</Card>
					</Col>

					<Col span={6} style={{ paddingLeft: "10px" }}>
						<Card
							title={
								<>
									<Avatar
										shape="square"
										size={86}
										icon={
											<img
												width="50"
												height="50"
												src="https://img.icons8.com/ios/50/000000/attendance-mark.png"
												alt="attendance-mark"
												style={{
													filter: "invert(100%)",
												}}
											/>
										}
										style={{
											position: "absolute",
											marginTop: "-15px",
											padding: "15px",
											backgroundColor: "#66bb6a",
											boxShadow:
												"0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4)",
										}}
									/>
									<Row style={{ height: "90px", alignItems: "center" }}>
										<b
											style={{
												width: "100%",
												textAlign: "right",
												fontSize: "24px",
												marginLeft: "100px",
											}}>
											Attendance
										</b>
									</Row>
								</>
							}
							bordered={false}>
							<Row>
								<Col span={12}>
									Hours: <b>0</b>
								</Col>
								<Col span={12}>
									Days: <b>0</b>
								</Col>
							</Row>
						</Card>
					</Col>
					<Col span={6} style={{ paddingLeft: "10px" }}>
						<Card
							title={
								<>
									<Avatar
										shape="square"
										size={86}
										icon={
											<img
												width="50"
												height="50"
												src="https://img.icons8.com/ios/50/user-manual.png"
												alt="user-manual"
												style={{
													filter: "invert(100%)",
												}}
											/>
										}
										style={{
											position: "absolute",
											marginTop: "-15px",
											padding: "15px",
											background: "linear-gradient(60deg, #26c6da, #00acc1)",
											boxShadow:
												"0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4)",
										}}
									/>
									<Row style={{ height: "90px", alignItems: "center" }}>
										<b
											style={{
												width: "100%",
												textAlign: "right",
												fontSize: "24px",
												marginLeft: "100px",
											}}>
											Gradebook
										</b>
									</Row>
								</>
							}
							bordered={false}>
							<Row>
								<Col span={24}>
									Current Grade: <b>0</b>
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			</div>
			<Row
				style={{
					marginTop: "10px",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<Col span={23}>
					<List
						loading={loading}
						pagination={{
							total: total,
							pageSize: 9
						}}
						grid={{
							gutter: 16,
							xs: 1,
							sm: 2,
							md: 4,
							lg: 4,
							xl: 6,
							xxl: 3,
						}}
						dataSource={courses}
						renderItem={(item) => (
							<List.Item>
								<Card
									actions={[
										<SettingOutlined key="Outline" />,
										<EditOutlined key="edit" />,
										<EllipsisOutlined key="ellipsis" />,
									]}
									title={
										<Row>
											<Col
												span={3}
												style={{
													display: "flex",
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Avatar size={36} icon={<UserOutlined />} />
											</Col>
											<Col span={21}>
												<Row>
													<span style={{ color: "#266083" }}>
														FLORENCE SAMUELS
													</span>
												</Row>
												<Row>
													<span style={{ color: "grey" }}>teacher</span>
												</Row>
											</Col>
										</Row>
									}>
									{
										<div style={{ height: "300px" }}>
											{/* <Row justify={"center"}>
												<img src="english.png" alt="" />
											</Row> */}
											<Row>
												<h2
													style={{
														textAlign: "center",
														width: "100%",
														color: "#166083",
														cursor: "pointer"
													}}
													onClick={() => { goContents(item.canvasCourseId) }}
												>
													{item.name}
												</h2></Row>
											<span style={{ display: "flex", flexDirection: "column", alignItems: "center" }}><Progress type="circle" percent={item.assignments.filter(assignment => assignment.published).length / item.assignments.length * 100} format={(per) => `${per}%`} size={160} /></span>

										</div>
									}
								</Card>
							</List.Item>
						)}
					/>
				</Col>
				<Col span={1}></Col>
			</Row>
		</>
	)
		;
};

export default Dashboard;
