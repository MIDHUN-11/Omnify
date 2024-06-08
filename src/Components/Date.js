const Date=()=>{
        return(
            <div>
            <form>
                <label>Show orders for</label>
                <select>
                    <option>All</option>
                    <option>Custom</option>
                    <option>Last 30 days</option>
                    <option>This month</option>
                    <option>Last month</option>
                    <option>This quarter</option>
                    <option>2 quarter ago</option>
                    <option>This year</option>
                    <option>Last year</option>
                </select>
                <label>From</label>
                <input type="Date"></input>
                <label>To</label>
                <input type="Date"></input>
            </form>
            
        </div>
        )
}
export default Date;