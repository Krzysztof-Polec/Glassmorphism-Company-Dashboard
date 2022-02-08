const devAccount = document.querySelector('.wrapperContent');
const dashboardPanel = document.querySelector('.rightPanel');
const employeesPanel = document.querySelector('.employeesWrapper');
const jobOffersPanel = document.querySelector('.jobOffertsWrapper');
const candidatesPanel = document.querySelector('.candidatesWrapper');


const userAccount = document.querySelector('.userWrapperContent');
const userDashboardPanel = document.querySelector('.userRightPanel');
const userJobOffersPanel = document.querySelector('.userJobOffertsWrapper');



// CHANGING PANEL //



function goTo(e){
    const actionObj = e.target;

    const mainMenuBtn = document.querySelector('.mainMenu');
    const employeesBtn= document.querySelector('.employees');
    const jobOffertsBtn = document.querySelector('.jobOfferts');
    const candidatesBtn = document.querySelector('.candidates');
    const userMainMenuBtn = document.querySelector('.userMainMenu');
    const userjobOffertsBtn = document.querySelector('.userJobOfferts');
 
    if(actionObj.classList.contains('mainMenu')){
        dashboardPanel.style.setProperty('display', 'flex');
        employeesPanel.style.setProperty('display', 'none');
        jobOffersPanel.style.setProperty('display', 'none');
        candidatesPanel.style.setProperty('display', 'none');
        addingJobScreen.style.setProperty('display', 'none');
        
        mainMenuBtn.style.setProperty('background-color', '#5ba8f6');
        employeesBtn.style.setProperty('background-color', 'transparent');
        jobOffertsBtn.style.setProperty('background-color', 'transparent');
        candidatesBtn.style.setProperty('background-color', 'transparent');
    }else if(actionObj.classList.contains('employees')){
        dashboardPanel.style.setProperty('display', 'none');
        employeesPanel.style.setProperty('display', 'flex');
        jobOffersPanel.style.setProperty('display', 'none');
        candidatesPanel.style.setProperty('display', 'none');
        addingJobScreen.style.setProperty('display', 'none');

        mainMenuBtn.style.setProperty('background-color', 'transparent');
        employeesBtn.style.setProperty('background-color', '#5ba8f6');
        jobOffertsBtn.style.setProperty('background-color', 'transparent');
        candidatesBtn.style.setProperty('background-color', 'transparent');
    }else if(actionObj.classList.contains('jobOfferts')){
        dashboardPanel.style.setProperty('display', 'none');
        employeesPanel.style.setProperty('display', 'none');
        jobOffersPanel.style.setProperty('display', 'flex');
        candidatesPanel.style.setProperty('display', 'none');
        addingJobScreen.style.setProperty('display', 'none');

        mainMenuBtn.style.setProperty('background-color', 'transparent');
        employeesBtn.style.setProperty('background-color', 'transparent');
        jobOffertsBtn.style.setProperty('background-color', '#5ba8f6');
        candidatesBtn.style.setProperty('background-color', 'transparent');
    }else if(actionObj.classList.contains('candidates')){
        dashboardPanel.style.setProperty('display', 'none');
        employeesPanel.style.setProperty('display', 'none');
        jobOffersPanel.style.setProperty('display', 'none');
        candidatesPanel.style.setProperty('display', 'flex');
        addingJobScreen.style.setProperty('display', 'none');

        mainMenuBtn.style.setProperty('background-color', 'transparent');
        employeesBtn.style.setProperty('background-color', 'transparent');
        jobOffertsBtn.style.setProperty('background-color', 'transparent');
        candidatesBtn.style.setProperty('background-color', '#5ba8f6');
    }else if(actionObj.classList.contains('changeAccount')){
        devAccount.style.setProperty('display', 'none');
        addingJobScreen.style.setProperty('display', 'none');
        userAccount.style.setProperty('display', 'block');

        userDashboardPanel.style.setProperty('display', 'flex');
        userJobOffersPanel.style.setProperty('display', 'none');
        userApplyWrapper.style.setProperty('display','none');

        userMainMenuBtn.style.setProperty('background-color', '#5ba8f6');
        userjobOffertsBtn.style.setProperty('background-color', 'transparent');
    }else if(actionObj.classList.contains('userMainMenu')){
        userDashboardPanel.style.setProperty('display', 'flex');
        userJobOffersPanel.style.setProperty('display', 'none');
        userApplyWrapper.style.setProperty('display','none');
        
        userMainMenuBtn.style.setProperty('background-color', '#5ba8f6');
        userjobOffertsBtn.style.setProperty('background-color', 'transparent');
    }else if(actionObj.classList.contains('userJobOfferts')){
        userDashboardPanel.style.setProperty('display', 'none');
        userJobOffersPanel.style.setProperty('display', 'flex');
        userApplyWrapper.style.setProperty('display','none');

        userMainMenuBtn.style.setProperty('background-color', 'transparent');
        userjobOffertsBtn.style.setProperty('background-color', '#5ba8f6');
    }else if(actionObj.classList.contains('userChangeAccount')){
        devAccount.style.setProperty('display', 'block');
        userAccount.style.setProperty('display', 'none');

        dashboardPanel.style.setProperty('display', 'flex');
        employeesPanel.style.setProperty('display', 'none');
        jobOffersPanel.style.setProperty('display', 'none');
        candidatesPanel.style.setProperty('display', 'none');

        mainMenuBtn.style.setProperty('background-color', '#5ba8f6');
        employeesBtn.style.setProperty('background-color', 'transparent');
        jobOffertsBtn.style.setProperty('background-color', 'transparent');
        candidatesBtn.style.setProperty('background-color', 'transparent');
        userMainMenuBtn.style.setProperty('background-color', '#5ba8f6');
        userjobOffertsBtn.style.setProperty('background-color', 'transparent');
    }
}

