import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUserChecked, checkedUsers } from '../redux/reducers/users'

const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector((store) => store.usersData.users)
  const checkedData = useSelector((store) => store.usersData.selected)

  return (
    <div>
      <table className="table-auto  shadow-inner">
        <thead>
          <tr>
            <th className="w-full px-4 py-2  ">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => dispatch(allUserChecked(e.target.checked, users))}
                />
                <div className="ml-4">Name</div>
              </div>
            </th>
            <th className="w-1/4 px-4 py-2">Last name</th>
            <th className="w-1/4 px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => (
            <tr key={el.name} className="bg-gray-100 w-auto">
              <td className="border px-4 py-2">
                <div className="flex">
                  <input
                    type="checkbox"
                    onChange={(e) => dispatch(checkedUsers(e.target.checked, el))}
                  />
                  <div className="ml-4">{el.name}</div>
                </div>
              </td>
              <td className="border px-4 py-2">{el.username}</td>
              <td className="border px-4 py-2 ">{el.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5 ml-2">Checked:</div>
      <div className="  items-center  overflow-y-auto h-56 shadow-inner	">
        {checkedData.map((item) => (
          <div key={item.id} className="m-2">
            <div className=" w-auto">
              <div className="border-b-2 px-4 py-2">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Users.propTypes = {}

export default React.memo(Users)
