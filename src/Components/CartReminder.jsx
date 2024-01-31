import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function CartReminder(props)
{
    const clickHandler = () =>
    {
        props.changeCartAdder(false);
    }
    return(
        <>
            <section id="popUpSectionCart">
                <h1>Product Added to Cart Successfully</h1>
                <img src={props.passImage} alt={props.passImage} className='cartReminderImage'/>
                <FontAwesomeIcon icon={faX} className='crossIcon' onClick={clickHandler}/>
            </section>
        </>
    )
}
export default CartReminder;