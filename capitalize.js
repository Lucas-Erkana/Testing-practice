const capitalize = (txt) => {
    let arr = txt.split('');
    arr[0] = arr[0].toUpperCase();
    return arr.join('');
  };
  
  module.exports = capitalize;
  