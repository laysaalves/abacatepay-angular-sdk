import { BillingStatus } from "./billing-status.enum";
import { BillingMethod } from "./billing-method.enum";
import { BillingKind } from "./billing-kind.enum";
import { Product } from "./product.model";
import { Customer } from "./customer.model";

export interface Billing {
  id: string;
  url: string;
  amount: number;
  status: BillingStatus;
  devMode: boolean;
  methods: BillingMethod[];
  products: Product[];
  frequency: BillingKind;
  nextBilling: string;
  customer: Customer;
  createdAt: string;
  updatedAt: string
}