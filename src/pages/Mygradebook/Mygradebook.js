import React, { useState } from "react";
import { Space, Table, Row, Card, Col, Input, Button } from "antd";
import attendanceImg from "../../assets/svg/attendance.svg";
import styled from "styled-components";

const data = [
	{
		key: "1",
		no: "1",
		course: "CC27 - 1st Grade Language Arts Semester 1",
		teacher: "Florence Samuels",
		totalAss: "15",
		attemptedAss: "-",
		totalMarks: "-",
		marksScored: "-",
		percent: "-",
		letter: "",
		completion: "-",
	},
	{
		key: "2",
		no: "2",
		course: "CC27 - 1st Grade Language Arts Semester 1",
		teacher: "Florence Samuels",
		totalAss: "15",
		attemptedAss: "-",
		totalMarks: "-",
		marksScored: "-",
		percent: "-",
		letter: "",
		completion: "-",
	},
	{
		key: "3",
		no: "3",
		course: "CC27 - 1st Grade Language Arts Semester 1",
		teacher: "Florence Samuels",
		totalAss: "15",
		attemptedAss: "-",
		totalMarks: "-",
		marksScored: "-",
		percent: "-",
		letter: "",
		completion: "-",
	},
	{
		key: "4",
		no: "4",
		course: "CC27 - 1st Grade Language Arts Semester 1",
		teacher: "Florence Samuels",
		totalAss: "15",
		attemptedAss: "-",
		totalMarks: "-",
		marksScored: "-",
		percent: "-",
		letter: "",
		completion: "-",
	},
];
const { Search } = Input;
const StyledCard = styled(Card)`
	.ant-card-body {
		padding: 0 !important; // Remove padding
	}
`;
// const Mygradebook = () => {
// 	const [filteredInfo, setFilteredInfo] = useState({});
// 	const [sortedInfo, setSortedInfo] = useState({});
// 	const [dataSource, setDataSource] = useState(data);
// 	const handleChange = (pagination, filters, sorter) => {
// 		setFilteredInfo(filters);
// 		setSortedInfo(sorter);
// 	};
// 	const clearAll = () => {
// 		setFilteredInfo({});
// 		setSortedInfo({});
// 		setDataSource(data);
// 	};
// 	const handleSearch = (value) => {
// 		const filteredData = data.filter((entry) =>
// 			entry.course.toLowerCase().includes(value.toLowerCase())
// 		);
// 		setDataSource(filteredData); // Update the data source state to the filtered data
// 	};
// 	const columns = [
// 		{
// 			title: "No",
// 			dataIndex: "no",
// 			key: "no",
// 			width: "5%",
// 			sorter: (a, b) => a.no - b.no,
// 			sortOrder: sortedInfo.columnKey === "no" ? sortedInfo.order : null,
// 			ellipsis: true,
// 		},
// 		{
// 			title: "Course",
// 			dataIndex: "course",
// 			key: "course",
// 			width: "28%",
// 			filters: [
// 				{
// 					text: "Joe",
// 					value: "Joe",
// 				},
// 				{
// 					text: "Jim",
// 					value: "Jim",
// 				},
// 			],
// 			filteredValue: filteredInfo.course || null,
// 			onFilter: (value, record) => record.course.includes(value),
// 			sorter: (a, b) => a.course.length - b.course.length,
// 			sortOrder: sortedInfo.columnKey === "course" ? sortedInfo.order : null,
// 			ellipsis: true,
// 		},
// 		{
// 			title: "Teacher",
// 			dataIndex: "teacher",
// 			key: "teacher",
// 			width: "15%",
// 			filters: [
// 				{
// 					text: "London",
// 					value: "London",
// 				},
// 				{
// 					text: "New York",
// 					value: "New York",
// 				},
// 			],
// 			filteredValue: filteredInfo.teacher || null,
// 			onFilter: (value, record) => record.teacher.includes(value),
// 			sorter: (a, b) => a.teacher.length - b.teacher.length,
// 			sortOrder: sortedInfo.columnKey === "teacher" ? sortedInfo.order : null,
// 			ellipsis: true,
// 		},
// 		{
// 			title: "Total Assessments",
// 			dataIndex: "totalAss",
// 			key: "totalAss",
// 			width: "10%",
// 			sorter: (a, b) => a.totalAss - b.totalAss,
// 			sortOrder: sortedInfo.columnKey === "totalAss" ? sortedInfo.order : null,
// 			ellipsis: true,
// 		},
// 		{
// 			title: "Attempted Assessments",
// 			dataIndex: "attemptedAss",
// 			key: "attemptedAss",
// 			width: "10%",
// 			sorter: (a, b) => a.attemptedAss - b.attemptedAss,
// 			sortOrder:
// 				sortedInfo.columnKey === "attemptedAss" ? sortedInfo.order : null,
// 			ellipsis: true,
// 		},
// 		{
// 			title: "Total Marks",
// 			dataIndex: "totalMarks",
// 			key: "totalMarks",
// 			width: "10%",
// 			sorter: (a, b) => a.totalMarks - b.totalMarks,
// 			sortOrder:
// 				sortedInfo.columnKey === "totalMarks" ? sortedInfo.order : null,
// 			ellipsis: true,
// 		},
// 		{
// 			title: "Marks Scored",
// 			dataIndex: "marksScored",
// 			key: "marksScored",
// 			width: "10%",
// 			sorter: (a, b) => a.marksScored - b.marksScored,
// 			sortOrder:
// 				sortedInfo.columnKey === "marksScored" ? sortedInfo.order : null,
// 			ellipsis: true,
// 		},
// 		{
// 			title: "Percentage(%)",
// 			dataIndex: "percent",
// 			key: "percent",
// 			width: "10%",
// 			sorter: (a, b) => a.percent - b.percent,
// 			sortOrder: sortedInfo.columnKey === "percent" ? sortedInfo.order : null,
// 			ellipsis: true,
// 		},
// 		{
// 			title: "Letter",
// 			dataIndex: "letter",
// 			key: "letter",
// 			width: "6%",
// 		},
// 		{
// 			title: "Completion(%)",
// 			dataIndex: "completion",
// 			key: "completion",
// 			width: "10%",
// 			sorter: (a, b) => a.completion - b.completion,
// 			sortOrder:
// 				sortedInfo.columnKey === "completion" ? sortedInfo.order : null,
// 			ellipsis: true,
// 		},
// 	];
// 	return (
// 		<>
// 			<Row style={{ padding: "20px" }}>
// 				<Col span={7}>
// 					<StyledCard
// 						style={{
// 							height: "12vh",
// 							padding: "0px",
// 							background: "linear-gradient(60deg, #26c6da, #00acc1)",
// 							marginBottom: "20px",
// 							body: { padding: 0 },
// 						}}>
// 						<Row>
// 							<Col span={12}>
// 								<b
// 									style={{
// 										width: "100%",
// 										color: "white",
// 										fontSize: "20px",
// 										paddingTop: "10px",
// 										marginLeft: "20px",
// 									}}>
// 									Grade
// 								</b>
// 							</Col>
// 							<Col
// 								span={12}
// 								style={{
// 									display: "flex",
// 									flexDirection: "col",
// 									alignItems: "end",
// 								}}>
// 								<b
// 									style={{
// 										width: "100%",
// 										color: "white",
// 										fontSize: "50px",
// 										textAlign: "end",
// 										marginTop: "30px",
// 										marginRight: "20px",
// 									}}>
// 									10
// 								</b>
// 							</Col>
// 						</Row>
// 					</StyledCard>
// 				</Col>
// 				<Col span={7} offset={10}>
// 					<StyledCard
// 						style={{
// 							height: "12vh",
// 							padding: "0px",
// 							background: "#ef5350",
// 							marginBottom: "20px",
// 							body: { padding: 0 },
// 						}}>
// 						<Row>
// 							<Col span={12}>
// 								<b
// 									style={{
// 										width: "100%",
// 										color: "white",
// 										fontSize: "20px",
// 										paddingTop: "10px",
// 										marginLeft: "20px",
// 									}}>
// 									Total Courses
// 								</b>
// 							</Col>
// 							<Col
// 								span={12}
// 								style={{
// 									display: "flex",
// 									flexDirection: "col",
// 									alignItems: "end",
// 								}}>
// 								<b
// 									style={{
// 										width: "100%",
// 										color: "white",
// 										fontSize: "50px",
// 										textAlign: "end",
// 										marginTop: "30px",
// 										marginRight: "20px",
// 									}}>
// 									10
// 								</b>
// 							</Col>
// 						</Row>
// 					</StyledCard>
// 				</Col>
// 				<Card
// 					title={
// 						<Row>
// 							<Col
// 								span={18}
// 								style={{
// 									alignItems: "center",
// 									display: "flex",
// 									flexDirection: "row",
// 									fontSize: "18px",
// 								}}>
// 								<img
// 									src={attendanceImg}
// 									style={{ width: "22px", height: "22px", marginRight: "5px" }}
// 								/>
// 								My Gradebook
// 							</Col>
// 							<Col span={6}>
// 								<Search
// 									placeholder="Input course name..."
// 									onSearch={handleSearch}
// 									style={{
// 										width: "100%",
// 										fontSize: "14px",
// 									}}
// 								/>
// 							</Col>
// 						</Row>
// 					}>
// 					<Space
// 						style={{
// 							marginBottom: 16,
// 						}}></Space>
// 					<Table
// 						bordered
// 						columns={columns}
// 						dataSource={dataSource}
// 						onChange={handleChange}
// 					/>
// 				</Card>
// 			</Row>
// 		</>
// 	);
// };
const Mygradebook = () => {

}

export default Mygradebook;