const goToMainMenu = document.querySelectorAll('.mainMenu');
goToMainMenu.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        goTo(event);
    });
});

const goToEmployees = document.querySelectorAll('.employees');
goToEmployees.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        goTo(event);
    });
});

const goToJobOfferts = document.querySelectorAll('.jobOfferts');
goToJobOfferts.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        goTo(event);
    });
});

const goToCandidates = document.querySelectorAll('.candidates');
goToCandidates.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        goTo(event);
    });
});

const goToChangeAccount = document.querySelectorAll('.changeAccount');
goToChangeAccount.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        goTo(event);
    });
});

const goToUserMainMenu = document.querySelectorAll('.userMainMenu');
goToUserMainMenu.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        goTo(event);
    });
});

const goToUserJobOfferts = document.querySelectorAll('.userJobOfferts');
goToUserJobOfferts.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        goTo(event);
    });
});

const goToUserChangeAccount = document.querySelectorAll('.userChangeAccount');
goToUserChangeAccount.forEach(function(elem) {
    elem.addEventListener('click', (event) => {
        goTo(event);
    });
});



// ADDING JOB //



const addJob = document.querySelector('.addJob');
const addingJobScreen = document.querySelector('.addJobOffertsWrapper');
const userApplyWrapper = document.querySelector('.userApplyWrapper');

addJob.addEventListener('click', function(){
    jobOffersPanel.style.setProperty('display','none');
    addingJobScreen.style.setProperty('display', 'flex');
});

const closeAddingJobScreen = document.querySelector('.closeAddingJob');

closeAddingJobScreen.addEventListener('click', function(){
    jobOffersPanel.style.setProperty('display','flex');
    addingJobScreen.style.setProperty('display', 'none');
});

const acceptBtn = document.querySelector('#acceptBtn');
const JobOffertsContent = document.querySelector('.jobOffertsContent');
const userJobOffertsContent = document.querySelector('.userJobOffertsContent');
let seatsCounter = 0;
let jobCounter = 0;
let insuranceCounter = 0;
let salaryCounter = 0;
let acceptedCandidates = 0;

const userSeatsP = document.querySelector('.userSeatsP');
const userJobsP = document.querySelector('.userJobsP');
const seatsP = document.querySelector('.seatP');
const jobsP = document.querySelector('.jobsP');
const addJobError = document.querySelector('.addJobEroor');
const applyError = document.querySelector('.userApplyError');

