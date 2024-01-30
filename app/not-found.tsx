import { Suspense } from "react";

const NotFoundPage = () => {
  return (
   <Suspense>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-24 h-24 text-gray-600"
      >
        {/* Add your SVG illustration here */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 1 1-5.656-5.656 4 4 0 0 1 5.656 5.656z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3h4a2 2 0 0 1 2 2v12z"
        />
      </svg>
      <h1 className="text-3xl font-semibold text-gray-800 mt-4">404 - Page Not Found</h1>
    </div>
   </Suspense>
  );
};

export default NotFoundPage;