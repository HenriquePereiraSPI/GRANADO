# Detect Dynamic Revision of Entity

Detect the Dynamic Revision of an Entity

Algorithm for Detecting the Dynamic Revision of an Entity

       1. Algorithm searches by specific Entity name for Active or Prototype statuses only.

       2. The list created based on the condition above is limited to a list of Entities with the
           following valid criteria:

                      The Entity EffectiveDate field in the database does not need to be specified, but if
                      it is, it is lower or equal to the CurrentDate value
                      The Entity DiscontinueDate field in the database does not need to be specified,
                      but if it is, it is greater or equal to the CurrentDate value

       3. The content of the list affects the type of action performed:

                      If no such Entity was found, an error is raised
                      If only one Entity was found, it is selected to be executed
                      If there is more than one Entity found and one of them is specified as the Default
                      Revision, then this is selected to be executed
                      If there is more than one Entity found and none of them are specified as the
                      Default Revision, then an error is raised
