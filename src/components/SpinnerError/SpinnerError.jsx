import './SpinnerError.css';

const Image = ({ img }) => {
  return <img src={img.src} alt={img.alt} />;
};

const LoadingImg = '/src/assets/spinner.gif';

const ErrorImg = '/src/assets/error.gif';

export const Spinner = () => {
  return (
    <section className="ah-loading">
      <Image img={{ src: LoadingImg, alt: 'Loading' }} />
      <h2>Loading...</h2>
    </section>
  );
};

export const ErrorApi = () => {
  return (
    <section className="ah-error">
      <Image img={{ src: ErrorImg, alt: 'Error' }} />
      <h2>
        The use of this demo API is limited
        <br />
        If you see this message, the limit has been reached, wait a few minutes and try
        again.
      </h2>
    </section>
  );
};

export const ErrorActive = (name) => {
  return (
    <section className="ah-error">
      <Image img={{ src: ErrorImg, alt: 'Error' }} />
      <h2>
        The rover&nbsp;
        {name}
        &nbsp;is not currently active.
        <br />
        It may be due to a device failure or the rover has completed its mission.
      </h2>
    </section>
  );
};

export const ErrorDate = () => {
  return (
    <section className="ah-error">
      <Image img={{ src: ErrorImg, alt: 'Error' }} />
      <h2>
        There are no images for this date&nbsp;
        <br />
        Please choose another one.
      </h2>
    </section>
  );
};
