import { SettingAtom } from "./Setting/atom";
import { ListAtom } from "./List/atom";

export default class Engine {
  setting = new SettingAtom();
  list = new ListAtom();
}

// function getContext<R, T extends (...args: any[]) => R>(useFunc: T) {
//   return createContext(null as unknown as R);
// }

// const EngineContext = getContext(Engine);
