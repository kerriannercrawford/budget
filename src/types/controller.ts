import { ExpressMiddlewareFunction } from './express';

export interface TransactionController {
  createTransaction?: ExpressMiddlewareFunction;
  getAllUserTransactions?: ExpressMiddlewareFunction;
  getAllAccountTransactions?: ExpressMiddlewareFunction;
  getOneUserTransaction?: ExpressMiddlewareFunction;
  updateTransaction?: ExpressMiddlewareFunction;
  deleteTransaction?: ExpressMiddlewareFunction;
}

export interface AccountController {
  createAccount?: ExpressMiddlewareFunction;
  getAllUserAccounts?: ExpressMiddlewareFunction;
  getOneUserAccount?: ExpressMiddlewareFunction;
  updateAccount?: ExpressMiddlewareFunction;
  deleteUserAccount?: ExpressMiddlewareFunction;
}

export interface CategoryController {
  createCategory?: ExpressMiddlewareFunction;
  getAllUserCategories?: ExpressMiddlewareFunction;
  getOneUserCategory?: ExpressMiddlewareFunction;
  updateCategory?: ExpressMiddlewareFunction;
  deleteCategory?: ExpressMiddlewareFunction;
}

export interface GroupController {
  createGroup?: ExpressMiddlewareFunction;
  getAllUserGroups?: ExpressMiddlewareFunction;
  getOneUserGroup?: ExpressMiddlewareFunction;
  updateGroup?: ExpressMiddlewareFunction;
  deleteGroup?: ExpressMiddlewareFunction;
}

export interface PayeeController {
  createPayee?: ExpressMiddlewareFunction;
  getAllUserPayees?: ExpressMiddlewareFunction;
  getOneUserPayee?: ExpressMiddlewareFunction;
  updatePayee?: ExpressMiddlewareFunction;
  deletePayee?: ExpressMiddlewareFunction;
}

export interface UserController {
  createUser?: ExpressMiddlewareFunction;
  checkForUser?: ExpressMiddlewareFunction;
  login?: ExpressMiddlewareFunction;
  getAllUsers?: ExpressMiddlewareFunction;
  getUserById?: ExpressMiddlewareFunction;
  updateUser?: ExpressMiddlewareFunction;
  deleteUser?: ExpressMiddlewareFunction;
}



