import { useState } from "react";

import Tour from './Tour';

const Tours = (props) => {
    const [tours, setTours] = useState(props.tours);

    const removeTour = (tourId) => {
        const newList = tours.filter(tour => tour.id != tourId);
        setTours(newList);
    }

  return (
    <section>
        <ul>
            {tours.map((tour) => {
                return (
                    <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
                );
            })}
        </ul>
        <hr />
        <button className="btn" onClick={props.getTours}>Refresh</button>
    </section>
  )
}
export default Tours