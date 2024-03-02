import Link003 from "./(examples)/link_003/link_003";
import Link004 from "./(examples)/link_004/link_004";
import Link005 from "./(examples)/link_005/link_005";
import Link01 from "./(examples)/link_001/Link001";
import Link02 from "./(examples)/link_002/link_002";
import Link006 from "./(examples)/link_006/link_006";
import Link007 from "./(examples)/link_007/Link_007";
import Link008 from "./(examples)/link_008/Link_008";
import Link009 from "./(examples)/link_009/link_009";
import Link010 from "./(examples)/link_010/link_010";
import Link011 from "./(examples)/link_011/link_011";
import Link012 from "./(examples)/link_012/link_012";
import Link013 from "./(examples)/link_013/link_013";
import Link014 from "./(examples)/link_014/link_014";
import Link015 from "./(examples)/link_015/link_015";

type LinkProps = { component: JSX.Element; draft: boolean };

export const Linklist: Array<LinkProps> = [
  { component: <Link01 />, draft: false },
  { component: <Link02 />, draft: false },
  { component: <Link003 />, draft: false },
  { component: <Link004 />, draft: false },
  { component: <Link005 />, draft: false },
  { component: <Link006 />, draft: false },
  { component: <Link007 />, draft: false },
  { component: <Link008 />, draft: false },
  { component: <Link009 />, draft: false },
  { component: <Link010 />, draft: false },
  { component: <Link011 />, draft: false },
  { component: <Link012 />, draft: false },
  { component: <Link013 />, draft: false },
  { component: <Link014 />, draft: false },
  { component: <Link015 />, draft: false },
];

export const FinishedLinks = Linklist.filter((link) => link.draft === false);

export const LinksCount = FinishedLinks.length;
