import './index.css'
const PlanATrip = props => {
  const {list} = props
  const {imgUrl, rating, cournty, amount, describe} = list
  return (
    <li className="card">
      <div>
        <img src={imgUrl} alt={cournty} className="plan-a-trip-img" />
      </div>
      <div className="trip-details">
        <p>
          *{rating}.{cournty}
        </p>
        <p>{describe}</p>
        <p>{amount}</p>
      </div>
    </li>
  )
}
export default PlanATrip
