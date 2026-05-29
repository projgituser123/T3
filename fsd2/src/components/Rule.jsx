function rule(){
    let clg_name = "ljiet"

    return(
        <>
            <h1>{clg_name}</h1>
            <h1>"{clg_name}"</h1>
            <h1>{"{clg_name}"}</h1>
            <h1>{"clg_name"}</h1>
            <h1>{clg_name + "test123"}</h1>
            <h1>{clg_name.toUpperCase()}</h1>
            <h1>{5+5}</h1>
            <h1>{[1,2,3,4,5,6]}</h1>
            <h1>{[1,2,3,4,5,6].join(",")}</h1>
        </>
    )
}
export default rule