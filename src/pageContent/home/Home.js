import Inventory from '../../components/Inventory/Inventory';
import NewMember from '../../components/memberJoin/MemberJoin';
import CustomerTrans from '../../components/customerTrans/CustomerTrans';
import './home.css';


const Home = () => {
    return (
        <div className='home'>
            <Inventory />
            <div className='homeWidgets'>
                <NewMember />
                <CustomerTrans />
            </div>
        </div>
    )
}

export default Home;
