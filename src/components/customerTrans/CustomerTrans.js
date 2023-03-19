import './customerTrans.css';

const CustomerTrans = () => {

    const Button = ({ type }) => {
        return <button className={ 'customerTransButton ' + type }>{ type }</button>
    }


    return (
        <div className='customerTrans'>
             <h3 className='customerTransTitle'>Latest transactions</h3>
             <table className='customerTransTable'>
                 <tr  className='customerTransTr'>
                    <th className='customerTransTh'>Customer</th>
                    <th className='customerTransTh'>Date</th>
                    <th className='customerTransTh'>Amount</th> 
                    <th className='customerTransTh'>Status</th>
                 </tr>
                <tr className='customerTransTr'>
                    <td className='customerTransUser'>
                        <img src='https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTLz9B7DhsERjdgaUuV-DYWfrK-191eOVSfu9DOY7aOjEr06_GNnSiXPyyfi39nFTzjBMstAZAASU_8xi0&psig=AOvVaw12B0sEadbedvj2qvLEcirH&ust=1679291559406000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCCmaiR6f0CFQAAAAAdAAAAABAE' 
                        alt='customers' 
                        className='customerTransImage'
                        />
                        <span className='customerTransName'>Ian sam</span>
                    </td>
                    <td className='customerTransDate'>2 Jun 2021</td>
                    <td className='customerTransAmount'>$122.00</td>
                    <td className='customerTransStatus'>
                        <Button type='Approved' />
                    </td>
                </tr>
                <tr className='customerTransTr'>
                    <td className='customerTransUser'>
                        <img src='https://mujermexico.com/wp-content/uploads/2019/12/1-10.jpg' 
                        alt='customers' 
                        className='customerTransImage'
                        />
                        <span className='customerTransName'>Susan Carel</span>
                    </td>
                    <td className='customerTransDate'>2 Jun 2021</td>
                    <td className='customerTransAmount'>$122.00</td>
                    <td className='customerTransStatus'>
                        <Button type='Declined' />
                    </td>
                </tr>
                <tr className='customerTransTr'>
                    <td className='customerTransUser'>
                        <img src='https://mujermexico.com/wp-content/uploads/2019/12/1-10.jpg' 
                        alt='customers' 
                        className='customerTransImage'
                        />
                        <span className='customerTransName'>Susan Carel</span>
                    </td>
                    <td className='customerTransDate'>2 Jun 2021</td>
                    <td className='customerTransAmount'>$122.00</td>
                    <td className='customerTransStatus'>
                        <Button type='Pending' />
                    </td>
                </tr>
                <tr className='customerTransTr'>
                    <td className='customerTransUser'>
                        <img src='https://www.google.com/url?sa=i&url=http%3A%2F%2Ft2.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcTLz9B7DhsERjdgaUuV-DYWfrK-191eOVSfu9DOY7aOjEr06_GNnSiXPyyfi39nFTzjBMstAZAASU_8xi0&psig=AOvVaw12B0sEadbedvj2qvLEcirH&ust=1679291559406000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCCmaiR6f0CFQAAAAAdAAAAABAE' 
                        alt='customers' 
                        className='customerTransImage'
                        />
                        <span className='customerTransName'>Ian Sam</span>
                    </td>
                    <td className='customerTransDate'>2 Jun 2021</td>
                    <td className='customerTransAmount'>$122.00</td>
                    <td className='customerTransStatus'>
                        <Button type='Approved' />
                    </td>
                </tr>
             </table>
        </div>
    )
}

export default CustomerTrans;

