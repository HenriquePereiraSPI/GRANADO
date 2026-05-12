# WIP_SERIAL_NO_CONTENT

**Database:** Operational

**Description:** This table stores information about the WIP Operation in which the WIP serial is being processed.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllocatedBucket | BIT | True |  | False |  | Flagged if the Serial Number is allocated to the WIP Order. |
| CommittedBucket | BIT | True |  | False |  | For future use. |
| CompletedBucket | BIT | True |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP Serial Number content. |
| InputBucket | BIT | True |  | False |  | The WIP Serial Number received but not yet allocated. |
| OutPutBucket | BIT | True |  | False |  | The Serial Number that was processed and is to be pushed to another Operation. |
| ProductID | INT(10,0) | False |  | False | SERIAL_NO | The reference to a product (product number and product version). |
| SerialNo | NVARCHAR(40) | False |  | False | SERIAL_NO | The Serial Number to process, allocate, or be processed. The serial can be a produced finished good serial or a consumed Component serial. |
| WipContentID | INT(10,0) | False |  | False | WIP_CONTENT | The link to the WIP content. |

## Primary Key

- **PK_WIP_SERIAL_NO_CONTENT** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_SERIAL_NO_CONTENT_SERIAL_NO** — WIP_SERIAL_NO_CONTENT -> SERIAL_NO (`ProductID, SerialNo -> ProductID, SerialNo`)
- **FK_WIP_SERIAL_NO_CONTENT_WIP_CONTENT** — WIP_SERIAL_NO_CONTENT -> WIP_CONTENT (`WipContentID -> ID`)

## Referenced By (other tables -> this)

- **FK_WIP_STEP_SERIAL_CONTENT_WIP_SERIAL_NO_CONTENT** — WIP_STEP_SERIAL_CONTENT -> WIP_SERIAL_NO_CONTENT (`WipSerialNoContentID -> ID`)

## Unique Indexes

- **IX_WIP_SERIAL_NO_CONTENT** on `WipContentID, SerialNo, ProductID`

## Non-Unique Indexes

- **IF_WIP_SERIAL_NO_CONTENT_SERIAL_NO** on `SerialNo, ProductID`
