# Mapersive
## Technical Assessment Overview
## Tech

InsuranceApp uses a number of open source projects to work properly:
- AngularJS
- Java Spring Boot
- SQL
- Version Control: Git, GitHub
## Installation

InsuranceApp requires Node.js v16+, AngularJs v16+ and Java v11+ to run .
Install the dependencies and start the server.
```sh
cd InsuranceApp
npm install -g @angular/cli
ng serve
```
## Development
This project involves creating a web application that manages insurance data. The application is divided into two main parts: the backend, built using Spring Boot with Java, and the frontend, built using Angular. The goal is to establish a functional system where insurance data can be stored, retrieved, and presented in both tabular and card formats.
### frontend
**General functionality:**
- Angular Application: Develop an Angular application that consists of two main pages. The design and layout of these pages are open-ended and can showcase your design skills.
- Table Page: displays the insurance data in a tabular format. Implement sorting functionality on selected key information columns. Users should be able to easily view and analyze the data within the table.
- Card Page: the insurance data is presented using cards.
- Data Fetching: Utilize the RESTful APIs created in the backend with SpringBoot to fetch the insurance data from the server. The frontend communicate with the backend to retrieve and display the relevant data.

**The general page breakdown looks like this:**

- Home page (URL: /#/ )
  - Technical Assessment Invitation and Guidelines
- Table page (URL: /#/table)
  - Display an interactive table showcasing various customer-specific filtering implementations and options for sorting based on either date or premium status. The table is designed to be responsive, ensuring a seamless user experience across different devices.
- Card Page (URL: /#/card)
    - Presenting data on responsive cards that offer multiple options such as visibility toggles, reporting functionalities, and data updates. These cards also provide the convenient feature of searching data by customer, enhancing user accessibility. The card design ensures optimal responsiveness across various devices for an enhanced user experience.
### backend
**General functionality:**
- Database Setup: Choose a relational SQL database and configure it to store the insurance data. This involves defining the necessary tables and relationships to accommodate the provided JSON data format.
- Data Import: Develop a function within the Spring Boot application that reads the provided JSON data and populates the database with this data when the application starts.
- API Design: Create a set of RESTful APIs that enable CRUD operations on the insurance data. These APIs will allow the frontend to interact with the backend and perform various actions on the data.cla

 **classes and file structure**
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/class.png?raw=true)

### Challenges

**Backend (Spring Boot with Java):**

- Data Import from JSON: Reading and importing data from a JSON file into a relational database can be a challenge, as you need to ensure the data is transformed and mapped correctly to fit the database schema.

- Pagination: Implementing pagination for fetching data from the backend can be complex. You need to design a system that efficiently retrieves and presents data in smaller, manageable chunks to optimize performance.

- Database Structure: Designing a database structure that accommodates the provided JSON data format while ensuring proper relationships and data integrity can be intricate and requires careful consideration.

- API Design: Designing RESTful APIs that efficiently handle CRUD operations and provide meaningful responses requires thoughtful consideration of API endpoints, request/response structures, and error handling.

**Frontend (Angular)**:

- Data Presentation - Table Format: Creating a table to display insurance data with sorting capabilities can be challenging due to the complexity of handling user interactions, sorting algorithms, and responsive design to ensure a seamless user experience.
- Responsive Design: Ensuring the table and card layouts are responsive across various devices and screen sizes requires careful styling and testing to maintain a consistent and user-friendly presentation.
- Data Fetching and Integration: Fetching data from the backend APIs and integrating it seamlessly into the frontend components .
- Card Layout and Performance: Implementing a card-based presentation of insurance data.

### Implementation
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/home.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/home%20mobile.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/tablebig.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/table%20big2.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/filter%20customer%202.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/filter%20customer.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/table%20mobilee.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/mobile%20version.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/dialog.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/dialog%20mobilee.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/card.png?raw=true)
![](https://github.com/rmerzak/InsuranceApp-SpringBoot-Angular/blob/main/imgs/cardMobilee.png?raw=true)


