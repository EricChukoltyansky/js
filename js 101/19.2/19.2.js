const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

let div = document.querySelector("div");

let print = () => {
  users.forEach((item, index) => {
    div.innerHTML = `<ol style="list-style-type: none">
        <li data-id="${users[0].id}">${users[0].firstName}&nbsp;${users[0].lastName} and this is my email: ${users[0].email}</li>
        <li data-id="${users[1].id}">${users[1].firstName}&nbsp;${users[1].lastName} and this is my email: ${users[1].email}</li>
        <li data-id="${users[2].id}">${users[2].firstName}&nbsp;${users[2].lastName} and this is my email: ${users[2].email}</li>
        </ol>`;
  });
};

window.addEventListener("load", print);
