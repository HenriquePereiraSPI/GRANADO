# Compare DFCs or Projects

The Compare option highlights the differences between two DFCs or two revisions of the same
project.

To Compare Two Revisions of the Project

For details on comparing the projects, see Compare and Merge Projects.

To Compare Two DFCs

       1. In Entity Manager, Project Entity Manager, or Project Compare select two DFCs.
       2. Open the DFC Compare tab:

                      Right-click the DFCs and choose Compare.
                      Choose Compare from the Entity menu.
                      Click (Compare) from the toolbar.

DFC Compare Tab

The functionality compares the following elements of the same name:

           Steps (layout type, routing outputs).
           HTML Layout (HTML, CSS, and JavaScript tabs).
           SQL and Oracle queries (case is ignored).
           User formulas.
           Function inputs and outputs (types, sources, values, and other properties).
           Business Control configurations (if they are stored in XML).

  Compared elements are displayed in tree views with differences highlighted:
              Nodes with changes detected in child nodes are marked in green.
              Nodes that differ between two DFCs are marked in orange.
              Nodes that are omitted are marked in red. For example, steps added to the newer
              revision, or inputs with different names.
