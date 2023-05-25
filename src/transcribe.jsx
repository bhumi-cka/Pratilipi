if ("webkitSpeechRecognition" in window) {

  /* var SpeechRecognition = root.SpeechRecognition ||
       root.webkitSpeechRecognition ||
       root.mozSpeechRecognition ||
       root.msSpeechRecognition ||
       root.oSpeechRecognition;*/

  /* Speech initialization */
  let speechRecognition = new webkitSpeechRecognition();
  let final_transcript = "";
  let audioToSubmit;

  /* Speech config */
  speechRecognition.continuous = true;
  speechRecognition.interimResults = true;
  speechRecognition.lang = document.querySelector("#select_dialect").value;

  // function showOrHide(prop) {
  //     document.querySelector("#status").style.display = prop;
  // }


  /* Speech start event */
  speechRecognition.onstart = () => {
      speechRecognition.lang = "en-UK";
      // showOrHide("block");
  };

  /* Speech end event */
  speechRecognition.onend = () => {
      // showOrHide("none");
      alert("Speech Recognition Ended");
  };

  /* Speech error event */
  speechRecognition.onerror = (error) => {
      // showOrHide("none");
      alert("Speech Recognition Error");
  };


  /* Speech result event */
  speechRecognition.onresult = (event) => {
      let interim_transcript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
              final_transcript += event.results[i][0].transcript + "<br />";
          } else {
              interim_transcript += event.results[i][0].transcript;
          }
      }
      document.querySelector("#final").innerHTML = final_transcript;
      document.querySelector("#interim").innerHTML = interim_transcript;
  };

  document.querySelector("#start").onclick = () => {
      speechRecognition.lang = "en-UK";
      speechRecognition.start();
  };
  document.querySelector("#stop").onclick = () => {
      speechRecognition.stop();
  };


  /* Recording code */
  let audioIN = {audio: true};
  navigator.mediaDevices.getUserMedia(audioIN)
      .then(function (mediaStreamObj) {
          let start = document.getElementById('start');
          let stop = document.getElementById('stop');
          let mediaRecorder = new MediaRecorder(mediaStreamObj);

          start.addEventListener('click', function (ev) {
              mediaRecorder.start();
          })
          stop.addEventListener('click', function (ev) {
              mediaRecorder.stop();
          });
          mediaRecorder.ondataavailable = function (ev) {
              dataArray.push(ev.data);
          }
          let dataArray = [];
          mediaRecorder.onstop = function (ev) {
              audioToSubmit = new Blob(dataArray, {'type': 'audio/wav;'})
          }
      })
      .catch(function (err) {
          alert(err.name, err.message);
      });

} else {
  alert("Speech Recognition Not Available");
}