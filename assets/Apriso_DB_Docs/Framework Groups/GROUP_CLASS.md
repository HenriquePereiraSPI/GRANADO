# GROUP_CLASS

**Database:** Operational

**Description:** Defines all the valid Group Classes that exist in the system.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| Name | NVARCHAR(50) | False |  | False |  | Name of the entity. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_GROUP_CLASS** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CHECK_LIST_CHECK_POINT_GROUP_CLASS** — CHECK_LIST_CHECK_POINT -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_DISPOSITION_GROUP_CODE_GROUP_CLASS** — DISPOSITION_GROUP_CODE -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_DISPOSITION_TEST_ATTRIBUTE_GROUP_CLASS** — DISPOSITION_TEST_ATTRIBUTE -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_DISPOSITION_TEST_GROUP_CODE_GROUP_CLASS** — DISPOSITION_TEST_GROUP_CODE -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_GROUP_GROUP_CLASS** — GROUP_ -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_INSPECTION_DETERMINATION_GROUPCLASSID** — INSPECTION_DETERMINATION -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_PACKAGING_INSTR_USAGE_GROUP_CLASS** — PACKAGING_INSTR_USAGE -> GROUP_CLASS (`GroupClassID -> ID`)

## Unique Indexes

- **UK_GROUP_CLASS_1** on `Name`

## Non-Unique Indexes

- **** on ``
