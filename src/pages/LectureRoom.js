import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Card } from "antd"
import axios from "axios"
import { SERVER_URL } from "../config"
const LectureRoom = () => {
    const navigate = useNavigate()
    const [data, setData] = useState()
    const location = useLocation();
    const tmp = {
        course_id: location.state.course_id,
        page_url: location.state.page_url
    }
    useEffect(() => {
        let params = {
            info: tmp
        };
        console.log(location.state.assignments)
        axios.get(`${SERVER_URL}/canvas/getlecture`, { params }).then(data => {
            if (data.data.body)
                setData(data.data.body);
            else {
                alert("no data")
                navigate(-1)
            }
        })
    }, [])
    return <>
        <Card title={location.state.name}>
            <CanvasPageContent htmlContent={data} /></Card>
    </>
}

function CanvasPageContent({ htmlContent }) {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}


export default LectureRoom;