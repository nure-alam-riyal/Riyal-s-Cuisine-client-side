
import PropTypes from 'prop-types'
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
const FoodCard = ({ food }) => {
    const { _id,
        foodQuantity,
        foodPhoto, foodName, foodCategory,
        purchaseCount } = food || {}
    return (
        <div className="card glass ">
           <Fade direction='down'>
           <figure>
                <img className='w-full h-80 rounded-lg' referrerPolicy='no-referrer'
                    src={foodPhoto}
                    alt={foodName}/>
            </figure>
            <div className="card-body flex">
               <div className='flex-1'>
                 <h2 className="card-title">Food Name:{foodName}</h2>
                <p>Food Category:{foodCategory}</p>
                <div className='flex justify-between'><p>Purchesed:{purchaseCount}</p> <p>Quantity:{foodQuantity}</p></div>
               </div>
                <div className="card-actions justify-end bottom">
                    <Link to={`/food/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
           </Fade>
        </div>
    );
};
FoodCard.propTypes = {
    food: PropTypes.object
}
export default FoodCard;