import { paramCase, snakeCase } from "change-case";
import fs from "fs";
import path from "path";

import { replace, replaceFileName } from "../utils/template";

export const generateIndexFile = (key: string, componentName: string) => {
  const templateIndexPath = path.resolve(__dirname, "../templates/index/index.ts.txt");

  const templateIndex = fs.readFileSync(templateIndexPath, { encoding: "utf-8" });

  return {
    path: path.basename(replaceFileName(templateIndexPath, key, componentName)),
    content: replace(templateIndex, key, componentName, paramCase),
  };
};

export const generateStyleFile = (key: string, componentName: string) => {
  const templateStylePath = path.resolve(__dirname, "../templates/react-style/__name__.module.scss.txt");

  const templateStyle = fs.readFileSync(templateStylePath, { encoding: "utf-8" });

  return {
    path: path.basename(replaceFileName(templateStylePath, key, componentName)),
    content: replace(templateStyle, key, componentName, snakeCase),
  };
};

export const generateStoryFile = (key: string, componentName: string) => {
  const templateStoryPath = path.resolve(__dirname, "../templates/react-story/__name__.stories.tsx.txt.txt");

  const templateStory = fs.readFileSync(templateStoryPath, { encoding: "utf-8" });

  return {
    path: path.basename(replaceFileName(templateStoryPath, key, componentName)),
    content: replace(templateStory, key, componentName),
  };
};

export const generateTestFile = (key: string, componentName: string) => {
  const templateTestPath = path.resolve(__dirname, "../templates/react-test/__name__.test.tsx.txt");

  const templateTest = fs.readFileSync(templateTestPath, { encoding: "utf-8" });

  return {
    path: path.basename(replaceFileName(templateTestPath, key, componentName)),
    content: replace(templateTest, key, componentName),
  };
};

export const generateComponentFile = (key: string, componentName: string, hasStyle: boolean) => {
  const templateComponentPath = hasStyle
    ? path.resolve(__dirname, "../templates/react-component/__name__(if:style).tsx.txt")
    : path.resolve(__dirname, "../templates/react-component/__name__.tsx.txt");

  const templateComponent = fs.readFileSync(templateComponentPath, { encoding: "utf-8" });

  return {
    path: path.basename(replaceFileName(templateComponentPath, key, componentName)),
    content: replace(templateComponent, key, componentName),
  };
};
