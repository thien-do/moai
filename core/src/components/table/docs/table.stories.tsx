import { Meta } from "@storybook/react";
// import { Button } from "../../button/button";
import { Table } from "../table";
// import s from "./table.stories.module.css";
import { TableColumn } from "./fake-table-column";

export default {
	title: "Components/Table",
	component: Table,
	subcomponents: { Table, TableColumn },
} as Meta;

export const Primary = () => (
	<div>ahihi</div>
)
