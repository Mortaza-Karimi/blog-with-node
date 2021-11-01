import articles from "./articles/index";
import categories from "./categories/index";
import tags from "./tags/index";

const pageURL = window.location;
console.log(pageURL);

function toFarsiNumber(str) {
  const englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];

  if (typeof str === "string") {
    for (var i = 0; i < 10; i++) {
      str = str.replace(englishNumbers[i], persianNumbers[i]);
    }
  }
  return str;
}

function editArticleHTML() {
  const title = document.getElementById("EditTitle");

  if (title === null) {
    return;
  }

  const categoriesSelect = document.getElementById("categoriesInputEdit");

  let tags = [];
  let thisTag = 1;
  const addTagBtn = document.getElementById("addTag");
  const tagsList = document.getElementById("tags");
  const tagInput = document.getElementById("tagInput");
  const addEventListeners = () => {
    for (let i = 0; i < tags.length; i++) {
      document
        .getElementById(`tag-btn-${i + 1}`)
        .addEventListener("click", () => {
          console.log(i + 1);
          tags[i].used = false;
          console.log(tags[i]);
          document.getElementById(`tag-btn-${i + 1}`).innerHTML = "";
          document.querySelector(`#tag-${i + 1} p`).innerHTML = "";
          document.querySelector(`#tag-${i + 1}`).className = "";
          console.log(tags);
          addEventListeners();
          console.log(tags);
        });
    }
  };
  const addTag = (value) => {
    if (value == "") return;

    tags.push({ value: value, used: true });
    tagsList.innerHTML += `<span class="badge badge-primary p-2 m-1" id="tag-${thisTag}"><span id="tag-btn-${thisTag}" style="cursor:pointer" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg></span>&nbsp;&nbsp;${value}&nbsp;</span>`;

    addEventListeners();
    value = "";
    thisTag += 1;
  };
  addTagBtn.addEventListener("click", function () {
    addTag(tagInput.value);
    tagInput.value = "";
  });

  const fillCategoriesSelectBox = () => {
    categoriesSelect.innerHTML = "";
    categories.showCategories().then((value) => {
      for (let index = 0; index < value.categories.length; index++) {
        const element = value.categories[index];
        categoriesSelect.innerHTML += `<option>${element}</option>`;
      }
    });
  };
  fillCategoriesSelectBox();
  const nameValue = document.getElementById("articleName");
  const content = document.getElementById("articleText");

  document.getElementById("addTagForm").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  document.getElementById("addCategoryBtn").addEventListener("click", () => {
    categories
      .addCategory(document.getElementById("categoryAddField").value)
      .then((v) => {
        console.log(v);
        fillCategoriesSelectBox();
        document.getElementById("categoryAddField").value = "";
      });
  });

  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  console.log(decodeURI(params.q));
  console.log(params.q);

  let OLDname = "";

  articles.showArticle(params.q.toString()).then((value) => {
    console.log(value);
    OLDname = value.article.name;
    nameValue.value = value.article.name;
    categoriesSelect.value = value.article.category;
    content.value = value.article.content;
    for (let index = 0; index < value.article.tags.length; index++) {
      const element = value.article.tags[index];
      document.getElementById("tags").value += `${element},`;
      addTag(element);
    }
    console.log(tags);
  });

  document
    .getElementById("addArticleBtn")
    .addEventListener("click", function () {
      document
        .getElementById("addArticleBtn")
        .classList.add("mybutton--loading");
      setTimeout(() => {
        let usedTags = [];
        for (let j = 0; j < tags.length; j++) {
          const element = tags[j];
          if (element.used) {
            usedTags.push(element.value);
          }
        }
        articles
          .updateArticle(
            OLDname,
            nameValue.value,
            categoriesSelect.value,
            usedTags,
            content.value
          )
          .then((value) => {
            console.log(value);
            document
              .getElementById("addArticleBtn")
              .classList.remove("mybutton--loading");
            document.getElementsByClassName("content")[0].innerHTML =
              `<div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h5><i class="icon fa fa-check"></i>عملیات موفق!</h5>
            نوشته شما با موفقیت به روزرسانی شد
          </div>` + document.getElementsByClassName("content")[0].innerHTML;
          })
          .catch((e) => console.log(e));
      }, 900);
    });
}

function addArticleHTML() {
  const categoriesSelect = document.getElementById("categoriesInput");
  if (categoriesSelect === null) {
    return;
  }

  let tags = [];
  let thisTag = 1;
  const addTagBtn = document.getElementById("addTag");
  const tagsList = document.getElementById("tags");
  const tagInput = document.getElementById("tagInput");
  const addEventListeners = () => {
    for (let i = 0; i < tags.length; i++) {
      document
        .getElementById(`tag-btn-${i + 1}`)
        .addEventListener("click", () => {
          console.log(i + 1);
          tags[i].used = false;
          console.log(tags[i]);
          document.getElementById(`tag-${i + 1}`).innerHTML = "";
        });
    }
  };

  const addTag = (value) => {
    if (value == "") return;

    tags.push({ value: value, used: true });
    tagsList.innerHTML += `<span class="badge badge-primary p-2 m-1" id="tag-${thisTag}"><span id="tag-btn-${thisTag}" style="cursor:pointer" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg></span><p style="display:inline-block;margin:0;">&nbsp;&nbsp;${value}&nbsp;</p></span>`;

    value = "";
    thisTag += 1;
  };
  addTagBtn.addEventListener("click", function () {
    addTag(tagInput.value);
    tagInput.value = "";
    addEventListeners();
  });

  const fillCategoriesSelectBox = () => {
    categoriesSelect.innerHTML = "";
    categories.showCategories().then((value) => {
      for (let index = 0; index < value.categories.length; index++) {
        const element = value.categories[index];
        categoriesSelect.innerHTML += `<option value=${element}>${element}</option>`;
      }
    });
  };
  fillCategoriesSelectBox();
  const nameValue = document.getElementById("articleName");
  const content = document.getElementById("articleText");

  document.getElementById("addTagForm").addEventListener("submit", (e) => {
    e.preventDefault();
  });

  document.getElementById("addCategoryBtn").addEventListener("click", () => {
    categories
      .addCategory(document.getElementById("categoryAddField").value)
      .then((v) => {
        console.log(v);
        fillCategoriesSelectBox();
        document.getElementById("categoryAddField").value = "";
      });
  });

  document
    .getElementById("addArticleBtn")
    .addEventListener("click", function () {
      document
        .getElementById("addArticleBtn")
        .classList.add("mybutton--loading");
      setTimeout(() => {
        let usedTags = [];
        for (let j = 0; j < tags.length; j++) {
          const element = tags[j];
          if (element.used) {
            usedTags.push(element.value);
          }
        }
        console.log(usedTags);
        articles
          .addArticle(
            nameValue.value,
            categoriesSelect.value,
            usedTags,
            content.value
          )
          .then((value) => {
            console.log(value);
            document
              .getElementById("addArticleBtn")
              .classList.remove("mybutton--loading");
            nameValue.value = "";
            tags = [];
            tagsList.innerHTML = "";
            content.value = "";
            document.getElementsByClassName("content")[0].innerHTML =
              `<div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h5><i class="icon fa fa-check"></i>عملیات موفق!</h5>
            نوشته شما با موفقیت ویرایش شد
          </div>` + document.getElementsByClassName("content")[0].innerHTML;
          });
      }, 900);
    });
}

function showArticlesHTML() {
  const articlesTable = document.getElementById("articles-table");

  if (articlesTable === null) {
    return;
  }

  const addEventListeners = () => {
    articles.showArticles().then((value) => {
      for (let index = 0; index < value.articles.length; index++) {
        const element = value.articles[index];
        document
          .getElementById(`deleteArticleButton${index}`)
          .addEventListener("click", () => {
            articles.deleteArticle(element.name).then((value) => {
              console.log(value);
              generateArticles();
              // window.location.reload();
            });
          });
      }
    });
  };
  const generateArticles = () => {
    articles.showArticles().then((value) => {
      articlesTable.innerHTML = "";
      for (let index = 0; index < value.articles.length; index++) {
        const element = value.articles[index];
        articlesTable.innerHTML += `<tr>
        <td>${index + 1}</td>
        <td>${element.name}</td>
        <td>${element.category}</td>
        <td>${element.tags.toString().replaceAll(",", " ,")}</td>
        <td>${element.date.year}/${element.date.month}/${element.date.day}</td>
        <td><a style="color:blue;cursor:pointer" href="${
          window.location.origin
        }/editArticle.html?q=${element.name}">ویرایش</a>&nbsp;&nbsp;
        
        
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal${index}">
          حذف
        </button>

        <!-- Modal -->
        <div class="modal fade mt-3" style="position: fixed; top:35%; " id="exampleModal${index}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">حذف نوشته</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                آیا مطمینید که میخواهید این نوشته را حذف کنید؟
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary ml-2 mr-2" data-dismiss="modal">انصراف</button>
                <button type="button" class="btn btn-primary" id="deleteArticleButton${index}" data-dismiss="modal">حذف</button>
              </div>
            </div>
          </div>
        </div>

</td>
        
        
        
        </tr>`;

        document.getElementById(`editArticleButton${index}`);
      }
    });
    addEventListeners();
  };
  generateArticles();
}

