import React from "react";

export default function MemberForm(props){
    const {values, update, submit } = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        name='name'
                        type='text'
                        placeholder="Type your Name"
                        maxLength='30'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                        name='email'
                        type='email'
                        placeholder='Type your Email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select value={values.role} name="role" onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='Backend Engineer'>Backend Engineer</option>
                        <option value='Frontend Engineer'>Frontend Engineer</option>
                        <option value='Designer'>Designer</option>
                        <option value='Full Stack Engineer'>Full Stack Engineer</option>
                        <option value='Cloud Engineer'>Cloud Engineer</option>
                        <option value='Project Manager'>Project Manager</option>
                        <option value='CTO'>CTO</option>
                        <option value='Architect'>Architect</option>
                    </select>
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )






}