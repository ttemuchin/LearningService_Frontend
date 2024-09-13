import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const NotFoundPage: React.FC = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // задержка
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (redirect) {
    return <Navigate to="/" />; // Замените "/target-path" на нужный маршрут
  }

  return (
    <>
      <div>Page not found, redirect to main</div>
    </>
  );
};

export default NotFoundPage;
