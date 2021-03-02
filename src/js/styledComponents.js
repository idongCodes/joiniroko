import styled from 'styled-components';

import { debugBorder, irokoBrown, irokoBrownLight, } from './variables';

const TopNav = styled.nav`
    // border: ${ debugBorder };
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    background: ${ irokoBrownLight };

    i {
        color: ${ irokoBrown };
        font-size: 2rem;
    }
`

const LogoContainer = styled.div`
    // border: ${ debugBorder };
    width: 100px;
`

const IrokoLogoImg = styled.img`
    // border: ${ debugBorder };
    width: 100%;
`

export {
    TopNav,
    LogoContainer,
    IrokoLogoImg,
};