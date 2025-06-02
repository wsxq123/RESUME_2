import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  });

  return <div>ErrorPage</div>;
};

export default ErrorPage;
