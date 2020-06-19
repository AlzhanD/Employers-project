import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Users from './users'
import { getUsers } from '../redux/reducers/users'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <div>
      <div className="flex justify-between px-5 content-center bg-gray-100 items-center border-b-2 ">
        <div className="">Employers</div>
        <div>
          <img
            className="  h-20 w-20 "
            src="https://i.ibb.co/rtkMxKr/149-1497142-30-grizzly-bear-logo-png.jpg"
            alt="Human"
          />
        </div>{' '}
        <div>
          <img
            className=" rounded-full h-8 w-8 "
            src="https://masonshall1785.org/wp-content/uploads/2016/03/no-profile-img-240x300.gif"
            alt="Human"
          />
        </div>
      </div>
      <div className="container mx-auto">
        <Users />
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
