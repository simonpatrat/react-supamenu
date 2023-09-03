export const camelToDashCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
