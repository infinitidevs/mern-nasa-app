import './APOD.css';

import React, { useEffect, useState } from 'react';

import { ErrorApi, Spinner } from '../../components/SpinnerError/SpinnerError';
import { API_KEY, APOD_URL, getPhotos } from '../../utils/api';

const APOD = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [date, setDate] = useState(today);

  const apodUrl = `${APOD_URL}planetary/apod?date=${date}&api_key=${API_KEY}`;

  const [apod, setApod] = useState({});

  const [apodError, setApodError] = useState(false);
  const [apodLoading, setApodLoading] = useState(true);

  useEffect(() => {
    getPhotos(apodUrl)
      .then((data) => setApod(data))
      .catch(() => setApodError(true))
      .finally(() => setApodLoading(false));
  }, [date]);

  if (apodLoading) {
    return <Spinner />;
  }

  if (apodError) {
    return <ErrorApi />;
  }

  return (
    <main className="ah-apod">
      {apod?.media_type === 'video' ? (
        <a
          className="ah-apod__video"
          href={apod?.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="ah-apod__image" src="/src/assets/icons/vimeo.png" alt="APOD" />
        </a>
      ) : (
        <img className="ah-apod__image" src={apod?.url} alt="APOD" />
      )}
      <section className="ah-apod__info">
        <article className="ah-apod__heading">
          <h2 className="ah-apod__title">{apod?.title}</h2>
          <input
            id="date"
            className="ah-date"
            type="date"
            name="date"
            max={today}
            min="2023-01-01"
            value={date}
            onChange={(event) => {
              setDate(event.target.value.toLocaleString());
            }}
          />
        </article>
        <p className="ah-apod__text">{apod?.explanation}</p>
        <h3 className="ah-apod__copyright">
          Copyright:&nbsp;
          {apod?.copyright ? apod?.copyright : ' Public'}
        </h3>
      </section>
    </main>
  );
};

export default APOD;
