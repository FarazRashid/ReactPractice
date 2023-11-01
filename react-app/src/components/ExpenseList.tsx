function ExpenseList() {
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button className="btn btn-outline-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default ExpenseList;
