import './SideMenu.css';
import { Link } from 'react-router-dom';
import { TrendingUp, Home, PermIdentity, Storefront,
MailOutline, ChatBubbleOutline,AccountBalanceWallet, ChromeReaderMode, TripOrigin } from '@material-ui/icons';


const SideMenu = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/' className='link'>
                            <li className='sidebarListItem'>
                                <Home /> &nbsp;
                                Home
                            </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <TrendingUp /> &nbsp;
                            Sales
                        </li>
                    </ul>
                </div>   
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                     <ul className='sidebarList'>
                         <Link to='/users' className='link'>
                            <li className='sidebarListItem'>
                                <PermIdentity /> &nbsp;
                                Users
                            </li>
                         </Link>
                        <Link to='/products' className='link'>
                            <li className='sidebarListItem '>
                                <Storefront /> &nbsp;
                                Products
                            </li>
                        </Link>
                         <li className='sidebarListItem'>
                            <AccountBalanceWallet /> &nbsp;
                            Transactions
                         </li>
                         <li className='sidebarListItem'>
                             <ChromeReaderMode /> &nbsp;
                             Reports
                         </li> 
                     </ul>
                </div>  
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notifications</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem'>
                            <MailOutline /> &nbsp;
                            Mail
                        </li>
                        <li className='sidebarListItem '>
                            <TripOrigin /> &nbsp;
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleOutline /> &nbsp;
                            Messages
                        </li>
                    </ul>
                </div>    
            </div>         
        </div>    
    )
}
export default SideMenu;
