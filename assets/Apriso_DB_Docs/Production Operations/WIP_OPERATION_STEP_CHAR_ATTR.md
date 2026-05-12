# WIP_OPERATION_STEP_CHAR_ATTR

**Database:** Operational

**Description:** This table stores all the Attributes of the attributive Characteristics linked to a WIP Operation Step. It is populated during the Explosion. It references the WIP_OPERATION_STEP_CHAR table.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Attribute | NVARCHAR(80) | True |  | False |  | Collected attribute. |
| Characteristic | NVARCHAR(40) | True |  | False |  | The parent Characteristic to which the Step Characteristic Attribute is linked. |
| Conforming | BIT | True |  | False |  | Specifies if the Attribute is conforming or nonconforming. |
| ID | INT(10,0) | False |  | True |  | The unique identifier of the WIP Operation Step Characteristic Attribute. |
| SequenceNo | INT(10,0) | True |  | False |  | The Sequence of the Attributes. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| WipOperationStepCharID | INT(10,0) | False |  | False | WIP_OPERATION_STEP_CHAR | The link to the WIP_OPERATION_STEP_CHAR table. |

## Primary Key

- **PK_WIP_OPERATION_STEP_CHAR_ATTR** on `ID`

## Foreign Keys (this table -> other)

- **FK_WIP_OPERATION_STEP_CHAR_ATTR_WIP_OPERATION_STEP_CHAR** — WIP_OPERATION_STEP_CHAR_ATTR -> WIP_OPERATION_STEP_CHAR (`WipOperationStepCharID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_WIP_OPERATION_STEP_CHAR_ATTR_ATTRIBUTE** on `Characteristic, Attribute`
- **IF_WIP_OPERATION_STEP_CHAR_ATTR_WIP_OPERATION_STEP_CHAR** on `WipOperationStepCharID`
