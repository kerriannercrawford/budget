export interface TransactionQuery {
  createTransaction?: string;
  getAllUserTransactions?: string;
  getAllAccountTransactions?: string;
  getOneUserTransaction?: string;
  updateTransaction?: QueryUpdateFunction;
  deleteTransaction?: string;
}

export interface AccountQuery {
  createAccount?: string;
  getAllUserAccounts?: string;
  getOneUserAccount?: string;
  updateAccount?: QueryUpdateFunction;
  deleteUserAccount?: string;
}

export interface CategoryQuery {
  createCategory?: string;
  getAllUserCategories?: string;
  getOneUserCategory?: string;
  updateCategory?: QueryUpdateFunction;
  deleteCategory?: string;
}

export interface GroupQuery {
  createGroup?: string;
  getAllUserGroups?: string;
  getOneUserGroup?: string;
  updateGroup?: QueryUpdateFunction;
  deleteGroup?: string;
}

export interface PayeeQuery {
  createPayee?: string;
  getAllUserPayees?: string;
  getOneUserPayee?: string;
  updatePayee?: QueryUpdateFunction;
  deletePayee?: string;
}

export interface UserQuery {
  createUser?: string;
  checkForUser?: string;
  login?: string;
  getAllUsers?: string;
  getUserById?: string;
  updateUser?: QueryUpdateFunction;
  deleteUser?: string;
}

export type QueryUpdateFunction = (...args: any[]) => any;
export type RequestBody = any;




