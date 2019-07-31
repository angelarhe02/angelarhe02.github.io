// <img onmouseover="bigImg(this)" onmouseout="normalImg(this)" border="0" src="smiley.gif" alt="Smiley" width="32" height="32">

function newImg(x) {
  document.write("This is what we call 'The Tower'")

}

function normalImg(x) {
  x.style.height = "300px";
  x.style.width = "400px";
}
//
// // Java code to convert
// // text to speech
// import java.util.Locale;
// import javax.speech.Central;
// import javax.speech.synthesis.Synthesizer;
// import javax.speech.synthesis.SynthesizerModeDesc;
//
// public class TextSpeech
// {
//
//     public static void main(String[] args)
//     {
//
//         try
//         {
//             // set property as Kevin Dictionary
//             System.setProperty("freetts.voices",
//                 "com.sun.speech.freetts.en.us.cmu_us_kal.KevinVoiceDirectory");
//
//             // Register Engine
//             Central.registerEngineCentral
//                 ("com.sun.speech.freetts.jsapi.FreeTTSEngineCentral");
//
//             // Create a Synthesizer
//             Synthesizer synthesizer =
//                 Central.createSynthesizer(new SynthesizerModeDesc(Locale.US));
//
//             // Allocate synthesizer
//             synthesizer.allocate();
//
//             // Resume Synthesizer
//             synthesizer.resume();
//
//             // speaks the given text until queue is empty.
//             synthesizer.speakPlainText("GeeksforGeeks", null);
//             synthesizer.waitEngineState(Synthesizer.QUEUE_EMPTY);
//
//             // Deallocate the Synthesizer.
//             synthesizer.deallocate();
//         }
//
//         catch (Exception e)
//         {
//             e.printStackTrace();
//         }
//     }
// }
