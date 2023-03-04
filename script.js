var IfPolAng = true;
var goodanswer;
var h;
var block=false;
var games=0;
var wins=0;
var trueside=true;

const mediaQuery = window.matchMedia( '( min-width: 900px )' )

function GraphicReset()
{
	block=false;
	document.getElementById("answer1").style.borderColor = "#1E1E1E";
	document.getElementById("answer2").style.borderColor = "#1E1E1E";
	document.getElementById("answer3").style.borderColor = "#1E1E1E";
	document.getElementById("answer4").style.borderColor = "#1E1E1E";
	document.getElementById("answer1").style.background = "linear-gradient(to top, #0072ff, #00c6ff)";
	document.getElementById("answer2").style.background = "linear-gradient(to top, #0072ff, #00c6ff)";
	document.getElementById("answer3").style.background = "linear-gradient(to top, #0072ff, #00c6ff)";
	document.getElementById("answer4").style.background = "linear-gradient(to top, #0072ff, #00c6ff)";
	document.getElementById("hidanswer1").style.borderColor = "#1E1E1E";
	document.getElementById("hidanswer2").style.borderColor = "#1E1E1E";
	document.getElementById("hidanswer3").style.borderColor = "#1E1E1E";
	document.getElementById("hidanswer4").style.borderColor = "#1E1E1E";
	document.getElementById("hidanswer1").style.background = "linear-gradient(to top, #0072ff, #00c6ff)";
	document.getElementById("hidanswer2").style.background = "linear-gradient(to top, #0072ff, #00c6ff)";
	document.getElementById("hidanswer3").style.background = "linear-gradient(to top, #0072ff, #00c6ff)";
	document.getElementById("hidanswer4").style.background = "linear-gradient(to top, #0072ff, #00c6ff)";
}

function Hovering(element)
{
	if(block==false)
	{
		element.style.background = "linear-gradient(to top, #00c6ff, #00c6ff)";
		element.style.cursor = "pointer";
	}
}

function UnHovering(element)
{
	if(block==false)
	{
		element.style.background = "linear-gradient(to top, #0072ff, #00c6ff)";
		element.style.cursor = "auto";
	}
}

function Quiz()
{
	if (trueside == true)
	{
	  if(IfPolAng == true)
	  {
		  let x = Math.floor(Math.random() * 2999);
		  var question1 = pol[x];
		  let x1 = Math.floor(Math.random() * 2999);
		  var ans1 = ang[x1];
		  let x2 = Math.floor(Math.random() * 2999);
		  var ans2 = ang[x2];
		  let x3 = Math.floor(Math.random() * 2999);
		  var ans3 = ang[x3];
		  let x4 = Math.floor(Math.random() * 2999);
		  var ans4 = ang[x4];
		  var goodans = Math.floor(Math.random() * 4);
		  if (goodans==0) var ans1 = ang[x];
		  else if (goodans==1) var ans2 = ang[x];
		  else if (goodans==2) var ans3 = ang[x];
		  else if (goodans==3) var ans4 = ang[x];
		  adjustFontSize(question1, "question");
		  adjustFontSize(ans1, "answer1");
		  adjustFontSize(ans2, "answer2");
		  adjustFontSize(ans3, "answer3");
		  adjustFontSize(ans4, "answer4");
		  document.getElementById("question").innerHTML= question1;
		  document.getElementById("answer1").innerHTML= ans1;
		  document.getElementById("answer2").innerHTML= ans2;
		  document.getElementById("answer3").innerHTML= ans3;
		  document.getElementById("answer4").innerHTML= ans4;
		  
		  goodanswer=goodans+1;
		  
		  //window.alert(goodans+1);
		  
		  //document.getElementById("question").addEventListener("click", quiz());
		  
	  }
	  else
	  {
		  let x = Math.floor(Math.random() * 2998);
		  var question1 = ang[x];
		  let x1 = Math.floor(Math.random() * 2998);
		  var ans1 = pol[x1];
		  let x2 = Math.floor(Math.random() * 2998);
		  var ans2 = pol[x2];
		  let x3 = Math.floor(Math.random() * 2998);
		  var ans3 = pol[x3];
		  let x4 = Math.floor(Math.random() * 2998);
		  var ans4 = pol[x4];
		  var goodans = Math.floor(Math.random() * 4);
		  if (goodans==0) var ans1 = pol[x];
		  else if (goodans==1) var ans2 = pol[x];
		  else if (goodans==2) var ans3 = pol[x];
		  else if (goodans==3) var ans4 = pol[x];
		  adjustFontSize(question1, "question");
		  adjustFontSize(ans1, "answer1");
		  adjustFontSize(ans2, "answer2");
		  adjustFontSize(ans3, "answer3");
		  adjustFontSize(ans4, "answer4");
		  document.getElementById("question").innerHTML= question1;
		  document.getElementById("answer1").innerHTML= ans1;
		  document.getElementById("answer2").innerHTML= ans2;
		  document.getElementById("answer3").innerHTML= ans3;
		  document.getElementById("answer4").innerHTML= ans4;
		  
		  goodanswer=goodans+1;
		  
		  //window.alert(goodans+1);
		  //document.getElementById("question").addEventListener("click", quiz());
	  }
	}
	else
	{
		if(IfPolAng == true)
	  {
		  let x = Math.floor(Math.random() * 2999);
		  var question1 = pol[x];
		  let x1 = Math.floor(Math.random() * 2999);
		  var ans1 = ang[x1];
		  let x2 = Math.floor(Math.random() * 2999);
		  var ans2 = ang[x2];
		  let x3 = Math.floor(Math.random() * 2999);
		  var ans3 = ang[x3];
		  let x4 = Math.floor(Math.random() * 2999);
		  var ans4 = ang[x4];
		  var goodans = Math.floor(Math.random() * 4);
		  if (goodans==0) var ans1 = ang[x];
		  else if (goodans==1) var ans2 = ang[x];
		  else if (goodans==2) var ans3 = ang[x];
		  else if (goodans==3) var ans4 = ang[x];
		  adjustFontSize(question1, "hidquestion");
		  adjustFontSize(ans1, "hidanswer1");
		  adjustFontSize(ans2, "hidanswer2");
		  adjustFontSize(ans3, "hidanswer3");
		  adjustFontSize(ans4, "hidanswer4");
		  document.getElementById("hidquestion").innerHTML= question1;
		  document.getElementById("hidanswer1").innerHTML= ans1;
		  document.getElementById("hidanswer2").innerHTML= ans2;
		  document.getElementById("hidanswer3").innerHTML= ans3;
		  document.getElementById("hidanswer4").innerHTML= ans4;
		  
		  goodanswer=goodans+1;
		  
		  
	  }
	  else
	  {
		  let x = Math.floor(Math.random() * 2998);
		  var question1 = ang[x];
		  let x1 = Math.floor(Math.random() * 2998);
		  var ans1 = pol[x1];
		  let x2 = Math.floor(Math.random() * 2998);
		  var ans2 = pol[x2];
		  let x3 = Math.floor(Math.random() * 2998);
		  var ans3 = pol[x3];
		  let x4 = Math.floor(Math.random() * 2998);
		  var ans4 = pol[x4];
		  var goodans = Math.floor(Math.random() * 4);
		  if (goodans==0) var ans1 = pol[x];
		  else if (goodans==1) var ans2 = pol[x];
		  else if (goodans==2) var ans3 = pol[x];
		  else if (goodans==3) var ans4 = pol[x];
		  adjustFontSize(question1, "hidquestion");
		  adjustFontSize(ans1, "hidanswer1");
		  adjustFontSize(ans2, "hidanswer2");
		  adjustFontSize(ans3, "hidanswer3");
		  adjustFontSize(ans4, "hidanswer4");
		  document.getElementById("hidquestion").innerHTML= question1;
		  document.getElementById("hidanswer1").innerHTML= ans1;
		  document.getElementById("hidanswer2").innerHTML= ans2;
		  document.getElementById("hidanswer3").innerHTML= ans3;
		  document.getElementById("hidanswer4").innerHTML= ans4;
		  
		  goodanswer=goodans+1;
		  
		 
	  }
	}
}

function SwitchLanguage()
{
	if(block==false)
	{
		if(IfPolAng == true)
		{
			IfPolAng=false;
			document.getElementById("switch").innerHTML= "ang-pol";
		}
		else
		{
			IfPolAng=true;
			document.getElementById("switch").innerHTML= "pol-ang";
		}
		setTimeout("flipping()",250);
		setTimeout("Quiz()",400);
	}
}

function Answer(w)
{
	if(block==false)
	{
		if (trueside == true)
		{
			block=true;
			if (w==goodanswer)
			{
				document.getElementById('nice').play()

				document.getElementById("answer"+w).style.background = "linear-gradient(to top, #a8ff78, #78ffd6)";
				wins = wins + 1;
				games = games +1;
				var a = wins/games;
				var num = a * 100;
				var n = num.toFixed(0);
				document.getElementById("score").innerHTML= n+"%";
				document.getElementById("category").innerHTML= games;
				document.getElementById("hidscore").innerHTML= n+"%";
				document.getElementById("hidcategory").innerHTML= games;
			}
			else
			{
				document.getElementById('eror').play()

				document.getElementById("answer"+w).style.background = "linear-gradient(to top, #e73827, #ff806a)";
				document.getElementById("answer"+goodanswer).style.background = "linear-gradient(to top, #a8ff78, #78ffd6)";
				games = games +1;
				var a = wins/games;
				var num = a * 100;
				var n = num.toFixed(0);
				document.getElementById("score").innerHTML= n+"%";
				document.getElementById("category").innerHTML= games;
				document.getElementById("hidscore").innerHTML= n+"%";
				document.getElementById("hidcategory").innerHTML= games;
			}
			setTimeout("flipping()",1500);
			setTimeout("Quiz()",1650);
			setTimeout("GraphicReset()",2000);
		}
		else
		{
			block=true;
			//document.getElementById("answer"+w).style.backgroundColor = "#CFD8DF";
			if (w==goodanswer)
			{
				document.getElementById('nice').play()

				document.getElementById("hidanswer"+w).style.background = "linear-gradient(to top, #a8ff78, #78ffd6)";
				wins = wins + 1;
				games = games +1;
				var a = wins/games;
				var num = a * 100;
				var n = num.toFixed(0);
				document.getElementById("score").innerHTML= n+"%";
				document.getElementById("category").innerHTML= games;
				document.getElementById("hidscore").innerHTML= n+"%";
				document.getElementById("hidcategory").innerHTML= games;
			}
			else
			{
				document.getElementById('eror').play()

				document.getElementById("hidanswer"+w).style.background = "linear-gradient(to top, #e73827, #ff806a)";
				document.getElementById("hidanswer"+goodanswer).style.background = "linear-gradient(to top, #a8ff78, #78ffd6)";
				games = games +1;
				var a = wins/games;
				var num = a * 100;
				var n = num.toFixed(0);
				document.getElementById("score").innerHTML= n+"%";
				document.getElementById("category").innerHTML= games;
				document.getElementById("hidscore").innerHTML= n+"%";
				document.getElementById("hidcategory").innerHTML= games;
			}
			setTimeout("flipping()",1500);
			setTimeout("Quiz()",1650);
			setTimeout("GraphicReset()",2000);
		}
	}
}

function adjustFontSize(tekst,divnazwa) 
{
  var count = tekst.length;
  if ( mediaQuery.matches ) 
  {
  var fontSize = 430 - (count - 1) * 14;
  }
  else
  {
  var fontSize = 210 - (count - 1) * 7; 
  }
  document.getElementById(divnazwa).style.fontSize = fontSize + '%'; 
}

function flipping()
{
	card.classList.toggle("flipped");
	document.getElementById('switch2').play()
	if (trueside==true)
	trueside=false;
	else
	trueside=true;
}



