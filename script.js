var following = document.querySelector("h5");
var flag = 0;
var follow = document.querySelector("#fo");
follow.addEventListener("click", function () {
  follow.innerHTML = "following";
  flag = 1;
  following.innerHTML = "following";
  follow.style.backgroundColor = "green";
});

var unfollow = document.querySelector("#un");
unfollow.addEventListener("click", function () {
  if (flag == 1) {
    follow.innerHTML = "Follow";
    follow.style.backgroundColor = "blue";
  }
  following.innerHTML = "unfollowed";
  unfollow.style.backgroundColor = "red";
});
