module.exports = function getZerosCount(number, base) {
  	
  	var result = number;
  		baseNum = base;
  		pow = 0;
  		k = 0;
  		j = 0;
  	
	  for (var i = 2; i <= base; i++) {
	    if (baseNum % i == 0) {
	      pow = 0;
	      while (baseNum % i == 0) {
	        pow++;
	        baseNum = Math.floor(baseNum / i)
	    }
		    k = 0;
		    j = number;
		      while (j / i > 0) {
		        k += Math.floor(j / i);
		        j = Math.floor(j / i);
		}
		      result = Math.min(result, Math.floor(k / pow));
	    }
	}
	  return result;
}
