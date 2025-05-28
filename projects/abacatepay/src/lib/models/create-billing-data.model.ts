import { BillingKind } from "./billing-kind.enum";
import { BillingMethod } from "./billing-method.enum";
import { CreateBillingProduct } from "./create-billing-product.model";

export interface CreateBillingData {
  frequency: BillingKind;
  methods: BillingMethod[];
  products: CreateBillingProduct[];
  returnUrl: string;
  completionUrl: string;
}