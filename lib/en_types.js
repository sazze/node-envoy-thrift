//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
var Thrift = require('thrift').Thrift;

var ttypes = module.exports = {};
if (typeof thrift === 'undefined') {
  thrift = {};
}
if (typeof thrift.en === 'undefined') {
  thrift.en = {};
}
ttypes.RESPONSE_STATUS_CODE = {
'SUCCESS' : 200,
'INVALID' : 400,
'PERMISSION_DENIED' : 403,
'ERROR' : 500
};