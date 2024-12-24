// app/not-found.jsx
import Link from 'next/link';

export const metadata = {
  title: "Not Found",
  description: "This page is not found",
};
export default function NotFound() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link href="/">
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
