export interface Slicers {
	accountSlice: AccountSlicer;
	budgetSlice: BudgetSlicer;
	categoriesSlice: CategorySlicer;
	groupsSlice: GroupSlicer;
	infoSlice: InfoSlicer;
	payeesSlice: PayeeSlicer;
	transactionsSlice: TransactionSlicer;
	userSlice: UserSlicer;
}

export interface AccountSlicer {
	fetchUserAccounts?: Slice
}

export interface BudgetSlicer {
	setDate?: Slice
}

export interface CategorySlicer {
	fetchUserCategories?: Slice
}

export interface GroupSlicer {
	fetchUserGroups?: Slice;
}

export interface InfoSlicer {
	setError?: Slice;
	resetError?: Slice;
}

export interface PayeeSlicer {
	fetchUserPayees?: Slice;
}

export interface TransactionSlicer {
	fetchUserTransactions?: Slice;
}

export interface UserSlicer {
	login?: Slice;
	updateUsername?: Slice;
	updatePassword?: Slice;
}

export type Slice = any;