import React from "react";
import { useSettingService } from "./useSettingService";

export const Setting = () => {
  const { algorithmOptions } = useSettingService();
  return <div>{algorithmOptions}</div>;
};
