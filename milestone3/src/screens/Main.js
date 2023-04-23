import React from 'react';
import { Button, Space } from 'antd';
import { Container, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

function Main(props) {

    return (
      <Container sx={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40rem', padding: '2rem'}}>
          <h1>Welcome to SEATR!</h1>
          <p style={{margin: '0rem', fontSize: '1.25rem'}}>Please select your role</p>
          <Space style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly",  marginTop: 60, marginBottom: 20, columnGap: '1rem', width: '100%' }}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <PersonIcon sx={{fontSize: '5rem'}} />
              <h2 style={{marginTop: '0.825rem'}}>Professor</h2>
              <Button type="primary" block style={{width: 150, height: 50, fontSize: '20px'}} onClick={() => window.location.href="/createcode"}>Create Class</Button>
            </div>
            <div style={{display: 'inline-block', alignSelf: 'stretch', width: '1px', minHeight: '10.5rem', backgroundColor: 'black'}} />
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <GroupsIcon sx={{fontSize: '5rem'}} />
              <h2 style={{marginTop: '0.825rem'}}>Student</h2>
              <Button type="primary" block style={{width: 150, height: 50, fontSize: '20px'}} onClick={() => window.location.href="/entercode"}>Join Class</Button>
            </div>
          </Space>
        </Paper>
      </Container>
    )
}

export default Main