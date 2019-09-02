const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
	super();
	this.options = options.limit;
	this.knt = 0; 
  }
  fff(chunk){
  	//console.log ('chunk');
    this.knt=this.knt+chunk.length;
    if(this.knt>this.options){
    //	console.log ('limit');
    	throw new LimitExceededError();
   }

  	return chunk;
    } 

  _transform(chunk, encoding, callback) {
    this.push(this.fff(chunk));
    callback(null);
  }
}

module.exports = LimitSizeStream;
