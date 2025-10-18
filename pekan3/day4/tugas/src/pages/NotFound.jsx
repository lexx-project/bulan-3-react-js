const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-gray-800">404</h1>
        <p className="mb-8 text-xl text-gray-600">Page Not Found</p>
        <p className="text-gray-500">
          The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
