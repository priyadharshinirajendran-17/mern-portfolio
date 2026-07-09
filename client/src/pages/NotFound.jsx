import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-6xl font-bold gradient-text">404</p>
      <h1 className="text-2xl font-semibold text-text-primary">Page not found</h1>
      <p className="max-w-sm text-text-muted">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-4">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
