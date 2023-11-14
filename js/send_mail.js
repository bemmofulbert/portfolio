const name_sender = document.getElementById("name_sender");	
const email_sender = document.getElementById("email_sender");
const subject_sender = document.getElementById("subject_sender");
const message_sender = document.getElementById("message_sender");

const contactForm = document.getElementById("contact-form");
const butSendIcon = document.getElementById("butSendIcon");
const butSendMail = document.getElementById("sendMail");

var refresh_url_mail = () => 
{
	var name = name_sender.value;	
	var email = email_sender.value;
	var subject = subject_sender.value;
	var message = message_sender.value;
	
	var myEmail = "fbemmo.megasoft@gmail.com";
	
	contactForm.action = String("mailto:"+myEmail+"?subject="+subject+"&body="+message+"%0A%0ABy%20"+name+"%0A"+email);
}
name_sender.addEventListener("input", refresh_url_mail);
email_sender.addEventListener("input", refresh_url_mail);
subject_sender.addEventListener("input", refresh_url_mail);
message_sender.addEventListener("input", refresh_url_mail);

butSendIcon.addEventListener("click", () => {
		butSendMail.click();
	}
);
