import { paramCase } from "change-case";
import fs from "fs";
import path from "path";

import { replace, replaceFileName } from "../utils/template";

/**
 * Generates component index file
 *
 * @param {string} key The key to replace
 * @param {string} componentName The component name
 * @example
 * generateIndexFile("name", name);
 * @returns {any} File path and content.
 */
export const generateIndexFile = (key: string, componentName: string) => {
  const templateIndexPath = path.resolve(__dirname, "../templates/index/index.ts.txt");

  const templateIndex = fs.readFileSync(templateIndexPath, { encoding: "utf-8" });

  return {
    path: path.basename(replaceFileName(templateIndexPath, key, componentName)),
    content: replace(templateIndex, key, componentName, paramCase),
  };
};

/**
 * Generates component story file
 *
 * @param {string} key The key to replace
 * @param {string} componentName The component name
 * @example
 * generateStoryFile("name", name);
 * @returns {any} File path and content.
 */
export const generateStoryFile = (key: string, componentName: string) => {
  const templateStoryPath = path.resolve(__dirname, "../templates/react-native-story/__name__.stories.tsx.txt");

  const templateStory = fs.readFileSync(templateStoryPath, { encoding: "utf-8" });

  return {
    path: path.basename(replaceFileName(templateStoryPath, key, componentName)),
    content: replace(templateStory, key, componentName),
  };
};

/**
 * Generates component test file
 *
 * @param {string} key The key to replace
 * @param {string} componentName The component name
 * @example
 * generateTestFile("name", name);
 * @returns {any} File path and content.
 */
export const generateTestFile = (key: string, componentName: string) => {
  const templateTestPath = path.resolve(__dirname, "../templates/react-native-test/__name__.test.tsx.txt");

  const templateTest = fs.readFileSync(templateTestPath, { encoding: "utf-8" });

  return {
    path: path.basename(replaceFileName(templateTestPath, key, componentName)),
    content: replace(templateTest, key, componentName),
  };
};

/**
 * Generates component file
 *
 * @param {string} key The key to replace
 * @param {string} componentName The component name
 * @example
 * generateComponentFile("name", name);
 * @returns {any} File path and content.
 */
export const generateComponentFile = (key: string, componentName: string) => {
  const templateComponentPath = path.resolve(__dirname, "../templates/react-native-component/__name__.tsx.txt");

  const templateComponent = fs.readFileSync(templateComponentPath, { encoding: "utf-8" });

  return {
    path: path.basename(replaceFileName(templateComponentPath, key, componentName)),
    content: replace(templateComponent, key, componentName),
  };
};
