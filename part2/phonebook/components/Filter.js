const Filter = ({filterKey, handler}) => (
    <div>
        filter shown with <input 
        value={filterKey}
        onChange={handler}
        />
    </div>
)

export default Filter