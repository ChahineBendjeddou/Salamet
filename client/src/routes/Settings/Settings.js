import "./Settings.css";
import { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'

export default function Settings() {
  //getting the currentUser from backend
  let [user, setUser] = useState(async () => {
    await axios.get('/getUser', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  })

  const updateUrl = `/${user._id}/update`
  const deleteUrl = `/${user._id}/delete`
  return (
    <div className="settings">
      <div className="settingsWrapper" >
        <Navbar />
        <form className="settingsForm" method="post" action={updateUrl}>
          <h1>UPDATE YOUR PROFILE </h1>
          <FaUserCircle className="user" />
          <div className="settingsPP">

            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label for='firstname'>FirstName</label>
          <input type="text" id='firstname' name='firstname' required value={user.firstname} onChange={(e) => { setUser({ ...user, firstname: e.target.value }) }} ></input>
          <label for='lastname'>LastName</label>
          <input type="text" id='lastname' name='lastname' required value={user.lastname} onChange={(e) => { setUser({ ...user, lastname: e.target.value }) }}></input>
          <label for='username'>Username</label>
          <input type="text" id='username' name='username' required value={user.username} onChange={(e) => { setUser({ ...user, username: e.target.value }) }}></input>
          <label for='email'>Email</label>
          <input type="email" id='email' name='email' required value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }}></input>
          <label for='phone'>Phone number</label>
          <input type="number" id='phone' name='phone' required value={user.phone} onChange={(e) => { setUser({ ...user, phone: e.target.value }) }}></input>
          <div className="buttons">
            <button className="btn" type="submit">
              UPDATE
            </button>
            <button className="btn">
              <a href={deleteUrl}>DELETE ACCOUNT</a>
            </button>
          </div>

        </form>
      </div>

    </div>

  );
}