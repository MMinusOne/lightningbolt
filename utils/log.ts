import { WELCOME_MESSAGE } from "@/constants/console";

export const logConsoleMessages = async () => {
  [WELCOME_MESSAGE].map(console.log);
};
