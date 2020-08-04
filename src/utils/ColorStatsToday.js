import { ChooseIcon } from "./ChooseIcon";

export const ColorStatsToday = (arrowDirection) => {
    let color;
    let icon;
    if (arrowDirection){
        color = 'green'
        icon = ChooseIcon('Up')
    } else{
        color = 'red'
        icon = ChooseIcon('Down')
    }
    return {color, icon}
}