const regex='</title>';const replace_str='</title>\
<script type="text/javascript" async="async" src="https://github.com/redphx/better-xcloud/releases/download/v5.9.5/better-xcloud.user.js"></script>\
'
if($response.body){var body=$response.body.replaceAll('</TITLE>','</title>').replaceAll(regex,replace_str)};const headers=$response.headers;headers['Content-Security-Policy']='*';$done({headers:headers,body:body});
