import NextDocument, { Head, Html, Main, NextScript } from "next/document";

class Document extends NextDocument {
	render() {
		return (
			<Html className="light">
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
