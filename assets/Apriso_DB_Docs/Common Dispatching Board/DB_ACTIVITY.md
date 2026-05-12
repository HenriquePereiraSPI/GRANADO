# DB_ACTIVITY

**Database:** Operational

**Description:** This table stores information about Activities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowAssignment | BIT | False |  | False |  | Indicates if the Activity enables changing the assignment. |
| AllowChangeDuration | BIT | False |  | False |  | Indicates if the Activity enables changing the duration. |
| AllowChangeProgress | BIT | False |  | False |  | Indicates if the Activity enables changing the progress. |
| AllowChangeStartDate | BIT | False |  | False |  | Indicates if the Activity enables changing the start date. |
| BreakdownStructureCode | NVARCHAR(64) | True |  | False |  | The sorting order. |
| Comment_ | NVARCHAR(256) | True |  | False |  | The comment. |
| CompletedQuantity | DECIMAL(28,10) | True |  | False |  | The completed quantity of the order. |
| ContainerNo | NVARCHAR(40) | True |  | False |  | The Container number. |
| Department | NVARCHAR(40) | True |  | False |  | The Department. |
| Description | NVARCHAR(64) | True |  | False |  | The description of the Activity. |
| DueDate | DATETIME | True |  | False |  | The due date of the Activity. |
| DurationInSeconds | INT(10,0) | False |  | False |  | The scheduled duration of the Activity. |
| EmployeeID | INT(10,0) | True |  | False |  | The ID of the Employee. |
| EmployeeName | NVARCHAR(100) | True |  | False |  | The Employee name. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | The Employee number. |
| EndDate | DATETIME | True |  | False |  | The scheduled end date of the Activity. |
| EquipmentID | INT(10,0) | True |  | False |  | The ID of the Equipment. |
| EquipmentName | NVARCHAR(80) | True |  | False |  | The name of the Equipment. |
| ErrorMessage | NVARCHAR(256) | True |  | False |  | The error message. |
| Facility | NVARCHAR(40) | True |  | False |  | The Facility. |
| HasChanges | BIT | False |  | False |  | Indicates if the dependency has been changed. |
| HasError | BIT | False |  | False |  | Indicates if the Activity has an error. |
| ID | INT(10,0) | False |  | True |  | The ID of the Activity. |
| IndentLevel | INT(10,0) | True |  | False |  | The hierarchy level of the Activity. |
| InventoryShortageDate | DATETIME | True |  | False |  | The forecasted inventory shortage date (used by the inventory coverage module). |
| IsHeld | BIT | False |  | False |  | For Complex Assembly, this flag states if the Operation is released (0) or on hold (1). |
| Location | NVARCHAR(80) | True |  | False |  | The location. |
| LocationID | INT(10,0) | True |  | False |  | The ID of the location. |
| LotNo | NVARCHAR(40) | True |  | False |  | The Lot Number. |
| Name | NVARCHAR(150) | True |  | False |  | The name of the Activity. |
| NoEarlierThan | DATETIME | True |  | False |  | The start date of the Activity cannot be earlier than this date. |
| NoLaterThan | DATETIME | True |  | False |  | The start date of the Activity cannot be later than this date. |
| OprSequenceNo | NVARCHAR(20) | True |  | False |  | The Operation Sequence number. |
| OrderLineNo | INT(10,0) | True |  | False |  | The Order Line number. |
| OrderNo | NVARCHAR(20) | True |  | False |  | The order number. |
| OrderQuantity | DECIMAL(28,10) | True |  | False |  | The quantity of the order. |
| OrderType | SMALLINT(5,0) | True |  | False |  | The order type. |
| OrderTypeDescription | NVARCHAR(255) | True |  | False |  | The description of the order type. |
| ParentOprSequenceNo | NVARCHAR(20) | True |  | False |  | The parent Operation Sequence number. |
| ParentWipOrderNo | NVARCHAR(40) | True |  | False |  | The parent WIP Order number. |
| ParentWipOrderType | SMALLINT(5,0) | True |  | False |  | The parent WIP Order type. |
| PayRule | NVARCHAR(20) | True |  | False |  | The Pay Rule. |
| PercentageCompleted | DECIMAL(28,10) | True |  | False |  | The complete progress of the Activity in percentage. |
| Precedences | NVARCHAR(1000) | True |  | False |  | The precedence of the Activity. |
| Priority | SMALLINT(5,0) | True |  | False |  | The priority of the WIP Order. |
| ProductDescription | NVARCHAR(255) | True |  | False |  | The description of the product. |
| ProductID | INT(10,0) | True |  | False |  | The ID of the product. |
| ProductionLineNo | NVARCHAR(40) | True |  | False |  | The Production Line number. |
| ProductNo | NVARCHAR(80) | True |  | False |  | The product number. |
| ProgressStatus | INT(10,0) | True |  | False |  | The progress status. |
| ProgressStatusDescription | NVARCHAR(255) | True |  | False |  | The description of the progress status. |
| ProjectCode | NVARCHAR(40) | True |  | False |  | The project code. |
| ReadOnly | BIT | False |  | False |  | Indicates if the Activity allows modification. |
| ResourceClass | INT(10,0) | True |  | False |  | The Resource class. |
| ResourceClassDescription | NVARCHAR(255) | True |  | False |  | The description of the Resource class. |
| ResourceID | INT(10,0) | True |  | False |  | The ID of the Resource. |
| ResourceName | NVARCHAR(80) | True |  | False |  | The name of Resource. |
| ResourceTypeDescription | NVARCHAR(255) | True |  | False |  | The description of the Resource type. |
| Role | NVARCHAR(40) | True |  | False |  | The Role. |
| SerialNo | NVARCHAR(40) | True |  | False |  | The Serial Number. |
| Shift | NVARCHAR(20) | True |  | False |  | The shift. |
| SkillDescription | NVARCHAR(255) | True |  | False |  | The description of the Skill. |
| SkillID | INT(10,0) | True |  | False |  | The ID of the Skill. |
| StartDate | DATETIME | True |  | False |  | The scheduled start date of the Activity. |
| Status | SMALLINT(5,0) | True |  | False |  | The Activity status. |
| StatusDescription | NVARCHAR(255) | True |  | False |  | The description of the status. |
| TaskID | INT(10,0) | True |  | False |  | The ID of the task. |
| Team | NVARCHAR(40) | True |  | False |  | The team. |
| UomCode | NVARCHAR(10) | True |  | False |  | The UOM code. |
| UserBoolean1 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean2 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean3 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean4 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean5 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean6 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean7 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean8 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserDate1 | DATETIME | True |  | False |  | A date/time field for the user's use. |
| UserDate2 | DATETIME | True |  | False |  | A date/time field for the user's use. |
| UserDate3 | DATETIME | True |  | False |  | A date/time field for the user's use. |
| UserDate4 | DATETIME | True |  | False |  | A date/time field for the user's use. |
| UserDate5 | DATETIME | True |  | False |  | A date/time field for the user's use. |
| UserDate6 | DATETIME | True |  | False |  | A date/time field for the user's use. |
| UserDate7 | DATETIME | True |  | False |  | A date/time field for the user's use. |
| UserDate8 | DATETIME | True |  | False |  | A date/time field for the user's use. |
| UserDecimal1 | DECIMAL(28,10) | True |  | False |  | A decimal field for the user's use. |
| UserDecimal2 | DECIMAL(28,10) | True |  | False |  | A decimal field for the user's use. |
| UserDecimal3 | DECIMAL(28,10) | True |  | False |  | A decimal field for the user's use. |
| UserDecimal4 | DECIMAL(28,10) | True |  | False |  | A decimal field for the user's use. |
| UserDecimal5 | DECIMAL(28,10) | True |  | False |  | A decimal field for the user's use. |
| UserDecimal6 | DECIMAL(28,10) | True |  | False |  | A decimal field for the user's use. |
| UserDecimal7 | DECIMAL(28,10) | True |  | False |  | A decimal field for the user's use. |
| UserDecimal8 | DECIMAL(28,10) | True |  | False |  | A decimal field for the user's use. |
| UserImage1 | NVARCHAR(64) | True |  | False |  | A string field for the user's use (specifically for an image). |
| UserImage2 | NVARCHAR(64) | True |  | False |  | A string field for the user's use (specifically for an image). |
| UserImage3 | NVARCHAR(64) | True |  | False |  | A string field for the user's use (specifically for an image). |
| UserImage4 | NVARCHAR(64) | True |  | False |  | A string field for the user's use (specifically for an image). |
| UserImage5 | NVARCHAR(64) | True |  | False |  | A string field for the user's use (specifically for an image). |
| UserImage6 | NVARCHAR(64) | True |  | False |  | A string field for the user's use (specifically for an image). |
| UserImage7 | NVARCHAR(64) | True |  | False |  | A string field for the user's use (specifically for an image). |
| UserImage8 | NVARCHAR(64) | True |  | False |  | A string field for the user's use (specifically for an image). |
| UserInt1 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserInt2 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserInt3 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserInt4 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserInt5 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserInt6 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserInt7 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserInt8 | INT(10,0) | True |  | False |  | An integer field for the user's use. |
| UserString1 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString2 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString3 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString4 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString5 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString6 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString7 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| UserString8 | NVARCHAR(255) | True |  | False |  | A string field for the user's use. |
| WBSCode | NVARCHAR(32) | True |  | False |  | The WBS code. |
| WeighHeaderID | INT(10,0) | True |  | False |  | The ID of the weigh header (used by the W&D module). |
| WipOrderNo | NVARCHAR(40) | True |  | False |  | The WIP Order number. |
| WipOrderType | SMALLINT(5,0) | True |  | False |  | The WIP Order type. |
| WipOrderTypeDescription | NVARCHAR(255) | True |  | False |  | The WIP Order type description. |
| WorkCenter | NVARCHAR(40) | True |  | False |  | The Work Center. |
| WorkPeriod | NVARCHAR(20) | True |  | False |  | The Work Period. |
| WorkSpaceID | INT(10,0) | False |  | False | DB_WORKSPACE | The foreign key to DB_WORKSPACE.ID. |

## Primary Key

- **PK_DB_ACTIVITY** on `ID`

## Foreign Keys (this table -> other)

- **FK_DB_ACTIVITY_DB_WORKSPACE** — DB_ACTIVITY -> DB_WORKSPACE (`WorkSpaceID -> ID`)

## Referenced By (other tables -> this)

- **FK_DB_ACTIVITY_DEPENDENCY_ACTIVITY1** — DB_ACTIVITY_DEPENDENCY -> DB_ACTIVITY (`FromActivityID -> ID`)
- **FK_DB_ACTIVITY_DEPENDENCY_ACTIVITY2** — DB_ACTIVITY_DEPENDENCY -> DB_ACTIVITY (`ToActivityID -> ID`)
- **FK_DB_RESOURCE_ACTIVITY_ACTIVITY** — DB_RESOURCE_ACTIVITY -> DB_ACTIVITY (`DBActivityID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DB_ACTIVITY_DB_WORKSPACE** on `WorkSpaceID`
