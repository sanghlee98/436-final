import React, {useState, useEffect} from 'react';
import { Button, Card, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios'

function Seatchart(props) {
    var queryString = window.location.search
    var searchParams = new URLSearchParams(queryString)
    var code = searchParams.get("code")
    const [item, setItem] = useState([])

    useEffect(() => {
        console.log(code)
        axios.post(`http://localhost:5000/getseatingchart/`, {code: code})
        .then(response => {
            if (response.status == 200) {
                console.log(response.data)
                setItem(response.data)
            } else {
                alert("Failed to create a profile")
            }
        })
        .catch(error => {
            console.error(error);
        })
    }, [])

    const handleSubmit = async (e) => {
        window.location.href="/"
    }

    return (
        <>
            <div style={{display: "flex", alignItems: 'center', justifyContent: "center", marginTop: 30, marginBottom: 30, fontSize: '30px'}}> <b>Seating Chart</b> </div>
            <Row gutter={[16, 16]}>
                {item.map((item, index) => (
                    <Col key={index} span={4}>
                        <Card >
                            <p>{"Classmate " + item.id}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Button style={{display: "flex", alignItems: 'center', justifyContent: "center", width: 250, height: 50, marginLeft: '44%', marginTop: 50, marginBottom: 50 }} type="primary" onClick={handleSubmit}>Return Main</Button> 
        </> 
    )
}

export default Seatchart