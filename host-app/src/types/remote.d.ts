import type * as React from "react";

declare module "remote_app/Button" {
    const Button: React.FC<{
      text: string;
    }>;
    export default Button;
  }


  declare module "remote_app/Header" {
    const Header: React.FC;
    export default Header;
  }
