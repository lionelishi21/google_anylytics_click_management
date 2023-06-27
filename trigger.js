export function buttonClickTrigger(element) {
   
    const triggerAnalytics = () => {
        alert('working')
    }
   
    element.addEventListener('click', () => triggerAnalytics())
}

export function linkClickTrigger( element ) {
}