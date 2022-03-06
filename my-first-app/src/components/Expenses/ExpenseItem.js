

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

const ExpenseItem = (props) => {
    return (
        props.expenses.length ? props.expenses.map((item) => (
            <Card className='expense-item' key={`${item.id}`}>
                <ExpenseDate date={item.date} />
                <div className='expense-item__description'>
                    <h2>{item.title}</h2>
                    <div className='expense-item__price'>${item.amount}</div>
                </div>
            </Card>
        )) : (
            <div className='expense-item__not-found'>
                No Expense Items Were Found
            </div>
        )
    )
}

export default ExpenseItem;
