import { Meta } from "@storybook/react";
import { DocsPage } from "@storybook/addon-docs/blocks";
// import { Button } from "../../button/button";
import { Table } from "./table";
// import s from "./table.stories.module.css";
import { TableColumn } from "./fake-table-column";
import { TableGallery } from "../../gallery/table/table";

export default {
	title: "Components/Table",
	component: Table,
	subcomponents: { Table, TableColumn },
	parameters: { docs: { page: DocsPage }, stickyPrimary: false },
} as Meta;

export const Primary = () => <TableGallery />;
