const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {

    tab.addEventListener("click", function() {

        // if(tabs.classList.contains(".selected")) {
        //     return;
        // };

        selectTab(tab);

        showInformationOfTab(tab);
    })
})

function selectTab(tab) {

    const selectTab = document.querySelector(".tab.selected");
    console.log(selectTab);

    selectTab.classList.remove("selected");

    tab.classList.add("selected");
}

function showInformationOfTab(tab) {

    const informationSelected = document.querySelector(".information.selected");
        
    informationSelected.classList.remove("selected");

    const idOfElementInformationOfTabs = `information-${tab.id}`;

    console.log(idOfElementInformationOfTabs);

    const informationToBeShow = document.getElementById(idOfElementInformationOfTabs);

    informationToBeShow.classList.add("selected");
}