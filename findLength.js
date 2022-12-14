function stringLength(string) {
    if(string.length > 0 && string.length <= 10 ){
      return string.length;
    }else{
      return "Length is not between 1 and 10 characters";
    }
  };

  module.exports = stringLength