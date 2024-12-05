import { useEffect, useState } from 'react';
import { myServerAction } from '../app/actions/myActions';

export default function Home() {
	const [instanceInfo, setInstanceInfo] = useState(null);

	async function handleClick() {
		await myServerAction("Test Data");
	};

	useEffect(() => {
		fetch('/api/instance')
			.then((res) => res.json())
			.then((data) => setInstanceInfo(data));
	}, []);

	return (
		<div>
			<h1>Hello from Next</h1>
			<button onClick={handleClick}>Call Server Action</button>
			{instanceInfo && (
				<pre>{JSON.stringify(instanceInfo, null, 2)}</pre>
			)}
			<img src="/handsomeman.png" alt="Test Image" width="200" />
		</div>
	);
}
