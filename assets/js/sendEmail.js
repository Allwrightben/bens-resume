function sendMail(contactForm) {
    emailjs.send("gmail", "benscvemail", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "project_request": contactForm.projectsummary.value
        })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                alert("Your message has been sent successfully. I will be in touch as soon as possible. Thank you! :)");
                contactForm.reset();
            },
            function (error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}