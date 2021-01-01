import { Icon, IconPath, Select, SelectOption } from "@moai/core";
import { useState } from "react";
import * as bp from "@moai/icon/bp";
import * as hrs from "@moai/icon/hrs";
import * as hro from "@moai/icon/hro";

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

const Sample = ({ path }: { path: IconPath }): JSX.Element => (
	<div className="p-8">
		<Icon display="block" path={path} />
	</div>
);

const options: SelectOption<object>[] = [
	{ id: "bp", label: "Blueprint", value: bp },
	{ id: "hro", label: "Hero Outline", value: hro },
	{ id: "hrs", label: "Hero Solid", value: hrs },
];

export const GalleryIcon = () => {
	const [group, setGroup] = useState<object>(bp);
	return (
		<div className="space-y-16">
			<div className="space-x-8 flex items-center">
				<Select value={group} setValue={setGroup} options={options} />
				<p>Moai works with any icon set!</p>
			</div>
			<div className="flex flex-wrap -m-8">
				{Object.keys(group).map((key) => (
					<Sample key={key} path={(group as any)[key]} />
				))}
			</div>
		</div>
	);
};
