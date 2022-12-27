const Data = require("../model/Booking_Model.js");
const fetch = require("node-fetch");

exports.firstRoute = async (req, res, next) => {
  const month = req.body.month.toLowerCase();
  const array = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  var monthInNumber;

  array.forEach((e, i) => {
    if (month === e) {
      monthInNumber = i + 1;
    }
  });

  const data = await Data.find();

  var price = 0;
  var sold = 0;
  var notSold = 0;

  data.forEach((element) => {
    var dateString = element.dateOfSale.toISOString().slice(5, 7);
    if (dateString == monthInNumber) {
      price += element.price;

      if (element.sold == true) {
        sold++;
      }
      if (element.sold == false) {
        notSold++;
      }
    }
  });

  res.status(200).json({
    success: true,
    message: `Total sale amount,  total number of sold items and total number of not sold items of ${month} is ${price} , ${sold} and ${notSold} respectively`,
  });
};

exports.secondRoute = async (req, res, next) => {
  const month = req.body.month.toLowerCase();
  const array = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  var monthInNumber;

  array.forEach((e, i) => {
    if (month === e) {
      monthInNumber = i + 1;
    }
  });

  const data = await Data.find();

  var prices = new Array(10).fill(0);

  data.forEach((element) => {
    var dateString = element.dateOfSale.toISOString().slice(5, 7);
    if (dateString == monthInNumber) {
      if (0 <= element.price && element.price <= 100) {
        prices[0]++;
      } else if (101 <= element.price && element.price <= 200) {
        prices[1]++;
      } else if (201 <= element.price && element.price <= 300) {
        prices[2]++;
      } else if (301 <= element.price && element.price <= 400) {
        prices[3]++;
      } else if (401 <= element.price && element.price <= 500) {
        prices[4]++;
      } else if (501 <= element.price && element.price <= 600) {
        prices[5]++;
      } else if (601 <= element.price && element.price <= 700) {
        prices[6]++;
      } else if (701 <= element.price && element.price <= 800) {
        prices[7]++;
      } else if (801 <= element.price && element.price <= 900) {
        prices[8]++;
      } else if (901 <= element.price) {
        prices[9]++;
      }
    }
  });

  res.status(200).json({
    success: true,
    message: `0 - 100 => ${prices[0]} , 101 - 200 => ${prices[1]} , 201 - 300 => ${prices[2]} , 301 - 400 => ${prices[3]} , 401 - 500 => ${prices[4]} , 501 - 600 => ${prices[5]} , 601 - 700 => ${prices[6]} , 701 - 800 => ${prices[7]} , 801 - 900 => ${prices[8]} , 901 - above => ${prices[9]}`,
  });
};

exports.thirdRoute = async (req, res, next) => {
  const month = req.body.month.toLowerCase();
  const array = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  var monthInNumber;

  array.forEach((e, i) => {
    if (month === e) {
      monthInNumber = i + 1;
    }
  });

  const data = await Data.find();

  var categoryArray = [];

  data.forEach((element) => {
    var dateString = element.dateOfSale.toISOString().slice(5, 7);

    if (dateString == monthInNumber) {
      if (categoryArray.indexOf(element.category) == -1) {
        categoryArray.push(element.category);
      }
    }
  });

  var items = new Array(4).fill(0);

  data.forEach((element) => {
    var dateString = element.dateOfSale.toISOString().slice(5, 7);

    if (dateString == monthInNumber) {
      if (element.category == "women's clothing") {
        items[0]++;
      } else if (element.category == "electronics") {
        items[1]++;
      } else if (element.category == "jewelery") {
        items[2]++;
      } else if (element.category == "men's clothing") {
        items[3]++;
      }
    }
  });

  var result = "";

  for (let i = 0; i < categoryArray.length; i++) {
    if (categoryArray[i] == "men's clothing") {
      result += `men's clothing : ${items[3]} , `;
    } else if (categoryArray[i] == "jewelery") {
      result += `jewelery : ${items[2]} , `;
    } else if (categoryArray[i] == "electronics") {
      result += `electronics : ${items[1]} , `;
    } else if (categoryArray[i] == "women's clothing") {
      result += `women's clothing : ${items[0]} , `;
    }
  }

  res.status(200).json({
    success: true,
    message: result,
  });
};

exports.fourthRoute = async (req, res, next) => {
  const month = req.body.month.toLowerCase();

  var resu = await fetch("http://localhost:4000/first", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      month
    }),
  });

  var first = await resu.json();



  var resu = await fetch("http://localhost:4000/second", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      month
    }),
  });

  var second = await resu.json();

  

  var resu = await fetch("http://localhost:4000/third", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      month
    }),
  });

  var third = await resu.json();

  

  res.status(200).json({
    success: true,
    message1: first.message,
    message2: second.message,
    message3: third.message

  });


};
