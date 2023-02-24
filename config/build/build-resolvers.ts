import path from "path";
import { ResolveOptions } from "webpack";

export const buildResolvers = (): ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        alias:{
            'pages':path.resolve(__dirname,'../../src/pages'),
            'app':path.resolve(__dirname,'../../src/app'),
            'shared':path.resolve(__dirname,'../../src/shared'),
        }
    };
};
