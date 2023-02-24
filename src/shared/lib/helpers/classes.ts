type Options = {
  cls: string;
  mods?: Record<string, boolean>;
  additional?: string[];
};

export const classes = ({ cls, mods, additional }: Options) =>
  [cls]
    .concat(
      Object.entries(mods || {})
        .filter(([_k, v]) => v)
        .map(([key]) => key)
    )
    .concat(additional || [])
    .join(" ");