acceptBtn.addEventListener('click', function(){
    const jobName = document.querySelector('#jobInput').value;
    const positonType = document.querySelector('#selectPosition');
    const positionSec = positonType.options[positonType.selectedIndex].textContent;
    const seatInput = document.querySelector('.seatInput').value;
    
    if(jobName.length != 0 && seatInput > 0){
        const newJob = document.createElement('div');
        const newJobName = document.createElement('p');
        const newJobPositon = document.createElement('span');
        const userNewJob = document.createElement('div');
        const userNewJobContent = document.createElement('div');
        const userApplyBtnWrapper = document.createElement('div');
        const userNewJobName = document.createElement('p');
        const userNewJobPositon = document.createElement('span');
        const userJobSlotsWrapper = document.createElement('p');
        const userJobSlots = document.createElement('span');
        const userApplyBtn = document.createElement('img');
        userApplyBtn.src = "icons/apply.svg";
        userApplyBtn.classList.add('userApplyBtn');

        newJobName.textContent = jobName;
        newJobPositon.textContent = positionSec;
        newJob.appendChild(newJobName);
        newJob.appendChild(newJobPositon);
        JobOffertsContent.appendChild(newJob);
        
        userNewJobName.textContent = jobName;
        userNewJobPositon.textContent = positionSec;
        userJobSlots.textContent = seatInput;
        userJobSlotsWrapper.textContent = "Dostępne miejsca: ";
        userJobSlotsWrapper.appendChild(userJobSlots);
        userNewJobContent.appendChild(userNewJobName);
        userNewJobContent.appendChild(userNewJobPositon);
        userNewJobContent.appendChild(userJobSlotsWrapper);
        userNewJob.appendChild(userNewJobContent);
        userApplyBtnWrapper.appendChild(userApplyBtn);
        userNewJob.appendChild(userApplyBtnWrapper);
        userJobOffertsContent.appendChild(userNewJob);

        userApplyBtn.addEventListener('click', function(e){
            const actionObj = e.target;
            
            userJobOffersPanel.style.setProperty('display','none');
            userApplyWrapper.style.setProperty('display','flex');

            const userSelectedJob = actionObj.parentElement.previousSibling.firstChild.textContent;
            const userSelectedJobP = document.querySelector('.userSelectedJob');
            const userSelectedPosition = actionObj.parentElement.previousSibling.lastChild.previousSibling.textContent;
            const userSelectedPositionP = document.querySelector('.userSelectedPosition');
            const userSalary = document.querySelector('.userSalary');
            userSalary.style.setProperty('font-weight','bold');

            userSelectedJobP.textContent = userSelectedJob;
            userSelectedJobP.style.setProperty('font-weight','bold');

            userSelectedPositionP.textContent = userSelectedPosition;
            userSelectedPositionP.style.setProperty('font-weight','bold');

            if(userSelectedPosition == 'Programista Web'){
                userSalary.textContent = "3000";
            }else if(userSelectedPosition == 'UI/UX Designer'){
                userSalary.textContent = "2550";
            }else if(userSelectedPosition == 'Programista Python'){
                userSalary.textContent = "4325";
            }else if(userSelectedPosition == 'Programista Flutter'){
                userSalary.textContent = "3785";
            }

            if(actionObj.parentElement.previousSibling.lastChild.lastChild.textContent == 1){
                actionObj.parentElement.previousSibling.lastChild.lastChild.textContent -= 1;
                seatsCounter -= 1;
                jobsP.textContent = jobCounter;
                userJobsP.textContent = jobCounter;
                seatsP.textContent = seatsCounter;
                userSeatsP.textContent = seatsCounter;
                actionObj.parentElement.textContent = "Brak Miejsc";
            }else if(actionObj.parentElement.previousSibling.lastChild.lastChild.textContent == 0){
    
            }else{
                actionObj.parentElement.previousSibling.lastChild.lastChild.textContent -= 1;
                seatsCounter -= 1;
                jobsP.textContent = jobCounter;
                userJobsP.textContent = jobCounter;
                seatsP.textContent = seatsCounter;
                userSeatsP.textContent = seatsCounter;
            }
        });

        seatsCounter += parseInt(seatInput);
        seatsP.textContent = seatsCounter;
        userSeatsP.textContent = seatsCounter;
        jobCounter += 1;
        jobsP.textContent = jobCounter;
        userJobsP.textContent = jobCounter;

        if(positionSec == 'Programista Web'){
            const img = document.createElement('img');
            img.src = "icons/developer.svg";
            newJobPositon.before(img);

            const userImg = document.createElement('img');
            userImg.src = "icons/developer.svg";
            userNewJobPositon.before(userImg);
        }else if(positionSec == 'UI/UX Designer'){
            const img = document.createElement('img');
            img.src = 'icons/UI_UX Designer.svg';
            newJobPositon.before(img);

            const userImg = document.createElement('img');
            userImg.src = "icons/UI_UX Designer.svg";
            userNewJobPositon.before(userImg);
        }else if(positionSec == 'Programista Python'){
            const img = document.createElement('img');
            img.src = 'icons/python developer.svg';
            newJobPositon.before(img);

            const userImg = document.createElement('img');
            userImg.src = "icons/python developer.svg";
            userNewJobPositon.before(userImg);
        }else if(positionSec == 'Programista Flutter'){
            const img = document.createElement('img');
            img.src = 'icons/flutter developer.svg';
            newJobPositon.before(img);

            const userImg = document.createElement('img');
            userImg.src = "icons/flutter developer.svg";
            userNewJobPositon.before(userImg);
        }
        
        
        jobOffersPanel.style.setProperty('display','flex');
        addingJobScreen.style.setProperty('display', 'none');
        addJobError.style.setProperty('display','none');
    }else{
        addJobError.style.setProperty('display','flex');
    }
});



