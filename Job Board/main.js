const jobs = [
    {
      title: "Software Engineer",
      image: "images/software-engineer.svg",
      details:
        "The branch of computer science that deals with the design, development, testing, and maintenance of software applications ",
      openPositions: "10",
      link: "#",
    },
  
    {
      title: "Data Scientist",
      image: "images/data-scientist.svg",
      details:
        "Data science is the study of data to extract meaningful insights for business. ",
      openPositions: "5",
      link: "#",
    },
  
    {
      title: "Project Manager",
      image: "images/project-manager.svg",
      details:
        "A project manager is a professional who organizes, plans, and executes projects while working within restraints like budgets and schedules. .",
      openPositions: "6",
      link: "#",
    },
  
    {
      title: "Product Manager",
      image: "images/product-manager.svg",
      details:
        "A product manager is the person who identifies the customer need and the larger business objectives that a product or feature will fulfill, articulates what success looks like for a product, and rallies a team to turn that vision into a reality.",
      openPositions: "7",
      link: "#",
    },
  
    {
      title: "Sales Representative",
      image: "images/sales-representative.svg",
      details:
        "Sales managers recruit, hire, and train new members of the sales staff.",
      openPositions: "5",
      link: "#",
    },
  
    {
      title: "Marketing Manager",
      image: "images/marketing-manager.svg",
      details:
        "Marketing managers organise and manage marketing campaigns to raise awareness of and generate demand for products and services. .",
      openPositions: "15",
      link: "#",
    },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "view more";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });