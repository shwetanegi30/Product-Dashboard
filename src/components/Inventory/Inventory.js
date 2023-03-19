import './Inventory.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const Inventory = () => {
    return (
        <div className='inventory'>
            <div className='inventoryItem'>
                <span className='inventoryTitle'>Revenue</span>
                <div className='inventoryMoneyContainer'>
                    <span className='inventoryMoney'>$3</span>
                    <span className='inventoryMoneyRate'> -11.4 <ArrowDownward className='inventoryIcon negative' /></span>       
                </div>
                <span className='inventorySub'>Compared to last month</span>
            </div>
            <div className='inventoryItem'>
                <span className='inventoryTitle'>Sales</span>
                <div className='inventoryMoneyContainer'>
                    <span className='inventoryMoney'>$6,415</span>
                    <span className='inventoryMoneyRate'> -1.4 <ArrowDownward className='inventoryIcon negative' />
                    </span>       
                </div>
                <span className='inventorySub'>Compared to last month</span>
            </div>
            <div className='inventoryItem'>
                <span className='inventoryTitle'>Cost</span>
                <div className='inventoryMoneyContainer'>
                    <span className='inventoryMoney'>$3,225</span>
                    <span className='inventoryMoneyRate'> +2.4 <ArrowUpward className='inventoryIcon' />
                    </span>       
                </div>
                <span className='inventorySub'>Compared to last month
                </span>
            </div>
        </div>
    )
}

export default Inventory;
