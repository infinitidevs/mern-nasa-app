export const API_KEY = import.meta.env.VITE_APP_NASA_API_KEY;

export const APOD_URL = import.meta.env.VITE_APP_NASA_API_APOD_URL;

export const ROVER_URL = import.meta.env.VITE_APP_NASA_API_ROVER_URL;

export const getPhotos = async (url, shouldIncludePhotosProp = false) => {
	try {
        const response = await fetch(url);
        const data = await response.json();
        return shouldIncludePhotosProp ? data?.photos : data;
      } catch (error) {
        return error;
      }
};