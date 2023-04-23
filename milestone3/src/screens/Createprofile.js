import React, {useState, useEffect} from 'react';
import {
    Button,
    Form,
    Input,
    InputNumber,
    Space
  } from 'antd';
import axios from 'axios'

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
        <>
        <div style={{display: "flex", alignItems: 'center', justifyContent: "center", marginTop: 30, marginBottom: 30, fontSize: '30px'}}> <b>Create Profile</b> </div>
        <Space style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 150, width: '100%' }}>
            <Form
            labelCol={{ span: 30 }}
            wrapperCol={{ span: 20 }}
            layout="horizontal"
            style={{ maxWidth: 900, }}
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
                    <Button type="primary" onClick={handleSubmit}>Submit</Button> 
                </Form.Item>      
            
            </Form>
        </Space>
        </>
    )
}

export default Createprofile