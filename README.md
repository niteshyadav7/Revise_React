# Revise_React

revising react

# igniting our app

# DOUBT POINT::USEREDUCER

- IN CASE OF PAYLOAD

```
### this is for input

onChange={(e)=>{
    const value=parseInt(e.target.value);
    dispatch({
        type:"ADDVALUE",
        payload:value,
    })
}}

####
Cart:
addItems: (state, action) => {
        console.log("clicked!");
      state.items.push(action.payload);
    },

### this is for addValue
if(action.type==='ADDVALUE){
    return{
        ...state,
        value:action.payload,
    }
}

```

### DOUBT in CONTEXT

```
### how to start
step1: create context
step2:pass through provider value={{xx,sfdr}}
step3:consumes the data
```

### Custom Hooks

```
###     JUST LIKE FUNCTION
RETURN VALUE
```

### DOUBT RTK

```
### <Provider store={store}>...</Provider>
```
