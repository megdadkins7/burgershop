## things we're going to use

- react
- datefns
- prettier
- styled-components

## Setup steps

1. get rid of CRA manifest (e.g. `assets folder`)
2. Index.js make sure you update the `<title>` and `description`
3. set up prettier config (google the most basic prettier set on their site)

- `npm install prettier` -> create a `.prettierrc` -> put the config settings in there
- vscode settings, turn on prettier on save (format on save)

4. install UI toolkit (tbd ???)
5. install react router (diff screens)

## Needs

- login screen

  - app block (gate app loadign until login is good)
  - username / password -> api request
  - (valid check), if valid proceed, otherwise error

- dashboard (everyone)

  - schedule -> api request + datefns
    - api -> list of staff
    - api -> burger of the day

- user management

  - (valid) admin -> api requst
  - list of users + user tools
  - (locked) edit own settings
  - (locked) bob

- schedule

  - list of members
  - show the week
  - select burger-of-day
    - get list of burgers (api request)
    - set burger (api request)

- burger of the day
  - create /save new burger + api request
  - edit and delete + api request
  - (locked) burgerAdmin access

## steps

- figure out what the data will look like

* create skeleton UI's to prepare for the data

- actually request the data, and start feeding it to the UIs
- do one screen at a time
  - start with dashboard
  - then try the burger of the day
  - connect the burger of the day to dashboard
  - create a fake user login component
  - hook up user permission things to things that need them (assume admin)
