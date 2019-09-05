const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
	super();
	this.options = options.limit;
	this.knt = 0; 
  this.cb=null;
  }
  fff(chunk){
    //console.log ('chunk');
    this.knt=this.knt+chunk.length;
    if(this.knt>this.options){
      //  console.log ('limit');
      this.cb= new LimitExceededError();
          return null;
    }
    return chunk;
  }


  _transform(chunk, encoding, callback) {
    this.push(this.fff(chunk));
        callback(this.cb);

  }
}   

module.exports = LimitSizeStream;
