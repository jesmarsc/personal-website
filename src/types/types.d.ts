declare module '*.svg' {
  const inlineSrc: string;
  export default inlineSrc;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
