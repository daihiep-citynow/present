// libs
import React, { useContext } from "react";
// components
import RoomLabel from "@/commons/RoomLabel";
// hooks
import { LocalesContext } from "@/hooks/useLocales";
// const
import { roomStatusColor } from "@/constants";

const RoomLabelStaying = () => {
  const { languages } = useContext(LocalesContext);

  return (
    <RoomLabel
      roomStatus={languages["home.controller.staying"]}
      roomColor={roomStatusColor.STAYING}
    />
  );
};

export default RoomLabelStaying;