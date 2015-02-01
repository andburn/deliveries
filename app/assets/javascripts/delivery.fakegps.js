/**
 *  Functions to do provide some fake gps info, for testing.
 */
delivery.fakegps = (function() {

  /*
   * A sample array of road movements.
   */ 
  var uk_motorway = function(i) {
    var locations = [
      { latitude: 53.742206, longitude: -1.625369},
      { latitude: 53.734692, longitude: -1.616271},
      { latitude: 53.731951, longitude: -1.608375},
      { latitude: 53.729818, longitude: -1.600650},
      { latitude: 53.730732, longitude: -1.591037},
      { latitude: 53.733169, longitude: -1.582110},
      { latitude: 53.733551, longitude: -1.573547},
      { latitude: 53.733551, longitude: -1.559127},
      { latitude: 53.733449, longitude: -1.546081},
      { latitude: 53.734262, longitude: -1.530460},
      { latitude: 53.732536, longitude: -1.519302},
      { latitude: 53.729997, longitude: -1.507285},
      { latitude: 53.728169, longitude: -1.484111},
      { latitude: 53.728372, longitude: -1.470722},
      { latitude: 53.728677, longitude: -1.454757}
    ];
    var rev = locations.slice().reverse();
    // drop first and last so it cycles
    rev.pop();
    rev.shift();
    // join together
    locations = locations.concat(rev);
    return locations;
  }

  /*
   *  Sample movement along Naas Rd to Dublin City Centre.
   */
  var dublin_luas = function() {
    var path = [[53.317103, -6.369754], [53.317278, -6.369827], [53.317369, -6.369758],
      [53.317347, -6.369157], [53.31717, -6.368728], [53.316349, -6.36927], 
      [53.316258, -6.369398], [53.316189, -6.369838], [53.316312, -6.370117], 
      [53.316569, -6.371608], [53.316371, -6.372429], [53.316349, -6.372392], 
      [53.316248, -6.37237], [53.316199, -6.372467], [53.316248, -6.37266], 
      [53.316312, -6.372671], [53.316339, -6.37288], [53.316441, -6.37318], 
      [53.316698, -6.37355], [53.317599, -6.374232], [53.317932, -6.374387], 
      [53.317937, -6.374478], [53.318029, -6.374607], [53.318152, -6.3745], 
      [53.318141, -6.374291], [53.318012, -6.374232], [53.31798, -6.373888], 
      [53.317937, -6.37237], [53.317921, -6.372199], [53.31775, -6.37156], 
      [53.31775, -6.371158], [53.317878, -6.370798], [53.318318, -6.370069], 
      [53.318442, -6.369908], [53.318742, -6.369227], [53.319042, -6.367902], 
      [53.31915, -6.365917], [53.319268, -6.365177], [53.319321, -6.364989], 
      [53.325619, -6.347281], [53.326928, -6.342861], [53.328548, -6.33615], 
      [53.32901, -6.334701], [53.329079, -6.334669], [53.329197, -6.334771], 
      [53.329219, -6.335039], [53.329401, -6.335007], [53.329428, -6.334717], 
      [53.329492, -6.334471], [53.330211, -6.33432], [53.330281, -6.334798], 
      [53.330211, -6.33432], [53.329492, -6.334471], [53.329428, -6.334717], 
      [53.329401, -6.335007], [53.329219, -6.335039], [53.329197, -6.334771], 
      [53.329181, -6.33461], [53.32916, -6.334497], [53.329128, -6.334428], 
      [53.329272, -6.3341], [53.32997, -6.332352], [53.33085, -6.33107], 
      [53.331842, -6.33004], [53.333188, -6.329181], [53.333902, -6.328607], 
      [53.334127, -6.32843], [53.33409, -6.328001], [53.334492, -6.325271], 
      [53.335311, -6.318034], [53.33631, -6.309548], [53.336579, -6.306372], 
      [53.336707, -6.306511], [53.33711, -6.306951], [53.33807, -6.307997], 
      [53.338268, -6.30811], [53.339551, -6.307708], [53.340189, -6.307611], 
      [53.34064, -6.307649], [53.34065, -6.30723], [53.340752, -6.304988], 
      [53.340709, -6.303539], [53.34131, -6.299511], [53.341498, -6.297751], 
      [53.341788, -6.296169], [53.342421, -6.293937], [53.34344, -6.289131], 
      [53.34351, -6.287907], [53.343628, -6.287929], [53.34396, -6.287988], 
      [53.344051, -6.28802], [53.344008, -6.288321], [53.34396, -6.28831], 
      [53.343842, -6.288707], [53.343869, -6.288948], [53.34609, -6.289211], 
      [53.346369, -6.289361], [53.346701, -6.28934], [53.346728, -6.289699], 
      [53.346862, -6.2906], [53.346841, -6.290938], [53.346717, -6.291148], 
      [53.346701, -6.291158], [53.346331, -6.2914], [53.346229, -6.29155], 
      [53.346135, -6.29202], [53.34595, -6.293417], [53.345789, -6.296147], 
      [53.345532, -6.296212], [53.344218, -6.296609], [53.343552, -6.297188], 
      [53.342581, -6.296968], [53.342571, -6.296539], [53.342571, -6.29633], 
      [53.342581, -6.296238], [53.342598, -6.29611], [53.343032, -6.295251], 
      [53.343091, -6.294978], [53.34337, -6.29089], [53.343392, -6.289249], 
      [53.34344, -6.289131], [53.343558, -6.286899], [53.343542, -6.28544], 
      [53.343311, -6.28213], [53.342812, -6.279147], [53.342812, -6.277592], 
      [53.34315, -6.275789], [53.343241, -6.275387], [53.343338, -6.27448], 
      [53.342962, -6.272179], [53.342962, -6.271798], [53.343011, -6.271358], 
      [53.343198, -6.270419], [53.343611, -6.26999], [53.344051, -6.267839], 
      [53.344191, -6.266058], [53.344169, -6.264191], [53.344271, -6.261697], 
      [53.34447, -6.260002], [53.3447, -6.25932], [53.344872, -6.259181], 
      [53.344947, -6.259101], [53.34521, -6.259068], [53.346728, -6.259111], 
      [53.346878, -6.259058], [53.347522, -6.259358], [53.347549, -6.25924], 
      [53.348042, -6.256858], [53.348268, -6.254922], [53.348278, -6.254648], 
      [53.348278, -6.250968], [53.34793, -6.246081], [53.348788, -6.24592], 
      [53.34941, -6.245808], [53.349367, -6.245298], [53.349351, -6.244869], 
      [53.349298, -6.244177], [53.349286, -6.243982]];

    var i = 0, output = [];
    // turn into objects and reverse too
    for (i = 0; i < path.length; i++) {
      output.push({ latitude: path[i][0], longitude: path[i][1]});
    }
    return output;
  }

  /*
   * Create random locations in a rectangle area.
   */ 
  var randGeo = function() {
    setInterval(function() {
      p = randomPosition();
      current = { latitude: p[0], longitude: p[1] };
      console.log("interval call: " + p[0] + ", " + p[1]);
      delivery.map.updatePosition(p[0], p[1]);
    }, 20000);
  };

  /*
   * Generate a random geo location in a given bounding box.
   */
  var randomPosition = function() {
    // locations in box around Leeds
    var xBounds = [53.62, 54.00];
    var yBounds = [-1.82, -1.00];
    var x = (Math.random() * (xBounds[1] - xBounds[0]) + xBounds[0]).toFixed(4);
    var y = (Math.random() * (yBounds[1] - yBounds[0]) + yBounds[0]).toFixed(4);
    return [x, y];
  };

  return {
    dublin_luas: dublin_luas,
    uk_motorway: uk_motorway
  };

})();