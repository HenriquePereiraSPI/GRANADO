# ECA_OBJECT_TYPE

**Database:** Operational

**Description:** The list of DELMIA Apriso objects to which the ECCN can be assigned. It contains also the database table reference where the object is defined

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EcaObjectType | SMALLINT(5,0) | False |  | True |  | ECA Object Type. |
| Name | NVARCHAR(50) | False |  | False |  | ECA Object Type name. |
| ReferenceTableName | NVARCHAR(30) | True |  | False |  | Name of the table where the object is located. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_ECA_OBJECT_TYPE** on `EcaObjectType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_ECA_OBJECT_ECA_OBJECT_TYPE** — ECA_OBJECT -> ECA_OBJECT_TYPE (`EcaObjectType -> EcaObjectType`)
- **FK_ECA_OBJECT_HISTORY_ECA_OBJECT_TYPE** — ECA_OBJECT_HISTORY -> ECA_OBJECT_TYPE (`EcaObjectType -> EcaObjectType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
