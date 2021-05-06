function toggle_active(){
    var main_section = document.getElementById("main-section");
    var navigation = document.getElementById("navigation");
    main_section.classList.toggle('active');
    navigation.classList.toggle('active');
}