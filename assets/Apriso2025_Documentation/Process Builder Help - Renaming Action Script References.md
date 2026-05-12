# Renaming Action Script References

Rename Action Script References

If the names of any Action Script Functions have been changed, you can update their references in
Screen Flow entities using the Rename Action Script References wizard:

       1. Select Tools > Rename Action Script References from the Main Menu to launch the
           wizard.

                   You will also be asked if you want to launch the wizard when saving changes in an
                   Action Script if any of its functions have been renamed.

          2. Select Automatically detect instances of invalid usage in Screen Flow entities if you
              want the wizard to detect any invalid references or Manually provide Action Script
              Functions to update if you prefer to choose the Action Script Functions to be refactored
              yourself. Click Next.

                         If you have selected the first option, the wizard will detect all Action Script
                         Functions whose names have been changed and list their old names in the next
                         screen
                         If you have selected the second option, the list in the next screen will be empty
          3. Specify which Action Script Functions need to have their references updated. If the list has
              been populated automatically, you need only select the new function name(s) from the
              drop-down list in the right column. Otherwise, click Add to insert a new row. Select the old
              name of an Action Script Function from the drop-down list in the column on the left and

select its new name from the drop-down list in the right column. You can also delete items
from the list by clicking Remove.

Once you have provided all Action Script Functions to be updated, click Next.

          4. In the next screen, the wizard will list all entities where Action Script Function references
              need to be updated, as well as any entities where this will not be possible (see the note
              below). Click Finish to complete the process.
                Action Script Function references can only be updated in Screens and Views which are
                not Active or Cancelled.
