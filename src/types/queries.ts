export interface TransactionQuery {
  createTransaction?: string;
  getAllUserTransactions?: string;
  getAllAccountTransactions?: string;
  getOneUserTransaction?: string;
  updateTransaction?: QueryUpdateFunction;
  deleteTransaction?: string;
  getTransactionMemoById?: string;
}

export interface AccountQuery {
  createAccount?: string;
  getAllUserAccounts?: string;
  getOneUserAccount?: string;
  updateAccount?: QueryUpdateFunction;
  deleteUserAccount?: string;
  getAccountNameById?: string;
}

export interface CategoryQuery {
  createCategory?: string;
  getAllUserCategories?: string;
  getOneUserCategory?: string;
  updateCategory?: QueryUpdateFunction;
  deleteCategory?: string;
  getCategoryNameById?: string;
}

export interface GroupQuery {
  createGroup?: string;
  getAllUserGroups?: string;
  getOneUserGroup?: string;
  updateGroup?: QueryUpdateFunction;
  deleteGroup?: string;
  getGroupNameById?: string;
}

export interface PayeeQuery {
  createPayee?: string;
  getAllUserPayees?: string;
  getOneUserPayee?: string;
  updatePayee?: QueryUpdateFunction;
  deletePayee?: string;
  getPayeeNameById?: string;
}

export interface UserQuery {
  createUser?: string;
  checkForUser?: string;
  login?: string;
  getAllUsers?: string;
  getUserById?: string;
  updateUser?: QueryUpdateFunction;
  deleteUser?: string;
  getUsernameById?: string;
}

export type QueryUpdateFunction = (...args: any[]) => any;
export type RequestBody = any;




