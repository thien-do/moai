import { ReactNode } from "react";
import { Button1Gallery } from "./button-1";
import { Button2Gallery } from "./button-2";
import { Button3Gallery } from "./button-3";
import { CheckboxGallery } from "./checkbox";
import { DialogGallery } from "./dialog";
import { Input1Gallery } from "./input-1";
import { Input2Gallery } from "./input-2";
import { PaginationGallery } from "./pagination";
import { PaneGallery } from "./pane";
import { ProgressGallery } from "./progress";
import { SelectGallery } from "./select";
import { TabGallery } from "./tab";
import { TableGallery } from "./table";
import { TextAreaGallery } from "./text-area";
import { ToastGallery } from "./toast";
import { TooltipGallery } from "./tooltip";
import s from "./widget.module.css";

const Heading = ({ children }: { children: ReactNode }): JSX.Element => (
	<div>
		<h2 className="text-xl font-semibold py-4 leading-24">{children}</h2>
	</div>
);

export const WidgetGallery = () => (
	<div className={[s.container, "grid gap-x-16 gap-y-32"].join(" ")}>
		<Heading>Buttons</Heading>
		<Button1Gallery />
		<Button3Gallery />
		<Button2Gallery />
		<Heading>Text fields</Heading>
		<Input1Gallery />
		<Input2Gallery />
		<TextAreaGallery />
		<Heading>Selection controls</Heading>
		<SelectGallery />
		<CheckboxGallery />
		<PaginationGallery />
		<Heading>Feedback</Heading>
		<ToastGallery />
		<TooltipGallery />
		<ProgressGallery />
		<Heading>Containers</Heading>
		<DialogGallery />
		<PaneGallery />
		<TabGallery />
		<Heading>Tables</Heading>
		<div className={s.table}>
			<TableGallery />
		</div>
	</div>
);
