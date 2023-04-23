import React, {useState, useEffect} from 'react';
import {
    Button,
    Form,
    Input,
    InputNumber,
    Space
  } from 'antd';
import axios from 'axios';
import { Container, Paper } from '@mui/material';

const { TextArea } = Input;

function Createprofile(props) {
    var queryString = window.location.search
    var searchParams = new URLSearchParams(queryString)
    var code = searchParams.get("code")

    //const [code, setCode] = useState("")
    const [year, setYear] = useState("")
    const [major, setMajor] = useState("")
    const [hobbies, setHobbies] = useState("")
    const [msi, setMSI] = useState("")
    const [cpi, setCPI] = useState("")
    const [otherClasses, setOtherClasses] = useState("")

    useEffect(() => {

    }, [])

    const handleSubmit = async (e) => {
        axios.post(`http://localhost:5000/createprofile/`, {code: code, year: year, msjor: major, hobbies: hobbies, msi: msi, cpi: cpi, otherClasses: otherClasses})
        .then(response => {
            if (response.status == 200) {
                window.location.href="/dashboard?code=" + encodeURIComponent(code)
            } else {
                alert("Failed to create a profile")
            }
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
    <div style={{padding: '100px'}}>
      <Container sx={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40rem', padding: '2rem'}}>
          <h1>Create Profile</h1>
          <p style={{margin: '0rem', fontSize: '1.25rem'}}>Please fill out the information below</p>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem'}}>
            <Form
            layout="vertical"
            style={{ width: '28rem' }}
            >   
                <p>Your Code: {code}</p>

                <Form.Item label="Major">
                    <Input defaultValue="Major" type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
                </Form.Item>

                <Form.Item label="Graduation Year">
                    <Input defaultValue="enter year" type="text" value={year} onChange={(e) => setYear(e.target.value)} />
                </Form.Item>

                <Form.Item label="Hobbies">
                    <Input defaultValue="Major" type="text" value={hobbies} onChange={(e) => setHobbies(e.target.value)} />
                </Form.Item>

                <Form.Item label="Major Specific Interest">
                    <Input defaultValue="Major" type="text" value={msi} onChange={(e) => setMSI(e.target.value)} />
                </Form.Item>

                <Form.Item label="Career Path Interest">
                    <Input defaultValue="Major" type="text" value={cpi} onChange={(e) => setCPI(e.target.value)} />
                </Form.Item>

                <Form.Item label="Other Classes">
                    <TextArea rows={4} value={otherClasses} onChange={(e) => setOtherClasses(e.target.value)} />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" style={{width: '100%', marginBottom: '21'}} onClick={handleSubmit}>Submit</Button> 
                </Form.Item>      
            
            </Form>
          </div>
        </Paper>
      </Container>
    </div>
    )
}

export default Createprofile