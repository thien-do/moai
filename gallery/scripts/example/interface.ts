export interface Pokemon {
	id: number;
	name: string;
	image: {
		static: string;
		animated: string;
	};
	weight: number;
	height: number;
	moves: string;
	stats: {
		name: string;
		base: number;
	}[];
	types: string[];
}
