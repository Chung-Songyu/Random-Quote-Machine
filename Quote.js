const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: "Steve Jobs"
  },
  {
    quote: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  },
  {
    quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    quote: "People who succeed have momentum. The more they succeed, the more they want to succeed and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
    author: "Tony Robbins"
  }
];

const colours = [[250, 220, 210],[250, 250, 210],[220, 250, 210],[210, 250, 240],[210, 220, 250],[250, 210, 250],[250, 210, 220]];

const refreshPage = function() {
  let random = Math.floor(Math.random()*quotes.length);
  let random2 = Math.floor(Math.random()*colours.length);
  let randomQuote = quotes[random]["quote"];
  let randomAuthor = quotes[random]["author"];
  let randomColour = "rgba(" + colours[random2][0] + ", " + colours[random2][1] + ", " + colours[random2][2] + ", 1)";

  $("body").css({
    backgroundColor: randomColour
  });
  $(".format").css({
    color: randomColour
  });
  $("#text").text(randomQuote);
  $("#author").text("- " + randomAuthor);

  $("body").animate({
    backgroundColor: randomColour
  }, 800, "linear", function() {
    $("body").animate({
      opacity: 1,
      backgroundColor: randomColour
    });
  });
  $("#text-area").animate({
    opacity: 0
  }, 0, "linear", function() {
    $("#text-area").animate({
      opacity: 1
    }, 1000, "linear");
  });
  $("#author").animate({
    opacity: 0
  }, 0, "linear", function() {
    $("#author").animate({
      opacity: 1
    }, 1000, "linear");
  });

  $("#tweet-quote").css({
    fontSize: "40px",
    backgroundColor: "rgba(30, 30, 30, 1)",
    color: randomColour,
    justifySelf: "start"
  });
  $("#tweet-quote").hover(function() {
    $(this).css({
      color: "white"
    });
  }, function() {
    $(this).css({
      color: randomColour
    });
  });
  $("#tweet-quote").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + "'" + randomQuote + "' " + randomAuthor);

  $("#new-quote").css({
    fontSize: "1rem",
    margin: "5px 0px 5px 0px",
    width: "6rem",
    minWidth: "40px",
    justifySelf: "end",
    backgroundColor: randomColour,
    color: "rgba(30, 30, 30, 1)",
    borderRadius: "5px",
    border: "1px black solid",
    cursor: "pointer"
  });
  $("#new-quote").hover(function() {
    $(this).css({
      backgroundColor: "white"
    });
  }, function() {
    $(this).css({
      backgroundColor: randomColour
    });
  });
};

$(document).ready(function() {
  refreshPage();

  $("body").css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    minHeight: "550px"
  });

  $("#quote-box").css({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(30, 30, 30, 1)",
    justifyContent: "center",
    textAlign: "center",
    minWidth: "250px",
    maxWidth: "30%",
    borderRadius: "10px",
    padding: "20px 50px 20px 50px"
  });

  $("#text-area").css({
    fontSize: "1.5rem"
  });

  $("#author").css({
    fontSize: "1rem",
    textAlign: "right",
    margin: "25px 0px 25px 0px"
  });

  $(".last-row").css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr"
  });

  $("#new-quote").click(function() {
    refreshPage();
  });
});