const ang=[
"abandon",

"ability",

"able",

"abortion",

"about",

"above",

"abroad",

"absence",

"absolute",

"absolutely",

"absorb",

"abuse",

"academic",

"accept",

"access",

"accident",

"accompany",

"accomplish",

"according",

"account",

"accurate",

"accuse",

"achieve",

"achievement",

"acid",

"acknowledge",

"acquire",

"across",

"act",

"action",

"active",

"activist",

"activity",

"actor",

"actress",

"actual",

"actually",

"ad",

"adapt",

"add",

"addition",

"additional",

"address",

"adequate",

"adjust",

"adjustment",

"administration",

"administrator",

"admire",

"admission",

"admit",

"adolescent",

"adopt",

"adult",

"advance",

"advanced",

"advantage",

"adventure",

"advertising",

"advice",

"advise",

"adviser",

"advocate",

"affair",

"affect",

"afford",

"afraid",

"African",

"African-American",

"after",

"afternoon",

"again",

"against",

"age",

"agency",

"agenda",

"agent",

"aggressive",

"ago",

"agree",

"agreement",

"agricultural",

"ah",

"ahead",

"aid",

"aide",

"AIDS",

"aim",

"air",

"aircraft",

"airline",

"airport",

"album",

"alcohol",

"alive",

"all",

"alliance",

"allow",

"ally",

"almost",

"alone",

"along",

"already",

"also",

"alter",

"alternative",

"although",

"always",

"AM",

"amazing",

"American",

"among",

"amount",

"analysis",

"analyst",

"analyze",

"ancient",

"and",

"anger",

"angle",

"angry",

"animal",

"anniversary",

"announce",

"annual",

"another",

"answer",

"anticipate",

"anxiety",

"any",

"anybody",

"anymore",

"anyone",

"anything",

"anyway",

"anywhere",

"apart",

"apartment",

"apparent",

"apparently",

"appeal",

"appear",

"appearance",

"apple",

"application",

"apply",

"appoint",

"appointment",

"appreciate",

"approach",

"appropriate",

"approval",

"approve",

"approximately",

"Arab",

"architect",

"area",

"argue",

"argument",

"arise",

"arm",

"armed",

"army",

"around",

"arrange",

"arrangement",

"arrest",

"arrival",

"arrive",

"art",

"article",

"artist",

"artistic",

"as",

"Asian",

"aside",

"ask",

"asleep",

"aspect",

"assault",

"assert",

"assess",

"assessment",

"asset",

"assign",

"assignment",

"assist",

"assistance",

"assistant",

"associate",

"association",

"assume",

"assumption",

"assure",

"at",

"athlete",

"athletic",

"atmosphere",

"attach",

"attack",

"attempt",

"attend",

"attention",

"attitude",

"attorney",

"attract",

"attractive",

"attribute",

"audience",

"author",

"authority",

"auto",

"available",

"average",

"avoid",

"award",

"aware",

"awareness",

"away",

"awful",

"baby",

"back",

"background",

"bad",

"badly",

"bag",

"bake",

"balance",

"ball",

"ban",

"band",

"bank",

"bar",

"barely",

"barrel",

"barrier",

"base",

"baseball",

"basic",

"basically",

"basis",

"basket",

"basketball",

"bathroom",

"battery",

"battle",

"be",

"beach",

"bean",

"bear",

"beat",

"beautiful",

"beauty",

"because",

"become",

"bed",

"bedroom",

"beer",

"before",

"begin",

"beginning",

"behavior",

"behind",

"being",

"belief",

"believe",

"bell",

"belong",

"below",

"belt",

"bench",

"bend",

"beneath",

"benefit",

"beside",

"besides",

"best",

"bet",

"better",

"between",

"beyond",

"Bible",

"big",

"bike",

"bill",

"billion",

"bind",

"biological",

"bird",

"birth",

"birthday",

"bit",

"bite",

"black",

"blade",

"blame",

"blanket",

"blind",

"block",

"blood",

"blow",

"blue",

"board",

"boat",

"body",

"bomb",

"bombing",

"bond",

"bone",

"book",

"boom",

"boot",

"border",

"born",

"borrow",

"boss",

"both",

"bother",

"bottle",

"bottom",

"boundary",

"bowl",

"box",

"boy",

"boyfriend",

"brain",

"branch",

"brand",

"bread",

"break",

"breakfast",

"breast",

"breath",

"breathe",

"brick",

"bridge",

"brief",

"briefly",

"bright",

"brilliant",

"bring",

"British",

"broad",

"broken",

"brother",

"brown",

"brush",

"buck",

"budget",

"build",

"building",

"bullet",

"bunch",

"burden",

"burn",

"bury",

"bus",

"business",

"busy",

"but",

"butter",

"button",

"buy",

"buyer",

"by",

"cabin",

"cabinet",

"cable",

"cake",

"calculate",

"call",

"camera",

"camp",

"campaign",

"campus",

"can",

"Canadian",

"cancer",

"candidate",

"cap",

"capability",

"capable",

"capacity",

"capital",

"captain",

"capture",

"car",

"carbon",

"card",

"care",

"career",

"careful",

"carefully",

"carrier",

"carry",

"case",

"cash",

"cast",

"cat",

"catch",

"category",

"Catholic",

"cause",

"ceiling",

"celebrate",

"celebration",

"celebrity",

"cell",

"center",

"central",

"century",

"CEO",

"ceremony",

"certain",

"certainly",

"chain",

"chair",

"chairman",

"challenge",

"chamber",

"champion",

"championship",

"chance",

"change",

"changing",

"channel",

"chapter",

"character",

"characteristic",

"characterize",

"charge",

"charity",

"chart",

"chase",

"cheap",

"check",

"cheek",

"cheese",

"chef",

"chemical",

"chest",

"chicken",

"chief",

"child",

"childhood",

"Chinese",

"chip",

"chocolate",

"choice",

"cholesterol",

"choose",

"Christian",

"Christmas",

"church",

"cigarette",

"circle",

"circumstance",

"cite",

"citizen",

"city",

"civil",

"civilian",

"claim",

"class",

"classic",

"classroom",

"clean",

"clear",

"clearly",

"client",

"climate",

"climb",

"clinic",

"clinical",

"clock",

"close",

"closely",

"closer",

"clothes",

"clothing",

"cloud",

"club",

"clue",

"cluster",

"coach",

"coal",

"coalition",

"coast",

"coat",

"code",

"coffee",

"cognitive",

"cold",

"collapse",

"colleague",

"collect",

"collection",

"collective",

"college",

"colonial",

"color",

"column",

"combination",

"combine",

"come",

"comedy",

"comfort",

"comfortable",

"command",

"commander",

"comment",

"commercial",

"commission",

"commit",

"commitment",

"committee",

"common",

"communicate",

"communication",

"community",

"company",

"compare",

"comparison",

"compete",

"competition",

"competitive",

"competitor",

"complain",

"complaint",

"complete",

"completely",

"complex",

"complicated",

"component",

"compose",

"composition",

"comprehensive",

"computer",

"concentrate",

"concentration",

"concept",

"concern",

"concerned",

"concert",

"conclude",

"conclusion",

"concrete",

"condition",

"conduct",

"conference",

"confidence",

"confident",

"confirm",

"conflict",

"confront",

"confusion",

"Congress",

"congressional",

"connect",

"connection",

"consciousness",

"consensus",

"consequence",

"conservative",

"consider",

"considerable",

"consideration",

"consist",

"consistent",

"constant",

"constantly",

"constitute",

"constitutional",

"construct",

"construction",

"consultant",

"consume",

"consumer",

"consumption",

"contact",

"contain",

"container",

"contemporary",

"content",

"contest",

"context",

"continue",

"continued",

"contract",

"contrast",

"contribute",

"contribution",

"control",

"controversial",

"controversy",

"convention",

"conventional",

"conversation",

"convert",

"conviction",

"convince",

"cook",

"cookie",

"cooking",

"cool",

"cooperation",

"cop",

"cope",

"copy",

"core",

"corn",

"corner",

"corporate",

"corporation",

"correct",

"correspondent",

"cost",

"cotton",

"couch",

"could",

"council",

"counselor",

"count",

"counter",

"country",

"county",

"couple",

"courage",

"course",

"court",

"cousin",

"cover",

"coverage",

"cow",

"crack",

"craft",

"crash",

"crazy",

"cream",

"create",

"creation",

"creative",

"creature",

"credit",

"crew",

"crime",

"criminal",

"crisis",

"criteria",

"critic",

"critical",

"criticism",

"criticize",

"crop",

"cross",

"crowd",

"crucial",

"cry",

"cultural",

"culture",

"cup",

"curious",

"current",

"currently",

"curriculum",

"custom",

"customer",

"cut",

"cycle",

"dad",

"daily",

"damage",

"dance",

"danger",

"dangerous",

"dare",

"dark",

"darkness",

"data",

"date",

"daughter",

"day",

"dead",

"deal",

"dealer",

"dear",

"death",

"debate",

"debt",

"decade",

"decide",

"decision",

"deck",

"declare",

"decline",

"decrease",

"deep",

"deeply",

"deer",

"defeat",

"defend",

"defendant",

"defense",

"defensive",

"deficit",

"define",

"definitely",

"definition",

"degree",

"delay",

"deliver",

"delivery",

"demand",

"democracy",

"Democrat",

"democratic",

"demonstrate",

"demonstration",

"deny",

"department",

"depend",

"dependent",

"depending",

"depict",

"depression",

"depth",

"deputy",

"derive",

"describe",

"description",

"desert",

"deserve",

"design",

"designer",

"desire",

"desk",

"desperate",

"despite",

"destroy",

"destruction",

"detail",

"detailed",

"detect",

"determine",

"develop",

"developing",

"development",

"device",

"devote",

"dialogue",

"die",

"diet",

"differ",

"difference",

"different",

"differently",

"difficult",

"difficulty",

"dig",

"digital",

"dimension",

"dining",

"dinner",

"direct",

"direction",

"directly",

"director",

"dirt",

"dirty",

"disability",

"disagree",

"disappear",

"disaster",

"discipline",

"discourse",

"discover",

"discovery",

"discrimination",

"discuss",

"discussion",

"disease",

"dish",

"dismiss",

"disorder",

"display",

"dispute",

"distance",

"distant",

"distinct",

"distinction",

"distinguish",

"distribute",

"distribution",

"district",

"diverse",

"diversity",

"divide",

"division",

"divorce",

"DNA",

"do",

"doctor",

"document",

"dog",

"domestic",

"dominant",

"dominate",

"door",

"double",

"doubt",

"down",

"downtown",

"dozen",

"draft",

"drag",

"drama",

"dramatic",

"dramatically",

"draw",

"drawing",

"dream",

"dress",

"drink",

"drive",

"driver",

"drop",

"drug",

"dry",

"due",

"during",

"dust",

"duty",

"each",

"eager",

"ear",

"early",

"earn",

"earnings",

"earth",

"ease",

"easily",

"east",

"eastern",

"easy",

"eat",

"economic",

"economics",

"economist",

"economy",

"edge",

"edition",

"editor",

"educate",

"education",

"educational",

"educator",

"effect",

"effective",

"effectively",

"efficiency",

"efficient",

"effort",

"egg",

"eight",

"either",

"elderly",

"elect",

"election",

"electric",

"electricity",

"electronic",

"element",

"elementary",

"eliminate",

"elite",

"else",

"elsewhere",

"e-mail",

"embrace",

"emerge",

"emergency",

"emission",

"emotion",

"emotional",

"emphasis",

"emphasize",

"employ",

"employee",

"employer",

"employment",

"empty",

"enable",

"encounter",

"encourage",

"end",

"enemy",

"energy",

"enforcement",

"engage",

"engine",

"engineer",

"engineering",

"English",

"enhance",

"enjoy",

"enormous",

"enough",

"ensure",

"enter",

"enterprise",

"entertainment",

"entire",

"entirely",

"entrance",

"entry",

"environment",

"environmental",

"episode",

"equal",

"equally",

"equipment",

"era",

"error",

"escape",

"especially",

"essay",

"essential",

"essentially",

"establish",

"establishment",

"estate",

"estimate",

"etc",

"ethics",

"ethnic",

"European",

"evaluate",

"evaluation",

"even",

"evening",

"event",

"eventually",

"ever",

"every",

"everybody",

"everyday",

"everyone",

"everything",

"everywhere",

"evidence",

"evolution",

"evolve",

"exact",

"exactly",

"examination",

"examine",

"example",

"exceed",

"excellent",

"except",

"exception",

"exchange",

"exciting",

"executive",

"exercise",

"exhibit",

"exhibition",

"exist",

"existence",

"existing",

"expand",

"expansion",

"expect",

"expectation",

"expense",

"expensive",

"experience",

"experiment",

"expert",

"explain",

"explanation",

"explode",

"explore",

"explosion",

"expose",

"exposure",

"express",

"expression",

"extend",

"extension",

"extensive",

"extent",

"external",

"extra",

"extraordinary",

"extreme",

"extremely",

"eye",

"fabric",

"face",

"facility",

"fact",

"factor",

"factory",

"faculty",

"fade",

"fail",

"failure",

"fair",

"fairly",

"faith",

"fall",

"0",

"familiar",

"family",

"famous",

"fan",

"fantasy",

"far",

"farm",

"farmer",

"fashion",

"fast",

"fat",

"fate",

"father",

"fault",

"favor",

"favorite",

"fear",

"feature",

"federal",

"fee",

"feed",

"feel",

"feeling",

"fellow",

"female",

"fence",

"few",

"fewer",

"fiber",

"fiction",

"field",

"fifteen",

"fifth",

"fifty",

"fight",

"fighter",

"fighting",

"figure",

"file",

"fill",

"film",

"final",

"finally",

"finance",

"financial",

"find",

"finding",

"fine",

"finger",

"finish",

"fire",

"firm",

"first",

"fish",

"fishing",

"fit",

"fitness",

"five",

"fix",

"flag",

"flame",

"flat",

"flavor",

"flee",

"flesh",

"flight",

"float",

"floor",

"flow",

"flower",

"fly",

"focus",

"folk",

"follow",

"following",

"food",

"foot",

"football",

"for",

"force",

"foreign",

"forest",

"forever",

"forget",

"form",

"formal",

"formation",

"former",

"formula",

"forth",

"fortune",

"forward",

"found",

"foundation",

"founder",

"four",

"fourth",

"frame",

"framework",

"free",

"freedom",

"freeze",

"French",

"frequency",

"frequent",

"frequently",

"fresh",

"friend",

"friendly",

"friendship",

"from",

"front",

"fruit",

"frustration",

"fuel",

"full",

"fully",

"fun",

"function",

"fund",

"fundamental",

"funding",

"funeral",

"funny",

"furniture",

"furthermore",

"future",

"gain",

"galaxy",

"gallery",

"game",

"gang",

"gap",

"garage",

"garden",

"garlic",

"gas",

"gate",

"gather",

"gay",

"gaze",

"gear",

"gender",

"gene",

"general",

"generally",

"generate",

"generation",

"genetic",

"gentleman",

"gently",

"German",

"gesture",

"get",

"ghost",

"giant",

"gift",

"gifted",

"girl",

"girlfriend",

"give",

"given",

"glad",

"glance",

"glass",

"global",

"glove",

"go",

"goal",

"God",

"gold",

"golden",

"golf",

"good",

"government",

"governor",

"grab",

"grade",

"gradually",

"graduate",

"grain",

"grand",

"grandfather",

"grandmother",

"grant",

"grass",

"grave",

"gray",

"great",

"greatest",

"green",

"grocery",

"ground",

"group",

"grow",

"growing",

"growth",

"guarantee",

"guard",

"guess",

"guest",

"guide",

"guideline",

"guilty",

"gun",

"guy",

"habit",

"habitat",

"hair",

"half",

"hall",

"hand",

"handful",

"handle",

"hang",

"happen",

"happy",

"hard",

"hardly",

"hat",

"hate",

"have",

"he",

"head",

"headline",

"headquarters",

"health",

"healthy",

"hear",

"hearing",

"heart",

"heat",

"heaven",

"heavily",

"heavy",

"heel",

"height",

"helicopter",

"hell",

"hello",

"help",

"helpful",

"her",

"here",

"heritage",

"hero",

"herself",

"hey",

"hi",

"hide",

"high",

"highlight",

"highly",

"highway",

"hill",

"him",

"himself",

"hip",

"hire",

"his",

"historian",

"historic",

"historical",

"history",

"hit",

"hold",

"hole",

"holiday",

"holy",

"home",

"homeless",

"honest",

"honey",

"honor",

"hope",

"horizon",

"horror",

"horse",

"hospital",

"host",

"hot",

"hotel",

"hour",

"house",

"household",

"housing",

"how",

"however",

"huge",

"human",

"humor",

"hundred",

"hungry",

"hunter",

"hunting",

"hurt",

"husband",

"hypothesis",

"I",

"ice",

"idea",

"ideal",

"identification",

"identify",

"identity",

"ie",

"if",

"ignore",

"ill",

"illegal",

"illness",

"illustrate",

"image",

"imagination",

"imagine",

"immediate",

"immediately",

"immigrant",

"immigration",

"impact",

"implement",

"implication",

"imply",

"importance",

"important",

"impose",

"impossible",

"impress",

"impression",

"impressive",

"improve",

"improvement",

"in",

"incentive",

"incident",

"include",

"including",

"income",

"incorporate",

"increase",

"increased",

"increasing",

"increasingly",

"incredible",

"indeed",

"independence",

"independent",

"index",

"Indian",

"indicate",

"indication",

"individual",

"industrial",

"industry",

"infant",

"infection",

"inflation",

"influence",

"inform",

"information",

"ingredient",

"initial",

"initially",

"initiative",

"injury",

"inner",

"innocent",

"inquiry",

"inside",

"insight",

"insist",

"inspire",

"install",

"instance",

"instead",

"institution",

"institutional",

"instruction",

"instructor",

"instrument",

"insurance",

"intellectual",

"intelligence",

"intend",

"intense",

"intensity",

"intention",

"interaction",

"interest",

"interested",

"interesting",

"internal",

"international",

"Internet",

"interpret",

"interpretation",

"intervention",

"interview",

"into",

"introduce",

"introduction",

"invasion",

"invest",

"investigate",

"investigation",

"investigator",

"investment",

"investor",

"invite",

"involve",

"involved",

"involvement",

"Iraqi",

"Irish",

"iron",

"Islamic",

"island",

"Israeli",

"issue",

"it",

"Italian",

"item",

"its",

"itself",

"jacket",

"jail",

"Japanese",

"jet",

"Jew",

"Jewish",

"job",

"join",

"joint",

"joke",

"journal",

"journalist",

"journey",

"joy",

"judge",

"judgment",

"juice",

"jump",

"junior",

"jury",

"just",

"justice",

"justify",

"keep",

"key",

"kick",

"kid",

"kill",

"killer",

"killing",

"kind",

"king",

"kiss",

"kitchen",

"knee",

"knife",

"knock",

"know",

"knowledge",

"lab",

"label",

"labor",

"laboratory",

"lack",

"lady",

"lake",

"land",

"landscape",

"language",

"lap",

"large",

"largely",

"last",

"late",

"later",

"Latin",

"latter",

"laugh",

"launch",

"law",

"lawn",

"lawsuit",

"lawyer",

"lay",

"layer",

"lead",

"leader",

"leadership",

"leading",

"leaf",

"league",

"lean",

"learn",

"learning",

"least",

"leather",

"leave",

"left",

"leg",

"legacy",

"legal",

"legend",

"legislation",

"legitimate",

"lemon",

"length",

"less",

"lesson",

"let",

"letter",

"level",

"liberal",

"library",

"license",

"lie",

"life",

"lifestyle",

"lifetime",

"lift",

"light",

"like",

"likely",

"limit",

"limitation",

"limited",

"line",

"link",

"lip",

"list",

"listen",

"literally",

"literary",

"literature",

"little",

"live",

"living",

"load",

"loan",

"local",

"locate",

"location",

"lock",

"long",

"long-term",

"look",

"loose",

"lose",

"loss",

"lost",

"lot",

"lots",

"loud",

"love",

"lovely",

"lover",

"low",

"lower",

"luck",

"lucky",

"lunch",

"lung",

"machine",

"mad",

"magazine",

"mail",

"main",

"mainly",

"maintain",

"maintenance",

"major",

"majority",

"make",

"maker",

"makeup",

"male",

"mall",

"man",

"manage",

"management",

"manager",

"manner",

"manufacturer",

"manufacturing",

"many",

"map",

"margin",

"mark",

"market",

"marketing",

"marriage",

"married",

"marry",

"mask",

"mass",

"massive",

"master",

"match",

"material",

"math",

"matter",

"may",

"maybe",

"mayor",

"me",

"meal",

"mean",

"meaning",

"meanwhile",

"measure",

"measurement",

"meat",

"mechanism",

"media",

"medical",

"medication",

"medicine",

"medium",

"meet",

"meeting",

"member",

"membership",

"memory",

"mental",

"mention",

"menu",

"mere",

"merely",

"mess",

"message",

"metal",

"meter",

"method",

"Mexican",

"middle",

"might",

"military",

"milk",

"million",

"mind",

"mine",

"minister",

"minor",

"minority",

"minute",

"miracle",

"mirror",

"miss",

"missile",

"mission",

"mistake",

"mix",

"mixture",

"mm-hmm",

"mode",

"model",

"moderate",

"modern",

"modest",

"mom",

"moment",

"money",

"monitor",

"month",

"mood",

"moon",

"moral",

"more",

"moreover",

"morning",

"mortgage",

"most",

"mostly",

"mother",

"motion",

"motivation",

"motor",

"mount",

"mountain",

"mouse",

"mouth",

"move",

"movement",

"movie",

"Mr",

"Mrs",

"Ms",

"much",

"multiple",

"murder",

"muscle",

"museum",

"music",

"musical",

"musician",

"Muslim",

"must",

"mutual",

"my",

"myself",

"mystery",

"myth",

"naked",

"name",

"narrative",

"narrow",

"nation",

"national",

"native",

"natural",

"naturally",

"nature",

"near",

"nearby",

"nearly",

"necessarily",

"necessary",

"neck",

"need",

"negative",

"negotiate",

"negotiation",

"neighbor",

"neighborhood",

"neither",

"nerve",

"nervous",

"net",

"network",

"never",

"nevertheless",

"new",

"newly",

"news",

"newspaper",

"next",

"nice",

"night",

"nine",

"no",

"nobody",

"nod",

"noise",

"nomination",

"none",

"nonetheless",

"nor",

"normal",

"normally",

"north",

"northern",

"nose",

"not",

"note",

"nothing",

"notice",

"notion",

"novel",

"now",

"nowhere",

"n't",

"nuclear",

"number",

"numerous",

"nurse",

"nut",

"object",

"objective",

"obligation",

"observation",

"observe",

"observer",

"obtain",

"obvious",

"obviously",

"occasion",

"occasionally",

"occupation",

"occupy",

"occur",

"ocean",

"odd",

"odds",

"of",

"off",

"offense",

"offensive",

"offer",

"office",

"officer",

"official",

"often",

"oh",

"oil",

"ok",

"okay",

"old",

"Olympic",

"on",

"once",

"one",

"ongoing",

"onion",

"online",

"only",

"onto",

"open",

"opening",

"operate",

"operating",

"operation",

"operator",

"opinion",

"opponent",

"opportunity",

"oppose",

"opposite",

"opposition",

"option",

"or",

"orange",

"order",

"ordinary",

"organic",

"organization",

"organize",

"orientation",

"origin",

"original",

"originally",

"other",

"others",

"otherwise",

"ought",

"our",

"ourselves",

"out",

"outcome",

"outside",

"oven",

"over",

"overall",

"overcome",

"overlook",

"owe",

"own",

"owner",

"pace",

"pack",

"package",

"page",

"pain",

"painful",

"paint",

"painter",

"painting",

"pair",

"pale",

"Palestinian",

"palm",

"pan",

"panel",

"pant",

"paper",

"parent",

"park",

"parking",

"part",

"participant",

"participate",

"participation",

"particular",

"particularly",

"partly",

"partner",

"partnership",

"party",

"pass",

"passage",

"passenger",

"passion",

"past",

"patch",

"path",

"patient",

"pattern",

"pause",

"pay",

"payment",

"PC",

"peace",

"peak",

"peer",

"penalty",

"people",

"pepper",

"per",

"perceive",

"percentage",

"perception",

"perfect",

"perfectly",

"perform",

"performance",

"perhaps",

"period",

"permanent",

"permission",

"permit",

"person",

"personal",

"personality",

"personally",

"personnel",

"perspective",

"persuade",

"pet",

"phase",

"phenomenon",

"philosophy",

"phone",

"photo",

"photograph",

"photographer",

"phrase",

"physical",

"physically",

"physician",

"piano",

"pick",

"picture",

"pie",

"piece",

"pile",

"pilot",

"pine",

"pink",

"pipe",

"pitch",

"place",

"plan",

"plane",

"planet",

"planning",

"plant",

"plastic",

"plate",

"platform",

"play",

"player",

"please",

"pleasure",

"plenty",

"plot",

"plus",

"PM",

"pocket",

"poem",

"poet",

"poetry",

"point",

"pole",

"police",

"policy",

"political",

"politically",

"politician",

"politics",

"poll",

"pollution",

"pool",

"poor",

"pop",

"popular",

"population",

"porch",

"port",

"portion",

"portrait",

"portray",

"pose",

"position",

"positive",

"possess",

"possibility",

"possible",

"possibly",

"post",

"pot",

"potato",

"potential",

"potentially",

"pound",

"pour",

"poverty",

"powder",

"power",

"powerful",

"practical",

"practice",

"pray",

"prayer",

"precisely",

"predict",

"prefer",

"preference",

"pregnancy",

"pregnant",

"preparation",

"prepare",

"prescription",

"presence",

"present",

"presentation",

"preserve",

"president",

"presidential",

"press",

"pressure",

"pretend",

"pretty",

"prevent",

"previous",

"previously",

"price",

"pride",

"priest",

"primarily",

"primary",

"prime",

"principal",

"principle",

"print",

"prior",

"priority",

"prison",

"prisoner",

"privacy",

"private",

"probably",

"problem",

"procedure",

"proceed",

"process",

"produce",

"producer",

"product",

"production",

"profession",

"professional",

"professor",

"profile",

"profit",

"program",

"progress",

"project",

"prominent",

"promise",

"promote",

"prompt",

"proof",

"proper",

"properly",

"property",

"proportion",

"proposal",

"propose",

"proposed",

"prosecutor",

"prospect",

"protect",

"protection",

"protein",

"protest",

"proud",

"prove",

"provide",

"provider",

"province",

"provision",

"psychological",

"psychologist",

"psychology",

"public",

"publication",

"publicly",

"publish",

"publisher",

"pull",

"punishment",

"purchase",

"pure",

"purpose",

"pursue",

"push",

"put",

"qualify",

"quality",

"quarter",

"quarterback",

"question",

"quick",

"quickly",

"quiet",

"quietly",

"quit",

"quite",

"quote",

"race",

"racial",

"radical",

"radio",

"rail",

"rain",

"raise",

"range",

"rank",

"rapid",

"rapidly",

"rare",

"rarely",

"rate",

"rather",

"rating",

"ratio",

"raw",

"reach",

"react",

"reaction",

"read",

"reader",

"reading",

"ready",

"real",

"reality",

"realize",

"really",

"reason",

"reasonable",

"recall",

"receive",

"recent",

"recently",

"recipe",

"recognition",

"recognize",

"recommend",

"recommendation",

"record",

"recording",

"recover",

"recovery",

"recruit",

"red",

"reduce",

"reduction",

"refer",

"reference",

"reflect",

"reflection",

"reform",

"refugee",

"refuse",

"regard",

"regarding",

"regardless",

"regime",

"region",

"regional",

"register",

"regular",

"regularly",

"regulate",

"regulation",

"reinforce",

"reject",

"relate",

"relation",

"relationship",

"relative",

"relatively",

"relax",

"release",

"relevant",

"relief",

"religion",

"religious",

"rely",

"remain",

"remaining",

"remarkable",

"remember",

"remind",

"remote",

"remove",

"repeat",

"repeatedly",

"replace",

"reply",

"report",

"reporter",

"represent",

"representation",

"representative",

"Republican",

"reputation",

"request",

"require",

"requirement",

"research",

"researcher",

"resemble",

"reservation",

"resident",

"resist",

"resistance",

"resolution",

"resolve",

"resort",

"resource",

"respect",

"respond",

"respondent",

"response",

"responsibility",

"responsible",

"rest",

"restaurant",

"restore",

"restriction",

"result",

"retain",

"retire",

"retirement",

"return",

"reveal",

"revenue",

"review",

"revolution",

"rhythm",

"rice",

"rich",

"rid",

"ride",

"rifle",

"right",

"ring",

"rise",

"risk",

"river",

"road",

"rock",

"role",

"roll",

"romantic",

"roof",

"room",

"root",

"rope",

"rose",

"rough",

"roughly",

"round",

"route",

"routine",

"row",

"rub",

"rule",

"run",

"running",

"rural",

"rush",

"Russian",

"sacred",

"sad",

"safe",

"safety",

"sake",

"salad",

"salary",

"sale",

"sales",

"salt",

"same",

"sample",

"sanction",

"sand",

"satellite",

"satisfaction",

"satisfy",

"sauce",

"save",

"saving",

"say",

"scale",

"scandal",

"scared",

"scenario",

"scene",

"schedule",

"scheme",

"scholar",

"scholarship",

"school",

"science",

"scientific",

"scientist",

"scope",

"score",

"scream",

"screen",

"script",

"sea",

"search",

"season",

"seat",

"second",

"secret",

"secretary",

"section",

"sector",

"secure",

"security",

"see",

"seed",

"seek",

"seem",

"segment",

"seize",

"select",

"selection",

"self",

"sell",

"Senate",

"senator",

"send",

"senior",

"sense",

"sensitive",

"sentence",

"separate",

"sequence",

"series",

"serious",

"seriously",

"serve",

"service",

"session",

"set",

"setting",

"settle",

"settlement",

"seven",

"several",

"severe",

"sex",

"sexual",

"shade",

"shadow",

"shake",

"shall",

"shape",

"share",

"sharp",

"she",

"sheet",

"shelf",

"shell",

"shelter",

"shift",

"shine",

"ship",

"shirt",

"shit",

"shock",

"shoe",

"shoot",

"shooting",

"shop",

"shopping",

"shore",

"short",

"shortly",

"shot",

"should",

"shoulder",

"shout",

"show",

"shower",

"shrug",

"shut",

"sick",

"side",

"sigh",

"sight",

"sign",

"signal",

"significance",

"significant",

"significantly",

"silence",

"silent",

"silver",

"similar",

"similarly",

"simple",

"simply",

"sin",

"since",

"sing",

"singer",

"single",

"sink",

"sir",

"sister",

"sit",

"site",

"situation",

"six",

"size",

"ski",

"skill",

"skin",

"sky",

"slave",

"sleep",

"slice",

"slide",

"slight",

"slightly",

"slip",

"slow",

"slowly",

"small",

"smart",

"smell",

"smile",

"smoke",

"smooth",

"snap",

"snow",

"so",

"so-called",

"soccer",

"social",

"society",

"soft",

"software",

"soil",

"solar",

"soldier",

"solid",

"solution",

"solve",

"some",

"somebody",

"somehow",

"someone",

"something",

"sometimes",

"somewhat",

"somewhere",

"son",

"song",

"soon",

"sophisticated",

"sorry",

"sort",

"soul",

"sound",

"soup",

"source",

"south",

"southern",

"Soviet",

"space",

"Spanish",

"speak",

"speaker",

"special",

"specialist",

"species",

"specific",

"specifically",

"speech",

"speed",

"spend",

"spending",

"spin",

"spirit",

"spiritual",

"split",

"spokesman",

"sport",

"spot",

"spread",

"spring",

"square",

"squeeze",

"stability",

"stable",

"staff",

"stage",

"stair",

"stake",

"stand",

"standard",

"standing",

"star",

"stare",

"start",

"state",

"statement",

"station",

"statistics",

"status",

"stay",

"steady",

"steal",

"steel",

"step",

"stick",

"still",

"stir",

"stock",

"stomach",

"stone",

"stop",

"storage",

"store",

"storm",

"story",

"straight",

"strange",

"stranger",

"strategic",

"strategy",

"stream",

"street",

"strength",

"strengthen",

"stress",

"stretch",

"strike",

"string",

"strip",

"stroke",

"strong",

"strongly",

"structure",

"struggle",

"student",

"studio",

"study",

"stuff",

"stupid",

"style",

"subject",

"submit",

"subsequent",

"substance",

"substantial",

"succeed",

"success",

"successful",

"successfully",

"such",

"sudden",

"suddenly",

"sue",

"suffer",

"sufficient",

"sugar",

"suggest",

"suggestion",

"suicide",

"suit",

"summer",

"summit",

"sun",

"super",

"supply",

"support",

"supporter",

"suppose",

"supposed",

"Supreme",

"sure",

"surely",

"surface",

"surgery",

"surprise",

"surprised",

"surprising",

"surprisingly",

"surround",

"survey",

"survival",

"survive",

"survivor",

"suspect",

"sustain",

"swear",

"sweep",

"sweet",

"swim",

"swing",

"switch",

"symbol",

"symptom",

"system",

"table",

"tablespoon",

"tactic",

"tail",

"take",

"tale",

"talent",

"talk",

"tall",

"tank",

"tap",

"tape",

"target",

"task",

"taste",

"tax",

"taxpayer",

"tea",

"teach",

"teacher",

"teaching",

"team",

"tear",

"teaspoon",

"technical",

"technique",

"technology",

"teen",

"teenager",

"telephone",

"telescope",

"television",

"tell",

"temperature",

"temporary",

"ten",

"tend",

"tendency",

"tennis",

"tension",

"tent",

"term",

"terms",

"terrible",

"territory",

"terror",

"terrorism",

"terrorist",

"test",

"testify",

"testimony",

"testing",

"text",

"than",

"thank",

"thanks",

"that",

"the",

"theater",

"their",

"them",

"theme",

"themselves",

"then",

"theory",

"therapy",

"there",

"therefore",

"these",

"they",

"thick",

"thin",

"thing",

"think",

"thinking",

"third",

"thirty",

"this",

"those",

"though",

"thought",

"thousand",

"threat",

"threaten",

"three",

"throat",

"through",

"throughout",

"throw",

"thus",

"ticket",

"tie",

"tight",

"time",

"tiny",

"tip",

"tire",

"tired",

"tissue",

"title",

"to",

"tobacco",

"today",

"toe",

"together",

"tomato",

"tomorrow",

"tone",

"tongue",

"tonight",

"too",

"tool",

"tooth",

"top",

"topic",

"toss",

"total",

"totally",

"touch",

"tough",

"tour",

"tourist",

"tournament",

"toward",

"towards",

"tower",

"town",

"toy",

"trace",

"track",

"trade",

"tradition",

"traditional",

"traffic",

"tragedy",

"trail",

"train",

"training",

"transfer",

"transform",

"transformation",

"transition",

"translate",

"transportation",

"travel",

"treat",

"treatment",

"treaty",

"tree",

"tremendous",

"trend",

"trial",

"tribe",

"trick",

"trip",

"troop",

"trouble",

"truck",

"1",

"truly",

"trust",

"truth",

"try",

"tube",

"tunnel",

"turn",

"TV",

"twelve",

"twenty",

"twice",

"twin",

"two",

"type",

"typical",

"typically",

"ugly",

"ultimate",

"ultimately",

"unable",

"uncle",

"under",

"undergo",

"understand",

"understanding",

"unfortunately",

"uniform",

"union",

"unique",

"unit",

"United",

"universal",

"universe",

"university",

"unknown",

"unless",

"unlike",

"unlikely",

"until",

"unusual",

"up",

"upon",

"upper",

"urban",

"urge",

"us",

"use",

"used",

"useful",

"user",

"usual",

"usually",

"utility",

"vacation",

"valley",

"valuable",

"value",

"variable",

"variation",

"variety",

"various",

"vary",

"vast",

"vegetable",

"vehicle",

"venture",

"version",

"versus",

"very",

"vessel",

"veteran",

"via",

"victim",

"victory",

"video",

"view",

"viewer",

"village",

"violate",

"violation",

"violence",

"violent",

"virtually",

"virtue",

"virus",

"visible",

"vision",

"visit",

"visitor",

"visual",

"vital",

"voice",

"volume",

"volunteer",

"vote",

"voter",

"vs",

"vulnerable",

"wage",

"wait",

"wake",

"walk",

"wall",

"wander",

"want",

"war",

"warm",

"warn",

"warning",

"wash",

"waste",

"watch",

"water",

"wave",

"way",

"we",

"weak",

"wealth",

"wealthy",

"weapon",

"wear",

"weather",

"wedding",

"week",

"weekend",

"weekly",

"weigh",

"weight",

"welcome",

"welfare",

"well",

"west",

"western",

"wet",

"what",

"whatever",

"wheel",

"when",

"whenever",

"where",

"whereas",

"whether",

"which",

"while",

"whisper",

"white",

"who",

"whole",

"whom",

"whose",

"why",

"wide",

"widely",

"widespread",

"wife",

"wild",

"will",

"willing",

"win",

"wind",

"window",

"wine",

"wing",

"winner",

"winter",

"wipe",

"wire",

"wisdom",

"wise",

"wish",

"with",

"withdraw",

"within",

"without",

"witness",

"woman",

"wonder",

"wonderful",

"wood",

"wooden",

"word",

"work",

"worker",

"working",

"works",

"workshop",

"world",

"worried",

"worry",

"worth",

"would",

"wound",

"wrap",

"write",

"writer",

"writing",

"wrong",

"yard",

"yeah",

"year",

"yell",

"yellow",

"yes",

"yesterday",

"yet",

"yield",

"you",

"young",

"your",

"yours",

"yourself",

"youth",

"zone",];

