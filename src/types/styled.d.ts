import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, string>;
    fonts: Record<string, string>;
  }
}

declare module 'styled-reset' {
  const reset: unknown;
  export default reset;
}