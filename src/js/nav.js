import React from "react";

import IrokoLogo from "./irokoLogo"

import { TopNav } from "./styledComponents";

function Nav() {
    return (
      <TopNav>
        <IrokoLogo></IrokoLogo>
        <i class="fas fa-ellipsis-h"></i>
      </TopNav>
    );
}

export default Nav;