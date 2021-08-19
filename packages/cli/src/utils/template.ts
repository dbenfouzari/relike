import {
  camelCase,
  constantCase,
  dotCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
} from 'change-case';

// String `Lives down BY the River` conversions.
export enum CaseConverter {
  camelCase = '(camelCase)',       // livesDownByTheRiver
  constantCase = '(constantCase)', // LIVES_DOWN_BY_THE_RIVER
  dotCase = '(dotCase)',           // lives.down.by.the.river
  kebabCase = '(kebabCase)',       // lives-down-by-the-river
  lowerCase = '(lowerCase)',       // livesdownbytheriver
  pascalCase = '(pascalCase)',     // LivesDownByTheRiver
  pathCase = '(pathCase)',         // lives/down/by/the/river
  sentenceCase = '(sentenceCase)', // Lives down by the river
  snakeCase = '(snakeCase)',       // lives_down_by_the_river
}

export const replaceFileName = (fileName: string, key: string, value: string) => {
  // Define my two RegExps that will allow me to replace with correct content.
  const regexWithoutCondition = new RegExp(`__${key}__`, 'gm');
  const regexWithCondition = new RegExp(`__${key}__(\\(if:\\w+\\))`, 'gm');

  // By default, value should be `kebab-case`
  value = paramCase(value);

  // Initialize my final value with initial fileName.
  let result = fileName;

  // We first have to replace the variables with case
  if (regexWithCondition.test(result)) result = result.replace(regexWithCondition, value);

  // Then we replace the final variables.
  if (regexWithoutCondition.test(result)) result = result.replace(regexWithoutCondition, value);

  result = result.replace('.txt', '');

  return result;
};

export const replace = (content: string, key: string, value: string, defaultCase = pascalCase) => {
  // Define my two RegExps that will allow me to replace with correct content.
  const regexWithoutCase = new RegExp(`__${key}__`, 'gm');
  const regexWithCase = new RegExp(`__${key}__(\\(\\w+\\))`, 'gm');

  // By default, value should be `PascalCase`
  value = defaultCase(value);

  // Initialize my final value with initial content.
  let result = content;

  // We first have to replace the variables with case
  if (regexWithCase.test(result)) result = result.replace(regexWithCase, (v, caseConverter) => {
    switch (caseConverter as CaseConverter) {
      case CaseConverter.camelCase:
        return camelCase(value);

      case CaseConverter.constantCase:
        return constantCase(value);

      case CaseConverter.dotCase:
        return dotCase(value);

      case CaseConverter.kebabCase:
        return paramCase(value);

      case CaseConverter.lowerCase:
        return value.toLowerCase().replaceAll(' ', '');

      case CaseConverter.pascalCase:
        return pascalCase(value);

      case CaseConverter.pathCase:
        return pathCase(value);

      case CaseConverter.sentenceCase:
        return sentenceCase(value);

      case CaseConverter.snakeCase:
        return snakeCase(value);

      default:
        throw new Error('Unknown case ' + caseConverter);
    }
  });

  // Then we replace the final variables.
  if (regexWithoutCase.test(result)) result = result.replace(regexWithoutCase, value);

  return result;
};
