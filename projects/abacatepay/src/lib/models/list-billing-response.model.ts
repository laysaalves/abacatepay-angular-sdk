import { Billing } from "./billing.model";

export interface ListBillingResponse {
    error: string;
    billings: Billing[]
}