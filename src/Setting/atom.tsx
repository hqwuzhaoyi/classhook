import { atom } from "jotai";
import { useUpdateAtom, useAtomValue } from "jotai/utils";
import { Radio } from "antd";
import { useEngine } from "../hook";

type ValueOf<T> = T[keyof T];

export type AlgorithmType = "addition" | "subtraction";

export const Algorithm: Record<string, AlgorithmType> = {
  add: "addition",
  subtract: "subtraction",
};

export class SettingAtom {
  public algorithm = {
    value: atom<ValueOf<typeof Algorithm>>(Algorithm.add),
    change: atom(null, (get, set, update: ValueOf<typeof Algorithm>) => {
      set(this.algorithm.value, update);
    }),
  };
}

export const useSettingAtom = () => {
  const engine = useEngine();
  const algorithm = useAtomValue(engine.setting.algorithm.value);
  const changeAlgorithm = useUpdateAtom(engine.setting.algorithm.change);

  return {
    algorithm,
    changeAlgorithm,
  };
};
