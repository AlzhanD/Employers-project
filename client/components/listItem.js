import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkedUsers } from '../redux/reducers/users'

const ListItem = (props) => {
  const [checked, setChecked] = useState(props.allChecked)
  const dispatch = useDispatch()

  useEffect(() => {
    setChecked(props.allChecked)
  }, [props.allChecked])

  return (
    <tr className="bg-gray-100 w-auto">
      <td className="border px-4 py-2">
        <div className="flex">
          <input
            type="checkbox"
            onChange={(e) => dispatch(checkedUsers(e.target.checked, props.el))}
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
          <div className="ml-4">{props.el.name}</div>
        </div>
      </td>
      <td className="border px-4 py-2">{props.el.username}</td>
      <td className="border px-4 py-2 ">{props.el.age}</td>
    </tr>
  )
}

ListItem.propTypes = {}

export default React.memo(ListItem)
