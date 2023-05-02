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
