# UniTraffic - Campus Crowd Monitoring System

## Table of Contents
- Introduction
- Use Case Scenarios
- Data Collection
- Technologies Used
- Conclusion

## Introduction
UniTraffic is an IoT-based project developed by our team to monitor the density of people in university campuses. The primary goal of this project is to simplify student movement through a map that visually represents the population density of campus spaces. Additionally, it aims to reduce carbon footprint by conserving energy resources. By gathering information about student movements, we can regulate lighting and turn off devices not in use, contributing to energy savings.

## Use Case Scenarios
## A. Route Finding
Students can easily and efficiently find their way to various campus locations such as classes, seminars, or lectures using the mapped representation. They can also find the quickest and least crowded routes to these destinations using an algorithm to find the shortest path. The selected route can be dynamically adjusted based on real-time data on crowd density.

## B. Energy Conservation
Data on the number of people in campus buildings will be used to control electrical devices. For instance, if a room is unoccupied, the system can check the status of electrical appliances such as lights, computers, air conditioners, or projectors and turn them off. This action will also train an artificial intelligence system to alert the school administration about critical areas where energy can be saved without using our solution.

## C. Administrative Purposes
UniTraffic can be a useful tool for school administrators in planning classes and lectures. Historical data stored in the database can highlight areas with the highest student traffic over past years, allowing for better scheduling of classes to avoid overcrowding. This scheduling integration can improve campus life for both students and teachers.

## D. Additional Purposes
While our project primarily focuses on tracking student movement, it can be expanded to include additional functionalities. For example, security features could be implemented using camera systems to monitor specific rooms accessible only to authorized personnel. These cameras could capture images, notify the administration of events, and prevent theft or damage to property.

## Data Collection
Population density data on campus spaces will be collected using a camera system at regular intervals. The collected data will be processed using artificial intelligence to evaluate the number of people in the images. After processing, the information will be sent to a remote server for further analysis. Access to the database will be provided through a simple and interactive web interface and a mobile application displaying the university map with detailed floor views for students. Administrators will have access to analytical data in the form of graphs and tables generated from current and historical data.

## Technologies Used
- Python
- Pandas
- Typescript
- JavaScript
- Postgres Database
- Docker for deployment
- AI for student count detection

## Conclusion
UniTraffic is inspired by the rapid development of artificial intelligence and its integration with IoT technologies. Leveraging existing university technologies, UniTraffic aims to advance the integration of these technologies into everyday life. We believe that our project has the potential to improve the lives of students, professors, and other university staff by enhancing their experience on campus.
