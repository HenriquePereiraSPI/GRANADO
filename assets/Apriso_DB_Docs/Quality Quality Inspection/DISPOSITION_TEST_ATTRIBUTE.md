# DISPOSITION_TEST_ATTRIBUTE

**Database:** Operational

**Description:** Contains all the attributes of the attributive characteristics defined in Disposition Test

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| Attribute | NVARCHAR(80) | False |  | False |  | Collected attribute. |
| Conforming | BIT | False | (0) | False |  | Flag indicating if the value of the attribute is conforming to the specification |
| DefectReasonCode | NVARCHAR(20) | True |  | False | REASON_CODE | Defect Code of the quality defect to be created when the characteristic is inspected and the test results is equal to the current attribute |
| DispositionTestID | BIGINT(19,0) | False |  | False | DISPOSITION_TEST | Reference to disposition test record |
| Group_ | NVARCHAR(40) | True |  | False | GROUP_ | Unique identifier of group of attributes the current one is assigned to |
| GroupClassID | INT(10,0) | True |  | False | GROUP_ | Unique identifier of group class of attributes the current one is assigned to |
| GroupType | SMALLINT(5,0) | True |  | False | GROUP_ | Unique identifier of group type of attributes the current one is assigned to |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the disposition test attribute |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_DISPOSITION_TEST_ATTRIBUTE** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_TEST_ATTRIBUTE_DISPOSITION_TEST** — DISPOSITION_TEST_ATTRIBUTE -> DISPOSITION_TEST (`DispositionTestID -> ID`)
- **FK_DISPOSITION_TEST_ATTRIBUTE_GROUP_** — DISPOSITION_TEST_ATTRIBUTE -> GROUP_ (`Group_, GroupType, GroupClassID -> Group_, GroupType, GroupClassID`)
- **FK_DISPOSITION_TEST_ATTRIBUTE_GROUP_CLASS** — DISPOSITION_TEST_ATTRIBUTE -> GROUP_CLASS (`GroupClassID -> ID`)
- **FK_DISPOSITION_TEST_ATTRIBUTE_GROUP_TYPE** — DISPOSITION_TEST_ATTRIBUTE -> GROUP_TYPE (`GroupType -> GroupType`)
- **FK_DISPOSITION_TEST_ATTRIBUTE_REASON_CODE** — DISPOSITION_TEST_ATTRIBUTE -> REASON_CODE (`DefectReasonCode -> ReasonCode`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_TEST_ATTRIBUTE_DISPOSITION_TEST** on `DispositionTestID`
- **IF_DISPOSITION_TEST_ATTRIBUTE_GROUP_** on `Group_, GroupType, GroupClassID`
- **IF_DISPOSITION_TEST_ATTRIBUTE_GROUP_CLASS** on `GroupClassID`
