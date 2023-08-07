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

### this is for addValue
if(action.type==='ADDVALUE){
    return{
        ...state,
        value:action.payload,
    }
}

```
