import { atom, useAtom } from "jotai";
import { useUpdateAtom, useAtomValue } from "jotai/utils";
import { useEngine } from "../hook/useEngine";
import type { AlgorithmType } from "../Setting/atom";

export class ListAtom {
  public value = atom<ListItemAtom[]>([]);
  createAtom = atom(null, (get, set, update) => {
    set(this.value, get(this.value).concat(new ListItemAtom(this)));
  });
}


export const useListAtom = () => {
  const engine = useEngine();
  const list = useAtomValue(engine.list.value);
  const create = useUpdateAtom(engine.list.createAtom);
  return {
    list,
    create,
  };
};
console.log(useListAtom)

export class ListItemAtom {
  listAtom: ListAtom;
  constructor(listAtom: ListAtom) {
    this.listAtom = listAtom;
  }

  value = atom(10);

  operate = atom(
    null, // it's a convention to pass `null` for the first argument
    (get, set, update: AlgorithmType) => {
      // `update` is any single value we receive for updating this atom
      if (update === "addition") {
        set(this.value, get(this.value) + 1);
      }
      if (update === "subtraction") {
        set(this.value, get(this.value) - 1);
      }
      // if (SettingAtom) set(this.value, update(get(this.value)));
    }
  );

  deleteAtom = atom(null, (get, set) => {
    const listAtom = get(this.listAtom.value);
    set(
      this.listAtom.value,
      listAtom.filter((atom) => atom !== this)
    );
  });
}
