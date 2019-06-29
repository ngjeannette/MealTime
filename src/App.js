import React from "react";
import axios from "axios";
import "./App.css";
import Autosuggest from "react-autosuggest";
import Yelp from "./Yelp";
import ShowTime from "./ShowTime";
import About from "./About";
import video from "./Espresso-Lungo.mp4";

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;

const renderSuggestion = suggestion => (
  <div> {suggestion.replace(/_/gi, " ")} </div>
);

const data = {
  Africa: [
    "Abidjan",
    "Accra",
    "Addis_Ababa",
    "Algiers",
    "Asmara",
    "Bamako",
    "Bangui",
    "Banjul",
    "Bissau",
    "Blantyre",
    "Brazzaville",
    "Bujumbura",
    "Cairo",
    "Casablanca",
    "Ceuta",
    "Conakry",
    "Dakar",
    "Dar_es_Salaam",
    "Djibouti",
    "Douala",
    "El_Aaiun",
    "Freetown",
    "Gaborone",
    "Harare",
    "Johannesburg",
    "Juba",
    "Kampala",
    "Khartoum",
    "Kigali",
    "Kinshasa",
    "Lagos",
    "Libreville",
    "Lome",
    "Luanda",
    "Lubumbashi",
    "Lusaka",
    "Malabo",
    "Maputo",
    "Maseru",
    "Mbabane",
    "Mogadishu",
    "Monrovia",
    "Nairobi",
    "Ndjamena",
    "Niamey",
    "Nouakchott",
    "Ouagadougou",
    "Porto-Novo",
    "Sao_Tome",
    "Timbuktu",
    "Tripoli",
    "Tunis",
    "Windhoek"
  ],
  America: [
    "Adak",
    "Anchorage",
    "Anguilla",
    "Antigua",
    "Araguaina",
    "Argentina/Buenos_Aires",
    "Argentina/Catamarca",
    "Argentina/ComodRivadavia",
    "Argentina/Cordoba",
    "Argentina/Jujuy",
    "Argentina/La_Rioja",
    "Argentina/Mendoza",
    "Argentina/Rio_Gallegos",
    "Argentina/Salta",
    "Argentina/San_Juan",
    "Argentina/San_Luis",
    "Argentina/Tucuman",
    "Argentina/Ushuaia",
    "Aruba",
    "Asuncion",
    "Atikokan",
    "Atka",
    "Bahia",
    "Bahia_Banderas",
    "Barbados",
    "Belem",
    "Belize",
    "Blanc-Sablon",
    "Boa_Vista",
    "Bogota",
    "Boise",
    "Buenos_Aires",
    "Cambridge_Bay",
    "Campo_Grande",
    "Cancun",
    "Caracas",
    "Catamarca",
    "Cayenne",
    "Cayman",
    "Chicago",
    "Chihuahua",
    "Coral_Harbour",
    "Cordoba",
    "Costa_Rica",
    "Creston",
    "Cuiaba",
    "Curacao",
    "Danmarkshavn",
    "Dawson",
    "Dawson_Creek",
    "Denver",
    "Detroit",
    "Dominica",
    "Edmonton",
    "Eirunepe",
    "El_Salvador",
    "Ensenada",
    "Fort_Nelson",
    "Fort_Wayne",
    "Fortaleza",
    "Glace_Bay",
    "Godthab",
    "Goose_Bay",
    "Grand_Turk",
    "Grenada",
    "Guadeloupe",
    "Guatemala",
    "Guayaquil",
    "Guyana",
    "Halifax",
    "Havana",
    "Hermosillo",
    "Indiana/Indianapolis",
    "Indiana/Knox",
    "Indiana/Marengo",
    "Indiana/Petersburg",
    "Indiana/Tell_City",
    "Indiana/Vevay",
    "Indiana/Vincennes",
    "Indiana/Winamac",
    "Indianapolis",
    "Inuvik",
    "Iqaluit",
    "Jamaica",
    "Jujuy",
    "Juneau",
    "Kentucky/Louisville",
    "Kentucky/Monticello",
    "Knox_IN",
    "Kralendijk",
    "La_Paz",
    "Lima",
    "Los_Angeles",
    "Louisville",
    "Lower_Princes",
    "Maceio",
    "Managua",
    "Manaus",
    "Marigot",
    "Martinique",
    "Matamoros",
    "Mazatlan",
    "Mendoza",
    "Menominee",
    "Merida",
    "Metlakatla",
    "Mexico_City",
    "Miquelon",
    "Moncton",
    "Monterrey",
    "Montevideo",
    "Montreal",
    "Montserrat",
    "Nassau",
    "New_York",
    "Nipigon",
    "Nome",
    "Noronha",
    "North_Dakota/Beulah",
    "North_Dakota/Center",
    "North_Dakota/New_Salem",
    "Ojinaga",
    "Panama",
    "Pangnirtung",
    "Paramaribo",
    "Phoenix",
    "Port_of_Spain",
    "Port-au-Prince",
    "Porto_Acre",
    "Porto_Velho",
    "Puerto_Rico",
    "Punta_Arenas",
    "Rainy_River",
    "Rankin_Inlet",
    "Recife",
    "Regina",
    "Resolute",
    "Rio_Branco",
    "Rosario",
    "Santa_Isabel",
    "Santarem",
    "Santiago",
    "Santo_Domingo",
    "Sao_Paulo",
    "Scoresbysund",
    "Shiprock",
    "Sitka",
    "St_Barthelemy",
    "St_Johns",
    "St_Kitts",
    "St_Lucia",
    "St_Thomas",
    "St_Vincent",
    "Swift_Current",
    "Tegucigalpa",
    "Thule",
    "Thunder_Bay",
    "Tijuana",
    "Toronto",
    "Tortola",
    "Vancouver",
    "Virgin",
    "Whitehorse",
    "Winnipeg",
    "Yakutat",
    "Yellowknife"
  ],
  Antarctica: [
    "Casey",
    "Davis",
    "DumontDUrville",
    "Macquarie",
    "Mawson",
    "McMurdo",
    "Palmer",
    "Rothera",
    "South_Pole",
    "Syowa",
    "Troll",
    "Vostok"
  ],
  Arctic: ["Longyearbyen"],
  Asia: [
    "Aden",
    "Almaty",
    "Amman",
    "Anadyr",
    "Aqtau",
    "Aqtobe",
    "Ashgabat",
    "Ashkhabad",
    "Atyrau",
    "Baghdad",
    "Bahrain",
    "Baku",
    "Bangkok",
    "Barnaul",
    "Beirut",
    "Bishkek",
    "Brunei",
    "Calcutta",
    "Chita",
    "Choibalsan",
    "Chongqing",
    "Chungking",
    "Colombo",
    "Dacca",
    "Damascus",
    "Dhaka",
    "Dili",
    "Dubai",
    "Dushanbe",
    "Famagusta",
    "Gaza",
    "Harbin",
    "Hebron",
    "Ho_Chi_Minh",
    "Hong_Kong",
    "Hovd",
    "Irkutsk",
    "Istanbul",
    "Jakarta",
    "Jayapura",
    "Jerusalem",
    "Kabul",
    "Kamchatka",
    "Karachi",
    "Kashgar",
    "Kathmandu",
    "Katmandu",
    "Khandyga",
    "Kolkata",
    "Krasnoyarsk",
    "Kuala_Lumpur",
    "Kuching",
    "Kuwait",
    "Macao",
    "Macau",
    "Magadan",
    "Makassar",
    "Manila",
    "Muscat",
    "Novokuznetsk",
    "Novosibirsk",
    "Omsk",
    "Oral",
    "Phnom_Penh",
    "Pontianak",
    "Pyongyang",
    "Qatar",
    "Qyzylorda",
    "Rangoon",
    "Riyadh",
    "Saigon",
    "Sakhalin",
    "Samarkand",
    "Seoul",
    "Shanghai",
    "Singapore",
    "Srednekolymsk",
    "Taipei",
    "Tashkent",
    "Tbilisi",
    "Tehran",
    "Tel_Aviv",
    "Thimbu",
    "Thimphu",
    "Tokyo",
    "Tomsk",
    "Ujung_Pandang",
    "Ulaanbaatar",
    "Ulan_Bator",
    "Urumqi",
    "Ust-Nera",
    "Vientiane",
    "Vladivostok",
    "Yakutsk",
    "Yangon",
    "Yekaterinburg",
    "Yerevan",
    "Nicosia"
  ],
  Atlantic: [
    "Azores",
    "Bermuda",
    "Canary",
    "Cape_Verde",
    "Faeroe",
    "Faroe",
    "Jan_Mayen",
    "Madeira",
    "Reykjavik",
    "South_Georgia",
    "St_Helena",
    "Stanley"
  ],
  Australia: [
    "ACT",
    "Adelaide",
    "Brisbane",
    "Broken_Hill",
    "Canberra",
    "Currie",
    "Darwin",
    "Eucla",
    "Hobart",
    "LHI",
    "Lindeman",
    "Lord_Howe",
    "Melbourne",
    "North",
    "NSW",
    "Perth",
    "Queensland",
    "South",
    "Sydney",
    "Tasmania",
    "Victoria",
    "West",
    "Yancowinna"
  ],
  Brazil: ["Acre", "DeNoronha", "East", "West"],
  Canada: [
    "Atlantic",
    "Central",
    "Eastern",
    "Mountain",
    "Newfoundland",
    "Pacific",
    "Saskatchewan",
    "Yukon"
  ],
  Chile: ["Continental", "EasterIsland"],
  Etc: [
    "GMT",
    "GMT+0",
    "GMT+1",
    "GMT+10",
    "GMT+11",
    "GMT+12",
    "GMT+2",
    "GMT+3",
    "GMT+4",
    "GMT+5",
    "GMT+6",
    "GMT+7",
    "GMT+8",
    "GMT+9",
    "GMT0",
    "GMT-0",
    "GMT-1",
    "GMT-10",
    "GMT-11",
    "GMT-12",
    "GMT-13",
    "GMT-14",
    "GMT-2",
    "GMT-3",
    "GMT-4",
    "GMT-5",
    "GMT-6",
    "GMT-7",
    "GMT-8",
    "GMT-9",
    "Greenwich",
    "UCT",
    "Universal",
    "UTC",
    "Zulu"
  ],
  Europe: [
    "Amsterdam",
    "Andorra",
    "Astrakhan",
    "Athens",
    "Belfast",
    "Belgrade",
    "Berlin",
    "Bratislava",
    "Brussels",
    "Bucharest",
    "Budapest",
    "Busingen",
    "Chisinau",
    "Copenhagen",
    "Dublin",
    "Gibraltar",
    "Guernsey",
    "Helsinki",
    "Isle_of_Man",
    "Istanbul",
    "Jersey",
    "Kaliningrad",
    "Kiev",
    "Kirov",
    "Lisbon",
    "Ljubljana",
    "London",
    "Luxembourg",
    "Madrid",
    "Malta",
    "Mariehamn",
    "Minsk",
    "Monaco",
    "Moscow",
    "Oslo",
    "Paris",
    "Podgorica",
    "Prague",
    "Riga",
    "Rome",
    "Samara",
    "San_Marino",
    "Sarajevo",
    "Saratov",
    "Simferopol",
    "Skopje",
    "Sofia",
    "Stockholm",
    "Tallinn",
    "Tirane",
    "Tiraspol",
    "Ulyanovsk",
    "Uzhgorod",
    "Vaduz",
    "Vatican",
    "Vienna",
    "Vilnius",
    "Volgograd",
    "Warsaw",
    "Zagreb",
    "Zaporozhye",
    "Zurich"
  ],
  Indian: [
    "Antananarivo",
    "Chagos",
    "Christmas",
    "Cocos",
    "Comoro",
    "Kerguelen",
    "Mahe",
    "Maldives",
    "Mauritius",
    "Mayotte",
    "Reunion"
  ],
  Mexico: ["BajaNorte", "BajaSur", "General"],
  Pacific: [
    "Apia",
    "Auckland",
    "Bougainville",
    "Chatham",
    "Chuuk",
    "Easter",
    "Efate",
    "Enderbury",
    "Fakaofo",
    "Fiji",
    "Funafuti",
    "Galapagos",
    "Gambier",
    "Guadalcanal",
    "Guam",
    "Honolulu",
    "Johnston",
    "Kiritimati",
    "Kosrae",
    "Kwajalein",
    "Majuro",
    "Marquesas",
    "Midway",
    "Nauru",
    "Niue",
    "Norfolk",
    "Noumea",
    "Pago_Pago",
    "Palau",
    "Pitcairn",
    "Pohnpei",
    "Ponape",
    "Port_Moresby",
    "Rarotonga",
    "Saipan",
    "Samoa",
    "Tahiti",
    "Tarawa",
    "Tongatapu",
    "Truk",
    "Wake",
    "Wallis",
    "Yap"
  ],
  US: [
    "Alaska",
    "Aleutian",
    "Arizona",
    "Central",
    "Eastern",
    "East-Indiana",
    "Hawaii",
    "Indiana-Starke",
    "Michigan",
    "Mountain",
    "Pacific",
    "Pacific-New",
    "Samoa"
  ]
};

