import { LightningElement, api } from "lwc";

export default class Empresa extends LightningElement {
 @api nome;
 @api cnpj;
 @api cidade;
 @api ceo;
 @api fundada;
}