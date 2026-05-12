# EMPLOYEE_SKILL

**Database:** Operational

**Description:** Stores the link between an EMPLOYEE to one or more rows in the SKILL  table,  thereby creating as aspect of the Employee's profile.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| EmployeeID | INT(10,0) | False |  | True | EMPLOYEE | Employee assigned to the Skill. |
| ExpirationDate | DATETIME | True |  | False |  | Expiration date of the Skill for an Employee. |
| SkillExperienceLevel | INT(10,0) | True | (1) | False | SKILL_EXPERIENCE_LEVEL | Level of experience for a Skill. Used to filter tasks in the Task List. |
| SkillID | INT(10,0) | False |  | True | SKILL_EXPERIENCE_LEVEL | Reference to Skills, used to filter the Task List. |

## Primary Key

- **PK_EMPLOYEE_SKILL_XREF** on `EmployeeID, SkillID`

## Foreign Keys (this table -> other)

- **FK_EMPLOYEE_SKILL_SKILL_EXPERIENCE_LEVEL** — EMPLOYEE_SKILL -> SKILL_EXPERIENCE_LEVEL (`SkillID, SkillExperienceLevel -> SkillID, SkillExperienceLevel`)
- **FK_EMPLOYEE_SKILL_XREF_EMPLOYEE** — EMPLOYEE_SKILL -> EMPLOYEE (`EmployeeID -> ID`)
- **FK_EMPLOYEE_SKILL_XREF_EMPLOYEE_SKILL** — EMPLOYEE_SKILL -> SKILL (`SkillID -> ID`)

## Referenced By (other tables -> this)

- **** —  (``)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IF_EMPLOYEE_SKILL_SKILL_EXPERIENCE_LEVEL** on `SkillID, SkillExperienceLevel`
