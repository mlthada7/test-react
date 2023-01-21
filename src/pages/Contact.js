import { useEffect } from 'react';

export default function Contact() {
	useEffect(() => {
		document.title = 'Contact';
	}, []);

	return (
		<section className="section">
			<h1 className="section-title">Ini halaman contact</h1>
			<p className="section-description">Hubungi saya di:</p>
			<ul>
				<li>WA: 12321321</li>
				<li>email: adsf@gamil.com</li>
			</ul>
			<p className="section-description">ini socmed nya:</p>
			<ul>
				<li>
					<a href="facebook.com">Facebook</a>
				</li>
				<li>
					<a href="twitter.com">twitter</a>
				</li>
			</ul>
		</section>
	);
}
