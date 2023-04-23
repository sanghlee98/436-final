import React, { useState, useEffect } from 'react';
import { Button, Input, Select, Space } from 'antd';
import axios from 'axios';
import { Container, Paper } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Entercode(props) {
    const [code, setCode] = useState('');

    const handleSubmit = async (e) => {
        axios.post(`http://localhost:5000/checkcode/`, {code: code})
        .then(response => {
            if (response.status == 200) {
                window.location.href="/profileselect?code=" + encodeURIComponent(code)
                console.log(response)
            } else {
                alert("Wrong Code")
            }
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
      <Container sx={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40rem', padding: '2rem'}}>
          <h1>Join Class</h1>
          <p style={{margin: '0rem', fontSize: '1.25rem'}}>Use class code to join class</p>
          <div style={{display: 'flex', marginTop: '4rem'}}>
            <Input defaultValue="enter code" type="text" value={code} onChange={(e) => setCode(e.target.value)} style={{width: '16rem', marginRight: '0.25rem'}} />
            <Button type="primary" onClick={handleSubmit}><ArrowForwardIcon /></Button>  
          </div>
        </Paper>
      </Container>
    )
}

export default Entercode