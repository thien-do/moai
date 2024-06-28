// import { DayPickerInputProps } from "react-day-picker/types/Props";

// export interface DateInputFormat {
// 	placeholder: string;
// 	parse: DayPickerInputProps["parseDate"];
// 	format: DayPickerInputProps["formatDate"];
// }

// /** Split arr to year month day respectively */
// type Split = (arr: string[]) => [string, string, string];

// // A modified of the default handler of react-day-picker
// // https://github.com/gpbl/react-day-picker/blob/5615f547abbfa37b4ea3044ec14bd5c917de48c5/src/DayPickerInput.js#L62
// const makeParse =
// 	(foo: Split) =>
// 	(str: string): Date | undefined => {
// 		if (typeof str !== "string") return undefined;
// 		const parts = str.split(/[./ _-]+/);
// 		if (parts.length !== 3) return undefined;

// 		const [syear, smonth, sday] = foo(parts);
// 		const year = parseInt(syear, 10);
// 		const month = parseInt(smonth, 10) - 1;
// 		const day = parseInt(sday, 10);

// 		if (isNaN(year) || String(year).length > 4) return undefined;
// 		if (isNaN(day) || day <= 0 || day > 31) return undefined;
// 		if (isNaN(month) || month < 0 || month >= 12) return undefined;

// 		// Always set noon to avoid time zone issues
// 		const date = new Date(year, month, day, 12, 0, 0, 0);
// 		// https://stackoverflow.com/questions/5863327/tips-for-working-with-pre-1000-a-d-dates-in-javascript
// 		date.setFullYear(year);
// 		return date;
// 	};

// const splitDate = (date: Date): [string, string, string] => {
// 	const year = date.getFullYear();
// 	const month = date.getMonth() + 1;
// 	const day = date.getDate();
// 	return [year.toString(), month.toString(), day.toString()];
// };

// const ymd: DateInputFormat = {
// 	placeholder: "yyyy/mm/dd",
// 	parse: makeParse((arr) => {
// 		const [year, month, day] = arr;
// 		return [year, month, day];
// 	}),
// 	format: (date): string => {
// 		const [year, month, day] = splitDate(date);
// 		return `${year}/${month}/${day}`;
// 	},
// };

// const dmy: DateInputFormat = {
// 	placeholder: "dd/mm/yyyy",
// 	parse: makeParse((arr) => {
// 		const [day, month, year] = arr;
// 		return [year, month, day];
// 	}),
// 	format: (date): string => {
// 		const [year, month, day] = splitDate(date);
// 		return `${day}/${month}/${year}`;
// 	},
// };

// const mdy: DateInputFormat = {
// 	placeholder: "mm/dd/yyyy",
// 	parse: makeParse((arr) => {
// 		const [month, day, year] = arr;
// 		return [year, month, day];
// 	}),
// 	format: (date): string => {
// 		const [year, month, day] = splitDate(date);
// 		return `${month}/${day}/${year}`;
// 	},
// };

// export const dateInputFormats = { dmy, mdy, ymd };
