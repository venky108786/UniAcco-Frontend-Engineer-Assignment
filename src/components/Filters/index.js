import './index.css'
const Filters = props => {
  const {filterList} = props
  const {filterName} = filterList
  return (
    <li>
      <button type="button" className="filter-button">
        {filterName}
      </button>
    </li>
  )
}
export default Filters
