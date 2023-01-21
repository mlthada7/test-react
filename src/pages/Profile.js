import { useEffect } from 'react';

export default function Profile() {
	useEffect(() => {
		document.title = 'Profile';
	}, []);

	return (
		<section className="section">
			<h1 className="section-title">Ini halaman profile</h1>
			<p className="section-description">saya uzumaki naruto pangkat cunin konoha</p>
		</section>
	);
}
