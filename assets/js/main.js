function updateProfileData(profileData) {
    const photo = document.getElementById('profile.photo')
    const name = document.getElementById('profile.name')
    const job = document.getElementById('profile.job')
    const location = document.getElementById('profile.location')
    const phone = document.getElementById('profile.phone')
    const email = document.getElementById('profile.email')

    photo.src = profileData.photo
    photo.alt = profileData.name
    name.innerText = profileData.name
    job.innerText = profileData.job
    location.innerText = profileData.location
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')

    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateProjects(profileData) {
    const projects = document.getElementById('profile.portfolio')
    projects.innerHTML = profileData.portfolio.map(project => `<li><h3 class="title github">${project.name}</h3><a href="${project.url}" target="_blank">${project.url}</a></li>`).join('')
}

function updateExperiences(profileData) {
    const experiences = document.getElementById('profile.professionalExperience')
    experiences.innerHTML = profileData.professionalExperience.map(experiencia => `<li><h3 class="title">${experiencia.name}</h3><p class="period">${experiencia.period}</p><p>${experiencia.description}</p></li>`).join('')
}

(async () => {
    const profileData = await fetchProfileData()
    updateProfileData(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updateProjects(profileData)
    updateExperiences(profileData)
})()