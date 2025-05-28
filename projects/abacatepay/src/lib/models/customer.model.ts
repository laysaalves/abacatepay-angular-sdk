import { CustomerMetadata } from "./customer-metadata.model";

export interface Customer {
    id: string;
    metadata: CustomerMetadata
}