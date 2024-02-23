import Cursor001 from "./(examples)/cursor_001/cursor_001";
import Cursor002 from "./(examples)/cursor_002/cursor_002";
import Cursor003 from "./(examples)/cursor_003/cursor_003";

type Button = { component: JSX.Element; draft: boolean };

export const CursorsList: Array<Button> = [
  { component: <Cursor001 />, draft: false },
  { component: <Cursor002 />, draft: false },
  { component: <Cursor003 />, draft: false },
];

export const FinishedCursors = CursorsList.filter(
  (cursor) => cursor.draft === false
);

export const CursorCount = CursorsList.length;
