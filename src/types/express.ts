export type ExpressMiddlewareFunction = (...args: any[]) => any;

export type ExpressReq = any;
export type ExpressRes = any;
export type ExpressNext = ExpressMiddlewareFunction;

export type DeleteResponseMessage = {
  message: string,
  account_id?: string,
  userId?: string,
  group_id?: string,
  payee_id?: string,
  category_id?: string,
  transaction_id?: string
};