type ModeOptions = "development" | "production";

type BuildPaths = {
  entry: string;
  build: string;
  html: string;
};

export type BuildEnv = {
  mode:ModeOptions;
  port:string;
}

export type BuildOptions = {
  mode: ModeOptions;
  paths: BuildPaths;
  isDev:boolean;
  port:number;
};
