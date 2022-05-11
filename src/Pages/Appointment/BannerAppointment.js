import chair from '../../assets/images/chair.png'
import backgroundImage from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const BannerAppointment = ({ date, setDate }) => {


    return (
        <div style={{
            background: `url(${backgroundImage})`, backgroundSize: 'cover'
        }} className='grid md:grid-cols-2 py-28 '>
            <div className='order-2 md:order-1'>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />



            </div>
            <div className='order-1 md:order-2 '>
                <img src={chair} alt="" />
            </div>
        </div>
    );
};

export default BannerAppointment;