    //tabs
    const switchTab = (tabId) => {
        const tabLinks = document.querySelectorAll('.tab-link');
        const tabContents = document.querySelectorAll('.tab-content');

        tabContents.forEach(content => {
            content.classList.add('tab-hidden');
        });

        tabLinks.forEach(link => {
            link.classList.remove('active');
        });

        const selectedTab = document.querySelector(tabId);
        selectedTab.classList.remove('tab-hidden');

        const clickedTabLink = document.querySelector(`[href="${tabId}"]`);
        clickedTabLink.classList.add('active');
    }

    switchTab('#riwayat-pengkajian');

    document.querySelectorAll('.tab-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('href');
            switchTab(tabId);
        });
    });

    //drop-down
    const button = document.getElementById('dropdown-button');
    const content = document.getElementById('dropdown-content');
    let isOpen = false; 

    button.addEventListener('click', (event) => {
        event.stopPropagation(); 
        isOpen = !isOpen; 
        content.classList.toggle('hidden', !isOpen); 
    });

    document.addEventListener('click', (event) => {
        if (isOpen && !button.contains(event.target)) {
            event.stopPropagation(); 
        }
    });

    //content toggle
    const showSelectedContent = (contentId) => {
        const contentElements = document.querySelectorAll('[data-content]');
        contentElements.forEach(content => {
            const targetId = content.getAttribute('data-content');
            if (targetId === contentId) {
                content.classList.remove("hidden");
            } else {
                content.classList.add("hidden");
            }
        });
    }

    const buttons = document.querySelectorAll('[data-target]');
    buttons.forEach(button => {
        const targetId = button.getAttribute('data-target');
        button.addEventListener("click", function () {
            showSelectedContent(targetId);
        });
    });



    const select = document.getElementById("timeSelect");

    function addLeadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }
    for (let hour = 0; hour <= 11; hour++) {
        for (let minute = 0; minute <= 45; minute += 15) {
            const amHour = addLeadingZero(hour);
            const pmHour = addLeadingZero(hour + 12);
            const formattedMinute = addLeadingZero(minute);

            const amTime = `${amHour}:${formattedMinute} AM`;
            const pmTime = `${pmHour}:${formattedMinute} PM`;

            const amOption = document.createElement("option");
            amOption.value = amTime;
            amOption.classList.add("bg-main-gray-0")
            amOption.classList.add("text-white")
            amOption.text = amTime;
            select.appendChild(amOption);

            const pmOption = document.createElement("option");
            pmOption.classList.add("bg-main-gray-0")
            pmOption.classList.add("text-white")
            pmOption.value = pmTime;
            pmOption.text = pmTime;
            select.appendChild(pmOption);
        }
    }
    const select2 = document.getElementById("timeSelect2");

  function addLeadingZero(number) {
        return number < 10 ? `0${number}` : number;
    }
    for (let hour = 0; hour <= 11; hour++) {
        for (let minute = 0; minute <= 45; minute += 15) {
            const amHour = addLeadingZero(hour);
            const pmHour = addLeadingZero(hour + 12);
            const formattedMinute = addLeadingZero(minute);

            const amTime = `${amHour}:${formattedMinute} AM`;
            const pmTime = `${pmHour}:${formattedMinute} PM`;

            const amOption = document.createElement("option");
            amOption.value = amTime;
            amOption.classList.add("bg-main-gray-0")
            amOption.classList.add("text-white")
            amOption.text = amTime;
            select2.appendChild(amOption);

            const pmOption = document.createElement("option");
            pmOption.classList.add("bg-main-gray-0")
            pmOption.classList.add("text-white")
            pmOption.value = pmTime;
            pmOption.text = pmTime;
            select2.appendChild(pmOption);
        }
    }




