/* select */
const typeOfNumber = document.querySelector("#typeOfNumber");
const selected = document.querySelector("#selected");
const optionWrap = document.querySelector(".opt-wrap");
const options = document.querySelectorAll("#typeOfNumber ul .option");
let selectedNum = "";
let slideCount = 0;
typeOfNumber.addEventListener("click", () => {
  if (slideCount === 0) {
    optionWrap.style.display = "block";
    slideCount = 1;
  } else {
    optionWrap.style.display = "none";
    slideCount = 0;
  }
});
options.forEach((option) => {
  option.addEventListener("click", (e) => {
    e.stopPropagation();
    slideCount = 0;
    optionWrap.style.display = "none";
    selected.innerHTML = option.innerHTML;
    selectedNum = Number(option.innerHTML);
  });
});
/* 배열예시 */
const nameList = [
  "가나다라마",
  "바사아",
  "자차카타파하",
  "ABCDEFG",
  "HIJK",
  "LMNOP",
  "QRS",
  "TUVWXYZ",
  "공일이삼사오육칠",
  "ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋ",
  "안녕",
  "킥킥",
  "탕탕",
];
/* 소스 */
const listCount = nameList.length;
const listNum = Array(listCount).fill("[]");
const output = document.querySelector("#output");
const createBtn = document.querySelector("#createBtn");
createBtn.addEventListener("click", () => {
  if (selectedNum === 2) {
    //console.log(selectedNum);
    /* 배열 복사 */
    const nameListCopy = nameList;
    let ranNum01 = Math.floor(Math.random() * nameListCopy.length);
    let FirstName = nameListCopy[ranNum01];
    //console.log(`FirstName : ${FirstName}`);
    //console.log(`FirstName.length : ${FirstName.length}`);
    let firstResult = FirstName.split("")
      .splice(FirstName.length - 1, FirstName.length)
      .join("");
    /* 배열에서 첫번째 글자 삭제 */
    let filtered = nameListCopy.filter((element) => element !== FirstName);
    let result = `${firstResult}`;
    let ranNum02 = Math.floor(Math.random() * filtered.length);
    let secondName = filtered[ranNum02];
    //console.log(`secondName : ${secondName}`);
    //console.log(`secondName.length : ${secondName.length}`);
    secondResult = secondName.split("").splice(0, 1).join("");
    result += secondResult;
    output.innerHTML = result;
  } else {
    //console.log(selectedNum);
    /* 배열 복사 */
    const nameListCopy = nameList;
    let ranNum01 = Math.floor(Math.random() * nameListCopy.length);
    let FirstName = nameListCopy[ranNum01];
    //console.log(`FirstName : ${FirstName}`);
    //console.log(`FirstName.length : ${FirstName.length}`);
    /* 1 */
    if (FirstName.length >= selectedNum - 1) {
      FirstNameRanNum =
        FirstName.length - Math.ceil(Math.random() * (selectedNum - 1));
    } else {
      FirstNameRanNum = Math.floor(Math.random() * FirstName.length);
    }
    //console.log(`FirstNameRanNum : ${FirstNameRanNum}`);
    let firstResult = FirstName.split("")
      .splice(FirstNameRanNum, FirstName.length)
      .join("");
    /* 배열에서 첫번째 글자 삭제 */
    let filtered = nameListCopy.filter((element) => element !== FirstName);
    let firstResultLength = firstResult.length;
    //console.log(`firstResult : ${firstResult}`);
    //console.log(`firstResultLength : ${firstResultLength}`);
    let reqNum = selectedNum - firstResultLength;
    //console.log(`reqNum : ${reqNum}`);
    let result = `${firstResult}`;
    //console.log(filtered);
    /* 2 */
    let ranNum02 = Math.floor(Math.random() * filtered.length);
    let secondName = filtered[ranNum02];
    //console.log(`secondName : ${secondName}`);
    secondResult = secondName.split("").splice(0, reqNum).join("");
    filtered = filtered.filter((element) => element !== secondName);
    result += secondResult;
    //console.log(`filtered : ${filtered}`);
    //console.log(`result : ${result}`);
    //console.log(result.length);
    /* 3 */
    if (result.length !== selectedNum) {
      let ranNum03 = Math.floor(Math.random() * filtered.length);
      let thirdName = filtered[ranNum03];
      //console.log(thirdName);
      let thirdResult = thirdName
        .split("")
        .splice(0, selectedNum - result.length)
        .join("");
      result += thirdResult;
      //console.log(`result(3) : ${result}`);
      //console.log(result.length);
    }
    output.innerHTML = result;
  }
});

const pickItems = document.querySelector(".pick-items");
let pickItemLength = '' 
output.addEventListener('click', () => { 
  if (pickItemLength < 10) {
    pickItems.innerHTML += `<li class="pick-item">${this.output.innerHTML}</li>`;
    let pickItem = document.querySelectorAll(".pick-item");
    console.log(pickItems);
    console.log(pickItem);
    pickItemLength = pickItem.length;
    console.log(pickItem.length);
   }
})
