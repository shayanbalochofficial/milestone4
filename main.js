var _a;
(_a = document.getElementById('generateBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var _a, _b, _c, _d, _e;
    var picture = (_b = (_a = document.getElementById('picture')) === null || _a === void 0 ? void 0 : _a.files) === null || _b === void 0 ? void 0 : _b[0];
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var pictureURL = '';
    if (picture) {
        pictureURL = URL.createObjectURL(picture);
    }
    // Generate the resume content
    var generatedResume = "\n        <div>\n            <h2>".concat(name, "</h2>\n            <img src=\"").concat(pictureURL, "\" alt=\"Profile Picture\" width=\"100\" height=\"100\"><br>\n            <strong>Phone:</strong> ").concat(phone, "<br>\n            <strong>Email:</strong> ").concat(email, "<br>\n            <strong>Address:</strong> ").concat(address, "<br><br>\n            <strong>Skills:</strong> <div id=\"skillsList\">").concat(skills, "</div><br>\n            <button id=\"addSkillBtn\">Add More Skills</button>\n            <div id=\"additionalSkills\"></div><br>\n            <strong>Education:</strong> <div id=\"educationList\">").concat(education, "</div><br>\n            <button id=\"addEducationBtn\">Add More Education</button>\n            <div id=\"additionalEducation\"></div><br>\n            <strong>Experience:</strong> <div id=\"experienceList\">").concat(experience, "</div><br>\n            <button id=\"addExperienceBtn\">Add More Experience</button>\n            <div id=\"additionalExperience\"></div><br>\n        </div>\n    ");
    // Insert generated resume into the DOM
    document.getElementById('generatedResume').innerHTML = generatedResume;
    // Add event listeners after the DOM has been updated with the generated content
    // Event Listener for Adding More Skills
    (_c = document.getElementById('addSkillBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        var additionalSkillsDiv = document.getElementById('additionalSkills');
        var newSkillInput = document.createElement('input');
        newSkillInput.type = 'text';
        newSkillInput.placeholder = 'Additional Skill';
        additionalSkillsDiv === null || additionalSkillsDiv === void 0 ? void 0 : additionalSkillsDiv.appendChild(newSkillInput);
        // Add a listener to update the skills list when a new skill is added
        newSkillInput.addEventListener('change', function () {
            var skillsList = document.getElementById('skillsList');
            if (skillsList) {
                skillsList.innerHTML += "<br>".concat(newSkillInput.value);
            }
        });
    });
    // Event Listener for Adding More Education
    (_d = document.getElementById('addEducationBtn')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function () {
        var additionalEducationDiv = document.getElementById('additionalEducation');
        var newEducationInput = document.createElement('textarea');
        newEducationInput.placeholder = 'Additional Education';
        additionalEducationDiv === null || additionalEducationDiv === void 0 ? void 0 : additionalEducationDiv.appendChild(newEducationInput);
        // Add a listener to update the education list when a new education is added
        newEducationInput.addEventListener('change', function () {
            var educationList = document.getElementById('educationList');
            if (educationList) {
                educationList.innerHTML += "<br>".concat(newEducationInput.value);
            }
        });
    });
    // Event Listener for Adding More Experience
    (_e = document.getElementById('addExperienceBtn')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', function () {
        var additionalExperienceDiv = document.getElementById('additionalExperience');
        var newExperienceInput = document.createElement('textarea');
        newExperienceInput.placeholder = 'Additional Experience';
        additionalExperienceDiv === null || additionalExperienceDiv === void 0 ? void 0 : additionalExperienceDiv.appendChild(newExperienceInput);
        // Add a listener to update the experience list when a new experience is added
        newExperienceInput.addEventListener('change', function () {
            var experienceList = document.getElementById('experienceList');
            if (experienceList) {
                experienceList.innerHTML += "<br>".concat(newExperienceInput.value);
            }
        });
    });
});
