document.querySelectorAll(".sidebar-submenu").forEach((e) => {
  e.querySelector(".sidebar-menu-dropdown").onclick = (event) => {
    event.preventDefault();
    e.querySelector(".sidebar-menu-dropdown .dropdown-icon").classList.toggle(
      "active"
    );

    let dropdown_menu_content = e.querySelector(
      ".sidebar-menu-dropdown-content"
    );
    let dropdown_menu_content_lis =
      dropdown_menu_content.querySelectorAll("li");

    let active_height =
      dropdown_menu_content_lis[0].clientHeight *
      dropdown_menu_content_lis.length;
    dropdown_menu_content.classList.toggle("active");

    dropdown_menu_content.style.height =
      dropdown_menu_content.classList.contains("active")
        ? active_height + "px"
        : 0;
  };
});

// CHART PIE
let options = {
  series: [44, 55, 41, 17],
  labels: ["Cloths", "Devices", "Bags", "Watch"],
  chart: {
    type: "donut",
  },
  colors: ["#6ab04c", "#2980b9", "#f39c12", "#d35400"],
};

let category_chart = new ApexCharts(
  document.querySelector("#category-chart"),
  options
);
category_chart.render();

// CHART LINE
let customers_options = {
  series: [
    {
      name: "Store Customers",
      data: [10, 60, 12, 100, 42, 20, 30, 9, 148],
    },
    {
      name: "Online Customers",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  colors: ["#6ab04c", "#2980b9"],
  chart: {
    height: 350,
    type: "line",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
};

// SET DARK CHART

let setDarkChart = (dark) => {
  let theme = {
    theme: {
      mode: dark ? "dark" : "light",
    },
  };

  category_chart.updateOptions(theme);
  customers_chart.updateOptions(theme);
};

let customers_chart = new ApexCharts(
  document.querySelector("#customer-chart"),
  customers_options
);
customers_chart.render();

// TOGGLE DARK MODE
let toggleDarkMode = document.querySelector("#darkmode-toggle");

toggleDarkMode.onclick = (e) => {
  e.preventDefault();
  document.querySelector("body").classList.toggle("dark");
  toggleDarkMode.querySelector(".darkmode-switch").classList.toggle("active");
  setDarkChart(document.querySelector("body").classList.contains("dark"));
};

let sidebar = document.querySelector(".sidebar")
let overlay = document.querySelector(".overlay")

document.querySelector("#mobile-toggle").onclick = ()=>{
  sidebar.classList.toggle("active")
  overlay.classList.toggle("active")
}

document.querySelector("#sidebar-close").onclick = ()=>{
  sidebar.classList.toggle("active")
  overlay.classList.toggle("active")
}