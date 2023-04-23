import React from 'react';
import { Button, Space } from 'antd';
import { Container, Paper } from '@mui/material';

function Main(props) {

    return (
      <Container sx={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Paper elevation={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '40rem', padding: '2rem'}}>
          <h1>Welcome to SEATR!</h1>
          <Space style={{ display: "flex", alignItems: "center", justifyContent: "center",  marginTop: 100, gap: '1rem' }}>
              <Button block style={{width: 150, height: 50, fontSize: '20px'}} onClick={() => window.location.href="/createcode"}>Create Class</Button>
              <Button block style={{width: 150, height: 50, fontSize: '20px'}} onClick={() => window.location.href="/entercode"}>Join Class</Button>
          </Space>
        </Paper>
      </Container>
    )
}

export default Main