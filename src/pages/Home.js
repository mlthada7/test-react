import { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		document.title = 'Home';
	}, []);

	return (
		<section className="section">
			<h1 className="section-title">Ini halaman home</h1>
			<p className="section-description">
				Halo semua ini adalah website blog belajar pake <code>react</code> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio tempore nemo error voluptas? Minus nihil
				tempora saepe blanditiis.
			</p>
		</section>
	);
}
