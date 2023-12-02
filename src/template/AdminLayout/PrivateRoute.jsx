import React from 'react'
import { userLocalStorage } from '../../api/localService';

export default function PrivateRoute({children}) {
  console.log(children);
  let user = userLocalStorage.get()
  if (user?.maLoaiNguoiDung == "GV") {
    return children
  }
}
