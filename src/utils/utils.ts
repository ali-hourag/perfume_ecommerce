import toast from "react-hot-toast";

/**
 * This function toggles the div container. If it is existing it hides it and viceversa.
 * This divs are the ones that appear after clicking at the "+" icon in the footer part
 * @param divClassName name of a css class that has display property !== than one
 */
export const handleInfoClicked = (divClassName: string) => {
    const divToShow: (HTMLDivElement) = document.querySelector(`.${divClassName}`) as HTMLDivElement;
    if (divClassName !== "follow-us") divToShow.classList.toggle("info-entry-div_display-block");
    else divToShow.classList.toggle("follow-us_display");
}
//-------------------------------------------------------------------------------------------------------------
/**
 * This function handles the inputs after the button of subscribe is clicked.
 * This button is located in the bottom part of the page after clicking the 
 * NEWSLETTER part.
 * It validates the e-mail and shows messages if it is correct or incorrect
 */
export const handleSubscribeButton = () => {
    const subscribeInput: (HTMLInputElement) = document.querySelector(".newsletter-input") as HTMLInputElement;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    if (regex.test(subscribeInput.value)) {
        subscribeInput.value = "";
        toast.success("Successfully subscribed!")
    } else {
        subscribeInput.value = "";
        subscribeInput.placeholder = "email not valid"
        subscribeInput.classList.add("newsletter-input-incorrect");
        setTimeout(() => {
            subscribeInput.placeholder = "YOUR EMAIL ADDRESS"
            subscribeInput.classList.remove("newsletter-input-incorrect");
        }, 3000)
    }
}
//-------------------------------------------------------------------------------------------------------------
/**
 * This function handles the input and textarea after the button of submit question is clicked.
 * This button is located in the bottom part of the page after clicking the 
 * NEED HELP part.
 * It validates the e-mail and textarea and shows messages if it is correct or incorrect
 */
export const handleHelpButton = () => {
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    const helpTextarea: (HTMLTextAreaElement) = document.querySelector(".need-help-textarea") as HTMLTextAreaElement;
    const questionInput: (HTMLInputElement) = document.querySelector(".need-help-input") as HTMLInputElement;
    if (helpTextarea.value !== "" && regex.test(questionInput.value)) {
        helpTextarea.value = "";
        questionInput.value = "";
        toast.success("Successfully submitted!")
    } else {
        if (helpTextarea.value === "") {
            helpTextarea.placeholder = "Fill this field."
            helpTextarea.classList.add("need-help-textarea-incorrect");
            setTimeout(() => {
                helpTextarea.placeholder = "type your question"
                helpTextarea.classList.remove("need-help-textarea-incorrect");
            }, 3000)
        } else {
            questionInput.value = "";
            questionInput.placeholder = "email not valid"
            questionInput.classList.add("newsletter-input-incorrect");
            setTimeout(() => {
                questionInput.placeholder = "YOUR EMAIL ADDRESS"
                questionInput.classList.remove("newsletter-input-incorrect");
            }, 3000)
        }
    }
}