(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(a,e,i){},37:function(a,e,i){a.exports=i.p+"static/media/Espresso-Lungo.aab78f87.mp4"},39:function(a,e,i){a.exports=i(96)},44:function(a,e,i){},96:function(a,e,i){"use strict";i.r(e);var t=i(0),n=i.n(t),r=i(13),c=i.n(r),o=(i(44),i(14)),s=i.n(o),l=i(33),u=i(3),A=i(4),m=i(6),d=i(5),h=i(7),g=i(34),p=i.n(g),f=(i(11),i(35)),E=i.n(f),S=i(38),y=i(36),b=i.n(y),_=i(8),M=i(9),C=function(a){var e=a.text;return n.a.createElement("div",{style:{color:"white",background:"red",padding:"10px",display:"inline-flex","font-size":"1rem",textAlign:"center",alignItems:"center",justifyContent:"center",borderRadius:"100%",transform:"translate(-50%, -50%)"}},e)},k=function(a){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,a),Object(A.a)(e,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mapImage",style:{height:"200px",width:"100%"}},n.a.createElement(b.a,{bootstrapURLKeys:{key:"AIzaSyBhxC0ajIe4Q3ZZHvPrycvvT0a4dGzl7hY"},center:this.props.center,defaultZoom:this.props.zoom},n.a.createElement(C,{lat:this.props.lat,lng:this.props.lng,text:n.a.createElement(_.a,{icon:M.d})}))))}}]),e}(n.a.Component);k.defaultProps={zoom:15};var v=k,P=function(a){function e(){var a,i;Object(u.a)(this,e);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(i=Object(m.a)(this,(a=Object(d.a)(e)).call.apply(a,[this].concat(n)))).state={selectedCategory:"All"},i.handleChangeSelectCategory=function(a){i.setState({selectedCategory:a.target.value})},i}return Object(h.a)(e,a),Object(A.a)(e,[{key:"render",value:function(){var a=this;return this.props.selection.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container select"},n.a.createElement(_.a,{icon:M.b,size:"2x",color:"black"}),n.a.createElement("select",{onChange:this.handleChangeSelectCategory,value:this.state.selectedCategory,className:"react-autosuggest__container ",id:"filterSelection"},["All"].concat(Object(S.a)(this.props.selection.reduce(function(a,e){return e.categories.forEach(function(e){a.includes(e.title)||a.push(e.title)}),a},[]).sort())).map(function(a){return n.a.createElement("option",{value:a,className:"react-autosuggest__input "},a)}))),n.a.createElement("ul",{id:"searchResults"},this.props.selection.filter(function(e){return"All"===a.state.selectedCategory||e.categories.map(function(a){return a.title}).includes(a.state.selectedCategory)}).map(function(a){return n.a.createElement("li",null,n.a.createElement("div",{className:"selections",key:a.id},n.a.createElement("div",{className:"container restaurant bg-light mb-3"},n.a.createElement("img",{src:a.image_url,alt:a.alias}),n.a.createElement("div",{className:"information"},n.a.createElement("h4",null," ",a.name," "),"\n                    ".concat(a.location.address1,"\n                    ").concat(a.location.city,"\n                    ").concat(a.location.state,"\n                    ").concat(a.location.zip_code,"\n                    ").concat(a.location.country)),n.a.createElement(v,{lat:a.coordinates.latitude,lng:a.coordinates.longitude,center:{lat:a.coordinates.latitude,lng:a.coordinates.longitude},city:a.location.city}))))})))}}]),e}(n.a.Component),T=function(a){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,a),Object(A.a)(e,[{key:"render",value:function(){return this.props.city.length>0&&n.a.createElement("div",{className:" showTime"},n.a.createElement("h3",null,this.props.city,": ",this.props.timeStamp),n.a.createElement("h3",null,"It's ",this.props.time," time!"))}}]),e}(n.a.Component),B=function(a){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,a),Object(A.a)(e,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("h2",null," About "),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("h3",null," Select Location "),n.a.createElement(_.a,{icon:M.c,size:"5x",color:"#f09878"})),n.a.createElement("div",{class:"vl"}),n.a.createElement("div",{className:"col-sm"},n.a.createElement("h3",null," Find your meal "),n.a.createElement(_.a,{icon:M.d,size:"5x",color:"#f09878"}))),n.a.createElement("div",{className:"row description"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("h3",null,"Based on the location, MealTime finds the current local time and suggests nearby restaurants for the appropriate meal time."),n.a.createElement(_.a,{icon:M.a,size:"5x",color:"#f09878",onClick:this.props.scroll}))))}}]),e}(n.a.Component),G=i(37),w=i.n(G),N=(["TZ database name","Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Atka","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Buenos_Aires","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Catamarca","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Cordoba","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fort_Wayne","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Indianapolis","America/Inuvik","America/Iqaluit","America/Jamaica","America/Jujuy","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Knox_IN","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Louisville","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Mendoza","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port_of_Spain","America/Port-au-Prince","America/Porto_Acre","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santa_Isabel","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Shiprock","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Virgin","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/South_Pole","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Ashkhabad","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Calcutta","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Chungking","Asia/Colombo","Asia/Dacca","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Istanbul","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Katmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macao","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qyzylorda","Asia/Rangoon","Asia/Riyadh","Asia/Saigon","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimbu","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ujung_Pandang","Asia/Ulaanbaatar","Asia/Ulan_Bator","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faeroe","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/ACT","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Canberra","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/LHI","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/North","Australia/NSW","Australia/Perth","Australia/Queensland","Australia/South","Australia/Sydney","Australia/Tasmania","Australia/Victoria","Australia/West","Australia/Yancowinna","Brazil/Acre","Brazil/DeNoronha","Brazil/East","Brazil/West","Canada/Atlantic","Canada/Central","Canada/Eastern","Canada/Mountain","Canada/Newfoundland","Canada/Pacific","Canada/Saskatchewan","Canada/Yukon","CET","Chile/Continental","Chile/EasterIsland","CST6CDT","Cuba","EET","Egypt","Eire","EST","EST5EDT","Etc/GMT","Etc/GMT+0","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT0","Etc/GMT-0","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Etc/Greenwich","Etc/UCT","Etc/Universal","Etc/UTC","Etc/Zulu","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Asia/Nicosia","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","GB","GB-Eire","GMT","GMT+0","GMT0","GMT\u22120","Greenwich","Hongkong","HST","Iceland","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Iran","Israel","Jamaica","Japan","Kwajalein","Libya","MET","Mexico/BajaNorte","Mexico/BajaSur","Mexico/General","MST","MST7MDT","Navajo","NZ","NZ-CHAT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Ponape","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Samoa","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Truk","Pacific/Wake","Pacific/Wallis","Pacific/Yap","Poland","Portugal","PRC","PST8PDT","ROC","ROK","Singapore","Turkey","UCT","Universal","US/Alaska","US/Aleutian","US/Arizona","US/Central","US/Eastern","US/East-Indiana","US/Hawaii","US/Indiana-Starke","US/Michigan","US/Mountain","US/Pacific","US/Pacific-New","US/Samoa","UTC","WET","W-SU","Zulu"].filter(function(a){return a.includes("/")}).filter(function(a){try{(new Date).toLocaleString("en-US",{timeZone:a,hour12:!1,weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch(e){return!1}return!0}).reduce(function(a,e){var i=e.substring(0,e.indexOf("/")),t=e.substring(e.indexOf("/")+1);return a[i]||(a[i]=[]),a[i].includes(t)||a[i].push(t),a},{}),{America:["Adak","Anchorage","Anguilla","Araguaina","Argentina/Buenos_Aires","Argentina/Catamarca","Argentina/Cordoba","Argentina/Jujuy","Argentina/La_Rioja","Argentina/Mendoza","Argentina/Rio_Gallegos","Argentina/Salta","Argentina/San_Juan","Argentina/San_Luis","Argentina/Tucuman","Argentina/Ushuaia","Asuncion","Atikokan","Atka","Bahia","Bahia_Banderas","Barbados","Belem","Blanc-Sablon","Boa_Vista","Bogota","Boise","Buenos_Aires","Cambridge_Bay","Campo_Grande","Cancun","Caracas","Catamarca","Cayenne","Chicago","Chihuahua","Coral_Harbour","Cordoba","Costa_Rica","Creston","Cuiaba","Dawson","Dawson_Creek","Denver","Detroit","Edmonton","Eirunepe","El_Salvador","Ensenada","Fort_Nelson","Fort_Wayne","Fortaleza","Glace_Bay","Godthab","Goose_Bay","Grand_Turk","Guadeloupe","Guatemala","Guayaquil","Halifax","Havana","Hermosillo","Indiana/Indianapolis","Indiana/Knox","Indiana/Marengo","Indiana/Petersburg","Indiana/Tell_City","Indiana/Vevay","Indiana/Vincennes","Indiana/Winamac","Indianapolis","Inuvik","Iqaluit","Jamaica","Jujuy","Juneau","Kentucky/Louisville","Kentucky/Monticello","La_Paz","Lima","Los_Angeles","Louisville","Lower_Princes","Maceio","Manaus","Martinique","Matamoros","Mazatlan","Mendoza","Menominee","Merida","Metlakatla","Mexico_City","Miquelon","Moncton","Monterrey","Montevideo","Montreal","Montserrat","Nassau","New_York","Nipigon","Nome","Noronha","North_Dakota/Beulah","North_Dakota/Center","North_Dakota/New_Salem","Ojinaga","Panama","Pangnirtung","Phoenix","Porto_Acre","Porto_Velho","Puerto_Rico","Punta_Arenas","Rainy_River","Rankin_Inlet","Recife","Regina","Resolute","Rio_Branco","Rosario","Santa_Isabel","Santarem","Santiago","Santo_Domingo","Sao_Paulo","Scoresbysund","Shiprock","St_Barthelemy","St_Johns","St_Kitts","St_Lucia","St_Thomas","St_Vincent","Thule","Thunder_Bay","Tijuana","Toronto","Vancouver","Virgin","Whitehorse","Winnipeg","Yellowknife"],Asia:["Hong_Kong","Istanbul","Kuala_Lumpur","Macao","Macau","Manila","Singapore","Taipei","Tokyo"],Australia:["Adelaide","Brisbane","Melbourne","Perth","Sydney"],Europe:["Amsterdam","Athens","Belfast","Belgrade","Berlin","Brussels","Budapest","Busingen","Copenhagen","Dublin","Gibraltar","Guernsey","Helsinki","Istanbul","Jersey","Lisbon","London","Luxembourg","Madrid","Malta","Minsk","Monaco","Moscow","Oslo","Paris","Prague","Rome","San_Marino","Stockholm","Vatican","Vienna","Zurich"]}),I=function(a){return a},j=function(a){return n.a.createElement("div",null," ",a.replace(/_/gi," ")," ")},R=function(a){function e(a){var i;return Object(u.a)(this,e),(i=Object(m.a)(this,Object(d.a)(e).call(this,a))).state={continent:"America",selectedContinent:"America",city:"",citySearch:"",data:N,suggestions:N.America,selection:[],lat:[],lng:[],center:{lat:[],lng:[]},categories:[],time:"",timeStamp:""},i.getSuggestions=function(a){var e=a.trim().toLowerCase(),t=e.length;return 0===t?i.state.data[i.state.selectedContinent]:i.state.data[i.state.selectedContinent].filter(function(a){return a.toLowerCase().slice(0,t)===e.replace(/ /gi,"_")})},i.onSuggestionsFetchRequested=function(a){var e=a.value;i.setState({suggestions:i.getSuggestions(e)})},i.onSuggestionsClearRequested=function(){i.setState({suggestions:[]})},i.timeStamp=function(a,e){return(new Date).toLocaleString("en-US",{timeZone:a+"/"+e,hour12:!1,weekday:"long",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})},i.handleChange=function(a){i.setState({citySearch:a.target.value})},i.onChange=function(a,e){var t=e.newValue;i.setState({citySearch:t.replace(/ /gi,"_")})},i.handleChangeSelect=function(a){var e=a.target.value;i.setState(function(a){return{selectedContinent:e,suggestions:a.data[e]}})},i.handleSubmit=function(a){a.preventDefault(),i.setState(function(a){return{city:a.citySearch,continent:a.selectedContinent}},function(){i.getSelectionfromApi(i.state.city,i.state.time)})},i.getTime=function(){var a=i.timeStamp(i.state.continent,i.state.city),e=a.match(/(?:[01]\d|2[0123]):(?:[012345]\d)/)[0],t=Number(e.replace(":","")),n="";n=t>384&&t<=1200?"Breakfast":t>1200&&t<1700?"Lunch":"Dinner",i.setState({time:n,timeStamp:a})},i.getSelectionfromApi=function(a,e){return p.a.get("https://cors-anywhere.herokuapp.com/".concat("https://api.yelp.com/v3/businesses/search?location=")+a,{headers:{Authorization:"Bearer 6HpwezQbGeEEFr-zNNAbretclit-SFBBqV92zLarZ5hOAEmiL-In5gB2ty70Q7YQTRDROV7Oq3zFRxvyX8zeEWiQsj6DGQj2mtblF3ZHyHQk8g-Am3hdv3qG64Y_XHYx"},params:{categories:e}}).then(function(a){var e=a.data.businesses;return i.setState({selection:e},function(){i.getTime(),i.getCoordinates(e)}),i.searchResultsRef.current.scrollIntoView({block:"nearest",behavior:"smooth"}),console.log(a),!0}).catch(function(a){return console.log("err",a),!1})},i.getCoordinates=function(a){var e=a.map(function(a){return a.coordinates.latitude}),t=a.map(function(a){return a.coordinates.longitude});i.setState(function(a){return{lat:e,lng:t}})},i.scroll=function(){i.searchPage.current.scrollIntoView({block:"nearest",behavior:"smooth"})},i.searchResultsRef=n.a.createRef(),i.searchPage=n.a.createRef(),i}return Object(h.a)(e,a),Object(A.a)(e,[{key:"componentDidMount",value:function(){var a=Object(l.a)(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}()},{key:"render",value:function(){var a=this.state,e=a.citySearch,i=a.suggestions,t={placeholder:"Select an area",value:e.replace(/_/gi," "),onChange:this.onChange};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"videocontainer"},n.a.createElement("video",{muted:!0,autoPlay:!0,id:"video",loop:!0,alt:"coffee machine brewing coffee onto white cup"},n.a.createElement("source",{src:w.a}))),n.a.createElement("div",{className:"hero"},n.a.createElement("h1",null," MealTime ")),n.a.createElement(B,{scroll:this.scroll}),n.a.createElement("div",{className:"hero",id:"selectionPage",ref:this.searchPage},n.a.createElement("h1",null," MealTime "),n.a.createElement("div",{className:"selection"},n.a.createElement("form",{action:"#"},n.a.createElement("select",{onChange:this.handleChangeSelect,value:this.state.selectedContinent,className:"react-autosuggest__container"},Object.keys(this.state.data).map(function(a){return n.a.createElement("option",{value:a,className:"react-autosuggest__input "},a)})),n.a.createElement(E.a,{suggestions:i,shouldRenderSuggestions:function(){return!0},onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:I,renderSuggestion:j,inputProps:t}),n.a.createElement("input",{type:"submit",value:"submit",onClick:this.handleSubmit,disabled:!this.state.data[this.state.selectedContinent].includes(this.state.citySearch)})))),n.a.createElement("div",{ref:this.searchResultsRef},this.state.city.length>0&&n.a.createElement("div",{className:"searchPage"},n.a.createElement(T,{time:this.state.time,city:this.state.city.replace(/_/gi," "),timeStamp:this.state.timeStamp}),n.a.createElement(P,{city:this.state.city,getSelectionfromApi:this.getSelectionfromApi,selection:this.state.selection,lat:this.state.lat,lats:this.state.lat,lng:this.state.lat,center:this.state.center}))))}}]),e}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(a){a.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.b53539e8.chunk.js.map