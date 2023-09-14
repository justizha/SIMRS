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
    button.addEventListener('click', () => {
        content.classList.toggle('hidden');
    });

    document.addEventListener('click', (event) => {
        if (!button.contains(event.target) && !content.contains(event.target)) {
        content.classList.add('hidden');
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









