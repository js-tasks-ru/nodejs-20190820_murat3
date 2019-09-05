const stream = require('stream');
const LimitExceededError = require('./LimitExceededError');

class LimitSizeStream extends stream.Transform {
  constructor(options) {
<<<<<<< HEAD
	super();
	this.options = options.limit;
	this.knt = 0; 
  this.cb=null;
=======
    super(options);

    this.limit = options.limit;
    this.size = 0;
    this.isObjectMode = !!options.readableObjectMode;
>>>>>>> e6af5152b929d2e8cee87d1399f6c418a42f868a
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
<<<<<<< HEAD
    this.push(this.fff(chunk));
        callback(this.cb);
=======
    if (this.isObjectMode) {
      this.size += 1;
    } else {
      this.size += chunk.length;
    }
>>>>>>> e6af5152b929d2e8cee87d1399f6c418a42f868a

    if (this.size > this.limit) {
      callback(new LimitExceededError());
    } else {
      callback(null, chunk);
    }
  }
}   

module.exports = LimitSizeStream;