export default class App extends React.Component {
                 state = {
                   persons: [],
                   continent: "America",
                   selectedContinent: "America",
                   city: "",
                   citySearch: "",
                   data,
                   suggestions: data["America"],
                   selection: [],
                   lat: [],
                   lng: [],
                   center: {
                     lat: [],
                     lng: []
                   },
                   categories: [],
                   time: "",
                   timeStamp: ""
                 };

                 // Teach Autosuggest how to calculate suggestions for any given input value.
                 getSuggestions = value => {
                   const inputValue = value.trim().toLowerCase();
                   const inputLength = inputValue.length;
                   return inputLength === 0
                     ? this.state.data[
                         this.state.selectedContinent
                       ]
                     : this.state.data[
                         this.state.selectedContinent
                       ].filter(
                         city =>
                           city
                             .toLowerCase()
                             .slice(0, inputLength) ===
                           inputValue
                       );
                 };

                 // Autosuggest will call this function every time you need to update suggestions.
                 // You already implemented this logic above, so just use it.
                 onSuggestionsFetchRequested = ({ value }) => {
                   this.setState({
                     suggestions: this.getSuggestions(value)
                   });
                 };

                 // Autosuggest will call this function every time you need to clear suggestions.
                 onSuggestionsClearRequested = () => {
                   this.setState({
                     suggestions: []
                   });
                 };

