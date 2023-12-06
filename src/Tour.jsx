import { useState } from "react";

const Tour = (props) => {
  const {tour, removeTour} = props;
  const [isReadMore, setIsReadMore] = useState(false);

  return (
    <li>
        <h4>{tour.name}</h4>
        <img src={tour.image} alt={tour.name} style={{width: '75px', height: '75px'}} />
        <div>
            <p>{isReadMore && tour.info}</p>
            <button className="btn" onClick={() => setIsReadMore(!isReadMore)}>
                {!isReadMore ? 'Read more' : 'Close'}
            </button>
            <small>{`\$${tour.price}`}</small>
        </div>
        <button className="btn" onClick={() => removeTour(tour.id)}>Remove</button>
    </li>
  )
}
export default Tour