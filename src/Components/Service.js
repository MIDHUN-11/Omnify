const Service = ()=>{
        return(
            <div>
                <form>
                    <input type="radio" id="name" name="search"></input>
                    <label for="name">search by name</label>
                    <input type="radio" id="tag" name="search"></input>
                    <label for="tag">search by tag</label>
                    <input placeholder="search service name"></input>
                </form>
            </div>
        )
}
export default Service;