const pol=[
"opuścić",

"umiejętność",

"zdolny",

"aborcja",

"o",

"nad",

"za granicą",

"brak",

"absolutny",

"absolutnie",

"absorbować",

"nadużywać",

"akademicki",

"zaakceptować",

"dostęp",

"wypadek",

"towarzyszyć",

"ukończyć",

"według",

"rachunek",

"dokładny",

"oskarżać",

"osiągnąć",

"osiągnięcie",

"kwas",

"uznawać",

"nabywać",

"przez",

"akt",

"akcja",

"aktywny",

"aktywista",

"działalność",

"aktor",

"aktorka",

"rzeczywisty",

"Właściwie",

"ogłoszenie",

"przystosować się",

"Dodaj",

"dodatek",

"dodatkowy",

"adres zamieszkania",

"odpowiedni",

"dostosować",

"dostosowanie",

"administracja",

"administrator",

"podziwiać",

"wstęp",

"przyznawać ",

"dorastający",

"przyjąć",

"dorosły",

"osiągnięcie",

"zaawansowane",

"korzyść",

"przygoda",

"reklama",

"Rada",

"radzić",

"doradca",

"rzecznik",

"romans",

"wpłynąć",

"pozwalać",

"przestraszony",

"afrykanin",

"Afroamerykanin",

"po",

"wieczór",

"ponownie",

"przeciwko",

"wiek",

"agencja",

"porządek obrad",

"agent",

"agresywny",

"temu",

"Zgodzić się",

"umowa",

"rolniczy",

"Ah",

"dalej",

"pomoc",

"doradca",

"AIDS",

"cel",

"powietrze",

"samolot",

"linia lotnicza",

"Lotnisko",

"album",

"alkohol",

"żywy",

"wszystko",

"Sojusz",

"umożliwić",

"sprzymierzyć",

"prawie",

"sam",

"przed siebie",

"już",

"Również",

"zmieniać",

"alternatywny",

"Chociaż",

"zawsze",

"JESTEM",

"zdumiewający",

"amerykański",

"wśród",

"ilość",

"analiza",

"analityk",

"analizować",

"starożytny",

"oraz",

"gniew",

"kąt",

"zły",

"zwierzę",

"rocznica",

"ogłosić",

"coroczny",

"inne",

"odpowiadać",

"przewidywać",

"lęk",

"każdy",

"ktoś",

"nie więcej",

"ktokolwiek",

"byle co",

"w każdym razie",

"gdziekolwiek",

"oprócz",

"apartament",

"pozorny",

"widocznie",

"odwołanie",

"pojawić się",

"wygląd zewnętrzny",

"jabłko",

"aplikacja",

"stosować",

"wyznaczać",

"wizyta, umówione spotkanie",

"doceniać",

"zbliżać się",

"właściwy",

"aprobata",

"zatwierdzić",

"około",

"Arab",

"architekt",

"powierzchnia",

"kłócić się",

"argument",

"powstać",

"ramię",

"uzbrojony",

"armia",

"na około",

"zorganizować",

"układ",

"aresztować",

"przyjazd",

"przyjechać",

"sztuka",

"artykuł",

"artysta",

"artystyczny",

"jak",

"Azjatka",

"na bok",

"zapytać się",

"we śnie",

"aspekt",

"napaść",

"zapewniać",

"oceniać",

"oszacowanie",

"zaleta",

"przydzielać",

"zadanie",

"wspierać",

"wsparcie",

"asystent",

"współpracownik",

"stowarzyszenie",

"założyć",

"założenie",

"gwarantować",

"w",

"sportowiec",

"atletyczny",

"atmosfera",

"przytwierdzać",

"atak",

"próba",

"brać udział w",

"Uwaga",

"nastawienie",

"adwokat",

"pociągać",

"atrakcyjny",

"atrybut",

"publiczność",

"autor",

"autorytet",

"automatyczny",

"do dyspozycji",

"przeciętny",

"unikać",

"nagroda",

"świadomy",

"świadomość",

"z dala",

"okropny",

"Dziecko",

"plecy",

"tło",

"zły",

"źle",

"torba",

"upiec",

"saldo",

"piłka",

"zakaz",

"pasmo",

"Bank",

"bar",

"ledwie",

"beczka",

"bariera",

"baza",

"baseball",

"podstawowy",

"zasadniczo",

"podstawa",

"kosz",

"Koszykówka",

"łazienka",

"bateria",

"bitwa",

"być",

"plaża",

"fasola",

"niedźwiedź",

"bić",

"piękny",

"piękno",

"dlatego",

"stać się",

"łóżko",

"sypialnia",

"piwo",

"zanim",

"zaczynać",

"początek",

"zachowanie",

"za",

"istnienie",

"wiara",

"uważać",

"dzwon",

"należeć",

"poniżej",

"pas",

"ławka",

"schylać się",

"pod",

"korzyść",

"obok",

"oprócz",

"Najlepsza",

"Zakład",

"lepiej",

"pomiędzy",

"poza",

"Biblia",

"duża",

"rower",

"rachunek",

"miliard",

"wiązać",

"biologiczny",

"ptak",

"narodziny",

"urodziny",

"fragment",

"ugryzienie",

"czarny",

"ostrze",

"winić",

"koc",

"ślepy",

"blok",

"krew",

"cios",

"niebieski",

"tablica",

"łódź",

"ciało",

"bomba",

"bombardowanie",

"obligacja",

"kość",

"książka",

"Bum",

"uruchomić",

"granica",

"urodzić się",

"pożyczyć",

"szef",

"Zarówno",

"niepokoić",

"butelka",

"na dole",

"granica",

"miska",

"skrzynka",

"chłopak",

"chłopak",

"mózg",

"oddział",

"Marka",

"chleb",

"przerwanie",

"śniadanie",

"pierś",

"oddech",

"oddychać",

"cegła",

"most",

"krótki",

"krótko",

"jasny",

"znakomity",

"przynieść",

"brytyjski",

"szeroki",

"złamany",

"brat",

"brązowy",

"szczotka",

"bryknięcie",

"budżet",

"budować",

"budynek",

"pocisk",

"garść",

"ciężar",

"oparzenie",

"pogrzebać",

"autobus",

"biznes",

"zajęty",

"ale",

"masło",

"przycisk",

"Kup",

"kupujący",

"za pomocą",

"kabina",

"gabinet",

"kabel",

"ciasto",

"Oblicz",

"połączenie",

"aparat fotograficzny",

"obóz",

"kampania",

"kampus",

"Móc",

"kanadyjski",

"nowotwór",

"kandydat",

"czapka",

"zdolność",

"zdolny",

"Pojemność",

"kapitał",

"kapitan",

"zdobyć",

"samochód",

"węgiel",

"karta",

"opieka",

"kariera",

"ostrożny",

"ostrożnie",

"nośnik",

"mieć przy sobie",

"walizka",

"gotówka",

"rzucać ",

"kot",

"złapać",

"Kategoria",

"katolicki",

"przyczyna",

"sufit",

"świętować",

"uroczystość",

"sława",

"komórka",

"środek",

"centralny",

"wiek",

"CEO",

"ceremonia",

"pewny",

"z pewnością",

"łańcuch",

"krzesło",

"przewodniczący",

"wyzwanie",

"izba",

"mistrz",

"mistrzostwo",

"szansa",

"zmiana",

"wymiana pieniędzy",

"kanał",

"rozdział",

"postać",

"Charakterystyka",

"charakteryzować",

"opłata",

"jałmużna",

"wykres",

"pościg",

"tani",

"sprawdzać",

"policzek",

"ser",

"szef kuchni",

"chemiczny",

"skrzynia",

"kurczak",

"szef",

"dziecko",

"dzieciństwo",

"chiński",

"żeton",

"czekolada",

"wybór",

"cholesterol",

"wybierać",

"chrześcijanin",

"Boże Narodzenie",

"kościół",

"papieros",

"okrąg",

"okoliczność",

"cytować",

"obywatel",

"Miasto",

"cywilny",

"cywil",

"prawo",

"klasa",

"klasyczny",

"klasa",

"czysty",

"jasne",

"Wyraźnie",

"klient",

"klimat",

"wspinać się",

"klinika",

"kliniczny",

"zegar",

"blisko",

"dokładnie",

"bliższy",

"odzież",

"odzież",

"Chmura",

"Klub",

"Wskazówka",

"grupa",

"trener",

"węgiel",

"koalicja",

"Wybrzeże",

"płaszcz",

"kod",

"Kawa",

"kognitywny",

"przeziębienie",

"upadek",

"kolega z pracy",

"zebrać",

"kolekcja",

"kolektyw",

"Szkoła Wyższa",

"kolonialny",

"kolor",

"kolumna",

"połączenie",

"połączyć",

"chodź",

"komedia",

"komfort",

"wygodna",

"Komenda",

"dowódca",

"komentarz",

"Reklama w telewizji",

"zamawiać",

"popełniać",

"zaangażowanie",

"komisja",

"wspólny",

"komunikować się",

"Komunikacja",

"wspólnota",

"firma",

"porównywać",

"porównanie",

"konkurować",

"konkurencja",

"konkurencyjny",

"konkurent",

"skarżyć się",

"skarga",

"kompletny",

"całkowicie",

"złożony",

"skomplikowany",

"składnik",

"komponować",

"kompozycja",

"wyczerpujący",

"komputer",

"skupiać się",

"stężenie",

"pojęcie",

"sprawa",

"zainteresowany",

"koncert",

"wyciągnąć wniosek",

"wniosek",

"beton",

"stan",

"przeprowadzić",

"konferencja",

"zaufanie",

"pewny siebie",

"potwierdzać",

"konflikt",

"konfrontować",

"dezorientacja",

"Kongres",

"kongresowy",

"łączyć",

"połączenie",

"świadomość",

"zgoda",

"konsekwencja",

"konserwatywny",

"rozważać",

"znaczny",

"namysł",

"składać się",

"spójny",

"stały",

"stale",

"stanowić",

"konstytucyjny",

"zbudować",

"budowa",

"konsultant",

"konsumować",

"konsument",

"konsumpcja",

"kontakt",

"zawierać",

"pojemnik",

"współczesny",

"zawartość",

"Konkurs",

"kontekst",

"kontynuować",

"nieprzerwany",

"kontrakt",

"kontrast",

"przyczynić się",

"składka",

"kontrola",

"kontrowersyjny",

"spór",

"Konwencja",

"standardowy",

"rozmowa",

"konwertować",

"przekonanie",

"przekonać",

"gotować",

"ciastko",

"gotowanie",

"Fajny",

"współpraca",

"policjant",

"radzić sobie",

"Kopiuj",

"rdzeń",

"kukurydza",

"narożnik",

"zbiorowy",

"Korporacja",

"prawidłowy",

"korespondent",

"koszt",

"bawełna",

"kanapa",

"mógłby",

"rada",

"doradca",

"liczyć",

"licznik",

"kraj",

"Hrabstwo",

"para",

"odwaga",

"kurs",

"Sąd",

"kuzyn",

"pokrywa",

"zasięg",

"krowa",

"pękać",

"rękodzieło",

"rozbić się",

"zwariowany",

"krem",

"Stwórz",

"kreacja",

"twórczy",

"kreatura",

"kredyt",

"załoga",

"przestępczość",

"kryminalista",

"kryzys",

"kryteria",

"krytyk",

"krytyczny",

"krytyka",

"krytykować",

"przyciąć",

"krzyż",

"tłum",

"kluczowy",

"płakać",

"kulturalny",

"kultura",

"Puchar",

"ciekawski",

"obecny",

"w tej chwili",

"program",

"zwyczaj",

"klient",

"skaleczenie",

"cykl",

"tata",

"codzienny",

"szkoda",

"taniec",

"zagrożenie",

"niebezpieczny",

"odważyć się",

"ciemny",

"ciemność",

"dane",

"data",

"córka",

"dzień",

"nie żyje",

"sprawa",

"kupiec",

"droga",

"śmierć",

"debata",

"dług",

"dekada",

"zdecydować",

"decyzja",

"talia kart",

"ogłosić",

"spadek",

"zmniejszać",

"głęboko",

"głęboko",

"jeleń",

"Pokonać",

"bronić",

"pozwany",

"obrona",

"obronny",

"deficyt",

"definiować",

"Zdecydowanie",

"definicja",

"stopień",

"opóźnienie",

"dostarczyć",

"dostawa",

"żądanie",

"demokracja",

"Demokrata",

"demokratyczny",

"wykazać",

"demonstracja",

"zaprzeczyć",

"dział",

"zależeć",

"zależny",

"zależnie od",

"przedstawiać",

"depresja",

"głębokość",

"zastępca",

"czerpać",

"opisać",

"opis",

"pustynia",

"zasługiwać",

"projekt",

"projektant",

"pragnienie",

"biurko",

"zdesperowany",

"mimo",

"zniszczyć",

"zniszczenie",

"Szczegół",

"szczegółowy",

"wykryć",

"określać",

"rozwijać",

"rozwijanie",

"rozwój",

"urządzenie",

"poświęcać",

"dialog",

"umierać",

"dieta",

"różnić się",

"różnica",

"różne",

"różnie",

"trudny",

"trudność",

"kopać",

"cyfrowy",

"wymiar",

"jadalnia",

"obiad",

"bezpośredni",

"kierunek",

"bezpośrednio",

"dyrektor",

"brud",

"brudny",

"inwalidztwo",

"nie zgadzać się",

"znikać",

"katastrofa",

"dyscyplina",

"rozprawiać",

"odkryć",

"odkrycie",

"dyskryminacja",

"omówić",

"dyskusja",

"choroba",

"danie",

"odrzucać",

"nieład",

"wyświetlacz",

"Spierać się",

"dystans",

"odległy",

"odrębny",

"różnica",

"wyróżnić",

"rozprowadzać",

"dystrybucja",

"dzielnica",

"różnorodny",

"różnorodność",

"dzielić",

"podział",

"rozwód",

"DNA",

"robić",

"lekarz",

"dokument",

"pies",

"domowy",

"dominujący",

"zdominować",

"drzwi",

"podwójnie",

"wątpić",

"na dół",

"śródmieście",

"tuzin",

"projekt",

"ciągnąć",

"dramat",

"dramatyczny",

"dramatycznie",

"remis",

"rysunek",

"śnić",

"sukienka",

"drink",

"prowadzić",

"kierowca",

"upuszczać",

"lek",

"suchy",

"należny",

"w trakcie",

"pył",

"obowiązek",

"każdy",

"chętny",

"ucho",

"wczesny",

"zarabiać",

"zyski",

"Ziemia",

"łatwość",

"z łatwością",

"wschód",

"wschodni",

"łatwo",

"jeść",

"gospodarczy",

"Ekonomia",

"ekonomista",

"gospodarka",

"Brzeg",

"wydanie",

"redaktor",

"kształcić",

"Edukacja",

"edukacyjny",

"pedagog",

"efekt",

"skuteczny",

"efektywnie",

"efektywność",

"wydajny",

"wysiłek",

"jajko",

"osiem",

"zarówno",

"Starsi",

"elekt",

"wybór",

"elektryczny",

"Elektryczność",

"elektroniczny",

"element",

"podstawowy",

"wyeliminować",

"elita",

"w przeciwnym razie",

"gdzie indziej",

"e-mail",

"uścisk",

"pojawić się",

"nagły wypadek",

"emisja",

"emocja",

"emocjonalny",

"podkreślenie",

"podkreślić",

"zatrudniać",

"pracownik",

"pracodawca",

"zatrudnienie",

"pusty",

"włączać",

"spotkanie",

"zachęcać",

"koniec",

"wróg",

"energia",

"egzekwowanie",

"angażować się",

"silnik",

"inżynier",

"Inżynieria",

"język angielski",

"zwiększyć",

"smacznego",

"ogromny",

"wystarczająco ",

"zapewnić",

"wejść",

"przedsiębiorstwo",

"zabawa",

"Cały",

"całkowicie",

"wejście",

"wejście",

"środowisko",

"środowiskowy",

"epizod",

"równy",

"na równi",

"ekwipunek",

"era",

"błąd",

"ucieczka",

"szczególnie",

"Praca pisemna",

"niezbędny",

"głównie",

"tworzyć",

"ustanowienie",

"osiedle",

"oszacować",

"itp",

"etyka",

"etniczny",

"europejski",

"oceniać",

"ocena",

"nawet",

"wieczór",

"wydarzenie",

"ostatecznie",

"zawsze",

"każdy",

"wszyscy",

"codzienny",

"każdy",

"wszystko",

"wszędzie",

"dowód",

"ewolucja",

"ewoluować",

"dokładny",

"dokładnie",

"badanie",

"zbadać",

"przykład",

"przekroczyć",

"doskonały",

"oprócz",

"wyjątek",

"Wymieniać się",

"ekscytujący",

"wykonawczy",

"ćwiczenie",

"eksponować",

"wystawa",

"istnieć",

"istnienie",

"istniejący",

"zwiększać",

"ekspansja",

"oczekiwać",

"oczekiwanie",

"koszt",

"kosztowny",

"doświadczenie",

"eksperyment",

"ekspert",

"wyjaśnić",

"wyjaśnienie",

"eksplodować",

"badać",

"eksplozja",

"ujawnić",

"narażenie",

"wyrazić",

"wyrażenie",

"rozszerzyć",

"rozbudowa",

"rozległy",

"zakres",

"zewnętrzny",

"dodatkowy",

"nadzwyczajny",

"skrajny",

"niezwykle",

"oko",

"tkanina",

"Twarz",

"obiekt",

"fakt",

"czynnik",

"fabryka",

"Wydział",

"znikać",

"ponieść porażkę",

"awaria",

"sprawiedliwy",

"raczej",

"wiara",

"spadek",

"FAŁSZYWY",

"znajomy, rodzinny",

"rodzina",

"słynny",

"miłośnik",

"Fantazja",

"daleko",

"gospodarstwo rolne",

"rolnik",

"moda",

"szybki",

"tłuszcz",

"los",

"ojciec",

"wada",

"przychylność",

"ulubiony",

"strach",

"funkcja",

"federalny",

"opłata",

"karmić",

"czuć",

"uczucie",

"kolega",

"kobieta",

"ogrodzenie",

"mało",

"mniej",

"błonnik",

"fikcja",

"pole",

"piętnaście",

"piąty",

"pięćdziesiąt",

"walka",

"wojownik",

"walczący",

"postać",

"plik",

"wypełnić",

"film",

"finał",

"wreszcie",

"finanse",

"budżetowy",

"odnaleźć",

"odkrycie",

"Cienki",

"palec",

"koniec",

"ogień",

"solidny",

"pierwszy",

"ryba",

"Wędkarstwo",

"pasować",

"zdatność",

"pięć",

"naprawić",

"flaga",

"płomień",

"mieszkanie",

"smak",

"uciec",

"ciało",

"lot",

"platforma",

"piętro",

"pływ",

"kwiat",

"latać",

"skupiać",

"Ludowy",

"śledzić",

"następny",

"jedzenie",

"stopa",

"piłka nożna",

"dla",

"zmuszać",

"zagraniczny",

"las",

"na zawsze",

"zapominać",

"Formularz",

"formalny",

"tworzenie",

"dawny",

"formuła",

"naprzód",

"fortuna",

"Naprzód",

"znaleziony",

"Fundacja",

"założyciel",

"cztery",

"czwarty",

"rama",

"struktura",

"darmowy",

"wolność",

"zamrażać",

"Francuski",

"częstotliwość",

"częsty",

"często",

"świeży",

"przyjaciel",

"przyjazny",

"przyjaźń",

"z",

"przód",

"owoc",

"udaremnienie",

"paliwo",

"pełny",

"w pełni",

"zabawa",

"funkcjonować",

"fundusz",

"fundamentalny",

"Finansowanie",

"pogrzeb",

"zabawny",

"meble",

"Ponadto",

"przyszły",

"osiągać",

"galaktyka",

"Galeria",

"gra",

"banda",

"luka",

"garaż",

"ogród",

"czosnek",

"gaz",

"brama",

"zebrać",

"gej",

"spojrzenie",

"bieg ",

"płeć",

"gen",

"ogólny",

"ogólnie",

"Generować",

"Pokolenie",

"genetyczny",

"pan",

"łagodnie",

"Niemiecki",

"gest",

"Dostawać",

"duch",

"ogromny",

"prezent",

"utalentowany",

"dziewczyna",

"dziewczyna",

"dawać",

"dany",

"zadowolony",

"zerknąć",

"szkło",

"światowy",

"rękawica",

"iść",

"bramka",

"Bóg",

"złoto",

"złoty",

"golf",

"Dobry",

"rząd",

"gubernator",

"chwycić",

"gatunek",

"stopniowo",

"absolwent",

"ziarno",

"wielki",

"Dziadek",

"babcia",

"dotacja",

"trawa",

"mogiła",

"szary",

"Świetnie",

"Największy",

"Zielony",

"sklep spożywczy",

"grunt",

"Grupa",

"rosnąć",

"rozwój",

"wzrost",

"gwarancja",

"strażnik",

"zgadywać",

"Gość",

"przewodnik",

"Wytyczne",

"winny",

"pistolet",

"facet",

"nawyk",

"siedlisko",

"włosy",

"połowa",

"hol",

"ręka",

"garść",

"uchwyt",

"powiesić",

"zdarzyć",

"szczęśliwy",

"ciężko",

"prawie wcale",

"kapelusz",

"nienawidzić",

"mieć",

"on",

"głowa",

"nagłówek",

"siedziba",

"zdrowie",

"zdrowy",

"słyszeć",

"przesłuchanie",

"serce",

"ciepło",

"niebo",

"ciężko",

"ciężki",

"obcas",

"wzrost",

"śmigłowiec",

"piekło",

"Witam",

"Wsparcie",

"pomocny",

"ją",

"tutaj",

"dziedzictwo",

"bohater",

"się",

"Siema",

"cześć",

"ukryć",

"wysoki",

"atrakcja",

"wysoko",

"Autostrada",

"wzgórze",

"jego",

"samego siebie",

"biodro",

"wynajmować",

"jego",

"historyk",

"historyczny",

"historyczny",

"historia",

"uderzyć",

"utrzymać",

"otwór",

"święto",

"święty",

"Dom",

"bezdomny",

"uczciwy",

"miód",

"zaszczyt",

"nadzieja",

"horyzont",

"przerażenie",

"koń",

"szpital",

"gospodarz",

"gorący",

"hotel",

"godzina",

"dom",

"gospodarstwo domowe",

"mieszkania",

"Jak",

"jednakże",

"olbrzymi",

"człowiek",

"humor",

"sto",

"głodny",

"Łowca",

"polowanie",

"zraniony",

"mąż",

"hipoteza",

"ja",

"lód",

"pomysł",

"ideał",

"identyfikacja",

"zidentyfikować",

"tożsamość",

"tj",

"jeśli",

"ignorować",

"chory",

"nielegalny",

"choroba",

"zilustrować",

"obraz",

"wyobraźnia",

"wyobrażać sobie",

"natychmiastowy",

"od razu",

"imigrant",

"imigracja",

"uderzenie",

"wprowadzić w życie",

"implikacja",

"sugerować",

"znaczenie",

"ważny",

"narzucać",

"niemożliwy",

"imponować",

"wrażenie",

"imponujący",

"poprawić",

"poprawa",

"w",

"zachęta",

"incydent",

"włączać",

"włącznie z",

"dochód",

"włączać",

"zwiększać",

"zwiększony",

"wzrastający",

"coraz bardziej",

"niesamowite",

"rzeczywiście",

"niezależność",

"niezależny",

"indeks",

"indyjski",

"wskazać",

"wskazanie",

"indywidualny",

"przemysłowy",

"przemysł",

"Dziecko",

"infekcja",

"inflacja",

"wpływ",

"poinformować",

"Informacja",

"składnik",

"Inicjał",

"początkowo",

"inicjatywa",

"uraz",

"wewnętrzny",

"niewinny",

"zapytanie ofertowe",

"w środku",

"wgląd",

"nalegać",

"inspirować",

"zainstalować",

"instancja",

"zamiast",

"instytucja",

"instytucjonalny",

"instrukcja",

"instruktor",

"instrument",

"ubezpieczenie",

"intelektualny",

"inteligencja",

"zamierzać",

"intensywny",

"intensywność",

"zamiar",

"interakcja",

"odsetki",

"zainteresowany",

"ciekawe",

"wewnętrzny",

"międzynarodowy",

"Internet",

"interpretować",

"interpretacja",

"interwencja",

"wywiad",

"w",

"przedstawiać",

"wprowadzanie",

"inwazja",

"inwestować",

"prowadzić śledztwo",

"dochodzenie",

"badacz",

"inwestycja",

"inwestor",

"zapraszać",

"zaangażować",

"zaangażowany",

"uwikłanie",

"iracki",

"Irlandczyk",

"żelazo",

"islamski",

"wyspa",

"izraelski",

"kwestia",

"to",

"Włoski",

"przedmiot",

"jego",

"samo",

"kurtka",

"więzienie",

"język japoński",

"strumień",

"Żyd",

"żydowski",

"stanowisko",

"Przystąp",

"wspólny",

"żart",

"dziennik",

"dziennikarz",

"podróż",

"radość",

"sędzia",

"osąd",

"sok",

"skok",

"junior",

"jury",

"tylko",

"sprawiedliwość",

"uzasadniać",

"trzymać",

"klucz",

"kopnięcie",

"dziecko",

"zabić",

"zabójca",

"zabicie",

"uprzejmy",

"król",

"pocałunek",

"kuchnia",

"kolano",

"nóż",

"pukanie",

"wiedzieć",

"wiedza",

"laboratorium",

"etykieta",

"praca",

"laboratorium",

"brak",

"dama",

"jezioro",

"grunt",

"krajobraz",

"język",

"okrążenie",

"wielki",

"w dużej mierze",

"ostatni",

"późno",

"później",

"łacina",

"końcowy",

"śmiać się",

"początek",

"prawo",

"trawnik",

"pozew sądowy",

"prawnik",

"kłaść",

"warstwa",

"Ołów",

"lider",

"przywództwo",

"prowadzący",

"liść",

"liga",

"pochylać się",

"uczyć się",

"uczenie się",

"najmniej",

"Skórzany",

"Odejdź",

"lewy",

"noga",

"dziedzictwo",

"prawny",

"legenda",

"ustawodawstwo",

"prawowity",

"cytrynowy",

"długość",

"mniej",

"lekcja",

"wynajmować",

"list",

"poziom",

"liberał",

"biblioteka",

"licencja",

"kłamstwo",

"życie",

"styl życia",

"dożywotni",

"winda",

"światło",

"tak jak",

"prawdopodobne",

"limit",

"ograniczenie",

"ograniczony",

"linia",

"połączyć",

"warga",

"lista",

"słuchać",

"dosłownie",

"literacki",

"literatura",

"mały",

"relacja na żywo",

"żyjący",

"Załaduj",

"pożyczka",

"lokalny",

"Znajdź",

"Lokalizacja",

"Zamek",

"długie",

"długoterminowy",

"wyglądać",

"luźny",

"stracić",

"strata",

"Stracony",

"działka",

"wiele",

"głośno",

"kocham",

"śliczny",

"kochanek",

"niski",

"niżej",

"szczęście",

"Szczęściarz",

"obiad",

"płuco",

"maszyna",

"szalony",

"czasopismo",

"Poczta",

"Główny",

"głównie",

"utrzymywać",

"konserwacja",

"poważny",

"większość",

"robić",

"producent",

"makijaż",

"mężczyzna",

"centrum handlowe",

"facet",

"zarządzać",

"kierownictwo",

"menedżer",

"sposób",

"producent",

"produkcja",

"wiele",

"mapa",

"margines",

"znak",

"rynek",

"marketing",

"małżeństwo",

"żonaty",

"ożenić",

"maska",

"masa",

"masywny",

"gospodarz",

"mecz",

"materiał",

"matematyka",

"materiał",

"może",

"być może",

"burmistrz",

"ja",

"posiłek",

"oznaczać",

"oznaczający",

"W międzyczasie",

"mierzyć",

"pomiar",

"mięso",

"mechanizm",

"głoska bezdźwięczna",

"medyczny",

"lek",

"lekarstwo",

"średni",

"spotykać się",

"spotkanie",

"członek",

"członkostwo",

"pamięć",

"psychiczny",

"wzmianka",

"menu",

"sam",

"zaledwie",

"bałagan",

"wiadomość",

"metal",

"metr",

"metoda",

"Meksykańskie",

"środek",

"móc",

"wojskowy",

"mleko",

"milion",

"umysł",

"moje",

"minister",

"drobny",

"mniejszość",

"minuta",

"cud",

"lustro",

"tęsknić",

"pocisk",

"misja",

"błąd",

"mieszać",

"mieszanina",

"MM-HMM",

"tryb",

"Model",

"umiarkowany",

"nowoczesny",

"skromny",

"mama",

"za chwilę",

"pieniądze",

"monitor",

"miesiąc",

"nastrój",

"księżyc",

"morał",

"jeszcze",

"co więcej",

"rano",

"hipoteka",

"bardzo",

"przeważnie",

"matka",

"ruch",

"motywacja",

"silnik",

"uchwyt",

"Góra",

"mysz",

"usta",

"ruszaj się",

"ruch",

"film",

"Pan",

"Pani",

"SM",

"dużo",

"wiele ",

"morderstwo",

"mięsień",

"muzeum",

"muzyka",

"musical",

"muzyk",

"muzułmański",

"musi",

"wzajemne",

"mój",

"ja",

"tajemnica",

"mit",

"nagi",

"Nazwa",

"narracja",

"wąska",

"naród",

"krajowy",

"rodzinny",

"naturalny",

"naturalnie",

"Natura",

"Blisko",

"w pobliżu",

"prawie",

"koniecznie",

"niezbędny",

"szyja",

"potrzebować",

"negatywny",

"negocjować",

"negocjacja",

"sąsiad",

"sąsiedztwo",

"żaden",

"nerw",

"nerwowy",

"internet",

"sieć",

"nigdy",

"Niemniej jednak",

"Nowy",

"nowo",

"Aktualności",

"Gazeta",

"następny",

"ładny",

"noc",

"dziewięć",

"nie",

"nikt",

"ukłon",

"hałas",

"nominacja",

"Żaden",

"niemniej jednak",

"ani",

"normalna",

"normalnie",

"północ",

"północny",

"nos",

"nie",

"Notatka",

"nic",

"zauważyć",

"pojęcie",

"powieść",

"Teraz",

"nigdzie",

"Nie",

"jądrowy",

"numer",

"liczny",

"pielęgniarka",

"orzech",

"obiekt",

"cel",

"obowiązek",

"obserwacja",

"przestrzegać",

"obserwator",

"uzyskać",

"oczywiste",

"oczywiście",

"okazja",

"sporadycznie",

"zawód",

"zająć",

"zdarzać się",

"ocean",

"dziwne",

"szanse",

"z",

"wyłączony",

"wykroczenie",

"ofensywa",

"oferta",

"gabinet",

"oficer",

"urzędnik",

"często",

"oh",

"olej",

"ok",

"w porządku",

"stary",

"olimpijski",

"na ",

"raz",

"jeden",

"bieżący",

"cebula",

"online",

"tylko",

"na",

"otwarty",

"otwarcie",

"obsługiwać",

"operacyjny",

"operacja",

"operator",

"opinia",

"przeciwnik",

"możliwość",

"sprzeciwiać się",

"naprzeciwko",

"sprzeciw",

"opcja",

"lub",

"Pomarańczowy",

"zamówienie",

"zwykły",

"organiczny",

"organizacja",

"zorganizować",

"orientacja",

"początek",

"oryginał",

"pierwotnie",

"inny",

"inni",

"Inaczej",

"powinien",

"nasz",

"my sami",

"na zewnątrz",

"wynik",

"poza",

"piekarnik",

"koniec",

"ogólnie",

"pokonać",

"przeoczyć",

"być winnym",

"własny",

"właściciel",

"tempo",

"Pakiet",

"pakiet",

"strona",

"ból",

"bolesny",

"farba",

"malarz",

"obraz",

"para",

"blady",

"palestyński",

"Palma",

"patelnia",

"płyta",

"dyszeć",

"papier",

"rodzic",

"park",

"parking",

"część",

"uczestnik",

"uczestniczyć",

"udział",

"konkretny",

"w szczególności",

"częściowo",

"partner",

"Współpraca",

"przyjęcie",

"podawać",

"przejście",

"pasażer",

"pasja",

"po",

"łata",

"ścieżka",

"pacjent",

"wzorzec",

"pauza",

"płacić",

"Zapłata",

"PC",

"pokój",

"szczyt",

"rówieśnik",

"rzut karny",

"ludzie",

"pieprz",

"za",

"postrzegać",

"odsetek",

"postrzeganie",

"idealny",

"doskonale",

"odgrywać",

"wydajność",

"być może",

"Kropka",

"stały",

"pozwolenie",

"pozwolić",

"osoba",

"osobisty",

"osobowość",

"osobiście",

"personel",

"perspektywiczny",

"namówić",

"zwierzak domowy",

"faza",

"zjawisko",

"filozofia",

"telefon",

"zdjęcie",

"fotografia",

"fotograf",

"wyrażenie",

"fizyczny",

"fizycznie",

"Lekarz",

"fortepian",

"wybierać",

"obrazek",

"ciasto",

"kawałek",

"stos ",

"pilot",

"sosna",

"różowy",

"rura",

"poziom",

"miejsce",

"plan",

"samolot",

"planeta",

"planowanie",

"zakład",

"Plastikowy",

"talerz",

"Platforma",

"bawić się",

"gracz",

"Proszę",

"przyjemność",

"dużo",

"intrygować",

"plus",

"PO POŁUDNIU",

"kieszeń",

"wiersz",

"poeta",

"poezja",

"punkt",

"Polak",

"Policja",

"polityka",

"polityczny",

"politycznie",

"polityk",

"Polityka",

"głosowanie",

"zanieczyszczenie",

"basen",

"słaby",

"Muzyka pop",

"popularny",

"populacja",

"ganek",

"Port",

"część",

"portret",

"przedstawiać",

"poza",

"pozycja",

"pozytywny",

"posiadać",

"możliwość",

"możliwy",

"prawdopodobnie",

"Poczta",

"garnek",

"Ziemniak",

"potencjał",

"potencjalnie",

"funt",

"wlać",

"ubóstwo",

"proszek",

"moc",

"potężny",

"praktyczny",

"ćwiczyć",

"módl się",

"modlitwa",

"dokładnie",

"przewidywać",

"woleć",

"pierwszeństwo",

"ciąża",

"w ciąży",

"przygotowanie",

"przygotować",

"recepta",

"obecność",

"teraźniejszość",

"prezentacja",

"utrzymywać",

"prezydent",

"prezydencki",

"naciśnij",

"nacisk",

"udawać",

"ładny",

"zapobiegać",

"poprzedni",

"poprzednio",

"Cena £",

"duma",

"kapłan",

"głównie",

"podstawowy",

"główny",

"główny",

"zasada",

"wydrukować",

"wcześniejszy",

"priorytet",

"więzienie",

"więzień",

"Prywatność",

"prywatny",

"prawdopodobnie",

"problem",

"procedura",

"przystępować",

"proces",

"produkować",

"producent",

"produkt",

"produkcja",

"zawód",

"profesjonalny",

"profesor",

"profil",

"zysk",

"program",

"postęp",

"projekt",

"znaczący",

"obietnica",

"promować",

"podpowiedź",

"dowód",

"właściwy",

"odpowiednio",

"własność",

"proporcja",

"wniosek",

"zaproponować",

"zaproponowane",

"prokurator",

"perspektywa",

"chronić",

"ochrona",

"białko",

"protest",

"dumny",

"udowodnić",

"dostarczać",

"dostawca",

"województwo",

"zaopatrzenie",

"psychologiczny",

"psycholog",

"psychologia",

"publiczny",

"publikacja",

"publicznie",

"publikować",

"wydawca",

"ciągnąć",

"kara",

"zakup",

"czysty",

"zamiar",

"realizować",

"naciskać",

"położyć",

"zakwalifikować",

"jakość",

"kwartał",

"rozgrywający",

"pytanie",

"szybki",

"szybko",

"cichy",

"cicho",

"zrezygnować ",

"całkiem",

"cytat",

"Wyścig",

"rasowy",

"rodnik",

"radio",

"szyna",

"deszcz",

"podnieść",

"zasięg",

"ranga",

"nagły",

"szybko",

"rzadki",

"rzadko",

"wskaźnik",

"raczej",

"ocena",

"stosunek",

"surowe",

"zasięg",

"reagować",

"reakcja",

"czytać",

"czytelnik",

"czytanie",

"gotowy",

"prawdziwy",

"rzeczywistość",

"realizować",

"naprawdę",

"powód",

"rozsądny",

"przypomnienie sobie czegoś",

"odbierać",

"ostatni",

"ostatnio",

"Przepis",

"uznanie",

"rozpoznać",

"polecić",

"rekomendacje",

"nagrywać",

"nagranie",

"wyzdrowieć",

"powrót do zdrowia",

"rekrut",

"czerwony",

"redukować",

"zmniejszenie",

"wspominać",

"odniesienie",

"odzwierciedlić",

"odbicie",

"reforma",

"uchodźca",

"odrzucać",

"szacunek",

"Jeżeli chodzi o",

"bez względu",

"reżim",

"region",

"regionalny",

"Zarejestruj się",

"regularny",

"regularnie",

"regulować",

"rozporządzenie",

"wzmacniać",

"odrzucić",

"odnosić się",

"relacja",

"relacja",

"względny",

"stosunkowo",

"zrelaksować się",

"wydanie",

"istotnych",

"ulga",

"religia",

"religijny",

"polegać",

"pozostać",

"pozostały",

"niezwykły",

"Zapamiętaj",

"przypominać",

"zdalny",

"usunąć",

"powtarzać",

"wielokrotnie",

"zastąpić",

"Odpowiadać",

"raport",

"reporter",

"przedstawiać",

"reprezentacja",

"przedstawiciel",

"Republikański",

"reputacja",

"żądanie",

"wymagać",

"wymóg",

"Badania",

"badacz",

"przypominać",

"rezerwacja",

"Mieszkaniec",

"oprzeć się",

"opór",

"rezolucja",

"rozstrzygać",

"Ośrodek wczasowy",

"ratunek",

"Poszanowanie",

"reagować",

"pozwany",

"odpowiedź",

"odpowiedzialność",

"odpowiedzialny",

"reszta",

"restauracja",

"przywrócić",

"ograniczenie",

"wynik",

"zachować",

"odchodzić",

"emerytura",

"zwrócić",

"ujawnić",

"przychód",

"recenzja",

"rewolucja",

"rytm",

"Ryż",

"bogaty",

"eliminować",

"jeździć",

"karabin",

"prawo",

"dzwonić",

"wzrastać",

"ryzyko",

"rzeka",

"droga",

"głaz",

"rola",

"rolka",

"romantyczny",

"dach",

"Pokój",

"źródło",

"lina",

"Róża",

"surowy",

"mniej więcej",

"okrągły",

"trasa",

"rutyna",

"wiersz",

"pocierać",

"reguła",

"biegać",

"działanie",

"wiejski",

"wysypka",

"Rosyjski",

"poświęcony",

"smutny",

"bezpieczny",

"bezpieczeństwo",

"wzgląd",

"Sałatka",

"pensja",

"wyprzedaż",

"sprzedaż",

"Sól",

"to samo",

"próbka",

"sankcja",

"piasek",

"satelita",

"zadowolenie",

"usatysfakcjonować",

"sos",

"ratować",

"oszczędność",

"mówić",

"skala",

"skandal",

"przestraszony",

"scenariusz",

"scena",

"harmonogram",

"schemat",

"uczony",

"stypendium",

"szkoła",

"nauki ścisłe",

"naukowy",

"naukowiec",

"zakres",

"wynik",

"krzyk",

"ekran",

"scenariusz",

"morze",

"Szukaj",

"pora roku",

"siedzenie",

"druga",

"sekret",

"sekretarz",

"Sekcja",

"sektor",

"bezpieczne",

"bezpieczeństwo",

"Widzieć",

"nasionko",

"szukać",

"wydać się",

"człon",

"chwycić",

"Wybierz",

"wybór",

"samego siebie",

"Sprzedać",

"Senat",

"senator",

"wysłać",

"senior",

"sens",

"wrażliwy",

"wyrok",

"oddzielny",

"sekwencja",

"seria",

"poważny",

"na serio",

"obsługiwać",

"usługa",

"sesja",

"ustawić",

"ustawienie",

"rozstrzygnąć",

"osada",

"siedem",

"kilka",

"ciężki : silny",

"seks",

"seksualny",

"cień",

"cień",

"potrząsnąć",

"być",

"kształt",

"dzielić",

"ostry",

"Ona",

"arkusz",

"półka",

"powłoka",

"schron",

"Zmiana",

"połysk",

"statek",

"koszula",

"gówno",

"zaszokować",

"but",

"strzelać",

"strzelanie",

"sklep",

"zakupy",

"Wybrzeże",

"niski",

"wkrótce",

"strzał",

"powinien",

"ramię",

"krzyczeć",

"pokazać",

"kabina prysznicowa",

"wzruszać ramionami",

"zamknąć",

"chory",

"bok",

"westchnienie",

"widok",

"podpisać",

"sygnał",

"znaczenie",

"istotne",

"znacznie",

"cisza",

"cichy",

"srebro",

"podobny",

"podobnie",

"prosty",

"po prostu",

"grzech",

"odkąd",

"śpiewać",

"piosenkarz",

"pojedynczy",

"zlew",

"Pan",

"siostra",

"siedzieć",

"strona",

"sytuacja",

"sześć",

"rozmiar",

"narty",

"umiejętność",

"skóra",

"niebo",

"niewolnik",

"spać",

"plasterek",

"slajd",

"niewielki",

"nieznacznie",

"poślizg",

"wolny",

"powoli",

"mały",

"mądry",

"zapach",

"uśmiech",

"palić",

"gładki",

"pstryknąć",

"śnieg",

"więc",

"tak zwana",

"piłka nożna",

"społeczny",

"społeczeństwo",

"miękki",

"oprogramowanie",

"gleba",

"słoneczny",

"żołnierz",

"solidny",

"rozwiązanie",

"rozwiązywać",

"niektóre",

"ktoś",

"jakoś",

"ktoś",

"coś",

"czasami",

"nieco",

"gdzieś",

"syn",

"utwór muzyczny",

"wkrótce",

"wyrafinowany",

"przepraszam",

"sortować",

"dusza",

"dźwięk",

"zupa",

"źródło",

"południe",

"południowy",

"radziecki",

"przestrzeń",

"hiszpański",

"mówić",

"głośnik",

"specjalny",

"specjalista",

"gatunek",

"konkretny",

"konkretnie",

"przemówienie",

"prędkość",

"spędzić",

"wydatki",

"obracać",

"duch",

"duchowy",

"rozdzielać",

"rzecznik",

"sport",

"miejsce",

"rozpiętość",

"wiosna",

"kwadrat",

"ściskać",

"stabilność",

"stabilny",

"personel",

"etap",

"schodek",

"stawka",

"stoisko",

"standard",

"na stojąco",

"gwiazda",

"gapić się",

"początek",

"państwo",

"oświadczenie",

"stacja",

"Statystyka",

"status",

"zostawać",

"stały",

"kraść",

"stal",

"krok",

"stick",

"nadal",

"zamieszać",

"Zbiory",

"żołądek",

"złóg",

"Zatrzymaj się",

"magazynowanie",

"sklep",

"burza",

"fabuła",

"proste",

"dziwny",

"nieznajomy",

"strategiczny",

"strategia",

"strumień",

"ulica",

"siła",

"wzmacniać",

"stres",

"rozciągać się",

"strajk",

"strunowy",

"rozebrać się",

"uderzenie",

"silny",

"silnie",

"Struktura",

"walka",

"student",

"studio",

"nauka",

"rzeczy",

"głupi",

"styl",

"Przedmiot",

"Zatwierdź",

"późniejszy",

"substancja",

"istotny",

"odnieść sukces",

"powodzenie",

"odnoszący sukcesy",

"z powodzeniem",

"taki",

"nagły",

"nagle",

"pozwać",

"cierpieć",

"wystarczający",

"cukier",

"sugerować",

"sugestia",

"samobójstwo",

"garnitur",

"lato",

"szczyt",

"słońce",

"super",

"dostarczać",

"Pomoc",

"kibic",

"przypuszczać",

"przypuszczalny",

"Najwyższy",

"Jasne",

"pewno",

"powierzchnia",

"Chirurgia",

"niespodzianka",

"zaskoczony",

"zaskakujący",

"zaskakująco",

"otaczać",

"ankieta",

"przetrwanie",

"przeżyć",

"niedobitek",

"podejrzany",

"podtrzymywać",

"przeklinać",

"zamiatać",

"Słodkie",

"pływać",

"huśtać się",

"przełącznik",

"symbol",

"objaw",

"system",

"stół",

"łyżka",

"taktyka",

"ogon",

"Brać",

"opowieść",

"talent",

"rozmowa",

"wysoki",

"czołg",

"uzyskiwać",

"taśma",

"cel",

"zadanie",

"smak",

"podatek",

"podatnik",

"herbata",

"uczyć",

"nauczyciel",

"nauczanie",

"zespół",

"łza",

"łyżeczka",

"techniczny",

"technika",

"technologia",

"nastolatek",

"nastolatek",

"telefon",

"teleskop",

"telewizja",

"powiedzieć",

"temperatura",

"tymczasowy",

"dziesięć",

"mieć skłonności",

"tendencja",

"tenis ziemny",

"napięcie",

"namiot",

"termin",

"semestry",

"straszny",

"terytorium",

"terror",

"terroryzm",

"terrorysta",

"test",

"świadczyć",

"świadectwo",

"Testowanie",

"tekst",

"niż",

"dziękować",

"Dziękuję",

"że",

".",

"teatr",

"ich",

"ich",

"motyw",

"sobie",

"następnie",

"teoria",

"terapia",

"tam",

"dlatego",

"te",

"one",

"gruby",

"cienki",

"rzecz",

"myśleć",

"myślący",

"trzeci",

"trzydzieści",

"ten",

"tych",

"chociaż",

"myśl",

"tysiąc",

"groźba",

"zagrozić",

"trzy",

"gardło",

"poprzez",

"na wskroś",

"rzucić",

"zatem",

"bilet",

"krawat",

"obcisły",

"czas",

"malutki",

"Wskazówka",

"opona",

"zmęczony",

"papierowa chusteczka",

"tytuł",

"do",

"tytoń",

"Dziś",

"palec u nogi",

"razem",

"pomidor",

"jutro",

"ton",

"język",

"dziś wieczorem",

"także",

"narzędzie",

"ząb",

"Top",

"temat",

"podrzucenie",

"całkowity",

"całkowicie",

"dotykać",

"trudny",

"wycieczka",

"turystyczny",

"Turniej",

"w kierunku",

"w stronę",

"wieża",

"miasto",

"zabawka",

"namierzać",

"tor",

"handel",

"tradycja",

"tradycyjny",

"ruch drogowy",

"tragedia",

"ścieżka",

"pociąg",

"trening",

"przenosić ",

"przekształcać",

"transformacja",

"przemiana",

"Tłumaczyć",

"transport",

"podróż",

"leczyć",

"leczenie",

"traktat",

"drzewo",

"ogromny",

"tendencja",

"test",

"plemię",

"sztuczka",

"wycieczka",

"stado",

"kłopot",

"ciężarówka",

"PRAWDA",

"naprawdę",

"zaufanie",

"prawda",

"próbować",

"rura",

"tunel",

"skręcać",

"telewizja",

"dwanaście",

"20",

"dwa razy",

"bliźniak",

"dwa",

"rodzaj",

"typowy",

"zazwyczaj",

"brzydki",

"ostateczny",

"ostatecznie",

"niezdolny",

"wujek",

"pod ",

"przejść",

"Rozumiesz",

"zrozumienie",

"niestety",

"mundur",

"unia",

"unikalny",

"jednostka",

"Zjednoczony",

"uniwersalny",

"wszechświat",

"Uniwersytet",

"nieznany",

"chyba że",

"w odróżnieniu",

"mało prawdopodobny",

"aż do",

"niezwykłe",

"w górę",

"od",

"górny",

"miejski",

"popęd",

"nas",

"posługiwać się",

"używany",

"użyteczne",

"użytkownik",

"zwykły",

"zwykle",

"pożytek",

"wakacje",

"dolina",

"wartościowy",

"wartość",

"zmienny",

"zmiana",

"różnorodność",

"różnorodny",

"różnić się",

"rozległy",

"warzywo",

"pojazd",

"przedsięwzięcie",

"wersja",

"przeciw",

"bardzo",

"naczynie",

"weteran",

"przez",

"ofiara",

"zwycięstwo",

"wideo",

"pogląd",

"widz",

"wieś",

"naruszać",

"naruszenie",

"przemoc",

"brutalny",

"wirtualnie",

"cnota",

"wirus",

"widoczny",

"wizja",

"wizyta",

"gość",

"wizualny",

"niezbędny",

"głos",

"tom",

"wolontariusz",

"głosować",

"wyborca",

"vs",

"wrażliwy",

"płaca",

"czekać",

"budzić",

"spcerować",

"Ściana",

"wędrować",

"chcieć",

"wojna",

"ciepły",

"ostrzegać",

"ostrzeżenie",

"myć się",

"marnotrawstwo",

"zegarek",

"woda",

"fala",

"droga",

"my",

"słaby",

"bogactwo",

"bogaty",

"broń",

"nosić ",

"pogoda",

"ślub",

"tydzień",

"weekend",

"co tydzień",

"ważyć",

"waga",

"Witam",

"zasiłek",

"dobrze",

"Zachód",

"Zachodni",

"mokro",

"Co",

"cokolwiek",

"koło",

"gdy",

"zawsze, gdy",

"gdzie",

"natomiast",

"czy",

"który",

"podczas gdy",

"szept",

"biały",

"kto",

"cały",

"kogo, komu",

"którego",

"czemu",

"szeroki",

"szeroko",

"rozpowszechniony",

"żona",

"dziki",

"będzie",

"chętny",

"wygrać",

"wiatr",

"okno",

"wino",

"skrzydło",

"zwycięzca",

"zima",

"wytrzeć",

"drut",

"mądrość",

"mądry",

"życzenie",

"z",

"wycofać",

"w ciągu",

"bez",

"świadek",

"kobieta",

"cud",

"wspaniale",

"drewno",

"z drewna",

"słowo",

"praca",

"pracownik",

"pracujący",

"Pracuje",

"warsztat",

"świat",

"zmartwiony",

"martwić się",

"wartość",

"zrobiłbym",

"rana",

"zawinąć",

"pisać",

"pisarz",

"pismo",

"zło",

"dziedziniec",

"tak",

"rok",

"krzyk",

"żółty",

"tak",

"Wczoraj",

"już",

"dawać",

"ty",

"młody",

"twój",

"Twój",

"się",

"młodzież",

"strefa",

];
