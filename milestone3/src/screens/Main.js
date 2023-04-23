import React from 'react';
import { Button, Space } from 'antd';

function Main(props) {

    return (
        <>
        <div style={{display: "flex", alignItems: 'center', justifyContent: "center", marginTop: 30, marginBottom: 30, fontSize: '30px'}}> <b>Main Page</b> </div>
        <Space direction="vertical" style={{ display: "flex", alignItems: "center", justifyContent: "center",  marginTop: 150 }}>
            <Button block style={{marginBottom: 50, width: 150, height: 50, fontSize: '20px'}} onClick={() => window.location.href="/createcode"}>Make a Code</Button>
            <Button block style={{width: 150, height: 50, fontSize: '20px'}} onClick={() => window.location.href="/entercode"}>Enter a Code</Button>
        </Space>
        </>
    )
}

export default Main