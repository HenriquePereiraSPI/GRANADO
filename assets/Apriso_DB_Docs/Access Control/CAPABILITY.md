# CAPABILITY

**Database:** Solution Authoring

**Description:** Contains the list of server-side operations used as Capabilities.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| ID | INT(10,0) | False |  | True |  | Unique identifier of a record (key) in a table. |
| MethodSignature | NVARCHAR(2000) | False |  | False |  | Method signature of a server-side operation. |
| MethodSignatureHash | NVARCHAR(255) | False |  | False |  | Hash of the type name and of the method signature of a server-side operation used as a Capability. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| TypeName | NVARCHAR(1000) | False |  | False |  | Name of a type, which contains server-side operations. |

## Primary Key

- **PK_CAPABILITY** on `ID`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_CAPABILITY_ROLE_CAPABILITY** — CAPABILITY_ROLE -> CAPABILITY (`CapabilityID -> ID`)

## Unique Indexes

- **UK_CAPABILITY_METHODSIGNATUREHASH** on `MethodSignatureHash`

## Non-Unique Indexes

- **** on ``
