import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section className="flex dark:bg-gray-50 dark:text-gray-800 h-screen items-center bg-cool">
	<div className="container flex flex-col items-center justify-center mx-auto my-8 bg-base-100 p-10 w-[90%] max-w-[480px]">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-6xl ">
				<span className="sr-only">Error</span>{error.status}
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">This page is {error.statusText}</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to="/" className="px-8 py-3 font-semibold rounded-sm btn btn-neutral ">Back to homepage</Link>
		</div>
	</div>
</section>
  );
};

export default ErrorPage;