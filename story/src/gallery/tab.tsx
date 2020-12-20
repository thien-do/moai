import { Tabs } from "../../../core/src";

export const GalleryTab = () => (
	<div>
		<Tabs
			children={[
				{
					id: "published",
					title: "Published",
					pane: () => <div>Published posts</div>,
				},
				{
					id: "draft",
					title: "Drafts",
					pane: () => <div>Drafts</div>,
				},
			]}
		/>
	</div>
);
