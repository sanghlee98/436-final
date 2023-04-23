import React from 'react';
import { Button, Space } from 'antd';

function Profileselect(props) {
    var queryString = window.location.search
    var searchParams = new URLSearchParams(queryString)
    var code = searchParams.get("code")

    return (
        <Space direction="vertical" style={{ display: "flex", alignItems: "center", justifyContent: "center",  marginTop: 300 }}>
            <Button block onClick={() => window.location.href="/dashboard?code=" + encodeURIComponent(code)}>I have a profile</Button>
            <Button block onClick={() => window.location.href="/createprofile?code=" + encodeURIComponent(code)}>Create a profile</Button>
        </Space>
    )
}

export default Profileselect