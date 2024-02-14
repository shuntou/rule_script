const regex='</title>';const replace_str='</title>\
<script type="text/javascript" async="async" src="https://update.greasyfork.org/scripts/455261/Xbox%20Cloud%20Gaming%20Region%20Unlocker.user.js"></script>\
'
if($response.body){var body=$response.body.replaceAll('</TITLE>','</title>').replaceAll(regex,replace_str)};const headers=$response.headers;headers['Content-Security-Policy']='*';$done({headers:headers,body:body});
