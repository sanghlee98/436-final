import React from 'react';
import { Button, Space, Result } from 'antd';
import { useParams } from "react-router-dom"

function Successcode(props) {
    var queryString = window.location.search
    var searchParams = new URLSearchParams(queryString)
    var code = searchParams.get("code")

    return (
        <Result
        status="success"
        title={"Successfully Created Class Code: " + code}
        extra={[
          <Button type="primary" key="console" onClick={() => window.location.href="/"}>
            Go to Main
          </Button>,
        ]}
      />
    )
}

export default Successcode