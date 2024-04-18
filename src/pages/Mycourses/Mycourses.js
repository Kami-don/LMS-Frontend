import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Space, Table, Row, Card, Col, Tag, Input, Progress, } from "antd";
import { CheckCircleOutlined, SearchOutlined } from '@ant-design/icons';
import moment from "moment/moment";
import attendanceImg from "../../assets/svg/attendance.svg";
import axios from "axios";
import { SERVER_URL } from "../../config";


const { Search } = Input;

const Mycourses = () => {
	const [total, setTotal] = useState(0);
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const [pageSize, setPageSize] = useState(9);


	const courseSearch = (pattern) => {
		setLoading(true)
		if (pattern)
			axios.get(`${SERVER_URL}/canvas/getcourses`).then(async (data) => {
				const tmp = await data.data.filter(course => {
					return course.name.toLowerCase().includes(pattern.toLowerCase());
				})
				setCourses(tmp);
				setTotal(tmp.length)
				setLoading(false);
			});
		else
			getCourses()
	}

	const columns = [
		{
			title: "",
			dataIndex: "canvasCourseId",
			key: "canvasCourseId",
			width: "3%",
			render: (id) => <span style={{ cursor: "pointer" }} onClick={() => goContents(id)}><SearchOutlined /></span>
		},
		{
			title: "Course",
			dataIndex: "name",
			key: "name",
			width: "28%"
		},
		{
			title: "Progress",
			dataIndex: "assignments",
			key: "assignments._id",
			width: "10%",
			render: (assignments) => <Progress percent={assignments.filter(assignment => assignment.published).length / assignments.length * 100} />,
		},
		{
			title: "Date Enrolled",
			dataIndex: "created_at",
			key: "enrolledDate",
			width: "10%",
			render: (created_at) => <span>{moment(created_at).format('DD MMM YYYY')}</span>
		},
		{
			title: "Start Date",
			dataIndex: "startDate",
			key: "startDate",
			width: "10%",
			ellipsis: true,
			render: (created_at) => <span>{moment(created_at).format('DD MMM YYYY')}</span>
		},
		{
			title: "Status",
			dataIndex: "workflow_state",
			key: "status",
			width: "10%",
			render: (workflow_state) => {
				return workflow_state == "available" ? <Tag icon={<CheckCircleOutlined />} color="success">active	</Tag> : ""
			}
		},
	];

	const navigate = useNavigate();

	const goContents = async (course_id) => {
		navigate(`/mycourses/${course_id}`, { state: { course: courses.filter(course => { return course.canvasCourseId == course_id }) } });
	};

	const getCourses = async () => {
		axios.get(`${SERVER_URL}/canvas/getcourses`).then((data) => {
			// console.log(data.data)
			setCourses(data.data);
			setTotal(data.data.length)
			setLoading(false);
		});
	}

	useEffect(() => {
		setLoading(true)
		getCourses()
	}, []);
	return (
		<>
			<Row style={{ padding: "20px", minHeight: "800px" }}>
				<Card style={{ marginBottom: "20px", width: "100%" }}>
					<Row>
						<Col span={10}>
							<Search
								placeholder="Input course name..."
								// onSearch={handleSearch}
								style={{
									width: "100%",
									fontSize: "14px",
								}}
								size="large"
								onSearch={courseSearch}
							/>
						</Col>
					</Row>
				</Card>

				<Card
					title={
						<Col
							span={24}
							style={{
								alignItems: "center",
								display: "flex",
								flexDirection: "row",
								fontSize: "18px",
							}}>
							<img
								src={attendanceImg}
								style={{ width: "22px", height: "22px", marginRight: "5px" }}
							/>
							My Courses
						</Col>
					}>
					<Space
						style={{
							marginBottom: 16,
						}}></Space>
					<Table
						loading={loading}
						bordered
						columns={columns}
						dataSource={courses}
						pagination={{
							onChange: (num, size) => {
								setPageSize(size);
							},
							total: total,
							pageSize: pageSize,
							pageSizeOptions: [9],
						}}
					/>
				</Card>
			</Row>
		</>
	);
};

export default Mycourses;
