import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12 text-center ">
      <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mb-8">
        <div className="absolute inset-0 bg-yellow-50 blur-[100px] rounded-full scale-60 animate-pulse"></div>

        <div className="relative transform hover:rotate-2 transition-transform duration-500">
          <h2 className="text-[120px] md:text-[160px] font-black leading-none bg-clip-text text-transparent bg-sky-500 drop-shadow-2xl selection:bg-none">
            404
          </h2>

          <div className="absolute -top-4 -right-2 md:right-10 animate-bounce">
            <div className="bg-sky-500 text-black text-xs md:text-sm px-4 py-2 rounded-full shadow-lg font-bold border border-gray-700">
              Page Not Found!
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg space-y-4 z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Whoops! You have drifted away.
        </h1>

        <p className="text-base md:text-lg text-gray-500 max-w-sm mx-auto leading-relaxed">
          The link you followed might be broken, or the page has moved to a new
          secret location.
        </p>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/"
          className="btn btn-ghost btn-md md:btn-lg px-8 text-white bg-black hover:bg-neutral/5 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Go Back Home
        </Link>

        <Link
          href="/contact"
          className="btn btn-ghost btn-md md:btn-lg px-8 text-white bg-black hover:bg-neutral/5 hover:text-gray-900"
        >
          Report Issue
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
