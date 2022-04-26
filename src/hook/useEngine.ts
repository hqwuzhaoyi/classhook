import { DesignerEngineContext } from "../context";
import { useContext } from "react";

export const useEngine = () => {
  const engine = useContext(DesignerEngineContext);
  return engine;
};
