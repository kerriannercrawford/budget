export interface IAccountController {
  newFunc?: CallbackFunctionVariadicAnyReturn;
}

export type CallbackFunctionVariadicAnyReturn = (...args: any[]) => any;

