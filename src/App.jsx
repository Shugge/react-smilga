import { useEffect, useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getTours = async () => {
    setIsLoading(true);
    try {
      const tours = await fetch(url);
      const response = await tours.json(); 
      if(tours.ok) {
        setData(response);
        console.log(response);
        setIsLoading(false);
      }
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getTours();
  }, []);

  return (
    <div>
      {isLoading ? <Loading/> : <Tours tours={data} getTours={getTours}/>}
    </div>
  );
};
export default App;
