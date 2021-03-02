import React from "react";

import irokoLogo from "../assests/iroko.svg";
import { LogoContainer, IrokoLogoImg } from "./styledComponents";

const IrokoLogo = () => {
    return (
        <LogoContainer>
          <IrokoLogoImg src={ irokoLogo } alt="Logo"/>
        </LogoContainer>
    );
}

export default IrokoLogo;