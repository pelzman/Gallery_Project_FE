import { useNavigate, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Navigate back to the previous page
  const handleGoBack = () => {
    navigate(-1); // This navigates to the previous page in the history stack
  };

  // Get the current path name for the breadcrumb (last part of the URL)
  const currentPath = location.pathname.split('/').filter(Boolean).pop();

  return (
    <div className="flex items-center space-x-2 py-4">
      <button
        onClick={handleGoBack}
        className="text-red-500 hover:underline"
      >
        Go Back
      </button>
      <span className="text-gray-500">/</span>
      <span className="text-gray-700 capitalize">{currentPath}</span>
    </div>
  );
};

export default Breadcrumb;
