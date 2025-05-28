import { IAbacatePayBilling } from "./IAbacatePayBilling";

export interface IAbacatePay {
  billing(): IAbacatePayBilling;
}
