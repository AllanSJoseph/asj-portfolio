# Allan's Portfolio Website

Portfolio Website to showcase my skills and information.
Built on React + Vite and deployed on Vercel. Dedicated Pages to showcase Projects.
Uses Firebase as backend to save and manage messages from Contact Me section.

<ul>
    <li>React + Vite Frontend</li>
    <li>Basic CSS Styling, Responsive on Mobile (AI Enhanced)</li>
    <li>Black and White theme with toggle option</li>
    <li>Firebase Backend for Storing and Tracking Messages sent through Contact Me section</li>
    <li>Dedicated Project Showcase Page with Video demo and Image Carousel</li>
    <li><a href="https://imagekit.io">ImageKit.io</a> for Image Hosting</li>
    <li>Vercel for Deployment</li>
</ul>

## Tech Stack

<table align="center">
    <tr>
        <td align="center"><img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" /> <p align="center">+</p> <img src="https://skillicons.dev/icons?i=vite" width="48" height="48" alt="React" /></td>
        <td align="center">React + Vite <br> (Frontend)</td>
    </tr>
    <tr>
        <td align="center"><img src="https://skillicons.dev/icons?i=firebase" width="48" height="48" alt="React" /></td>
        <td align="center">Firebase <br> (Backend, DB)</td>
    </tr>
    <tr>
        <td align="center"><img src="https://skillicons.dev/icons?i=vercel" width="48" height="48" alt="React" /></td>
        <td align="center">Vercel <br> (Deployment)</td>
    </tr>

</table>



## Things to keep in mind if you are forking this project
If you are forking my project, keep in mind the below items.

### Dependencies

#### React-Router DOM
The project uses ```react-router-dom``` for routing and navigation on pages. Install this dependency by below command. 


```sh 
npm install react-router-dom
```


#### Firebase
The project is configured with a firebase project as backend, if you are planning to use firebase, install it or you can remove the firebase based items from ```ContactMe.jsx``` on ```component folder``` and ```firebase.js``` from ```config folder```.

If you are using firebase, create your own firebase project, refer documentation, make a firestore database with the fields:
```name (string), email (string), message (string), timestamp (timestamp)```

Copy the environment variables from the last section and populate them on .env.local folder if running locally.

```sh 
npm install firebase
```

#### Imagekit.io
The site uses imagekit for image hosting. The site uses ImageKit SDK for fetching the hosted images, make sure to install the dependency and populate environment variables on last section for usage.

```sh
npm install imagekitio-react
```


### Environment Variables

This project uses environment variables for **Firebase** and **image_hosting** which have api keys, I cannot expose my api keys, but if you are using them be sure to read their documentation and fill the environment variables as below. 

On local run copy the below environment variables with your filled keys with file name .env.local

```env

VITE_FIREBASE_API_KEY= your_api_key
VITE_FIREBASE_AUTH_DOMAIN= your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID= your_project_id
VITE_FIREBASE_STORAGE_BUCKET= your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID= your_sender_id
VITE_FIREBASE_APP_ID= your_app_id

VITE_APP_IMAGE_KIT_URL_ENDPOINT = your_imagekit_url_endpoint
VITE_APP_IMAGE_KIT_PUBLIC_KEY = your_imagekit_public_key

VITE_APP_G_DRIVE_RESUME_LINK = your_resume_link

 ```


 ### JSON Files
 For ease of updating in future, content on Skill and Project Section are stored in json static files, you can access the files on ```data``` folder in ```src``` folder.  Updating the files accordingly, you can dynamically edit the details without touching the codebase. I am working the same for education and experience sections, once completed I will push that too.