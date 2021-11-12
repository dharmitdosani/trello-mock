import { generatePath } from "react-router";

export const ROUTES = {
  HOME: "/",
  NOTIFICATIONS: "/notifications",
  HELP: "/help",
  PROFILE: "/profile",
  BOARD: "/board/:id",
};

export const getBoardRoute = (id) => {
  return generatePath(ROUTES.BOARD, { id });
};
