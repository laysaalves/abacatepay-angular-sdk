import { Billing } from "./billing.model";

export interface CreateBillingResponse {
    error: string;
    billing: Billing
}