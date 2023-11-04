import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be minimum 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }),
  category: z.string().min(1, { message: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

function ExpenseForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  console.log(errors);

  const categories = ["Grocery", "Utility", "Entertainment"];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            {...register("description")}
            type="text"
            className="form-control"
          />
        </div>
        {errors.description && (
          <p className="text-danger"> {errors.description.message}</p>
        )}
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            {...register("amount", { valueAsNumber: true })}
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select id="category" className="form-control">
            <option value=""></option>
            {categories.map((category) => {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
        <button type="submit" className="btn btn-primary mb-3 ">
          Submit
        </button>
      </form>
    </>
  );
}

export default ExpenseForm;
