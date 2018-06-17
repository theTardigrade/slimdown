module.exports = ( markdown : string ) => {
	let tokens = Tokenizer.tokenize(markdown),
		bodyNode = Parser.parse(tokens);
	
	return bodyNode.toString();
};
