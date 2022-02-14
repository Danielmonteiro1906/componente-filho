import { LightningElement } from "lwc";

export default class App extends LightningElement {
data = [
  {cod:"p-001", nome:"produto A", preco:"1000", estoque:"sim"},
  {cod:"p-002", nome:"produto B", preco:"2000", estoque:"Não"},
  {cod:"p-003", nome:"produto C", preco:"3000", estoque:"sim"},
  {cod:"p-004", nome:"produto D", preco:"4000", estoque:"Não"},
  {cod:"p-005", nome:"produto E", preco:"5000", estoque:"sim"},
  {cod:"p-006", nome:"produto F", preco:"6000", estoque:"sim"}

];
}
