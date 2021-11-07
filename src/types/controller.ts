import { ExpressMiddlewareFunction } from './express';

export interface TransactionController {
  createTransaction?: ExpressMiddlewareFunction;
  getAllUserTransactions?: ExpressMiddlewareFunction;
  getAllAccountTransactions?: ExpressMiddlewareFunction;
  getOneUserTransaction?: ExpressMiddlewareFunction;
  updateTransaction?: ExpressMiddlewareFunction;
  deleteTransaction?: ExpressMiddlewareFunction;
  getTransactionMemoById?: ExpressMiddlewareFunction;
}

export interface AccountController {
  createAccount?: ExpressMiddlewareFunction;
  getAllUserAccounts?: ExpressMiddlewareFunction;
  getOneUserAccount?: ExpressMiddlewareFunction;
  updateAccount?: ExpressMiddlewareFunction;
  deleteUserAccount?: ExpressMiddlewareFunction;
  getAccountNameById?: ExpressMiddlewareFunction;
}

export interface CategoryController {
  createCategory?: ExpressMiddlewareFunction;
  getAllUserCategories?: ExpressMiddlewareFunction;
  getOneUserCategory?: ExpressMiddlewareFunction;
  updateCategory?: ExpressMiddlewareFunction;
  deleteCategory?: ExpressMiddlewareFunction;
  getCategoryNameById?: ExpressMiddlewareFunction;
}

export interface GroupController {
  createGroup?: ExpressMiddlewareFunction;
  getAllUserGroups?: ExpressMiddlewareFunction;
  getOneUserGroup?: ExpressMiddlewareFunction;
  updateGroup?: ExpressMiddlewareFunction;
  deleteGroup?: ExpressMiddlewareFunction;
  getGroupNameById?: ExpressMiddlewareFunction;
}

export interface PayeeController {
  createPayee?: ExpressMiddlewareFunction;
  getAllUserPayees?: ExpressMiddlewareFunction;
  getOneUserPayee?: ExpressMiddlewareFunction;
  updatePayee?: ExpressMiddlewareFunction;
  deletePayee?: ExpressMiddlewareFunction;
  getPayeeNameById?: ExpressMiddlewareFunction
}

export interface UserController {
  createUser?: ExpressMiddlewareFunction;
  checkForUser?: ExpressMiddlewareFunction;
  login?: ExpressMiddlewareFunction;
  getAllUsers?: ExpressMiddlewareFunction;
  getUserById?: ExpressMiddlewareFunction;
  updateUser?: ExpressMiddlewareFunction;
  deleteUser?: ExpressMiddlewareFunction;
  getUsernameById?: ExpressMiddlewareFunction;
}



