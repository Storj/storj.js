'use strict';

module.exports = function bucket (self) {
  const _internal = function(cb) {

  }

  const getBucket = function(id, cb) {
    self._client.getBucketById(id, function(e, resp) {
      if(e) {
        return cb(e);
      }
      self._client.listFilesInBucket(id, function(e, files) {
        if(e) {
          return cb(e);
        }

        resp.files = files
        return cb(null, resp);
      });
    });
  };

  const getBuckets = function(cb) {
    self._client.getBuckets(function(e, resp) {
      if(e) {
        return cb(e);
      }

      return cb(null, resp.map((v) => ({ id: v.id, name: v.name}) ));
    });
  };

  const deleteBucket = function(id, cb) {
    self._client.destroyBucketById(id, cb);
  };

  /**
    * makes a specific storage bucket public, uploading bucket key to bridge
    * @param
  */
  const makePublic = function(id) {

  };

  return { createBucket, getBucket, getBuckets, deleteBucket, makePublic };
}
