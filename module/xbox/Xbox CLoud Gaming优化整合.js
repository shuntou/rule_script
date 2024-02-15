const regex='</title>';const replace_str='</title>\
<script type="text/javascript" async="async" src="https://update.greasyfork.org/scripts/455741/Xbox%20CLoud%20Gaming优化整合.user.js"></script>\
'
if($response.body){var body=$response.body.replaceAll('</TITLE>','</title>').replaceAll(regex,replace_str)};const headers=$response.headers;headers['Content-Security-Policy']='*';$done({headers:headers,body:body});
