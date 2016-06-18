function getPluginPrefixes(json) {
  var prefixes = json['commular-plugin-prefixes'];
  var result = [];
  if(Array.isArray(prefixes)) {
    result = result.concat(prefixes);
  } else if(typeof prefixes === 'string') {
    result = result.concat([ prefixes ]);
  }

  if(json.name === 'commular') {
    result = result.concat([ json.name ]);
  } else {
    result = result.concat([ json.name, "commular" ]);
  }
  return result;
}

module.exports = getPluginPrefixes;
