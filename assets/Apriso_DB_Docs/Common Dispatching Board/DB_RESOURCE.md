# DB_RESOURCE

**Database:** Operational

**Description:** This table stores information about the resources within Dispatching Board. It can include any type of data to be assigned to an activity.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| AllowAssignment | BIT | False |  | False |  | Indicates if the Resource can be assigned. |
| AllowOverloadCapacity | BIT | False |  | False |  | Indicates if the Resource allows the assignment of more Activities than its capacity. |
| BreakdownStructureCode | NVARCHAR(128) | True |  | False |  | The sorting order. |
| Capacity | DECIMAL(28,10) | True |  | False |  | The Resource capacity. |
| Department | NVARCHAR(40) | True |  | False |  | The Department. |
| Description | NVARCHAR(64) | True |  | False |  | The description of the Resource. |
| EmployeeID | INT(10,0) | True |  | False |  | The ID of the Employee. |
| EmployeeName | NVARCHAR(100) | True |  | False |  | The Employee name. |
| EmployeeNo | NVARCHAR(50) | True |  | False |  | The Employee number. |
| EquipmentID | INT(10,0) | True |  | False |  | The ID of the Equipment. |
| EquipmentName | NVARCHAR(80) | True |  | False |  | The name of Equipment. |
| EquipmentType | INT(10,0) | True |  | False |  | The Equipment type. |
| EquipmentTypeDescription | NVARCHAR(255) | True |  | False |  | The description of the Equipment type. |
| Facility | NVARCHAR(40) | True |  | False |  | The Facility. |
| HasChanges | BIT | False |  | False |  | Indicates if the Resource has changes. |
| Hidden | BIT | False |  | False |  | Indicates if the Resource is visible in the Workspace (used for the filter). |
| ID | INT(10,0) | False |  | True |  | The Resource within the Workspace. |
| LastMaintenanceDate | DATETIME | True |  | False |  | The last maintenance date of the Resource. |
| Location | NVARCHAR(80) | True |  | False |  | The location. |
| LocationID | INT(10,0) | True |  | False |  | The ID of the location. |
| Name | NVARCHAR(80) | True |  | False |  | The Resource name. |
| NextMaintenanceDate | DATETIME | True |  | False |  | The next scheduled maintenance date of the Resource. |
| Occupation | NVARCHAR(40) | True |  | False |  | The occupation. |
| ProductionLineNo | NVARCHAR(40) | True |  | False |  | The Production Line number. |
| ResourceClass | INT(10,0) | True |  | False |  | The Resource class. |
| ResourceClassDescription | NVARCHAR(255) | True |  | False |  | The description of the Resource class. |
| ResourceID | INT(10,0) | True |  | False |  | The ID of the Resource. |
| ResourceName | NVARCHAR(80) | True |  | False |  | The name of the Resource. |
| SkillDescription | NVARCHAR(255) | True |  | False |  | The description of the Skill. |
| SkillID | INT(10,0) | True |  | False |  | The ID of the Skill. |
| Speed | DECIMAL(28,10) | True |  | False |  | The speed. |
| SpeedUom | NVARCHAR(10) | True |  | False |  | The UOM of the speed. |
| Status | INT(10,0) | True |  | False |  | The status. |
| StatusDescription | NVARCHAR(255) | True |  | False |  | The description of the status. |
| UserBoolean1 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean2 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean3 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean4 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean5 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean6 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean7 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserBoolean8 | BIT | True |  | False |  | A Boolean field for the user's use. |
| UserDate1 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate2 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate3 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate4 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate5 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate6 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate7 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDate8 | DATETIME | True |  | False |  | An date/time field for the user's use. |
| UserDecimal1 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal2 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal3 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal4 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal5 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal6 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal7 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
| UserDecimal8 | DECIMAL(28,10) | True |  | False |  | An decimal field for the user's use. |
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
| WorkCenter | NVARCHAR(40) | True |  | False |  | The Work Center. |
| WorkSpaceID | INT(10,0) | False |  | False | DB_WORKSPACE | The foreign key to the DB_WORKSPACE.ID Enable delete cascade. |

## Primary Key

- **PK_DB_RESOURCE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DB_RESOURCE_WORKSPACE** — DB_RESOURCE -> DB_WORKSPACE (`WorkSpaceID -> ID`)

## Referenced By (other tables -> this)

- **FK_DB_RESOURCE_ACTIVITY_RESOURCE** — DB_RESOURCE_ACTIVITY -> DB_RESOURCE (`DBResourceID -> ID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DB_RESOURCE_WORKSPACE** on `WorkSpaceID`
