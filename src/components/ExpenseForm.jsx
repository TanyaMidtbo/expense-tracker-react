import React from "react";
import { useForm } from "react-hook-form";

const ExpenseForm = ({addExpense}) => {
  const { register, handleSubmit, formState: {errors} } = useForm(); //formState is for errors

  return (
    <form action="" className="mb-5" onSubmit={handleSubmit(addExpense)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" {...register("description", {minLength:3, required:true})} />
		{errors.description?.type == "minLength"&& <p className="text-danger">Minimum 3 characters</p>} 
		{errors.description?.type == "required"	&& <p className="text-danger">Please fill out all the fields</p>} 
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" {...register("amount", {required:true})}/>
		{errors.amount?.type == "required"	&& <p className="text-danger">Please fill out all the fields</p>} 
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select name="" id="" className="form-select" {...register("category", {required:true})}>
          <option value="">Choose</option>
          <option value="housing">Housing</option>
          <option value="grocery">Grocery</option>
          <option value="transportation">Transportation</option>
          <option value="clothes">Clothes</option>
          <option value="other">Other</option>
        </select>
		{errors.category?.type == "required"	&& <p className="text-danger">Please fill out all the fields</p>} 
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
