var utils = {
  urlParams: function() {
    // ?id=hoge&name=fuga などURLパラメータをオブジェクトで返す
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
  },

  loadingOn: function() {
    // 画面をローディングステータスにする
    $('#global-loading').addClass('is-active');
  },

  loadingOff: function() {
    // 画面をローディングステータスから戻す
    $('#global-loading').removeClass('is-active');
  },

  render: function(data, templateID, targetID) {
    // jsの配列なやオブジェクトなどをpartialテンプレートに入れてrenderする
    var template = _.template($(templateID).text());
    var $target = $(targetID);

    $target.html('');
    $target.append(template({data: data}));
  }
};
