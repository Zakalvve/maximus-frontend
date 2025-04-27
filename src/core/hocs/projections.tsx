import client from "../api/client";
import { withDataFactory } from "./withData";

export const forwardProjections = withDataFactory(client.projections.useGetProjections)