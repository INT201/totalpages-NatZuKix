const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if(arrayItems==null || arrayItems==undefined ){
    return undefined;
  }else if(rowsPerPage==null || rowsPerPage==undefined ||rowsPerPage==0){
    return 1;
  }else {
    a=arrayItems.length;
    b=rowsPerPage;
    c=a/b;
    if(c<1){
      return 1;
    }else{
      return Math.ceil(c);
    }
  }
}
module.exports = totalPages


