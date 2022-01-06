# BLAH Website Frontend Implementation
<p align="center"><img src="https://raw.githubusercontent.com/BLAH-Bringing-Life-and-Hope/blah-front-end/c20c99d68c008d19faa308d6f14538926ac8fe97/public/img/brand-logo.svg" alt="blah" height="100px"></p>
<a href="https://github.com/BLAH-Bringing-Life-and-Hope/blah-front-end/actions/workflows/ci.yml"><img src="https://github.com/BLAH-Bringing-Life-and-Hope/blah-front-end/actions/workflows/ci.yml/badge.svg" alt="ci"></a>

This is the source code for [blah.world](https://blah.world).

- **Languages** Typescript
- **Technology** ReactJS  (Frontend)
- **Main libraries** [jquery](https://www.npmjs.com/package/jquery), [react-redux](https://www.npmjs.com/package/react-redux), [react-router-dom](https://www.npmjs.com/package/react-router-dom), [react-owl-carousel](https://www.npmjs.com/package/react-owl-carousel)

## Installation
- Install node v14 and yarn (`npm i -g yarn`)
- Clone repo using `git clone https://github.com/BLAH-Bringing-Life-and-Hope/blah-front-end.git`
- Install dependencies using `yarn` 

## Running in Development
- Checkout to dev branch using `git checkout dev`
- Run using `yarn start`

## Folder structure

This project makes use of the [redux-toolkit](https://redux-toolkit.js.org/) starter, and atomic design approach in its development.
having seven high level folders as described by the structure display below;

- The `app` folder holds the hooks and store files
- The `components` holds all reusable components in the application
- The `features` folder holds different redux features e.g slices.
- The `layouts` folder holds the different layout of the BLAH website.
- The `menus` folder holds the menu lists of the application like the navigation menus and its routes.
- The `pages` folder holds all existing pages of the application.
- The `routes` folders holds the routing files, both private routes and exposed routes.


```
src
├── app
│   ├── hooks.ts
│   └── store.ts
├── components
│   ├── Cards
│   │   ├── ActivityCard.tsx
│   │   ├── PostCard.tsx
|   |   └── UserProfileCard.tsx
│   ├── icons
│   │   ├── CopyIcon.tsx
│   │   ├── FaceBookIcon.tsx
|   |   └── ShareIcon.tsx
|   └── icons
├── features
├── layouts
├── menus
├── pages
├── routes
└── index.tsx
```

## CI/CD workflow:

- Checkout to a new branch `feat/<feature>` branch using `git checkout -b feat/<feature>`
- Make changes to files
- Push to origin `feat/<feature>` `git push origin feat/<feature>`
- Creat PR to merge to master.
- merge changes to master.
- Wait while the Automated CI/CD workflow takes effect.
- The current changes would effect on the live site [here](https://blah.world)

