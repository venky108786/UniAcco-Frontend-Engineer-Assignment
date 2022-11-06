import './index.css'
const ProfessionFilters = props => {
  const {professionNames} = props
  const {profession} = professionNames
  return (
    <li>
      <button type="button" className="Pfilter-button">
        {profession}
      </button>
    </li>
  )
}
export default ProfessionFilters
