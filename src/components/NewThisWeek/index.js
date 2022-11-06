import './index.css'
const NewThisWeek = props => {
  const {newThisWeekList} = props
  const {img, category} = newThisWeekList
  return (
    <li className="New-this-week-cards">
      <div className="card">
        <img src={img} alt={category} className="card-img" />
        <p className="category-heading">category</p>
        <h1 className="category-headings">{category}</h1>
        <button type="button" className="show-all-button">
          Show all
        </button>
      </div>
    </li>
  )
}
export default NewThisWeek
