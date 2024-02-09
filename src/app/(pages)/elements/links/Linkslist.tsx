import Link003 from "./(examples)/link_003/link_003";
import Link004 from "./(examples)/link_004/link_004";
import Link005 from "./(examples)/link_005/link_005";
import Link01 from "./(examples)/link_001/Link001";
import Link02 from "./(examples)/link_002/link_002";

type LinkProps = JSX.Element;

export const Linklist: Array<LinkProps> = [
  <Link01 />,
  <Link02 />,
  <Link003 />,
  <Link004 />,
  <Link005 />,
];
