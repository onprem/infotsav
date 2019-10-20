# Infotsav
Website for Infotsav '19, IIIT Gwalior

Infotsav is a platform which gives a competitive and healthy atmosphere to compete, develop and nourish the creativity and innovation.The Annual Technical Festival of IIIT Gwalior.

This website is built with the help of React and Node.js

### Frontend
- Create-React-App was used for boilerplate. `src/App.js` contains all the routes and major component imports.
- Lazy imports and Suspend are used for code splitting.
- All data is fetched from API on first mount. A global state is then populated and passed down as props.
- React router is used to mount appropriate component according to current url/route.

#### Components and Views
- Home
	- Landing page of the website.
- Login
	- Allows a user to login, or redirect to `/profile` if already logged in.
- Register
	- Allows a user to register with a valid email ID.
- Verify
	- Verify the email after registration.
- About
	- About page for the Fest.
- Team
	- Page with information about the team behind Infotsav.
- Sponsors
	- Information about all our Sponsors.
- Profile
	- Users can check which events they have registered.
	- Users can pay the registration fee for thier team.
- Nav
	- Site wide navigation menu
- ForgotPass
	- Reset password page.
- Contact
	- Contact us page containing a form to contact the team.
- Events
	- Component with details of all categories of events we had.
- Explore
	- This component contains details for individual event.
	- The data of events can be found at `assets/events.json`
- Cultural
	- Info about Cultural events during the fest.
- CampusAmbassador
	- Users can apply to be campus ambassador of our fest here.
- Admin
	- Admin panel with statistics about users
	- Admins can check status of Pending payments

### Backend

Express.js API powered by Node.js

#### Authentication

We use JWT (JSON web token) for authentication. When a user logs in to the website, a JWT is created using the secret key and sent as a cookie to the client.

We use a custom middleware `withAuth` to check if the request contains a cookie with valid JWT.

#### Controllers

- register
	- handles user registration.
- verify
	- handles verification of user email.
- signin
	- handles user login.
- contact
	- handles Contact Us form submission.
- resetPass
	- sends email for reset password requests.
	- verifies and resets password for valid requests.
- eventReg
	- handles registration in a specific event by a user.
- easter
	- handles scoring and redeemption for easter eggs in the website.
- logout
	- logs out the user by clearing cookies.
- profilex
	- returns all data about the user
	- this endpoint is called in frontend at the very start to fetch data.
- payments (admin only)
	- get details on all payments.
- users (admin only)
	- get details of all users.

### Installation

- Clone the repo using git and cd into it `git clone https://github.com/prmsrswt/infotsav.git && cd infotsav` 
- Install dependencies for frontend `npm install` or if you prefer yarn `yarn install`
- For backend you will need a running MySQL server.
- Create a database in your MySQL server and import `infotsav.sql` to create the necessary tables.
- Copy the file `.env.example` to `.env` in API folder `cp API/.env.example API/.env`
- Edit the values of `API/.env` with details of your MySQL server
	- DB_HOST is the IP or domain name of your MySQL server, use `localhost` or `127.0.0.1` for local server
	- DB_NAME is the name of Database we are going to use.
	- DB_USER is the username of MySQL user, the user must have privilege on given Database.
	- DB_PASS is the password for above user.
- Now cd into `API` and install dependencies, `cd API && npm install`

### Usage
- start the frontend development server using `npm start`
- start the backend using `cd API` then `npm start`

### Contributers
- Manish Mavi [@mavi05](https://github.com/mavi05)
- Ojaswa Sharma [@ojaswa1942](https://github.com/ojaswa1942)
- Prem Kumar [@prmsrswt](https://github.com/prmsrswt)
- Rohit Kunji [@ji-kun](https://github.com/ji-kun)
