import _fs from "fs";
import _path from "path";

/**
 * @callback pathCallback
 * @param {string} path
 */

/**
 * Walk all children of path recursively and trigger the callback if they are
 * leaf dirs (dirs with no child dir)
 * @param {string} path
 * @param {pathCallback} callback
 * @returns {void}
 */
export const walkLeafDirs = (callback, path) => {
	const dirs = _fs
		.readdirSync(path)
		.map((name) => _path.resolve(path, name))
		.filter((path) => _fs.statSync(path).isDirectory());
	if (dirs.length === 0) {
		callback(path); // Leaf dir
	} else {
		dirs.forEach(walkLeafDirs.bind(null, callback)); // Not leaf
	}
};
