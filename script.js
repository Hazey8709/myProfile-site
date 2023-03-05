window.onbeforeunload = () => {
    for (const form of document.getElementById("formCont")) {
        form.reset();
    }
};
