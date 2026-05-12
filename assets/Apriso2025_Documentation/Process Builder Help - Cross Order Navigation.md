# Cross Order Navigation

Cross-Order Navigation

Next Order Relation

The next order relation enables moving quantities from a parent order to a child order with a
properly defined level. The diagram illustrates quantities moving out of Operation 0030 and
passing to a child order to a defined level of (1). There must be an existing child order that can
receive quantities from a parent order from level (1).

Assume a parent work order of ABC and a child work order of XYZ. In this example, the following
movements of quantities would be performed:

Type                        Source  Opr      Type             Target  Opr
Parent             Order No         0010     Parent  Order No         0030
Parent             ABC              0020     Parent  ABC              0030
Parent             ABC              0030     Child   ABC              Level 1
Child              ABC              Level 1  Parent  XYZ              0040
                   XYZ                               ABC

When defining the next order relation, the following window appears:

Previous Order Relation

The previous order relation enables moving quantities from an existing parent order of a defined
level to a child order. The diagram illustrates quantities moving into Operation 0010 from a parent
order-defined level of (1). There must be an existing parent order that can move quantities out of
level (1).

Assume a parent work order of ABC and a child work order of XYZ. In this example, the following
movements of quantities would be performed:

Type                        Source  Opr      Type             Target      Opr
Parent             Order No         Level 1  Child   Order No             0010
Child              ABC              0010     Child   XYZ                  0020
Child              XYZ              0020     Parent  XYZ                  Level 1
                   XYZ                               ABC

When defining the previous order relation, the following window appears:
