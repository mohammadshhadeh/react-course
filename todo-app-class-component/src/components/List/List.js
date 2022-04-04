import { Component } from 'react';
import './List.css';

class List extends Component {
    render() {
        const handleDelete = (id) => {
            this.props.onDeleteList(id);
        }

        const handleCheck = (id) => {
            this.props.onCheckList(id);
        }

        return (
            <div className='card'>
                <h1 className='card-title'>Todo List</h1>
                <div className='lists'>
                    {
                        this.props.lists.map((list) => {
                            return (
                                <div className='list' key={list.id}>
                                    <div className='list-details'>
                                        <input type="checkbox" name="checkbox" onChange={() => handleCheck(list.id)} />
                                        <p className={`list-text ${list.isChecked ? 'deleted' : ''}`} >{list.text}</p>
                                    </div>
                                    <button className='delete' onClick={() => handleDelete(list.id)}>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default List;
