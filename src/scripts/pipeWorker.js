export default () => {

    // https://stackoverflow.com/questions/3115150/how-to-escape-regular-expression-special-characters-using-javascript
    function regexEscape(regex) {
        return regex.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    };
      
    /**
     * Replace nastroj
     * TODO: dodelat osetreni na undefined
     */
    function replaceGetOpts(tool) {
      if (tool.occurrence === "all") {
          return tool.casesensitive === true ? "g" : "gi";
      }
      else {
          return tool.casesensitive === true ? "" : "i";
      }
    }
    
    function replaceTool(text, tool) {
        const option = replaceGetOpts(tool);
        
        if (tool.inColumn === "") {     // Bez sloupcu -> globalne
            return text.replace(new RegExp(regexEscape(tool.find), option), tool.replace);
        }
        else {      // Ve sloupci
            var splitedText = text.split('\n');
            var columns = "";
        
            if (tool.occurrence === "all") {
                for (var i = 0; i < splitedText.length; i++) {
                    columns = splitedText[i].split(tool.delimiter);
                
                    if (tool.inColumn <= columns.length) {
                        columns[tool.inColumn - 1] = columns[tool.inColumn - 1].replace(new RegExp(regexEscape(tool.find), option), tool.replace);
                        splitedText[i] = columns.join(tool.delimiter);
                    }
                }
                return splitedText.join('\n');
            }
            else { 
                for (var z = 0; z < splitedText.length; z++) {
                    columns = splitedText[z].split(tool.delimiter);
              
                    if (tool.inColumn <= columns.length) {
                        if (columns[tool.inColumn - 1].match(new RegExp(regexEscape(tool.find), option)) !== null) {
                            columns[tool.inColumn - 1] = columns[tool.inColumn - 1].replace(new RegExp(regexEscape(tool.find), option), tool.replace);
                            splitedText[z] = columns.join(tool.delimiter);
                            return splitedText.join('\n');
                        }
                    }
                }
                return text;
            }
        }
    };
    
    function replaceInspectTool(text, tool) {
        const option = replaceGetOpts(tool);
      
        if (tool.inColumn === "") {     // Bez sloupcu -> globalne
            if (tool.occurrence === "all") {    // Vsechno
                for (var i = 0; i < text.length; i++) {
                    text[i] = text[i].replace(new RegExp(regexEscape(tool.find), option), tool.replace);
                }
                return text;
            }
            else {          // Prvni vyskyt
                for (var x = 0; x < text.length; x++) {
                    if (text[x].match(new RegExp(tool.find, option)) !== null) {
                        text[x] = text[x].replace(new RegExp(regexEscape(tool.find), option), tool.replace);
                        break;
                    }
                }
                return text;
            }
        }
        else {      // Ve sloupci
            var columns = "";
      
            if (tool.occurrence === "all") {    // Vsechno
                for (var j = 0; j < text.length; j++) {
                    columns = text[j].split(tool.delimiter);
            
                    if (tool.inColumn <= columns.length) {
                        columns[tool.inColumn - 1] = columns[tool.inColumn - 1].replace(new RegExp(regexEscape(tool.find), option), tool.replace);
                        text[j] = columns.join(tool.delimiter);
                    }
                }
                return text;
            }
            else {      // Prvni vyskyt
                for (var z = 0; z < text.length; z++) {
                    columns = text[z].split(tool.delimiter);
                
                    if (tool.inColumn <= columns.length) {
                        if (columns[tool.inColumn - 1].match(new RegExp(regexEscape(tool.find), option)) !== null) {
                            columns[tool.inColumn - 1] = columns[tool.inColumn - 1].replace(new RegExp(regexEscape(tool.find), option), tool.replace);
                            text[z] = columns.join(tool.delimiter);
                            return text;
                        }
                    }
                }
                return text;
            }
        }
    }

    /**
     * Regex replace nastroj
     */
    function regexReplaceTool(text, tool) {
        const option = replaceGetOpts(tool);
        var splitedText = text.split('\n');
        
        if (tool.inColumn === "") {     // Bez sloupcu -> globalne
            if (tool.occurrence === "all") {    // Vsechno
                for (var y = 0; y < splitedText.length; y++) {
                    splitedText[y] = splitedText[y].replace(new RegExp(tool.find, option), tool.replace);
                }
                return splitedText.join('\n');
            }
            else {                              // Pouze prvni vyskyt
                for (let i = 0; i < splitedText.length; i++) {
                    if (splitedText[i].match(new RegExp(tool.find, option)) !== null) {
                        splitedText[i] = splitedText[i].replace(new RegExp(tool.find, option), tool.replace);
                        return splitedText.join('\n');
                    }
                }
                return text;
            }
        }
        else {      // Ve sloupci
            var columns = "";
        
            if (tool.occurrence === "all") {    // Vsechno
                for (let i = 0; i < splitedText.length; i++) {
                    columns = splitedText[i].split(tool.delimiter);
                
                    if (tool.inColumn <= columns.length) {
                        columns[tool.inColumn - 1] = columns[tool.inColumn - 1].replace(new RegExp(tool.find, option), tool.replace);
                        splitedText[i] = columns.join(tool.delimiter);
                    }
                }
                return splitedText.join('\n');
            }
            else {                              // Prvni vyskyt
                for (let z = 0; z < splitedText.length; z++) {
                    columns = splitedText[z].split(tool.delimiter);
              
                    if (tool.inColumn <= columns.length) {
                        if (columns[tool.inColumn - 1].match(new RegExp(tool.find, option)) !== null) {
                            columns[tool.inColumn - 1] = columns[tool.inColumn - 1].replace(new RegExp(tool.find, option), tool.replace);
                            splitedText[z] = columns.join(tool.delimiter);
                            return splitedText.join('\n');
                        }
                    }
                }
                return text;
            }
        }
    };
    
    function regexReplaceInspectTool(text, tool) {
        const option = replaceGetOpts(tool);
      
        if (tool.inColumn === "") {     // Bez sloupcu -> globalne
            if (tool.occurrence === "all") {    // Vsechno
                for (var i = 0; i < text.length; i++) {
                    text[i] = text[i].replace(new RegExp(tool.find, option), tool.replace);
                }
                return text;
            }
            else {          // Prvni vyskyt
                for (var x = 0; x < text.length; x++) {
                    if (text[x].match(new RegExp(tool.find, option)) !== null) {
                        text[x] = text[x].replace(new RegExp(tool.find, option), tool.replace);
                        break;
                    }
                }
                return text;
            }
        }
        else {      // Ve sloupci
            var columns = "";
      
            if (tool.occurrence === "all") {    // Vsechno
                for (var j = 0; j < text.length; j++) {
                    columns = text[j].split(tool.delimiter);
            
                    if (tool.inColumn <= columns.length) {
                        columns[tool.inColumn - 1] = columns[tool.inColumn - 1].replace(new RegExp(tool.find, option), tool.replace);
                        text[j] = columns.join(tool.delimiter);
                    }
                }
                return text;
            }
            else {      // Prvni vyskyt
                for (var z = 0; z < text.length; z++) {
                    columns = text[z].split(tool.delimiter);
                
                    if (tool.inColumn <= columns.length) {
                        if (columns[tool.inColumn - 1].match(new RegExp(tool.find, option)) !== null) {
                            columns[tool.inColumn - 1] = columns[tool.inColumn - 1].replace(new RegExp(tool.find, option), tool.replace);
                            text[z] = columns.join(tool.delimiter);
                            return text;
                        }
                    }
                }
                return text;
            }
        }
    }

    /**
     * Match nastroj
     */
    function matchTool(text, tool) {    // TODO: tady pokracovat
        const option = replaceGetOpts(tool);
        
        if (tool.inColumn === "") {     // Bez sloupcu -> globalne
            text = text.match(new RegExp(".*" + regexEscape(tool.expression) + ".*", option));
            return text === null ? "" : text.join('\n');
        }
        else {      // Ve sloupci
            var splitedText = text.split('\n');
            var columns = "";
            var result = "";
        
            if (tool.occurrence === "all") {    // Vsechno
                for (let i = 0; i < splitedText.length; i++) {
                    columns = splitedText[i].split(tool.delimiter);
                
                    if (tool.inColumn <= columns.length) {
                        if (null !== columns[tool.inColumn - 1].match(new RegExp(".*" + regexEscape(tool.expression) + ".*", option))) {
                            result += splitedText[i] + '\n';
                        }
                    }
                }
                return result.slice(0, -1);
            }
            else { 
                for (let z = 0; z < splitedText.length; z++) {
                    columns = splitedText[z].split(tool.delimiter);
              
                    if (tool.inColumn <= columns.length) {
                        if (null !== columns[tool.inColumn - 1].match(new RegExp(".*" + regexEscape(tool.expression) + ".*", option))) {
                            return splitedText[z];
                        }
                    }
                }
                return "";
            }
        }
    };

    function matchInspectTool(text, tool) {
        console.log('Dodelat');
        return "";
    }

    /**
     * Ridici funkce
     */
    function processTool(text, tool) {
        var result = "";

        switch (tool.toolname) {
            case "match":
                result = matchTool(text, tool);
        		/*result = text.match(new RegExp(".*" + regexEscape(tool.expression) + ".*", 'g'));
        		result === null ? result = "" : result = result.join('\n');*/
        		break;
        	case "replace":
        		result = replaceTool(text, tool);
                break;
            case "regexReplace":
                result = regexReplaceTool(text, tool);
                break;
        	default:
        		break;
        }
        
        return result;
    };

    function processInspectTool(text, tool) {
        var result = "";
      
        switch (tool.toolname) {
            case "match":
                result = matchInspectTool(text, tool);
                break;
            case "replace":
                result = replaceInspectTool(text, tool);
                break;
            case "regexReplace":
                result = regexReplaceInspectTool(text, tool);
                break;
            default:
                break;
        }
        
        return result;
    };

    self.addEventListener('message', event => { // eslint-disable-line no-restricted-globals
        var processData = event.data.inspectMode === true ? event.data.text.split('\n') : event.data.text;

        const pipeline = event.data.pipeline;
        const unit = Math.ceil(100 / pipeline.length);

        if (pipeline.length > 0) {
            postMessage({type: "progress", data: 0});
        }
        
        for (var i = 0; i < pipeline.length; i++) {
        	if (pipeline[i].active === true) {
                if (event.data.inspectMode === false) {
                    processData = processTool(processData, pipeline[i]);
                }
                else {
                    processData = processInspectTool(processData, pipeline[i]);
                }
            }

            postMessage({type: "progress", data: (i + 1) === pipeline.length ? 100 : (i + 1) * unit});
        }

        if (event.data.inspectMode === true) {
            var temp = [];

            for (var breakpoint in event.data.breakpoints) {
                temp.push(processData[breakpoint]);
            }
            processData = temp.join('\n');
        }

        postMessage({type: "result", data: processData});
    });
}