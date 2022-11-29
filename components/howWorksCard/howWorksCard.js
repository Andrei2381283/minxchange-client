import React from 'react';
import { ThemeContext, themes } from '../../theme/theme';
import ImageGreenLight from '../ImageGreenLight/ImageGreenLight';
import { HowWorksCardDescr, HowWorksCardDiv, HowWorksCardNum, HowWorksCardTitle } from './styles';

const HowWorksCard = ({ style, number, image, title, children }) => {

    return <ThemeContext.Consumer>
        {({theme}) => (
            <HowWorksCardDiv color={theme == themes.light ? "linear-gradient(0deg, #FFFFFF, #FFFFFF), rgba(85, 117, 109, 0.05);" : "#0C0D1B"} style={style || {}}>
                <HowWorksCardNum color={theme == themes.light ? "#FFFFFF" : "#00004A"}>{number}</HowWorksCardNum>
                <ImageGreenLight src={image} />
                <HowWorksCardTitle>{title}</HowWorksCardTitle>
                <HowWorksCardDescr color={theme == themes.light ? "#162329" : "#53555E"}>{children}</HowWorksCardDescr>
            </HowWorksCardDiv>
        )}
    </ThemeContext.Consumer>
}

export default HowWorksCard;