# Complex Types Technical Architecture

Technical Architecture

DELMIA Apriso handles Complex types in a different way than simple scalar data types (for
example Char, Integer, Decimal).

Passing Data By Reference

When a simple scalar data type is passed between Functions or DFCs, it is passed by a value.
This protects the data from accidental overwriting, because passing by a value means that only a
copy of the data is passed.

A Complex variable is passed directly without creating a copy – only a reference to the value is
passed. Because a Complex type can store many values, this mechanism makes it possible to
manipulate big data objects with the same speed as simple types. But such a mechanism is only
possible when data is shared between variables.

The downside of this approach is that when sharing data there is a risk of unintended data
modification. To reduce such a risk, DELMIA Apriso allows Process Authors to break the
dependency by copying values to a new runtime object.

  Simple scalar data types are passed by a value. Complex and all List types are always passed
  by a reference.

No Direct Conversion From Simple Scalar Types

Because a Complex variable can store any number of values, it is not possible to convert a
Complex type to or from any other data type. That is why a dedicated component has been added
to Process Builder that allows the user to compose a Complex variable from a number of simple
variables and later to decompose it, if needed.

To learn more, refer to Variables Composition And Decomposition.

Nullability

Because Complex types use the "pass by reference" mechanism, it is possible to create a
reference without creating the actual value. When a variable does not reference any particular
value, we can talk of a null value – this can happen both in case of a Complex variable itself and of
the Complex variable properties.

The null value scenario is not common, but in some situations such a possibility can be an asset,
for example when working with database objects.

Trying to access the contents of a null value will result in a runtime exception.

Default value of a Complex data type is always null.
