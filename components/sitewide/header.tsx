import H1 from '../atoms/h1';

interface Props { title: string; }

/** site header */
const Header = (props: React.PropsWithChildren<Props>) => (
  <header role="banner">
    <H1>{props.title}</H1>
    {props.children}
  </header>
);

export default Header;
