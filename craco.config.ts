const CracoAlias = require("craco-alias");

export const plugins = [
	{
		plugin: CracoAlias,
		options: {
			source: "tsconfig",
			baseUrl: ".",
			tsConfigPath: "./tsconfig.extend.json",
		},
	},
];
