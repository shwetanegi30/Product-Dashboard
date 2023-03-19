import { CalendarToday, LocationCity, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import './user.css';

const User = () => {
    return (
        <div className='user'> 
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddButton'>Create</button>
                </Link>
                
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img src='https://www.prismia.co/blog/wp-content/uploads/2019/03/emprendedoras-mujeres-empoderadas-cursos-taller-prismia-academy-negocios-proposito-03.jpg' 
                        alt='user avatar' 
                        className='userShowImg'
                        />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Anna Becker</span>
                            <span className='userShowUserTitle'>Software Engineer</span>
                        </div>
                    </div>

                    <div className='userShowBottom'>
                        <span className='userShowTitle'>
                            Account Details
                        </span>
                       <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>
                                annabock71
                            </span>
                       </div>
                       <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>
                                10.12.1999
                            </span>
                       </div>
                       <span className='userShowTitle'>
                            Contact Details
                        </span>
                       <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon' />
                            <span className='userShowInfoTitle'>
                                +1 123 456 25
                            </span>
                       </div>
                       <div className='userShowInfo'>
                            <MailOutline className='userShowIcon' />
                            <span className='userShowInfoTitle'>
                                annabock7@hotmail.com
                            </span>
                       </div>
                       <div className='userShowInfo'>
                            <LocationCity className='userShowIcon' />
                            <span className='userShowInfoTitle'>
                                San Francisco | USA
                            </span>
                       </div>
                    </div>    
                </div>

                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateFormLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input
                                    type='text'
                                    placeholder='annabock71'
                                    className='userUpdateInput'
                                />
                                <label>Fullname</label>
                                <input
                                    type='text'
                                    placeholder='Anna Becker'
                                    className='userUpdateInput'
                                />
                                <label>Email</label>
                                <input
                                    type='text'
                                    placeholder='annabock7@hotmail.com
                                    '
                                    className='userUpdateInput'
                                />
                                <label>Phone</label>
                                <input
                                    type='text'
                                    placeholder='+1 123 456 25'
                                    className='userUpdateInput'
                                />
                                <label>Address</label>
                                <input
                                    type='text'
                                    placeholder='San Francisco | USA'
                                    className='userUpdateInput'
                                />
                            </div>
                        </div>

                        <div className='userUpdateFormRight'>
                            <div className='userUpdateUpload'>
                                <img src='https://www.prismia.co/blog/wp-content/uploads/2019/03/emprendedoras-mujeres-empoderadas-cursos-taller-prismia-academy-negocios-proposito-03.jpg'
                                alt='register' 
                                className='userUpdateImage'
                                />
                                <label htmlFor='fileInput'>
                                    <Publish className='userUpdateIcon'/> 
                                </label>
                                <input type='file' 
                                    id='fileInput' 
                                    style={{ display: 'none' }} 
                                />
                            </div>
                            <button className='userUpdateButton'>Update</button>
                        </div>           
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
