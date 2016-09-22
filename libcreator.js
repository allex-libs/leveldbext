function libCreator (execlib, leveldblib, bufferlib) {
  var ret = {
    DBIndex: require('./dbindexcreator')(execlib, leveldblib, bufferlib)
  };
  require('./storageFuncs')(execlib, leveldblib, bufferlib, ret);
  return ret;
}

module.exports = libCreator;
