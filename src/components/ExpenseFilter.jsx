import React from 'react'

const ExpenseFilter = ({filterItem}) => {
  return (
	<select name="" id="" className="form-select mb-3" onChange ={(event) => filterItem(event.target.value)}>
		<option value="housing">Housing</option>
		<option value="grocery">Grocery</option>
		<option value="transportation">Transportation</option>
		<option value="clothes">Clothes</option>
		<option value="other">Other</option>
	</select>
  )
}

export default ExpenseFilter