import React from 'react';
import classes from './NotFound.module.css';

const NotFound: React.FC = () => {
  return (
    <div className={classes.container}>
      <iframe
        src="https://giphy.com/embed/2CdwFeWTJ2xFK"
        width="300"
        height="400"
        frameBorder="0"
        title="crying"
      ></iframe>

      <h2>Something went wrong :/</h2>
      <h5>
        Try searching for a different ingredients. You can clear your search by
        clicking the logo
      </h5>
    </div>
  );
};

export default NotFound;
