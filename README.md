## Task description

### Required tech
- apollo graphql
- react
- NO redux or other state management tools
- NO css frameworks for ui
- TypeScript

### Requirements

1. Backend graphql server should be mocked
2. Both frontends should communicate with the same server
3. The task will be to create 2 separate deployable frontends
4. UI is up to you

### Frontend 1: Admin panel
Crud for transactions

- Show the list of transactions
- Add new transaction(id, uuid, amount, currency["EUR", "USD", "BTC])
- Currency list should be fetched from backend
- Edit transaction
- Delete transaction

### Frontend 2: User panel
Dashboard for the user

- show number of transactions
- show table with transactions. Pagination is required
- Filter transactions by currency. Filtration should be processed on backend
