import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from '../logo.svg'

export default function BlogDetail() {
	const [article, setArticle] = useState({});
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);
	const params = useParams();

	console.log(params);

	useEffect(() => {
		async function getArticle() {
			// const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
			const request = await fetch(`http://localhost:8080/terminal/${params.id}`);
			// console.log(request);

			if (!request.ok) {
				return setNotFound(true);
			}
			const response = await request.json();

			document.title = response.title;
			setArticle(response);
			setLoading(false);

			// console.log(response);
		}
		getArticle();
	}, [params]);

	if (notFound) {
		return <h1>Artikel tidak ditemukan</h1>;
	}

	return (
		<section className="section">
			{/* <img src="../logo.svg" alt='gambarr'/> */}
			{loading ? (
				<i>Loading article ...</i>
			) : (
				<article className="article">
					<h1 className="article-title">{article.title}</h1>
					<time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
					<img src={article.imageUrl} alt={article.title} className="article-image" />
					<p className="article-summary">{article.summary}</p>
					<p className="article-source">
						Source:{' '}
						<a href={article.url} target="_blank" rel="noreferrer">
							{article.newsSite}
						</a>
					</p>
				</article>
			)}
		</section>
	);
}
