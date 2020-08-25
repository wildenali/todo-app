[To Do App Wilden](https://todo-app-wilden.web.app/)

# Membuat aplikasi ToDo
sumber referensi dari https://www.youtube.com/watch?v=VqgTr-nd7Cg

- Firebase
- React
- ToDo App
- Deploy Online
- Database

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# ------------------------------------------------

# Clean The App
Clean the code unuse

# Create Project on Firebase
1. Go to console
2. Create web app project named with todo-app-wilden

# Install Firebase
1. `$ npm install -g firebase-tools`
2. `$ firebase login`

# Install Material UI
1. Install Material UI Core<br/>
`$ npm install @material-ui/core`

# Connecting to Firebase
1. Install firebase
`$ npm i firebase`
2. Buat Cloud Firestore di console projek firebase
3. Buat Collection (Koleksi) baru di cloud firestore

# Install Material-UI Icons
`$ npm i @material-ui/icons`

# Deploy to Firebase Hosting
1. `$ firebase login`
2. `$ npm run build`
3. `$ firebase init`
4. Are you ready to procees? Jawab Y
5. Pilih Hosting: Configure and deploy Firebase Hosting sites
6. What do you want to use as your public directory? (awalnya public ganti jadi build)
7. Configure as a single-page app (rewrite all urls to /index.html)? (y/N) , jawab YES aja
8. Overwrite index.html? jawab No, karena mau pake index.html yg di build
9. `$ firebase deploy`

10. Cara cepat `$ npm run build && firebase deploy`