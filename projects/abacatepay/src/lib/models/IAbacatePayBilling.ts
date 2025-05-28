import { CreateBillingData } from "./models/create-billing-data.model";
import { CreateBillingResponse } from "./models/create-billing-response.model";
import { ListBillingResponse } from "./models/list-billing-response.model";

export interface IAbacatePayBilling {
  create(data: CreateBillingData): Promise<CreateBillingResponse>;
  list(): Promise<ListBillingResponse>;
}
