export interface TransactionInformation {
	accountId: string,
	groupId: string,
	categoryId: string,
	payeeId: string,
	userId: string,
	date?: string,
	outflow?: number,
	inflow?: number,
	memo?: string,
	cleared?: boolean
}

