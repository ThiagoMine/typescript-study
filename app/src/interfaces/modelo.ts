import { Imprimivel } from "../utils/imprimivel.js";
import { Comparavel } from "./comparavel.js";

export interface Modelo<T> extends Imprimivel, Comparavel<T>{ // netste caso o type <T> obtido em objeto é delegado para Comparavel
}