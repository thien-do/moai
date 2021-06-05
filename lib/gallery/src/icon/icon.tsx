import { Icon, IconComponent } from "../../../core/src";
import { AiOutlineHome } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { FiHome } from "react-icons/fi";
import { FcHome } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { GrHome } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi";
import { ImHome } from "react-icons/im";
import { IoHomeOutline } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { RiHomeLine } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";
import { VscHome } from "react-icons/vsc";
import { CgHome } from "react-icons/cg";
import s from "./icon.module.css";

const icons: [IconComponent, string][] = [
	[AiOutlineHome, "Ant Design"],
	[BiHome, "Bootstrap"],
	[FiHome, "Feather"],
	[FcHome, "Flat Color"],
	[FaHome, "Font Awesome"],
	[GoHome, "GitHub Octicons"],
	[GrHome, "Grommet"],
	[HiOutlineHome, "Heroicons"],
	[ImHome, "IcoMoon"],
	[IoHomeOutline, "Ionicons"],
	[MdHome, "Material Design"],
	[RiHomeLine, "Remix"],
	[TiHomeOutline, "Typicons"],
	[VscHome, "VS Code"],
	[CgHome, "css.gg"],
];

export const GalleryIcon = (): JSX.Element => (
	<div className={s.container}>
		<p className={s.text}>
			Some icon sets that work with Moai out of the box, thank to the{" "}
			<a
				href="https://react-icons.github.io/react-icons/"
				target="_blank"
				rel="noreferrer"
				children="React Icons"
			/>{" "}
			project:
		</p>
		<div className={s.grid}>
			{icons.map(([icon, name], index) => (
				<div key={index} className={s.icon}>
					<Icon component={icon} size={24} />
					<span children={name} />
				</div>
			))}
		</div>
	</div>
);
