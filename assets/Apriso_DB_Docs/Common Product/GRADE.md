# GRADE

**Database:** Operational

**Description:** Contains the Grades a product can have for various levels of quality (e.g. an attribute of the inventory).

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| GradeCode | NVARCHAR(20) | False |  | False |  | For future use. |
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_GRADES** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ATTRIBUTE_GRADE** — ATTRIBUTE -> GRADE (`GradeID -> ID`)
- **FK_CHARACTERISTIC_GRADE** — CHARACTERISTIC -> GRADE (`GradeID -> ID`)
- **FK_CODE_CLASS_NUMBER_GRADE** — CODE_CLASS_NUMBER -> GRADE (`GradeID -> ID`)
- **FK_CODE_UPC_GRADE** — CODE_UPC -> GRADE (`GradeID -> ID`)
- **FK_COMPONENT_GRADE** — COMPONENT -> GRADE (`GradeID -> ID`)
- **FK_COUNT_DISPOSITION_LINE_GRADE** — COUNT_DISPOSITION_LINE -> GRADE (`GradeID -> ID`)
- **FK_COUNT_DOCUMENT_GRADE** — COUNT_DOCUMENT -> GRADE (`GradeID -> ID`)
- **FK_COUNT_LOCK_GRADE** — COUNT_LOCK -> GRADE (`GradeID -> ID`)
- **FK_COUNT_RECORD_GRADE** — COUNT_RECORD -> GRADE (`GradeID -> ID`)
- **FK_DISPOSITION_CONTENT_GRADE** — DISPOSITION_CONTENT -> GRADE (`GradeID -> ID`)
- **FK_DISPOSITION_LINE_GRADE** — DISPOSITION_LINE -> GRADE (`GradeID -> ID`)
- **FK_DISPOSITION_TEST_GRADE** — DISPOSITION_TEST -> GRADE (`GradeID -> ID`)
- **FK_DISPOSITION_TEST_REASON_GRADE** — DISPOSITION_TEST_REASON -> GRADE (`GradeID -> ID`)
- **FK_INVENTORY_CONTAINER_GRADE** — INVENTORY_CONTAINER -> GRADE (`LastGradeID -> ID`)
- **FK_INVENTORY_COUNT_GRADE** — INVENTORY_COUNT -> GRADE (`GradeID -> ID`)
- **FK_INVENTORY_GRADE** — INVENTORY -> GRADE (`GradeID -> ID`)
- **FK_INVENTORY_SERIAL_NO_GRADE** — INVENTORY_SERIAL_NO -> GRADE (`LastGradeID -> ID`)
- **FK_INVENTORY2_GRADE** — INVENTORY2 -> GRADE (`GradeID -> ID`)
- **FK_LABOR_DETAIL_GRADE** — LABOR_DETAIL -> GRADE (`GradeID -> ID`)
- **FK_PARTNER_PRODUCT_GRADE** — PARTNER_PRODUCT -> GRADE (`GradeID -> ID`)
- **FK_PRODUCT_GRADE_GRADES** — PRODUCT_GRADE -> GRADE (`GradeID -> ID`)
- **FK_PRODUCT_SUBSTITUTE_GRADE** — PRODUCT_SUBSTITUTE -> GRADE (`GradeID -> ID`)
- **FK_PRODUCT_SUBSTITUTE_GRADE_1** — PRODUCT_SUBSTITUTE -> GRADE (`SubstituteGradeID -> ID`)
- **FK_SAMPLE_GRADE** — SAMPLE -> GRADE (`GradeID -> ID`)
- **FK_SERIAL_NO_GRADE** — SERIAL_NO -> GRADE (`GradeID -> ID`)
- **FK_SOFT_INVENTORY2_ALLOCATION_GRADE** — SOFT_INVENTORY2_ALLOCATION -> GRADE (`GradeID -> ID`)
- **FK_SPECIFICATION_ATTRIBUTE_GRADE** — SPECIFICATION_ATTRIBUTE -> GRADE (`GradeID -> ID`)
- **FK_SPECIFICATION_DISPOSITION_GRADE** — SPECIFICATION_DISPOSITION -> GRADE (`GradeID -> ID`)
- **FK_UNIT_CHARACTERISTIC_GRADE** — UNIT_CHARACTERISTIC -> GRADE (`GradeID -> ID`)

## Unique Indexes

- **UK_GRADES** on `GradeCode`

## Non-Unique Indexes

- **** on ``
