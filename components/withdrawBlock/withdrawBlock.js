import Image from 'next/image';
import React, { useState } from 'react';
import { WithdrawBlockBtn, WithdrawBlockBtn3div, WithdrawBlockBtn3divdiv, WithdrawBlockBtnTime, WithdrawBlockContainer, WithdrawBlockDiv, WithdrawBlockDivTitle, WithdrawBlockExchangeImg, WithdrawBlockFirstBlockBtnDiv, WithdrawBlockSubText, WithdrawBlockText, WithdrawBlockTopDiv } from './styles';
import btc from "../../assets/btc.svg";
import exchange from "../../assets/exchange.svg";
import WithdrawBlockSearch from './withdrawBlockSearch/withdrawBlockSearch';
import { ThemeContext } from '../../theme/theme';

const WithdrawBlock = ({ children, style }) => {

    const [giveMode, setGiveMode] = useState(0);
    const changeGiveMode = (mode) => () => setGiveMode(mode);

    const [giveCrypto, setGiveCrypto] = useState(0);
    const changeGiveCrypto = (mode) => () => setGiveCrypto(mode);

    const [getMode, setGetMode] = useState(0);
    const changeGetMode = (mode) => () => setGetMode(mode);

    const [getCrypto, setGetCrypto] = useState(0);
    const changeGetCrypto = (mode) => () => setGetCrypto(mode);

    return <WithdrawBlockContainer>
        <ThemeContext.Consumer>
            {({ theme }) => (
                <>
                    <WithdrawBlockDiv theme={theme.name}>
                        <WithdrawBlockDivTitle>Отдаете</WithdrawBlockDivTitle>
                        <WithdrawBlockTopDiv>
                            <WithdrawBlockBtn selected={giveMode == 0} onClick={changeGiveMode(0)} small >Все</WithdrawBlockBtn>
                            <WithdrawBlockBtn selected={giveMode == 1} onClick={changeGiveMode(1)} small style={{ marginLeft: "0.5rem" }}>₿</WithdrawBlockBtn>
                            <WithdrawBlockBtn selected={giveMode == 2} onClick={changeGiveMode(2)} small style={{ marginLeft: "0.5rem" }}>₽</WithdrawBlockBtn>
                        </WithdrawBlockTopDiv>
                        <WithdrawBlockSearch theme={theme.name} />
                        <WithdrawBlockBtn theme={theme.name} selected={giveCrypto == 0} onClick={changeGiveCrypto(0)} style={{ marginTop: "1rem" }}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={giveCrypto == 1} onClick={changeGiveCrypto(1)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={giveCrypto == 2} onClick={changeGiveCrypto(2)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={giveCrypto == 3} onClick={changeGiveCrypto(3)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={giveCrypto == 4} onClick={changeGiveCrypto(4)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={giveCrypto == 5} onClick={changeGiveCrypto(5)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={giveCrypto == 6} onClick={changeGiveCrypto(6)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={giveCrypto == 7} onClick={changeGiveCrypto(7)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={giveCrypto == 8} onClick={changeGiveCrypto(8)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                        </WithdrawBlockBtn>
                    </WithdrawBlockDiv>
                    <WithdrawBlockDiv theme={theme.name}>
                        <WithdrawBlockDivTitle>Получаете</WithdrawBlockDivTitle>
                        <WithdrawBlockTopDiv>
                            <WithdrawBlockBtn theme={theme.name} selected={getMode == 0} onClick={changeGetMode(0)} small >Все</WithdrawBlockBtn>
                            <WithdrawBlockBtn theme={theme.name} selected={getMode == 1} onClick={changeGetMode(1)} small style={{ marginLeft: "0.5rem" }}>₿</WithdrawBlockBtn>
                            <WithdrawBlockBtn theme={theme.name} selected={getMode == 2} onClick={changeGetMode(2)} small style={{ marginLeft: "0.5rem" }}>₽</WithdrawBlockBtn>
                        </WithdrawBlockTopDiv>
                        <WithdrawBlockSearch theme={theme.name} />
                        <WithdrawBlockBtn theme={theme.name} selected={getCrypto == 0} onClick={changeGetCrypto(0)} style={{ marginTop: "1rem" }}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                            <WithdrawBlockSubText theme={theme.name} selected={getCrypto == 0}>1 258 049. 33</WithdrawBlockSubText>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={getCrypto == 1} onClick={changeGetCrypto(1)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                            <WithdrawBlockSubText theme={theme.name} selected={getCrypto == 1}>1 258 049. 33</WithdrawBlockSubText>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={getCrypto == 2} onClick={changeGetCrypto(2)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                            <WithdrawBlockSubText theme={theme.name} selected={getCrypto == 2}>1 258 049. 33</WithdrawBlockSubText>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={getCrypto == 3} onClick={changeGetCrypto(3)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                            <WithdrawBlockSubText theme={theme.name} selected={getCrypto == 3}>1 258 049. 33</WithdrawBlockSubText>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={getCrypto == 4} onClick={changeGetCrypto(4)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                            <WithdrawBlockSubText theme={theme.name} selected={getCrypto == 4}>1 258 049. 33</WithdrawBlockSubText>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={getCrypto == 5} onClick={changeGetCrypto(5)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                            <WithdrawBlockSubText theme={theme.name} selected={getCrypto == 5}>1 258 049. 33</WithdrawBlockSubText>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name} selected={getCrypto == 6} onClick={changeGetCrypto(6)}>
                            <WithdrawBlockFirstBlockBtnDiv>
                                <Image src={btc} />
                                <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                            </WithdrawBlockFirstBlockBtnDiv>
                            <WithdrawBlockSubText theme={theme.name} selected={getCrypto == 6}>1 258 049. 33</WithdrawBlockSubText>
                        </WithdrawBlockBtn>
                    </WithdrawBlockDiv>
                    <WithdrawBlockDiv theme={theme.name}>
                        <WithdrawBlockDivTitle>Последние обмены</WithdrawBlockDivTitle>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                        <WithdrawBlockBtn theme={theme.name}>
                            <WithdrawBlockBtn3div>
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockExchangeImg src={exchange} />
                                <WithdrawBlockBtn3divdiv>
                                    <WithdrawBlockFirstBlockBtnDiv>
                                        <Image src={btc} />
                                        <WithdrawBlockText>Bitcoin (BTC)</WithdrawBlockText>
                                    </WithdrawBlockFirstBlockBtnDiv>
                                    <WithdrawBlockSubText theme={theme.name}>1 258 049. 33</WithdrawBlockSubText>
                                </WithdrawBlockBtn3divdiv>
                                <WithdrawBlockBtnTime>14:16</WithdrawBlockBtnTime>
                            </WithdrawBlockBtn3div>
                        </WithdrawBlockBtn>
                    </WithdrawBlockDiv>
                </>
            )}
        </ThemeContext.Consumer>
    </WithdrawBlockContainer>
}

export default WithdrawBlock;