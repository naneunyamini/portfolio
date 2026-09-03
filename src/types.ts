export type Screen = "home" | "about" | "project";
export type Navigate = (screen: Screen, projectId?: number) => void;
