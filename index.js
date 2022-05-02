
const refs = {
    calendar: document.querySelector('.calendar'),
    month_picker: document.querySelector('.month-picker'),
    calendar_days: document.querySelector('.days'),
    clendar_header_year: document.querySelector(".year"),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('.modal-window'),
    closeBackdrop: document.querySelector('.backdrop'),
}

const  monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDay = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {
    let days_of_month = [31, getFebDay(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    refs.calendar_days.innerHTML = ''
    
    let curDate = new Date()
    refs.month_picker.innerHTML = monthName[month]
    refs.clendar_header_year.innerHTML = year

    let firs_day = new Date(month, year, 1)

    for (let i = 0; i <= days_of_month[month] + firs_day.getDay() - 1; i++) { 

        let day = document.createElement('li')

        if (i >= firs_day.getDay()) {
            day.classList.add('calendar-day')
            day.innerHTML = i - firs_day.getDay() + 1
          
      
            if (i - firs_day.getDay() + 1 === curDate.getDate() && year === curDate.getFullYear() && month === curDate.getMonth()) { 
                day.classList.add('curr-date')
            }
        }
        refs.calendar_days.appendChild(day)
    }
}

refs.month_picker.onclick = () => { 
    month_list.classList.add('show')
}

let month_list = refs.calendar.querySelector('.month-list')

monthName.forEach((e, index) => { 
    let month = document.createElement('li')
       month.classList.add('month')
    month.innerHTML = `${e}`

    month.onclick = () => { 
        month_list.classList.remove('show')
        curr_month.value = index;
        generateCalendar(curr_month.value, curr_year.value)
    }
     month_list.appendChild(month)
})


let curDate = new Date()

document.querySelector('.prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('.next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

let curr_month = { value: curDate.getMonth() }
let curr_year = { value: curDate.getFullYear() }
generateCalendar(curr_month.value, curr_year.value)


const modalWindow = () => {
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);


     document.body.addEventListener('keyup', pressKey);

    function toggleModal() {
        refs.closeBackdrop.classList.toggle('is-hidden');
    }

function pressKey(e) {
  const key = e.key;
  if (key === 'Escape') {
    toggleModal();
  }
  false;
    }
    
}

function closeModal() {
    refs.openModalBtn.removeEventListener('click', closeModal);
    refs.closeModalBtn.removeEventListener('click', closeModal);
    document.body.removeEventListener('keyup', pressKey);
}

modalWindow()
