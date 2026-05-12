# COMPONENT_ISSUE_TYPE

**Database:** Operational

**Description:** Contains all the available types of Component Issues (consumed or produced). They are used to identify ingredients/components vs co-products and by-products.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |
| Type | SMALLINT(5,0) | False |  | True |  | Type of the Component: Consume or Produce. |

## Primary Key

- **PK_COMPONENT_ISSUE_TYPE** on `Type`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_COMPONENT_COMPONENT_ISSUE_TYPE** — COMPONENT -> COMPONENT_ISSUE_TYPE (`IssueType -> Type`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
