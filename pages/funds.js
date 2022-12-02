import React from 'react';
import cookie from "cookie";
import { FundsSection, FundsShadow1, FundsShadow2, FundsText, FundsTitle, SectionBlock, SmallTitleText, TitleText } from '../styles';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/page/page';
import { ThemeContext } from '../theme/theme';
import FundsHeader from '../components/fundsHeader/fundsHeader';


export async function getServerSideProps({ req, locale }) {
    return {
        props: {
            _theme: cookie.parse(req.headers.cookie || "").theme || "Light",
            ...(await serverSideTranslations(locale, ['common', 'header'])),
            // Will be passed to the page component as props
        },
    };
}

export default function Funds(props) {
    return (
        <Page {...props}>
            <SectionBlock>
                <SmallTitleText>Мы лучшие в своём деле</SmallTitleText>
                <TitleText>Ввод и вывод средств</TitleText>
                <ThemeContext.Consumer>
                    {({ theme }) => (
                        <>
                            <FundsShadow1 />
                            <FundsShadow2 />
                            <FundsSection theme={theme.name}>
                                <FundsTitle>Условия и правила платежей Mintxchange</FundsTitle>
                                <FundsHeader number={1}>Платежи</FundsHeader>
                                <FundsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla non augue dolor adipiscing. Turpis tempor egestas purus neque, pulvinar amet. Quis rutrum lectus placerat egestas. Nulla fermentum dignissim sed sed elementum, fermentum erat tortor enim. Eget sagittis, id non lorem. Aliquam, pulvinar nulla massa ullamcorper quam et proin laoreet habitant. Ac dolor enim a faucibus risus dui. Sit sagittis accumsan nam arcu nunc auctor convallis velit. A urna viverra pulvinar mauris aliquam.</FundsText>
                                <FundsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla non augue dolor adipiscing. Turpis tempor egestas purus neque, pulvinar amet. Quis rutrum lectus placerat egestas. Nulla fermentum dignissim sed sed elementum, fermentum erat tortor enim. Eget sagittis, id non lorem. Aliquam, pulvinar nulla massa ullamcorper quam et proin laoreet habitant. Ac dolor enim a faucibus risus dui. Sit sagittis accumsan nam arcu nunc auctor convallis velit. A urna viverra pulvinar mauris aliquam.</FundsText>
                                <FundsHeader number={2}>Комиссии</FundsHeader>
                                <FundsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla non augue dolor adipiscing. Turpis tempor egestas purus neque, pulvinar amet. Quis rutrum lectus placerat egestas. Nulla fermentum dignissim sed sed elementum, fermentum erat tortor enim. Eget sagittis, id non lorem. Aliquam, pulvinar nulla massa ullamcorper quam et proin laoreet habitant. Ac dolor enim a faucibus risus dui. Sit sagittis accumsan nam arcu nunc auctor convallis velit. A urna viverra pulvinar mauris aliquam.</FundsText>
                                <FundsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla non augue dolor adipiscing. Turpis tempor egestas purus neque, pulvinar amet. Quis rutrum lectus placerat egestas. Nulla fermentum dignissim sed sed elementum, fermentum erat tortor enim. Eget sagittis, id non lorem. Aliquam, pulvinar nulla massa ullamcorper quam et proin laoreet habitant. Ac dolor enim a faucibus risus dui. Sit sagittis accumsan nam arcu nunc auctor convallis velit. A urna viverra pulvinar mauris aliquam.</FundsText>
                            </FundsSection>
                        </>
                    )}
                </ThemeContext.Consumer>
            </SectionBlock>
        </Page>
    )
}
