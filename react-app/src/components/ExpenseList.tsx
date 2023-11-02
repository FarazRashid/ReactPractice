interface Expense {
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expense: Expense[];
  deleteExpense: (data: Expense) => void;
}

function ExpenseList({ expense, deleteExpense }: Props) {
  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expense.map((expense) => (
            <tr key={expense.description}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteExpense(expense)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total Amount:</td>
            <td>
              {expense.reduce((total, expense) => total + expense.amount, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ExpenseList;
