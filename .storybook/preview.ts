import type { Preview } from "@storybook/react";
import GlobalStyle from '../src/globalcss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      withThemeFromJSXProvider: {
        GlobalStyle
      }
    },
   
  },
};


export default preview;
