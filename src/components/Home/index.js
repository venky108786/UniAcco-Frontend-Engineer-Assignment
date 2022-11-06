import {Component} from 'react'
import './index.css'
import Header from '../Header'
import NewThisWeek from '../NewThisWeek'
import Filters from '../Filters'
import ProfessionFilters from '../ProfessionFilters'
import PlanATrip from '../PlanATrip'
const newThisWeekList = [
  {
    id: 1,
    category: 'Most popular around the world',
    img:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667698393/e35bb307-05f4-48a4-bdc5-3b2198bb9451_rbmpo5.webp',
  },
  {
    id: 1,
    category: 'Greate for team building',
    img:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667698379/58819d01-2a71-441d-b3bc-baae0cd64da1_kexvr4.webp',
  },
  {
    id: 1,
    category: 'Fun for the family',
    img:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667698367/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6_vg0pby.webp',
  },
]
const filterCategoryList = [
  {
    id: 1,
    filterName: 'Dates',
  },
  {
    id: 2,
    filterName: 'Group size',
  },
  {
    id: 3,
    filterName: 'More filters',
  },
]
const professionWiseFilters = [
  {id: 1, profession: 'Great for groups'},
  {id: 2, profession: 'Family-friendly'},
  {id: 3, profession: 'Animals'},
  {id: 4, profession: 'Arts & writing'},
  {id: 5, profession: 'Banking'},
  {id: 6, profession: 'Cooking'},
  {id: 7, profession: 'Dancing'},
  {id: 8, profession: 'Drinking'},
  {id: 9, profession: 'Entertainment'},
  {id: 10, profession: 'Fitness'},
  {id: 8, profession: 'Drinking'},
  {id: 11, profession: 'History & culture'},
  {id: 12, profession: 'Magic'},
  {id: 13, profession: 'Music'},
  {id: 14, profession: 'Social impact'},
  {id: 15, profession: 'Wellness'},
  {id: 16, profession: 'olympians & paralympians'},
  {id: 17, profession: 'Designed fo accessibility'},
]
const tripAPlanList = [
  {
    id: 1,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 2,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 3,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 4,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 5,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 6,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 7,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 8,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 9,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 10,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 11,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
  {
    id: 12,
    imgUrl:
      'https://res.cloudinary.com/dvdfoq1j9/image/upload/v1667724331/71f6c8fe-048e-4d71-b89e-bc083245b653_a3jd9n.webp',
    rating: '4',
    cournty: 'UnitedState',
    describe: 'Plan The Perfect New York Vacation',
    amount: 'From₹1500/Person',
  },
]
class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="main-home">
          <h1 className="new-this-week-heading">New this week</h1>
          <ul className="new-this-week-list-container">
            {newThisWeekList.map(eachNewThisWeekList => (
              <NewThisWeek
                newThisWeekList={eachNewThisWeekList}
                key={eachNewThisWeekList.id}
              />
            ))}
          </ul>
          <ul className="filters-container">
            <div className="left-filters-side">
              {filterCategoryList.map(each => (
                <Filters filterList={each} key={each.id} />
              ))}
            </div>
            <div class="verticle-line"></div>
            <div className="left-filters-side right-side-filter">
              {professionWiseFilters.map(each => (
                <ProfessionFilters professionNames={each} key={each.id} />
              ))}
            </div>
          </ul>
          <h1 className="plan-a-trip-heading">
            Plan a trip with help from local Hosts around the world
          </h1>
          <ul className="filters-container plan-a-trips-container">
            {tripAPlanList.map(each => (
              <PlanATrip list={each} key={each.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default Home
