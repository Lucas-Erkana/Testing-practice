const capitalize = (txt) => {
    let arr = txt.split('');
    let upperCaseArr = arr.map((item) => item.toUpperCase());
    return upperCaseArr.join('');
  };
  
  module.exports = capitalize;
  