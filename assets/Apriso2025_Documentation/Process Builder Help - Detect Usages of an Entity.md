# Detect Usages of an Entity

Detect the Usages of an Entity

The Show Usages option works only for the following entities:

           Processes
           Operations
           DFCs
           Screens
           Layouts
           Views
           Action scripts

To Open the Usages Pop-Up Window

           Select an entity from the Entity Manager, Entity Explorer or Project Entity Manager and
           use one of the following options:

                      Select the Show Usages option from the Main Menu.
                      Click (Show Usages) on the Toolbar.
           Right-click an entity in the Entity Manager, Entity Explorer (available only for action script
           revisions), or Project Entity Manager, and choose Show Usages.

  Results of the usages detection are available on the following tabs:

              Process Builder Entities – displays operations, processes, DFCs, screens, layouts, and
              views. Entities from other revisions of the same project or referenced projects are also
              visible. For example, when two screens that are located in different (but referenced)
              projects use the same layout, both screens are displayed.
              WIP Orders – displays WIP orders .
              Other Entities – displays count procedures, determinations, EMRs, FlexParts, GPM
              projects (GPM projects or PB projects in which the checked entity revision is the default),
              job actions, KPI terms, maintenance procedures, maintenance template procedures, MI
              actions, recipes, and UOM codes.
              Project Revisions – displays project revisions in which the entity is located.

  Link Types

  A link between an entity that is used by another entity can be:

              Dynamic – no specific revision links the entities – the default revision is determined in
              runtime. For example, if there are several layout revisions, and the Show Usages option
              used on any of them indicates a dynamic link to a screen, the (none - revision
              determined at runtime) option was selected on the screen properties.

Static – the entities are linked by a specific revision that is also used in runtime. For
example, if there are several layout revisions, and the Show Usages option used on a
specific layout revision indicates a static link to a screen, this revision was selected on the
screen properties. The window will not list the screen if you detect usage on the remaining
layout revisions.

Usages Tabs Availability

Entity Type        Process Builder Entities WIP Orders  Other Entities Project Revisions

Process            Tab            Tab                   Tab        Tab
Operation
DFC
Screen, view,
layout
Action script

Copying Usages Details

Options            Copies all usages of an entity with a type, name, revision, status, and link
                   type (dynamic or static).
Copy usages to
clipboard

                        The default revision of an action script that is in the prototype,
                        development in progress or active status is considered as the static link
                        type.

Copy URI right-click Copies the URI (Uniform Resource Identifier). Available only for the Other

menu option        Entities tab.
