import React, { useState, useEffect } from 'react';

const Alert = ({ type, message }) => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDismissed(true);
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, []);

  if (dismissed) {
    return null; // Don't render the alert if dismissed
  }

  return (
    <div
      className={`${
        type === 'success'
          ? 'bg-green-100 text-green-800'
          : type === 'error'
          ? 'bg-red-100 text-red-800'
          : 'bg-blue-100 text-blue-800'
      } border-l-4 border-solid border  p-3 mb-4`}
      role="alert"
    >
      <p>{message}</p>
     
    </div>
  );
};

export default Alert;