function showCategoriesHTML() {
  const CategoriesTable = document.getElementById("categories-table");

  if (CategoriesTable === null) {
    return;
  }

  categories.showCategories().then((value) => {
    CategoriesTable.innerHTML = "";
    for (let index = 0; index < value.categories.length; index++) {
      const element = value.categories[index];
      CategoriesTable.innerHTML += `<tr><td>${
        index + 1
      }</td><td>${element}</td></tr>`;
    }
  });
}

function showTagsHTML() {
  const TagsTable = document.getElementById("tags-table");

  if (TagsTable === null) {
    return;
  }

  tags.showTags().then((value) => {
    TagsTable.innerHTML = "";
    for (let index = 0; index < value.tags.length; index++) {
      const element = value.tags[index];
      TagsTable.innerHTML += `<tr><td>${
        index + 1
      }</td><td>${element}</td></tr>`;
    }
  });
}

function articlesLengthHTML() {
  const articlesLength = document.getElementById("articles-length");

  // articles.showArticles();
  if (articlesLength === null) {
    return;
  }
  articles.showArticles().then((value) => {
    articlesLength.innerHTML = toFarsiNumber(value.articles.length.toString());
  });
}

function categoriesLengthHTML() {
  const categoriesLength = document.getElementById("categories-length");
  if (categoriesLength === null) {
    return;
  }
  categories.showCategories().then((value) => {
    categoriesLength.innerHTML = toFarsiNumber(
      value.categories.length.toString()
    );
  });
}

async function generateArticle() {
  const articleBox = document.getElementById("articleBox");
  if (articleBox == null) {
    return;
  }

  const article = await articles.showArticle(window.location.search.substr(1));
  const articleName = article.article.name;
  const articleCategory = article.article.category;
  const articleContent = article.article.content;
  const articleTags = article.article.tags;

 
  const title = document.getElementsByTagName("title")[0];
  title.innerHTML = window.location.search.substr(1);

  articleBox.innerHTML = `
    <center><span style="font-size:25px;">${articleName}</span></center>
    <center><span style="font-size:18px;text-align:center;width: 50%">${articleContent}</span></center>
    <br>
    <br>
    <br>
    <br>
    <center><span style="font-size:18px;text-align:center;width: 50%">دسته بندی : ${articleCategory}</span></center>
    <center><span style="font-size:18px;text-align:center;width: 50%">برچسب ها : ${articleTags}</span></center>
  `;
}

async function generateArticles() {
  const articlesBox = document.getElementById("articlesBox");

  if (articlesBox === null) {
    return;
  }
  console.log("init");
  const articlesList = await articles.showArticles();
  console.log(articlesList);

  for (let i = 0; i < articlesList.articles.length; i++) {
    const element = articlesList.articles[i];
    articlesBox.innerHTML += `       
    <div class="card" style="width: 18rem;display:inline-block">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${element.category}</h6>
        <p class="card-text">${element.content.substring(0, 80)}</p>
        <a href="/post.html?${element.name}" class="btn btn-primary">خواندن</a>
      </div>
    </div>      
          
    `;
  }
}

articlesLengthHTML();
categoriesLengthHTML();
showArticlesHTML();
showCategoriesHTML();
showTagsHTML();
addArticleHTML();
editArticleHTML();
generateArticles();
generateArticle();

export default {};
