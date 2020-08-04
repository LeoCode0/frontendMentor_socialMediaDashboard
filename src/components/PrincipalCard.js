import React from 'react'
import { ChooseIcon } from '../utils/ChooseIcon'
import { ColorStatsToday } from '../utils/ColorStatsToday'

import '../css/PrincipalCard.css'

export const PrincipalCard = ({socialNetwork = 'Instagram', user = '@nathanf', followerCount = 1987, followerName = 'followers', isUp = true, countFollowersToday = 99 }) => {
    let ColorStats = ColorStatsToday(isUp);
    const stylesCard = `principalCard ${socialNetwork}`
    const icon = ChooseIcon(socialNetwork, 'iconNetwork')
    return(
        <div className={stylesCard}>
            <div className="principalCard__social">
                {icon} <span className="principalCard__social--username">{user}</span>
            </div>
            <div className="principalCard__count">
                <span className="principalCard__count--number">
                    {followerCount}
                </span>
                <span className="principalCard__count--name">
                    {followerName}
                </span>
            </div>
            <div className="principalCard__today">
                <span className={ColorStats.color}>{ColorStats.icon} {countFollowersToday} Today</span>
            </div>
        </div>
    )
}