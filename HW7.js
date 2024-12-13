let name = document.getElementById("name");
let nameButton = document.getElementById("namebutton");
let isEditing = false;


let linkdiv = document.getElementById("linkdiv");
let linkButton = document.getElementById("linkbutton");

function start() {
  if (nameButton) {
    nameButton.addEventListener("click", toggleEditMode);
  } else {
    console.error("nameButton element not found");
  }

  if (linkButton) {
    linkButton.addEventListener("click", addLink);
  } else {
    console.error("linkButton element not found");
  }



}

function toggleEditMode() {
  if (!isEditing) {
    // 進入編輯模式
    isEditing = true;
    name.style.display = 'none';

    // 創建輸入框
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = name.textContent;

    // 將輸入框插入到 name 元素的位置??? namebutton?
    name.parentNode.insertBefore(inputElement, name);

    // 更改按鈕文字
    nameButton.value = 'Save';
  } else {
    // 退出編輯模式
    isEditing = false;

    // 獲取輸入框的值並更新 name 元素
    const inputElement = name.previousElementSibling;
    name.textContent = inputElement.value;
    name.style.display = 'block';
    inputElement.remove();

    // 更改按鈕文字
    nameButton.value = 'Edit';
  }
}

function addLink() {
    if (linkButton.value === "add") {
        // 創建第一個輸入框
        const inputElement1 = document.createElement('input');
        inputElement1.type = 'text';
        inputElement1.placeholder = "輸入菜名";
        inputElement1.style.height = "20px";

        // 創建第二個輸入框
        const inputElement2 = document.createElement('input');
        inputElement2.type = 'text';
        inputElement2.placeholder = "輸入食譜連結";
        inputElement2.style.height = "20px";

        // 將新的輸入框插入到 linkButton 前
        linkdiv.insertBefore(inputElement1, linkButton);
        linkdiv.insertBefore(inputElement2, linkButton);

        // 更新按鈕文字
        linkButton.value = 'submit';
    } else {
        // 獲取輸入框
        const inputElement2 = linkButton.previousElementSibling;
        const inputElement1 = inputElement2.previousElementSibling;

        // 驗證輸入框
        if (inputElement1.value.trim() === "") {
            alert("請輸入菜名"); // 提示輸入歌曲名稱
        } else if (inputElement2.value.trim() === "") {
            alert("請輸入食譜連結"); // 提示輸入歌曲連結
        } else {
            // 創建新的 album-item 結構
            const parentDiv = linkdiv.parentElement; // linkdiv 的父元素

            const divElement = document.createElement('div');
            divElement.className = "album-item";

            const aElement = document.createElement('a');
            aElement.href = inputElement2.value; // 使用輸入的連結

            const imgElement = document.createElement('img');
            imgElement.src = "music.png"; // 音樂圖示
            imgElement.alt = "music icon";

            const pElement = document.createElement('p');
            pElement.className = "description";
            pElement.textContent = inputElement1.value; // 使用輸入的歌曲名稱

            // 將結構組合
            aElement.append(imgElement);
            divElement.append(aElement,pElement);
            parentDiv.append(divElement); // 添加到父元素中

            // 移除輸入框
            inputElement1.remove();
            inputElement2.remove();

            // 恢復按鈕文字
            linkButton.value = 'add';
        }
    }
}




window.addEventListener("load", start);


