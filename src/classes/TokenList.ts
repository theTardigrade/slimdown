
class TokenList {
	private _tokens : ReadonlyArray<Token>;

	constructor( tokens : Array<Token> ) {
		this._tokens = Object.freeze(tokens.slice(0));
	}

	get first() { return this._tokens[0]; }
	get second() { return this._tokens[1]; }
	get third() { return this._tokens[2]; }
	get fourth() { return this._tokens[3]; }

	public peek( types : Array<string>|string ) : boolean {
		if (typeof types === "string") {
			return this.peek([types]);
		}

		if (!this._tokens.length) {
			return false;
		}

		for (let i = 0, l = types.length; i < l; ++i) {
			if (types[i] !== this._tokens[i].type) {
				return false;
			}
		}

		return true;
	}

	public peek_or( choices : Array<Array<string>>|Array<string> ) : boolean {
		if (typeof choices[0] === "string") {
			return this.peek_or([<Array<string>>choices]);
		}

		for (let i = 0, l = choices.length; i < l; ++i) {
			if (this.peek(choices[i])) {
				return true;
			}
		}

		return false;
	}

	public peek_at( index : number, types : Array<string>|string ) : boolean {
		return this.offset(index).peek(types);
	}

	public offset( index : number ) : TokenList {
		if (index === 0) {
			return this;
		}

		return new TokenList(this._tokens.slice(index));
	}

	get count() { return this._tokens.length; }
}

