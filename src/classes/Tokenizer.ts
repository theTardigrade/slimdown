
class Tokenizer {
	static readonly SCANNERS : ReadonlyArray<any> = Object.freeze([
		SimpleScanner,
		TextScanner
	]);

	public static tokenize( markdown : string ) : TokenList {
		return new TokenList(this._tokensAsArray(Util.trimSpace(markdown)));
	}

	private static _tokensAsArray( markdown : string ) : Array<Token> {
		if (!markdown.length) {
			return [Token.newEndOfFile()];
		}

		let token : Token = this._scanOneToken(markdown);
		
		return [token].concat(this._tokensAsArray(markdown.slice(token.length)))
	}

	private static _scanOneToken( markdown : string ) : Token {
		for (let i = 0, l = Tokenizer.SCANNERS.length; i < l; ++i) {
			let scanner : any = Tokenizer.SCANNERS[i],
				token : Token = scanner.fromString(markdown);
			
			if (!token.isNull) {
				return token;
			}

			i += token.length;
		}

		throw new Error("Could not scan token.");
	}
}
