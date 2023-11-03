interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expense: Expense[];
  deleteExpense: (data: number) => void;
}

function ExpenseList({ expense, deleteExpense }: Props) {
  if (expense.length === 0) return null;

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
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteExpense(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total Amount:</td>
            <td>
              $
              {expense
                .reduce((total, expense) => total + expense.amount, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default ExpenseList;
