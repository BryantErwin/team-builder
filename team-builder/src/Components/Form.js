import React, {useState} from 'react';

const Form = props => {
    const [member, setMember] = useState({
        name:'',
        role:'',
        email:''
    })

    const changeHandler = e => {
        setMember({...member, [e.target.name]: e.target.value })
    }
    const submitForm = e => {
        e.preventDefault();
        const newMember = {
            ...member,
            id:Date.now()
        }
        props.addNewPerson(newMember);
        setMember({
            name:'',
            role:'',
            email: ''
        })
    }

    return(
        <form onSubmit={submitForm}>
            <h1>Add new member below:</h1>

            <br/>

            <label htmlfor='name'>
                Name:{' '}
            </label>
            <input
                type='text'
                name='name'
                onChange={changeHandler}
                value={member.name}
            />

            <br/>
            <br/>

            <label>
                Email: {' '}
            </label>
            <input
                type='text'
                name='role'
                onChange={changeHandler}
                value={member.role}
            />

            <br/>

            <button type='submit'>Add Person</button>
        </form>
    )
};

export default Form;