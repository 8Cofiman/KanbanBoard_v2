let id = 0;
const col = document.querySelector("#col1");

function add() {
  console.log(col);
  let frag = document.createRange().createContextualFragment(`
    <div draggable = true id='${id++}' class='cardi'>
        <p class='text_block' contenteditable="true">
        </p>
    </div>
    `);
  col.appendChild(frag);
}

let target = null;

document.addEventListener('dragstart', t => {
  if (t.target.classList.contains("cardi")) {
    target = t.target;
  }
  else if (t.target.parentElement.classList.contains("cardi")) {
    target = item.target.parentElement;
  }
  console.log(target);
});

document.addEventListener("dragover", e => {
  e.preventDefault();
})

document.addEventListener("drop", item => {
  if (item.target.classList.contains('section')) {
    item.target.appendChild(target);
  }
});

document.addEventListener("dblclick", item => {
  if (item.target.parentElement.classList.contains("cardi")) {
    const check = confirm("Удалить запись?");
    if (check) {
      item.target.parentElement.remove();
    }
  }
});

