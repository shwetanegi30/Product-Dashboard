import './header.css';
import { NotificationsNone, Settings } from '@material-ui/icons';

function Header() {
    return (
        <div className='Header'>
            <div className='HeaderWrapper'>
                <div className='HeaderLeft'>
                    <span className='logo'>.Store Company</span>
                </div>
                <div className='HeaderRight'>
                    <div className='HeaderIconsContainer'>
                        <NotificationsNone />
                        <span className='HeaderIconBagde'>2</span>
                    </div>
                    <div className='HeaderIconsContainer'>
                        <Settings />
                    </div>
                    <img src='https://media.licdn.com/dms/image/C5603AQEWw0FH_H6RCw/profile-displayphoto-shrink_800_800/0/1517580260726?e=2147483647&v=beta&t=aNMOb_GobO695V_7He-GNXay-K6apDPjEuWWg3sJSIg' alt='avatar' className='HeaderAvatar' />
                </div>
            </div>
        </div>
    )
}

export default Header;
