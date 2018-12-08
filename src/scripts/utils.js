var utils = {
  urlParams: function() {
    var params = {};
    var paramsString = location.href.match(/\?(.*)$/);
    var queries, i, count, query;

    if (paramsString) {
      queries = paramsString[1].split('&');

      for (i = 0, count = queries.length; i < count; i++) {
        query = queries[i].split('=');
        params[decodeURIComponent(query[0])] = decodeURIComponent(query[1]);
      }
    }

    return params;
  }
};
