//2acb2614eb01456f821109ba639c4927 (news api key)

//initialize the newsApi Parameters.
//let source = "bbc-news";
//let apiKey = " 2acb2614eb01456f821109ba639c4927";
// Grab the news container
let NewsAccordian = document.getElementById("NewsAccordian");

//create a  ajax get request.
const xhr = new XMLHttpRequest();
xhr.open(
  'GET',
  `https://newsapi.org/v2/top-headlines?country=us&apiKey=2acb2614eb01456f821109ba639c4927`,
  true
);

//what to do when response is ready .
xhr.onload = function () {
  if (this.status === 200) {
     let json= JSON.parse(this.responseText);
     let articles= json.articles;
     console.log(articles);  

     let newsHtml="";
     articles.forEach(function(element,index){

      let news = ` <div class="card">
                    <div class="card-header" id="heading${index}">
                      <h2 class="mb-0">
                        <button class="btn btn-link btn-block text-left  collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                          ${element["title"]}
                        </button>
                      </h2>
                    </div>
                  
                    <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="#NewsAccordian">
                      <div class="card-body">
                           ${element["content"]}.<a href="${element['url']}" target="_blank"> Read more here</a>                       
                      </div>
                    </div>
                  </div> `;
        newsHtml+=news;
      });
     NewsAccordian.innerHTML = newsHtml;
  } else {
    console.log("some error occured");  
  }
};


xhr.send();


















