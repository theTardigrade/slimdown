
class Token {
	private _type : string;
	private _value : string;

	constructor( type : string, value : string ) {
		this._type = type;
		this._value = value;
	}

	get type() : string { return this._type; }
	set type( type : string ) { this._type = type; }

	get value() : string { return this._value; }
	set value( value : string ) { this._value = value; }

	get length() : number { return this._value.length; }

	get isNull() : boolean { return this._type === "NULL"; }
	get isEndOfFile() : boolean { return this._type === "EOF"; }

	toString() : string {
		return `[TOKEN type="${ this._type }" value="${ this._value }"]`;
	}

	static newEndOfFile() {
		return new Token("EOF", "");
	}

	static newNull() {
		return new Token("NULL", "");
	}
}