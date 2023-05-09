import axios from "axios";
import React from "react";

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

import MailIcon from '@mui/icons-material/Mail';

const ServiceStatusDisplay = () => {

  const circle = (color: string) => {

    const shapeStyles = { bgcolor: color, width: 40, height: 40 };
    const shapeCircleStyles = { borderRadius: '50%' };
    return (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  )}
  ;

  const server_url = "http://nutshellbiotech.ddns.net:3333"
  //const server_url = "https://www.google.com.br";
  const [status, setStatus] = React.useState(0);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json'
  };

  const reqInstance = axios.create({
    headers: headers,
    timeout: 4 * 1000,
  });

  React.useEffect(() => {

    reqInstance.get(
      server_url
    ).then((response) => {
        setStatus(response.status);
    }).catch(
      (error) => {
        console.log(error);
        setStatus(400);
      }
    )

  }, [server_url, reqInstance]);

  const server_status = (status: number) => {

    let color = "grey";
    let message = "";

    switch (status) {
      case 200: {
      color = "green";
      message = "Services are online.";
      }

      case 400: {
      color = "red";
      message = "Services appear to be offline.";
      }
    }


    return (
      <>
      <Badge badgeContent={0}>
        { circle(color) }
      </Badge> { message }
      </>
    )
  }
  console.log(status);
    return (
      <div className="center">
        <br /><br />
        { server_status(status) }</div>
    )

}

export default ServiceStatusDisplay;