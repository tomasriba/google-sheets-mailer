Google Apps Script that automates sending personalized bulk emails from Google Sheets using Gmail. Recipient data is read from a spreadsheet and merged into a customized message template before sending.

The script connects Google Sheets with Gmail to:
- Read names, email addresses, and conditions from a chosen sheet.
- Replace placeholders (e.g., [person name]) in a template message.
- Skip rows when exclusion columns contain values.
- Send personalized emails automatically.

Steps:
1. Open your Google Sheet with recipient data.
2. Go to Extensions → Apps Script.
3. Paste the script into the editor.
4. Adjust configuration values (SHEET_NAME, DATA_RANGE, and column indices).
5. Save and click Run → SendMails (first run requires authorization).
(Optional) Set a time-driven trigger to run the script automatically.
