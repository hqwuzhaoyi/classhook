import { atom, useAtom } from "jotai";
import { Counter, AtomState } from "./Atom";


const listAtom = atom<AtomState[]>([]);

const createAtom = atom(null, (get, set, update) => {
  set(listAtom, get(listAtom).concat(new AtomState(listAtom)));
});

function App() {
  const [list] = useAtom(listAtom);
  const [, create] = useAtom(createAtom);

  return (
    <div>
      {list.map((atom) => (
        <Counter atom={atom} />
      ))}

      <button onClick={create}>create</button>
    </div>
  );
}

export default App;
