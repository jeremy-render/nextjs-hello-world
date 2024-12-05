import { useEffect, useState } from 'react';

export default function Home() {
	const [instanceInfo, setInstanceInfo] = useState(null);

	useEffect(() => {
		fetch('/api/instance')
			.then((res) => res.json())
			.then((data) => setInstanceInfo(data));
	}, []);

	return (
		<div>
			<h1>Hello from Next.js!</h1>
			{instanceInfo && (
				<pre>{JSON.stringify(instanceInfo, null, 2)}</pre>
			)}
		</div>
	);
}
