// Create Array
let cardList = [];

let editIndex = -1;


// Add Card
function addCard() {

    let title = document.getElementById("txtTitle").value;

    let description = document.getElementById("txtDescription").value;

    if (title == "" || description == "") {

        alert("Please Fill All Fields");

    }
    else {

        let card = {
            title: title,
            description: description
        };

        cardList.push(card);

        clearFields();

        displayCards();

    }

}


// Display Cards
function displayCards() {

    let body = "";

    for (let i = 0; i < cardList.length; i++) {

        body += `

            <div class="col-md-4 mb-4">

                <div class="card shadow">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${cardList[i].title}
                        </h5>

                        <p class="card-text">
                            ${cardList[i].description}
                        </p>

                        <button class="btn btn-warning"
                            onclick="editCard(${i})">

                            Edit

                        </button>

                        <button class="btn btn-danger"
                            onclick="deleteCard(${i})">

                            Delete

                        </button>

                    </div>

                </div>

            </div>

        `;

    }

    document.getElementById("cardContainer").innerHTML = body;

}


// Edit Card
function editCard(index) {

    document.getElementById("txtTitle").value = cardList[index].title;

    document.getElementById("txtDescription").value = cardList[index].description;

    editIndex = index;

    document.getElementById("btnAdd").innerHTML = "Update Card";

    document.getElementById("btnAdd").onclick = updateCard;

}


// Update Card
function updateCard() {

    let title = document.getElementById("txtTitle").value;

    let description = document.getElementById("txtDescription").value;

    if (title == "" || description == "") {

        alert("Please Fill All Fields");

    }
    else {

        cardList[editIndex].title = title;

        cardList[editIndex].description = description;

        clearFields();

        displayCards();

        document.getElementById("btnAdd").innerHTML = "Add Card";

        document.getElementById("btnAdd").onclick = addCard;

        editIndex = -1;

    }

}


// Delete Card
function deleteCard(index) {

    cardList.splice(index, 1);

    displayCards();

}


// Clear Fields
function clearFields() {

    document.getElementById("txtTitle").value = "";

    document.getElementById("txtDescription").value = "";

}