# slimdown

This package is used to generate Slimdown, which is a lightweight markup language based on Markdown. The syntax of the language is very simple. There are just three rules. A new paragraph is indicated by a newline. Emphasized (i.e. italic) text is wrapped in an asterisk or an underscore. Bold text is wrapped in two asterisks or two underscores. That's all there is to it.

    const SLIMDOWN = require("slimdown");
    
    let content = `"*Parli italiano?*" she asked.\n__*"Solo un po'."*__`;
    
    console.log(SLIMDOWN(content));
    
    // Logs the following:
    // <p>"<em>Parli italiano?</em>" she asked.</p><p><strong><em>"Solo un po'."</em></strong></p>
