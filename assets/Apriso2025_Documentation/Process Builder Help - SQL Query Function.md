# SQL Query Function

The SQL Query Function enables executing a user-defined query against the database and
returning results. Each column of the query is assigned to a separate Function Output.

To Add the SQL Query Function

       1. Drag the SQL Query Function from the Toolbox to the Function Navigation diagram, or
           double-click the SQL Query icon in the Toolbox.

       2. Define the query in the SQL Query Editor. The Inputs and Outputs are automatically added
           in the Editor based on the query.

       3. Choose the error reporting options for the Function. Optionally, choose the database alias
           to be used in runtime.

Field              Description
Database
                   The list of available database aliases defined in the "DataServices" section
SQL Query          of the Central Configuration file (for details see Central Configuration
field              Documentation ). You can choose the database against which the query
                   will be executed.

                   The query defined for the current database type.

       No rows are If the query returns no rows and this check box is selected, the Output
       returned IsError returns True and the Output ErrorCode returns a proper code

                         (NO_ROWS).

       Multiple    If the query returns multiple rows and this check box is selected, the Output
       rows are    IsError returns True and the Output ErrorCode returns a proper code
       returned    (MULTIPLE_ROWS).

       Scalar      The user can configure the Function to always return scalar values (one row
       output      output). When this option is used, the two check boxes above are
                   automatically selected. When the option of scalar values is selected, the
                   system changes the Function Outputs types to non-list in both the
                   properties of the Function and the SQL Query Editor.

SQL Query Editor

In the SQL Query Editor, you can write, verify, and execute SQL queries.

Field              Description

MS SQL / Oracle You can write sql_query_rich_editordifferent queries for MS SQL and Oracle

tab                databases.

Test query on drop- The database connection alias to be used for testing the query. You can add

down list          other databases to the list using the keys located in the "DataServices"

                   section of the Central Configuration file (for more information and predefined

                   aliases, refer to the Central Configuration Documentation ).

Use a query from If this box is checked, the system will use the query defined for the other

the other database database type (in the other tab). The box is checked by default in

type check box     the Oracle tab.

Open button        Opens the query previously saved by the user.

Save as button     Saves the query written by the user.

Verify button      Checks if the query is valid and can be executed. The keyboard shortcut
                   is CTRL+F5 .

   Execute button  Executes the query. The keyboard shortcut is F5 .
   Break button
                   Cancels the pending execution of the query. The keyboard shortcut
   Query body      is ALT+PAUSE/BREAK .

                   This is where you can write your query. Elements of the query syntax will be
                   highlighted. Standard Windows functions can be used, such as Copy, Paste,
                   Cut, Delete, Select All, and Undo from both the right-click menu and the
                   keyboard. It is also possible to find expressions in the formula using
                   the CTRL+F Keyboard Shortcut. The following rules and restrictions apply:

                              Only retrieving (filtering) data statements (e.g., SELECT) can be used
                              Input names can be used in the query in two ways: by preceding the
                              Input name with the "@" character (for variable binding), or by
                              placing it in braces "{ }" (for text concatenating). Be careful when
                              building a query with the use of {[your parameter]}. Remember that
                              queries are executed directly on the database, and incorrect use of
                              this functionality can result in accessing unwanted Apriso tables
                              Multi-line comments (/*...*/) are not supported and can cause errors
                              in runtime. It is highly recommended to remove them or replace
                              them with line comments (--)

                   Queries that return too many records or too long string in a cell might not
                   work correctly in the SQL Query Editor. This is a third-party issue.

Inputs/Outputs tab The list of Inputs and Outputs used in the SQL Query Function generated
                             automatically based on the query. You can check the box next to individual
                             column names to add them as Outputs in the Function.

Results tab        The result of the query.

Messages tab       The list of validation and error messages.

SQL Query Function Outputs

Input/Output Description

Count        Contains the number of rows returned by the query.

IsError      Returns True if the error reporting for the Function is turned on and the error
             condition is fulfilled. This Output can be used directly as an Input to the Show
             Message Function.

ErrorCode Upon an error, returns one of the following values depending on the query's result:

                   NO_ROWS
                   MULTIPLE_ROWS

             This Output can be used directly as an Input to the Show Message Function.
