import React, { Fragment } from 'react';
import { SecondaryCard } from './SecondaryCard';

export const ListOfSecondaryCards = () => {
    const SocialNetworks = [
        {
            socialNetwork: 'Facebook',
            nameStats: 'Page Views',
            countStats: 87,
            isUp: true,
            percentageUpOrDown: 3,
        },
        {
            socialNetwork: 'Facebook',
            nameStats: 'Likes',
            countStats: 52,
            isUp: false,
            percentageUpOrDown: 2,
        },
        {
            socialNetwork: 'Instagram',
            nameStats: 'Likes',
            countStats: 5462,
            isUp: true,
            percentageUpOrDown: 2257,
        },
        {
            socialNetwork: 'Instagram',
            nameStats: 'Profile Views',
            countStats: '52K',
            isUp: true,
            percentageUpOrDown: 1375,
        },
        {
            socialNetwork: 'Twitter',
            nameStats: 'Retweets',
            countStats: 117,
            isUp: true,
            percentageUpOrDown: 303,
        },
        {
            socialNetwork: 'Twitter',
            nameStats: 'Likes',
            countStats: 507,
            isUp: true,
            percentageUpOrDown: 553,
        },
        {
            socialNetwork: 'Youtube',
            nameStats: 'Likes',
            countStats: 108,
            isUp: false,
            percentageUpOrDown: 19,
        },
        {
            socialNetwork: 'Youtube',
            nameStats: 'Total Views',
            countStats: 1407,
            isUp: false,
            percentageUpOrDown: 12,
        },
    ]
    return(
        <Fragment>
            {
                SocialNetworks.map((socialNetwork, key) => <SecondaryCard key={key} {...socialNetwork} />)
            }
        </Fragment>
    )
}