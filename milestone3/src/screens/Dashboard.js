import React, {useState, useEffect} from 'react';
import { Button, Card, Col, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Container, Paper } from '@mui/material';

function Dashboard(props) {
    var queryString = window.location.search
    var searchParams = new URLSearchParams(queryString)
    var code = searchParams.get("code")
    const [item, setItem] = useState([])

    useEffect(() => {
        console.log(code)
        axios.post(`http://localhost:5000/getprofiles/`, {code: code})
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
        window.location.href="/seatchart?code=" + encodeURIComponent(code)
    }

    return (
        <>
            <div style={{display: "flex", alignItems: 'center', justifyContent: "center", marginTop: 30 , marginBottom: 30, fontSize: '30px'}}> <b>Dashboard</b> </div>
            <Row gutter={[16, 16]}>
                {item.map((item, index) => (
                    <Col key={index} span={8}>
                        <Container sx={{minHeight: '55vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', width: '45rem', alignItems: 'center', padding: '2rem'}}>
                                <b style={{marginBottom: '.7rem', marginTop: '1rem', fontSize: '1.50rem'}}>{"Classmate " + item.id}</b>
                                    <div style={{display: 'flex', alignItems: 'center'}}><b>Major</b> <p>: {item.major}</p></div>
                                    <div style={{display: 'flex', alignItems: 'center'}}><b>Class of</b> <p>: {item.gradYear}</p></div>
                                    <div style={{display: 'flex', alignItems: 'center'}}><b>Hobby</b> <p>: {item.hobbies}</p></div>
                                    <div style={{display: 'flex', alignItems: 'center'}}><b>Major Specific Interest</b> <p>: {item.majInterest}</p></div>
                                    <div style={{display: 'flex', alignItems: 'center'}}><b>Career Path Interest</b> <p>: {item.carInterest}  </p></div>
                                    <div style={{display: 'flex', alignItems: 'center'}}><b>Other Classes</b> <p>: {item.otherClasses}  </p></div>
                            </Paper>
                        </Container>
                    </Col>
                ))}
            </Row>
            <Button type="primary" style={{display: "flex", alignItems: 'center', justifyContent: "center",  marginLeft: '45.5%', marginTop: 50, marginBottom: 50, width: 150, height: 50, fontSize: '20px'}} onClick={handleSubmit}>Seating Chart</Button>
        </> 
    )
}

export default Dashboard

/*
extra={<Button type="primary" icon={<PlusOutlined />} />}
*/