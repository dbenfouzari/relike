/**
 * Generates content for index file.
 *
 * It displays a warning and prepares the file.
 *
 * @param   {string} folder     The target folder
 * @param   {string} [excluded] If files where excluded
 * @example
 * generateWarning("src/components", "index.ts,.storybook")
 * @returns {string}            File content
 */
export const generateWarning = (folder: string, excluded?: string) => {
  const base = "// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.";
  let command = `yarn hastics generate:index ${folder}`;
  if (excluded) command += ` --exclude ${excluded}`;

  return `${base}
// Run \`${command}\` to generate again.

`;
};
