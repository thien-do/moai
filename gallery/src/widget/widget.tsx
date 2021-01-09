import { Pane, Section } from "../section/section";
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

/*
		<Section title="Buttons">
		</Section>
		<Section title="Text boxes">
		</Section>
		<Section title="Selection controls">
		</Section>
		<Section title="Feedback">
		</Section>
		<Section title="Containers">
		</Section>
		<Section title="Tables">
		</Section>
*/

export const WidgetGallery = () => (
	<div className="grid">
		<Button1Gallery />
		<Button3Gallery />
		<Button2Gallery />
		<Input1Gallery />
		<Input2Gallery />
		<TextAreaGallery />
		<SelectGallery />
		<CheckboxGallery />
		<PaginationGallery />
		<ToastGallery />
		<TooltipGallery />
		<ProgressGallery />
		<DialogGallery />
		<PaneGallery />
		<TabGallery />
		<div>
			<TableGallery />
		</div>
	</div>
);
