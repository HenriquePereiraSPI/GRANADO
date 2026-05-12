# Import and Export Literals

Import and Export Literals for Translation

This functionality lets you:

           Export literals from processes, operations, and DFCs to an XML file, which you can
           translate with the DELMIA Apriso Translation Tool.
           Import translated literals back to Process Builder.

To Export Literals for Translation

       1. In Entity Manager or Project Entity Manager, select the required entity.
       2. From the right-click menu or Tools menu, select Export Literals for Translation. A dialog

           window appears:

                   For processes and operations linked to a project, the export option is available only
                   from the Tools menu.

          3. From the lists, select the source and target languages.
          4. Add a comment, if required.
          5. In the case of DFCs, selecting the Export only UI elements check box ensures that only

              the elements that are visible in runtime are exported.
          6. A standard Save As dialog box appears. Choose the location of the XML file and save.
          7. You can open the saved XML file with the DELMIA Apriso Translation Tool.

 To Import Translated Literals from an XML File

          1. From the Tools menu, select Import translated literals. A standard Open dialog window
              appears.

          2. Navigate to the XML file that you want to open, select it and click Open.

  In the case of DFCs, importing translated literals from an XML file automatically selects the Has
  Changes check box in the column of the Entity Manager or Project Entity Manager. To apply the

translations after importing them, you need to regenerate the DFCs. The entities that are ready to
be compiled have the Has Changes check box selected.
