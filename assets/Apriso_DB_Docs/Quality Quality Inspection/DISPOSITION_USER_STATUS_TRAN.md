# DISPOSITION_USER_STATUS_TRAN

**Database:** Operational

**Description:** Table used to define all possible tranisitions of the user status in the Disposition hierarchy: Disposition (DISPOSITION), Disposition Line (DISPOSITION_LINE), Disposition Test (DISPOSITION_TEST), Dis

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DstDispositionUserStatusID | INT(10,0) | True |  | False | DISPOSITION_USER_STATUS | Unique identifier of the User Status TO which the given entiry is moved. It allows NULLs what means that e.g. the transition from source user status: Reviewed to destination user status: NULL is allowed |
| ID | INT(10,0) | False |  | True |  | Unique identifier of the record (key). |
| OnChangeDFCRevisionFUID | NVARCHAR(36) | True |  | False |  | Reference to the FUID column in the DFC_REVISION table. |
| SrcDispositionUserStatusID | INT(10,0) | True |  | False | DISPOSITION_USER_STATUS | Unique identifier of the User Status FROM which the given entiry is moved. It allows NULLs what means that e.g. the transition from source user status: NULL to destination user status: New is allowed |
| Type_ | SMALLINT(5,0) | True |  | False |  | Type of the transition: 1 - Disposition, 2 - Disposition Line, 3 - Disposition Test, 4 - Disposition Sample. Represents the level of the Disposition hierarchy to which the given transition applies, e.g. transition with Type_ = 2 means the transition rule that applies to Disposition Line (DISPOSITION_LINE) records |

## Primary Key

- **PK_DISPOSITION_USER_STATUS_TRAN** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_USER_STATUS_TRAN_DISPOSITION_USER_STATUS** — DISPOSITION_USER_STATUS_TRAN -> DISPOSITION_USER_STATUS (`SrcDispositionUserStatusID -> ID`)
- **FK_DISPOSITION_USER_STATUS_TRAN_DISPOSITION_USER_STATUS1** — DISPOSITION_USER_STATUS_TRAN -> DISPOSITION_USER_STATUS (`DstDispositionUserStatusID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Business Keys (this table -> other)

- DISPOSITION_USER_STATUS_TRAN -> DFC_REVISION (`OnChangeDFCRevisionFUID -> FUID`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_USER_STATUS_TRAN_DFC_REVISION** on `OnChangeDFCRevisionFUID`
- **IF_DISPOSITION_USER_STATUS_TRAN_DISPOSITION_USER_STATUS** on `SrcDispositionUserStatusID`
- **IF_DISPOSITION_USER_STATUS_TRAN_DISPOSITION_USER_STATUS1** on `DstDispositionUserStatusID`
