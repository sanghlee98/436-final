import React from 'react';
import { Button, Space } from 'antd';
import { Container, Paper } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function Profileselect(props) {
    var queryString = window.location.search
    var searchParams = new URLSearchParams(queryString)
    var code = searchParams.get("code")

    return (
      <Container sx={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40rem', padding: '2rem'}}>
          <h1>Account Selection</h1>
          <p style={{margin: '0rem', fontSize: '1.25rem'}}>Please select or create a profile to join class</p>
          <Space style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly",  marginTop: 60, marginBottom: 20, columnGap: '1rem', width: '100%' }}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <HowToRegIcon sx={{fontSize: '8rem', marginBottom: '1rem'}} />
              <Button type="primary" onClick={() => window.location.href="/dashboard?code=" + encodeURIComponent(code)}>Existing Student</Button>
            </div>
            <div style={{display: 'inline-block', alignSelf: 'stretch', width: '1px', minHeight: '10.5rem', backgroundColor: 'black'}} />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <PersonAddIcon sx={{fontSize: '8rem', marginBottom: '1rem'}} />
              <Button type="primary" onClick={() => window.location.href="/createprofile?code=" + encodeURIComponent(code)}>New Student</Button>
            </div>
          </Space>
        </Paper>
      </Container>
    )
}

export default Profileselect