# NextJS-React-Demo

## How to use this Repo:-

- Download
- npm install
- npm run dev

The app will be hosted. See it and test it first.

## Purpose of this repo and How to Learn/Explore Step by Step:-

- Open the app folder
- Have a look into the layout.js file
- Have a look into the page.js
- Courses Page: to demonstrate how to use dynamic routing (using nextjs - different and much easier than react)
- ButtonDemo Page: how to perform some computataion at client-side
- ButtonDemo2 Page: how to perform some computataion at server-side (server API)
- Data-Fetching and AllDataFetch Pages: how use external API
- ReadLocalJon Page: how to read data from a JSON file kept at server
- FileUploadPage: how to upload a file in browser and get its content (for further processing)
- C-WASM Page: how to use a C/C++ program for performing some computataion at the Client-Side
- Download Page: how to download the result of some computataion as a file in required format 


##  Notes:-

- 'app' is the root directory
- only C-wasm related JS and the WASM files are inside the 'public' dir (not inside app)
- In ButtonDemo2 the button facility has been designed (only the button related facilities) as client component
  - rest of the page is server component
  - the button component calls an server-API which is kept inside the 'route.js' file in 'api' folder
- data-fetching using external API and from local (stored on server) JSON file: necessary JS programs are all inside the 'datafetching' folder
  - these are standalone ordinary JS programs (defininf the necessary functions)
  - not server-APIs
  - not components
  


## How to Setup a New NextJS Project?

npx create-next-app@latest my-app

### Options:-
- Typescript: NO
- ESLint: YES
- Tailwind CSS:  YES
- ‘src/’ directory: NO
- App Router: YES
- Customize default import alias: NO

cd my-app

npm run dev




## Documentation:-
https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app


