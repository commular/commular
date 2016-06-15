function getModulePrefixes(json) {
  var prefixes = json['modules-prefixes'];
  var result;

  if(Array.isArray(prefixes)) {
    result = prefixes;
  } else if(typeof prefixes === 'string') {
    result = [ prefixes ];
  } else {
    result = [ json.name ];
  }
  return result;
}

module.exports = getModulePrefixes;
