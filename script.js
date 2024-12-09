let speech=new SpeechSynthesisUtterance();
let voices=[];
let voiceSelect=document.querySelector("select")

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Default to the first voice

    // Clear existing options and populate the select dropdown with available voices
    voiceSelect.innerHTML = "";
    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i); // Corrected to 'new Option'
        voiceSelect.appendChild(option);
    });
};

voiceSelect.addEventListener("change",()=>{
    speech.voice=voices[voiceSelect.value]
})

document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech)
})