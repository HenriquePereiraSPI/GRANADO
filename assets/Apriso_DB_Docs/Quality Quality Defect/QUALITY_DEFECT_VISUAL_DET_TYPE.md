# QUALITY_DEFECT_VISUAL_DET_TYPE

**Database:** Operational

**Description:** This table stores QUALITY_DEFECT_VISUAL_DETAIL types.

## Columns

| Name | Data Type | Nullable | Default | Primary | FK To | Description |
|------|-----------|----------|---------|---------|-------|-------------|
| QualityDefectVisualDetailType | SMALLINT(5,0) | False |  | True |  | Type of Quality Defect Visual Detail. |
| TextID | INT(10,0) | True |  | False |  | Unique identifier of the Text. Can be used for translation purposes. |

## Primary Key

- **PK_QUALITY_DEFECT_VISUAL_DET_TYPE** on `QualityDefectVisualDetailType`

## Foreign Keys (this table -> other)

- **** —  (``)

## Referenced By (other tables -> this)

- **FK_QUALITY_DEFECT_VISUAL_DETAIL_QUALITY_DEFECT_VISUAL_DET_TYPE** — QUALITY_DEFECT_VISUAL_DETAIL -> QUALITY_DEFECT_VISUAL_DET_TYPE (`QualityDefectVisualDetailType -> QualityDefectVisualDetailType`)

## Unique Indexes

- **** on ``

## Non-Unique Indexes

- **** on ``
