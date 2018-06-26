
module.exports = function(it){
    // handle with `undefined`
    if(it == null){
        return 'null';
    }
	return JSON.stringify(it).replace(/<\/(script)/ig,'<\\/$1');
};
