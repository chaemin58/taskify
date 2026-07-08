/* eslint-disable import-x/no-default-export */
// Default: `*.svg` imports are React components (via @svgr/webpack).
declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// `*.svg?url` imports return the asset URL string, for use with `next/image`.
declare module "*.svg?url" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
