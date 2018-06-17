class Util {
	private static _isSpace( char : string ) {
		switch (char) {
		case " ":
		case "\n":
		case "\r":
		case "\t":
		case "\v":
		case "\f":
			return true;
		}

		return false;
	}

	public static trimSpace( text : string ) {
		let initialStartIndex = 0,
			initialEndIndex = text.length - 1,
			startIndex = initialStartIndex,
			endIndex = initialEndIndex;

		while (startIndex <= endIndex) {
			if (!Util._isSpace(text.charAt(startIndex))) {
				break;
			}

			++startIndex;
		}

		while (endIndex > startIndex) {
			if (!Util._isSpace(text.charAt(endIndex))) {
				break;
			}

			--endIndex;
		}

		return (
			(startIndex > initialStartIndex || endIndex < initialEndIndex)
				? text.slice(startIndex, endIndex + 1)
				: text 
		);
	}
}