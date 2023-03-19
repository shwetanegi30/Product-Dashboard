import './newUser.css';


const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>New User</h1>
            <form className='newUserForm'>
                <div className='newUserFormItem'>
                    <label>Username</label>
                    <input type='text' placeholder='Kely' />
                </div>
                <div className='newUserFormItem'>
                    <label>Full Name</label>
                    <input type='text' placeholder='Kely Welter' />
                </div>
                <div className='newUserFormItem'>
                    <label>Email</label>
                    <input type='text' placeholder='kele77@hotmail.com' />
                </div>
                <div className='newUserFormItem'>
                    <label>Password</label>
                    <input type='password' placeholder='password' />
                </div>
                <div className='newUserFormItem'>
                    <label>Phone</label>
                    <input type='text' placeholder='+1 546 687 12' />
                </div>
                <div className='newUserFormItem'>
                    <label>Address</label>
                    <input type='text' placeholder='New York | USA' />
                </div>
                <div className='newUserFormItem'>
                    <label>Gender</label>
                    <div className='newUserGender'>
                        <input type='radio' name='gender' id='male' value='male'/>
                        <label htmlFor='male'>Male</label>
                        <input type='radio' name='gender' id='female' value='female'/>
                        <label htmlFor='female'>Female</label>
                        <input type='radio' name='gender' id='other' value='other'/>
                        <label htmlFor='other'>Other</label>
                    </div>
                </div>
                <div className='newUserFormItem buttom'>
                    <label>Active</label>
                    <select className='newUserSelect' name='active' id='active'>
                        <option value='yes'>Yes</option>
                        <option value='no'>No</option>
                    </select>
                </div>
                <button className='newUserButton'>Create</button>
            </form>     
        </div>
    )
}

export default NewUser;
