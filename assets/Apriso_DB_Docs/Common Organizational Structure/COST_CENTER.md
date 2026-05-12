# COST_CENTER

**Database:** Operational

**Description:** Cost center details

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| CostCenter | NVARCHAR(70) | False |  | True |  | Cost Center name and attributes |
| Division | NVARCHAR(70) | False |  | True | DIVISION | Division and its Attributes unique name |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_COST_CENTER** on `Division, CostCenter`

## Foreign Keys (this table -> other)

- **FK_COST_CENTER_DIVISION** — COST_CENTER -> DIVISION (`Division -> Division`)

## Referenced By (other tables -> this)

- **FK_COST_CENTER_ADDRESSES_COST_CENTER** — COST_CENTER_ADDRESS -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)
- **FK_COST_CENTER_CONTACTS_COST_CENTER** — COST_CENTER_CONTACT -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)
- **FK_DEPARTMENT_COST_CENTER** — DEPARTMENT -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)
- **FK_EMPLOYEE_COST_CENTER** — EMPLOYEE -> COST_CENTER (`CostCenterDivision, CostCenter -> Division, CostCenter`)
- **FK_GL_ACCOUNTS_COST_CENTER** — GL_ACCOUNT -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)
- **FK_ORDER_HEADER_COST_CENTER** — ORDER_HEADER -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)
- **FK_OWNERSHIP_COST_CENTER** — OWNERSHIP -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)
- **FK_WORK_CENTER_COST_CENTER** — WORK_CENTER -> COST_CENTER (`Division, CostCenter -> Division, CostCenter`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **IXD_CostCenter** on `CostCenter`
