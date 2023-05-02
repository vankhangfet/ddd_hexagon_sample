# How to implement Hexagon Archiecture and apply DDD

Quick note: 

This is sample to implment Hexagon architecture and apply DDD.

![Hexagon](/hexagonal-architecture_img.png)

[**Domain Objects**]
- Domain objects can contain both state and behavior. 
- Domain objects don’t have any outward dependency. They’re pure code (Java, C#,etc.) and provide an API for use cases to operate on them.

[**Use Cases**]
- As abstract descriptions of what users are doing with software.
- Similar to the domain objects, a use case class has no dependency on outward components.

[**Input and Output Ports**]
- An input port is a simple interface that can be called by outward components and that is implemented by a use case.
- An output port is again a simple interface that can be called by our use cases if they need something from the outside (database access, for instance).

[**Adapters**]
- Input adapters or “driving” adapters call the input ports to get something done. An input adapter could be a web interface, for instance. When a user clicks a button in a browser, the web adapter calls a certain input port to call the corresponding use case.

- Output adapters or “driven” adapters are called by our use cases and might, for instance, provide data from a database. An output adapter implements a set of output port interfaces.
