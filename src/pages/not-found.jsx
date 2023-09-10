import {useRouteError} from "react-router-dom";

const NotFoundPage = () => {
	const error = useRouteError();

	return (
		<div className="flex justify-center items-center min-h-screen flex-col">
			<h1 className="text-3xl font-bold text-blue-600">Oops!</h1>
			<p className="font-medium text-slate-500 text-xl my-3">something went wrong.</p>
			<p className="font-medium text-slate-500">
				{error.status} {error.message}
			</p>
		</div>
	)
}

export default NotFoundPage;