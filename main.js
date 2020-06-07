// INSTRUCTIONS:
// 1. Edit the fields below with the data of your choice
// data fields enclosed in []'s means it is an array and you can add as many comma separate "strings" as you like
emailData = {
  "to": ["example1@gmail.com"],
  "cc": ["example1@gmail.com"],
  "bcc": ["example1@gmail.com", "example2@gmail.com", "example3@gmail.com", "example4@gmail.com"],
  "title": "EXAMPLE TITLE",
  "subject": "EXAMPLE SUBJECT",
  "body" : "EXAMPLE BODY"
}


const {to, cc, bcc, title, subject, body} = emailData
window.location.href = "mailto:"+ to.map(e=> e+ ", ") +
    "?cc="+cc.map(e=> e+ ", ") +
    "&bcc=" + bcc.map(e=> e+ ", ") +
    "&subject=" + title +
    "&body="+ body


