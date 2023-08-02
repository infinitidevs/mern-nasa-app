import { ErrorActive, ErrorApi, ErrorDate, Spinner } from '../../components/SpinnerError/SpinnerError';
import { API_KEY, ROVER_URL, getPhotos } from '../../utils/api';
import './Rover.css'
import React, { useEffect, useState } from 'react'

const Rover = () => {
  const [date, setDate] = useState('');

  const roverUrl = `${ROVER_URL}?api_key=${API_KEY}`;
  const roverCuriosityUrl= `${ROVER_URL}curiosity/photos?earth_date=${date}&api_key=${API_KEY}`;

  const [generalInfo, setGeneralInfo] = useState({});

  const [generalInfoError, setGeneralInfoError] = useState(false);

  const [generalInfoSpinner, setGeneralInfoSpinner] = useState(true);

  
  const [curiosityInfo, setCuriosityInfo] = useState({});

  const [curiosityInfoError, setCuriosityInfoError] = useState(false);

  const [curiosityInfoSpinner, setCuriosityInfoSpinner] = useState(true);

  useEffect(() => {
    getPhotos(roverUrl)
      .then((data) => {
        setGeneralInfo(data.rovers[0]);
        setDate(data.rovers[0].max_date);
      })
      .catch(() => setGeneralInfoError(true))
      .finally(() => setGeneralInfoSpinner(false));
  }, []);
  
  useEffect(() => {
      getPhotos(roverCuriosityUrl, true)
      .then((data) => { 
        setCuriosityInfo(data);
      })
      .catch(() => setCuriosityInfoError(true))
      .finally(() => setCuriosityInfoSpinner(false));
  }, [date])

  const roverText =
    "Curiosity is a rover that was sent to Mars to determine if the Red Planet ever had the proper conditions for microbial life to survive. To find out, NASA sent the Curiosity rover to Mars. Curiosity is the largest robot to ever land on another planet. It is about the size of a small SUV. Curiosity landed in Gale Crater. This crater is special because it has a tall mountain in the middle. The mountain has many layers of rock. Each layer is made of different minerals from different time periods. These minerals could tell scientists about the history of water on Mars. Scientists sent Curiosity to Mars to measure lots of other things, too—including radiation. Radiation is a type of energy that can come from the sun. It travels in high-energy waves that can be harmful to living things. Curiosity found that Mars has high, dangerous levels of radiation. NASA will use Curiosity's radiation data to design missions to be safer for human explorers. Curiosity brought 17 cameras with it to the Red Planet—more than any other rover. It uses some of its cameras to take photos of its journey. Cameras also act as Curiosity's eyes, helping it to spot and stay away from danger. One of Curiosity's cameras—at the end of its 7 foot long robotic arm—even acts like a sort of “selfie stick.” It can hold the camera two meters away and take a selfie to send back to Earth!";

  if (generalInfoError || curiosityInfoError) {
    return <ErrorApi/>;
  };

  if (generalInfoSpinner || curiosityInfoSpinner) {
    return <Spinner/>;
  };

  if (generalInfo?.status !== 'active') {
    return <ErrorActive name={generalInfo.name}/>; 
  };

  return (
    <main 
      className='ah-rover' 
      style={{ flexDirection: curiosityInfo?.length < 1 ? 'column' : 'row' }}
    >
      <img 
        className='ah-rover__image' 
        src= {curiosityInfo[0]?.img_src}
        alt={curiosityInfo[0]?.camera?.name}
      />
      <section className='ah-rover__info'>
        <article className='ah-rover__heading'>
          <h2>Rover: {generalInfo?.name}</h2>
          <input 
            id='date'
            className='ah-rover__date'             
            type="date" 
            name="date"
            max={generalInfo?.max_date}
            min='2023-01-01'
            value={date}
            onChange={(event) => {
              setDate(event.target.value.toLocaleString());
            }}
          />
        </article>
        {curiosityInfo?.length < 1 ? (
          <ErrorDate/>
        ) : (
          <section className='ah-rover__photo'>
            <h2 className='ah-rover__cameraName'>{curiosityInfo[0]?.camera?.full_name}</h2>
            <p className='ah-rover__text'>{roverText}</p>
          </section>
        )}
      </section>
    </main>
  );
};

export default Rover;