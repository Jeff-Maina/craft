import Button006 from "./(examples)/button_006/button_006";
import Button001 from "./(examples)/button_001/Button_001";
import Button002 from "./(examples)/button_002/Button_002";
import Button003 from "./(examples)/button_003/Button_003";
import Button004 from "./(examples)/button_004/Button_004";
import Button005 from "./(examples)/button_005/button_005";
import Button007 from "./(examples)/button_007/button_007";
import Button008 from "./(examples)/button_008/button_008";
import Button009 from "./(examples)/button_009/button_009";

type Button = { component: JSX.Element; draft: boolean };

export const ButtonsList: Array<Button> = [
  { component: <Button001 />, draft: false },
  { component: <Button002 />, draft: false },
  { component: <Button003 />, draft: false },
  { component: <Button004 />, draft: false },
  { component: <Button005 />, draft: false },
  { component: <Button006 />, draft: false },
  { component: <Button007 />, draft: false },
  { component: <Button008 />, draft: false },
  { component: <Button009 />, draft: false },
];

export const FinishedButtons = ButtonsList.filter(
  (button) => button.draft === false
);

export const ButtonCount = FinishedButtons.length;
