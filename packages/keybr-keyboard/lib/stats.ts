import { type CodePoint } from "@keybr/unicode";
import { type Keyboard } from "./keyboard.ts";
import { type KeyShape } from "./keyshape.ts";
import { type Ngram1, type Ngram2 } from "./ngram.ts";
import { type ZoneId } from "./types.ts";

export type KeyboardStats = {
  readonly homeRow: number;
  readonly topRow: number;
  readonly bottomRow: number;
  readonly handSwitches: number;
  readonly fingerSwitches: number;
};

export function computeStats(
  keyboard: Keyboard,
  ng1: Ngram1,
  ng2: Ngram2,
): KeyboardStats {
  return {
    homeRow: keysInZone("home"),
    topRow: keysInZone("top"),
    bottomRow: keysInZone("bottom"),
    handSwitches: handSwitches(),
    fingerSwitches: fingerSwitches(),
  };

  function keysInZone(zone: ZoneId): number {
    let a = 0;
    let b = 0;
    for (const { a: x, f } of ng1) {
      const key = getShape(x);
      if (key != null) {
        if (key.isZone(zone)) {
          a += f;
        } else {
          b += f;
        }
      }
    }
    return a / (a + b);
  }

  function handSwitches(): number {
    let a = 0;
    let b = 0;
    for (const { a: x, b: y, f } of ng2) {
      const shape0 = getShape(x);
      const shape1 = getShape(y);
      if (
        shape0 != null &&
        shape1 != null &&
        shape0.hand != null &&
        shape1.hand != null
      ) {
        if (shape0.hand !== shape1.hand) {
          a += f;
        } else {
          b += f;
        }
      }
    }
    return a / (a + b);
  }

  function fingerSwitches(): number {
    let a = 0;
    let b = 0;
    for (const { a: x, b: y, f } of ng2) {
      const shape0 = getShape(x);
      const shape1 = getShape(y);
      if (
        shape0 != null &&
        shape1 != null &&
        shape0.finger != null &&
        shape1.finger != null
      ) {
        if (shape0.finger !== shape1.finger) {
          a += f;
        } else {
          b += f;
        }
      }
    }
    return a / (a + b);
  }

  function getShape(codePoint: CodePoint): KeyShape | null {
    const combo = keyboard.getCombo(codePoint);
    return combo == null ? null : keyboard.getShape(combo.id);
  }
}
