import React, { useState, useEffect } from 'react';
import { Button, Input, Select, Space } from 'antd';
import axios from 'axios'

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
        <>
        <div style={{display: "flex", alignItems: 'center', justifyContent: "center", marginTop: 30, marginBottom: 30, fontSize: '30px'}}> <b>Enter Code</b> </div>
        <Space direction="vertical" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 150 }}>
            <>Please enter code</>
            <Input defaultValue="enter code" type="text" value={code} onChange={(e) => setCode(e.target.value)} />
            <Button type="primary" onClick={handleSubmit}>Submit</Button>  
        </Space>
        </>
    )
}

export default Entercode