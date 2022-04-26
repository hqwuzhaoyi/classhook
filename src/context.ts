import { createContext } from "react";
import Engine from "./Engine";

export const DesignerEngineContext = createContext<Engine>(new Engine());
