import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
	render() {
		return (
			<Html lang="en" className="light">
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default Document;
