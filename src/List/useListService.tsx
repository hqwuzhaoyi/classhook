import { useAtomValue, useSetAtom } from "jotai";
import React from "react";
import { useSettingAtom } from "../atoms";
import { ListItemAtom, useListAtom } from "./atom";
import { useTransition, animated, config } from "react-spring";

interface ListItemProps {
  atom: ListItemAtom;
}

function ListItem({ atom }: ListItemProps) {
  const count = useAtomValue(atom.value);
  const setCount = useSetAtom(atom.operate);
  const handleDelete = useSetAtom(atom.deleteAtom);

  const { algorithm } = useSettingAtom();

  const transitions = useTransition(count, {
    from: { position: "absolute", opacity: 0, transform: "translateY(0)" },
    enter: { opacity: 1, transform: "translateY(0)" },
    leave: { opacity: 0, transform: "translateY(12px)" },
    delay: 200,
    config: config.molasses,
    // onRest: () => set(!toggle),
  });

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {/* <div>
        {transitions(({ opacity, transform }, item) => (
          <animated.div
            style={{
              position: "absolute",
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
              transform: transform,
            }}
          >
            {item}
          </animated.div>
        ))}{" "}
      </div> */}
      {count}
      <button onClick={() => setCount(algorithm)}>change</button>
      <button
        onClick={() => {
          handleDelete();
        }}
      >
        delete my self
      </button>
    </div>
  );
}

export const useListService = () => {
  console.log(useListAtom);
  const { list, create } = useListAtom();
  return (
    <div>
      {list.map((atom) => (
        <ListItem atom={atom} />
      ))}
      <div>
        <button onClick={create}>create</button>
      </div>
    </div>
  );
};