                 constructor(props) {
                   super(props);
                   this.searchResultsRef = React.createRef();
                   this.searchPage = React.createRef();
                 }

                 //   componentDidMount() {
                 //     axios
                 //       .get(`https://api.openweathermap.org/data/2.5/weather`, {
                 //         params: {
                 //           APPID: "0abf4bf351cec72355774d7f99ba0cc8",
                 //           id: "524901"
                 //         }
                 //       })
                 //       .then(res => {
                 //         const persons = res.data;
                 //         this.setState({ persons });
                 //       });

                 //     // var dateWithouthSecond = new Date();
                 //     // console.log(
                 //     //   dateWithouthSecond.toLocaleTimeString("en-US", {
                 //     //     hour12: false
                 //     //     // hour: "2-digit",
                 //     //     // minute: "2-digit"
                 //     //   })
                 //     // );
                 //   }

                 timeStamp = (continent, city) => {
                   let x = new Date().toLocaleString("en-US", {
                     timeZone: continent + "/" + city,
                     hour12: false,
                     weekday: "long",
                     month: "long",
                     day: "numeric",
                     hour: "2-digit",
                     minute: "2-digit"
                   });
                   // this.setState({ timeStamp: x });
                   return x;
                   // console.log(x);
                 };

                 handleChange = event => {
                   this.setState({
                     citySearch: event.target.value
                   });
                   console.log(event.target.value);
                 };

