var maximumWealth = function (accounts) {
	return accounts.reduce((maxWealth, customer) => {
		const currentCustomerWealth = customer.reduce((sum, bankAccountBalance) => {
			return sum + bankAccountBalance;
		});
		return Math.max(maxWealth, currentCustomerWealth);
	}, 0);
};
