import axios from "axios";
import React from "react";

import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';

const ServiceStatusDisplay = () => {

  const circle = (color: string) => {

    const shapeStyles = { bgcolor: color, width: 40, height: 40 };
    const shapeCircleStyles = { borderRadius: '50%' };
    return (
      <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
  )}
  ;

  const server_url = "https://services.nutshellbiotech.com:3333";

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
        break;
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
