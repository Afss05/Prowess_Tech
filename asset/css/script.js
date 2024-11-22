

// ......................smtp .....................

const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sheik.appxperts@gmail.com",
        Password : "6A2EFD7FE8CFCBB6EF8220DB3A0C5EFA56D3",
        To : 'sheik.appxperts@gmail.com',
        From : "sheik.appxperts@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("sumbit", (e) => {
    e.preventDefault();

    sendEmail();
})
  

new Splide(".splide", {
  type: "loop",
  perPage: 4,
  arrows: false,
  pagination: false,
  focus: "center",
  gap: "1em"
}).mount(window.splide.Extensions);
