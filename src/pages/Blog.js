import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import articles from '../../public/data/terminal'
import articles from '../data/terminal'


export default function Blog() {
	// const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
	  console.log(articles)
	}, [])
	

	// useEffect(() => {
	// 	document.title = 'Blog';

	// 	async function getArticles() {
	// 		// const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
	// 		const request = await fetch('http://localhost:8080/terminal');

	// 		const response = await request.json();
	// 		console.log(response);

	// 		setArticles(response);
	// 		setLoading(false);
	// 	}
	// 	getArticles();
	// }, []);

	return (
		<section className="section">
			<h1 className="section-title">Ini halaman blog</h1>
			<p className="section-description">Ini adalah isi kontentnya:</p>

			{loading && <i>loading articles ...</i>}
			{!loading && (
				<div className="articles">
					{articles.map((article) => (
						<article key={article.id} className="article">
							<h3 className="article-title">
								<Link to={`/blog/${article.id}`}>{article.title}</Link>
							</h3>
							<time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
							<img src={article.imageUrl} alt={article.title} className="article-image"/></article>
					))}
				</div>
			)}
		</section>
	);
}
