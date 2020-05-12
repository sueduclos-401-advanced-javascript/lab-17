# LAB 17 - Class 17

## Project Name - Code Academy Parcel Service

Code 401 Lab 17 - TCP Server

Create an event driven application that “distributes” logging commands to separate modules. Application will be called *CAPS*, the Code Academy Parcel Service. CAPS will simulate a delivery service where sellers will ship products and be notified when customer receives those products.

Your application must be able to support multiple users on different machines communicating with one another. Because of this, we’re going to be making three distinct applications, and have them all communicate over the internet. There are three distinct applications running and communicating with one another via a TCP server. These applications will together simulate the order and delivery of an item, from seller to customer. The seller (or vendor) should alert the system that a package needs to be delivered, and a delivery driver should alert the system when a package is picked up for delivery. The driver should also alert the system when the package has been delivered. Thus, you should have three major events being communicated:

- `pickup` - Tells the system when a new order needs to be delivered
- `in-transit` - Tells the system which order is in the process of being delivered
- `delivered` - Tells the system when the order has been delivered

Your application should automatically generate random orders every 5 seconds. These random orders should have a store, id, customer, and address as the order data.

### Author: Sue Duclos

### Links and Resources

- [submission PR]()
- [ci/cd]() 

### Setup

- `npm install`

#### How to initialize/run your application

- `npm init`

#### Tests

- `npm test`

#### UML

- [UML] ()
