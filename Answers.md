1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    --> anything that returns an ENTIERLY NEW object / array. You are not going into what is there and mutating a piece. You are TAKING the whole CURRENT state as an outline for your NEW entity...changing what you would like to change on that new entity... then entering that WHOLE NEW entity into the place of the orrigional object / array. 
    --> --> Object.assign() = not used as much now that the spread operator is gaining usage
        --> we now use the spread operator to extend or 'spread' the properties from the orrigional object      onto the new object being created
    --> --> Array.concat()
    --> --> Array.map()
    --> --> Array.Filter()

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    --> the Store = one source of truth because through the incorporation of various actions and reducers it has obtain all the infinity stones. Thanos's use of an onSnap() was the first cinematic example of update the state of the world's population.
        ^:)

    --> Actions
        1. Object
        2. Created by action creator functions 
        3. <= 2 key value pairs
            type:       _____       *** MANDATORY
            payload:    _____       *** optional  
    --> Reducers
        1. Receives Action(s)
        2. Initiates some immutable change on the current state
        3. Returns an ENTIERLY NEW state object to the store 
    --> Store
        1. allows data to be stored 'externally' in relation to the components that use the data
            -this allows SAME data that needs to be use ACROSS the app to be fetched from the SAME central repo INSTEAD of separate states at the component level needing appropriate prop drilling throughout the whole app. 

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
    -Large Apps
        -Component state = MISERABLE
        -Application State - by using the principle of a single source of truth it allows for easier development / debugging as the application grows in complexity

    -Simple Apps
        -Component state would work -- but so would redux 
            -There is a trade off in terms of setuptime for component vs application state management. 

4.  What is middleware?
    -a FUNCTION (parameter = store)
        --> Returns a FUNCTION (parameter = next() )                        next() = *Magic* of middleware
            -->  Returns a FUNCTION (parameter = dispatched action)

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    -redux-thunk is a middleware that allows us to run asynchronys functions inside of action creators. Out action creators change behavior because they now have access to .then() which can dispatch an action when an action is completed. 

6.  Which `react-redux` method links up our `components` with our `redux store`?
    -the connect meth od links a component to the redux store