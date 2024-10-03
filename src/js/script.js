function togglePackages() {
  const packageContainer = document.querySelector(".package-container");
  const packages = document.querySelectorAll(".package");
  const title = document.querySelector(".botao-de-abrir");
  const icon = title.querySelector("i");

  packages.forEach((packageDiv) => {
    packageDiv.classList.toggle("show");
  });

  title.classList.toggle("open");

  if (packageContainer.style.maxHeight) {
    packageContainer.style.maxHeight = null;
  } else {
    packageContainer.style.maxHeight = packageContainer.scrollHeight + "px";
  }

  if (icon.classList.contains("fa-chevron-down")) {
    icon.classList.remove("fa-chevron-down");
    icon.classList.add("fa-chevron-up");
  } else {
    icon.classList.remove("fa-chevron-up");
    icon.classList.add("fa-chevron-down");
  }
}

function setActiveTab(element) {
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  element.classList.add("active");
}

function toggleInfo() {
  var bio = document.querySelector(".bio");
  var moreInfo = document.querySelector(".more-info");

  if (moreInfo.textContent === "Mais informações") {
    bio.innerHTML = `Everyone says I have the best ass on the internet, what do you think? 😏 🍑 <br /> <br />
  Bodybuilder by day 💪🏼 Spicy content creator and your little freak at night 😉 I love chatting and connecting with my fans so shoot me a message so we can have some fun 🥰 <br /> <br />
  A few of the wild things we do here: 😜 <br />
  Boy/Girl 🍆 <br />
  Lesbian 👅 <br />
  Anal 🍑 <br />
  Threesomes 🥵 <br />
  Livestreams 😍 <br />
  Daily exclusive content 😈 <br />
  Raffles and games 😇 <br />
  Giveaways 🫶🏼 <br />
  And sooo much more 😘 <br /> <br />
  Livvalittle and stay a while, you’ll be surprised how much you love it here 😍 <br />
  Each one of you are special to me and I appreciate your support 💕 
  Check out my tip menu or message me for more fun 😋 New content + chat w/ me daily! I do it all 😈✨👅🌹 <br /> <br />
  <i class="fas fa-map-marker-alt" style="color: #8a96a3"></i> Florida <a href="https://www.google.com/maps/place/Florida,+USA" target="_blank" style="color: #8a96a3;"></a> <br />
  <a href="https://fangear.vip/models/livv-fitt/" target="_blank" style="color: #8a96a3;"><i class="fas fa-link"></i> https://fangear.vip/models/livv-fitt/</a>`;

    moreInfo.textContent = "Menos informações";
  } else {
    bio.innerHTML = "Everyone says I have the best ass on the internet, wha...";
    moreInfo.textContent = "Mais informações";
  }
}
