import accountClient from "./accountClient";
import forecastClient from "./forecastClient";
import metadataClient from "./metadataClient";
import projectionClient from "./projectionClient";
import userClient from "./userClient";
import windowsClient from "./windowsClient";

const client = {
    metadata: metadataClient,
    users: userClient,
    forecasts: forecastClient,
    projections: projectionClient,
    accounts: accountClient,
    windows: windowsClient
}

export default client;