const userCloseApplyPanel = document.querySelector('.userCloseApplyPanel');

userCloseApplyPanel.addEventListener('click', function(){
    userJobOffersPanel.style.setProperty('display','flex');
    userApplyWrapper.style.setProperty('display', 'none');
});

const userAcceptBtn = document.querySelector('#userAcceptBtn');

userAcceptBtn.addEventListener('click', function(e){
    const actionObj = e.target;
    
    const userName = document.querySelector('.userName');
    const userSurname = document.querySelector('.userSurname');
    const userInsurance = document.querySelector('.userInsurance');

    const candidatesPanelContent = document.querySelector('.candidatesContent');

    const userSelectedJobSalery = actionObj.parentElement.firstChild.nextSibling.lastChild.previousSibling.firstChild.nextSibling.lastChild.textContent;
    const userSelectedJobPosition = actionObj.parentElement.firstChild.nextSibling.lastChild.previousSibling.previousSibling.previousSibling.firstChild.nextSibling.lastChild.textContent;
    const userSelectedJobName = actionObj.parentElement.firstChild.nextSibling.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.firstChild.nextSibling.lastChild.textContent;

    if(userName.value != 0 && userSurname.value != 0){
        const newCandidate = document.createElement('div');
        const newCandidateContent = document.createElement('div');
        const acceptNewCandidate = document.createElement('div');
        const newCandidateName = document.createElement('p');
        newCandidateName.textContent = userName.value + " " + userSurname.value;
        const newCandidateJob = document.createElement('p');
        const newCandidateInsurance = document.createElement('p');
        newCandidateJob.textContent = userSelectedJobName;
        const newCandidatePosition = document.createElement('p');
        newCandidatePosition.textContent = userSelectedJobPosition;
        const newCandidateSalary = document.createElement('p');
        const newCandidateSalaryContent = document.createElement('span');
        newCandidateSalary.textContent = "Średnia stawka w złotych: ";
        newCandidateSalaryContent.textContent = userSelectedJobSalery;
        newCandidateSalary.appendChild(newCandidateSalaryContent);
        const newCandidateAccept = document.createElement('img');
        newCandidateAccept.src = "icons/accept icon.svg";
        const newCandidateReject = document.createElement('img');
        newCandidateReject.src = "icons/reject icon.svg";
        newCandidateContent.appendChild(newCandidateName);
        newCandidateContent.appendChild(newCandidateJob);
        newCandidateContent.appendChild(newCandidatePosition);
        newCandidateContent.appendChild(newCandidateInsurance);
        newCandidateContent.appendChild(newCandidateSalary);
        acceptNewCandidate.appendChild(newCandidateAccept);
        acceptNewCandidate.appendChild(newCandidateReject);
        newCandidate.appendChild(newCandidateContent);
        newCandidate.appendChild(acceptNewCandidate);
        candidatesPanelContent.appendChild(newCandidate);
        
        seatsP.textContent = seatsCounter;
        userSeatsP.textContent = seatsCounter;
        
        if(userInsurance.checked){
            newCandidateInsurance.textContent = "Ubezpieczony";
        }else{
            newCandidateInsurance.textContent = "Nie Ubezpieczony";
            newCandidateInsurance.style.setProperty('color','red');
        }

        if(userSelectedJobPosition == 'Programista Web'){
            const newCandidatePositionImg = document.createElement('img');
            newCandidatePositionImg.src = "icons/developer.svg";

            newCandidatePosition.before(newCandidatePositionImg);
        }else if(userSelectedJobPosition == 'UI/UX Designer'){
            const newCandidatePositionImg = document.createElement('img');
            newCandidatePositionImg.src = "icons/UI_UX Designer.svg";

            newCandidatePosition.before(newCandidatePositionImg);
        }else if(userSelectedJobPosition == 'Programista Python'){
            const newCandidatePositionImg = document.createElement('img');
            newCandidatePositionImg.src = "icons/python developer.svg";

            newCandidatePosition.before(newCandidatePositionImg);
        }else if(userSelectedJobPosition == 'Programista Flutter'){
            const newCandidatePositionImg = document.createElement('img');
            newCandidatePositionImg.src = "icons/flutter developer.svg";

            newCandidatePosition.before(newCandidatePositionImg);
        }

        newCandidateAccept.addEventListener('click', function(e){
            const actionObj = e.target;

            const employeesContent = document.querySelector('.employeesContent');
            const acceptedCandidatesContent = document.querySelector('.acceptedCandidates');
            const insuranceContent = document.querySelector('.insurance');
            const allSalary = document.querySelector('.allSalary');
            const stat1 = document.querySelector('.stat1-content');
            const candidatesName = actionObj.parentElement.previousSibling.firstChild.textContent;
            const candidatesPosition = actionObj.parentElement.previousSibling.firstChild.nextSibling.nextSibling.nextSibling.textContent;            
            const canditatesSalery = actionObj.parentElement.previousSibling.lastChild.lastChild.textContent;
            const candidatesInsurance = actionObj.parentElement.previousSibling.lastChild.previousSibling.textContent;



            const newEmployee = document.createElement('div');
            const newEmployeeName = document.createElement('p');
            const newEmployeePosition = document.createElement('span');

            newEmployeeName.textContent = candidatesName;
            newEmployeePosition.textContent = candidatesPosition;

            newEmployee.appendChild(newEmployeeName);
            newEmployee.appendChild(newEmployeePosition);
            stat1.appendChild(newEmployee);

            if(stat1.children.length > 7){
                stat1.removeChild(stat1.lastChild);
            }

            if(candidatesInsurance == "Ubezpieczony"){
                insuranceCounter +=1;
                insuranceContent.textContent = insuranceCounter;
            }

            acceptedCandidates += 1;
            acceptedCandidatesContent.textContent = acceptedCandidates;

            salaryCounter += parseInt(canditatesSalery);
            allSalary.textContent = salaryCounter;
            
            employeesContent.appendChild(actionObj.parentElement.parentElement);

            actionObj.parentElement.remove();
        });

        newCandidateReject.addEventListener('click', function(e){
            const actionObj = e.target;

            actionObj.parentElement.parentElement.remove();
        });

        userJobOffersPanel.style.setProperty('display','flex');
        userApplyWrapper.style.setProperty('display', 'none');

        applyError.style.setProperty('display', 'none');
    }else{
        applyError.style.setProperty('display','flex');
    }
});

