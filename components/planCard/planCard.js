import React from 'react';
import { ThemeContext, themes } from '../../theme/theme';
import { HowWorksCardDiv,  HowWorksCardDescr, HowWorksCardNum, HowWorksCardTitle } from '../howWorksCard/styles';
import { PlanCardDescr } from './styles';
import ImageGreenLight from '../imageGreenLight/imageGreenLight';

const PlanCard = ({ style, number, image, title, children }) => {

    return <ThemeContext.Consumer>
        {({theme}) => (
            <HowWorksCardDiv color={theme == themes.light ? "linear-gradient(0deg, #FFFFFF, #FFFFFF), rgba(85, 117, 109, 0.05);" : "#0C0D1B"} style={style || {}}>
                <ImageGreenLight src={image} />
                <PlanCardDescr color={theme == themes.light ? "#162329" : "white"}>{children}</PlanCardDescr>
            </HowWorksCardDiv>
        )}
    </ThemeContext.Consumer>
}

export default PlanCard;