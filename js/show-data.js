let comments = [
  {
    name: "FanDeVi",
    subject: "Desarrollo de personajes increíble",
    message: "¡El viaje de Vi es tan inspirador! Me encantó cómo evolucionó su relación con Powder."
  },
  {
    name: "AmanteDeJinx",
    subject: "Jinx es la mejor",
    message: "Su transformación fue tanto trágica como cautivadora. ¡La animación en sus escenas fue de otro nivel!"
  },
  {
    name: "PiltoverTechie",
    subject: "Construcción de mundo impresionante",
    message: "El contraste entre Piltover y Zaun fue bellamente retratado. La serie respetó perfectamente el lore."
  },
  {
    name: "SimpatizanteDeSilco",
    subject: "Villanos complejos",
    message: "Silco fue un personaje tan bien escrito. Me encontré apoyándolo a veces, a pesar de sus defectos."
  }
];



let currentEditIndex = null;

function showCommentsList() {
  const COMMENTS_LIST = document.getElementById("comments");
  let commentsToShow = "";

  for (let i = 0; i < comments.length; i++) {
    commentsToShow += `
      <div class="comments-items" data-index="${i}">
        <div class="comment-subject">${comments[i].subject}</div>
        <div class="comment-message">${comments[i].message}</div>
        <div class="comment-author">${comments[i].name}</div>
        <button class="edit-button" onclick="editComment(${i})">Editar</button>
        <button class="delete-button" onclick="deleteComment(${i})">Borrar</button>
      </div>
    `;
  }

  COMMENTS_LIST.innerHTML = commentsToShow;
}

function introduceNewComment(e) {
  e.preventDefault();

  const NAME = localStorage.getItem("name");
  const SUBJECT = document.getElementById("form-subject").value;
  const MESSAGE = document.getElementById("form-message").value;

  if (currentEditIndex === null) {
    comments.push({
      name: NAME,
      subject: SUBJECT,
      message: MESSAGE
    });
  } else {
    comments[currentEditIndex] = {
      name: NAME,
      subject: SUBJECT,
      message: MESSAGE
    };
    currentEditIndex = null;
  }

  document.getElementById("fan-zone-form").reset();
  document.getElementById("submit-button").innerText = "Enviar"; 

  showCommentsList();
}

function editComment(index) {
  const comment = comments[index];
  currentEditIndex = index; 

  localStorage.getItem("name");
  document.getElementById("form-subject").value = comment.subject;
  document.getElementById("form-message").value = comment.message;

  document.getElementById("submit-button").innerText = "Actualizar";
}

function deleteComment(index) {
  comments.splice(index, 1);
  showCommentsList();
}

function introduceNewCommentAndShow(e) {
  introduceNewComment(e);
  showCommentsList();
}

function listenForSubmit() {
  const COMMENT_FORM = document.getElementById("fan-zone-form");
  COMMENT_FORM.addEventListener("submit", introduceNewCommentAndShow);
}

showCommentsList();
listenForSubmit();