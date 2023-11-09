import React, { useState } from "react";

function UserRegistration() {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    company: "",
    website: "",
    birthday: "",
    jobTitle: "",
    interests: "",
    about: "",
  });

  const handleInputChange = (e) => {//handleInputChange form alanlarında değişim olduğunda çağırılır.
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const addUserCard = () => {
    if (Object.values(userDetails).every((detail) => detail.trim() !== "")) {
      setUsers([...users, userDetails]);
      setUserDetails({
        name: "",
        email: "",
        address: "",
        phone: "",
        company: "",
        website: "",
        birthday: "",
        jobTitle: "",
        interests: "",
        about: "",
      });
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Registration Form</h3>
            {Object.keys(userDetails).map((key, index) => (
              <input
                key={key}
                type="text"
                className="form-control mb-2"
                name={key}
                value={userDetails[key]}
                onChange={handleInputChange}
                placeholder={`Enter ${
                  key.charAt(0).toUpperCase() + key.slice(1)
                }`}
              />
            ))}
            <button
              type="button"
              className="btn btn-primary"
              onClick={addUserCard}
            >
              Add Card
            </button>
          </div>
          <div className="col-md-6">
            <h3>User Cards</h3>
            <div className="card-container">
              {users.map((user, index) => (
                <div key={index} className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <p className="card-text">Email: {user.email}</p>
                    <p className="card-text">Address: {user.address}</p>
                    <p className="card-text">Phone: {user.phone}</p>
                    <p className="card-text">Company: {user.company}</p>
                    <p className="card-text">Website: {user.website}</p>
                    <p className="card-text">Birthday: {user.birthday}</p>
                    <p className="card-text">Job Title: {user.jobTitle}</p>
                    <p className="card-text">Interests: {user.interests}</p>
                    <p className="card-text">About: {user.about}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserRegistration;
