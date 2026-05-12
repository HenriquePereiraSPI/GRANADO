# TRANSACTION_HISTORY_MESSAGE

**Database:** Operational

**Description:** Table will store transaction history message

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Attachments | NVARCHAR(200) | True |  | False |  | A comma delimited list of the attachment names the email sent. |
| FromEmail | NVARCHAR(80) | True |  | False |  | The email address of the sender. |
| FromEmployeeNo | NVARCHAR(50) | True |  | False |  | The Employee number of the sender. |
| HighPriority | BIT | True |  | False |  | Determines if the email was sent has high priority or not. |
| ID | BIGINT(19,0) | False |  | True |  | Unique identifier of the row. |
| Message | NVARCHAR(1500) | True |  | False |  | The message body of the email. |
| SMTPServer | NVARCHAR(40) | True |  | False |  | The SMTP server used to send the email. |
| SMTPUsername | NVARCHAR(20) | True |  | False |  | The SMTP username that was used to send the email if SMTP authentication was required. |
| Subject | NVARCHAR(80) | True |  | False |  | The subject of the email. |
| ToBCCEmail | NVARCHAR(200) | True |  | False |  | A comma delimited list of employee email addresses  the email is BCCed to. |
| ToBCCEmployeeNo | NVARCHAR(100) | True |  | False |  | A comma delimited list of employee numbers the email is BCCed to. |
| ToCCEmail | NVARCHAR(200) | True |  | False |  | A comma delimited list of employee email addresses  the email is CCed to. |
| ToCCEmployeeNo | NVARCHAR(100) | True |  | False |  | A comma delimited list of employee numbers the email is CCed to. |
| ToEmail | NVARCHAR(400) | True |  | False |  | A comma delimited list of employee email addresses  the email is addressed to. |
| ToEmployeeNo | NVARCHAR(200) | True |  | False |  | A comma delimited list of employee numbers the email is addressed to. |
| TransactionHistoryID | BIGINT(19,0) | True |  | False | TRANSACTION_HISTORY | Link to the parent transaction history table. |

## Primary Key

- **PK_TRANSACTION_HISTORY_MESSAGE** on `ID`

## Foreign Keys (this table -> other)

- **FK_TRANSACTION_HISTORY_MESSAGE_TRANSACTION_HISTORY** — TRANSACTION_HISTORY_MESSAGE -> TRANSACTION_HISTORY (`TransactionHistoryID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_TRANSACTION_HISTORY_MESSAGE_TRANSACTION_HISTORY** on `TransactionHistoryID`
