import React, {useContext} from 'react'
import { ChooseIcon } from '../utils/ChooseIcon'
import { ColorStatsToday } from '../utils/ColorStatsToday'

import ThemeContext from '../Context'

import '../css/PrincipalCard.css'

export const PrincipalCard = ({socialNetwork = 'Instagram', user = '@nathanf', followerCount = 1987, followerName = 'followers', isUp = true, countFollowersToday = 99 }) => {
    let ColorStats = ColorStatsToday(isUp);
    const icon = ChooseIcon(socialNetwork, 'iconNetwork')
    const {mode} = useContext(ThemeContext)
    if (mode === 'light'){
        socialNetwork += ''
    } else{
        socialNetwork += ' dark'
    }
    return(
        <div className={`principalCard ${socialNetwork}`}>
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