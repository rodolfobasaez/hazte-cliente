var connectWebapp = (function () {
  var COOKIE_KEY = 'pfg_externalData';
  var COOKIE_DOMAIN = '.principal.cl';
  var WEBAPP_LOGIN_PAGE = 'https://webapp.principal.cl/private/index.html#/registro';
  //var WEBAPP_LOGIN_PAGE = 'http://local.principal.cl:8080/#/entrar';
 
  function sendData(params) {
    Cookies.set(COOKIE_KEY, {
      fundId: params.fundId,
      seriesId: params.seriesId,
      investorProfile: params.investorProfile,
      purpose: params.purpose,
      amount: params.amount
    }, { domain: COOKIE_DOMAIN });
  }

  function getParamsFromUrl(url) {
    if (!url) url = window.location.search;
    var query = url.substr(1);
    var result = {};
    query.split('&').forEach(function(part) {
      var item = part.split('=');
      result[item[0]] = decodeURIComponent(item[1]);
    });

    return result;
  }

  function goToWebapp(params) {
    sendData(params);
    window.location = WEBAPP_LOGIN_PAGE;

  }
 
  return {
    sendData: sendData,
    getParamsFromUrl: getParamsFromUrl,
    goToWebapp: goToWebapp

  };

}());