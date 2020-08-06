import React, { useContext } from "react";
import { ColorStatsToday } from "../utils/ColorStatsToday";
import { ChooseIcon } from "../utils/ChooseIcon";

import ThemeMode from "../Context";

import "../css/SecondaryCard.css";

export const SecondaryCard = ({
  socialNetwork = "Facebook",
  nameStats = "Likes",
  countStats = 87,
  isUp = true,
  percentageUpOrDown = 0,
}) => {
  const iconAndColor = ColorStatsToday(isUp);
  const stylesCount = `secondaryCard__statsWithIcon--data ${iconAndColor.color}`;
  const iconSocialNetwork = ChooseIcon(socialNetwork, "iconNetwork");

  let { mode } = useContext(ThemeMode);

  return (
    <div className={`SecondaryCard ${mode}`}>
      <div className="secondaryCard__statsWithText">
        <h4 className="secondaryCard__statsWithText--title">{nameStats}</h4>
        <span className="secondaryCard__statsWithText--count">
          {countStats}
        </span>
      </div>
      <div className="secondaryCard__statsWithIcon">
        <div className="secondaryCard__statsWithIcon--icon">
          {iconSocialNetwork}
        </div>
        <div className={stylesCount}>
          <span>{iconAndColor.icon}</span>
          <span className="secondaryCard__statsWithIcon--count">
            {percentageUpOrDown}%
          </span>
        </div>
      </div>
    </div>
  );
};
