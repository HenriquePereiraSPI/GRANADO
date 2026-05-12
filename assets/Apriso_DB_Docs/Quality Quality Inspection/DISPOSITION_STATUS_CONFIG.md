# DISPOSITION_STATUS_CONFIG

**Database:** Operational

**Description:** Disposition Status Configuration is used to configure constraints of the system in case of status changes. These constraints are roles and skills of employees executing business logic that changes the

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| DispositionLineStatus | SMALLINT(5,0) | True |  | False | DISPOSITION_LINE_STATUS | Unique identifier of the Disposition Line Status (used exclusively with DispositionStatus and DispositionTestStatus) |
| DispositionStatus | SMALLINT(5,0) | True |  | False | DISPOSITION_STATUS | Unique identifier of the Disposition Status (used exclusively with DispositionTestStatus and DispositionLineStatus) |
| DispositionTestStatus | SMALLINT(5,0) | True |  | False | DISPOSITION_TEST_STATUS | Unique identifier of the Disposition Test Status (used exclusively with DispositionStatus and DispositionLineStatus) |
| ID | INT(10,0) | False |  | True |  | Unique identifier of Disposition Status Configuration record |
| RoleID | INT(10,0) | True |  | False | ROLE | Identifier of the role that allows the status change |
| SkillID | INT(10,0) | True |  | False | SKILL | Identifier of the skill that allows the status change |

## Primary Key

- **PK_DISPOSITION_STATUS_CONFIG** on `ID`

## Foreign Keys (this table -> other)

- **FK_DISPOSITION_STATUS_CONFIG_DISPOSITION_LINE_STATUS** — DISPOSITION_STATUS_CONFIG -> DISPOSITION_LINE_STATUS (`DispositionLineStatus -> Status`)
- **FK_DISPOSITION_STATUS_CONFIG_DISPOSITION_STATUS** — DISPOSITION_STATUS_CONFIG -> DISPOSITION_STATUS (`DispositionStatus -> Status`)
- **FK_DISPOSITION_STATUS_CONFIG_DISPOSITION_TEST_STATUS** — DISPOSITION_STATUS_CONFIG -> DISPOSITION_TEST_STATUS (`DispositionTestStatus -> DispositionTestStatus`)
- **FK_DISPOSITION_STATUS_CONFIG_ROLE** — DISPOSITION_STATUS_CONFIG -> ROLE (`RoleID -> ID`)
- **FK_DISPOSITION_STATUS_CONFIG_SKILL** — DISPOSITION_STATUS_CONFIG -> SKILL (`SkillID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_DISPOSITION_STATUS_CONFIG_DISPOSITION_LINE_STATUS** on `DispositionLineStatus`
- **IF_DISPOSITION_STATUS_CONFIG_DISPOSITION_STATUS** on `DispositionStatus`
- **IF_DISPOSITION_STATUS_CONFIG_DISPOSITION_TEST_STATUS** on `DispositionTestStatus`
- **IF_DISPOSITION_STATUS_CONFIG_ROLE** on `RoleID`
- **IF_DISPOSITION_STATUS_CONFIG_SKILL** on `SkillID`
