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
  .then((res) => res.json())
  .then((data) => {
    const res = data.users;

    alluser.innerHTML = res
      .slice(0, 25) // show only first 25 if you need
      .map((value) => {
        return `
        <div class="eachProduct">
          <img src="${value.image}" alt="User Image">
          <p><b>First Name:</b> ${value.firstName}</p>
          <p><b>Last Name:</b> ${value.lastName}</p>
          <p><b>Role:</b> ${value.role}</p>
          <p><b>Sex:</b> ${value.gender}</p>
          <p><b>Phone Number:</b> ${value.phone}</p>
          <p><b>SSN:</b> ${value.ssn}</p>
        </div>`;
      })
      .join("");
  });
