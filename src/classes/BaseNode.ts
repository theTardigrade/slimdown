
class BaseNode {
	public type : string;
	public text : string;
	public consumed : number;
	public childNodes : Array<BaseNode>;
	public isNull : boolean;

	constructor( type : string, text : string, consumed? : number, childNodes? : Array<BaseNode> ) {
		this.type = type;
		this.text = ((childNodes && childNodes.length) ? "" : text);
		this.consumed = consumed || 0;
		this.childNodes = ((childNodes) ? childNodes : []);
		this.isNull = (type === "NULL");
	}

	static newNull() : BaseNode {
		return new BaseNode("NULL", "");
	}

	public toString() : string {
		if (this.isNull) {
			return "";
		}

		let type = this.type.toUpperCase(),
			tagNames = [];

		switch (type) {
		case "PARAGRAPH":
			tagNames.push("p");
			break;
		case "EMPHASIZED_BOLD_TEXT":
			tagNames.push("strong");
			/* fallthrough */
		case "EMPHASIZED_TEXT":
			tagNames.push("em");
			break;
		case "BOLD_TEXT":
			tagNames.push("strong");
			break;
		}

		let string = "";
		
		for (let i = 0, l = tagNames.length; i < l; ++i) {
			string += `<${ tagNames[i] }>`;
		}
	
		if (this.text.length) {
			string += this.text;
		} else {
			let childNodes = this.childNodes;
			for (let i = 0, l = childNodes.length; i < l; ++i) {
				string += childNodes[i].toString();
			}
		}

		for (let i = tagNames.length - 1; i >= 0; --i) {
			string += `</${ tagNames[i] }>`;
		}

		return string;
	}
}
