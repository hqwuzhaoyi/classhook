import { atom, useAtom } from "jotai";

export class AtomState {
  constructor(parentListAtom) {
    this.parentListAtom = parentListAtom;
  }

  priceAtom = atom(10);

  addAtom = atom(
    (get) => get(this.priceAtom) * 2, // it's a convention to pass `null` for the first argument
    (get, set, update) => {
      // `update` is any single value we receive for updating this atom
      set(this.priceAtom, get(this.priceAtom) + update(get(this.priceAtom)));
    }
  );

  deleteAtom = atom(null, (get, set) => {
    const parentListAtom = get(this.parentListAtom);
    set(
      this.parentListAtom,
      parentListAtom.filter((atom) => atom !== this)
    );
  });
}

interface CounterProps {
  atom: AtomState;
}

export function Counter({ atom }: CounterProps) {
  const [count, setCount] = useAtom(atom.addAtom);
  const [, handleDelete] = useAtom(atom.deleteAtom);
  console.log(count);
  return (
    <h1>
      {count}
      <button
        onClick={() =>
          setCount((c) => {
            return c + 1;
          })
        }
      >
        one up
      </button>
      <button
        onClick={() => {
          handleDelete();
        }}
      >
        delete my self
      </button>
    </h1>
  );
}
