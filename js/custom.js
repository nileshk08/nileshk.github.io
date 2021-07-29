var qna = new Map([
  
  [`Is it possible to enable smart card authentication for the build-in dialogs in Chrome and Firefox like in Microsoft´s Edge?` , [
    `The Edge browser prompts an authentication dialog which requests an username and password. The dialog provides an link "More choices" where we can authenticate via an smart card:
    We do not know if there is a special windows configuration which provides the smart card authentication in this dialog.

    Unfortunately, Google Chrome and Firefox do not provide the authentication via smart card. Only password is provided:

    Question: Is it possible to enable smart card authentication for the build-in dialogs in Chrome and Firefox like in Microsoft´s Edge?`
  ,
    "q1.html",
  `We have implemented an web application (ASP.NET 5) and enabled Windows Authentication in IIS.`
  ]]
,

  [`How to unstyle anchor when using bootstrap?`, [
    `Say, I want the text to be black. One way to do that would be to add class="my_class" to the anchor tag, and then put a.my_class{color:black} rule.

    But as I will soon realize bootstrap adds also style for :hover. So, I have to change that too. Also it changes styles for outline, text-decoration, :focus, etc.

  Of course I could just read unminified version of bootstrap.css and try to understand what are all the cases I have to cover, to make sure it stays black. But I perceive that there must be some easier way - I was expecting something like adding class="link-unstyled" or something? `
  ,
    "q2.html",
  `Bootstrap adds very nice default styles for anchors, but it makes it difficult to use <a> tag for something other than blue text.`
  ]],

  [
    `Dynamic creation of jenkins jobs using job DSL to run amigo test cases.`,[
    `3)Most preferable way i found to run jobs is to SSH to the device and run a loop on a textfile with all job names and read it , extract values needed and pass it to the jenkins device.`,
    `#`,
    `1)use the job DSL API on a particular job configuration. 2)Most java functions can be implemented here depending upon your requirement.`
    ]
  ],

  [
    `Why should I integrate with WAN if I already use my own and/or third-party instrumentation tools? `,[
      `but some are unique, so you still gain insight value by integrating with WAN. WAN reports/data are available/accesible to all citrites, so it is easy to share and gain additional value within product/solution groups. WAN data is stored in Citrix-controlled storages and third-party providers cannot "sneak-peak" at it.
      A well know third-party solution is Google Analytics (GA). At this time GA provides many reports (more than WAN), but it does not have heatmaps and page statistics reports like WAN's. GA targets as wide audience as possible, whereas WAN specifically targets Citrix products and serves their unique needs. GA uses chatty interface with frequent POSTs back to the "mothership" whereas WAN accumulates data on the client and does bulk-load which is more network-efficient. Safety is also an important factor - if you send your users names to Google you can never be sure how exactly they be used. This is not to discourage teams from using GA, which is an excellent platform, but to be open-minded and careful at the same time. There is no need to lock-in - use whatever tools help your product to get better.`,
      `#`,
      `WAN does not compete with alternative solutions, but compliments them. Some of the reports may overlap,`
    ]
  ],

  [
    `Run multiple jenkins jobs with a single click.`,[
      `2) use a pipeline script on a new job and configure the script to just run all jobs inside the folder using jenkins.instance.getItemsByFullName().`,
      `#`,
      `1) put all your jobs under a single folder and name the folder.`
    ]
  ]

]);

function searchit(){
var searchval = document.getElementById("searchid").value;
var maincontent = document.getElementById("main_content");
var xmlstring = `<div class="row">
<form class="col-12" action="">
  <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
    <div class="input-group">
    <input type="search" id = "searchid" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light">
    <div class="input-group-append">
      <button id="button-addon1" type="button" onclick="searchit()" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
    </div>
    </div>
  </div>
</form>
</div>`;
if(maincontent == null) console.log('main content is null');
// console.log(qna.size);
  var cnt = 1;
  qna.forEach((val,values) => {
    console.log(val);
    if(searchval == "" || values.includes(searchval))
    xmlstring += 
    `<div class="row box suggestion">
    <div class="row">
      <div class="col-12 suggestion question"  question-tag="auth">
        <a href="${val[1]}" class="text-secondary font-weight-bold" >
          ${values}
        </a>
        <p>
        ${val[2]}
        <span id="dots${cnt}"  >...</span><span id="more${cnt}" >
          ${val[0]}
        </span>
        </p>
        <a href="#" onclick="readmore(id); return false;" id="readmore${cnt}" class="nav-toggle">Read More</a>

      </div>
    </div>
    <div class="row interaction" style="width:100%">
      <div class="col-12">
      <span class="vote">
        <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="upvote" class="icon_svg-stroke icon_svg-fill" stroke-width="1.5" stroke="#666" fill="none" fill-rule="evenodd" stroke-linejoin="round"><polygon points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon></g></svg>
        <span class="q-text qu-whiteSpace--nowrap" style="box-sizing: border-box; font-size: 13px;">2</span>

      </span>
      <span class="vote">

        <svg width="24px" height="24px" viewBox="0 0 24 24"><g id="downvote" class="icon_svg-stroke icon_svg-fill" stroke="#666" fill="none" stroke-width="1.5" fill-rule="evenodd" stroke-linejoin="round"><polygon transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) " points="12 4 3 15 9 15 9 20 15 20 15 15 21 15"></polygon></g></svg>
      </span>
      </div>
    </div>


  </div>`;
    cnt++;
  });
  maincontent.innerHTML = xmlstring;
}

function readmore(elementids) {
var newid = String(elementids).substr(8,String(elementids).length - 8);
var dots = document.getElementById("dots"+newid);
console.log(newid);
var moreText = document.getElementById("more"+newid);
var btnText = document.getElementById("readmore"+newid);

if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "Read more";
  moreText.style.display = "none";
} else {
  dots.style.display = "none";
  btnText.innerHTML = "Read less";
  moreText.style.display = "inline";
}
}
