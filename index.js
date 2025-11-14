const url = "https://dummyjson.com/users";
const fetchData = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

let alluser = document.querySelector("#allUser");

fetch(url, fetchData)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    const res = data.users;
    console.log(res);
    alluser.innerHTML = res
      .map(function (value) {
        return `
        <div class="eachProduct">
        <img src="${value.image}" alt="">
        <p><b>First Name:</b>${value.firstName}</p>
        <p><b>Role:</b>${value.role}</p>
        <p><b>Last Name:</b>${value.lastName}</p>
        <p><b>Sex:</b>${value.gender}</p>
        <p><b>Phone Number:</b>${value.phone}</p>
        <p><b>SSN:</b>${value.ssn}</p>
        </div>
        `;
      })
      .join("");
  });
