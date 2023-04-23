import React, { useState, useEffect } from 'react';
import { Button, Input, Select, Space } from 'antd';
import axios from 'axios'

function Createcode(props) {
    const [code, setCode] = useState('');

    const handleSubmit = async (e) => {
        axios.post(`http://localhost:5000/createcode/`, {code: code})
        .then(response => {
            if (response.status == 200) {
                window.location.href="/successcode?code=" + encodeURIComponent(code)
            } else {
                alert("Failed to create a code")
            }
            //console.log(response.data)
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <>
        <div style={{display: "flex", alignItems: 'center', justifyContent: "center", marginTop: 30, marginBottom: 30, fontSize: '30px'}}> <b>Create Code</b> </div>
        <Space style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 300 }}>
            <div>Please enter code: </div>
            <Input defaultValue="enter code" type="text" value={code} onChange={(e) => setCode(e.target.value)} />
            <Button type="primary" onClick={handleSubmit}>Submit</Button>  
        </Space>        
        </>

    )
}

export default Createcode