import { useEffect } from "react";
import { Gallery } from "../components/gallery/gallery";

const Index = (): JSX.Element => {
	useEffect(() => {
		const dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (!dark) return;
		const cls = window.document.documentElement.classList;
		cls.remove("light");
		cls.add("dark");
	});
	return <Gallery />;
};

export default Index;
