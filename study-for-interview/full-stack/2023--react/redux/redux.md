### redux

global state

used for large amounts of application state

app state updated frequently

immutable updates (copy original)

- action (has type and payload field)
  - action creator (creates and returns an action object)
- reducer
  - receives current state and action object, decides how to update state and returns new state
- store
  - redux application state
- dispatch (store method)
  -  update state by passing in an action object
- selectors
  - functions that extract specific pieces of info from store state value

### flow

dispatch action > store > reducer > new state