                 onChange = (event, { newValue }) => {
                   console.log("newValue", newValue);
                   this.setState({
                     citySearch: newValue
                   });
                 };

                 handleChangeSelect = event => {
                   console.log("hi");
                   console.log(
                     "event.target.value",
                     event.target.value
                   );
                   const value = event.target.value;
                   this.setState(state => ({
                     selectedContinent: value,
                     suggestions: state.data[value]
                   }));
                 };

                 handleSubmit = e => {
                   console.log("ayy");
                   e.preventDefault();
                   console.log("ayy");

                   this.setState(
                     state => ({
                       city: state.citySearch,
                       continent: state.selectedContinent
                     }),
                     () => {
                       console.log("api", this.state.city);
                       this.getSelectionfromApi(
                         this.state.city,
                         this.state.time
                       );
                     }
                   );
                 };

                 getTime = () => {
                   let x = this.timeStamp(
                     this.state.continent,
                     this.state.city
                   );
                   let y = x.match(
                     /(?:[01]\d|2[0123]):(?:[012345]\d)/
                   );
                   let yy = y[0];
                   let yyy = Number(yy.replace(":", ""));
                   let time = "";
                   if (yyy > 0o600 && yyy <= 1200) {
                     time = "Breakfast";
                   } else if (yyy > 1200 && yyy < 1700) {
                     time = "Lunch";
                   } else {
                     time = "Dinner";
                   }
                   this.setState({ time: time, timeStamp: x });
                 };

