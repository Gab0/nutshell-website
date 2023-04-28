import axios from "axios";
import React from "react";


const ServiceStatusDisplay = () => {

  const server_url = "http://nutshellbiotech.ddns.net:5000"
  //const server_url = "https://www.google.com.br";
  const [status, setStatus] = React.useState(0);

  const headers = {
    "Access-Control-Allow-Origin": "*"
  };

  const reqInstance = axios.create({
    headers: headers
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

  }, [server_url]);

    return (
        <div>{ status === 200 ? "OKOK" : "BAD" }</div>
    )


}

export default ServiceStatusDisplay;
