import { useNavigate } from 'react-router-dom';

const useBackNavigation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
    window.location.reload();
  };

  return handleBack;
};

export default useBackNavigation;
