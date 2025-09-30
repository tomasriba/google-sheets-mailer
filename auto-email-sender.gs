function SendMails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(""); // Insert sheet name between ""
  var data = sheet.getRange("").getValues(); // Insert rows where mails are registered. For example: B34:V66
  var mailText = "Good morning [person name]..."; // Mail message between ""
  
  for (var i = 0; i < data.length; i++) {
    var personsName = data[i][0]; // Set which column should be reviewed to get the name
    var mailAddress = data[i][4]; // Set which column is address registered
    var valueS = data[i][17]; // Get value from excluding column
    var valueV = data[i][20]; // Get value from excluding colum
    
    if (!valueS && !valueV) { // If there is no value in this columns
      var mailMessage = mailText.replace("[person name]", personsName); // Replace [person name] with person's name
      GmailApp.sendEmail(mailAddress, "Subject", mailMessage, {from: "Your name <your mail adress>"}); // Send email from your adress
    }
  }
}
