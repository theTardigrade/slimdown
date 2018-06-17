const GULP = require("gulp");

GULP.plugins = ((names) => {
		let o = {};
		names.forEach((n) => {
			o[n] = require(["gulp", n].join("-"));
		});
		return o;
	})([
		"typescript",
		"uglify"
	]);

const SCRIPTS_SRC_FILES = [
		"globals.d",
		"classes/Util",
		"classes/Token",
		"classes/TokenList",
		"classes/scanners/SimpleScanner",
		"classes/scanners/TextScanner",
		"classes/Tokenizer",
		"classes/parsers/BaseParser",
		"classes/parsers/PlainTextParser",
		"classes/parsers/EmphasizedBoldTextParser",
		"classes/parsers/EmphasizedTextParser",
		"classes/parsers/BoldTextParser",
		"classes/parsers/SentenceParser",
		"classes/parsers/SentencesAndNewlineParser",
		"classes/parsers/SentencesAndEndOfFileParser",
		"classes/parsers/ParagraphParser",
		"classes/parsers/BlockquoteParser",
		"classes/parsers/BodyParser",
		"classes/parsers/Parser",
		"classes/BaseNode",
		"exports"
	].map((s) => ("src/" + s + ".ts"));
 
GULP.task("scripts", function () {
	return GULP.src(SCRIPTS_SRC_FILES)
		.pipe(GULP.plugins.typescript({
			target: "ES5",
			noImplicitAny: true,
			outFile: "main.js"
		}))
		.pipe(GULP.plugins.uglify({
			mangle: {
				properties: {
					regex: /^_+.+$/
				}
			}
		}))
		.pipe(GULP.dest("build"));
});

GULP.task("default", ["scripts"]);