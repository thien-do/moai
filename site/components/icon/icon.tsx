import * as M from "@moai/core";
import * as bp from "@moai/icon/bp";
import * as hro from "@moai/icon/hro";
import * as hrs from "@moai/icon/hrs";
import s from "./icon.module.css";

interface IconSet {
	name: string;
	link: string;
	// Index in SAMPLE_ICONS
	index: number;
}

const ICON_SETS: IconSet[] = [
	{
		name: "Heroicons Outline",
		link: "https://heroicons.com/",
		index: 1,
	},
	{
		name: "Heroicons Solid",
		link: "https://heroicons.com/",
		index: 2,
	},
	{
		name: "Blueprint",
		link: "https://blueprintjs.com/docs/#icons",
		index: 0,
	},
];

const SAMPLE_ICONS = [
	[bp.Archive, hro.Archive, hrs.Archive],
	[bp.KeyBackspace, hro.Backspace, hrs.Backspace],
	[bp.Bookmark, hro.Bookmark, hrs.Bookmark],
	[bp.Briefcase, hro.Briefcase, hrs.Briefcase],
	[bp.Calculator, hro.Calculator, hrs.Calculator],
	[bp.Calendar, hro.Calendar, hrs.Calendar],
	[bp.Camera, hro.Camera, hrs.Camera],
	[bp.Chat, hro.ChatAlt_2, hrs.ChatAlt_2],
	[bp.TickCircle, hro.CheckCircle, hrs.CheckCircle],
	[bp.CloudDownload, hro.CloudDownload, hrs.CloudDownload],
	[bp.Projects, hro.Collection, hrs.Collection],
	[bp.CreditCard, hro.CreditCard, hrs.CreditCard],
	[bp.Desktop, hro.DesktopComputer, hrs.DesktopComputer],
	[bp.Error, hro.ExclamationCircle, hrs.ExclamationCircle],
	[bp.WarningSign, hro.Exclamation, hrs.Exclamation],
	[bp.EyeOpen, hro.Eye, hrs.Eye],
	[bp.EyeOpen, hro.Eye, hrs.Eye],
	[bp.Flame, hro.Fire, hrs.Fire],
	[bp.FolderNew, hro.FolderAdd, hrs.FolderAdd],
	[bp.Hand, hro.Hand, hrs.Hand],
	[bp.IdNumber, hro.Identification, hrs.Identification],
	[bp.Inbox, hro.Inbox, hrs.Inbox],
	[bp.Key, hro.Key, hrs.Key],
	[bp.MapMarker, hro.LocationMarker, hrs.LocationMarker],
	[bp.Envelope, hro.Mail, hrs.Mail],
	[bp.Paperclip, hro.PaperClip, hrs.PaperClip],
	[bp.Media, hro.Photograph, hrs.Photograph],
	[bp.Phone, hro.Phone, hrs.Phone],
	[bp.Play, hro.Play, hrs.Play],
	[bp.Presentation, hro.PresentationChartBar, hrs.PresentationChartBar],
	[bp.Search, hro.Search, hrs.Search],
	[bp.Share, hro.ShieldCheck, hrs.ShieldCheck],
	[bp.ShoppingCart, hro.ShoppingCart, hrs.ShoppingCart],
	[bp.Lifesaver, hro.Support, hrs.Support],
	[bp.Console, hro.Terminal, hrs.Terminal],
	[bp.ThumbsUp, hro.ThumbUp, hrs.ThumbUp],
	[bp.Tag, hro.Tag, hrs.Tag],
	[bp.Trash, hro.Trash, hrs.Trash],
	[bp.User, hro.UserCircle, hrs.UserCircle],
	[bp.VolumeUp, hro.VolumeUp, hrs.VolumeUp],
];

const Sample = ({ path }: { path: M.IconPath }): JSX.Element => (
	<div className={s.sample}>
		<M.Icon display="block" path={path} />
	</div>
);

interface RowProps {
	set: IconSet;
}

const Name = ({ set }: RowProps): JSX.Element => (
	<a
		className={[M.text.highlightStrong].join(" ")}
		href={set.link}
		target="_blank"
		rel="noopener"
		style={{ width: 160 }}
		children={set.name}
	/>
);

const Samples = ({ set }: RowProps): JSX.Element => (
	<div className={s.samplesContainer}>
		{SAMPLE_ICONS.map((group, index) => (
			<Sample key={index} path={group[set.index]} />
		))}
	</div>
);

const getTableColumns = (): M.TableColumn<IconSet>[] => [
	{
		title: "Icon set",
		className: s.name,
		render: (set) => <Name set={set} />,
	},
	{
		title: "Samples",
		className: s.samples,
		render: (set) => <Samples set={set} />,
	},
];

export const GalleryIcon = () => (
	<div>
		<p className={s.description}>Moai works with any SVG-based icon set!</p>
		<M.DivPx size={16} />
		<M.Pane noPadding>
			<div className={s.table}>
				<M.Table<IconSet>
					rows={ICON_SETS}
					columns={getTableColumns()}
					rowKey={(set) => set.name}
				/>
			</div>
		</M.Pane>
	</div>
);
