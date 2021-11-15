export type ExpressMiddlewareFunction = (...args: any[]) => any;

export type ExpressReq = any;
export type ExpressRes = any;
export type ExpressNext = ExpressMiddlewareFunction;

export type DeleteResponseMessage = {
  message: string,
  accountId?: string,
  userId?: string,
  groupId?: string,
  payeeId?: string,
  categoryId?: string,
  transactionId?: string
};