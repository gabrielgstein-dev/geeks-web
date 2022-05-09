import 'styled-components';
import {
  Colors,
  FontSize,
  Opacity,
  Padding,
  Radius,
  Shadow,
  ZIndex,
  FontWeight,
} from 'framework/system/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Colors;
    fontSize: typeof FontSize;
    opacity: typeof Opacity;
    padding: typeof Padding;
    radius: typeof Radius;
    shadow: typeof Shadow;
    zIndex: typeof ZIndex;
    fontWeight: typeof FontWeight;
  }
}
