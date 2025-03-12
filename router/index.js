const approuter = require("@sap/approuter");
const axios = require("axios");
const ar = approuter();

/*ar.beforeRequestHandler.use('/erp', async (req, res, next)=>{
    const VCAP_SERVICES = JSON.parse(process.env.VCAP_SERVICES);
    const destSrvCred = VCAP_SERVICES.destination[0].credentials;
    const conSrvCred = VCAP_SERVICES.connectivity[0].credentials;

    // call destination service
    const destJwtToken = await _fetchJwtToken(destSrvCred.url, destSrvCred.clientid, destSrvCred.clientsecret);    

    //console.debug(destJwtToken);
    const destiConfi = await _readDestinationConfig('YOUR_ERP', destSrvCred.uri, destJwtToken);

    //console.debug(destiConfi);
    // call onPrem system via connectivity service and Cloud Connector
    const connJwtToken = await _fetchJwtToken(conSrvCred.token_service_url, conSrvCred.clientid, conSrvCred.clientsecret);

    //console.debug(connJwtToken);
    const result =  await _callOnPrem(conSrvCred.onpremise_proxy_host, conSrvCred.onpremise_proxy_http_port, connJwtToken, destiConfi, req.originalUrl, req.method);

    res.end(Buffer.from(JSON.stringify(result)));
});

const _fetchJwtToken = async function(oauthUrl, oauthClient, oauthSecret) {
    const tokenUrl = oauthUrl + '/oauth/token?grant_type=client_credentials&response_type=token'  
    const config = {
        headers: {
           Authorization: "Basic " + Buffer.from(oauthClient + ':' + oauthSecret).toString("base64")
        }
    };

    const response = await axios.get(tokenUrl, config);
    return response.data.access_token;
};

// Call Destination Service. Result will be an object with Destination Configuration info
const _readDestinationConfig = async function(destinationName, destUri, jwtToken) {
    const destSrvUrl = destUri + '/destination-configuration/v1/destinations/' + destinationName  
    const config = {
        headers: {
           Authorization: 'Bearer ' + jwtToken
        }
    };

    const response = await axios.get(destSrvUrl, config);
    return response.data.destinationConfiguration;
};

const _callOnPrem = async function(connProxyHost, connProxyPort, connJwtToken, destiConfi, originalUrl, reqmethod) {
    const targetUrl = originalUrl.replace("/erp/", destiConfi.URL);
    const encodedUser = Buffer.from(destiConfi.User + ':' + destiConfi.Password).toString("base64");

    try {
        const config = {
            headers: {
                Authorization: "Basic " + encodedUser,
                'Proxy-Authorization': 'Bearer ' + connJwtToken
                // 'SAP-Connectivity-SCC-Location_ID': destiConfi.CloudConnectorLocationId        
            },
            proxy: {
				host: connProxyHost, 
				port: connProxyPort 
            }
        }
        
        if (reqmethod === 'GET') {
            const response = await axios.get(targetUrl, config);
            return response.data;
        } else {        }
    } catch (error) {
        if (error.response) { // get response with a status code not in range 2xx
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) { // no response
          console.error(error.request);
        } else { // Something wrong in setting up the request
          console.error('Error', error.message);
        }

        console.error(error.config);
    }
};*/

ar.start();
