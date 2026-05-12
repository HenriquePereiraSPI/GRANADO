# Header View Type

View Runtime

Functional Overview

The Header does not need any DFC of the View type or any Business Controls.

Header Configuration

       1. Duplicate a PortalHeaderTemplate and then link it to a Layout or Screen (via a copy and
           duplicate action). Use Screen: General Tab or Layout: General Tab.

2. The following configuration options are available by right-clicking and accessing the
   context menu or using the Properties pane options:

              Enabling/disabling default Buttons – this can be done by enabling/disabling their
              Actions

                         Adding new custom Actions – this can be done by adding Actions on the View

                         Hiding specific parts of the Header (breadcrumbs, the clock, the search field, and
                         user information) – to do this, use the JSON code on the Advanced Tab of the
                         View Properties pane

                         Adding an Additional Information – this can be done by linking the Header View
                         DFC. Use View: General Tab.

                         Changing the position of a specific part of the Header by modifying the JSON
                         code.

                         The result can be the following:
