# coding-test
username: Admin
password: Password

# Folder Structure
```javascript
src
  actions               // business logic per entity
  app                   // app level logic: navigation, global state, etc
    navigators          // app navigators
  components            // common components
  context               // react context containers per entity
  models                // entity models
  res                   // resources manager
    images              // image files
    raw                 // raw files
    R.js                // manager: images, raw files, colors, strings
  screens               // all screens
  util                  // other helpers
```