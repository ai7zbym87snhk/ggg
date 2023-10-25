export type Example = {
	id: number;
	inputText: string;
	outputText: string;
	explaination?: string;
	img?: string;
};

// local problem data
export type Problem = {
	id: string;
	title: string;
	problemStatement: string;
	examples: Example[];
	constraints: string;
	order: number;
	starterCode: string;
	handlerFunction: ((fn: any) => boolean) | string;
	starterFunctionName: string;
};

export type DBProblem = {
	id: string;
	title: string;
	cetegory: string;
	difficulty: string;
	likes: number;
	dislikes: number;
	order: number;
	videoid?: string;
	link?: string;
};
