import Document, { Html, Head, Main, NextScript } from "next/document";
import Favicon from "../components/FavIcon";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="description" content="Victor Chirino personal page" />
					<Favicon />
					<link
						href="https://fonts.googleapis.com/css2?family=Fira+Code&display=optional"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
