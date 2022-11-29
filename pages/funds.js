import React from 'react';
import { SectionBlock, SmallTitleText, TitleText } from '../styles';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Page from '../components/page/page';


export async function getStaticProps({ locale }) {
    return {
        props: {
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
            </SectionBlock>
        </Page>
    )
}
