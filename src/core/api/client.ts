import accountClient from "./accountClient";
import forecastClient from "./forecastClient";
import metadataClient from "./metaDataClient";
import projectionClient from "./projectionClient";
import userClient from "./userClient";

const client = {
    metadata: metadataClient,
    users: userClient,
    forecasts: forecastClient,
    projections: projectionClient,
    accounts: accountClient
}

export default client;