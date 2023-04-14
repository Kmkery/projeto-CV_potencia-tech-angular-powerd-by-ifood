const footer = document.querySelector('[data-js="footer"]')
const containers = document.querySelectorAll('[data-js="containers"]')
const [leftColumn, aboutContainer, experiencesContainer, educationContainer, projectsContainer] = containers

const getData = async () => {
    const url = "./json/data.json"

    try {
        const userData = await fetch(url)
        if (!userData.ok) {
            throw new Error('Não foi possível obter os dados')
        }
        return userData.json()
        
    } catch ({ name, message }) {
        alert(`${name}: ${message}`)
    }
}

const renderIfThereIsData = (data, sentence1, sentence2) => 
    data ? sentence1 : sentence2


const insertSpace = (index, dataArray, el1, el2) => index !== dataArray.length-1 ? el1 : el2

const renderLeftColumn = ( { user_name, user_occupation, user_local, user_email, user_phone, user_skills, user_languages } ) => {
    const emailDataContainer = `<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-indigo"></i>${user_email}</p>`
    const phoneDataContainer = `<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-indigo"></i>${user_phone}</p>`
    
    leftColumn.innerHTML = 
        `<div class="w3-container">
            <h2>${user_name}</h2>
        </div>

        <div class="w3-container">
            <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-indigo"></i>${user_occupation}</p>
            <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-indigo"></i>${user_local}</p>
            ${renderIfThereIsData(user_email, emailDataContainer, '')}
            ${renderIfThereIsData(user_phone, phoneDataContainer, '')}
            
            <hr>

            <p class="w3-large">
                <b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-indigo"></i>Skills</b>
            </p>
            ${user_skills.reduce((acc, { skill, level }) => {
                acc += 
                    `<p>${skill}</p>
                    <div data-js="background-bar" class=" w3-light-grey w3-round-xlarge w3-small">
                        <div class="w3-container w3-center w3-round-xlarge w3-indigo" style="width:${level}%">${level}%</div>
                    </div>`
                return acc
            }, '')}
            <br>
            <hr>
            <p class="w3-large w3-text-theme">
                <b><i class="fa fa-globe fa-fw w3-margin-right w3-text-indigo"></i>Languages</b>
            </p>

            ${user_languages.reduce((acc, { language, level }) => {
                acc += 
                    `<p>${language}</p>
                    <div data-js="background-bar" class=" w3-light-grey w3-round-xlarge">
                        <div class="w3-round-xlarge w3-indigo" style="height:24px;width:${level}%"></div>
                    </div>`
                return acc
            }, '')}
            <br>
        </div>
        <br>`
}

const renderAboutInfo = aboutInfo => {
    aboutContainer.innerHTML =
        `<h2 class="w3-text-grey w3-padding-16">
            <i class="fa fa-terminal fa-fw w3-margin-right w3-xxlarge w3-text-indigo"></i>About
        </h2>
        <p>${aboutInfo}</p>
        <br>`
}

const renderExperiencesInfo = experiencesInfo => {
    experiencesContainer.innerHTML =
        `<h2 class="w3-text-grey w3-padding-16">
            <i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-indigo"></i>Experiences
        </h2>
       
        ${experiencesInfo.reduce((acc, { experience, period, experience_description }, index) => {
            const isCurrent = `<span class="w3-tag w3-indigo w3-round">Present</span>` 
            acc+= 
                `<div class="w3-container">
                    <h5 class="w3-opacity"><b>${experience}</b></h5>
                    <h6 class="w3-text-indigo"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${period.start} - ${renderIfThereIsData(period.conclusion, period.conclusion, isCurrent)}</h6>
                    <p>${experience_description}</p>
                </div>
                ${insertSpace(index, experiencesInfo, '<hr>', '<br>')}`
            return acc
        }, '')
    }`
}

const renderEducationInfo = educationInfo => {
    educationContainer.innerHTML = 
        `<h2 class="w3-text-grey w3-padding-16">
            <i class="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-indigo"></i>Education
        </h2>
        ${educationInfo.reduce((acc, { institution, period, education_description, subjects }, index) => {
            const isInProgressInfo = `<span class="w3-tag w3-indigo w3-round">In progress</span>`

            acc+=
            `<div class="w3-container">
            <h5 class="w3-opacity"><b>${institution}</b></h5>
            <h6 class="w3-text-indigo"><i class="fa fa-calendar fa-fw w3-margin-right"></i>${period.start} - ${renderIfThereIsData(period.conclusion, period.conclusion, isInProgressInfo)}
            </h6>
            <p>${education_description}</p>
            <ul>
            ${subjects.reduce((acc, { subject_link, subject_name }) => {
                            const educationLinkContainer = `<a href="${subject_link}" target="_blank">${subject_name}</a>`
                            
                            acc+= `<li>${renderIfThereIsData(subject_link, educationLinkContainer, subject_name)}</li>`
                            return acc
                        }, '')}
                    </ul>
                </div>
                ${insertSpace(index, educationInfo, '<hr>', '<br>')}`  
            return acc
        }, '')
    }`
}

const renderProjectsInfo = projectsInfo => {
    projectsContainer.innerHTML = 
        `<h2 class="w3-text-grey w3-padding-16">
            <i class="fa fa-git fa-fw w3-margin-right w3-xxlarge w3-text-indigo"></i>Projects
        </h2>
    
        ${projectsInfo.reduce((acc,  { project_icon, project_link, inProgress, project_description }, index) => {
            acc+=
                `<div class="w3-container">
                    <h6 class="w3-text-indigo">
                    <i class="${project_icon} fa-fw w3-margin-right"></i>
                    <a href="${project_link}" target="_blank">${project_link}</a> ${inProgress ? `<span class="w3-tag w3-indigo w3-round">In progress</span>` : ''}
                    </h6>
                    <p>${project_description}</p>
                </div>
                ${insertSpace(index, projectsInfo, '', '<br>')}`
            return acc
        }, '')
    }`
}

const renderFooterInfo = mediasInfo => {
    footer.innerHTML = 
        `<p>My Social Medias</p>
        ${mediasInfo.reduce((acc, { media_icon, media_link }, index) => {
            acc+= `<a href="${media_link}" target="_blank"><i class="${media_icon} w3-hover-opacity"></i></a>
            ${insertSpace(index, mediasInfo, '&nbsp', '')}`
            return acc
        }, '')}
        
        <p>Powered by <b><a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></b></p>`
}

const renderRightColumn = ({user_about, user_experiences, user_education, user_projects, user_medias }) => {
    renderAboutInfo(user_about)
    renderExperiencesInfo(user_experiences)
    renderEducationInfo(user_education)
    renderProjectsInfo(user_projects)
    renderFooterInfo(user_medias)
}

const renderData =  async () => {
    const [userInfo] =  await getData()

    renderLeftColumn(userInfo)
    renderRightColumn(userInfo)

    modeButton.addEventListener('click', changeDisplayMode)
}

renderData()

