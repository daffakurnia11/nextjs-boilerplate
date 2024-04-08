import type { Preview } from "@storybook/react";

import "../src/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Style Guide", "Typography", "Button", "*"]
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
