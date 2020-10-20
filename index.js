var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "ebay_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
//   createProduct();
    start();
});


function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "list",
      message: "Would you like to [POST] an auction or [BID] on an auction?",
      choices: ["POST", "BID", "EXIT"]
    })
    .then(function(answer) {
      // based on their answer, either call the bid or the post functions
      if (answer.postOrBid === "POST") {
        postAuction();
      }
      else if(answer.postOrBid === "BID") {
        bidAuction();
      } else{
        connection.end();
      }
    });
}

function createProduct() {
  console.log("Inserting a new item...\n");
  var query = connection.query(
    "INSERT INTO items SET ?",
    {
      name: "toy",
      price: 3.50,
      category: "toy"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " item inserted!\n");
      
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateProduct() {
  console.log("Updating all items price...\n");
  var query = connection.query(
    "UPDATE items SET ? WHERE ?",
    [
      {
        price: 100
      },
    //   {
    //     flavor: "Rocky Road"
    //   }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " items updated!\n");
    //   Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

//   logs the actual query being run
  console.log(query.sql);
}

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products deleted!\n");
      // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

function readProducts() {
  console.log("Selecting all items...\n");
  connection.query("SELECT * FROM items", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