                 getSelectionfromApi = (city, meal) => {
                   axios
                     .get(
                       `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?location=` +
                         city,
                       {
                         headers: {
                           Authorization: `Bearer 6HpwezQbGeEEFr-zNNAbretclit-SFBBqV92zLarZ5hOAEmiL-In5gB2ty70Q7YQTRDROV7Oq3zFRxvyX8zeEWiQsj6DGQj2mtblF3ZHyHQk8g-Am3hdv3qG64Y_XHYx`
                         },
                         params: {
                           categories: meal
                         }
                       }
                     )
                     .then(res => {
                       console.log(res);
                       let businesses = res.data.businesses;
                       this.setState(
                         { selection: businesses },
                         () => {
                           this.getTime();
                           this.getCoordinates(businesses);
                         }
                       );
                       this.searchResultsRef.current.scrollIntoView(
                         {
                           block: "nearest",
                           behavior: "smooth"
                         }
                       );
                     })
                     .catch(err => {
                       console.log("err", err);
                     });
                 };

                 getCoordinates = businesses => {
                   let x = businesses.map(item => {
                     let lat = item.coordinates.latitude;
                     return lat;
                   });
                   let y = businesses.map(item => {
                     let lng = item.coordinates.longitude;
                     return lng;
                   });
                   this.setState(state => ({ lat: x, lng: y }));
                 };

                 scroll = () => {
                   this.searchPage.current.scrollIntoView({
                     block: "nearest",
                     behavior: "smooth"
                   });
                 };

                 render() {
                   const {
                     citySearch,
                     suggestions
                   } = this.state;
                   // Autosuggest will pass through all these props to the input.
                   const inputProps = {
                     placeholder: "Select an area",
                     value: citySearch,
                     onChange: this.onChange
                   };

                   return (
                     <>
                       <div id="videocontainer">
                         <video
                           muted
                           autoPlay
                           id="video"
                           loop
                         >
                           <source src={video} />
                         </video>
                       </div>
                       <div className="hero">
                         <h1> MealTime </h1>
                       </div>
                       <About scroll={this.scroll} />
                       <div
                         className="hero"
                         id="selectionPage"
                         ref={this.searchPage}
                       >
                         <h1>MealTime</h1>
                         <div className="selection">
                           <form action="#">
                             <select
                               onChange={
                                 this.handleChangeSelect
                               }
                               value={
                                 this.state.selectedContinent
                               }
                               className="react-autosuggest__container"
                             >
                               {Object.keys(
                                 this.state.data
                               ).map(continent => (
                                 <option
                                   value={continent}
                                   className="react-autosuggest__input "
                                 >
                                   {continent}
                                 </option>
                               ))}
                             </select>
                             <Autosuggest
                               suggestions={suggestions}
                               shouldRenderSuggestions={() =>
                                 true
                               }
                               onSuggestionsFetchRequested={
                                 this
                                   .onSuggestionsFetchRequested
                               }
                               onSuggestionsClearRequested={
                                 this
                                   .onSuggestionsClearRequested
                               }
                               getSuggestionValue={
                                 getSuggestionValue
                               }
                               renderSuggestion={
                                 renderSuggestion
                               }
                               inputProps={inputProps}
                             />
                             <input
                               type="submit"
                               value="submit"
                               onClick={this.handleSubmit}
                               disabled={
                                 !this.state.data[
                                   this.state
                                     .selectedContinent
                                 ].includes(
                                   this.state.citySearch
                                 )
                               }
                             />
                           </form>
                         </div>
                       </div>
                       <div ref={this.searchResultsRef} >
                         {this.state.city.length > 0 && (
                           <div className="searchPage">
                             <ShowTime
                               time={this.state.time}
                               city={this.state.city}
                               timeStamp={
                                 this.state.timeStamp
                               }
                             />
                             <Yelp
                               city={this.state.city}
                               getSelectionfromApi={
                                 this.getSelectionfromApi
                               }
                               selection={
                                 this.state.selection
                               }
                               lat={this.state.lat}
                               lats={this.state.lat}
                               lng={this.state.lat}
                               center={this.state.center}
                             />
                           </div>
                         )}
                       </div>
                     </>
                   );
                 }
               }
