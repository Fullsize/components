// (filenames: string[]) => string | string[] | Promise<string | string[]>
module.exports = {
  "*.{ts,tsx,js,jsx}": (filenames) => [`eslint ${filenames.join(" ")} --fix`]
};
