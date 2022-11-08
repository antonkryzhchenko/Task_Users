const Search = (props) => {
    const {onChange} = props;

    return (
        <div>
            <input
            type='text'
            name='search'
            placeholder='Enter name'
            onChange={onChange}
            />
        </div>
    )
}
export default Search;