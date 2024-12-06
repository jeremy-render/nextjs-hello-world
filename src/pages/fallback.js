export default function Fallback() {
	return (
	  	<div>
			<h1>Oops, something went wrong!</h1>
			<p>We couldn't load the necessary assets. Please refresh the page or try again later.</p>
			<button onClick={() => window.location.reload()}>Refresh Page</button>
	  	</div>
	);
};