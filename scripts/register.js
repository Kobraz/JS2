fetch("https://api.noroff.dev/api/v1//social/auth/register")
  .then((data) => {
    return data.json();
  })
  .then((objectData) => {
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
      tableData += ` <tr>
        <td><a href="details.html?id=${values.id}">${values.title}</a></td>
        <td>${values.body}</td>
        <td>${values.tags}</td>
        <td><img src="${values.media}"></td>
        <td>${values.created}</td>
        <td>${values.updated}</td>
        <td>${values._count}</td>
        </tr>`;
    });
    document.getElementById("tableBody").innerHTML = tableData;

    //const apiArray = [${values.id},${values.title}, ${values.description}, ${values.price}, ${values.category}, ${values.rating}, ${values.image}]
  });
