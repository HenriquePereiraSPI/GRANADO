# Layout Overview

A Layout defines the number of visual elements on a Screen and their respective positions. A single
area in a Layout is called a Panel. A complete Layout has a tree structure in which you can divide
every Panel into Sub-Panels with a particular type definition. A Panel displays the content of one or
several Views in a specific location of the Screen (except for the View of type Header that you can
only connect with Layout Root Panel Properties). It can have a specific height or width, or it can be
auto-sized. A View is linked to a Panel. If no View is linked, there is an empty View by default.

     It is possible to link a View directly on the Panel. Such a View will be displayed in all Screens
     using this Panel.

 Embedded Version of a Layout

  The embedded version of a Layout is a cached definition of a Layout that is linked to Screens. It is
  created when:

              The Screen with a linked Layout changes its status to Active.
              When the Screen status changes to Active, no modifications can be made, so the linked
              Layout changes are blocked. That is why the embedded version of the Layout is created
              and used by this Screen. The Screen uses the reference that will be kept even if the
              Layout is modified or deleted.

              The user decides that the Layout changes should not be applied to the Screen that uses
              the Layout (see Layout Conversions).
              The user duplicates the Project that contains a Screen with a linked Layout. In the
              duplicated Project, there is a choice to:

                   Use the embedded version of a Layout.

                      Relink the Layout to its default revision (see Layout Conversions).
           The user duplicates the cancelled Screen with a linked Layout to a new revision or a new
           entity.
           The user modifies the existing or sets a different default revision of the Layout already
           used on the destination server during deployment (see Layout Deployment Rules ).

For more information on embedded Layouts, refer to the Process Builder Projects Guide.
