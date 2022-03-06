import './ExpenseFiltered.css';

const ExpenseFiltered = (props) => {
    const expenseFilteredHandler = (event) => {
        props.updateExpenseFiltered(event.target.value)
    }

    return (
        <div className="expense-filtered">
            <h1 className="expense-filtered__title">Filter by year</h1>
            <select className="expense-filtered__dropdown" name="years" onChange={expenseFilteredHandler}>
                <option className="expense-filtered__option" value="2022">2022</option>
                <option className="expense-filtered__option" value="2021">2021</option>
                <option className="expense-filtered__option" value="2020">2020</option>
                <option className="expense-filtered__option" value="2019">2019</option>
            </select>
        </div>
    )
}

export default ExpenseFiltered;
