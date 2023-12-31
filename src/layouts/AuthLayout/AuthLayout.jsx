import s from "./style.module.css";
import { ReactComponent as LogoSVG } from "assets/images/logo.svg";

export function AuthLayout({ children }) {
  const header = (
    <div className={s.header}>
      <LogoSVG className={s.logoTop} />
      <h3 className={s.logoTitle}>Notomatic</h3>
    </div>
  );
  const background = (
    <div>
      <div className="d-flex">
        <LogoSVG className={s.logo} />
        <h1 className={s.logoTxt}>Notomatic</h1>
      </div>
      <p className={s.subtitle}>One place for the team notes</p>
    </div>
  );
  return (
    <div className={s.root}>
      <div className={s.leftSection}>
        {header}
        {children}
      </div>
      <div className={`${s.rightSection} d-none d-lg-flex`}>{background}</div>
    </div>
  );
}
