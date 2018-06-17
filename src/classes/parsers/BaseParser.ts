
interface ParserInterface {
	match : any;
}

interface BaseParserMatchStarInteface {
	nodes : Array<BaseNode>;
	consumed : number;
}

class BaseParser {
	static matchFirst( tokens : TokenList, parsers : Array<ParserInterface> ) : BaseNode {
		for (let i = 0, l = parsers.length; i < l; ++i) {
			let node = parsers[i].match(tokens); 

			if (!node.isNull) {
				return node;
			}
		}

		return BaseNode.newNull();
	}

	static matchStar( tokens : TokenList, parser : ParserInterface ) : BaseParserMatchStarInteface {
		let nodes : Array<BaseNode> = [],
			consumed = 0;
		
		for (;;) {
			let node = parser.match(tokens.offset(consumed));

			if (node.isNull) {
				break;
			}

			nodes.push(node);
			consumed += node.consumed;
		}

		return {
			nodes: nodes,
			consumed: consumed
		};
	}
}
