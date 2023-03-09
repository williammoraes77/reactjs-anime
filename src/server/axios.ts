import axios from "axios";

export const api = axios.create({
  baseURL: "https://compras.dados.gov.br/comprasContratos/v1",
});
