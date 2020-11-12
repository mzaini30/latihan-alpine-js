module.exports = function(eleventyConfig){
	eleventyConfig.setBrowserSyncConfig({
	  // scripts in body conflict with Turbolinks
	  snippetOptions: {
	    rule: {
	      match: /<\/head>/i,
	      fn: function(snippet, match) {
	        return snippet + match;
	      }
	    }
	  }
	});
}