const responseContainer = document.getElementById("container")
const url = "https://gorest.co.in/public/v1/users"

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (let { email, id, name, status, gender } of data.data) {
      const nameHolder = document.createElement("h1")
      nameHolder.innerText = `Name: ${name}`
      responseContainer.append(nameHolder)

      const idHolder = document.createElement("p")
      idHolder.innerText = `ID: ${id}`
      responseContainer.append(idHolder)

      const emailHolder = document.createElement("h3")
      emailHolder.innerText = `Email: ${email}`
      responseContainer.append(emailHolder)

      const genderHolder = document.createElement("h3")
      genderHolder.innerText = `Gender: ${gender}`
      responseContainer.append(genderHolder)
    }
  })
