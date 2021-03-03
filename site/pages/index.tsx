import { Gallery } from "@moai/core/dist/_gallery";
import "@moai/core/dist/_gallery/bundle.css";
import { IconGallery } from "../components/icon/icon";
import s from "./index.module.css";

const Index = (): JSX.Element => (
	<div>
		<Gallery />
		{/* <div style={{ gridColumn: "1 / -1" }}> */}
		<IconGallery />
		{/* </div> */}
	</div>
);

export default Index;
