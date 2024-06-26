import { type Keyboard, KeyboardContext } from "@keybr/keyboard";
import {
  type CSSProperties,
  memo,
  type MouseEventHandler,
  type ReactNode,
  type WheelEventHandler,
} from "react";
import { Patterns } from "./Patterns.tsx";
import { getFrameSize } from "./shapes.tsx";
import * as styles from "./VirtualKeyboard.module.less";

export const VirtualKeyboard = memo(function VirtualKeyboard({
  children,
  keyboard,
  width,
  height,
  style,
  onClick,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseUp,
  onWheel,
}: {
  readonly children?: ReactNode;
  readonly keyboard: Keyboard;
  readonly width?: string;
  readonly height?: string;
  readonly style?: CSSProperties;
  readonly onClick?: MouseEventHandler;
  readonly onMouseDown?: MouseEventHandler;
  readonly onMouseEnter?: MouseEventHandler;
  readonly onMouseLeave?: MouseEventHandler;
  readonly onMouseUp?: MouseEventHandler;
  readonly onWheel?: WheelEventHandler;
}): ReactNode {
  const size = getFrameSize(keyboard);
  return (
    <svg
      className={styles.keyboard}
      viewBox={`0 0 ${size.width} ${size.height}`}
      style={{ aspectRatio: `${size.width}/${size.height}`, ...style }}
      width={width}
      height={height}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onWheel={onWheel}
    >
      <defs>
        <Patterns />
      </defs>
      <rect
        className={styles.frame}
        x={0}
        y={0}
        width={size.width}
        height={size.height}
        rx={10}
        ry={10}
      />
      <KeyboardContext.Provider value={keyboard}>
        {children}
      </KeyboardContext.Provider>
    </svg>
  );
});
