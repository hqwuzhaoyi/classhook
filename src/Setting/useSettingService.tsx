// atom 是否放在模块内，还是集中放置
// 应该分开放置，作为SOA
import { useSettingAtom, Algorithm } from "./atom";
import { Radio } from "antd";

const options = Object.values(Algorithm);

export const useSettingService = () => {
  const { algorithm, changeAlgorithm } = useSettingAtom();

  const algorithmOptions = (
    <Radio.Group
      onChange={(e) => changeAlgorithm(e.target.value)}
      value={algorithm}
    >
      {options.map((algorithm) => (
        <Radio value={algorithm}>{algorithm}</Radio>
      ))}
    </Radio.Group>
  );

  return {
    algorithmOptions,
  };
};
