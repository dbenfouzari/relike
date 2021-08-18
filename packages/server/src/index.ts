import { nanoid } from 'nanoid';

export function helloWorld(name: string) {
  return `Hello World to ${name} with uniqueID ${nanoid()}`;
}

export function goodByeWorld(name: string) {
  return `Good bye ${name} !`;
}
