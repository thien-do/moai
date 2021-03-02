// A trick to ensure all files in "_gallery" use the same ".." when then need
// to import core components. We have a config for Rollup to not bundle ".."
// into the "_gallery" bundle.
//
// Note that we did try to config Rollup to avoid not only ".." but also "../.."
// but it didn't work (the "../.." is translated to "../../..").
//
// Also note that this is not the entry point of "@moai/core/dist/_gallery".
// It is the "gallery.tsx" one
export * from "..";
