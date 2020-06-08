// INSTRUCTIONS:
// 1. Edit the fields below with the data of your choice
// Characters that need to be replaced:
// Newline Character: %0D%0A
// Apostrophe: %27

let emailData = {
  "to": "mayor@springfield-or.gov",
  "cc": "",
  "bcc": "svangordon@springfield-or.gov, smoe@springfield-or.gov, smoore@springfield-or.gov, lstoehr@springfield-or.gov, mwoodrow@springfield-or.gov, jpishioneri@springfield-or.gov",
  "subject": "SPD Body Camera Program",
  "body" : "Dear Springfield Official,%0D%0A" +
    "My name is [NAME], and I am a resident of [CITY, STATE]. I am emailing you as a concerned citizen regarding the Springfield City Council debate over whether or not to defund the Springfield Police Department body camera program. Across the country, Americans are protesting the ongoing police brutality that plagues this nation, and specifically its communities of color. Now is the time for communities like ours to take the necessary steps to increase the accountability and transparency of police departments. Springfield must step up to protect the safety and wellbeing of its residents by requiring the SPD to implement the body camera program. There are many areas where the SPD budget can be reduced or cut; however, this expenditure is not one of them. Instead of cutting the body camera program - which I believe is absolutely necessary - I call on the Springfield City Council to reexamine other budgetary allocations, such as school resource officers, the defunding of which could be alternatives to cutting the body camera program.%0D%0A" +
    "I call on you to stand up against the budget cut of the body camera program, and urge that this needed program be included in the budget and implemented by the SPD.%0D%0A%0D%0A" +
    "Sincerely,%0D%0A" +
    "[NAME]%0D%0A"
}


const {to, cc, bcc, title, subject, body} = emailData
window.location.href = "mailto:"+ to +
    "?cc="+cc +
    "&bcc=" + bcc +
    "&subject=" + subject +
    "&body="+ body


